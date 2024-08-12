"use strict";(self.webpackChunkmaap_docs=self.webpackChunkmaap_docs||[]).push([[791],{5653:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var r=i(4848),o=i(8453);const t={sidebar_position:4},l="Anthropic",s={id:"partners/anthropic",title:"Anthropic",description:"Introduction",source:"@site/docs/partners/anthropic.md",sourceDirName:"partners",slug:"/partners/anthropic",permalink:"/maap-chatbot-builder/docs/partners/anthropic",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"GCP",permalink:"/maap-chatbot-builder/docs/partners/gcp"},next:{title:"Anyscale",permalink:"/maap-chatbot-builder/docs/partners/anyscale"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying your model",id:"deploying-your-model",level:2},{value:"LLM Model",id:"llm-model",level:3},{value:"Usage with MAAP",id:"usage-with-maap",level:4},{value:"Config File :",id:"config-file-",level:4},{value:"Environment Variable :",id:"environment-variable-",level:4},{value:"References",id:"references",level:3},{value:"Model Name",id:"model-name",level:5},{value:"API Key",id:"api-key",level:5}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"anthropic",children:"Anthropic"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.anthropic.com/",children:"Anthropic"})," is a San Francisco-based company specializing in AI safety and research."]}),"\n",(0,r.jsx)(n.h2,{id:"deploying-your-model",children:"Deploying your model"}),"\n",(0,r.jsx)(n.p,{children:"Anthropic offers the capability to deploy various Chat Models(LLM) under its umbrella."}),"\n",(0,r.jsx)(n.h3,{id:"llm-model",children:"LLM Model"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to their ",(0,r.jsx)(n.a,{href:"https://docs.anthropic.com/en/docs/about-claude/models",children:"documentation"})," to understand the latest offerings, with feature and cost comparisons."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-with-maap",children:"Usage with MAAP"}),"\n",(0,r.jsx)(n.p,{children:"To use Anthropic model with MAAP framework, you would need to feed below values."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"config-file-",children:"Config File :"}),"\n",(0,r.jsxs)(n.p,{children:["Provided below are the values required to be added in ",(0,r.jsx)(n.code,{children:"config.yaml"})," file in LLM section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"llms:\n    class_name: Anthropic\n    model_name: <check_references_below>\n    max_tokens: <integer_value>\n    temperature: <integer_value>\n\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"environment-variable-",children:"Environment Variable :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["NOTE: Rename the file located at ",(0,r.jsx)(n.code,{children:"builder/parterproduct/example.env"})," to ",(0,r.jsx)(n.code,{children:".env"})," file."]})}),"\n",(0,r.jsxs)(n.p,{children:["Below value(s) are to be added in ",(0,r.jsx)(n.code,{children:".env"})," file, present at ",(0,r.jsx)(n.code,{children:"builder/partnerproduct/"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ANTHROPIC_API_KEY = <check_references_below>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,r.jsx)(n.p,{children:"Provided below are the instructions on how to procure the right values for building your MAAP framework."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h5,{id:"model-name",children:"Model Name"}),"\n",(0,r.jsxs)(n.p,{children:["You can pick any model from the ",(0,r.jsx)(n.a,{href:"https://docs.anthropic.com/en/docs/about-claude/models#model-names",children:"updated list"})," given in Anthropic documents."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h5,{id:"api-key",children:"API Key"}),"\n",(0,r.jsxs)(n.p,{children:["You will need to ",(0,r.jsx)(n.a,{href:"https://www.anthropic.com/",children:"sign up"})," and retrieve an Anthropic API Key."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>s});var r=i(6540);const o={},t=r.createContext(o);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);