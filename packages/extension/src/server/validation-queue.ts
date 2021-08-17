import debounce from 'lodash.debounce';
import { Connection, TextDocumentChangeEvent, TextDocuments } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';

import { info } from './console';
import { BettererValidator } from './validator';

const VALIDATE_TIMEOUT = 100;

export class BettererValidationQueue {
  private _queue = new Map<TextDocument, number>();
  private _validating: Promise<void> = Promise.resolve();
  private _validator: BettererValidator;

  constructor(connection: Connection, documents: TextDocuments<TextDocument>) {
    this._validator = new BettererValidator(connection, documents);
    this._trigger = debounce(this._trigger.bind(this), VALIDATE_TIMEOUT, { leading: true, trailing: true });
  }

  public addToQueue(event: TextDocumentChangeEvent<TextDocument>): void {
    info(`Server: Adding "${event.document.uri}" to validation queue at ${Date.now().toString()}`);
    if (!this._queue.has(event.document)) {
      this._queue.set(event.document, event.document.version);
    }
    this._trigger();
  }

  public removeFromQueue(event: TextDocumentChangeEvent<TextDocument>): void {
    info(`Server: Removing "${event.document.uri}" from validation queue at ${Date.now().toString()}`);
    this._queue.delete(event.document);
  }

  private _trigger(): void {
    void (async () => {
      info(`Server: waiting for previous validation run to finish:`);
      await this._validating;
      this._validating = this._processQueue();
      await this._validating;
    })();
  }

  private async _processQueue(): Promise<void> {
    info(`Server: Processing queue at ${Date.now().toString()}`);
    const documents = Array.from(this._queue.keys());

    this._queue = new Map();

    if (documents.length === 0) {
      info(`Server: Queue empty, nothing to do.`);
      return;
    }

    await this._validateDocuments(Array.from(documents));
  }

  private async _validateDocuments(documents: Array<TextDocument>): Promise<void> {
    documents.forEach((document) => {
      info(`Server: Validating document "${document.uri}".`);
    });
    try {
      await this._validator.validate(documents);
    } catch {
      //
    }
  }
}
