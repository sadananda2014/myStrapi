"use strict";(self.webpackChunkmy_strapi=self.webpackChunkmy_strapi||[]).push([[2567],{20121:(c,o,t)=>{t.d(o,{G:()=>a,I:()=>d});var e=t(60391),s=t(28469),l=t.n(s);async function a(){return(await e.Z.get(`/${l()}/settings`)).data}async function d(i){return(await e.Z.post(`/${l()}/settings`,{body:i})).data}},60391:(c,o,t)=>{t.d(o,{Z:()=>a});var e=t(5466),s=t(47665);const l=e.default.create({baseURL:""});l.interceptors.request.use(async d=>(d.headers={Authorization:`Bearer ${s.I8.getToken()}`,Accept:"application/json","Content-Type":"application/json"},d),d=>{Promise.reject(d)}),l.interceptors.response.use(d=>d,d=>{throw d.response?.status===401&&(s.I8.clearAppStorage(),window.location.reload()),d});const a=l},2225:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(71434),l=t(72450),a=t(96476),d=t(5529),i=t(44747),h=t(35725),n=t(11880),p=(u=>u&&u.__esModule?u:{default:u})(l),S=p.default(i.Box)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${({theme:u})=>u.colors.neutral700};
    }
  }

  ${d.buttonFocusStyle};
`,g=p.default(h.Flex)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${a.handleIconColor};
    }
  }
`,y=({variant:u,...x})=>u==="success"?e.jsx(s.CheckCircle,{...x}):u==="danger"||u==="warning"?e.jsx(s.ExclamationMarkCircle,{...x}):e.jsx(s.Information,{...x}),j=p.default(i.Box)`
  & a > span {
    color: ${a.handleIconColor};
  }

  svg path {
    fill: ${a.handleIconColor};
  }
`,v=({title:u,children:x,variant:m="default",onClose:M,closeLabel:w,titleAs:C="p",action:T,...E})=>e.jsxs(h.Flex,{alignItems:"flex-start",background:a.handleBackgroundColor(m),borderColor:a.handleBorderColor(m),boxShadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,variant:m,...E,children:[e.jsx(g,{height:`${20/16}rem`,shrink:0,variant:m,width:`${20/16}rem`,children:e.jsx(y,{"aria-hidden":!0,variant:m})}),e.jsxs(h.Flex,{alignItems:"start",gap:T?2:1,wrap:"wrap",role:m==="danger"?"alert":"status",width:"100%",children:[u&&e.jsx(n.Typography,{fontWeight:"bold",textColor:"neutral800",as:C,children:u}),e.jsx(n.Typography,{as:"p",textColor:"neutral800",children:x}),T&&e.jsx(j,{variant:m,children:T})]}),e.jsx(S,{as:"button",background:"transparent",borderColor:void 0,height:`${12/16}rem`,marginTop:1,onClick:M,width:`${12/16}rem`,"aria-label":w,children:e.jsx(s.Cross,{"aria-hidden":!0})})]});o.Alert=v},79532:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(2225);o.Alert=e.Alert},96476:(c,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t=l=>{switch(l){case"danger":return"danger100";case"success":return"success100";case"warning":return"warning100";default:return"primary100"}},e=l=>t(l).replace("100","200"),s=({theme:l,variant:a})=>a==="danger"?l.colors.danger700:a==="success"?l.colors.success700:a==="warning"?l.colors.warning700:l.colors.primary700;o.handleBackgroundColor=t,o.handleBorderColor=e,o.handleIconColor=s},30863:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(72450),a=t(5529),d=t(35725),i=g=>g&&g.__esModule?g:{default:g};function h(g){if(g&&g.__esModule)return g;const y=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const j in g)if(j!=="default"){const v=Object.getOwnPropertyDescriptor(g,j);Object.defineProperty(y,j,v.get?v:{enumerable:!0,get:()=>g[j]})}}return y.default=g,Object.freeze(y)}const n=h(s),p=i(l).default(d.Flex)`
  > svg {
    height: ${({theme:g})=>g.spaces[3]};
    width: ${({theme:g})=>g.spaces[3]};

    > g,
    path {
      fill: ${({theme:g})=>g.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${a.buttonFocusStyle}
`,S=n.forwardRef(({disabled:g,children:y,background:j="neutral0",...v},u)=>e.jsx(p,{ref:u,"aria-disabled":g,as:"button",type:"button",disabled:g,padding:2,hasRadius:!0,background:j,borderColor:"neutral200",cursor:"pointer",...v,children:y}));S.displayName="BaseButton",o.BaseButton=S,o.BaseButtonWrapper=p},44747:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),s=t(83315),l=t(10547),d=(n=>n&&n.__esModule?n:{default:n})(e),i={color:!0,cursor:!0,height:!0,width:!0},h=d.default.div.withConfig({shouldForwardProp:(n,r)=>!i[n]&&r(n)})`
  // Font
  font-size: ${({fontSize:n,theme:r})=>l.extractStyleFromTheme(r.fontSizes,n,n)};

  // Colors
  background: ${({theme:n,background:r})=>l.extractStyleFromTheme(n.colors,r,r)};
  color: ${({theme:n,color:r})=>l.extractStyleFromTheme(n.colors,r,void 0)};

  // Spaces
  ${({theme:n,padding:r})=>s("padding",r,n)}
  ${({theme:n,paddingTop:r})=>s("padding-top",r,n)}
  ${({theme:n,paddingRight:r})=>s("padding-right",r,n)}
  ${({theme:n,paddingBottom:r})=>s("padding-bottom",r,n)}
  ${({theme:n,paddingLeft:r})=>s("padding-left",r,n)}
  ${({theme:n,marginLeft:r})=>s("margin-left",r,n)}
  ${({theme:n,marginRight:r})=>s("margin-right",r,n)}
  ${({theme:n,marginTop:r})=>s("margin-top",r,n)}
  ${({theme:n,marginBottom:r})=>s("margin-bottom",r,n)}

  // Responsive hiding
  ${({theme:n,hiddenS:r})=>r?`${n.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:n,hiddenXS:r})=>r?`${n.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:n,hasRadius:r,borderRadius:p})=>r?n.borderRadius:p};
  border-style: ${({borderStyle:n})=>n};
  border-width: ${({borderWidth:n})=>n};
  border-color: ${({borderColor:n,theme:r})=>l.extractStyleFromTheme(r.colors,n,void 0)};
  border: ${({theme:n,borderColor:r,borderStyle:p,borderWidth:S})=>{if(r&&!p&&typeof S>"u")return`1px solid ${n.colors[r]}`}};

  // Shadows
  box-shadow: ${({theme:n,shadow:r})=>l.extractStyleFromTheme(n.shadows,r,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:n})=>n};
  &:hover {
    ${({_hover:n,theme:r})=>n?n(r):void 0}
  }

  // Display
  display: ${({display:n})=>n};

  // Position
  position: ${({position:n})=>n};
  left: ${({left:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  right: ${({right:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  top: ${({top:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  bottom: ${({bottom:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  z-index: ${({zIndex:n})=>n};
  overflow: ${({overflow:n})=>n};

  // Size
  width: ${({width:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  max-width: ${({maxWidth:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  min-width: ${({minWidth:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  height: ${({height:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  max-height: ${({maxHeight:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};
  min-height: ${({minHeight:n,theme:r})=>l.extractStyleFromTheme(r.spaces,n,n)};

  // Animation
  transition: ${({transition:n})=>n};
  transform: ${({transform:n})=>n};
  animation: ${({animation:n})=>n};

  //Flexbox children props
  flex-shrink: ${({shrink:n})=>n};
  flex-grow: ${({grow:n})=>n};
  flex-basis: ${({basis:n})=>n};
  flex: ${({flex:n})=>n};

  // Text
  text-align: ${({textAlign:n})=>n};
  text-transform: ${({textTransform:n})=>n};
  line-height: ${({theme:n,lineHeight:r})=>l.extractStyleFromTheme(n.lineHeights,r,r)};

  // Cursor
  cursor: ${({cursor:n})=>n};
`;o.Box=h},25074:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(44747);o.Box=e.Box},64584:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(71434),a=t(72450),d=t(58592),i=t(4584),h=t(30863),n=t(44747),r=t(11880),p=t(35725),S=m=>m&&m.__esModule?m:{default:m},g=S(s),y=S(a),j=a.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,v=y.default(l.Loader)`
  animation: ${j} 2s infinite linear;
  will-change: transform;
`,u=y.default(h.BaseButton)`
  height: ${({theme:m,size:M})=>m.sizes.button[M]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${i.getDisabledStyle}

    &:active {
      ${i.getDisabledStyle}
    }
  }

  &:hover {
    ${i.getHoverStyle}
  }

  &:active {
    ${i.getActiveStyle}
  }

  ${i.getVariantStyle}
`,x=g.default.forwardRef(({variant:m=d.DEFAULT,startIcon:M,endIcon:w,disabled:C=!1,children:T,onClick:E,size:B=d.BUTTON_SIZES[0],loading:P=!1,fullWidth:R=!1,...L},D)=>{const $=C||P,O=A=>{!$&&E&&E(A)};return e.jsxs(u,{ref:D,"aria-disabled":$,disabled:$,size:B,variant:m,onClick:O,fullWidth:R,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:R,justifyContent:R?"center":void 0,paddingLeft:4,paddingRight:4,width:R?"100%":void 0,...L,children:[(M||P)&&e.jsx(n.Box,{"aria-hidden":!0,children:P?e.jsx(v,{}):M}),e.jsx(r.Typography,{variant:B==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:T}),w&&e.jsx(p.Flex,{"aria-hidden":!0,children:w})]})});x.displayName="Button",o.Button=x,o.ButtonWrapper=u},58592:(c,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="success-light",e="danger-light",s="default",l="tertiary",a="secondary",d="danger",i="success",h="ghost",n=[t,e],r=[s,l,a,d,i,h,...n],p=["S","M","L"];o.BUTTON_SIZES=p,o.DANGER=d,o.DANGER_LIGHT=e,o.DEFAULT=s,o.GHOST=h,o.LIGHT_VARIANTS=n,o.SECONDARY=a,o.SUCCESS=i,o.SUCCESS_LIGHT=t,o.TERTIARY=l,o.VARIANTS=r},97487:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(64584);o.Button=e.Button,o.ButtonWrapper=e.ButtonWrapper},4584:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(58592),s=t(11880),l=n=>n===e.SUCCESS_LIGHT||n===e.DANGER_LIGHT?`${n.substring(0,n.lastIndexOf("-"))}`:n===e.TERTIARY?"neutral":n===e.DEFAULT||n===e.SECONDARY||e.VARIANTS.every(r=>r!==n)?"primary":`${n}`,a=({theme:n})=>`
    border: 1px solid ${n.colors.neutral200};
    background: ${n.colors.neutral150};
    ${s.Typography} {
      color: ${n.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${n.colors.neutral600};
      }
    }
  `,d=({theme:n,variant:r})=>[...e.LIGHT_VARIANTS,e.SECONDARY].includes(r)?`
      background-color: ${n.colors.neutral0};
    `:r===e.TERTIARY?`
      background-color: ${n.colors.neutral100};
    `:r===e.GHOST?`
      background-color: ${n.colors.neutral100};
    `:r===e.DEFAULT?`
      border: 1px solid ${n.colors.buttonPrimary500};
      background: ${n.colors.buttonPrimary500};
    `:`
    border: 1px solid ${n.colors[`${l(r)}500`]};
    background: ${n.colors[`${l(r)}500`]};
  `,i=({theme:n,variant:r})=>[...e.LIGHT_VARIANTS,e.SECONDARY].includes(r)?`
      background-color: ${n.colors.neutral0};
      border: 1px solid ${n.colors[`${l(r)}600`]};
      ${s.Typography} {
        color: ${n.colors[`${l(r)}600`]};
      }
      svg {
        > g, path {
          fill: ${n.colors[`${l(r)}600`]};
        }
      }
    `:r===e.TERTIARY?`
      background-color: ${n.colors.neutral150};
    `:`
    border: 1px solid ${n.colors[`${l(r)}600`]};
    background: ${n.colors[`${l(r)}600`]};
  `,h=({theme:n,variant:r})=>{switch(r){case e.DANGER_LIGHT:case e.SUCCESS_LIGHT:case e.SECONDARY:return`
          border: 1px solid ${n.colors[`${l(r)}200`]};
          background: ${n.colors[`${l(r)}100`]};
          ${s.Typography} {
            color: ${n.colors[`${l(r)}700`]};
          }
          svg {
            > g, path {
              fill: ${n.colors[`${l(r)}700`]};
            }
          }
        `;case e.TERTIARY:return`
          border: 1px solid ${n.colors.neutral200};
          background: ${n.colors.neutral0};
          ${s.Typography} {
            color: ${n.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${n.colors.neutral800};
            }
          }
        `;case e.GHOST:return`
        border: 1px solid transparent;
        background: transparent;

        ${s.Typography} {
          color: ${n.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${n.colors.neutral500};
          }
        }
      `;case e.SUCCESS:case e.DANGER:return`
          border: 1px solid ${n.colors[`${l(r)}600`]};
          background: ${n.colors[`${l(r)}600`]};
          ${s.Typography} {
            color: ${n.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${n.colors.buttonNeutral0};
            }
          }
        `}};o.getActiveStyle=i,o.getDisabledStyle=a,o.getHoverStyle=d,o.getVariantColorName=l,o.getVariantStyle=h},59817:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(20565),a=t(54673),d=t(44747),i=s.forwardRef(({children:h,name:n,error:r,hint:p,id:S,required:g=!1,...y},j)=>{const v=a.useId(S),u=s.useMemo(()=>({name:n,id:v,error:r,hint:p,required:g}),[r,v,p,n,g]);return e.jsx(d.Box,{ref:j,...y,children:e.jsx(l.FieldContext.Provider,{value:u,children:h})})});o.Field=i},20565:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),s=e.createContext({id:"",required:!1}),l=()=>e.useContext(s);o.FieldContext=s,o.useField=l},28518:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(20565),l=t(11880),a=()=>{const{id:d,error:i}=s.useField();return!i||typeof i!="string"?null:e.jsx(l.Typography,{variant:"pi",as:"p",id:`${d}-error`,textColor:"danger600","data-strapi-field-error":!0,children:i})};o.FieldError=a},63391:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(20565),l=t(11880),a=()=>{const{id:d,hint:i,error:h}=s.useField();return!i||h?null:e.jsx(l.Typography,{variant:"pi",as:"p",id:`${d}-hint`,textColor:"neutral600",children:i})};o.FieldHint=a},69803:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(72450),a=t(20565),d=t(63832),i=t(11880),h=t(35725),r=(v=>v&&v.__esModule?v:{default:v})(l),p=d.once(console.warn),S=s.forwardRef(({children:v,action:u,required:x,...m},M)=>{const{id:w,required:C}=a.useField(),T=C||x;return x!==void 0&&p('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),e.jsxs(g,{ref:M,variant:"pi",textColor:"neutral800",htmlFor:w,fontWeight:"bold",as:"label",...m,children:[v,T&&e.jsx(y,{textColor:"danger600",children:"*"}),u&&e.jsx(j,{marginLeft:1,children:u})]})}),g=r.default(i.Typography)`
  display: flex;
  align-items: center;
`,y=r.default(i.Typography)`
  line-height: 0;
`,j=r.default(h.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:v})=>v.colors.neutral500};
  }
`;o.FieldLabel=S},35725:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),s=t(83315),l=t(44747),d=(n=>n&&n.__esModule?n:{default:n})(e),i={direction:!0},h=d.default(l.Box).withConfig({shouldForwardProp:(n,r)=>!i[n]&&r(n)})`
  align-items: ${({alignItems:n="center"})=>n};
  display: ${({display:n="flex",inline:r})=>r?"inline-flex":n};
  flex-direction: ${({direction:n="row"})=>n};
  flex-shrink: ${({shrink:n})=>n};
  flex-wrap: ${({wrap:n})=>n};
  ${({gap:n,theme:r})=>s("gap",n,r)};
  justify-content: ${({justifyContent:n})=>n};
`;o.Flex=h},44076:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(72450),l=t(83315),a=t(44747),h=(r=>r&&r.__esModule?r:{default:r})(s).default(a.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:r})=>r}, 1fr);
  ${({theme:r,gap:p})=>l("gap",p,r)}
