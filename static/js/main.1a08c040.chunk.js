(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports=n(246)},159:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),l=n.n(c),o=(n(159),n(297)),u=n(293),i=n(70),s=n(11),m=n.n(s),f=n(22),d=n(16),p=n(67),h=n(298),E=n(280),v=n(301),b=n(281),x=n(282);n(164);function w(e){return new Promise(function(t,n){var a=new FileReader;a.onload=function(){t(a.result)},a.onerror=n,a.readAsText(e)})}var g=function(e){var t=function(){var t=Object(f.a)(m.a.mark(function t(n,a){var r,c,l;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.target.files[0],t.next=3,w(r);case 3:c=t.sent,l=JSON.parse(c),e.handleNewData(l);case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}();return r.a.createElement(h.a,{type:"file",label:"Add a file",onChange:t,helperText:"Select a file"})},y=function(e){var t=r.a.useState(null),n=Object(d.a)(t,2),a=n[0],c=n[1],l=r.a.useState([]),o=Object(d.a)(l,2),u=o[0],i=o[1],s=r.a.useState(null),m=Object(d.a)(s,2),f=m[0],p=m[1],w=r.a.useState(!1),y=Object(d.a)(w,2),O=y[0],j=y[1],C=P();return r.a.createElement("form",null,r.a.createElement(g,{handleNewData:function(e){i(Object.keys(e[0])),c(e)}}),r.a.createElement(E.a,{in:u.length},r.a.createElement(h.a,{onChange:function(e){return p(e.target.value)},value:f,select:!0,label:"Text Field",helperText:"Please select the field in the data we'll be labeling",margin:"normal"},u.map(function(e){return r.a.createElement(v.a,{value:e},e)}))),O?r.a.createElement(b.a,null):r.a.createElement(x.a,{onClick:function(){j(!0);var e=a.map(function(e,t){return{content:e[f]}});C.addDocsBatch(e).then(function(){return j(!1)})},disabled:null===f,variant:"outlined",color:"primary"},"Load Data"))},O=new p.a("INDEX12");O.version(1).stores({elastic:"id,content"});var j=function(){var e=Object(f.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.elastic.delete(1);case 2:window.location.reload();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),C=new p.a("DATA"),k={data:"++id,human_label,model_label,*contentWords",schema:"++id,name"},S=function(e){for(var t=new Set,n=2;n<e.length;n++)t.add(e.slice(n-2,n));return Array.from(t)};!function(){C.version(1).stores(k);C.data.hook("creating",function(e,t,n){"string"==typeof t.content&&(t.contentWords=S(t.content))}),C.data.hook("updating",function(e,t,n,a){if(e.hasOwnProperty("content"))return"string"==typeof e.content?{contentWords:S(e.content)}:{contentWords:[]}}),C.open()}();var D=function(e){return C.transaction("rw",C.data,function(){e.forEach(function(e){return C.data.add(e)})})},A=function(){var e=Object(f.a)(m.a.mark(function e(t){var n,a,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=S(t),e.next=3,p.a.Promise.all(n.map(function(e){return C.data.where("contentWords").equals(e).distinct().primaryKeys()}));case 3:return a=e.sent,r=a.reduce(function(e,t){var n=new Set(t);return e.filter(function(e){return n.has(e)})}),c=C.data.where("id").anyOf(r).toArray(),e.abrupt("return",c);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),F=function(e,t){return C.schema.add({name:e,color:t})},W=function(){return C.schema.toArray()},_=(n(180),r.a.createContext("dbContext")),N=function(e){var t=r.a.useState(0),n=Object(d.a)(t,2),a=n[0],c=n[1],l=r.a.useState(!1),o=Object(d.a)(l,2),u=o[0],i=o[1],s=function(){return c(a+1)},p=function(){var e=Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i(!0);case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();r.a.useEffect(p,[1]);var h={addDoc:function(e){s()},addDocsBatch:function(){var e=Object(f.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:e.sent;case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),updateDoc:function(e){s()},updateDocsBatch:function(e){var t=!0,n=!1,a=void 0;try{for(var r,c=e[Symbol.iterator]();!(t=(r=c.next()).done);t=!0)r.value}catch(l){n=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(n)throw a}}s()},search:function(){var e=Object(f.a)(m.a.mark(function e(t,n){var a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),allDocs:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return C.data.limit(e).toArray()}(20)},step:a};return r.a.createElement(_.Provider,{value:h},u?e.children:null)},P=function(){return r.a.useContext(_)},T=n(146),U=n(248),B=n(288),I=n(145),H=n(279),J=n(289),R=n(290),Y=n(291),q=n(249),K=n(241),L=r.a.createContext("classContext"),X=function(e){var t=r.a.useState({}),n=Object(d.a)(t,2),a=n[0],c=n[1];r.a.useEffect(Object(f.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}},e)})),[1]);var l=function(){var e=Object(f.a)(m.a.mark(function e(t){var n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=K.getColor({text:t}),e.next=3,F(t,n);case 3:return e.next=5,W();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(L.Provider,{value:{classes:Object.values(a),addClass:l}},e.children)},$=function(){return r.a.useContext(L)},z=n(283),G=n(300),M=n(285),Q=n(286),V=n(287),Z=n(284),ee=function(e){var t=$(),n=r.a.useState(null),a=Object(d.a)(n,2),c=a[0],l=a[1],o=r.a.useState(!1),u=Object(d.a)(o,2),i=u[0],s=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:function(){return s(!0)}},r.a.createElement(Z.a,null)),r.a.createElement(G.a,{open:i,onClose:function(){return s(!1)}},r.a.createElement(M.a,null,"Add a new class"),r.a.createElement(Q.a,null,r.a.createElement(h.a,{onChange:function(e){return l(e.target.value)},value:c,label:"Choose a name for your class"})),r.a.createElement(V.a,null,r.a.createElement(x.a,{variant:"contained",color:"primary",disabled:null===c,onClick:function(){t.addClass(c),s(!1),l(null)}},"Add ",c))))},te=function(e){var t=$(),n=function(t){var n,a;(n=e.example.id,a=t,C.data.update(n,{human_label:a})).then(e.handleUpdateExample)};return r.a.createElement(B.a,{container:!0,spacing:2},r.a.createElement(B.a,{item:!0},r.a.createElement(ee,null)),t.classes.map(function(t){return r.a.createElement(B.a,{item:!0},r.a.createElement(x.a,{variant:e.example.human_label==t.name?"contained":"outlined",onClick:function(){n(t.name)},style:{borderColor:t.color,background:e.example.human_label===t.name?t.color:void 0}},t.name))}))},ne=Object(q.a)(function(e){return{root:{height:"80%",overflow:"auto"}}}),ae=function(e){var t=ne();return r.a.createElement(H.a,{className:t.root,id:e.example.id},r.a.createElement(J.a,{title:e.example.id}),r.a.createElement(R.a,null,r.a.createElement(i.a,null,e.example.content)),r.a.createElement(Y.a,null,r.a.createElement(te,{example:e.example,handleUpdateExample:e.handleUpdateExample})))},re=n(292),ce=n(144),le=function(e){var t=r.a.useState(null),n=Object(d.a)(t,2),a=n[0],c=(n[1],Object(ce.useDebouncedCallback)(function(t){e.onChange(t)},250)),l=Object(d.a)(c,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{type:"text",label:"Search for something",helperText:"Runs a full text search on your data",onChange:function(e){l(e.target.value)}}),r.a.createElement(z.a,{onClick:function(){return e.onChange(a)}}," ",r.a.createElement(re.a,null)," "))},oe=Object(U.a)(function(e){return{root:{"&:focus":{outline:0},"&::-webkit-scrollbar":{display:"hidden"}}}}),ue=function(e){var t=r.a.useState(0),n=Object(d.a)(t,2),a=n[0],c=n[1],l=r.a.useState(0),o=Object(d.a)(l,2),i=o[0],s=o[1],m=r.a.useCallback(function(e){null!==e&&0===a&&(c(e.clientHeight),s(e.clientWidth))}),f=e.examples,p=f.length>1?a/3:2*a/3,h=f.length>1?2*p:a,E=oe();return r.a.createElement(u.a,{style:{height:"85vh"}},r.a.createElement("div",{className:E.root,style:{position:"relative",height:"100%",width:"100%",overflow:"hidden"},ref:m},f.length," examples",r.a.createElement(B.a,{container:!0},r.a.createElement(I.a,{height:a,rowHeight:h,rowRenderer:function(t){var n=t.index,a=t.key,c=t.style,l=f[n];return r.a.createElement(B.a,{item:!0,xs:12,style:Object(T.a)({},c),key:a},r.a.createElement(ae,{handleUpdateExample:e.handleUpdateExample,extraStyle:{style:c},orderIndex:1,key:l.id,example:l,anno_source:e.anno_source,schema:e.schema,maxHeight:p}))},width:i,rowCount:f.length}))))},ie=function(e){var t=P(),n=r.a.useState(t.allDocs()),a=Object(d.a)(n,2),c=a[0],l=a[1],o=r.a.useState(null),u=Object(d.a)(o,2),i=u[0],s=u[1],m=r.a.useState(!1),f=Object(d.a)(m,2),p=f[0],h=f[1];r.a.useEffect(function(){return E(i)},[t.step]);var E=function(e){!e||e.length<1?t.allDocs().then(function(e){l(e)}):(h(!0),t.search(e).then(function(e){l(e),h(!1)})),s(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,{onChange:E}),p?r.a.createElement(b.a,null):null,r.a.createElement(ue,{examples:c,handleUpdateExample:function(){E(i)}}))},se=n(294),me=function(e){var t=r.a.useState(!1),n=Object(d.a)(t,2),a=n[0],c=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{title:"Add Data"},r.a.createElement(z.a,{onClick:function(){return c(!0)}},r.a.createElement(Z.a,null))),r.a.createElement(G.a,{open:a,onClose:function(){return c(!1)}},r.a.createElement(M.a,null,"Add some data"),r.a.createElement(Q.a,null,r.a.createElement(y,null))))},fe=n(295),de=n(296),pe=function(e){var t=r.a.useState(!1),n=Object(d.a)(t,2),a=n[0],c=n[1],l=r.a.useState(!1),o=Object(d.a)(l,2),u=o[0],i=o[1],s=function(){var e=Object(f.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,j();case 3:c(!1),i(!1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{style:{position:"absolute",top:10,left:10},onClick:function(){return c(!0)}},r.a.createElement(de.a,null)),r.a.createElement(G.a,{open:a,onClose:function(){return c(!1)}},r.a.createElement(M.a,null,"Erase all the data"),r.a.createElement(V.a,null,u?r.a.createElement(b.a,null):r.a.createElement(x.a,{onClick:s,variant:"contained",color:"danger"},"Yes Erase It"))))};var he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(X,null,r.a.createElement(N,null,r.a.createElement(o.a,null),r.a.createElement(i.a,null,"Ylabel"),r.a.createElement(me,null),r.a.createElement(ie,null),r.a.createElement(pe,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,1,2]]]);
//# sourceMappingURL=main.1a08c040.chunk.js.map