(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{70:function(n,e,t){"use strict";t(0);var i=t(23),o=t(2),r=t(9),s=t(13),a=t(46),c=t(1);function d(){return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(s.a,{children:"Meesh is the boss"}),Object(c.jsx)(s.a,{children:"fuk"}),Object(c.jsxs)(a.a,{children:[Object(c.jsx)("meta",{charSet:"utf-8"}),Object(c.jsx)("title",{children:"Fonder"})]})]})}function l(){return Object(c.jsx)(r.a,{children:Object(c.jsx)(s.a,{children:"Yo"})})}function b(){return Object(c.jsx)(r.a,{children:Object(c.jsx)(s.a,{children:"This is Support"})})}function p(){return Object(c.jsx)(r.a,{children:Object(c.jsx)(s.a,{children:"This is submissions page"})})}t(82),t(84);function u(n){return Object(c.jsxs)("header",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:"../assets/icon.png"}),Object(c.jsx)(i.b,{to:"/fonderapp/",children:Object(c.jsx)("h1",{children:"Fonder"})})]}),Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/fonderapp/support",children:"Support"})}),Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/fonderapp/submission",children:"Submission"})})]})})]})}e.a=function(){return Object(c.jsxs)(i.a,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/fonderapp/",element:Object(c.jsx)(d,{})}),Object(c.jsx)(o.a,{path:"fonderapp/support",element:Object(c.jsx)(b,{})}),Object(c.jsx)(o.a,{path:"fonderapp/submission",element:Object(c.jsx)(p,{})}),Object(c.jsx)(o.a,{path:"*",element:Object(c.jsx)(l,{})})]})]})}},71:function(n,e,t){n.exports=t(101)},82:function(n,e,t){var i=t(44),o=t(83);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);n.exports=o.locals||{}},83:function(n,e,t){(e=t(45)(!1)).push([n.i,'/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol, ul {\n    list-style: none;\n}\n\nblockquote, q {\n    quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n    content: \'\';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n',""]),n.exports=e},84:function(n,e,t){var i=t(44),o=t(85);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);n.exports=o.locals||{}},85:function(n,e,t){(e=t(45)(!1)).push([n.i,"",""]),n.exports=e}},[[71,1,2]]]);
//# sourceMappingURL=app.bea8b884.chunk.js.map