`,n=r=>{const{gap:p="0",gridCols:S=12,...g}=r;return e.jsx(h,{gap:p,gridCols:S,...g})};o.Grid=n},3528:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),s=t(44747),d=(i=>i&&i.__esModule?i:{default:i})(e).default(s.Box)`
  grid-column: span ${({col:i})=>i};
  max-width: 100%;

  ${({theme:i})=>i.mediaQueries.tablet} {
    grid-column: span ${({s:i})=>i};
  }

  ${({theme:i})=>i.mediaQueries.mobile} {
    grid-column: span ${({xs:i})=>i};
  }
`;o.GridItem=d},91594:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(35725),l=({startActions:a,endActions:d})=>!a&&!d?null:e.jsxs(s.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[e.jsx(s.Flex,{gap:2,wrap:"wrap",children:a}),e.jsx(s.Flex,{gap:2,shrink:0,wrap:"wrap",children:d})]});o.ActionLayout=l},3823:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(44747),l=({children:a})=>e.jsx(s.Box,{paddingLeft:10,paddingRight:10,children:a});o.ContentLayout=l},20285:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),a=(d=>d&&d.__esModule?d:{default:d})(e).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:d})=>d.spaces[4]};
`;o.GridLayout=a},32213:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(72450),a=t(43809),d=t(29381),i=t(44747),h=t(35725),n=t(11880),r=v=>v&&v.__esModule?v:{default:v},p=r(s),S=r(l),g=v=>{const u=s.useRef(null),[x,m]=s.useState(null),[M,w]=a.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return d.useResizeObserver(M,()=>{M.current&&m(M.current.getBoundingClientRect())}),s.useEffect(()=>{u.current&&m(u.current.getBoundingClientRect())},[u]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:x?.height},ref:M,children:w&&e.jsx(j,{ref:u,...v})}),!w&&e.jsx(j,{...v,sticky:!0,width:x?.width})]})};g.displayName="HeaderLayout";const y=S.default(i.Box)`
  width: ${({width:v})=>v?`${v/16}rem`:void 0};
  z-index: ${({theme:v})=>v.zIndices[1]};
`,j=p.default.forwardRef(({navigationAction:v,primaryAction:u,secondaryAction:x,subtitle:m,title:M,sticky:w,width:C,...T},E)=>{const B=typeof m=="string";return w?e.jsx(y,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:C,"data-strapi-header-sticky":!0,children:e.jsxs(h.Flex,{justifyContent:"space-between",children:[e.jsxs(h.Flex,{children:[v&&e.jsx(i.Box,{paddingRight:3,children:v}),e.jsxs(i.Box,{children:[e.jsx(n.Typography,{variant:"beta",as:"h1",...T,children:M}),B?e.jsx(n.Typography,{variant:"pi",textColor:"neutral600",children:m}):m]}),x?e.jsx(i.Box,{paddingLeft:4,children:x}):null]}),e.jsx(h.Flex,{children:u?e.jsx(i.Box,{paddingLeft:2,children:u}):void 0})]})}):e.jsxs(i.Box,{ref:E,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:v?6:8,background:"neutral100","data-strapi-header":!0,children:[v?e.jsx(i.Box,{paddingBottom:2,children:v}):null,e.jsxs(h.Flex,{justifyContent:"space-between",children:[e.jsxs(h.Flex,{minWidth:0,children:[e.jsx(n.Typography,{as:"h1",variant:"alpha",...T,children:M}),x?e.jsx(i.Box,{paddingLeft:4,children:x}):null]}),u]}),B?e.jsx(n.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:m}):m]})});o.BaseHeaderLayout=j,o.HeaderLayout=g},65030:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(72450),l=t(44747),d=(r=>r&&r.__esModule?r:{default:r})(s),i=d.default(l.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:r})=>r?"auto 1fr":"1fr"};
`,h=d.default(l.Box)`
  overflow-x: hidden;
