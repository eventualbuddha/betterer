"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[474],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(r),m=a,h=k["".concat(s,".").concat(m)]||k[m]||d[m]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8875:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return k}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"context",title:"Betterer Context",sidebar_label:"Betterer Context",slug:"/context"},s=void 0,p={unversionedId:"api/context",id:"api/context",isDocsHomePage:!1,title:"Betterer Context",description:"BettererContext",source:"@site/docs/api/context.md",sourceDirName:"api",slug:"/context",permalink:"/betterer/docs/context",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/context.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614393388,formattedLastUpdatedAt:"2/27/2021",frontMatter:{id:"context",title:"Betterer Context",sidebar_label:"Betterer Context",slug:"/context"},sidebar:"api",previous:{title:"Betterer Configuration",permalink:"/betterer/docs/config"},next:{title:"Betterer Reporter",permalink:"/betterer/docs/reporter"}},u=[{value:"<code>BettererContext</code>",id:"betterercontext",children:[{value:"Properties",id:"properties",children:[]}]},{value:"<code>BettererDelta</code>",id:"bettererdelta",children:[{value:"Properties",id:"properties-1",children:[]}]},{value:"<code>BettererRun</code>",id:"bettererrun",children:[{value:"Properties",id:"properties-2",children:[]},{value:"State",id:"state",children:[]}]},{value:"<code>BettererRuns</code>",id:"bettererruns",children:[]},{value:"<code>BettererRunNames</code>",id:"bettererrunnames",children:[]},{value:"<code>BettererSummary</code>",id:"betterersummary",children:[{value:"Properties",id:"properties-3",children:[]},{value:"State",id:"state-1",children:[]}]},{value:"<code>BettererSummaries</code>",id:"betterersummaries",children:[]}],d={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"betterercontext"},(0,i.kt)("inlineCode",{parentName:"h2"},"BettererContext")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"BettererContext")," represents the lifecycle of a set of tests runs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererContext = {\n  readonly config: BettererConfig;\n  readonly lifecycle: Promise<BettererSummaries>;\n};\n")),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("h4",{id:"config-bettererconfig"},(0,i.kt)("inlineCode",{parentName:"h4"},"config"),": ",(0,i.kt)("a",{parentName:"h4",href:"./config#bettererconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererConfig"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The configuration for the current context")),(0,i.kt)("h4",{id:"lifecycle-promisebetterersummaries"},(0,i.kt)("inlineCode",{parentName:"h4"},"lifecycle"),": ",(0,i.kt)("a",{parentName:"h4",href:"#betterersummaries"},(0,i.kt)("inlineCode",{parentName:"a"},"Promise<BettererSummaries>"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A promise that will resolve when the context ends.")),(0,i.kt)("h2",{id:"bettererdelta"},(0,i.kt)("inlineCode",{parentName:"h2"},"BettererDelta")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"BettererDelta")," represents the change between a test runs and its baseline. A ",(0,i.kt)("inlineCode",{parentName:"p"},"BettererRun")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"delta")," property if the test has a ",(0,i.kt)("a",{parentName:"p",href:"./betterer-test#bettererprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"progress"))," handler."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererDelta =\n  | {\n      readonly baseline: number;\n      readonly diff: number;\n      readonly result: number;\n    }\n  | {\n      readonly baseline: null;\n      readonly diff: 0;\n      readonly result: number;\n    };\n")),(0,i.kt)("h3",{id:"properties-1"},"Properties"),(0,i.kt)("h4",{id:"baseline-number--null"},(0,i.kt)("inlineCode",{parentName:"h4"},"baseline"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"number | null")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The baseline for the current test. Set when the context is created and will be constant across multiple runs. Set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," when it is a new test.")),(0,i.kt)("h4",{id:"diff-number--0"},(0,i.kt)("inlineCode",{parentName:"h4"},"diff"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"number | 0")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The diff between the current test result and the baseline. Set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," when it is a new test.")),(0,i.kt)("h4",{id:"result-number"},(0,i.kt)("inlineCode",{parentName:"h4"},"result"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"number")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The current test result.")),(0,i.kt)("h2",{id:"bettererrun"},(0,i.kt)("inlineCode",{parentName:"h2"},"BettererRun")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererRun = {\n  readonly diff: BettererDiff;\n  readonly expected: BettererResult;\n  readonly filePaths: BettererFilePaths;\n  readonly lifecycle: Promise<void>;\n  readonly name: string;\n  readonly delta: BettererDelta | null;\n  readonly result: BettererResult;\n  readonly test: BettererTestConfig;\n  readonly timestamp: number;\n  readonly isBetter: boolean;\n  readonly isComplete: boolean;\n  readonly isExpired: boolean;\n  readonly isFailed: boolean;\n  readonly isNew: boolean;\n  readonly isObsolete: boolean;\n  readonly isSame: boolean;\n  readonly isSkipped: boolean;\n  readonly isUpdated: boolean;\n  readonly isWorse: boolean;\n};\n")),(0,i.kt)("h3",{id:"properties-2"},"Properties"),(0,i.kt)("h4",{id:"diff-bettererdiff"},(0,i.kt)("inlineCode",{parentName:"h4"},"diff"),": ",(0,i.kt)("a",{parentName:"h4",href:"./betterer-test#bettererdiff"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererDiff"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The verbose diff between the current test result and the expected reuslt.")),(0,i.kt)("h4",{id:"expected-bettererresult"},(0,i.kt)("inlineCode",{parentName:"h4"},"expected"),": ",(0,i.kt)("a",{parentName:"h4",href:"./results#bettererresult"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererResult"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The expected result for this test run. Deserialised from the ",(0,i.kt)("a",{parentName:"p",href:"./results-file"},"results file"),".")),(0,i.kt)("h4",{id:"filepaths-bettererfilepaths"},(0,i.kt)("inlineCode",{parentName:"h4"},"filePaths"),": ",(0,i.kt)("a",{parentName:"h4",href:"./runner#bettererfilepaths"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererFilePaths"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of ","[",(0,i.kt)("inlineCode",{parentName:"p"},"BettererFilePaths"),"]"," that are being tested.")),(0,i.kt)("h4",{id:"lifecycle-promisevoid"},(0,i.kt)("inlineCode",{parentName:"h4"},"lifecycle"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"Promise<void>")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A promise that will resolve when the test run ends.")),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"string")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The name of the run.")),(0,i.kt)("h4",{id:"delta-bettererdelta--null"},(0,i.kt)("inlineCode",{parentName:"h4"},"delta"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererdelta"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererDelta"))," | ",(0,i.kt)("inlineCode",{parentName:"h4"},"null")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The change between a test runs and its baseline. A ",(0,i.kt)("inlineCode",{parentName:"p"},"BettererRun")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"delta")," property if the test has a ",(0,i.kt)("a",{parentName:"p",href:"./betterer-test#bettererprogress"},(0,i.kt)("inlineCode",{parentName:"a"},"progress"))," handler.")),(0,i.kt)("h4",{id:"result-bettererresult"},(0,i.kt)("inlineCode",{parentName:"h4"},"result"),": ",(0,i.kt)("a",{parentName:"h4",href:"./results#bettererresult"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererResult"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The current result for this test run. Will be serialised to the ",(0,i.kt)("a",{parentName:"p",href:"./results-file"},"results file"),".")),(0,i.kt)("h4",{id:"test-betterertestconfig"},(0,i.kt)("inlineCode",{parentName:"h4"},"test"),": ",(0,i.kt)("a",{parentName:"h4",href:"./betterer-test#betterertestconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererTestConfig"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The configuration for this test.")),(0,i.kt)("h4",{id:"timestamp-number"},(0,i.kt)("inlineCode",{parentName:"h4"},"timestamp"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"number")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The time that the test started. Used for checking against a ",(0,i.kt)("a",{parentName:"p",href:"./tests#test-deadline"},"test deadline"),".")),(0,i.kt)("h3",{id:"state"},"State"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isBetter")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," is better than ",(0,i.kt)("inlineCode",{parentName:"li"},"expected"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isComplete"),"- ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," has met the goal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isExpired")," - the test has passed its deadline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFailed")," - the test threw an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isNew")," - the test was run for the first time."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isObsolete")," - the test is not run, but there is a saved expected result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isSame")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," is the same as ",(0,i.kt)("inlineCode",{parentName:"li"},"expected")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isSkipped")," - the test was skipped"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isUpdated")," - the test result was updated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isWorse")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," is worse than `expected")),(0,i.kt)("h2",{id:"bettererruns"},(0,i.kt)("inlineCode",{parentName:"h2"},"BettererRuns")),(0,i.kt)("p",null,"A list of ",(0,i.kt)("a",{parentName:"p",href:"#bettererrun"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRun")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export declare type BettererRuns = ReadonlyArray<BettererRun>;\n")),(0,i.kt)("h2",{id:"bettererrunnames"},(0,i.kt)("inlineCode",{parentName:"h2"},"BettererRunNames")),(0,i.kt)("p",null,"A list of run names."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererRunNames = Array<string>;\n")),(0,i.kt)("h2",{id:"betterersummary"},(0,i.kt)("inlineCode",{parentName:"h2"},"BettererSummary")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererSummary = {\n  readonly runs: BettererRuns;\n  readonly result: string;\n  readonly expected: string | null;\n  readonly unexpectedDiff: boolean;\n  readonly better: BettererRuns;\n  readonly completed: BettererRuns;\n  readonly expired: BettererRuns;\n  readonly failed: BettererRuns;\n  readonly new: BettererRuns;\n  readonly obsolete: BettererRuns;\n  readonly ran: BettererRuns;\n  readonly same: BettererRuns;\n  readonly skipped: BettererRuns;\n  readonly updated: BettererRuns;\n  readonly worse: BettererRuns;\n};\n")),(0,i.kt)("h3",{id:"properties-3"},"Properties"),(0,i.kt)("h4",{id:"runs-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"runs"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of all runs.")),(0,i.kt)("h4",{id:"result-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"result"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"string")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The serialised run results.")),(0,i.kt)("h4",{id:"expected-string--null"},(0,i.kt)("inlineCode",{parentName:"h4"},"expected"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"string | null")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The serialised expected results. Will be ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if it is the first time running ",(0,i.kt)("strong",{parentName:"p"},"Betterer"),".")),(0,i.kt)("h4",{id:"unexpecteddiff-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"unexpectedDiff"),": ",(0,i.kt)("inlineCode",{parentName:"h4"},"boolean")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if running in ",(0,i.kt)("a",{parentName:"p",href:"./running-betterer#ci-mode-run-your-tests-and-throw-on-changes"},"CI mode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," is not equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"expected"))),(0,i.kt)("h3",{id:"state-1"},"State"),(0,i.kt)("h4",{id:"better-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"better"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that got better.")),(0,i.kt)("h4",{id:"completed-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"completed"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that met their goals.")),(0,i.kt)("h4",{id:"expired-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"expired"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that passed their deadlines.")),(0,i.kt)("h4",{id:"failed-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"failed"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that threw errors.")),(0,i.kt)("h4",{id:"new-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"new"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that ran for the first time.")),(0,i.kt)("h4",{id:"obsolete-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"obsolete"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that weren't run but still have a saved result.")),(0,i.kt)("h4",{id:"ran-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"ran"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that were run (not failed, obsolete, or skipped).")),(0,i.kt)("h4",{id:"same-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"same"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that stayed the same.")),(0,i.kt)("h4",{id:"skipped-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"skipped"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that were skipped.")),(0,i.kt)("h4",{id:"updated-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"updated"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that got worse, but were force updated.")),(0,i.kt)("h4",{id:"worse-bettererruns"},(0,i.kt)("inlineCode",{parentName:"h4"},"worse"),": ",(0,i.kt)("a",{parentName:"h4",href:"#bettererruns"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererRuns"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The list of runs that got worse.")),(0,i.kt)("h2",{id:"betterersummaries"},(0,i.kt)("inlineCode",{parentName:"h2"},"BettererSummaries")),(0,i.kt)("p",null,"A list of ",(0,i.kt)("a",{parentName:"p",href:"#betterersummary"},(0,i.kt)("inlineCode",{parentName:"a"},"BettererSummary")),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererSummaries = Array<BettererSummary>;\n")))}k.isMDXComponent=!0}}]);