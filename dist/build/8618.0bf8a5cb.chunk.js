"use strict";(self.webpackChunkmy_strapi=self.webpackChunkmy_strapi||[]).push([[8618],{11745:(Y,C,s)=>{s.d(C,{a:()=>f,g:()=>O});var t=s(97003),a=s(47706);function O(E){if(!E)return null;const W=Object.entries(t.W.colors).filter(([,P])=>P.toUpperCase()===E.toUpperCase()).reduce((P,[K])=>(a.S?.[K]&&(P=K),P),null);return W?{themeColorName:W,name:a.S[W]}:null}function f(){return Object.entries(a.S).map(([E,U])=>({hex:t.W.colors[E].toUpperCase(),name:U}))}},42551:(Y,C,s)=>{s.d(C,{A:()=>a,S:()=>t});const t="strapi_stage",a="strapi_assignee"},48618:(Y,C,s)=>{s.r(C),s.d(C,{InformationBoxEE:()=>ss});var t=s(74081),a=s(47665),O=s(65093),f=s(1821),E=s(10701),U=s(8295),W=s(61121),P=s(63738),K=s(32370),z=s(77970),G=s(67588),Q=s(55911),F=s(61020),x=s(40464),V=s(59461),ts=s(8175),as=s(98934),ns=s(74919),os=s(92249),es=s(24414),_s=s(87830),ls=s(43433),H=s(11266),J=s(38178),o=s(42551),S=s(27279),X=s(66360),h=s(78099),u=s(47706),w=s(11745),Es=s(51006),rs=s(364),is=s(76368),ds=s(3243),Ms=s(29206),Ds=s(6078),Os=s(51943),Ps=s(66333),gs=s(15816),ms=s(97442),vs=s(13576),cs=s(47184),Cs=s(71563),hs=s(49204),As=s(47853),Is=s(75719),Ws=s(84921),Ls=s(41942),Ts=s(4828),Bs=s(22919),Rs=s(53915),fs=s(75041),Us=s(30200),Ks=s(91379),us=s(33299),ys=s(33409),js=s(63645),xs=s(7988),Ss=s(7055),Ns=s(26757),$s=s(58311),ps=s(29510),Ys=s(79146),Fs=s(16946),ws=s(10124),Zs=s(69530),zs=s(19764),Gs=s(42982),Qs=s(26126),Vs=s(80481),Hs=s(81465),Js=s(37997),Xs=s(63799),ks=s(86961),bs=s(51527),qs=s(64797),st=s(85811);function k(){const{initialData:_,layout:{uid:i},isSingleType:g,onChange:L}=(0,a.Wq)(),T=(0,V.v9)(J.s),{formatMessage:n}=(0,F.Z)(),{formatAPIError:B}=(0,a.So)(),M=(0,a.lm)(),{put:R}=(0,a.kY)(),{allowedActions:{canReadUsers:d},isLoading:m}=(0,a.ss)({readUsers:T.settings.users.read}),{users:A,isLoading:I,isError:y}=(0,H.u)({},{enabled:!m&&d}),v=_?.[o.A]??null,c=async({value:e})=>{l.mutate({entityId:_.id,assigneeId:parseInt(e,10),uid:i})},l=(0,x.useMutation)(async({entityId:e,assigneeId:N,uid:$})=>{const r=g?"single-types":"collection-types",{data:{data:D}}=await R(`/admin/content-manager/${r}/${$}/${e}/assignee`,{data:{id:N}});return L({target:{name:o.A,value:D[o.A]}},!0),D},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.assignee.notification.saved",defaultMessage:"Assignee updated"}})}});return(0,t.jsx)(f.g,{name:o.A,id:o.A,children:(0,t.jsx)(E.k,{direction:"column",gap:2,alignItems:"stretch",children:(0,t.jsx)(U.hQ,{clearLabel:n({id:"content-manager.reviewWorkflows.assignee.clear",defaultMessage:"Clear assignee"}),error:y&&d&&n({id:"content-manager.reviewWorkflows.assignee.error",defaultMessage:"An error occurred while fetching users"})||l.error&&B(l.error),disabled:!m&&!I&&A.length===0,name:o.A,id:o.A,value:v?v.id:null,onChange:e=>c({value:e}),onClear:()=>c({value:null}),placeholder:n({id:"content-manager.reviewWorkflows.assignee.placeholder",defaultMessage:"Select \u2026"}),label:n({id:"content-manager.reviewWorkflows.assignee.label",defaultMessage:"Assignee"}),loading:I||m||l.isLoading,children:A.map(e=>(0,t.jsx)(W.O,{value:e.id,textValue:(0,O.g)(e,n),children:(0,O.g)(e,n)},e.id))})})})}function b({id:_,layout:i}={},g={}){const{kind:L,uid:T}=i,n=L==="collectionType"?"collection-types":"single-types",{get:B}=(0,a.kY)(),{data:M,isLoading:R,refetch:d}=(0,x.useQuery)(["content-manager",n,i.uid,_,"stages"],async()=>{const{data:I}=await B(`/admin/content-manager/${n}/${T}/${_}/stages`);return I},g),m=S.useMemo(()=>M?.meta??{},[M?.meta]),A=S.useMemo(()=>M?.data??[],[M?.data]);return{meta:m,stages:A,isLoading:R,refetch:d}}function q(){const{initialData:_,layout:i,isSingleType:g,onChange:L}=(0,a.Wq)(),{put:T}=(0,a.kY)(),{formatMessage:n}=(0,F.Z)(),{formatAPIError:B}=(0,a.So)(),M=(0,a.lm)(),{meta:R,stages:d,isLoading:m,refetch:A}=b({id:_.id,layout:i},{enabled:!!_?.id}),{getFeature:I}=(0,X.u)(),[y,v]=S.useState(!1),c=I("review-workflows"),l=_?.[o.S]??null,e=(0,x.useMutation)(async({entityId:r,stageId:D,uid:j})=>{const p=g?"single-types":"collection-types",{data:{data:Z}}=await T(`/admin/content-manager/${p}/${j}/${r}/stage`,{data:{id:D}});return L({target:{name:o.S,value:Z[o.S]}},!0),await A(),Z},{onSuccess(){M({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Review stage updated"}})}}),N=async({value:r})=>{try{c?.[u.C]&&parseInt(c[u.C],10)<R.workflowCount?v("workflow"):c?.[u.a]&&parseInt(c[u.a],10)<d.length?v("stage"):e.mutateAsync({entityId:_.id,stageId:r,uid:i.uid})}catch{}},{themeColorName:$}=l?.color?(0,w.g)(l?.color):{};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.g,{hint:d.length===0&&n({id:"content-manager.reviewWorkflows.stages.no-transition",defaultMessage:"You don\u2019t have the permission to update this stage."}),name:o.S,id:o.S,children:(0,t.jsxs)(E.k,{direction:"column",gap:2,alignItems:"stretch",children:[(0,t.jsx)(P.q4,{disabled:d.length===0,error:e.error&&B(e.error)||null,name:o.S,id:o.S,value:l?.id,onChange:r=>N({value:r}),label:n({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"}),startIcon:l&&(0,t.jsx)(E.k,{as:"span",height:2,background:l?.color,borderColor:$==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2,marginRight:"-3px"}),customizeContent:()=>(0,t.jsxs)(E.k,{as:"span",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,t.jsx)(K.Z,{textColor:"neutral800",ellipsis:!0,children:l?.name??""}),m?(0,t.jsx)(z.a,{small:!0,style:{display:"flex"},"data-testid":"loader"}):null]}),children:d.map(({id:r,color:D,name:j})=>{const{themeColorName:p}=(0,w.g)(D);return(0,t.jsx)(P.ag,{startIcon:(0,t.jsx)(E.k,{height:2,background:D,borderColor:p==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),value:r,textValue:j,children:j},r)})}),(0,t.jsx)(G.J,{}),(0,t.jsx)(Q.c,{})]})}),(0,t.jsxs)(h.L,{isOpen:y==="workflow",onClose:()=>v(!1),children:[(0,t.jsx)(h.T,{children:n({id:"content-manager.reviewWorkflows.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(h.B,{children:n({id:"content-manager.reviewWorkflows.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(h.L,{isOpen:y==="stage",onClose:()=>v(!1),children:[(0,t.jsx)(h.T,{children:n({id:"content-manager.reviewWorkflows.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(h.B,{children:n({id:"content-manager.reviewWorkflows.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}function ss(){const{isCreatingEntry:_,layout:{options:i}}=(0,a.Wq)(),g=i?.reviewWorkflows??!1;return(0,t.jsxs)(O.I.Root,{children:[(0,t.jsx)(O.I.Title,{}),g&&!_&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(q,{}),(0,t.jsx)(k,{})]}),(0,t.jsx)(O.I.Body,{})]})}}}]);