`,n=({sideNav:r,children:p})=>e.jsxs(i,{hasSideNav:Boolean(r),children:[r,e.jsx(h,{paddingBottom:10,children:p})]});o.Layout=n},90493:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(44076),l=t(3528),a=t(44747),d=({startCol:i,endCol:h})=>e.jsxs(s.Grid,{gap:4,children:[e.jsx(l.GridItem,{col:9,s:12,children:e.jsx(a.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:i})}),e.jsx(l.GridItem,{col:3,s:12,children:e.jsx(a.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:h})})]});o.TwoColsLayout=d},94305:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(65030),s=t(91594),l=t(3823),a=t(32213),d=t(90493),i=t(20285);o.Layout=e.Layout,o.ActionLayout=s.ActionLayout,o.ContentLayout=l.ContentLayout,o.BaseHeaderLayout=a.BaseHeaderLayout,o.HeaderLayout=a.HeaderLayout,o.TwoColsLayout=d.TwoColsLayout,o.GridLayout=i.GridLayout},72707:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(71434),a=t(47533),d=t(72450),i=t(5529),h=t(11880),n=t(44747),r=u=>u&&u.__esModule?u:{default:u};function p(u){if(u&&u.__esModule)return u;const x=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(u){for(const m in u)if(m!=="default"){const M=Object.getOwnPropertyDescriptor(u,m);Object.defineProperty(x,m,M.get?M:{enumerable:!0,get:()=>u[m]})}}return x.default=u,Object.freeze(x)}const S=p(s),g=r(d),y=g.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:u})=>u?"none":void 0};
  color: ${({disabled:u,theme:x})=>u?x.colors.neutral600:x.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${h.Typography} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:u})=>u.colors.primary500};
  }

  &:active {
    color: ${({theme:u})=>u.colors.primary700};
  }

  ${i.buttonFocusStyle};
`,j=g.default(n.Box)`
  display: flex;
`,v=S.forwardRef(({children:u,href:x,to:m,disabled:M=!1,startIcon:w,endIcon:C,...T},E)=>{const B=x?"_blank":void 0,P=x?"noreferrer noopener":void 0;return e.jsxs(y,{as:m&&!M?a.NavLink:"a",target:B,rel:P,to:M?void 0:m,href:M?"#":x,disabled:M,ref:E,...T,children:[w&&e.jsx(j,{as:"span","aria-hidden":!0,paddingRight:2,children:w}),e.jsx(h.Typography,{children:u}),C&&!x&&e.jsx(j,{as:"span","aria-hidden":!0,paddingLeft:2,children:C}),x&&e.jsx(j,{as:"span","aria-hidden":!0,paddingLeft:2,children:e.jsx(l.ExternalLink,{})})]})});o.Link=v},31902:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72707);o.Link=e.Link},29085:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(47533),a=t(72450),d=t(4584),i=t(30863),h=t(35725),n=t(11880),r=v=>v&&v.__esModule?v:{default:v};function p(v){if(v&&v.__esModule)return v;const u=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(v){for(const x in v)if(x!=="default"){const m=Object.getOwnPropertyDescriptor(v,x);Object.defineProperty(u,x,m.get?m:{enumerable:!0,get:()=>v[x]})}}return u.default=v,Object.freeze(u)}const S=p(s),y=r(a).default(i.BaseButtonWrapper)`
  &[aria-disabled='true'] {
    ${d.getDisabledStyle}
    &:active {
      ${d.getDisabledStyle}
    }
  }
  &:hover {
    ${d.getHoverStyle}
  }
  &:active {
    ${d.getActiveStyle}
  }
  ${d.getVariantStyle}
`,j=S.forwardRef(({variant:v="default",startIcon:u,endIcon:x,disabled:m=!1,children:M,size:w="S",href:C,to:T,...E},B)=>{const P=C?"_blank":void 0,R=C?"noreferrer noopener":void 0,L=w==="S"?2:"10px",D=4;return e.jsxs(y,{ref:B,"aria-disabled":m,size:w,variant:v,target:P,rel:R,to:m?void 0:T,href:m?"#":C,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:L,paddingLeft:D,paddingRight:D,paddingTop:L,pointerEvents:m?"none":void 0,...E,as:T&&!m?l.NavLink:"a",children:[u&&e.jsx(h.Flex,{"aria-hidden":!0,children:u}),e.jsx(n.Typography,{variant:w==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:M}),x&&e.jsx(h.Flex,{"aria-hidden":!0,children:x})]})});o.LinkButton=j},15569:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(29085);o.LinkButton=e.LinkButton},95773:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(74081),s=t(27279),l=t(72450),a=t(10547),d=t(35725),h=(g=>g&&g.__esModule?g:{default:g})(l),n={size:!0,spacing:!0},r=h.default(d.Flex).withConfig({shouldForwardProp:(g,y)=>!n[g]&&y(g)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:g,spacing:y})=>a.extractStyleFromTheme(g.spaces,y,void 0)};
  }
