(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s}),a.d(t,"pageQuery",function(){return i});var n=a(0),r=a.n(n),o=a(145),l=a(150);function s(e){var t=e.data,a=t.page,n=t.propsPage,s=t.statePage,i=t.methodsPage,c=a.frontmatter,u=a.html,d=n.html,p=s.html,m=i.html;return r.a.createElement("div",{className:"container px2 sm-px3"},r.a.createElement(o.a,{title:c.title}),r.a.createElement("article",{dangerouslySetInnerHTML:{__html:u}}),c.innerProps&&r.a.createElement("details",null,r.a.createElement("summary",null,"innerProps"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}})),c.innerState&&r.a.createElement("details",null,r.a.createElement("summary",null,"innerState"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}})),c.innerMethods&&r.a.createElement("details",null,r.a.createElement("summary",null,"innerMethods"),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}})),r.a.createElement("br",null),c.demo&&r.a.createElement("iframe",{title:c.title,src:c.demo+"?autoresize=1&fontsize=13&hidenavigation=1",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),r.a.createElement(l.a,null))}var i="1574754134"},139:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=m,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(147)),o=n(a(148)),l=n(a(7)),s=n(a(52)),i=n(a(53)),c=n(a(4)),u=n(a(0)),d=a(22),p=a(143);function m(e){return function(e){return e.replace(/\/+/g,"/")}("/react-dropdown-select/"+e)}var f={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this)||this,(0,i.default)((0,s.default)((0,s.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,l=void 0===n?this.defaultGetProps:n,s=t.onClick,i=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),f=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=m(a);return u.default.createElement(d.Link,(0,o.default)({to:v,state:c,getProps:l,innerRef:this.handleRef,onMouseEnter:function(e){i&&i(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:f})),!0}},h))},t}(u.default.Component);h.propTypes=(0,o.default)({},f,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(m(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(m(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(m(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),s=a(139),i=a.n(s);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(144),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},144:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(146),l=a(143);t.a=function(e){var t=e.page,a=e.title;return"home"===t?r.a.createElement("div",{className:"p3",style:{color:"#fff",backgroundColor:"#111111"}},r.a.createElement("h3",{className:"m0"},"v",o.a),r.a.createElement("span",{className:"block color-inherit",style:{fontSize:"5vw",lineHeight:"1"}},"React dropdown select")):r.a.createElement("div",{className:"mb3"},r.a.createElement("header",{className:"py2 mt3 border-bottom"},r.a.createElement("div",{className:"sm-flex flex-center flex-wrap"},r.a.createElement("div",{className:"flex-auto"},r.a.createElement("div",{className:"mxn1"},r.a.createElement("a",{href:"/",title:"Basscss",className:"btn compact btn-link btn-small p1"},"react-dropdown-select"),r.a.createElement("span",null,"v",o.a)),r.a.createElement("h1",{className:"m0",style:{fontSize:"3rem"}},a)))),r.a.createElement("div",{className:"h5 mxn1"},r.a.createElement(l.Link,{to:"/",title:"Home",className:"btn compact btn-link p1 regular"},"Home"),r.a.createElement("span",{className:""},r.a.createElement("span",{className:"muted"},"/"),r.a.createElement("span",{className:"muted m1"},a))))}},146:function(e){e.exports={a:"1.2.4"}},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},148:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},149:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),s=a(57),i=a(2),c=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(143);t.a=function(){return r.a.createElement("footer",{className:"py3 border-top"},r.a.createElement("div",{className:"left"},r.a.createElement(o.Link,{className:"m1",to:"/"},"Home"),r.a.createElement(o.Link,{className:"m1",to:"props"},"Props types")),r.a.createElement("div",{className:"right"},r.a.createElement("p",{className:"btn compact btn-link p1"},"©",(new Date).getFullYear()," All rights reserved")))}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-8af3affe262753287bb2.js.map