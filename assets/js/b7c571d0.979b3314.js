"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[4117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>v});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,v=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?i.createElement(v,o(o({ref:t},m),{},{components:a})):i.createElement(v,o({ref:t},m))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},767:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const r={id:"overview",title:"Building on the Polygon zkEVM with Avail",sidebar_label:"Overview",description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},o=void 0,l={unversionedId:"build/zkevm/overview",id:"build/zkevm/overview",title:"Building on the Polygon zkEVM with Avail",description:"Discover how to utilize Avail as a data availability layer.",source:"@site/docs/build/zkevm/overview.md",sourceDirName:"build/zkevm",slug:"/build/zkevm/overview",permalink:"/build/zkevm/overview",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/build/zkevm/overview.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1700874939,formattedLastUpdatedAt:"Nov 25, 2023",frontMatter:{id:"overview",title:"Building on the Polygon zkEVM with Avail",sidebar_label:"Overview",description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Polygon zkEVM",permalink:"/category/polygon-zkevm"},next:{title:"Avail-Powered zkEVM Validium",permalink:"/build/zkevm/"}},p={},s=[{value:"Using Polygon zkEVM with Avail in Validium",id:"using-polygon-zkevm-with-avail-in-validium",level:2},{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:3},{value:"Interoperability and Fault Tolerance",id:"interoperability-and-fault-tolerance",level:3},{value:"Developer Onboarding",id:"developer-onboarding",level:3}],m={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"using-polygon-zkevm-with-avail-in-validium"},"Using Polygon zkEVM with Avail in Validium"),(0,n.kt)("p",null,"Polygon zkEVM, when combined with Avail in a Validium setup, provides a robust solution for scaling Ethereum applications. Here's an overview of this setup:"),(0,n.kt)("h3",{id:"transaction-lifecycle"},"Transaction Lifecycle"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Transaction Submission")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Process"),": Users initiate transactions by sending them to the Validium Sequencer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Role"),": The Sequencer temporarily holds these transactions before they are processed."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Batch Processing")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Component"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"validium-batcher")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Function"),": Transactions are grouped into batches to optimize processing efficiency."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Data Availability with Avail")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Component"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"avail-validator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Function"),": Transaction batches are transmitted to Avail's blockchain, where they are validated and made available for further processing within the Validium environment."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Proof Generation")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Component"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"zkevm-prover")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Function"),": A dedicated prover generates cryptographic proofs for the Validium network, ensuring the validity of transactions and data availability on Ethereum."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Transaction Commitment to Ethereum")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Component"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"validium-bridge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Action"),": Validity proofs and transaction commitments are submitted to the Ethereum network, anchoring the Validium state on the Ethereum mainnet."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Verifier and Rollup Node Integration")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Component"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"validium-node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Function"),": The Validium node queries Ethereum for transaction data and commitments, maintaining data availability and enabling users to interact with the Validium chain securely.")))),(0,n.kt)("h3",{id:"interoperability-and-fault-tolerance"},"Interoperability and Fault Tolerance"),(0,n.kt)("p",null,"The combination of Polygon zkEVM and Avail in the Validium setup is designed to seamlessly integrate with Polygon's fault-tolerant system. This ensures the robustness of the Validium Sequencer while enabling efficient cross-chain communication and interoperability."),(0,n.kt)("h3",{id:"developer-onboarding"},"Developer Onboarding"),(0,n.kt)("p",null,"Developers interested in leveraging Polygon zkEVM with Avail within the Validium framework can begin by referring to the comprehensive guide provided in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/availproject/validium-contracts"},"Avail Validium GitHub repository"),". For ongoing support and updates, developers are encouraged to join the Avail community forum or Discord channel."))}u.isMDXComponent=!0}}]);