`,p=h.default(d.Flex).withConfig({shouldForwardProp:(g,y)=>!n[g]&&y(g)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:g,spacing:y})=>a.extractStyleFromTheme(g.spaces,y,void 0)};
  }
`,S=s.forwardRef(({horizontal:g=!1,spacing:y,size:j,...v},u)=>(j&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),g?e.jsx(p,{ref:u,spacing:y||j,...v}):e.jsx(r,{direction:"column",alignItems:"stretch",ref:u,spacing:y||j,...v})));S.displayName="Stack",o.Stack=S},58892:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(95773);o.Stack=e.Stack},11880:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),s=t(83415),l=t(10547),d=(n=>n&&n.__esModule?n:{default:n})(e),i={fontSize:!0,fontWeight:!0},h=d.default.span.withConfig({shouldForwardProp:(n,r)=>!i[n]&&r(n)})`
  ${s.variantStyle}
  ${s.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:n,fontWeight:r})=>l.extractStyleFromTheme(n.fontWeights,r,void 0)};
  font-size: ${({theme:n,fontSize:r})=>l.extractStyleFromTheme(n.fontSizes,r,void 0)};
  line-height: ${({theme:n,lineHeight:r})=>l.extractStyleFromTheme(n.lineHeights,r,r)};
  color: ${({theme:n,textColor:r})=>n.colors[r||"neutral800"]};
  text-align: ${({textAlign:n})=>n};
  text-decoration: ${({textDecoration:n})=>n};
  text-transform: ${({textTransform:n})=>n};
`;o.Typography=h},14714:(c,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="alpha",e="beta",s="delta",l="epsilon",a="omega",d="pi",i="sigma",h=[t,e,s,l,a,d,i];o.ALPHA=t,o.BETA=e,o.DELTA=s,o.EPSILON=l,o.OMEGA=a,o.PI=d,o.SIGMA=i,o.TEXT_VARIANTS=h},50568:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(11880);o.Typography=e.Typography},83415:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(14714),s=({ellipsis:a=!1})=>a&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,l=({variant:a=e.OMEGA,theme:d})=>{switch(a){case e.ALPHA:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[5]};
        line-height: ${d.lineHeights[2]};
      `;case e.BETA:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[4]};
        line-height: ${d.lineHeights[1]};
      `;case e.DELTA:return`
        font-weight: ${d.fontWeights.semiBold};
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[2]};
      `;case e.EPSILON:return`
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[6]};
      `;case e.OMEGA:return`
        font-size: ${d.fontSizes[2]};
        line-height: ${d.lineHeights[4]};
      `;case e.PI:return`
        font-size: ${d.fontSizes[1]};
        line-height: ${d.lineHeights[3]};
      `;case e.SIGMA:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[0]};
        line-height: ${d.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${d.fontSizes[2]};
      `}};o.ellipsisStyle=s,o.variantStyle=l},70321:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),a=(d=>d&&d.__esModule?d:{default:d})(e).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;o.VisuallyHidden=a},63832:(c,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t="[@strapi/design-system]:",e=s=>{const l=s;let a=!1;if(typeof l!="function")throw new TypeError(`${t} once requires a function parameter`);return(...d)=>{a||(l(...d),a=!0)}};o.PREFIX=t,o.once=e},83315:c=>{const o=(t,e,s)=>{if(!e)return;if(typeof e=="object")return(Array.isArray(e)?e:[e?.desktop,e?.tablet,e?.mobile]).reduce((i,h,n)=>{if(h)switch(n){case 0:return`${i}${t}: ${s.spaces[h]};`;case 1:return`${i}${s.mediaQueries.tablet}{${t}: ${s.spaces[h]};}`;case 2:return`${i}${s.mediaQueries.mobile}{${t}: ${s.spaces[h]};}`;default:return i}return i},"");const l=s.spaces[e]??e;return`${t}: ${l};`};c.exports=o},77547:(c,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const t={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};o.KeyboardKeys=t},95193:(c,o)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});function t(s,l){return typeof s=="string"?!1:l in s}function e(s){return s&&typeof s=="object"&&!Array.isArray(s)}o.isKeyOf=t,o.isObject=e},10547:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(95193);function s(l,a,d){return a&&e.isKeyOf(l,a)?l[a]:d}o.extractStyleFromTheme=s},43809:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),s=l=>{const a=e.useRef(null),[d,i]=e.useState(!0),h=([n])=>{i(n.isIntersecting)};return e.useEffect(()=>{const n=a.current,r=new IntersectionObserver(h,l);return n&&r.observe(a.current),()=>{n&&r.disconnect()}},[a,l]),[a,d]};o.useElementOnScreen=s},54673:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),a=(h=>h&&h.__esModule?h:{default:h})(e).default["useId".toString()]||(()=>{});let d=0;const i=h=>{const[n,r]=e.useState(a());return e.useLayoutEffect(()=>{h||r(p=>p??String(d++))},[h]),h?.toString()??(n||"")};o.useId=i},29381:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(27279),s=t(81906),l=(a,d)=>{const i=s.useCallbackRef(d);e.useLayoutEffect(()=>{const h=new ResizeObserver(i);return Array.isArray(a)?a.forEach(n=>{n.current&&h.observe(n.current)}):a.current&&h.observe(a.current),()=>{h.disconnect()}},[a,i])};o.useResizeObserver=l},5529:(c,o,t)=>{Object.defineProperty(o,Symbol.toStringTag,{value:"Module"});const e=t(72450),s=d=>({theme:i,size:h})=>i.sizes[d][h],l=(d="&")=>({theme:i,hasError:h=!1})=>e.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${d}:focus-within {
      border: 1px solid ${h?i.colors.danger600:i.colors.primary600};
      box-shadow: ${h?i.colors.danger600:i.colors.primary600} 0px 0px 0px 2px;
    }
  `,a=({theme:d})=>e.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${d.colors.primary600};
    }
  }
