"use strict";(self.webpackChunkmaap_docs=self.webpackChunkmaap_docs||[]).push([[188],{1126:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>t});var r=i(4848),s=i(8453);const o={sidebar_position:2},l="Azure",a={id:"partners/azure",title:"Azure",description:"Introduction",source:"@site/docs/partners/azure.md",sourceDirName:"partners",slug:"/partners/azure",permalink:"/maap-chatbot-builder/docs/partners/azure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AWS",permalink:"/maap-chatbot-builder/docs/partners/amazon"},next:{title:"GCP",permalink:"/maap-chatbot-builder/docs/partners/gcp"}},d={},t=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying your model",id:"deploying-your-model",level:2},{value:"Chat Model",id:"chat-model",level:3},{value:"Usage with MAAP",id:"usage-with-maap",level:4},{value:"Config File :",id:"config-file-",level:4},{value:"Environment Variable :",id:"environment-variable-",level:4},{value:"Embedding Model",id:"embedding-model",level:3},{value:"Usage with MAAP",id:"usage-with-maap-1",level:4},{value:"Config File :",id:"config-file--1",level:4},{value:"Environment Variable :",id:"environment-variable--1",level:4},{value:"References",id:"references",level:3},{value:"Deployment Name",id:"deployment-name",level:5},{value:"API Key and Instance Name",id:"api-key-and-instance-name",level:5},{value:"API Version",id:"api-version",level:5}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"azure",children:"Azure"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://azure.microsoft.com/en-in/products/ai-services/openai-service",children:"Azure OpenAI"})," Service offers REST API access to advanced language models like GPT-4, GPT-4 Turbo with Vision, GPT-3.5-Turbo, and Embeddings models. Both GPT-4 and GPT-3.5-Turbo models are now generally available, empowering users with capabilities such as content generation, summarization, image understanding, semantic search, and natural language to code translation. Accessible through REST APIs, Python SDK, or the Azure OpenAI Studio web interface, these models can be seamlessly integrated into various applications."]}),"\n",(0,r.jsx)(n.h2,{id:"deploying-your-model",children:"Deploying your model"}),"\n",(0,r.jsx)(n.p,{children:"Azure OpenAI Studio, offers the capability to deploy both Chat Models(LLM) as well as Embedding Models from the console."}),"\n",(0,r.jsx)(n.h3,{id:"chat-model",children:"Chat Model"}),"\n",(0,r.jsxs)(n.p,{children:["Go throught the Azure ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource?pivots=web-portal",children:"documentation"})," and start deploying your model. You can test out the model in Azure OpenAI Studio > Chat Playground. Here is a ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/chatgpt-quickstart",children:"Quick Start"})," to help you in the process."]}),"\n",(0,r.jsx)(n.p,{children:"Once your model is deployed successfully, you can use it to serve the LLM purpose in the MAAP framework."}),"\n",(0,r.jsx)(n.h4,{id:"usage-with-maap",children:"Usage with MAAP"}),"\n",(0,r.jsx)(n.p,{children:"To use Azure OpenAI model with MAAP framework, you would need to feed below values."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"config-file-",children:"Config File :"}),"\n",(0,r.jsxs)(n.p,{children:["Provided below are the values required to be added in ",(0,r.jsx)(n.code,{children:"config.yaml"})," file in LLM section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"llms:\n    class_name: AzureOpenAI\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"environment-variable-",children:"Environment Variable :"}),"\n",(0,r.jsxs)(n.p,{children:["Below value(s) are to be added in ",(0,r.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"AZURE_OPENAI_API_KEY=<check_references_below>\nAZURE_OPENAI_API_INSTANCE_NAME=<check_references_below>\nAZURE_OPENAI_API_VERSION=<check_references_below>\nAZURE_OPENAI_API_DEPLOYMENT_NAME=<check_references_below>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"embedding-model",children:"Embedding Model"}),"\n",(0,r.jsxs)(n.p,{children:["You can follow the same steps as above to delploy the embedding model as well. The process is documented ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-with-maap-1",children:"Usage with MAAP"}),"\n",(0,r.jsx)(n.p,{children:"To use Azure OpenAI embedding with MAAP framework, you would need to feed below values."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"config-file--1",children:"Config File :"}),"\n",(0,r.jsxs)(n.p,{children:["Provided below are the values required to be added in ",(0,r.jsx)(n.code,{children:"config.yaml"})," file in embedding section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"embedding:\n    class_name: Azure-OpenAI-Embeddings\n    model_name: <model_selected>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Model name specified should be one of the below listed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"text-embedding-ada-002"}),"\n",(0,r.jsx)(n.li,{children:"text-embedding-3-small"}),"\n",(0,r.jsx)(n.li,{children:"text-embedding-3-large"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"environment-variable--1",children:"Environment Variable :"}),"\n",(0,r.jsx)(n.p,{children:"Below value(s) are to be added in .env file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"AZURE_OPENAI_API_KEY=<check_references_below>\nAZURE_OPENAI_API_INSTANCE_NAME=<check_references_below>\nAZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME=<check_references_below>\nAZURE_OPENAI_API_VERSION=<check_references_below>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,r.jsx)(n.p,{children:"Provided below are the instructions on how to procure the right values for building your MAAP framework."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h5,{id:"deployment-name",children:"Deployment Name"}),"\n",(0,r.jsxs)(n.p,{children:["You can pick the deployment name for AZURE_OPENAI_API_EMBEDDINGS_DEPLOYMENT_NAME and AZURE_OPENAI_API_DEPLOYMENT_NAME as shown below from your ",(0,r.jsx)(n.a,{href:"https://oai.azure.com/portal",children:"console"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Console Image",src:i(6996).A+"",width:"1852",height:"1068"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h5,{id:"api-key-and-instance-name",children:"API Key and Instance Name"}),"\n",(0,r.jsxs)(n.p,{children:["To retrieve the key and instance name, you can go to ",(0,r.jsx)(n.strong,{children:"Resource Management"})," in ",(0,r.jsx)(n.a,{href:"https://portal.azure.com/",children:"Azure Portal"})," for your service and copy,"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"KEY 1"})," or ",(0,r.jsx)(n.code,{children:"KEY 2"})," for ",(0,r.jsx)(n.code,{children:"AZURE_OPENAI_API_KEY"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Endpoint"})," for ",(0,r.jsx)(n.code,{children:"azure_openai_api_instance_name"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The instance name can be retrieved from the endpoint itself. For example, Instance name for ",(0,r.jsx)(n.code,{children:"https://maap-demo.openai.azure.com/"})," is ",(0,r.jsx)(n.code,{children:"maap-demo"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"End point and Key",src:i(9020).A+"",width:"1000",height:"579"})}),"\n",(0,r.jsxs)(n.p,{children:["Refer ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/tutorials/embeddings#retrieve-key-and-endpoint",children:"here"})," for further details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h5,{id:"api-version",children:"API Version"}),"\n",(0,r.jsxs)(n.p,{children:["Check the docs ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/reference",children:"here"})," to pass the right api-version."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9020:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/image-3646711aa438bd9e1ef953e69d905bf0.png"},6996:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/image_azure_llm-984b735c60a7aa35f39686322ad47c4b.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var r=i(6540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);