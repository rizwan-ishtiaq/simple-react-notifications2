(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(5),c=n.n(o),i=(n(21),n(22),n(1)),r=n(2),s=n(3),m=n(4),u=n(6),p=(n(23),function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2?arguments[2]:void 0,l="";t.animation||delete t.animation,t.in||delete t.in,t.out||delete t.out;var o=Object.keys(t).length,c=0;for(var i in t){var r=c++<o-1?",":"",s=t[i],m="  ".repeat(n),u="string"!==typeof s||a?s:'"'.concat(s,'"');u="object"===typeof u?"{\n".concat(e(u,n+1)).concat(m,"}"):u,l+="".concat(m).concat(i,": ").concat(u).concat(r,"\n")}return l}),h=function(){return l.a.createElement("a",{target:"_blank",href:"https://github.com/alexpermyakov/simple-react-notifications",rel:"noopener noreferrer",className:"github-corner","aria-label":"Open GitHub project",style:{position:"absolute",top:"0px",fill:"white",right:"0px"}},l.a.createElement("svg",{width:"125",height:"125",viewBox:"0 0 250 250"},l.a.createElement("path",{d:"M0 0l115 115h15l12 27 108 108V0z",fill:"#f36666"}),l.a.createElement("path",{d:"M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16",style:{transformOrigin:"130px 106px"}}),l.a.createElement("path",{d:"M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"})))};function v(){var e=Object(s.a)(["\n  font-size: 18px;\n  margin-bottom: 12px;\n"]);return v=function(){return e},e}function E(){var e=Object(s.a)(['\n  max-width: 960px;\n  margin: 0 auto;\n  input[type="checkbox"] {\n    height: 20px;\n    width: 20px;\n  }\n  .item {\n    margin-bottom: 8px;\n    span {\n      line-height: 36px;\n      height: 36px;\n      display: inline-block;\n      width: 150px;\n    }\n  }\n  .input {\n    width: 150px;\n  }\n  .select select {\n    width: 150px;\n  }\n  .textarea {\n    height: 250px;\n    cursor: default !important;\n  }\n']);return E=function(){return e},e}function d(){var e=Object(s.a)(["\n  background-color: #f6f8fa;\n  border-radius: 3px;\n  font-size: 85%;\n  line-height: 1.45;\n  overflow: auto;\n  padding: 16px;\n"]);return d=function(){return e},e}function b(){var e=Object(s.a)(["\n  background: #2f2f2f;\n  height: 250px;\n  .title,\n  .subtitle {\n    color: white;\n    text-align: center;\n    margin-bottom: 32px;\n  }\n  .title {\n    margin-top: 48px;\n  }\n"]);return b=function(){return e},e}var f=m.a.div.attrs({className:"section"})(b()),g=m.a.pre(d()),x=m.a.section.attrs({className:"columns"})(E()),y=m.a.h3(v()),O="The number of meetings you have next week:  ",N=function(e){var t=e.header,n=e.onClosePanel;return l.a.createElement("div",{className:"route-info",onClick:n,style:{height:"250px",background:"white",color:"black",padding:"8px 16px",position:"relative",boxShadow:"0 1px 10px 0 rgba(0, 0, 0, 0.1)"}},l.a.createElement("h3",{className:"subtitle"},t),l.a.createElement("p",null,"Bicycle 2.4 km, 8 min."),l.a.createElement("p",null,"Use caution - may involve errors or sections not suited for bicycling"))},k={in:"fadeIn",out:"fadeOut",duration:400},C=function(){var e=Object(a.useState)("success"),t=Object(r.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({autoClose:3e3,width:275,position:"top-right",delay:0,closeOnClick:!1,pauseOnHover:!1,onlyLast:!1,newestOnTop:!0,animation:k}),s=Object(r.a)(c,2),m=s[0],v=s[1],E=Object(a.useState)(m.animation),d=Object(r.a)(E,2),b=d[0],C=d[1];Object(a.useEffect)(function(){return u.a.configure(m)},[m]);var w=m.position,j=m.autoClose,H=m.onlyLast,z=m.delay,S=m.animation,T=m.newestOnTop,I=m.pauseOnHover,P=m.closeOnClick,L=m.width;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null,l.a.createElement("h1",{className:"title"},"Simple React Notifications"),l.a.createElement("h2",{className:"subtitle"},"Tiny React.js notification library (1kb gzip)."),l.a.createElement(h,null)),l.a.createElement(x,null,l.a.createElement("div",{className:"column"},l.a.createElement("div",null,l.a.createElement("button",{className:"button is-primary",onClick:function(){"custom"===n?Object(u.a)({render:function(e){var t=e.id,n=e.onClose;return l.a.createElement(N,{key:t,onClosePanel:n,header:"The shortest way to ride home."})}}):u.a[n](O+(new Date).getSeconds())}},"Click to show!"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y,null,"Options"),l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"position"),l.a.createElement("div",{className:"select"},l.a.createElement("select",{onChange:function(e){var t=e.target;v(Object(i.a)({},m,{position:t.value}))},value:w},l.a.createElement("option",{value:"top-left"},"top-left"),l.a.createElement("option",{value:"top-center"},"top-center"),l.a.createElement("option",{value:"top-right"},"top-right"),l.a.createElement("option",{value:"bottom-left"},"bottom-left"),l.a.createElement("option",{value:"bottom-center"},"bottom-center"),l.a.createElement("option",{value:"bottom-right"},"bottom-right")))),l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"type"),l.a.createElement("div",{className:"select"},l.a.createElement("select",{onChange:function(e){var t=e.target;return o(t.value)},value:n},l.a.createElement("option",{value:"success"},"success"),l.a.createElement("option",{value:"error"},"error"),l.a.createElement("option",{value:"info"},"info"),l.a.createElement("option",{value:"custom"},"custom")))),"custom"===n&&l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"Demo component"),l.a.createElement("textarea",{className:"textarea",disabled:!0},'const RouteInfo = ({(header, onClosePanel)}) => (\n  <div className="route-info" onClick={onClosePanel}>\n    <h3>{header}</h3>\n    <p>\n      Bicycle 2.4 km, 8 min.\n    </p>\n    <p>\n      Use caution - may involve errors or\n      sections not suited for bicycling\n    </p>\n  </div>\n  );')),l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"autoClose"),l.a.createElement("input",{className:"input",type:"number",value:j,onChange:function(e){var t=e.target;v(Object(i.a)({},m,{autoClose:!!t.value&&+t.value}))}})),l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"width"),l.a.createElement("input",{className:"input",type:"number",value:L,onChange:function(e){var t=e.target;v(Object(i.a)({},m,{width:+t.value}))}})),l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"delay"),l.a.createElement("input",{className:"input",type:"number",value:z,onChange:function(e){var t=e.target;v(Object(i.a)({},m,{delay:+t.value}))}})),l.a.createElement("div",{className:"item"},l.a.createElement("label",{className:"checkbox"},l.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"pauseOnHover"),l.a.createElement("input",{type:"checkbox",checked:I,value:z,onChange:function(){v(Object(i.a)({},m,{pauseOnHover:!I}))}}))),l.a.createElement("div",{className:"item"},l.a.createElement("label",{className:"checkbox"},l.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"closeOnClick"),l.a.createElement("input",{type:"checkbox",checked:P,value:z,onChange:function(){v(Object(i.a)({},m,{closeOnClick:!P}))}}))),l.a.createElement("div",{className:"item"},l.a.createElement("label",{className:"checkbox"},l.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"onlyLast"),l.a.createElement("input",{type:"checkbox",checked:H,value:z,onChange:function(){v(Object(i.a)({},m,{onlyLast:!H}))}}))),l.a.createElement("div",{className:"item"},l.a.createElement("label",{className:"checkbox"},l.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"newestOnTop"),l.a.createElement("input",{type:"checkbox",checked:T,value:z,onChange:function(){v(Object(i.a)({},m,{newestOnTop:!T}))}}))),l.a.createElement("div",{className:"item"},l.a.createElement("span",{style:{height:"20px",lineHeight:"20px"}},"animation"),l.a.createElement("input",{type:"checkbox",checked:b,value:b,onChange:function(){C(!b),v(Object(i.a)({},m,{animation:!S&&k}))}})),b&&l.a.createElement("div",{className:"item"},l.a.createElement("label",{className:"checkbox"},l.a.createElement("span",null,"duration"),l.a.createElement("input",{className:"input",type:"number",value:(S||k).duration,onChange:function(e){var t=e.target;v(Object(i.a)({},m,{animation:{in:(S||k).in,out:(S||k).out,duration:+t.value}}))}}))),b&&l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"in"),l.a.createElement("div",{className:"select"},l.a.createElement("select",{onChange:function(e){var t=e.target;v(Object(i.a)({},m,{animation:Object(i.a)({},S,{in:t.value||!1})}))},value:(S||k).in},l.a.createElement("option",{value:""},"None"),l.a.createElement("option",{value:"fadeIn"},"fadeIn"),l.a.createElement("option",{value:"zoomIn"},"zoomIn")))),b&&l.a.createElement("div",{className:"item"},l.a.createElement("span",null,"out"),l.a.createElement("div",{className:"select"},l.a.createElement("select",{onChange:function(e){var t=e.target;v(Object(i.a)({},m,{animation:Object(i.a)({},S,{out:t.value||!1})}))},value:(S||k).out},l.a.createElement("option",{value:""},"None"),l.a.createElement("option",{value:"fadeOut"},"fadeOut"),l.a.createElement("option",{value:"zoomOut"},"zoomOut")))))),l.a.createElement("div",{className:"column"},l.a.createElement(y,null,l.a.createElement("b",null,"Configuration")," (optional, common for all notifications)"),l.a.createElement(g,null,function(e){return"notifier.configure({\n"+p(e)+"});"}(m)),l.a.createElement("br",null),l.a.createElement(y,null,l.a.createElement("b",null,"Show notification")," (you can override configuration here)"),"custom"!==n&&l.a.createElement(g,null,function(e){return'notifier.success("'.concat(O,'", {\n').concat(p(e),"});")}({position:w,autoClose:j})),"custom"===n&&l.a.createElement(g,null,function(e){return e.render='({ id, onClose }) => (\n    <RouteInfo\n      key={id}\n      onClosePanel={onClose}\n      header={"The shortest way to ride home."}\n    />\n  )',"notifier({\n".concat(p(e,1,!0),"})")}({position:w,autoClose:j})))))};c.a.render(l.a.createElement(C,null),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4cf45518.chunk.js.map