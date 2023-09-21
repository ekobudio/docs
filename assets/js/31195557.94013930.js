"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[2536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),b=l,k=u["".concat(s,".").concat(b)]||u[b]||d[b]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7462),l=n(7294),r=n(6010),o=n(2466),i=n(6550),s=n(1980),c=n(7392),p=n(12);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=k({queryString:n,groupId:a}),[u,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??u;return b({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),m(e)}),[c,m,r]),tabValues:r}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(u(t),s(a))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:d},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=m(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(h,(0,a.Z)({},e,t)),l.createElement(v,(0,a.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return l.createElement(N,(0,a.Z)({key:String(t)},e))}},5512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),r=n(4866),o=n(5162);n(4996);const i={id:"embedding-the-light-client",title:"How to Embed Your Light Client",sidebar_label:"Embed Your Light Client",description:"How to embed the light client into a dust application",keywords:["docs","avail","data","availability","how-to","light client","embedding","rust"],image:"https://availproject.github.io/img/avail/AvailDocs.png"},s=void 0,c={unversionedId:"api/light-client/embedding-the-light-client",id:"api/light-client/embedding-the-light-client",title:"How to Embed Your Light Client",description:"How to embed the light client into a dust application",source:"@site/docs/api/light-client/light-client-embedding.md",sourceDirName:"api/light-client",slug:"/api/light-client/embedding-the-light-client",permalink:"/api/light-client/embedding-the-light-client",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/api/light-client/light-client-embedding.md",tags:[],version:"current",lastUpdatedBy:"DSalman03",lastUpdatedAt:1694833174,formattedLastUpdatedAt:"Sep 16, 2023",frontMatter:{id:"embedding-the-light-client",title:"How to Embed Your Light Client",sidebar_label:"Embed Your Light Client",description:"How to embed the light client into a dust application",keywords:["docs","avail","data","availability","how-to","light client","embedding","rust"],image:"https://availproject.github.io/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Configure a Light Client",permalink:"/api/light-client/avail-light-client-overview"},next:{title:"Validiums",permalink:"/api/use-case-validiums"}},p={},u=[{value:"Fetching the number of the latest block processed by light client",id:"fetching-the-number-of-the-latest-block-processed-by-light-client",level:2},{value:"Fetching the confidence for given block",id:"fetching-the-confidence-for-given-block",level:2},{value:"Fetching decoded application data for given block",id:"fetching-decoded-application-data-for-given-block",level:2},{value:"JSON response",id:"json-response",level:3},{value:"Decoded extrinsic",id:"decoded-extrinsic",level:3},{value:"Waiting for application data to be verified",id:"waiting-for-application-data-to-be-verified",level:2},{value:"API reference",id:"api-reference",level:2},{value:"<strong>GET</strong> <code>/v1/mode</code>",id:"get-v1mode",level:3},{value:"Responses",id:"responses",level:4},{value:"<strong>GET</strong> <code>/v1/latest_block</code>",id:"get-v1latest_block",level:3},{value:"Responses",id:"responses-1",level:4},{value:"<strong>GET</strong> <code>/v1/confidence/{block_number}</code>",id:"get-v1confidenceblock_number",level:3},{value:"Responses",id:"responses-2",level:4},{value:"<strong>GET</strong> <code>/v1/appdata/{block_number}</code>",id:"get-v1appdatablock_number",level:3},{value:"Responses",id:"responses-3",level:4},{value:"<strong>GET</strong> <code>/v1/status/{block_number}</code>",id:"get-v1statusblock_number",level:3},{value:"Responses",id:"responses-4",level:4}],d={toc:u},b="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(b,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fetching-the-number-of-the-latest-block-processed-by-light-client"},"Fetching the number of the latest block processed by light client"),(0,l.kt)("p",null,"To fetch the number of the latest block processed by light client, we can perform ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request on ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/latest_block")," endpoint."),(0,l.kt)(r.Z,{groupId:"examples",defaultValue:"rust",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"CURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl "http://localhost:7000/v1/latest_block"\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "latest_block": 10\n}\n'))),(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use reqwest::StatusCode;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct LatestBlock {\n    pub latest_block: u32,\n}\n\nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nlet latest_block_url = format!("{LIGHT_CLIENT_URL}/v1/latest_block");\nlet response = reqwest::get(latest_block_url).await.unwrap();\n\nif response.status() == StatusCode::OK {\n    let latest_block: LatestBlock =\n        serde_json::from_str(&response.text().await.unwrap()).unwrap();\n    println!("{latest_block:?}");\n}\n// ...error handling...\n')))),(0,l.kt)("h2",{id:"fetching-the-confidence-for-given-block"},"Fetching the confidence for given block"),(0,l.kt)("p",null,"To fetch the the confidence for specific block, which is already processed by application client, we can perform ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request on ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/confidece/{block_number}")," endpoint."),(0,l.kt)(r.Z,{groupId:"examples",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"CURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl "http://localhost:7000/v1/confidence/1"\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "block": 1,\n  "confidence": 93.75,\n  "serialised_confidence": "5232467296"\n}\n'))),(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use reqwest::StatusCode;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct Confidence {\n    pub block: u32,\n    pub confidence: f64,\n    pub serialised_confidence: Option<String>,\n}\n    \nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nlet block_number = 1;\nlet confidence_url = format!("{LIGHT_CLIENT_URL}/v1/confidence/{block_number}");\nlet response = reqwest::get(confidence_url).await.unwrap();\n\nif response.status() == StatusCode::OK {\n    let confidence: Confidence =\n        serde_json::from_str(&response.text().await.unwrap()).unwrap();\n    println!("{confidence:?}");\n}\n// ...error handling...\n')))),(0,l.kt)("h2",{id:"fetching-decoded-application-data-for-given-block"},"Fetching decoded application data for given block"),(0,l.kt)("p",null,"After data is verified, it can be fetched with ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request on ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/appdata/{block_number}")," endpoint, by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"decode=true")," query parameter."),(0,l.kt)(r.Z,{groupId:"examples",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"CURL",mdxType:"TabItem"},(0,l.kt)("h3",{id:"json-response"},"JSON response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl "http://localhost:7000/v1/appdata/1?decode=true"\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "block": 46,\n  "extrinsics": [\n    "ZXhhbXBsZQ=="\n  ]\n}\n')),(0,l.kt)("h3",{id:"decoded-extrinsic"},"Decoded extrinsic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s \"http://127.0.0.1:7000/v1/appdata/1?decode=true\" | jq -r '.extrinsics[-1]' | base64 -d\n")),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"example"\n'))),(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'\nuse base64::Engine as _;\nuse reqwest::StatusCode;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct ExtrinsicsData {\n    pub block: u32,\n    pub extrinsics: Vec<String>,\n}\n\nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nlet block_number = 2;\nlet confidence_url = format!("{LIGHT_CLIENT_URL}/v1/appdata/{block_number}?decode=true");\nlet response = reqwest::get(confidence_url).await.unwrap();\n\nif response.status() == StatusCode::OK {\n    let data: ExtrinsicsData =\n        serde_json::from_str(&response.text().await.unwrap()).unwrap();\n\n    let decoded_bytes = engine::general_purpose::STANDARD\n        .decode(&data.extrinsics[0])\n        .unwrap();\n    let decoded_string = String::from_utf8(decoded_bytes).unwrap();\n    println!("{decoded_string:?}");\n}\n\n// ...error handling...\n')))),(0,l.kt)("h2",{id:"waiting-for-application-data-to-be-verified"},"Waiting for application data to be verified"),(0,l.kt)("p",null,"If light client is still processing specific block, we can poll light client with ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request on ",(0,l.kt)("inlineCode",{parentName:"p"},"/v1/appdata/{block_number}")," endpoint, and wait for data to became available."),(0,l.kt)(r.Z,{groupId:"examples",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"CURL",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl "http://localhost:7000/v1/appdata/2"\n')),(0,l.kt)("p",null,"If response status code is ",(0,l.kt)("inlineCode",{parentName:"p"},"401")," and body is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Processing block"\n')),(0,l.kt)("p",null,"we need to poll endpoint until data becomes available.")),(0,l.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'use avail_subxt::primitives::AppUncheckedExtrinsic;\nuse serde::{Deserialize, Serialize};\nuse anyhow::anyhow;\nuse reqwest::StatusCode;\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct ExtrinsicsData {\n    pub block: u32,\n    pub extrinsics: Vec<AppUncheckedExtrinsic>,\n}\n\nconst POLLING_TIMEOUT: Duration = Duration::from_secs(120);\nconst POLLING_INTERVAL: Duration = Duration::from_secs(1);\nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nasync fn wait_for_appdata(appdata_url: &str, block: u32) -> anyhow::Result<ExtrinsicsData> {\n    let appdata_url = format!("{LIGHT_CLIENT_URL}/v1/appdata/{block}");\n    \n    let start_time = std::time::Instant::now();\n\n    loop {\n        if start_time.elapsed() >= POLLING_TIMEOUT {\n            return Err(anyhow!("Poll timeout exceeded"));\n        }\n\n        let response = reqwest::get(&appdata_url).await?;\n\n        match response.status() {\n            // If status is OK. response continas json representation of submitted data\n            StatusCode::OK => {\n                let text = &response.text().await?;\n                return Ok(serde_json::from_str(text)?);\n            }\n            // If it is not found, there is no data for given block and application\n            StatusCode::NOT_FOUND => {\n                return Ok(ExtrinsicsData {\n                    block,\n                    extrinsics: vec![],\n                })\n            }\n            // Wait for data to became available otherwise\n            _ => {\n                tokio::time::sleep(POLLING_INTERVAL).await;\n                continue;\n            }\n        }\n    }\n}\n\n')),(0,l.kt)("p",null,"Function ",(0,l.kt)("inlineCode",{parentName:"p"},"wait_for_appdata")," will block until data is available or timeout is reached."))),(0,l.kt)("h2",{id:"api-reference"},"API reference"),(0,l.kt)("p",null,"In case of error, endpoints will return response with ",(0,l.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")," status code, and descriptive error message."),(0,l.kt)("h3",{id:"get-v1mode"},(0,l.kt)("strong",{parentName:"h3"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"h3"},"/v1/mode")),(0,l.kt)("p",null,"Retrieves the operating mode of the light client. Light client can operate in two different modes, ",(0,l.kt)("inlineCode",{parentName:"p"},"LightClient")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"AppClient"),", depending on configuration of application ID."),(0,l.kt)("h4",{id:"responses"},"Responses"),(0,l.kt)("p",null,"If operating mode is ",(0,l.kt)("inlineCode",{parentName:"p"},"LightClient")," response is:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"LightClient"\n'))),(0,l.kt)("p",null,"In case of ",(0,l.kt)("inlineCode",{parentName:"p"},"AppClient")," mode, response is:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"AppClient": {app_id}}\n'))),(0,l.kt)("h3",{id:"get-v1latest_block"},(0,l.kt)("strong",{parentName:"h3"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"h3"},"/v1/latest_block")),(0,l.kt)("p",null,"Retrieves the latest block processed by the light client."),(0,l.kt)("h4",{id:"responses-1"},"Responses"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"latest_block":{block_number}}\n'))),(0,l.kt)("h3",{id:"get-v1confidenceblock_number"},(0,l.kt)("strong",{parentName:"h3"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"h3"},"/v1/confidence/{block_number}")),(0,l.kt)("p",null,"Given a block number, it returns the confidence computed by the light client for that specific block."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Path parameters:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_number")," - block number (requred)"))),(0,l.kt)("h4",{id:"responses-2"},"Responses"),(0,l.kt)("p",null,"In case when confidence is computed:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"block":1,"confidence":93.75,"serialised_confidence":"5232467296"}\n'))),(0,l.kt)("p",null,"If confidence is not computed, and specified block is before the latest processed block:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"400 Bad Request")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Not synced"\n'))),(0,l.kt)("p",null,"If confidence is not computed, and specified block is after the latest processed block:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Not found"\n'))),(0,l.kt)("h3",{id:"get-v1appdatablock_number"},(0,l.kt)("strong",{parentName:"h3"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"h3"},"/v1/appdata/{block_number}")),(0,l.kt)("p",null,"Given a block number, it retrieves the hex-encoded extrinsics for the specified block, if available. Alternatively, if specified by a query parameter, the retrieved extrinsic is decoded and returned as a base64-encoded string."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Path parameters:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_number")," - block number (requred)"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Query parameters:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"decode")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," if decoded extrinsics are requested (boolean, optional, default is ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),")"))),(0,l.kt)("h4",{id:"responses-3"},"Responses"),(0,l.kt)("p",null,"If application data is available, and decode is ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," or unspecified:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"block":1,"extrinsics":["0xc5018400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01308e88ca257b65514b7b44fc1913a6a9af6abc34c3d22761b0e425674d68df7de26be1c8533a7bbd01fdb3a8daa5af77df6d3fb0a67cde8241f461f4fe16f188000000041d011c6578616d706c65"]}\n'))),(0,l.kt)("p",null,"If application data is available, and decode is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"block":1,"extrinsics":["ZXhhbXBsZQ=="]}\n'))),(0,l.kt)("p",null,"If application data is not available, and specified block is the latest block:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Processing block"\n'))),(0,l.kt)("p",null,"If application data is not available, and specified block is not the latest block:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Not found"\n'))),(0,l.kt)("h3",{id:"get-v1statusblock_number"},(0,l.kt)("strong",{parentName:"h3"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"h3"},"/v1/status/{block_number}")),(0,l.kt)("p",null,"Retrieves the status of the latest block processed by the light client."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Path parameters:"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"block_number")," - block number (requred)"))),(0,l.kt)("h4",{id:"responses-4"},"Responses"),(0,l.kt)("p",null,"If latest processed block exists, and ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id")," is configured (otherwise, ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id")," is not set):"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"block_num":89,"confidence":93.75,"app_id":1}\n'))),(0,l.kt)("p",null,"If there are no processed blocks:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status code: ",(0,l.kt)("inlineCode",{parentName:"p"},"404 Not Found")),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"Not found"\n'))))}k.isMDXComponent=!0}}]);