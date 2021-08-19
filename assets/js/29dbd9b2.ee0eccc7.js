"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[955],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9107:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"reporter",title:"Betterer Reporter",sidebar_label:"Betterer Reporter",slug:"/reporter"},p=void 0,d={unversionedId:"api/reporter",id:"api/reporter",isDocsHomePage:!1,title:"Betterer Reporter",description:"BettererReporter",source:"@site/docs/api/reporter.md",sourceDirName:"api",slug:"/reporter",permalink:"/betterer/docs/reporter",editUrl:"https://github.com/phenomnomnominal/betterer/edit/master/website/docs/api/reporter.md",version:"current",lastUpdatedBy:"Craig Spence",lastUpdatedAt:1614393388,formattedLastUpdatedAt:"2/27/2021",frontMatter:{id:"reporter",title:"Betterer Reporter",sidebar_label:"Betterer Reporter",slug:"/reporter"},sidebar:"api",previous:{title:"Betterer Context",permalink:"/betterer/docs/context"},next:{title:"Betterer Result",permalink:"/betterer/docs/results"}},u=[{value:"<code>BettererReporter</code>",id:"bettererreporter",children:[]},{value:"Config hooks",id:"config-hooks",children:[{value:"<code>configError()</code>",id:"configerror",children:[]}]},{value:"Context hooks",id:"context-hooks",children:[{value:"<code>contextStart()</code>",id:"contextstart",children:[]},{value:"<code>contextEnd()</code>",id:"contextend",children:[]},{value:"<code>contextError()</code>",id:"contexterror",children:[]}]},{value:"Runs hooks",id:"runs-hooks",children:[{value:"<code>runsStart()</code>",id:"runsstart",children:[]},{value:"<code>runsEnd()</code>",id:"runsend",children:[]}]},{value:"Run hooks",id:"run-hooks",children:[{value:"<code>runStart()</code>",id:"runstart",children:[]},{value:"<code>runEnd()</code>",id:"runend",children:[]},{value:"<code>runError()</code>",id:"runerror",children:[]}]}],s={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bettererreporter"},(0,o.kt)("inlineCode",{parentName:"h2"},"BettererReporter")),(0,o.kt)("p",null,"The interface to the ",(0,o.kt)("strong",{parentName:"p"},"Betterer")," ",(0,o.kt)("a",{parentName:"p",href:"./reporters"},"reporter system")," for hooking into the test runner."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type BettererReporter = {\n  configError?(config: unknown, error: BettererError): Promise<void> | void;\n  contextStart?(context: BettererContext, lifecycle: Promise<BettererSummaries>): Promise<void> | void;\n  contextEnd?(context: BettererContext, summaries: BettererSummaries): Promise<void> | void;\n  contextError?(context: BettererContext, error: BettererError): Promise<void> | void;\n  runsStart?(runs: BettererRuns, filePaths: BettererFilePaths): Promise<void> | void;\n  runsEnd?(summary: BettererSummary, filePaths: BettererFilePaths): Promise<void> | void;\n  runStart?(run: BettererRun, lifecycle: Promise<void>): Promise<void> | void;\n  runEnd?(run: BettererRun): Promise<void> | void;\n  runError?(run: BettererRun, error: BettererError): Promise<void> | void;\n};\n")),(0,o.kt)("h2",{id:"config-hooks"},"Config hooks"),(0,o.kt)("h3",{id:"configerror"},(0,o.kt)("inlineCode",{parentName:"h3"},"configError()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"configError()")," hook is called when there is an error while validating and instantiating a ",(0,o.kt)("a",{parentName:"p",href:"./config#bettererconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererConfig")),"."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config"),": ","[",(0,o.kt)("inlineCode",{parentName:"li"},"unknown"),"]"," - The invalid config object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": ",(0,o.kt)("a",{parentName:"li",href:"./errors#betterererror"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererError"))," - The error thrown while validating and instantiating the ",(0,o.kt)("a",{parentName:"li",href:"./config#bettererconfig"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererConfig")),".")),(0,o.kt)("p",null,"Returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void> | void")),(0,o.kt)("h2",{id:"context-hooks"},"Context hooks"),(0,o.kt)("h3",{id:"contextstart"},(0,o.kt)("inlineCode",{parentName:"h3"},"contextStart()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"contextStart()")," hook is called when a ",(0,o.kt)("a",{parentName:"p",href:"./context#betterercontext"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererContext"))," starts. The ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycle")," promise will resolve when the context ends or reject when the context errors, so it can be used instead of the ",(0,o.kt)("a",{parentName:"p",href:"#contextend"},(0,o.kt)("inlineCode",{parentName:"a"},"contextEnd()"))," and ",(0,o.kt)("a",{parentName:"p",href:"#contexterror"},(0,o.kt)("inlineCode",{parentName:"a"},"contextError()"))," hooks."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#betterercontext"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererContext"))," - The current test context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lifecycle"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#betterersummaries"},(0,o.kt)("inlineCode",{parentName:"a"},"Promise<BettererSummaries>"))," - A promise that will resolve when the context ends or reject when the context errors.")),(0,o.kt)("p",null,"Returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void> | void")),(0,o.kt)("h3",{id:"contextend"},(0,o.kt)("inlineCode",{parentName:"h3"},"contextEnd()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"contextEnd()")," hook is called when a ",(0,o.kt)("a",{parentName:"p",href:"./context#betterercontext"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererContext"))," ends."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#betterercontext"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererContext"))," - The current test context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"summaries"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#betterersummaries"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererSummaries"))," - A list of ",(0,o.kt)("a",{parentName:"li",href:"./context#betterersummaries"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererSummaries")),", one for each run completed by the context.")),(0,o.kt)("p",null,"Returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void> | void")),(0,o.kt)("h3",{id:"contexterror"},(0,o.kt)("inlineCode",{parentName:"h3"},"contextError()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"contextError()")," hook is called when there is an error running a context."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#betterercontext"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererContext"))," - The current test context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": ",(0,o.kt)("a",{parentName:"li",href:"./errors#betterererror"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererError"))," - The error thrown while running the context.")),(0,o.kt)("h2",{id:"runs-hooks"},"Runs hooks"),(0,o.kt)("h3",{id:"runsstart"},(0,o.kt)("inlineCode",{parentName:"h3"},"runsStart()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"runsStart()")," hook is called when a ",(0,o.kt)("a",{parentName:"p",href:"./context#betterercontext"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererContext"))," starts a new set of test runs."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runs"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#bettererruns"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRuns"))," - A list of ",(0,o.kt)("a",{parentName:"li",href:"./context#bettererruns"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRuns"))," that will be run."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filePaths"),": ",(0,o.kt)("a",{parentName:"li",href:"./runner#bettererfilepaths"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererFilePaths"))," - A list of ",(0,o.kt)("a",{parentName:"li",href:"./runner#bettererfilepaths"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererFilePaths"))," that will be checked.")),(0,o.kt)("p",null,"Returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void> | void")),(0,o.kt)("h3",{id:"runsend"},(0,o.kt)("inlineCode",{parentName:"h3"},"runsEnd()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"runsEnd()")," hook is called when a ",(0,o.kt)("a",{parentName:"p",href:"./context#betterercontext"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererContext"))," ends a set of test runs."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"summary"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#betterersummary"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererSummary"))," - A ",(0,o.kt)("a",{parentName:"li",href:"./context#betterersummary"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererSummary"))," for the completed test run."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filePaths"),": ",(0,o.kt)("a",{parentName:"li",href:"./runner#bettererfilepaths"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererFilePaths"))," - A list of ",(0,o.kt)("a",{parentName:"li",href:"./runner#bettererfilepaths"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererFilePaths"))," that were checked.")),(0,o.kt)("p",null,"Returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void> | void")),(0,o.kt)("h2",{id:"run-hooks"},"Run hooks"),(0,o.kt)("h3",{id:"runstart"},(0,o.kt)("inlineCode",{parentName:"h3"},"runStart()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"runStart()")," hook is called when a ",(0,o.kt)("a",{parentName:"p",href:"./context#bettererrun"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRun"))," starts. The ",(0,o.kt)("inlineCode",{parentName:"p"},"lifecycle")," promise will resolve when the test run ends or reject when the test run throws, so it can be used instead of the ",(0,o.kt)("a",{parentName:"p",href:"#runend"},(0,o.kt)("inlineCode",{parentName:"a"},"runEnd()"))," and ",(0,o.kt)("a",{parentName:"p",href:"#runerror"},(0,o.kt)("inlineCode",{parentName:"a"},"runError()"))," hooks."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"run"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#bettererrun"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRun"))," - The current test run."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lifecycle"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise<void>")," - A promise that will resolve when the test run ends, or reject when the test run throws.")),(0,o.kt)("p",null,"Returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void> | void")),(0,o.kt)("h3",{id:"runend"},(0,o.kt)("inlineCode",{parentName:"h3"},"runEnd()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"runEnd()")," hook is called when a ",(0,o.kt)("a",{parentName:"p",href:"./context#bettererrun"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRun"))," ends."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"run"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#bettererrun"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRun"))," - The current test run.")),(0,o.kt)("p",null,"Returns: ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<void> | void")),(0,o.kt)("h3",{id:"runerror"},(0,o.kt)("inlineCode",{parentName:"h3"},"runError()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"runError()")," hook is called when there is an error running a test."),(0,o.kt)("p",null,"Args:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"run"),": ",(0,o.kt)("a",{parentName:"li",href:"./context#bettererrun"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererRun"))," - The current test run."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),": ",(0,o.kt)("a",{parentName:"li",href:"./errors#betterererror"},(0,o.kt)("inlineCode",{parentName:"a"},"BettererError"))," - The error thrown while running the test.")))}c.isMDXComponent=!0}}]);