`;o.buttonFocusStyle=a,o.getThemeSize=s,o.inputFocusStyle=l},23420:(c,o,t)=>{const e=t(74081),s=a=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:e.jsx("path",{fill:"#32324D",d:"M16.235 2.824a1.412 1.412 0 0 1 0-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 0 1-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 0 1-1.996-1.996l8.178-8.178h-2.945Zm4.942 10.588a1.412 1.412 0 0 1 2.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 0 1 0 2.824H2.824v18.353h18.353v-7.765Z"})}),l=s;c.exports=l},89677:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 34 25",...a,children:[(0,e.jsx)("rect",{width:33,height:23,x:.5,y:1,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M18.901 9.828a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M19.703 8.785a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.814.814 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 13.488a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M19.703 12.445a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.307 1.307 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.697 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.314-.477-.314-.482-.002ZM18.901 17.247a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M19.703 16.204a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.239.804.804 0 0 1 .753-1.301.812.812 0 0 1 .669.792c.005.311.487.311.483 0a1.308 1.308 0 0 0-.867-1.215 1.288 1.288 0 0 0-1.4.39 1.296 1.296 0 0 0-.119 1.489c.283.468.83.698 1.364.596.597-.113 1.012-.664 1.021-1.258.005-.313-.477-.313-.482-.002ZM15.075 9.842a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M15.876 8.8a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 13.503a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M15.876 12.46a.81.81 0 0 1-.512.748.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.81.81 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.296 1.296 0 0 0-.119 1.49c.283.468.831.697 1.365.596.596-.114 1.011-.664 1.02-1.258.006-.314-.477-.314-.482-.003ZM15.075 17.261a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Z"}),(0,e.jsx)("path",{fill:"#0C75AF",d:"M15.876 16.218a.81.81 0 0 1-.512.749.814.814 0 0 1-.91-.24.804.804 0 0 1 .753-1.301.808.808 0 0 1 .669.792c.005.312.488.312.483 0a1.308 1.308 0 0 0-.867-1.214 1.288 1.288 0 0 0-1.4.389 1.293 1.293 0 0 0-.119 1.487c.283.468.831.698 1.365.596.596-.113 1.011-.664 1.02-1.258.006-.311-.477-.311-.482 0Z"})]}),l=s},42108:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#212134",d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"})}),l=s},23227:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,e.jsx)("path",{fill:"#D9822F",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373Zm-2.287 0-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912Z",clipRule:"evenodd"})]}),l=s},35318:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),l=s},14461:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...a,children:[(0,e.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,e.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),l=s},8305:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-8.806-4 .806.806L12.806 12 16 15.194l-.806.806L12 12.806 8.806 16 8 15.194 11.194 12 8 8.806 8.806 8 12 11.194 15.194 8Z",clipRule:"evenodd"})}),l=s},73352:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#7289DA",d:"M20.04 0H3.96A2.464 2.464 0 0 0 1.5 2.468v16.2a2.464 2.464 0 0 0 2.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0 0 20.04 0Zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 0 1-3.108-.012 10.086 10.086 0 0 1-1.764-.515 7.053 7.053 0 0 1-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 0 1-.048-.036 4.202 4.202 0 0 1-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0 1 16.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821Zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33Zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33Z"})}),l=s},75481:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:[(0,e.jsx)("path",{fill:"#231F20",d:"M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0Z"}),(0,e.jsx)("path",{fill:"#FFF9AE",d:"M12.22 4.564a7.43 7.43 0 0 0-3.644.956 7.346 7.346 0 0 0-2.692 2.614 7.26 7.26 0 0 0-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 0 0 6.355-.14 7.36 7.36 0 0 0 2.513-2.057 7.28 7.28 0 0 0 1.372-2.93 7.243 7.243 0 0 0-.035-3.228A7.281 7.281 0 0 0 17.96 7.28a7.365 7.365 0 0 0-2.557-2.002 7.432 7.432 0 0 0-3.178-.715h-.007Z"}),(0,e.jsx)("path",{fill:"#00AEEF",d:"M18.071 7.426a7.262 7.262 0 0 1 1.51 4.499 7.264 7.264 0 0 1-1.595 4.47 7.38 7.38 0 0 1-4.028 2.558 7.437 7.437 0 0 1-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 0 0 5.181.858 7.381 7.381 0 0 0 4.443-2.778 7.258 7.258 0 0 0-.833-9.693Z"}),(0,e.jsx)("path",{fill:"#00A94F",d:"M16.713 6.078a7.253 7.253 0 0 1 .86 8.928 7.361 7.361 0 0 1-3.736 2.962 7.437 7.437 0 0 1-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 0 0 5.24.313 7.362 7.362 0 0 0 4.123-3.22 7.249 7.249 0 0 0 .914-5.123 7.296 7.296 0 0 0-2.757-4.427Z"}),(0,e.jsx)("path",{fill:"#F15D22",d:"M6.176 15.515a7.246 7.246 0 0 1-.26-4.876 7.312 7.312 0 0 1 2.9-3.95 7.427 7.427 0 0 1 9.26.735 7.387 7.387 0 0 0-4.603-2.771 7.431 7.431 0 0 0-5.277 1.068A7.311 7.311 0 0 0 5.06 10.06a7.249 7.249 0 0 0 .676 5.294L4.4 19.607l1.776-4.092Z"}),(0,e.jsx)("path",{fill:"#E31B23",d:"M5.735 15.353a7.25 7.25 0 0 1-.764-4.818 7.294 7.294 0 0 1 2.465-4.222 7.415 7.415 0 0 1 4.596-1.744 7.42 7.42 0 0 1 4.681 1.509 7.404 7.404 0 0 0-4.865-2.26 7.421 7.421 0 0 0-5.12 1.61 7.293 7.293 0 0 0-2.66 4.626A7.256 7.256 0 0 0 5.28 15.24l-.877 4.37 1.332-4.257Z"})]}),l=s},33039:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:[(0,e.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),l=s},68285:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:[(0,e.jsx)("path",{fill:"#212134",d:"M11.987 23.036v-.964H1.876V1.876h10.111V0H0v24h11.987v-.964Z"}),(0,e.jsx)("path",{fill:"#212134",d:"M8 11.2c0-.11.09-.2.2-.2h11.973l-5.445-5.445a.2.2 0 0 1 0-.283l1.13-1.13a.2.2 0 0 1 .283 0l7.718 7.717a.2.2 0 0 1 0 .282L16.14 19.86a.2.2 0 0 1-.282 0l-1.13-1.13a.2.2 0 0 1 0-.284L20.172 13H8.2a.2.2 0 0 1-.2-.2v-1.6Z"})]}),l=s},96700:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,e.jsx)("path",{fill:"#9736E8",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",d:"M18.037 11.774a28.578 28.578 0 0 0-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9.074 9.074 0 0 0-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.196.196 0 0 0 .017-.167.183.183 0 0 0-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.039.039 0 0 1 .024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.201.201 0 0 0-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.039.039 0 0 1 .024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.21.21 0 0 0-.057-.157.177.177 0 0 0-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.042.042 0 0 1-.044.018.046.046 0 0 1-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.173.173 0 0 0-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098.01.004.02.004.03.007.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.285.285 0 0 1 .105-.021c.097 0 .177.064.2.16a.264.264 0 0 1-.046.228l-2.344 1.731Z"})]}),l=s},66770:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),l=s},12997:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,e.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),l=s},64379:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#181826",d:"M22 8v2h-4.323l-.464 2.636A4.006 4.006 0 0 1 22.25 16.5a4 4 0 0 1-7.846 1.103l1.923-.551a2 2 0 1 0 .363-1.804l-1.81-.904L16 8h6ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Z"})}),l=s},73812:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#181826",d:"M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16Zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22Zm-2 3.133L17.19 16H20v-4.867Z"})}),l=s},30476:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#181826",d:"M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16Zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21Z"})}),l=s},42925:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#181826",d:"m21.097 8-2.598 4.5a4 4 0 1 1-3.453 1.981L18.788 8h2.309ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Zm14.5 10.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"})}),l=s},19072:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#181826",d:"m22 8-.002 2-2.505 2.883a3.752 3.752 0 0 1-.993 7.367 3.751 3.751 0 0 1-3.682-3.033l1.964-.382a1.75 1.75 0 1 0 .924-1.895l-1.307-1.547L19.35 10H15V8h7ZM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Z"})}),l=s},18138:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#181826",d:"M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2Zm14.5 4a3.75 3.75 0 0 1 2.978 6.03l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546a1.75 1.75 0 1 0-3.065-1.292l-.005.144h-2A3.75 3.75 0 0 1 18.5 8Z"})}),l=s},87050:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,e.jsx)("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),l=s},50862:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#212134",d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"})}),l=s},84076:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#32324D",d:"M3.74 2.7v3.85h1.04v.85H1.56v-.85H2.6V3.8H1.56v-.77l2.18-.33Zm-.72 10.92.01.04h1.75v.76H1.55v-.67l1.52-1.57c.19-.22.34-.41.43-.58a.99.99 0 0 0 .14-.45.64.64 0 0 0-.14-.43.51.51 0 0 0-.4-.16.43.43 0 0 0-.39.2.96.96 0 0 0-.14.53H1.52v-.02c-.02-.43.12-.79.41-1.09.3-.3.68-.44 1.16-.44.52 0 .91.12 1.2.37.29.25.43.6.43 1.04 0 .29-.08.55-.23.78-.15.22-.43.56-.84 1l-.63.7Zm1.63 5.85a1.25 1.25 0 0 0-.59-.42c.22-.1.4-.24.53-.41a1.16 1.16 0 0 0-.26-1.57c-.3-.23-.7-.35-1.21-.35-.43 0-.8.12-1.1.35-.31.23-.46.55-.45.92l.01.03h1.05c0-.19.05-.25.16-.33a.6.6 0 0 1 .37-.13c.18 0 .31.05.4.15.1.1.15.22.15.37a.6.6 0 0 1-.16.44.6.6 0 0 1-.45.17h-.5v.75h.5c.22 0 .39.07.5.17.12.1.18.28.18.5 0 .16-.05.3-.17.4a.64.64 0 0 1-.45.17.64.64 0 0 1-.42-.18.47.47 0 0 1-.18-.4H1.51l-.01.05c-.01.43.15.78.47 1 .33.23.71.35 1.15.35.5 0 .92-.12 1.25-.36.33-.24.49-.58.49-1 0-.26-.07-.48-.21-.67ZM8.4 3.97h14.1v2.38H8.4V3.98Zm14.1 6.9H8.4v2.37h14.1v-2.37Zm-14.1 6.9h14.1v2.37H8.4v-2.37Z"})}),l=s},82447:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#181826",d:"M3 4h18v2H3V4Zm0 15h14v2H3v-2Zm0-5h18v2H3v-2Zm0-5h14v2H3V9Z"})}),l=s},24307:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...a,children:[(0,e.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,e.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),l=s},64820:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...a,children:(0,e.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),l=s},75682:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...a,children:[(0,e.jsx)("path",{fill:"#66B7F1",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M12 10.921a.5.5 0 0 1 .773-.419l8.582 5.579a.5.5 0 0 1 0 .838l-8.582 5.579a.5.5 0 0 1-.773-.42V10.922Z",clipRule:"evenodd"})]}),l=s},77225:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:[(0,e.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,e.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),l=s},72535:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...a,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),l=s},13317:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 15 14",...a,children:(0,e.jsx)("path",{fill:"#212134",d:"M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"})}),l=s},82063:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#FF4500",fillRule:"evenodd",d:"M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92ZM17.94 10.34a1.73 1.73 0 0 1 1.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 0 1 0-.524 1.662 1.662 0 0 1-.461-.314 1.756 1.756 0 0 1-.076-2.46 1.697 1.697 0 0 1 2.425-.076 8.339 8.339 0 0 1 4.584-1.467l.868-4.136v-.006a.364.364 0 0 1 .435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 0 1 1.295 1.058 1.188 1.188 0 0 1-1.044 1.313 1.18 1.18 0 0 1-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 0 1 4.526 1.467 1.71 1.71 0 0 1 1.125-.483Zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 0 0 1.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194Zm2.747 5.39a4.47 4.47 0 0 0 2.904-.919v.047a.339.339 0 0 0 .006-.47.327.327 0 0 0-.465-.007 3.83 3.83 0 0 1-2.457.726 3.802 3.802 0 0 1-2.446-.75.314.314 0 0 0-.403 0 .327.327 0 0 0-.044.454 4.47 4.47 0 0 0 2.905.918Zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 0 0 1.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194Z",clipRule:"evenodd"})}),l=s},26171:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...a,children:[(0,e.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,e.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),l=s},86874:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",clipRule:"evenodd"})}),l=s},606:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...a,children:[(0,e.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,e.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),l=s},95687:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:[(0,e.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"}),(0,e.jsx)("path",{fill:"#181826",d:"m10.614 17.796.878-2.01a7.742 7.742 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.747 7.747 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.747 7.747 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.742 7.742 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0Zm8.787 4.894.247-.566a4.365 4.365 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.368 4.368 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.368 4.368 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.365 4.365 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0Z"})]}),l=s},70525:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 80 80",...a,children:[(0,e.jsx)("path",{fill:"#4945FF",d:"M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5Z",clipRule:"evenodd"}),(0,e.jsx)("path",{fill:"#fff",d:"M41.5 38h.5v.5h-.5z"}),(0,e.jsx)("path",{fill:"#9593FF",d:"M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 0 1-.5-.5V38ZM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13ZM28.3 38H15.2a.3.3 0 0 1-.2-.5l13.3-13.2V38Z"})]}),l=s},70521:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...a,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),l=s},30984:(c,o,t)=>{t.d(o,{Z:()=>l});var e=t(74081);const s=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",clipRule:"evenodd"})}),l=s},71434:(c,o,t)=>{t.r(o),t.d(o,{Alien:()=>e.Z,Apps:()=>s.Z,Archive:()=>l.Z,ArrowDown:()=>a.Z,ArrowLeft:()=>d.Z,ArrowRight:()=>i.Z,ArrowUp:()=>h.Z,Attachment:()=>n.Z,Bell:()=>r.Z,Blocks:()=>p.Z,Bold:()=>S.Z,Book:()=>g.Z,Boolean:()=>y.Z,Briefcase:()=>j.Z,Brush:()=>v.Z,BulletList:()=>u.Z,Calendar:()=>x.Z,Car:()=>m.Z,CarretDown:()=>M.Z,CarretUp:()=>w.Z,Cast:()=>C.Z,ChartBubble:()=>T.Z,ChartCircle:()=>E.Z,ChartPie:()=>B.Z,Check:()=>P.Z,CheckCircle:()=>R.Z,ChevronDown:()=>L.Z,ChevronLeft:()=>D.Z,ChevronRight:()=>$.Z,ChevronUp:()=>O.Z,Clock:()=>A.Z,Cloud:()=>H.Z,CloudUpload:()=>I,Code:()=>V.Z,CodeSquare:()=>U.Z,Cog:()=>b.Z,Collapse:()=>W.Z,CollectionType:()=>G.Z,Command:()=>K.Z,Component:()=>N.Z,Connector:()=>z.Z,Crop:()=>Q.Z,Cross:()=>Y.Z,CrossCircle:()=>X.Z,Crown:()=>J.Z,Cube:()=>k.Z,Cup:()=>q.Z,Cursor:()=>_.Z,Dashboard:()=>t1.Z,Database:()=>e1.Z,Date:()=>o1.Z,Discord:()=>n1.Z,Discourse:()=>l1.Z,Discuss:()=>s1.Z,Doctor:()=>a1.Z,Dot:()=>r1.Z,Download:()=>d1.Z,Drag:()=>i1.Z,Duplicate:()=>c1.Z,DynamicZone:()=>h1.Z,Earth:()=>u1.Z,EarthStriked:()=>v1.Z,Email:()=>g1.Z,EmotionHappy:()=>m1.Z,EmotionUnhappy:()=>f1.Z,EmptyDocuments:()=>x1.Z,EmptyPermissions:()=>p1.Z,EmptyPictures:()=>y1.Z,Enumeration:()=>Z1.Z,Envelop:()=>j1.Z,Equalizer:()=>S1,ExclamationMarkCircle:()=>w1.Z,Exit:()=>T1.Z,Expand:()=>C1.Z,ExternalLink:()=>E1.Z,Eye:()=>B1.Z,EyeStriked:()=>P1.Z,Facebook:()=>L1,Feather:()=>D1.Z,FeatherSquare:()=>$1.Z,File:()=>O1.Z,FileError:()=>A1.Z,FilePdf:()=>H1.Z,Filter:()=>F1.Z,Folder:()=>I1.Z,Gate:()=>V1.Z,Gift:()=>U1.Z,Github:()=>b1.Z,GlassesSquare:()=>W1.Z,Globe:()=>G1.Z,GraphQl:()=>N1,Grid:()=>z1.Z,HandHeart:()=>Q1.Z,Hashtag:()=>Y1.Z,HeadingFive:()=>X1.Z,HeadingFour:()=>J1.Z,HeadingOne:()=>k1.Z,HeadingSix:()=>q1.Z,HeadingThree:()=>_1.Z,HeadingTwo:()=>t0.Z,Headphone:()=>e0.Z,Heart:()=>o0.Z,House:()=>n0.Z,IndentDecrease:()=>s0,IndentIncrease:()=>r0,Information:()=>d0.Z,InformationSquare:()=>i0.Z,Italic:()=>c0.Z,Json:()=>h0.Z,Key:()=>u0.Z,Landscape:()=>v0.Z,LandscapeSmall:()=>m0,Layer:()=>f0.Z,Layout:()=>x0.Z,Lightbulb:()=>p0.Z,Link:()=>y0.Z,LinkSmall:()=>j0,List:()=>M0.Z,Loader:()=>S0.Z,Lock:()=>w0.Z,Magic:()=>T0.Z,Mail:()=>E0,ManyToMany:()=>B0.Z,ManyToOne:()=>P0.Z,ManyWays:()=>R0.Z,Media:()=>L0.Z,Medium:()=>D0.Z,MenuBurger:()=>O0,Message:()=>A0.Z,Microphone:()=>H0.Z,Minus:()=>F0.Z,MinusOutlined:()=>V0,Monitor:()=>U0.Z,Moon:()=>b0.Z,More:()=>W0.Z,Move:()=>K0,Music:()=>N0.Z,Number:()=>z0.Z,NumberList:()=>Q0.Z,OneToMany:()=>Y0.Z,OneToOne:()=>X0.Z,OneWay:()=>J0.Z,OnholdCarretDown:()=>q0,OnholdCarretUp:()=>t2,Paint:()=>e2.Z,PaintBrush:()=>o2.Z,PaperPlane:()=>n2.Z,Paragraph:()=>l2.Z,Password:()=>s2.Z,Pencil:()=>a2.Z,Phone:()=>r2.Z,Picture:()=>d2.Z,PicturePlus:()=>i2.Z,Pin:()=>c2.Z,PinMap:()=>h2.Z,Plane:()=>u2.Z,Play:()=>v2.Z,PlaySquare:()=>g2.Z,Plus:()=>m2.Z,PlusCircle:()=>f2.Z,PriceTag:()=>x2.Z,Puzzle:()=>p2.Z,Question:()=>y2.Z,Quote:()=>Z2.Z,QuoteClosed:()=>M2,Reddit:()=>S2.Z,Refresh:()=>w2.Z,Relation:()=>T2.Z,Repeat:()=>C2.Z,Restaurant:()=>E2.Z,RichText:()=>B2.Z,Rocket:()=>P2.Z,Rotate:()=>R2.Z,Scissors:()=>L2.Z,Search:()=>D2.Z,SearchIcon:()=>O2,Seed:()=>A2.Z,Server:()=>H2.Z,Shield:()=>F2.Z,Shirt:()=>I2.Z,ShoppingCart:()=>V2.Z,SingleType:()=>U2.Z,Slideshow:()=>b2.Z,Spark:()=>W2.Z,Spinner:()=>K2,Stack:()=>N2.Z,Star:()=>z2.Z,Store:()=>Q2.Z,Strapi:()=>Y2.Z,StrikeThrough:()=>X2.Z,Sun:()=>J2.Z,Television:()=>k2.Z,Text:()=>q2.Z,ThumbDown:()=>_2.Z,ThumbUp:()=>tt.Z,Train:()=>et.Z,Trash:()=>ot.Z,Twitter:()=>nt.Z,Typhoon:()=>lt.Z,Uid:()=>st.Z,Underline:()=>at.Z,Upload:()=>rt.Z,User:()=>dt.Z,VolumeMute:()=>it.Z,VolumeUp:()=>ct.Z,Walk:()=>ht.Z,Wheelchair:()=>ut.Z,Write:()=>vt.Z});var e=t(56692),s=t(79131),l=t(53264),a=t(93454),d=t(76827),i=t(53274),h=t(45684),n=t(7559),r=t(31654),p=t(89677),S=t(18334),g=t(42108),y=t(67929),j=t(32721),v=t(67224),u=t(20316),x=t(36974),m=t(8419),M=t(10411),w=t(78181),C=t(42190),T=t(3232),E=t(4896),B=t(64386),P=t(59082),R=t(15398),L=t(78582),D=t(64449),$=t(89242),O=t(57853),A=t(73192),H=t(98430),f=t(74081);const F=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#212134",d:"M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019ZM13 13h3l-4-5-4 5h3v4h2v-4Z"})}),I=F;var V=t(74002),U=t(23227),b=t(35318),W=t(70743),G=t(14461),K=t(38724),N=t(67638),z=t(94187),Q=t(70415),Y=t(95066),X=t(8305),J=t(8243),k=t(71267),q=t(61646),_=t(92518),t1=t(67890),e1=t(95957),o1=t(52374),n1=t(73352),l1=t(75481),s1=t(20184),a1=t(54285),r1=t(79830),d1=t(33766),i1=t(33039),c1=t(78031),h1=t(24001),u1=t(7995),v1=t(78372),g1=t(16719),m1=t(47241),f1=t(87532),x1=t(52448),p1=t(6162),y1=t(10562),Z1=t(14858),j1=t(16543);const M1=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),S1=M1;var w1=t(15206),T1=t(68285),C1=t(271),E1=t(48157),B1=t(98264),P1=t(92191);const R1=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#1977F3",fillRule:"evenodd",d:"M12.143 24Zm1.732-.146V15.47h2.796l.532-3.47h-3.328V9.749c0-.949.464-1.875 1.956-1.875h1.514V4.921s-1.374-.235-2.687-.235c-2.74 0-4.533 1.66-4.533 4.67V12H7.078v3.47h3.047v8.384C4.388 22.954 0 17.99 0 12 0 5.373 5.373 0 12 0s12 5.373 12 12c0 5.99-4.388 10.954-10.125 11.854Z",clipRule:"evenodd"})}),L1=R1;var D1=t(89824),$1=t(96700),O1=t(89906),A1=t(47278),H1=t(66390),F1=t(57121),I1=t(61287),V1=t(84670),U1=t(56074),b1=t(66770),W1=t(12997),G1=t(20302);const K1=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#8E8EA9",fillRule:"evenodd",d:"M11.76 6.801a1.435 1.435 0 0 0 .797 0l4.31 7.45a1.418 1.418 0 0 0-.401.696H7.85a1.427 1.427 0 0 0-.401-.693L11.76 6.8Zm-.63-.378.042.04-4.312 7.453a1.374 1.374 0 0 0-.056-.015v-3.802A1.42 1.42 0 0 0 7.83 8.324l3.3-1.901Zm2.396-.583a1.428 1.428 0 1 0-2.737-.002L7.494 7.736a1.431 1.431 0 0 0-2.273.268 1.425 1.425 0 0 0 .904 2.098V13.9a1.426 1.426 0 1 0 1.37 2.368l3.293 1.897a1.425 1.425 0 0 0 1.37 1.828 1.427 1.427 0 0 0 1.355-1.873l3.274-1.887a1.431 1.431 0 0 0 2.304-.236 1.419 1.419 0 0 0-.9-2.097v-3.797a1.426 1.426 0 1 0-1.371-2.365L13.526 5.84Zm-.381.622.038-.038 3.302 1.903a1.42 1.42 0 0 0 1.027 1.772V13.9l-.055.015-4.312-7.453Zm3.348 9.256-3.28 1.89a1.425 1.425 0 0 0-1.055-.465c-.404 0-.77.167-1.029.436l-3.296-1.9a1.41 1.41 0 0 0 .015-.055h8.619l.026.094Z",clipRule:"evenodd"})}),N1=K1;var z1=t(66351),Q1=t(59453),Y1=t(99001),X1=t(64379),J1=t(73812),k1=t(30476),q1=t(42925),_1=t(19072),t0=t(18138),e0=t(11618),o0=t(36952),n0=t(53723);const l0=Z=>(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:[(0,f.jsx)("g",{clipPath:"url(#IndentDecrease_svg__a)",children:(0,f.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8ZM1 12l4.9-4.2v8.4L1 12Z"})}),(0,f.jsx)("defs",{children:(0,f.jsx)("clipPath",{id:"IndentDecrease_svg__a",children:(0,f.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),s0=l0,a0=Z=>(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:[(0,f.jsx)("g",{clipPath:"url(#IndentIncrease_svg__a)",children:(0,f.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8Zm-5 4.2L1 16.2V7.8L5.9 12Z"})}),(0,f.jsx)("defs",{children:(0,f.jsx)("clipPath",{id:"IndentIncrease_svg__a",children:(0,f.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),r0=a0;var d0=t(42679),i0=t(87050),c0=t(64059),h0=t(6913),u0=t(5368),v0=t(52827);const g0=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M7.1 5a.573.573 0 0 0 0 1.145h9.744a.573.573 0 0 0 0-1.145H7.1Zm10.3 2.354a1.6 1.6 0 0 1 1.6 1.6v8.7a1.6 1.6 0 0 1-1.6 1.6H6.6a1.6 1.6 0 0 1-1.6-1.6V8.963c0-.884.716-1.609 1.6-1.609h10.8Zm-9.834 9.47h9.123l-1.996-2.04-1.14 1.165-2.566-2.622-3.421 3.496Zm7.127-4.078c-.798 0-1.425-.641-1.425-1.457 0-.816.627-1.457 1.425-1.457.799 0 1.426.641 1.426 1.457 0 .816-.627 1.457-1.426 1.457Z",clipRule:"evenodd"})}),m0=g0;var f0=t(31440),x0=t(43582),p0=t(58113),y0=t(47243);const Z0=Z=>(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:[(0,f.jsx)("path",{fill:"#212134",d:"M17.756 5.748a3.416 3.416 0 0 0-4.747.467L12.01 7.41a.852.852 0 0 0 1.308 1.092l1-1.195a1.7 1.7 0 0 1 2.43-.18 1.735 1.735 0 0 1 .141 2.394l-2.077 2.486-.019.022a1.697 1.697 0 0 1-2.522.043.852.852 0 0 0-1.248 1.162 3.405 3.405 0 0 0 5.1-.137l2.071-2.48a3.502 3.502 0 0 0 .79-2.572 3.345 3.345 0 0 0-1.228-2.298Z"}),(0,f.jsx)("path",{fill:"#212134",d:"m11.622 14.956-.893 1.069a1.735 1.735 0 0 1-2.381.286 1.7 1.7 0 0 1-.255-2.423l2.113-2.529.016-.017a1.692 1.692 0 0 1 2.552-.012.852.852 0 0 0 .999.205.841.841 0 0 0 .284-.22l.01-.012a.84.84 0 0 0-.014-1.1 3.4 3.4 0 0 0-5.16.07l-2.108 2.522a3.417 3.417 0 0 0 .385 4.754 3.346 3.346 0 0 0 2.48.8 3.501 3.501 0 0 0 2.39-1.234l.89-1.066a.852.852 0 1 0-1.308-1.093Z"})]}),j0=Z0;var M0=t(86485),S0=t(34547),w0=t(91561),T0=t(13389);const C0=Z=>(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 20",...Z,children:[(0,f.jsx)("path",{fill:"#32324D",d:"M0 .8A.8.8 0 0 1 .8 0h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V.8Z"}),(0,f.jsx)("path",{fill:"#32324D",d:"M1.922 5.991C.197 4.675 0 4.252 0 3.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 16H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 19.529.537 20 1.2 20h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,f.jsx)("path",{fill:"#32324D",d:"M0 7.555v10.972h24V7.554c-2.633 1.95-8.367 6.113-9.96 7.165-1.595 1.053-3.352.439-4.032 0L0 7.555Z"})]}),E0=C0;var B0=t(43286),P0=t(27645),R0=t(36730),L0=t(48809),D0=t(42821);const $0=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#212134",d:"M8 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8 11.7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8.5 14.401a.5.5 0 0 0-.5.5v.6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.6a.5.5 0 0 0-.5-.5h-7Z"})}),O0=$0;var A0=t(50862),H0=t(68077),F0=t(29938);const I0=Z=>(0,f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:[(0,f.jsx)("circle",{cx:12,cy:12,r:11.5,stroke:"#C0C0CF"}),(0,f.jsx)("rect",{width:10,height:2,x:7,y:11,fill:"#4945FF",rx:1})]}),V0=I0;var U0=t(88678),b0=t(1628),W0=t(75438);const G0=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#212134",d:"M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11H11Z"})}),K0=G0;var N0=t(74334),z0=t(60330),Q0=t(84076),Y0=t(64510),X0=t(1267),J0=t(91682);const k0=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M19 8.889a.86.86 0 0 1-.26.625l-6.125 6.222A.834.834 0 0 1 12 16a.834.834 0 0 1-.615-.264L5.26 9.514A.861.861 0 0 1 5 8.889c0-.24.087-.45.26-.625A.834.834 0 0 1 5.875 8h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",clipRule:"evenodd"})}),q0=k0,_0=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M5 15.111c0-.24.087-.449.26-.625l6.125-6.222A.834.834 0 0 1 12 8c.237 0 .442.088.615.264l6.125 6.222a.86.86 0 0 1 .26.625.86.86 0 0 1-.26.625.834.834 0 0 1-.615.264H5.875a.835.835 0 0 1-.615-.264.86.86 0 0 1-.26-.625Z",clipRule:"evenodd"})}),t2=_0;var e2=t(30770),o2=t(95096),n2=t(13789),l2=t(82447),s2=t(24307),a2=t(26784),r2=t(71387),d2=t(23109),i2=t(80153),c2=t(38447),h2=t(83761),u2=t(26244),v2=t(64820),g2=t(75682),m2=t(36938),f2=t(77225),x2=t(29426),p2=t(72535),y2=t(13317),Z2=t(63302);const j2=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#212134",d:"M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311-1.803-.167-3.225-1.648-3.225-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179Zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311C4.592 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179h-.001Z"})}),M2=j2;var S2=t(82063),w2=t(84352),T2=t(967),C2=t(50186),E2=t(76715),B2=t(26171),P2=t(48098),R2=t(70901),L2=t(54763),D2=t(10382);const $2=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...Z,children:(0,f.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"m23.813 20.163-5.3-5.367a9.792 9.792 0 0 0 1.312-4.867C19.825 4.455 15.375 0 9.913 0 4.45 0 0 4.455 0 9.929c0 5.473 4.45 9.928 9.912 9.928a9.757 9.757 0 0 0 5.007-1.4l5.275 5.35a.634.634 0 0 0 .913 0l2.706-2.737a.641.641 0 0 0 0-.907ZM9.91 3.867c3.338 0 6.05 2.718 6.05 6.061s-2.712 6.061-6.05 6.061c-3.337 0-6.05-2.718-6.05-6.06 0-3.344 2.713-6.062 6.05-6.062Z",clipRule:"evenodd"})}),O2=$2;var A2=t(60674),H2=t(55353),F2=t(94842),I2=t(27733),V2=t(86874),U2=t(606),b2=t(66721),W2=t(95687);const G2=Z=>(0,f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 40 40",...Z,children:(0,f.jsx)("path",{fill:"#4945FF",d:"M30.113 7.768a16.772 16.772 0 0 0-6.635-3.317c-2.505-.634-5.23-.598-7.854.096-.313.065-.6.166-.879.265l-.123.042c-.102.035-.203.07-.308.108a7.57 7.57 0 0 0-.655.247c-.164.078-.325.148-.488.221-.44.198-.893.403-1.29.657-1.314.71-2.42 1.674-3.247 2.448-1.922 1.931-3.355 4.359-4.035 6.832l-.093.37c-.131.516-.27 1.049-.322 1.572-.012.107-.033.214-.047.318-.032.218-.065.431-.078.664l-.051 1.097c-.005.11-.011.225-.006.358l.073 1.44.148.993c.041.283.085.581.164.85.553 2.391 1.627 4.609 3.103 6.41a15.664 15.664 0 0 0 4.951 3.997l.969.468c.092.04.168.07.242.096l.116.04c.152.053.295.106.444.16.276.106.546.206.843.295l1.26.32c.265.052.531.091.79.128.135.021.27.038.429.065 1.532.166 2.95.147 4.087-.058.092-.016.182-.026.272-.04.183-.025.368-.048.531-.092l1.284-.319 1.307-.456a.502.502 0 0 0-.318-.951l-1.277.396-1.246.257c-.135.026-.277.04-.422.056-.1.004-.196.02-.305.03-1.048.148-2.342.115-3.728-.089-.137-.024-.272-.05-.405-.074-.24-.046-.477-.09-.695-.142l-1.16-.338c-.248-.087-.497-.19-.75-.292a8.766 8.766 0 0 0-.433-.177l-.116-.05c-.055-.022-.117-.045-.145-.06l-.895-.474a14.106 14.106 0 0 1-4.296-3.739c-1.24-1.637-2.115-3.632-2.527-5.76-.42-2.045-.27-4.382.422-6.577.633-2.004 1.756-3.82 3.34-5.404.103-.104.207-.208.295-.29.778-.67 1.714-1.42 2.822-1.962.312-.184.66-.327 1.027-.475.175-.071.346-.142.488-.203.158-.058.327-.112.49-.162.107-.03.213-.065.306-.091l.123-.042c.227-.07.436-.137.668-.174l.836-.17c.163-.03.332-.046.498-.065.111-.011.215-.016.336-.032.384-.06.77-.062 1.185-.063.147 0 .3.001.465-.008.14-.006.292.013.455.03.11.01.216.022.297.027.109.01.21.022.322.03.166.01.318.025.458.051.187.041.377.075.57.106.346.063.673.126.989.238a13.246 13.246 0 0 1 5.263 2.872 12.87 12.87 0 0 1 3.122 4.294c.628 1.403 1.014 2.895 1.104 4.328.017.201.02.398.021.592-.002.126.003.25.006.356a1.64 1.64 0 0 0 .003.187c.005.086.005.171 0 .242l-.038.448c-.014.119-.02.23-.03.34a4.2 4.2 0 0 1-.043.466l-.145.787c-.042.298-.121.554-.194.793-.035.13-.078.254-.096.348-.026.074-.042.143-.061.209-.021.078-.037.151-.078.244l-.545 1.354a2.02 2.02 0 0 0 1.212 2.57 2.002 2.002 0 0 0 2.1-.459c.208-.208.366-.456.464-.735l.465-1.298c.045-.121.092-.287.134-.457l.059-.235c.028-.118.06-.242.096-.377.103-.388.22-.833.268-1.281l.132-.955c.028-.233.036-.47.045-.711.005-.114.009-.233.018-.36l.029-.567c0-.128-.01-.27-.018-.406l-.008-.21a18.315 18.315 0 0 1-.017-.387 7.82 7.82 0 0 0-.067-.832c-.194-1.838-.752-3.734-1.623-5.499a16.385 16.385 0 0 0-4.154-5.293Z"})}),K2=G2;var N2=t(10438),z2=t(39142),Q2=t(80103),Y2=t(70525),X2=t(89975),J2=t(48577),k2=t(2426),q2=t(63161),_2=t(68501),tt=t(34389),et=t(8152),ot=t(78665),nt=t(1072),lt=t(23333),st=t(81907),at=t(36558),rt=t(70521),dt=t(19395),it=t(4452),ct=t(52245),ht=t(27866),ut=t(804),vt=t(30984)}}]);
