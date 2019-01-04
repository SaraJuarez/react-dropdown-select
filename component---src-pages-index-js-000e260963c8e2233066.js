(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{138:function(e,t,n){"use strict";n.r(t);var r=n(140),a=n.n(r),o=(n(74),n(150),n(73),n(51),n(7)),l=n.n(o),s=n(0),c=n.n(s),i=n(142),d=n(144),p=n(146),u=n(4),m=n.n(u),h=n(141),f=n(158),v=n.n(f);function b(){var e=a()(["\n  padding: 0 5px;\n  border-radius: 2px;\n  line-height: 21px;\n  margin: 3px 0 3px 5px;\n  background: deepskyblue;\n  color: #fff;\n  display: inline-block;\n\n  .react-dropdown-select-option-remove {\n    cursor: pointer;\n    width: 22px;\n    height: 22px;\n    display: inline-block;\n    text-align: center;\n    margin: 0 -5px 0 0px;\n    border-radius: 0 3px 3px 0;\n\n    :hover {\n      color: tomato;\n    }\n  }\n\n  :hover,\n  :hover > span {\n    background: #00a7e6;\n  }\n"]);return b=function(){return e},e}var g=function(e){var t=e.parentItem,n=e.parentProps,r=e.parentState,a=e.parentMethods;return t&&n.optionRenderer?n.optionRenderer(t,n,r,a):c.a.createElement(w,{role:"listitem",disabled:n.disabled,className:"react-dropdown-select-option"},c.a.createElement("span",{className:"react-dropdown-select-option-label"},t.label),c.a.createElement("span",{className:"react-dropdown-select-option-remove",onClick:function(e){return a.removeItem(e,t,!0)}},"×"))};g.propTypes={};var w=h.a.span(b()),E=g;function y(){var e=a()(["\n  width: auto;\n  border: none;\n  margin-left: 5px;\n  background: transparent;\n  font-size: smaller;\n  :focus {\n    outline: none;\n  }\n"]);return y=function(){return e},e}var x=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods,a=n.values&&n.values.length>0&&t.addPlaceholder||t.placeholder;return t.inputRenderer?t.inputRenderer(t,n,r):c.a.createElement(S,{tabIndex:"-1",className:"react-dropdown-select-input",size:r.getInputSize(),value:n.search,onClick:function(){return r.dropDown("open")},onChange:r.setSearch,placeholder:a})};x.propTypes={};var S=h.a.input(y()),R=x;function k(){var e=a()(["\n  flex: 1;\n"]);return k=function(){return e},e}var C=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods;return c.a.createElement(D,{className:"react-dropdown-select-content "+(t.multi?"react-dropdown-select-type-multi":"react-dropdown-select-type-single"),onClick:function(){return r.dropDown("open")}},t.contentRenderer?t.contentRenderer(t,n,r):c.a.createElement(c.a.Fragment,null,t.multi?n.values&&n.values.map(function(e){return c.a.createElement(E,{key:""+e.value+e.label,parentItem:e,parentState:n,parentProps:t,parentMethods:r})}):n.values&&n.values.length>0&&c.a.createElement("span",null,n.values[0].label),c.a.createElement(R,{parentProps:t,parentMethods:r,parentState:n})))},D=h.a.div(k());C.propTypes={};var N=C;function P(){var e=a()(["\n  padding: 10px;\n  text-align: center;\n  color: deepskyblue;\n"]);return P=function(){return e},e}var I=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods;return t.noDataRenderer?t.noDataRenderer(t,n,r):c.a.createElement(B,null,t.noDataLabel)};I.propTypes={};var B=h.a.div(P()),A=I;function O(){var e=a()(["\n  padding: 10px;\n  cursor: pointer;\n  border-bottom: 1px solid #fff;\n\n  :hover,\n  :focus {\n    background: #f2f2f2;\n    outline: none;\n  }\n\n  &.react-dropdown-select-item-selected {\n    background: deepskyblue;\n    color: #fff;\n    border-bottom: 1px solid #fff;\n  }\n\n  input {\n    &[type='checkbox'] {\n      vertical-align: baseline;\n      margin: 0 10px 0 0;\n    }\n  }\n"]);return O=function(){return e},e}var M=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods,a=e.item,o=e.itemIndex;return t.itemRenderer?t.itemRenderer(a,o,t,n,r):c.a.createElement(T,{role:"option","aria-selected":r.isSelected(a),"aria-label":a.label,key:""+a.value+a.label,tabIndex:"-1",className:"react-dropdown-select-item "+(r.isSelected(a)?"react-dropdown-select-item-selected":""),onClick:function(){return r.addItem(a)},onKeyPress:function(){return r.addItem(a)}},a.label)};M.propTypes={};var T=h.a.span(O()),z=M;function L(){var e=a()(["\n  position: fixed;\n  top: ","px;\n  left: ","px;\n  border: 1px solid #ccc;\n  width: ","px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 10px 0 #0000003b;\n  max-height: 300px;\n  overflow: auto;\n  \n  :focus {\n    outline: none;\n  }\n}\n"]);return L=function(){return e},e}var q=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods;return c.a.createElement(H,{tabIndex:"-1","aria-expanded":"true",role:"list",selectBounds:n.selectBounds,dropdownGap:t.dropdownGap,className:"react-dropdown-select-dropdown"},t.dropdownRenderer?t.dropdownRenderer(t,n,r):c.a.createElement(c.a.Fragment,null,0===r.searchResults().length?c.a.createElement(A,{className:"react-dropdown-select-no-data",parentState:n,parentProps:t,parentMethods:r}):r.searchResults().map(function(e,a){return c.a.createElement(z,{key:e.value,item:e,index:a,parentState:n,parentProps:t,parentMethods:r})})))};q.propTypes={};var H=h.a.div(L(),function(e){var t=e.selectBounds,n=e.dropdownGap;return t.bottom+n},function(e){return e.selectBounds.left},function(e){return e.selectBounds.width}),G=q;function j(){var e=a()(["\n  @keyframes dual-ring-spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(180deg);\n    }\n  }\n\n  padding: 0 5px;\n  display: block;\n  width: auto;\n  height: auto;\n\n  :after {\n    content: ' ';\n    display: block;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border-width: 1px;\n    border-style: solid;\n    border-color: deepskyblue transparent;\n    animation: dual-ring-spin 0.7s ease-in-out infinite;\n    margin: 0 0 0 -10px;\n  }\n"]);return j=function(){return e},e}var F=function(e){var t=e.parentProps;return t.loadingRenderer?t.loadingRenderer():c.a.createElement(U,{className:"react-dropdown-select-loading"})};F.propTypes={};var U=h.a.div(j()),V=F;function J(){var e=a()(["\n  line-height: 25px;\n  margin: 0 10px;\n  cursor: pointer;\n  \n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    color: tomato;\n  }\n"]);return J=function(){return e},e}var K=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods;return t.clearRenderer?t.clearRenderer(t,n,r):c.a.createElement(Q,{tabIndex:"-1",onClick:function(){return r.clearAll()},onKeyPress:function(){return r.clearAll()}},"×")};K.propTypes={};var Q=h.a.div(J()),W=K;function Y(){var e=a()(["\n  border-left: 1px solid #ccc;\n  width: 1px;\n  height: 25px;\n  display: block;\n"]);return Y=function(){return e},e}var X=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods;return t.separatorRenderer?t.separatorRenderer(t,n,r):c.a.createElement(Z,{className:"react-dropdown-select-separator"})};X.propTypes={};var Z=h.a.div(Y()),$=X;function _(){var e=a()(["\n  width: 20px;\n  text-align: center;\n  line-height: 25px;\n  transform: rotate(-90deg);\n  cursor: pointer;\n  font-size: 26px;\n  :focus {\n    outline: none;\n    color: deepskyblue;\n  }\n"]);return _=function(){return e},e}var ee=function(e){var t=e.parentProps,n=e.parentState,r=e.parentMethods;return t.dropdownHandleRenderer?t.dropdownHandleRenderer(t,n,r):c.a.createElement(te,{tabIndex:"-1",onClick:function(){return r.dropDown()},onKeyPress:function(){return r.dropDown()},onKeyDown:function(){return r.dropDown()},className:"react-dropdown-select-dropdown-handle"},n.dropdown?c.a.createElement(c.a.Fragment,null,"›"):c.a.createElement(c.a.Fragment,null,"‹"))};ee.propTypes={};var te=h.a.div(_()),ne=ee;function re(){var e=a()(["\n  display: flex;\n  border: 1px solid #ccc;\n  width: 100%;\n  border-radius: 2px;\n  padding: 2px 5px;\n  flex-direction: row;\n  align-items: center;\n  min-height: 36px;\n  ","\n\n  :focus-within {\n    border-color: deepskyblue;\n  }\n  background: linear-gradient(#eee, #fff, #eee);\n"]);return re=function(){return e},e}var ae=function(e,t){var n;return void 0===t&&(t=0),function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];n&&clearTimeout(n),n=setTimeout(function(){e.apply(void 0,a),n=null},t)}},oe=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(){n.props.closeOnScroll&&n.dropDown("close"),n.updateSelectBounds()},n.updateSelectBounds=function(){return n.select.current&&n.setState({selectBounds:n.select.current.getBoundingClientRect()})},n.getSelectBounds=function(){return n.state.selectBounds},n.dropDown=function(e){return void 0===e&&(e="toggle"),n.props.keepOpen?n.setState({dropdown:!0}):"close"===e?n.setState({dropdown:!1,search:""}):"open"===e?n.setState({dropdown:!0}):"toggle"===e&&n.setState({dropdown:!n.state.dropdown})},n.getSelectRef=function(){return n.select.current},n.addItem=function(e){if(n.props.multi){if(-1!==n.state.values.indexOf(e))return n.removeItem(null,e,!1);n.setState({values:[].concat(n.state.values,[e])})}else n.setState({values:[e],dropdown:!1,search:""});return!0},n.removeItem=function(e,t,r){void 0===r&&(r=!1),e&&r&&(e.preventDefault(),e.stopPropagation(),n.dropDown("close")),n.setState({values:n.state.values.filter(function(e){return e.value!==t.value})})},n.setSearch=function(e){return n.setState({search:e.target.value})},n.getInputSize=function(){return n.state.search?n.state.search.length:n.state.values.length>0?n.props.addPlaceholder.length:n.props.placeholder.length},n.toggleSelectAll=function(){return n.setState({values:0===n.state.values.length?n.selectAll():n.clearAll()})},n.clearAll=function(){n.props.onClearAll(),n.setState({values:[]})},n.selectAll=function(){return n.props.onSelectAll(),n.setState({values:n.props.options})},n.isSelected=function(e){return-1!==n.state.values.indexOf(e)},n.searchResults=function(){var e=new RegExp(n.state.search,"i");return n.props.options.filter(function(t){return e.test(t[n.props.searchBy]||t.label)})},n.state={dropdown:!1,values:[],search:"",selectBounds:{}},n.methods={removeItem:n.removeItem,dropDown:n.dropDown,addItem:n.addItem,setSearch:n.setSearch,getInputSize:n.getInputSize,toggleSelectAll:n.toggleSelectAll,clearAll:n.clearAll,selectAll:n.selectAll,searchResults:n.searchResults,getSelectRef:n.getSelectRef,isSelected:n.isSelected,getSelectBounds:n.getSelectBounds},n.select=c.a.createRef(),n}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",ae(this.updateSelectBounds)),window.addEventListener("scroll",ae(this.onScroll)),this.props.onChange(this.state.values),this.dropDown("close"),this.select&&this.updateSelectBounds()},n.componentDidUpdate=function(e,t){t.values===this.state.values&&e.multi===this.props.multi||(this.props.onChange(this.state.values),this.updateSelectBounds()),t.dropdown&&(t.dropdown,this.state.dropdown),this.props.debounceDelay&&this.props.onDropdownClose(),!t.dropdown&&(t.dropdown,this.state.dropdown),this.props.debounceDelay&&this.props.onDropdownOpen()},n.componentWillUnmount=function(){window.removeEventListener("resize",ae(this.updateSelectBounds,this.props.debounceDelay)),window.removeEventListener("scroll",ae(this.onScroll,this.props.debounceDelay))},n.render=function(){var e=this;return c.a.createElement(v.a,{onClickOut:function(){return e.dropDown("close")}},c.a.createElement(le,{style:this.props.style,ref:this.select,disabled:this.props.disabled,className:this.props.className},c.a.createElement(N,{parentProps:this.props,parentState:this.state,parentMethods:this.methods}),this.props.loading&&c.a.createElement(V,{parentProps:this.props}),this.props.clearable&&c.a.createElement(W,{parentProps:this.props,parentState:this.state,parentMethods:this.methods}),this.props.separator&&c.a.createElement($,{parentProps:this.props,parentState:this.state,parentMethods:this.methods}),this.props.dropdownHandle&&c.a.createElement(ne,{parentProps:this.props,parentState:this.state,parentMethods:this.methods}),this.state.dropdown&&c.a.createElement(G,{parentProps:this.props,parentState:this.state,parentMethods:this.methods})))},t}(c.a.Component);oe.propTypes={onChange:m.a.func.isRequired,onDropdownClose:m.a.func,onDropdownOpen:m.a.func,onClearAll:m.a.func,onSelectAll:m.a.func,values:m.a.array,options:m.a.array.isRequired,keepOpen:m.a.bool,dropdownGap:m.a.number,multi:m.a.bool,placeholder:m.a.string,addPlaceholder:m.a.string,disabled:m.a.bool,className:m.a.string,loading:m.a.bool,clearable:m.a.bool,separator:m.a.bool,dropdownHandle:m.a.bool,searchBy:m.a.string,closeOnScroll:m.a.bool,style:m.a.object,contentRenderer:m.a.func,dropdownRenderer:m.a.func,itemRenderer:m.a.func,noDataRenderer:m.a.func,optionRenderer:m.a.func,inputRenderer:m.a.func,loadingRenderer:m.a.func,clearRenderer:m.a.func,separatorRenderer:m.a.func,dropdownHandleRenderer:m.a.func},oe.defaultProps={addPlaceholder:"+",placeholder:"Select...",values:[],multi:!1,disabled:!1,searchBy:"label",clearable:!0,dropdownHandle:!0,separator:!0,keepOpen:void 0,noDataLabel:"No data",dropdownGap:5,closeOnScroll:!1,debounceDelay:0,onDropdownOpen:function(){},onDropdownClose:function(){},onClearAll:function(){},onSelectAll:function(){}};var le=h.a.div(re(),function(e){return e.disabled?"cursor: not-allowed;pointer-events: none;opacity: 0.3;":"pointer-events: all;"}),se=oe,ce=n(160);n(159);function ie(){var e=a()(["\n  width: 400px;\n  margin: 20px auto;\n"]);return ie=function(){return e},e}n.d(t,"Home",function(){return de});var de=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={multi:!0,disabled:!1,loading:!1,contentRenderer:!1,dropdownRenderer:!1,inputRenderer:!1,itemRenderer:!1,optionRenderer:!1,noDataRenderer:!1,selectValues:[],searchBy:"label",clearable:!0,separator:!0,forceOpen:!1,handle:!0,options:[]},t.setValues=function(e){return t.setState({selectValues:e})},t.setOptions=function(e){return t.setState({options:e})},t.contentRenderer=function(e,t){return c.a.createElement("div",null,t.values.length," of ",e.options.length," Selected")},t.noDataRenderer=function(){return c.a.createElement("p",{style:{textAlign:"center"}},c.a.createElement("strong",null,"Ooops!")," No data found")},t.itemRenderer=function(e,t,n,r,a){return c.a.createElement("div",{key:e.value},c.a.createElement("div",{style:{margin:"10px"}},c.a.createElement("input",{onChange:function(){return a.addItem(e)},type:"checkbox",checked:a.isSelected(e)}),c.a.createElement("span",{onClick:function(){return a.addItem(e)}},"   ",e.label)))},t.dropdownRenderer=function(e,t,n){var r=new RegExp(t.search,"i");return c.a.createElement("div",null,c.a.createElement("input",{type:"text",size:n.getInputSize(),value:t.search,onChange:n.setSearch,placeholder:"Type anything"}),c.a.createElement("button",{onClick:n.selectAll},"Select all"),c.a.createElement("button",{onClick:n.clearAll},"Clear all"),e.options.filter(function(t){return r.test(t[e.searchBy]||t.label)}).map(function(e){return c.a.createElement("div",{key:e.value,onClick:function(){return n.addItem(e)}},c.a.createElement("input",{type:"checkbox",onChange:function(){return n.addItem(e)},checked:-1!==t.values.indexOf(e)}),e.label)}))},t.optionRenderer=function(e,t,n,r){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(t){return r.removeItem(t,e,!0)}},e.label))},t.inputRenderer=function(e,t,n){return c.a.createElement("input",{tabIndex:"1",className:"react-dropdown-select-input",size:n.getInputSize(),value:t.search,onClick:function(){return n.dropDown("open")},onChange:n.setSearch,placeholder:"Type in"})},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setOptions(t.map(function(e){return{label:e.username,value:e.email}}))})},n.render=function(){var e=this;return c.a.createElement("div",{className:"container px2 sm-px3"},c.a.createElement(d.a,{page:"home"}),c.a.createElement("article",{className:"markdown-body px0"},c.a.createElement("h1",{id:"what-it-is-all-about"},"Customisable dropdown select for react"),c.a.createElement("p",null,"Customisable dropdown select for react with custom render callback props to override inner components"),c.a.createElement("h3",null,"Install via ",c.a.createElement("strong",null,"npm"),":"),c.a.createElement("pre",null,"npm install --save react-dropdown-select"),c.a.createElement("h3",null,"Use:"),c.a.createElement("pre",null,"\n<Select\n  multi={true}\n  options={options}\n  onChange={(values) => this.onChange(values)}\n/>"),c.a.createElement("p",{className:"center"},c.a.createElement(i.Link,{to:"props",className:"m1 btn btn-outline center"},"Prop types")),c.a.createElement(pe,null,c.a.createElement(se,{placeholder:"Select user",addPlaceholder:"+ click to add",disabled:this.state.disabled,loading:!this.state.options.length||this.state.loading,searchBy:this.state.searchBy,separator:this.state.separator,clearable:this.state.clearable,keepOpen:this.state.forceOpen,dropdownHandle:this.state.handle,multi:this.state.multi,values:[],options:this.state.options,dropdownGap:5,onDropdownOpen:function(){},onDropdownClose:function(){},onClearAll:function(){},onSelectAll:function(){},onChange:function(t){return e.setValues(t)},noDataLabel:"No matches found",noDataRenderer:this.state.noDataRenderer?function(){return e.noDataRenderer()}:void 0,itemRenderer:this.state.itemRenderer?function(t,n,r,a,o){return e.itemRenderer(t,n,r,a,o)}:void 0,inputRenderer:this.state.inputRenderer?function(t,n,r){return e.inputRenderer(t,n,r)}:void 0,optionRenderer:this.state.optionRenderer?function(t,n,r,a){return e.optionRenderer(t,n,r,a)}:void 0,contentRenderer:this.state.contentRenderer?function(t,n){return e.contentRenderer(t,n)}:void 0,dropdownRenderer:this.state.dropdownRenderer?function(t,n,r){return e.dropdownRenderer(t,n,r)}:void 0})),c.a.createElement("p",null,c.a.createElement("input",{type:"checkbox",checked:this.state.multi,onChange:function(){return e.setState({multi:!e.state.multi})}})," ","Multi",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.disabled,onChange:function(){return e.setState({disabled:!e.state.disabled})}})," ","Disabled",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.loading,onChange:function(){return e.setState({loading:!e.state.loading})}})," ","Loading",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.clearable,onChange:function(){return e.setState({clearable:!e.state.clearable})}})," ","Clearable",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.separator,onChange:function(){return e.setState({separator:!e.state.separator})}})," ","Separator",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.handle,onChange:function(){return e.setState({handle:!e.state.handle})}})," ","Dropdown handle",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.forceOpen,onChange:function(){return e.setState({forceOpen:!e.state.forceOpen})}})," ","Stay open",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.contentRenderer,onChange:function(){return e.setState({contentRenderer:!e.state.contentRenderer})}})," ","Custom content renderer",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.dropdownRenderer,onChange:function(){return e.setState({dropdownRenderer:!e.state.dropdownRenderer})}})," ","Custom dropdown renderer",c.a.createElement("br",null),c.a.createElement("input",{type:"checkbox",checked:this.state.itemRenderer,onChange:function(){return e.setState({itemRenderer:!e.state.itemRenderer})}})," ","Custom dropdown item renderer",c.a.createElement("br",null),"Search by field:"," ",c.a.createElement("select",{selected:this.state.searchBy,onChange:function(t){return e.setState({searchBy:t})}},c.a.createElement("option",{value:"label"},"label"),c.a.createElement("option",{value:"customProperty"},"customProperty"))),c.a.createElement("p",null,"Current value(s):"),c.a.createElement("pre",null,JSON.stringify(this.state.selectValues,!1,2)),c.a.createElement("p",null,"Options ",c.a.createElement("small",null,"(loaded from: https://jsonplaceholder.typicode.com/users)"),":"),c.a.createElement("pre",null,JSON.stringify(this.state.options,!1,2))),c.a.createElement(p.a,null))},t}(c.a.Component),pe=(t.default=de,ce.a.div(ie()))},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),o=n(4),l=n.n(o),s=n(139),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var i=n(143),d=n.n(i);n.d(t,"PageRenderer",function(){return d.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var u=a.a.createContext({}),m=function(e){return a.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},143:function(e,t,n){var r;e.exports=(r=n(149))&&r.default||r},144:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(145);t.a=function(e){var t=e.page,n=e.title;return"home"===t?a.a.createElement("div",{className:"p3",style:{color:"#fff",backgroundColor:"#111111"}},a.a.createElement("h3",{className:"m0"},"v",o.a),a.a.createElement("span",{className:"block color-inherit",style:{fontSize:"5vw",lineHeight:"1"}},"React dropdown select")):a.a.createElement("div",{className:"mb3"},a.a.createElement("header",{className:"py2 mt3 border-bottom"},a.a.createElement("div",{className:"sm-flex flex-center flex-wrap"},a.a.createElement("div",{className:"flex-auto"},a.a.createElement("div",{className:"mxn1"},a.a.createElement("a",{href:"/",title:"Basscss",className:"btn compact btn-link btn-small p1"},"react-dropdown-select"),a.a.createElement("span",null,"v",o.a)),a.a.createElement("h1",{className:"m0",style:{fontSize:"3rem"}},n)))),a.a.createElement("div",{className:"h5 mxn1"},a.a.createElement("a",{href:"/",title:"Home",className:"btn compact btn-link p1 regular"},"Home"),a.a.createElement("span",{className:""},a.a.createElement("span",{className:"muted"},"/"),a.a.createElement("span",{className:"muted m1"},n))))}},145:function(e){e.exports={a:"1.2.0"}},146:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(142);t.a=function(){return a.a.createElement("footer",{className:"py3 border-top"},a.a.createElement("div",{className:"left"},a.a.createElement(o.Link,{className:"m1",to:"/"},"Home"),a.a.createElement(o.Link,{className:"m1",to:"props"},"Props types")),a.a.createElement("div",{className:"right"},a.a.createElement("p",{className:"btn compact btn-link p1"},"©",(new Date).getFullYear()," All rights reserved")))}},149:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),o=n(4),l=n.n(o),s=n(58),c=n(2),i=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},159:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-000e260963c8e2233066.js.map