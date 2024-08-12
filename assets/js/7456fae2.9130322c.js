"use strict";(self.webpackChunkmaap_docs=self.webpackChunkmaap_docs||[]).push([[941],{2280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(4848),r=t(8453);const s={sidebar_position:1},o="Enterprise Search",a={id:"demo/internal",title:"Enterprise Search",description:"Internal enterprise level chatbot.",source:"@site/docs/demo/internal.md",sourceDirName:"demo",slug:"/demo/internal",permalink:"/maap-chatbot-builder/docs/demo/internal",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Demo",permalink:"/maap-chatbot-builder/docs/category/demo"},next:{title:"Customer Service",permalink:"/maap-chatbot-builder/docs/demo/external"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Demo Setup",id:"demo-setup",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Components selection",id:"components-selection",level:3},{value:"Data ingestion",id:"data-ingestion",level:3},{value:"Running the application",id:"running-the-application",level:3},{value:"Run the server",id:"run-the-server",level:4},{value:"Start your application UI",id:"start-your-application-ui",level:4},{value:"Asking questions",id:"asking-questions",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"enterprise-search",children:"Enterprise Search"}),"\n",(0,i.jsx)(n.p,{children:"Internal enterprise level chatbot."}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This page describes how to setup and showcase a simple RAG chatbot for enterprise use-case. This chatbot is focused on training using the data that is internal to an organization and is maybe proprietary in nature. Data here will be ingested using pdf file(s)."}),"\n",(0,i.jsx)(n.h2,{id:"demo-setup",children:"Demo Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Clone the MAAP Framework github repository : ",(0,i.jsx)(n.a,{href:"https://github.com/mongodb-partners/maap-chatbot-builder/",children:"MAAP Framework Github"})]}),"\n",(0,i.jsx)(n.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsx)(n.p,{children:"Before proceeding, ensure that your environment meets the following requirements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Node Version: ",(0,i.jsx)(n.strong,{children:"v20.0+"})]}),"\n",(0,i.jsxs)(n.li,{children:["MongoDB Version (Atlas): ",(0,i.jsx)(n.strong,{children:"v7.0 (M10 Cluster Tier)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You are also required to generate a ",(0,i.jsx)(n.code,{children:"FIREWORKS.AI"})," API key in order to get access to the model. Visit this ",(0,i.jsx)(n.a,{href:"https://readme.fireworks.ai/docs/quickstart",children:"quick-start"})," guide to generate a key."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["NOTE: Rename the file located at ",(0,i.jsx)(n.code,{children:"builder/parterproduct/example.env"})," to ",(0,i.jsx)(n.code,{children:".env"})," file."]})}),"\n",(0,i.jsxs)(n.p,{children:["Once generated, store it in the ",(0,i.jsx)(n.code,{children:".env"})," file, located at ",(0,i.jsx)(n.code,{children:"builder/partnerproduct/.env"})," as;"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"FIREWORKS_API_KEY=xxxxx\n"})}),"\n",(0,i.jsx)(n.h3,{id:"components-selection",children:"Components selection"}),"\n",(0,i.jsxs)(n.p,{children:["The first step in the setup process is configuring the ",(0,i.jsx)(n.code,{children:"config.yaml"})," file. You can adjust the necessary settings from the list of available partners to make it best work for your needs. For this demo, we are utilizing the ",(0,i.jsx)(n.code,{children:"Nomic"})," embedding class and the ",(0,i.jsx)(n.code,{children:"Mixtral"})," model for LLMs."]}),"\n",(0,i.jsx)(n.p,{children:"You are required to update the fields as required with your personal generated values below."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://drive.google.com/file/d/1fqYmznw7mAe744anSyiTlvCFgVXN72kJ/view?usp=drive_link",children:"Link"})," to the pdf file used in the demo. Download this pdf file to your machine."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ingest:\n    - source: 'pdf'\n      source_path: '<pdf_file_path>'\n      chunk_size: 2000\n      chunk_overlap: 200\nembedding:\n    class_name: Nomic-v1.5\nvector_store:\n    connectionString: '<you_mdb_connection_string>'\n    dbName: '<db_name>'\n    collectionName: 'embedded_content'\n    embeddingKey: 'embedding'\n    textKey: 'text'\n    numCandidates: 150\n    minScore: 0.1 \n    vectorSearchIndexName: 'vector_index'\nllms:\n    class_name: Fireworks\n    model_name: 'accounts/fireworks/models/mixtral-8x22b-instruct'\n    temperature: ''\n    top_p: ''\n    top_k: ''\n"})}),"\n",(0,i.jsx)(n.h3,{id:"data-ingestion",children:"Data ingestion"}),"\n",(0,i.jsxs)(n.p,{children:["The data can be loaded from different data sources of your choice, we are using ",(0,i.jsx)(n.code,{children:"pdf"})," in this case."]}),"\n",(0,i.jsx)(n.p,{children:"In order to start ingesting the data run the below command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm run ingest <path_to_your_config.yaml>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command takes into considerations the ",(0,i.jsx)(n.code,{children:"ingest"})," pipeline mentioned in the ",(0,i.jsx)(n.code,{children:"config.yaml"})," file and starts ingesting data from the listed sources. After the data is loaded successfully, the required vector index is also created automatically."]}),"\n",(0,i.jsxs)(n.p,{children:["The data is loaded in ",(0,i.jsx)(n.code,{children:"embedded_content"})," collection, and must have created vector search index named ",(0,i.jsx)(n.code,{children:"vector_index"}),". Verify this before proceeding the to next step."]}),"\n",(0,i.jsx)(n.h3,{id:"running-the-application",children:"Running the application"}),"\n",(0,i.jsx)(n.p,{children:"In order to start the application, the server and front-end should be running in two separate terminals."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"run-the-server",children:"Run the server"}),"\n",(0,i.jsx)(n.p,{children:"Navigate to the src folder, and run the server using below command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"npm run start <path_to_your_config.yaml>\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.h4,{id:"start-your-application-ui",children:"Start your application UI"}),"\n",(0,i.jsx)(n.p,{children:"You can start your UI client by running the following command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd builder/partnerproduct/ui\nnpm install\nnpm run start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"npm install"})," will help you in installing the required libraries."]}),"\n",(0,i.jsxs)(n.p,{children:["Your application will be running at ",(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"asking-questions",children:"Asking questions"}),"\n",(0,i.jsx)(n.p,{children:"Be creative and ask questions related to the data you ingested."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);