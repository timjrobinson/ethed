"use strict";(self.webpackChunkethed=self.webpackChunkethed||[]).push([[220],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1625:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Cardano",c={unversionedId:"other-chains/cardano",id:"other-chains/cardano",isDocsHomePage:!1,title:"Cardano",description:"Compliments",source:"@site/docs/other-chains/cardano.md",sourceDirName:"other-chains",slug:"/other-chains/cardano",permalink:"/docs/other-chains/cardano",editUrl:"https://github.com/timjrobinson/ethed/tree/main/docs/other-chains/cardano.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitcoin",permalink:"/docs/other-chains/bitcoin"},next:{title:"Solana",permalink:"/docs/other-chains/solana"}},h=[{value:"Compliments",id:"compliments",children:[],level:2},{value:"Criticisms",id:"criticisms",children:[{value:"Bad Tech",id:"bad-tech",children:[],level:3},{value:"Concurrency Problem",id:"concurrency-problem",children:[],level:3},{value:"No Fee Market",id:"no-fee-market",children:[],level:3},{value:"Bad Choice of Programming Language",id:"bad-choice-of-programming-language",children:[],level:3},{value:"Slower Development",id:"slower-development",children:[],level:3}],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cardano"},"Cardano"),(0,o.kt)("h2",{id:"compliments"},"Compliments"),(0,o.kt)("p",null,"Cardano has a great marketing team, and a ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jackniewold/status/1466823469564248068"},"very effective MLM like recruiting scheme")),(0,o.kt)("p",null,"There is a lot of ADA, making the individual price lower, which confuses newbies who think it's \"cheap\" because they don't understand market caps."),(0,o.kt)("h2",{id:"criticisms"},"Criticisms"),(0,o.kt)("h3",{id:"bad-tech"},"Bad Tech"),(0,o.kt)("p",null,"Cardano currently has 20s block times, little data availability, and problems with concurrency. On a technical level it's similar to Ethereum in 2016."),(0,o.kt)("h3",{id:"concurrency-problem"},"Concurrency Problem"),(0,o.kt)("p",null,"Cardano uses UTXO's to manage state. You can think of these like little pipes that money or data is sent through. Once they're done on their task they create a new UTXO that all their money + data goes into, and they self destruct. Your wallet is just a collection of all the UTXO's that you own. This is also how Bitcoin works."),(0,o.kt)("p",null,"The problems occur when there is one big pool of money or data in a smart contract that multiple people want to access, like say in a Liquidity pool for a Decentralized exchange."),(0,o.kt)("p",null,"Multiple people want to trade against these liquidity pools, and it's best to keep assets in as few pools as possible so that they aren't drained when people trade against them. Each liquidity pool has a UTXO."),(0,o.kt)("p",null,"When Alice trades with that liquidity pool, she destroys that UTXO and creates a new one for the liquidity pool."),(0,o.kt)("p",null,"When Bob trades with that liquidity pool, he needs to point to the current Liquidity pool UTXO. If he uses the one he knows about, it was just destroyed by Alice, so cannot be used."),(0,o.kt)("p",null,"Bob could trade against the UTXO that Alice just created, but a block hasn't been published yet, so it hasn't been created yet. Bob has to wait for the next block to trade against the UTXO that Alice created."),(0,o.kt)("p",null,"This means Decentralized Exchanges on Cardano can only handle one interaction per block."),(0,o.kt)("p",null,"This can be fixed with a sequencer, that for each block it ties the transactions together in an order. But Cardano has no sequencers, so the sequencer would need to be run off-chain by someone in a centralized way, which gives them powers to censor transactions, front-run them etc. This defeats the point of having a decentralized exchange."),(0,o.kt)("p",null,"A Decentralized sequencer could be made eventually, or some kind of side chain that handles the coordination problem. But this requires a lot more development thought and time, when other chains don't have this problem. "),(0,o.kt)("h3",{id:"no-fee-market"},"No Fee Market"),(0,o.kt)("h3",{id:"bad-choice-of-programming-language"},"Bad Choice of Programming Language"),(0,o.kt)("p",null,"Cardano uses Haskell as it's primary language. While it is a nice language, there are ",(0,o.kt)("a",{parentName:"p",href:"https://insights.stackoverflow.com/survey/2021#technology-most-popular-technologies"},"very few developers who understand and enjoy programming in haskell")),(0,o.kt)("h3",{id:"slower-development"},"Slower Development"),(0,o.kt)("p",null,"Cardano has been in development since 2016, and only just released smart contracts in 2021. It still (as of December 10, 2021) has no working dapps on mainnet."),(0,o.kt)("p",null,"While some see this as an advantage, that they are \"taking their time to make sure it's right\" this hasn't proven to be better in practice, as Cardano is only now\nreleasing similar technology to what Ethereum had 5 years prior, and is releasing upgrades even slower than Ethereum."))}u.isMDXComponent=!0}}]);