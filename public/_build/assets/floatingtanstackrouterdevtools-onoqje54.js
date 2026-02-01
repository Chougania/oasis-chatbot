import{d as vt,f as qe,h as ge,k as Oe,l as D,m as S,t as L,n as p,o as V,p as d,q as l,v as Ie,x as pt,i as Ct,y as Je,z as St,A as Ne,B as dt,C as _t,D as wt}from"./client-Bt08AdDp.js";const ht=vt(void 0),$t=vt(void 0),Ft=()=>{const e=qe($t);if(!e)throw new Error("useDevtoolsOnClose must be used within a TanStackRouterDevtools component");return e};function xt(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var g=e.length;for(t=0;t<g;t++)e[t]&&(n=xt(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function W(){for(var e,t,n=0,i="",g=arguments.length;n<g;n++)(e=arguments[n])&&(t=xt(e))&&(i&&(i+=" "),i+=t);return i}const zt=typeof window>"u";function Ve(e){const t={pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"};return e.isFetching&&e.status==="success"?e.isFetching==="beforeLoad"?"purple":"blue":t[e.status]}function Ut(e,t){const n=e.find(i=>i.routeId===t.id);return n?Ve(n):"gray"}function Mt(){const[e,t]=ge(!1);return(zt?Oe:D)(()=>{t(!0)}),e}const Bt=e=>{const t=Object.getOwnPropertyNames(Object(e)),n=typeof e=="bigint"?`${e.toString()}n`:e;try{return JSON.stringify(n,t)}catch{return"unable to stringify"}};function Dt(e,t=[n=>n]){return e.map((n,i)=>[n,i]).sort(([n,i],[g,s])=>{for(const a of t){const c=a(n),u=a(g);if(typeof c>"u"){if(typeof u>"u")continue;return 1}if(c!==u)return c>u?1:-1}return i-s}).map(([n])=>n)}let Et={data:""},Ot=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Et,It=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Gt=/\/\*[^]*?\*\/|  +/g,ct=/\n+/g,ke=(e,t)=>{let n="",i="",g="";for(let s in e){let a=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+a+";":i+=s[1]=="f"?ke(a,s):s+"{"+ke(a,s[1]=="k"?"":t)+"}":typeof a=="object"?i+=ke(a,t?t.replace(/([^,])+/g,c=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,c):c?c+" "+u:u)):s):a!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),g+=ke.p?ke.p(s,a):s+":"+a+";")}return n+(t&&g?t+"{"+g+"}":g)+i},$e={},mt=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+mt(e[n]);return t}return e},Tt=(e,t,n,i,g)=>{let s=mt(e),a=$e[s]||($e[s]=(u=>{let o=0,r=11;for(;o<u.length;)r=101*r+u.charCodeAt(o++)>>>0;return"go"+r})(s));if(!$e[a]){let u=s!==e?e:(o=>{let r,$,x=[{}];for(;r=It.exec(o.replace(Gt,""));)r[4]?x.shift():r[3]?($=r[3].replace(ct," ").trim(),x.unshift(x[0][$]=x[0][$]||{})):x[0][r[1]]=r[2].replace(ct," ").trim();return x[0]})(e);$e[a]=ke(g?{["@keyframes "+a]:u}:u,n?"":"."+a)}let c=n&&$e.g?$e.g:null;return n&&($e.g=$e[a]),((u,o,r,$)=>{$?o.data=o.data.replace($,u):o.data.indexOf(u)===-1&&(o.data=r?u+o.data:o.data+u)})($e[a],t,i,c),a},At=(e,t,n)=>e.reduce((i,g,s)=>{let a=t[s];if(a&&a.call){let c=a(n),u=c&&c.props&&c.props.className||/^go/.test(c)&&c;a=u?"."+u:c&&typeof c=="object"?c.props?"":ke(c,""):c===!1?"":c}return i+g+(a??"")},"");function Fe(e){let t=this||{},n=e.call?e(t.p):e;return Tt(n.unshift?n.raw?At(n,[].slice.call(arguments,1),t.p):n.reduce((i,g)=>Object.assign(i,g&&g.call?g(t.p):g),{}):n,Ot(t.target),t.g,t.o,t.k)}Fe.bind({g:1});Fe.bind({k:1});const B={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",70:"b3",20:"33"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",full:"9999px"}},size:{0:"0px",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",5:"calc(var(--tsrd-font-size) * 1.25)",8:"calc(var(--tsrd-font-size) * 2)"}},Rt=e=>{const{colors:t,font:n,size:i,alpha:g,border:s}=B,{fontFamily:a,lineHeight:c,size:u}=n,o=e?Fe.bind({target:e}):Fe;return{devtoolsPanelContainer:o`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:r=>o`
        visibility: ${r?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:r=>r()?o`
          transition: none;
        `:o`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(r,$)=>r?o`
          pointer-events: auto;
          transform: translateY(0);
        `:o`
        pointer-events: none;
        transform: translateY(${$}px);
      `,logo:o`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${a.sans};
      gap: ${B.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:o`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:o`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:o`
      display: flex;
      font-size: ${u.sm};
      font-family: ${a.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${u.xs};
      }
    `,dragHandle:o`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${g[90]};
      }
    `,firstContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:o`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:o`
      padding: ${B.size[2]};
    `,row:o`
      display: flex;
      align-items: center;
      padding: ${B.size[2]} ${B.size[2.5]};
      gap: ${B.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:o`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${B.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      min-height: ${B.size[8]};
      line-height: ${n.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:o`
      background: ${t.yellow[900]}${g[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${B.size[0]} ${B.size[2.5]};
      border-radius: ${s.radius.full};
      font-size: ${n.size.xs};
      font-weight: ${n.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:o`
      color: ${t.yellow[300]};
    `,detailsContent:o`
      padding: ${B.size[1.5]} ${B.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${n.size.xs};
    `,routeMatchesToggle:o`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${s.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(r,$)=>{const y=[o`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${a.sans};
        font-weight: ${n.weight.medium};
      `];if(r){const T=o`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;y.push(T)}else{const T=o`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${g[20]};
        `;y.push(T)}return $&&y.push(o`
          border-right: 1px solid ${B.colors.gray[500]};
        `),y},detailsHeaderInfo:o`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${n.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:r=>{const x=[o`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${i[1]} ${i[2]};
        gap: ${i[2]};
        font-size: ${u.xs};
        color: ${t.gray[300]};
      `];if(r){const y=o`
          background: ${t.darkGray[500]};
        `;x.push(y)}return x},matchIndicator:r=>{const x=[o`
        flex: 0 0 auto;
        width: ${i[3]};
        height: ${i[3]};
        background: ${t[r][900]};
        border: 1px solid ${t[r][500]};
        border-radius: ${s.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(r==="gray"){const y=o`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;x.push(y)}return x},matchID:o`
      flex: 1;
      line-height: ${c.xs};
    `,ageTicker:r=>{const x=[o`
        display: flex;
        gap: ${i[1]};
        font-size: ${u.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${c.xs};
      `];if(r){const y=o`
          color: ${t.yellow[400]};
        `;x.push(y)}return x},secondContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:o`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:o`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(r,$)=>{const y=[o`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${i[1]} ${i[2]};
        gap: ${i[2]};
        font-size: ${u.xs};
        color: ${t.gray[300]};
        cursor: ${$?"pointer":"default"};
        line-height: ${c.xs};
      `];if(r){const T=o`
          background: ${t.darkGray[500]};
        `;y.push(T)}return y},routesRow:r=>{const x=[o`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${u.xs};
        line-height: ${c.xs};
      `];if(!r){const y=o`
          color: ${t.gray[400]};
        `;x.push(y)}return x},routeParamInfo:o`
      color: ${t.gray[400]};
      font-size: ${u.xs};
      line-height: ${c.xs};
    `,nestedRouteRow:r=>o`
        margin-left: ${r?0:i[3.5]};
        border-left: ${r?"":`solid 1px ${t.gray[700]}`};
      `,code:o`
      font-size: ${u.xs};
      line-height: ${c.xs};
    `,matchesContainer:o`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:o`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,maskedBadgeContainer:o`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:o`
      display: flex;
      flex-direction: column;
      padding: ${B.size[2]};
      font-size: ${B.font.size.xs};
      color: ${B.colors.gray[300]};
      line-height: ${B.font.lineHeight.sm};
    `,matchStatus:(r,$)=>{const y=$&&r==="success"?$==="beforeLoad"?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[r];return o`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${B.border.radius.sm};
        font-weight: ${B.font.weight.normal};
        background-color: ${B.colors[y][900]}${B.alpha[90]};
        color: ${B.colors[y][300]};
        border: 1px solid ${B.colors[y][600]};
        margin-bottom: ${B.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:o`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:o`
      display: flex;
    `,mainCloseBtn:o`
      background: ${t.darkGray[700]};
      padding: ${i[1]} ${i[2]} ${i[1]} ${i[1.5]};
      border-radius: ${s.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${n.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:r=>o`
        ${r==="top-left"?`top: ${i[2]}; left: ${i[2]};`:""}
        ${r==="top-right"?`top: ${i[2]}; right: ${i[2]};`:""}
        ${r==="bottom-left"?`bottom: ${i[2]}; left: ${i[2]};`:""}
        ${r==="bottom-right"?`bottom: ${i[2]}; right: ${i[2]};`:""}
      `,mainCloseBtnAnimation:r=>r?o`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:o`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:o`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:o`
      width: 1px;
      background: ${B.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:o`
      position: relative;
      width: ${i[5]};
      height: ${i[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:o`
      width: ${i[5]};
      height: ${i[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:o`
      width: ${i[4]};
      height: ${i[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:o`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${i[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${s.radius.sm} ${s.radius.sm} 0px 0px;
      padding: ${i[1]} ${i[1.5]} ${i[.5]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }
    `,panelCloseBtnIcon:o`
      color: ${t.gray[400]};
      width: ${i[2]};
      height: ${i[2]};
    `}};function Ge(){const e=qe(ht),[t]=ge(Rt(e));return t}const Lt=e=>{try{const t=localStorage.getItem(e);return typeof t=="string"?JSON.parse(t):void 0}catch{return}};function je(e,t){const[n,i]=ge();return Oe(()=>{const s=Lt(e);i(typeof s>"u"||s===null?typeof t=="function"?t():t:s)}),[n,s=>{i(a=>{let c=s;typeof s=="function"&&(c=s(a));try{localStorage.setItem(e,JSON.stringify(c))}catch{}return c})}]}var Pt=L('<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">'),Le=L("<div>"),jt=L("<button><span> "),Ht=L("<div><div><button> [<!> ... <!>]"),Nt=L("<button><span></span> 🔄 "),Vt=L("<span>:"),Yt=L("<span>");const ft=({expanded:e,style:t={}})=>{const n=bt();return(()=>{var i=Pt(),g=i.firstChild;return D(s=>{var a=n().expander,c=W(n().expanderIcon(e));return a!==s.e&&d(i,s.e=a),c!==s.t&&l(g,"class",s.t=c),s},{e:void 0,t:void 0}),i})()};function qt(e,t){if(t<1)return[];let n=0;const i=[];for(;n<e.length;)i.push(e.slice(n,n+t)),n=n+t;return i}function Jt(e){return Symbol.iterator in e}function we({value:e,defaultExpanded:t,pageSize:n=100,filterSubEntries:i,...g}){const[s,a]=ge(!!t),c=()=>a(h=>!h),u=S(()=>typeof e()),o=S(()=>{let h=[];const R=m=>{const v=t===!0?{[m.label]:!0}:t?.[m.label];return{...m,value:()=>m.value,defaultExpanded:v}};return Array.isArray(e())?h=e().map((m,v)=>R({label:v.toString(),value:m})):e()!==null&&typeof e()=="object"&&Jt(e())&&typeof e()[Symbol.iterator]=="function"?h=Array.from(e(),(m,v)=>R({label:v.toString(),value:m})):typeof e()=="object"&&e()!==null&&(h=Object.entries(e()).map(([m,v])=>R({label:m,value:v}))),i?i(h):h}),r=S(()=>qt(o(),n)),[$,x]=ge([]),[y,T]=ge(void 0),A=bt(),ee=()=>{T(e()())},te=h=>V(we,Ie({value:e,filterSubEntries:i},g,h));return(()=>{var h=Le();return p(h,(()=>{var R=S(()=>!!r().length);return()=>R()?[(()=>{var m=jt(),v=m.firstChild,z=v.firstChild;return m.$$click=()=>c(),p(m,V(ft,{get expanded(){return s()??!1}}),v),p(m,()=>g.label,v),p(v,()=>String(u).toLowerCase()==="iterable"?"(Iterable) ":"",z),p(v,()=>o().length,z),p(v,()=>o().length>1?"items":"item",null),D(q=>{var Z=A().expandButton,w=A().info;return Z!==q.e&&d(m,q.e=Z),w!==q.t&&d(v,q.t=w),q},{e:void 0,t:void 0}),m})(),S(()=>S(()=>!!(s()??!1))()?S(()=>r().length===1)()?(()=>{var m=Le();return p(m,()=>o().map((v,z)=>te(v))),D(()=>d(m,A().subEntries)),m})():(()=>{var m=Le();return p(m,()=>r().map((v,z)=>(()=>{var q=Ht(),Z=q.firstChild,w=Z.firstChild,J=w.firstChild,ve=J.nextSibling,fe=ve.nextSibling,de=fe.nextSibling;return de.nextSibling,w.$$click=()=>x(N=>N.includes(z)?N.filter(Q=>Q!==z):[...N,z]),p(w,V(ft,{get expanded(){return $().includes(z)}}),J),p(w,z*n,ve),p(w,z*n+n-1,de),p(Z,(()=>{var N=S(()=>!!$().includes(z));return()=>N()?(()=>{var Q=Le();return p(Q,()=>v.map(ne=>te(ne))),D(()=>d(Q,A().subEntries)),Q})():null})(),null),D(N=>{var Q=A().entry,ne=W(A().labelButton,"labelButton");return Q!==N.e&&d(Z,N.e=Q),ne!==N.t&&d(w,N.t=ne),N},{e:void 0,t:void 0}),q})())),D(()=>d(m,A().subEntries)),m})():null)]:(()=>{var m=S(()=>u()==="function");return()=>m()?V(we,{get label(){return(()=>{var v=Nt(),z=v.firstChild;return v.$$click=ee,p(z,()=>g.label),D(()=>d(v,A().refreshValueBtn)),v})()},value:y,defaultExpanded:{}}):[(()=>{var v=Vt(),z=v.firstChild;return p(v,()=>g.label,z),v})()," ",(()=>{var v=Yt();return p(v,()=>Bt(e())),D(()=>d(v,A().value)),v})()]})()})()),D(()=>d(h,A().entry)),h})()}const Kt=e=>{const{colors:t,font:n,size:i}=B,{fontFamily:g,lineHeight:s,size:a}=n,c=e?Fe.bind({target:e}):Fe;return{entry:c`
      font-family: ${g.mono};
      font-size: ${a.xs};
      line-height: ${s.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:c`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:c`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${i[3]};
      height: ${i[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:u=>u?c`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:c`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:c`
      display: flex;
      gap: ${i[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:c`
      color: ${t.purple[400]};
    `,subEntries:c`
      margin-left: ${i[2]};
      padding-left: ${i[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:c`
      color: ${t.gray[500]};
      font-size: ${a["2xs"]};
      padding-left: ${i[1]};
    `,refreshValueBtn:c`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${g.mono};
      font-size: ${a.xs};
    `}};function bt(){const e=qe(ht),[t]=ge(Kt(e));return t}pt(["click"]);var Wt=L("<div><div></div><div>/</div><div></div><div>/</div><div>");function He(e){const t=["s","min","h","d"],n=[e/1e3,e/6e4,e/36e5,e/864e5];let i=0;for(let s=1;s<n.length&&!(n[s]<1);s++)i=s;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(n[i])+t[i]}function Ye({match:e,router:t}){const n=Ge();if(!e)return null;const i=t().looseRoutesById[e.routeId];if(!i.options.loader)return null;const g=Date.now()-e.updatedAt,s=i.options.staleTime??t().options.defaultStaleTime??0,a=i.options.gcTime??t().options.defaultGcTime??30*60*1e3;return(()=>{var c=Wt(),u=c.firstChild,o=u.nextSibling,r=o.nextSibling,$=r.nextSibling,x=$.nextSibling;return p(u,()=>He(g)),p(r,()=>He(s)),p(x,()=>He(a)),D(()=>d(c,W(n().ageTicker(g>s)))),c})()}var Zt=L("<button><div>TANSTACK</div><div>TanStack Router v1"),Qt=L("<div><div role=button><div></div><div><div><code> </code><code>"),Pe=L("<div>"),Xt=L('<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button></div><div><div>age / staleTime / gcTime</div></div></div><div>'),ei=L("<div><span>masked"),ti=L("<code>"),ut=L("<div role=button><div></div><code>"),ii=L("<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>"),ri=L("<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>"),ni=L("<div>Loader Data"),oi=L("<div><div>Search Params</div><div>");function li(e){const{className:t,...n}=e,i=Ge();return(()=>{var g=Zt(),s=g.firstChild,a=s.nextSibling;return Je(g,Ie(n,{get class(){return W(i().logo,t?t():"")}}),!1,!0),D(c=>{var u=i().tanstackLogo,o=i().routerLogo;return u!==c.e&&d(s,c.e=u),o!==c.t&&d(a,c.t=o),c},{e:void 0,t:void 0}),g})()}function yt({routerState:e,router:t,route:n,isRoot:i,activeId:g,setActiveId:s}){const a=Ge(),c=S(()=>e().pendingMatches||e().matches),u=S(()=>e().matches.find(r=>r.routeId===n.id)),o=S(()=>{var r,$;try{if((r=u())!=null&&r.params){const x=($=u())==null?void 0:$.params,y=n.path||dt(n.id);if(y.startsWith("$")){const T=y.slice(1);if(x[T])return`(${x[T]})`}}return""}catch{return""}});return(()=>{var r=Qt(),$=r.firstChild,x=$.firstChild,y=x.nextSibling,T=y.firstChild,A=T.firstChild,ee=A.firstChild,te=A.nextSibling;return $.$$click=()=>{u()&&s(g()===n.id?"":n.id)},p(A,()=>i?Ne:n.path||dt(n.id),ee),p(te,o),p(y,V(Ye,{get match(){return u()},router:t}),null),p(r,(()=>{var h=S(()=>{var R;return!!((R=n.children)!=null&&R.length)});return()=>h()?(()=>{var R=Pe();return p(R,()=>[...n.children].sort((m,v)=>m.rank-v.rank).map(m=>V(yt,{routerState:e,router:t,route:m,activeId:g,setActiveId:s}))),D(()=>d(R,a().nestedRouteRow(!!i))),R})():null})(),null),D(h=>{var R=`Open match details for ${n.id}`,m=W(a().routesRowContainer(n.id===g(),!!u())),v=W(a().matchIndicator(Ut(c(),n))),z=W(a().routesRow(!!u())),q=a().code,Z=a().routeParamInfo;return R!==h.e&&l($,"aria-label",h.e=R),m!==h.t&&d($,h.t=m),v!==h.a&&d(x,h.a=v),z!==h.o&&d(y,h.o=z),q!==h.i&&d(A,h.i=q),Z!==h.n&&d(te,h.n=Z),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),r})()}const si=function({...t}){const{isOpen:n=!0,setIsOpen:i,handleDragStart:g,router:s,routerState:a,shadowDOMTarget:c,...u}=t,{onCloseClick:o}=Ft(),r=Ge(),{className:$,style:x,...y}=u;Ct(s);const[T,A]=je("tanstackRouterDevtoolsShowMatches",!0),[ee,te]=je("tanstackRouterDevtoolsActiveRouteId",""),h=S(()=>[...a().pendingMatches??[],...a().matches,...a().cachedMatches].find(J=>J.routeId===ee()||J.id===ee())),R=S(()=>Object.keys(a().location.search).length),m=S(()=>({...s(),state:a()})),v=S(()=>Object.fromEntries(Dt(Object.keys(m()),["state","routesById","routesByPath","flatRoutes","options","manifest"].map(w=>J=>J!==w)).map(w=>[w,m()[w]]).filter(w=>typeof w[1]!="function"&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(w[0])))),z=S(()=>{var w;return(w=h())==null?void 0:w.loaderData}),q=S(()=>h()),Z=S(()=>a().location.search);return(()=>{var w=Xt(),J=w.firstChild,ve=J.firstChild,fe=J.nextSibling,de=fe.firstChild,N=de.nextSibling,Q=N.firstChild,ne=fe.nextSibling,Ce=ne.firstChild,pe=Ce.firstChild;pe.firstChild;var M=pe.nextSibling,Y=M.firstChild,K=M.nextSibling,ie=K.firstChild,P=ie.firstChild,oe=P.nextSibling,E=ie.nextSibling,ue=K.nextSibling;return Je(w,Ie({get class(){return W(r().devtoolsPanel,"TanStackRouterDevtoolsPanel",$?$():"")},get style(){return x?x():""}},y),!1,!0),p(w,g?(()=>{var f=Pe();return St(f,"mousedown",g,!0),D(()=>d(f,r().dragHandle)),f})():null,J),J.$$click=f=>{i&&i(!1),o(f)},p(de,V(li,{"aria-hidden":!0,onClick:f=>{i&&i(!1),o(f)}})),p(Q,V(we,{label:"Router",value:v,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:f=>f.filter(k=>typeof k.value()!="function")})),p(pe,(()=>{var f=S(()=>!!a().location.maskedLocation);return()=>f()?(()=>{var k=ei(),U=k.firstChild;return D(I=>{var C=r().maskedBadgeContainer,j=r().maskedBadge;return C!==I.e&&d(k,I.e=C),j!==I.t&&d(U,I.t=j),I},{e:void 0,t:void 0}),k})():null})(),null),p(Y,()=>a().location.pathname),p(M,(()=>{var f=S(()=>!!a().location.maskedLocation);return()=>f()?(()=>{var k=ti();return p(k,()=>{var U;return(U=a().location.maskedLocation)==null?void 0:U.pathname}),D(()=>d(k,r().maskedLocation)),k})():null})(),null),P.$$click=()=>{A(!1)},oe.$$click=()=>{A(!0)},p(ue,(()=>{var f=S(()=>!T());return()=>f()?V(yt,{routerState:a,router:s,get route(){return s().routeTree},isRoot:!0,activeId:ee,setActiveId:te}):(()=>{var k=Pe();return p(k,()=>{var U,I;return(I=(U=a().pendingMatches)!=null&&U.length?a().pendingMatches:a().matches)==null?void 0:I.map((C,j)=>(()=>{var _=ut(),O=_.firstChild,X=O.nextSibling;return _.$$click=()=>te(ee()===C.id?"":C.id),p(X,()=>`${C.routeId===Ne?Ne:C.pathname}`),p(_,V(Ye,{match:C,router:s}),null),D(G=>{var H=`Open match details for ${C.id}`,re=W(r().matchRow(C===h())),ae=W(r().matchIndicator(Ve(C))),le=r().matchID;return H!==G.e&&l(_,"aria-label",G.e=H),re!==G.t&&d(_,G.t=re),ae!==G.a&&d(O,G.a=ae),le!==G.o&&d(X,G.o=le),G},{e:void 0,t:void 0,a:void 0,o:void 0}),_})())}),k})()})()),p(ne,(()=>{var f=S(()=>!!a().cachedMatches.length);return()=>f()?(()=>{var k=ii(),U=k.firstChild,I=U.firstChild,C=I.nextSibling,j=U.nextSibling;return p(j,()=>a().cachedMatches.map(_=>(()=>{var O=ut(),X=O.firstChild,G=X.nextSibling;return O.$$click=()=>te(ee()===_.id?"":_.id),p(G,()=>`${_.id}`),p(O,V(Ye,{match:_,router:s}),null),D(H=>{var re=`Open match details for ${_.id}`,ae=W(r().matchRow(_===h())),le=W(r().matchIndicator(Ve(_))),ce=r().matchID;return re!==H.e&&l(O,"aria-label",H.e=re),ae!==H.t&&d(O,H.t=ae),le!==H.a&&d(X,H.a=le),ce!==H.o&&d(G,H.o=ce),H},{e:void 0,t:void 0,a:void 0,o:void 0}),O})())),D(_=>{var O=r().cachedMatchesContainer,X=r().detailsHeader,G=r().detailsHeaderInfo;return O!==_.e&&d(k,_.e=O),X!==_.t&&d(U,_.t=X),G!==_.a&&d(C,_.a=G),_},{e:void 0,t:void 0,a:void 0}),k})():null})(),null),p(w,(()=>{var f=S(()=>{var k;return!!(h()&&((k=h())!=null&&k.status))});return()=>f()?(()=>{var k=ri(),U=k.firstChild,I=U.nextSibling,C=I.firstChild,j=C.firstChild,_=j.firstChild,O=j.nextSibling,X=O.firstChild,G=X.nextSibling,H=G.firstChild,re=O.nextSibling,ae=re.firstChild,le=ae.nextSibling,ce=re.nextSibling,me=ce.firstChild,xe=me.nextSibling,he=I.nextSibling,be=he.nextSibling;return p(_,(()=>{var b=S(()=>{var F,se;return!!(((F=h())==null?void 0:F.status)==="success"&&((se=h())!=null&&se.isFetching))});return()=>{var F;return b()?"fetching":(F=h())==null?void 0:F.status}})()),p(H,()=>{var b;return(b=h())==null?void 0:b.id}),p(le,(()=>{var b=S(()=>{var F;return!!((F=a().pendingMatches)!=null&&F.find(se=>{var ye;return se.id===((ye=h())==null?void 0:ye.id)}))});return()=>b()?"Pending":a().matches.find(F=>{var se;return F.id===((se=h())==null?void 0:se.id)})?"Active":"Cached"})()),p(xe,(()=>{var b=S(()=>{var F;return!!((F=h())!=null&&F.updatedAt)});return()=>{var F;return b()?new Date((F=h())==null?void 0:F.updatedAt).toLocaleTimeString():"N/A"}})()),p(k,(()=>{var b=S(()=>!!z());return()=>b()?[(()=>{var F=ni();return D(()=>d(F,r().detailsHeader)),F})(),(()=>{var F=Pe();return p(F,V(we,{label:"loaderData",value:z,defaultExpanded:{}})),D(()=>d(F,r().detailsContent)),F})()]:null})(),he),p(be,V(we,{label:"Match",value:q,defaultExpanded:{}})),D(b=>{var F,se,ye=r().thirdContainer,ze=r().detailsHeader,Se=r().matchDetails,Ue=r().matchStatus((F=h())==null?void 0:F.status,(se=h())==null?void 0:se.isFetching),Te=r().matchDetailsInfoLabel,_e=r().matchDetailsInfo,Ae=r().matchDetailsInfoLabel,Me=r().matchDetailsInfo,Re=r().matchDetailsInfoLabel,Be=r().matchDetailsInfo,De=r().detailsHeader,Ee=r().detailsContent;return ye!==b.e&&d(k,b.e=ye),ze!==b.t&&d(U,b.t=ze),Se!==b.a&&d(C,b.a=Se),Ue!==b.o&&d(j,b.o=Ue),Te!==b.i&&d(O,b.i=Te),_e!==b.n&&d(G,b.n=_e),Ae!==b.s&&d(re,b.s=Ae),Me!==b.h&&d(le,b.h=Me),Re!==b.r&&d(ce,b.r=Re),Be!==b.d&&d(xe,b.d=Be),De!==b.l&&d(he,b.l=De),Ee!==b.u&&d(be,b.u=Ee),b},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),k})():null})(),null),p(w,(()=>{var f=S(()=>!!R());return()=>f()?(()=>{var k=oi(),U=k.firstChild,I=U.nextSibling;return p(I,V(we,{value:Z,get defaultExpanded(){return Object.keys(a().location.search).reduce((C,j)=>(C[j]={},C),{})}})),D(C=>{var j=r().fourthContainer,_=r().detailsHeader,O=r().detailsContent;return j!==C.e&&d(k,C.e=j),_!==C.t&&d(U,C.t=_),O!==C.a&&d(I,C.a=O),C},{e:void 0,t:void 0,a:void 0}),k})():null})(),null),D(f=>{var k=r().panelCloseBtn,U=r().panelCloseBtnIcon,I=r().firstContainer,C=r().row,j=r().routerExplorerContainer,_=r().routerExplorer,O=r().secondContainer,X=r().matchesContainer,G=r().detailsHeader,H=r().detailsContent,re=r().detailsHeader,ae=r().routeMatchesToggle,le=!T(),ce=W(r().routeMatchesToggleBtn(!T(),!0)),me=T(),xe=W(r().routeMatchesToggleBtn(!!T(),!1)),he=r().detailsHeaderInfo,be=W(r().routesContainer);return k!==f.e&&d(J,f.e=k),U!==f.t&&l(ve,"class",f.t=U),I!==f.a&&d(fe,f.a=I),C!==f.o&&d(de,f.o=C),j!==f.i&&d(N,f.i=j),_!==f.n&&d(Q,f.n=_),O!==f.s&&d(ne,f.s=O),X!==f.h&&d(Ce,f.h=X),G!==f.r&&d(pe,f.r=G),H!==f.d&&d(M,f.d=H),re!==f.l&&d(K,f.l=re),ae!==f.u&&d(ie,f.u=ae),le!==f.c&&(P.disabled=f.c=le),ce!==f.w&&d(P,f.w=ce),me!==f.m&&(oe.disabled=f.m=me),xe!==f.f&&d(oe,f.f=xe),he!==f.y&&d(E,f.y=he),be!==f.g&&d(ue,f.g=be),f},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),w})()};pt(["click","mousedown"]);var ai=L('<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">');function gt(){const e=_t();return(()=>{var t=ai(),n=t.firstChild,i=n.firstChild,g=i.nextSibling,s=g.nextSibling,a=s.firstChild,c=s.nextSibling,u=c.firstChild,o=c.nextSibling,r=o.nextSibling,$=r.firstChild,x=r.nextSibling,y=x.firstChild,T=x.nextSibling,A=T.nextSibling,ee=A.firstChild,te=A.nextSibling,h=te.firstChild,R=te.nextSibling,m=R.nextSibling,v=m.firstChild,z=m.nextSibling,q=z.firstChild,Z=z.nextSibling,w=Z.nextSibling,J=w.firstChild,ve=w.nextSibling,fe=ve.firstChild,de=ve.nextSibling,N=de.nextSibling,Q=N.firstChild,ne=N.nextSibling,Ce=ne.firstChild,pe=ne.nextSibling,M=pe.nextSibling,Y=M.firstChild,K=M.nextSibling,ie=K.firstChild,P=K.nextSibling,oe=P.firstChild,E=oe.nextSibling,ue=E.nextSibling,f=P.nextSibling,k=f.firstChild,U=f.nextSibling,I=U.firstChild,C=U.nextSibling,j=C.firstChild,_=j.nextSibling,O=_.nextSibling,X=O.nextSibling,G=X.nextSibling,H=G.nextSibling,re=H.nextSibling,ae=re.nextSibling,le=ae.nextSibling,ce=le.nextSibling,me=ce.nextSibling,xe=me.nextSibling,he=xe.nextSibling,be=he.nextSibling,b=C.nextSibling,F=b.firstChild,se=b.nextSibling,ye=se.firstChild,ze=se.nextSibling,Se=ze.nextSibling,Ue=Se.nextSibling,Te=Ue.firstChild,_e=Ue.nextSibling,Ae=_e.firstChild,Me=_e.nextSibling,Re=Me.firstChild,Be=Re.firstChild,De=Be.nextSibling,Ee=De.nextSibling,Ke=Ee.nextSibling,We=Ke.nextSibling,Ze=We.nextSibling,Qe=Ze.nextSibling,Xe=Qe.nextSibling,et=Xe.nextSibling,tt=et.nextSibling,it=tt.nextSibling,rt=it.nextSibling,nt=rt.nextSibling,ot=nt.nextSibling,lt=ot.nextSibling,st=lt.nextSibling,at=st.nextSibling,kt=at.nextSibling;return l(i,"id",`a-${e}`),l(g,"fill",`url(#a-${e})`),l(a,"id",`b-${e}`),l(c,"id",`c-${e}`),l(u,"filter",`url(#b-${e})`),l(o,"mask",`url(#c-${e})`),l($,"id",`d-${e}`),l(x,"id",`e-${e}`),l(y,"filter",`url(#d-${e})`),l(T,"mask",`url(#e-${e})`),l(ee,"id",`f-${e}`),l(te,"id",`g-${e}`),l(h,"filter",`url(#f-${e})`),l(R,"mask",`url(#g-${e})`),l(v,"id",`h-${e}`),l(z,"id",`i-${e}`),l(q,"filter",`url(#h-${e})`),l(Z,"mask",`url(#i-${e})`),l(J,"id",`j-${e}`),l(ve,"id",`k-${e}`),l(fe,"filter",`url(#j-${e})`),l(de,"mask",`url(#k-${e})`),l(Q,"id",`l-${e}`),l(ne,"id",`m-${e}`),l(Ce,"filter",`url(#l-${e})`),l(pe,"mask",`url(#m-${e})`),l(Y,"id",`n-${e}`),l(K,"id",`o-${e}`),l(ie,"filter",`url(#n-${e})`),l(P,"mask",`url(#o-${e})`),l(E,"id",`p-${e}`),l(ue,"fill",`url(#p-${e})`),l(k,"id",`q-${e}`),l(U,"id",`r-${e}`),l(I,"filter",`url(#q-${e})`),l(C,"mask",`url(#r-${e})`),l(j,"id",`s-${e}`),l(_,"fill",`url(#s-${e})`),l(O,"id",`t-${e}`),l(X,"fill",`url(#t-${e})`),l(G,"id",`u-${e}`),l(H,"fill",`url(#u-${e})`),l(re,"id",`v-${e}`),l(ae,"fill",`url(#v-${e})`),l(le,"id",`w-${e}`),l(ce,"fill",`url(#w-${e})`),l(me,"id",`x-${e}`),l(xe,"fill",`url(#x-${e})`),l(he,"id",`y-${e}`),l(be,"fill",`url(#y-${e})`),l(F,"id",`z-${e}`),l(se,"id",`A-${e}`),l(ye,"filter",`url(#z-${e})`),l(ze,"id",`B-${e}`),l(Se,"fill",`url(#B-${e})`),l(Se,"mask",`url(#A-${e})`),l(Te,"id",`C-${e}`),l(_e,"id",`D-${e}`),l(Ae,"filter",`url(#C-${e})`),l(Me,"mask",`url(#D-${e})`),l(Be,"id",`E-${e}`),l(De,"fill",`url(#E-${e})`),l(Ee,"id",`F-${e}`),l(Ke,"stroke",`url(#F-${e})`),l(We,"id",`G-${e}`),l(Ze,"stroke",`url(#G-${e})`),l(Qe,"id",`H-${e}`),l(Xe,"stroke",`url(#H-${e})`),l(et,"id",`I-${e}`),l(tt,"stroke",`url(#I-${e})`),l(it,"id",`J-${e}`),l(rt,"stroke",`url(#J-${e})`),l(nt,"id",`K-${e}`),l(ot,"stroke",`url(#K-${e})`),l(lt,"id",`L-${e}`),l(st,"stroke",`url(#L-${e})`),l(at,"id",`M-${e}`),l(kt,"stroke",`url(#M-${e})`),t})()}var di=L("<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router");function fi({initialIsOpen:e,panelProps:t={},closeButtonProps:n={},toggleButtonProps:i={},position:g="bottom-left",containerElement:s="footer",router:a,routerState:c,shadowDOMTarget:u}){const[o,r]=ge();let $;const[x,y]=je("tanstackRouterDevtoolsOpen",e),[T,A]=je("tanstackRouterDevtoolsHeight",null),[ee,te]=ge(!1),[h,R]=ge(!1),m=Mt(),v=Ge(),z=(M,Y)=>{if(Y.button!==0)return;R(!0);const K={originalHeight:M?.getBoundingClientRect().height??0,pageY:Y.pageY},ie=oe=>{const E=K.pageY-oe.pageY,ue=K.originalHeight+E;A(ue),ue<70?y(!1):y(!0)},P=()=>{R(!1),document.removeEventListener("mousemove",ie),document.removeEventListener("mouseUp",P)};document.addEventListener("mousemove",ie),document.addEventListener("mouseup",P)};x(),Oe(()=>{te(x()??!1)}),Oe(()=>{var M,Y;if(ee()){const K=(Y=(M=o())==null?void 0:M.parentElement)==null?void 0:Y.style.paddingBottom,ie=()=>{var P;const oe=$.getBoundingClientRect().height;(P=o())!=null&&P.parentElement&&r(E=>(E?.parentElement&&(E.parentElement.style.paddingBottom=`${oe}px`),E))};if(ie(),typeof window<"u")return window.addEventListener("resize",ie),()=>{var P;window.removeEventListener("resize",ie),(P=o())!=null&&P.parentElement&&typeof K=="string"&&r(oe=>(oe.parentElement.style.paddingBottom=K,oe))}}}),Oe(()=>{if(o()){const M=o(),Y=getComputedStyle(M).fontSize;M?.style.setProperty("--tsrd-font-size",Y)}});const{style:q={},...Z}=t,{style:w={},onClick:J,...ve}=n,{onClick:fe,class:de,...N}=i;if(!m())return null;const Q=S(()=>T()??500),ne=S(()=>W(v().devtoolsPanelContainer,v().devtoolsPanelContainerVisibility(!!x()),v().devtoolsPanelContainerResizing(h),v().devtoolsPanelContainerAnimation(ee(),Q()+16))),Ce=S(()=>({height:`${Q()}px`,...q||{}})),pe=S(()=>W(v().mainCloseBtn,v().mainCloseBtnPosition(g),v().mainCloseBtnAnimation(!!x()),de));return V(wt,{component:s,ref:r,class:"TanStackRouterDevtools",get children(){return[V($t.Provider,{value:{onCloseClick:J??(()=>{})},get children(){return V(si,Ie({ref(M){var Y=$;typeof Y=="function"?Y(M):$=M}},Z,{router:a,routerState:c,className:ne,style:Ce,get isOpen(){return ee()},setIsOpen:y,handleDragStart:M=>z($,M),shadowDOMTarget:u}))}}),(()=>{var M=di(),Y=M.firstChild,K=Y.firstChild,ie=K.nextSibling,P=Y.nextSibling,oe=P.nextSibling;return Je(M,Ie(N,{"aria-label":"Open TanStack Router Devtools",onClick:E=>{y(!0),fe&&fe(E)},get class(){return pe()}}),!1,!0),p(K,V(gt,{})),p(ie,V(gt,{})),D(E=>{var ue=v().mainCloseBtnIconContainer,f=v().mainCloseBtnIconOuter,k=v().mainCloseBtnIconInner,U=v().mainCloseBtnDivider,I=v().routerLogoCloseButton;return ue!==E.e&&d(Y,E.e=ue),f!==E.t&&d(K,E.t=f),k!==E.a&&d(ie,E.a=k),U!==E.o&&d(P,E.o=U),I!==E.i&&d(oe,E.i=I),E},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),M})()]}})}export{fi as FloatingTanStackRouterDevtools,fi as default};
