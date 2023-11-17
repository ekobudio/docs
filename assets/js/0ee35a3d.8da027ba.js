"use strict";(self.webpackChunkavail_docs_wiki=self.webpackChunkavail_docs_wiki||[]).push([[4913],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>f});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?t.createElement(f,r(r({ref:n},p),{},{components:a})):t.createElement(f,r({ref:n},p))}));function f(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2397:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(7462),o=(a(7294),a(3905));const i={id:"use-case-validiums",title:"Validium Reference",sidebar_label:"Validiums",description:"How to use Avail to build validiums",keywords:["docs","avail","availability","scale","rollup","validium"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},r=void 0,s={unversionedId:"api/use-case-validiums",id:"api/use-case-validiums",title:"Validium Reference",description:"How to use Avail to build validiums",source:"@site/docs/api/validiums.md",sourceDirName:"api",slug:"/api/use-case-validiums",permalink:"/api/use-case-validiums",draft:!1,editUrl:"https://github.com/availproject/availproject.github.io/tree/main/docs/api/validiums.md",tags:[],version:"current",lastUpdatedBy:"Sasa Prsic",lastUpdatedAt:1699450199,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{id:"use-case-validiums",title:"Validium Reference",sidebar_label:"Validiums",description:"How to use Avail to build validiums",keywords:["docs","avail","availability","scale","rollup","validium"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"avail",previous:{title:"Embed Your Light Client",permalink:"/api/light-client/embedding-the-light-client"},next:{title:"Glossary",permalink:"/glossary"}},l={},c=[{value:"Verify data availability on Ethereum",id:"verify-data-availability-on-ethereum",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...a}=e;return(0,o.kt)(d,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"verify-data-availability-on-ethereum"},"Verify data availability on Ethereum"),(0,o.kt)("p",null,"In order to verify data availability on Ethereum it is necessary\nto first submit data to Avail as a data submission transaction. Data\nsubmitted this way will be included in Avail blocks, but not\ninterpreted or executed in any way. The submission can be done using\n",(0,o.kt)("inlineCode",{parentName:"p"},"Polkadot-JS")," which is a collection of tools for communication with\nchains based on Substrate (which is now part of the Polkadot SDK)."),(0,o.kt)("p",null,"Complete example can be found on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/availproject/avail/tree/develop/examples/validium"},"github"),"."),(0,o.kt)("p",null,"Example of sending data to Avail:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function submitData(availApi, data, account) {\n  let submit = await availApi.tx.dataAvailability.submitData(data);\n  return await sendTx(availApi, account, submit);\n}\n")),(0,o.kt)("p",null,"Function ",(0,o.kt)("inlineCode",{parentName:"p"},"submitData")," receives ",(0,o.kt)("inlineCode",{parentName:"p"},"availApi")," api instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," that will be submitted,\nand the ",(0,o.kt)("inlineCode",{parentName:"p"},"account")," which is sending the transaction. In order to create account\nit is necessary to create ",(0,o.kt)("em",{parentName:"p"},"keyring")," ",(0,o.kt)("em",{parentName:"p"},"pair")," for the account that wants to send the data.\nThis can be done with ",(0,o.kt)("inlineCode",{parentName:"p"},"keyring.addFromUri(secret)")," which creates keyring pair via suri\n(the secret can be a hex string, mnemonic phrase or a string).\nAfter creating keyring pair, it is possible to submit data in a transaction to the Avail network with\n",(0,o.kt)("inlineCode",{parentName:"p"},"availApi.tx.dataAvailability.submitData(data);"),". Once the transaction is included in an Avail block,\nit is possible to initiate the dispatch of the data root by creating a dispatch transaction\n",(0,o.kt)("inlineCode",{parentName:"p"},"availApi.tx.daBridge.tryDispatchDataRoot(destinationDomain, bridgeRouterEthAddress, header);")," with the parameters:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"destinationDomain")," Destination domain 1000."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bridgeRouterEthAddress")," Address of the main data availability router contract deployed on Sepolia network for Goldberg (",(0,o.kt)("inlineCode",{parentName:"p"},"0x305222c4DdB86FfA9fa9Aa0A479705577E3c4d33"),"),\nfor Kate",(0,o.kt)("inlineCode",{parentName:"p"},"0xbD824890A51ed8bda53F51F27303b14EFfEbC152"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"header")," Provided from the block when data is submitted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function dispatchDataRoot(availApi, blockHash, account) {\n  const header = await availApi.rpc.chain.getHeader(blockHash);\n  let tx = await availApi.tx.daBridge.tryDispatchDataRoot(\n    process.env.DESTINATION_DOMAIN,\n    process.env.DA_BRIDGE_ADDRESS,\n    header,\n  );\n  return await sendTx(availApi, account, tx);\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Example of submitting data to Avail and dispatching the data root using ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Polkadot-JS"),"."),(0,o.kt)("p",{parentName:"admonition"},"Environment variables:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"AVAIL_RPC= # avail network websocket url\nSURI= # mnemonic\nDA_BRIDGE_ADDRESS= # main da bridge contract address deployed to Sepolia test network in format (Kate) 0x000000000000000000000000bD824890A51ed8bda53F51F27303b14EFfEbC152 (Goldberg) 0x000000000000000000000000305222c4DdB86FfA9fa9Aa0A479705577E3c4d33\nDESTINATION_DOMAIN= # destination domain is 1000\nDATA= # data sending to avail\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Dispatch Data Root Javascript Example"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ApiPromise, Keyring, WsProvider } from '@polkadot/api';\nimport * as dotenv from 'dotenv';\n\ndotenv.config();\n\n/**\n * Creates api instance.\n *\n * @param url websocket address\n */\nasync function createApi(url) {\n  const provider = new WsProvider(url);\n  return ApiPromise.create({\n    provider,\n    rpc: {\n      kate: {\n        queryDataProof: {\n          description: 'Generate the data proof for the given `index`',\n          params: [\n            {\n              name: 'transaction_index',\n              type: 'u32',\n            },\n            {\n              name: 'at',\n              type: 'Hash',\n              isOptional: true,\n            },\n          ],\n          type: 'DataProof',\n        },\n      },\n    },\n    types: {\n      AppId: 'Compact<u32>',\n      DataLookupIndexItem: {\n        appId: 'AppId',\n        start: 'Compact<u32>',\n      },\n      DataLookup: {\n        size: 'Compact<u32>',\n        index: 'Vec<DataLookupIndexItem>',\n      },\n      KateCommitment: {\n        rows: 'Compact<u16>',\n        cols: 'Compact<u16>',\n        dataRoot: 'H256',\n        commitment: 'Vec<u8>',\n      },\n      V1HeaderExtension: {\n        commitment: 'KateCommitment',\n        appLookup: 'DataLookup',\n      },\n      VTHeaderExtension: {\n        newField: 'Vec<u8>',\n        commitment: 'KateCommitment',\n        appLookup: 'DataLookup',\n      },\n      HeaderExtension: {\n        _enum: {\n          V1: 'V1HeaderExtension',\n          VTest: 'VTHeaderExtension',\n        },\n      },\n      DaHeader: {\n        parentHash: 'Hash',\n        number: 'Compact<BlockNumber>',\n        stateRoot: 'Hash',\n        extrinsicsRoot: 'Hash',\n        digest: 'Digest',\n        extension: 'HeaderExtension',\n      },\n      Header: 'DaHeader',\n      CheckAppIdExtra: {\n        appId: 'AppId',\n      },\n      CheckAppIdTypes: {},\n      CheckAppId: {\n        extra: 'CheckAppIdExtra',\n        types: 'CheckAppIdTypes',\n      },\n      DataProof: {\n        root: 'H256',\n        proof: 'Vec<H256>',\n        numberOfLeaves: 'Compact<u32>',\n        leafIndex: 'Compact<u32>',\n        leaf: 'H256',\n      },\n      Cell: {\n        row: 'u32',\n        col: 'u32',\n      },\n    },\n    signedExtensions: {\n      CheckAppId: {\n        extrinsic: {\n          appId: 'AppId',\n        },\n        payload: {},\n      },\n    },\n  });\n}\n\n/**\n * Sends transaction to Avail.\n *\n * @param api instance of the api\n * @param account sending the transaction\n * @param tx transaction\n */\nasync function sendTx(api, account, tx) {\n  return new Promise(async (resolve) => {\n    try {\n      const res = await tx.signAndSend(account, (result) => {\n        if (result.status.isReady) {\n          console.log(`Txn has been sent to the mempool`);\n        }\n        if (result.status.isInBlock) {\n          console.log(\n            `Tx hash: ${result.txHash} is in block ${result.status.asInBlock}`,\n          );\n          res();\n          resolve(result);\n        }\n      });\n    } catch (e) {\n      console.log(e);\n      process.exit(1);\n    }\n  });\n}\n\n/**\n * Submitting data to Avail as a transaction.\n *\n * @param availApi api instance\n * @param data payload to send\n * @param account that is sending transaction\n * @returns {Promise<unknown>}\n */\nasync function submitData(availApi, data, account) {\n  let submit = await availApi.tx.dataAvailability.submitData(data);\n  return await sendTx(availApi, account, submit);\n}\n\n/**\n * Sending dispatch data root transaction.\n *\n * @param availApi api instance\n * @param blockHash hash of the block\n * @param account sending transaction\n * @returns {Promise<unknown>}\n */\nasync function dispatchDataRoot(availApi, blockHash, account) {\n  const destinationDomain = process.env.DESTINATION_DOMAIN;\n  const bridgeRouterEthAddress = process.env.DA_BRIDGE_ADDRESS;\n  const header = await availApi.rpc.chain.getHeader(blockHash);\n  console.log(`Block Number: ${header.number}`);\n  console.log(`State Root: ${header.stateRoot}`);\n  let tx = await availApi.tx.daBridge.tryDispatchDataRoot(\n    destinationDomain,\n    bridgeRouterEthAddress,\n    header,\n  );\n  return await sendTx(availApi, account, tx);\n}\n\n/**\n * Returns data root for the particular block.\n *\n * @param availApi api instance\n * @param blockHash hash of the block\n * @returns {Promise<(*)[]>}\n */\nasync function getDataRoot(availApi, blockHash) {\n  const header = JSON.parse(await availApi.rpc.chain.getHeader(blockHash));\n  return [header.extension.v1.commitment.dataRoot, header.number];\n}\n\n(async function dataRootDispatch() {\n  const availApi = await createApi(process.env.AVAIL_RPC);\n  const keyring = new Keyring({ type: 'sr25519' });\n  const account = keyring.addFromMnemonic(process.env.SURI);\n  console.log('Submitting data to Avail...');\n\n  let result = await submitData(availApi, process.env.DATA, account);\n  const txIndex = JSON.parse(result.events[0].phase).applyExtrinsic;\n  const blockHash = result.status.asInBlock;\n  console.log(\n    `Transaction: ${result.txHash}. Block hash: ${blockHash}. Transaction index: ${txIndex}.`,\n  );\n\n  console.log('Triggering Home...');\n  result = await dispatchDataRoot(availApi, blockHash, account);\n  console.log(`Sent txn on Avail. Txn Hash: ${result.txHash}.`);\n  let [root, blockNum] = await getDataRoot(availApi, blockHash);\n  console.log('Data Root:' + root + ' and Block number: ' + blockNum);\n\n  await availApi.disconnect();\n})()\n  .then(() => {\n    console.log('Done');\n  })\n  .catch((err) => {\n    console.error(err);\n    process.exit(1);\n  });\n")))),(0,o.kt)("p",null,"Dispatching data root will trigger an optimistic bridge which will bridge the data root to the Ethereum network. Since the bridge\nis optimistic, it is necessary to wait for 30 minutes before the data root is available on Ethereum."),(0,o.kt)("p",null,"After successfully bridging data root to the main data availability attestation contract on Ethereum,\nit is possible to prove that data is available on the Avail network by submitting a Merkle proof to the verification contract.\nFetching proof from Avail can be done via RPC call ",(0,o.kt)("inlineCode",{parentName:"p"},"kate_queryDataProof")," for\nexample ",(0,o.kt)("inlineCode",{parentName:"p"},"availApi.rpc.kate.queryDataProof(transactionIndex, hashBlock);"),"\nwhere ",(0,o.kt)("inlineCode",{parentName:"p"},"transactionIndex")," is index of the transaction in the block and ",(0,o.kt)("inlineCode",{parentName:"p"},"hashBlock")," which is a hash of the block in which\nthe data is included. This RPC endpoint returns ",(0,o.kt)("inlineCode",{parentName:"p"},"DataProof")," object that can be used to prove on Ethereum that data is available on the Avail network.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function getProof(availApi, hashBlock, transactionIndex) {\n  const dataProof = await availApi.rpc.kate.queryDataProof(\n    transactionIndex,\n    hashBlock,\n  );\n  return dataProof;\n}\n")),(0,o.kt)("p",null,"Returned data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DataProof: {\n   root: 'H256',\n   proof: 'Vec<H256>',\n   numberOfLeaves: 'Compact<u32>',\n   leafIndex: 'Compact<u32>',\n   leaf: 'H256'\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"root")," Root hash of generated merkle tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proof")," Merkle proof items (does not contain the leaf hash, nor the root)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"numberOfLeaves")," Number of leaves in the original tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"leafIndex")," Index of the leaf the proof is for (starts from 0)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"leaf")," Leaf for which is the proof."),(0,o.kt)("admonition",{title:"Example",type:"info"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example of Verification Contract"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: Apache-2.0\n// Modified from https://github.com/QEDK/solidity-misc/blob/master/contracts/Merkle.sol\npragma solidity ^0.8.21;\n\nimport "@openzeppelin/contracts/access/Ownable.sol";\n// or for foundry:\n// import "openzeppelin-contracts/contracts/access/Ownable.sol";\n\ninterface IDataAvailabilityRouter {\n    function roots(uint32 blockNumber) external view returns (bytes32 root);\n}\n\ncontract ValidiumContract is Ownable {\n    IDataAvailabilityRouter private router;\n\n    function setRouter(\n        IDataAvailabilityRouter _router\n    ) public virtual onlyOwner {\n        router = _router;\n    }\n\n    function checkDataRootMembership(\n        uint32 blockNumber,\n        bytes32[] calldata proof,\n        uint256 width, // number of leaves\n        uint256 index,\n        bytes32 leaf\n    ) public view virtual returns (bool isMember) {\n        bytes32 rootHash = router.roots(blockNumber);\n        // if root hash is 0, block does not have a root (yet)\n        require(rootHash != bytes32(0), "INVALID_ROOT");\n        assembly ("memory-safe") {\n            if proof.length {\n                let end := add(proof.offset, shl(5, proof.length))\n                let i := proof.offset\n\n                for {} 1 {} {\n                    let leafSlot := shl(5, and(0x1, index))\n                    if eq(add(index, 1), width) {\n                        leafSlot := 0x20\n                    }\n                    mstore(leafSlot, leaf)\n                    mstore(xor(leafSlot, 32), calldataload(i))\n                    leaf := keccak256(0, 64)\n                    index := shr(1, index)\n                    i := add(i, 32)\n                    width := add(shr(1, sub(width, 1)), 1)\n                    if iszero(lt(i, end)) {\n                        break\n                    }\n                }\n            }\n        // checks if the calculated root matches the expected root\n            isMember := eq(leaf, rootHash)\n        }\n    }\n}\n')))),(0,o.kt)("p",null,"By submitting proof to the verification contract it is possible to verify\nthat data is available on Avail. Merkle proof is a list of hashes that can be used to prove\nthat given leaf is a member of the Merkle tree. Example of submitting a proof to the verification contract\ndeployed on Sepolia network for Kate (",(0,o.kt)("inlineCode",{parentName:"p"},"0xA06386C65B1f56De57CE6aB9CeEB2552fa811529"),") and Goldberg (",(0,o.kt)("inlineCode",{parentName:"p"},"0x67044689F7e274a4aC7b818FDea64Cb4604c6875"),") can be queried by calling data root membership function\n",(0,o.kt)("inlineCode",{parentName:"p"},"async function checkProof(sepoliaApi, blockNumber, proof, numberOfLeaves, leafIndex, leafHash);")," where"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sepoliaApi")," Sepolia network api instance."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"blockNumber")," Avail block number."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"proof")," Merkle proof for the leaf."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"numberOfLeaves")," Number of leaves in the original tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"leafIndex")," Index of the leaf in the Merkle tree."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"leafHash")," Hash of the leaf in the Merkle tree."),(0,o.kt)("p",null,"This will call deployed contracts function ",(0,o.kt)("inlineCode",{parentName:"p"},"verificationContract.checkDataRootMembership(blockNumber, proof, numberOfLeaves, leafIndex, leafHash)"),"\nand return ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," depending on the provided proof."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Example of getting the proof and checking it with verification contract using ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Polkadot-JS")," and ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Ethers.js"),"."),(0,o.kt)("p",{parentName:"admonition"},"Environment variables:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"AVAIL_RPC= # avail websocket address\nINFURA_KEY= # rpc provider key if needed\nVALIDIUM_ADDRESS= # address of the verification contract, one such is deployed on Sepolia network for Kate 0xA06386C65B1f56De57CE6aB9CeEB2552fa811529 or Goldberg 0x67044689F7e274a4aC7b818FDea64Cb4604c6875\nVALIDIYM_ABI_PATH= # path to abi file e.g. abi/ValidiumContract.json\nBLOCK_NUMBER= # number of the block for which to get Merkle proof\nBLOCK_HASH= # hash of the block for which to get Merkle proof\nTRANSACTION_INDEX= # index of the transaction in the block\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Submit Proof Example"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ethers } from 'ethers';\nimport * as dotenv from 'dotenv';\nimport { hexlify } from 'ethers/lib/utils.js';\nimport { readFileSync } from 'fs';\nimport { ApiPromise, WsProvider } from '@polkadot/api';\n\ndotenv.config();\n\n/**\n * Creates api instance.\n *\n * @param url websocket address\n * @returns {Promise<ApiPromise>}\n */\nasync function createApi(url) {\n  const provider = new WsProvider(url);\n\n  // Create the API and wait until ready\n  return ApiPromise.create({\n    provider,\n    rpc: {\n      kate: {\n        queryDataProof: {\n          description: 'Generate the data proof for the given `index`',\n          params: [\n            {\n              name: 'data_index',\n              type: 'u32',\n            },\n            {\n              name: 'at',\n              type: 'Hash',\n              isOptional: true,\n            },\n          ],\n          type: 'DataProof',\n        },\n      },\n    },\n    types: {\n      DataProof: {\n        root: 'H256',\n        proof: 'Vec<H256>',\n        numberOfLeaves: 'Compact<u32>',\n        leafIndex: 'Compact<u32>',\n        leaf: 'H256',\n      },\n    },\n  });\n}\n\n/**\n * Returns Merkle proof for the particular data.\n *\n * @param availApi Api instance\n * @param hashBlock Hash of the block\n * @param transactionIndex Index of the transaction in the block\n * @returns {Promise<*>}\n */\nasync function getProof(availApi, hashBlock, transactionIndex) {\n  const daHeader = await availApi.rpc.kate.queryDataProof(\n    transactionIndex,\n    hashBlock,\n  );\n  console.log(\n    `Fetched proof from Avail for txn index ${transactionIndex} inside block ${hashBlock}`,\n  );\n  return daHeader;\n}\n\n/**\n * Checks if the provided Merkle proof is valid by checking on Ethereum deployed validation contract.\n *\n * @param sepoliaApi Sepolia network api instance\n * @param blockNumber Avail block number\n * @param proof Merkle proof for the leaf\n * @param numberOfLeaves Number of leaves in the original tree\n * @param leafIndex Index of the leaf in the Merkle tree\n * @param leafHash Hash of the leaf in the Merkle tree\n * @returns {Promise<*>}\n */\nasync function checkProof(\n  sepoliaApi,\n  blockNumber,\n  proof,\n  numberOfLeaves,\n  leafIndex,\n  leafHash,\n) {\n  const abi = JSON.parse(\n    readFileSync(process.env.VALIDIYM_ABI_PATH).toString(),\n  );\n  const verificationContract = new ethers.Contract(\n    process.env.VALIDIUM_ADDRESS,\n    abi,\n    sepoliaApi,\n  );\n  return await verificationContract.checkDataRootMembership(\n    BigInt(blockNumber),\n    proof,\n    BigInt(numberOfLeaves),\n    BigInt(leafIndex),\n    leafHash,\n  );\n}\n\n(async function submitProof() {\n  // connect to Sepolia through Infura but can be used any other available provider\n  const sepoliaApi = new ethers.providers.InfuraProvider.getWebSocketProvider(\n    'sepolia',\n    process.env.INFURA_KEY,\n  );\n  const availApi = await createApi(process.env.AVAIL_RPC);\n\n  console.log(\n    `Getting proof for transaction index ${process.env.TRANSACTION_INDEX} block number ${process.env.BLOCK_NUMBER} and block hash ${process.env.BLOCK_HASH}`,\n  );\n  const daHeader = await getProof(\n    availApi,\n    process.env.BLOCK_HASH,\n    process.env.TRANSACTION_INDEX,\n  );\n\n  console.log(`Data Root: ${hexlify(daHeader.root)}`);\n  console.log(`Proof: ${daHeader.proof}`);\n  console.log(`Leaf to prove: ${hexlify(daHeader.leaf)}`);\n  console.log(`Leaf index : ${daHeader.leafIndex}`);\n  console.log(`Number of leaves: ${daHeader.numberOfLeaves}`);\n\n  const isDataAccepted = await checkProof(\n    sepoliaApi,\n    process.env.BLOCK_NUMBER,\n    daHeader.proof,\n    daHeader.numberOfLeaves,\n    daHeader.leafIndex,\n    daHeader.leaf,\n  );\n  console.log('Data is: ' + (isDataAccepted ? 'available' : 'not available'));\n  await availApi.disconnect();\n  await sepoliaApi.destroy();\n})()\n  .then(() => {\n    console.log('Done');\n  })\n  .catch((err) => {\n    console.error(err);\n    process.exit(1);\n  });\n")))))}m.isMDXComponent=!0}}]);