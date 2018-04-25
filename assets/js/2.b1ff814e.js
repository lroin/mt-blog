(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{55:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"在-vue-中使用高德地图的一些问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-vue-中使用高德地图的一些问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 Vue 中使用高德地图的一些问题")]),a("p",[a("img",{attrs:{src:"https://github.com/1969290646/blog/blob/master/doc/201801/source/banner.png",alt:""}})]),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),a("p",[t._v("前段时间做了一个和地图相关的项目，项目中有多个地图页面，这些地图页面有一个侧边栏，一个筛选组件，根据筛选组件的条件请求数据，然后在地图上放覆盖物。在实际开发中遇到了一些问题做了一些总结。")]),a("h2",{attrs:{id:"zoom-缩放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zoom-缩放","aria-hidden":"true"}},[t._v("#")]),t._v(" zoom 缩放")]),a("p",[t._v("虽然说高德地图提供了丰富的 API 以及 UI 组件库供我们使用，但是实际需求中，产品总是会提出一些匪夷所思的需求，这些需求在现有的 API 中没有实现，我们就需要自己去做一些封装。在地图中有一类组件经常会被使用到，那就是 Zoom 组件，通过点击放大与缩小按钮来操作地图。")]),a("p",[t._v("产品提出需求，在不同页面中缩放的级别可能不同，到这里大家可能要说了，要实现上面的功能其实很简单，在创建地图实例的时候设置 "),a("code",[t._v("zooms")]),t._v(" 就可以了，确实是这样。只是我这里有些不同，我的项目是多个页面共用一个地图实例，所以这个 "),a("code",[t._v("zooms")]),t._v(" 不能被所有的页面通用。")]),a("h2",{attrs:{id:"zoom-事件的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zoom-事件的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" zoom 事件的问题")]),a("p",[t._v("用过高德地图的同学可能会说，这个也很简单啊，注册高德地图的 "),a("code",[t._v("zoomstart")]),t._v(" 事件就可以了，如果你用 "),a("code",[t._v("zoomstart")]),t._v(" 事件来做处理会导致一些问题。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ZOOM_MAX")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ZOOM_MIN")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("Z00M_DEFAULT")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("14")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\t"),a("span",{attrs:{class:"token comment"}},[t._v("// 监听事件")]),t._v("\n\t"),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'zoomstart'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zoomStartHandler"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setZoom")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("Z00M_DEFAULT")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),a("span",{attrs:{class:"token function"}},[t._v("beforeDestroy")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("off")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'zoomstart'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zoomStartHandler"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\tmethods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token function"}},[t._v("zoomStartHandler")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" zoom "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getZoom")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoom "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ZOOM_MAX")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setZoom")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("ZOOM_MAX")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zoom "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ZOOM_MIN")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("map"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setZoom")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token constant"}},[t._v("ZOOM_MIN")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("如代码所示，有一个地图页面缩放只能是在 12 - 15 之间，默认缩放级别是 13，当你缩放级别大于 15 的时候将级别设置为 15，当缩放级别小于 12 的时候讲级别设置为 12，看上去似乎没什么问题。如果你这时候你快速放大地图，就会发现地图超出 15 后并没有停止，而是继续放大。")]),a("p",[t._v("这是为什么呢？因为这与高德地图的 "),a("code",[t._v("zoom")]),t._v(" 事件有关，"),a("code",[t._v("zoomstart")]),t._v(" 事件触发后，在没有触发 "),a("code",[t._v("zoomend")]),t._v(" 事件之前不会重新触发，"),a("code",[t._v("zoomchange")]),t._v(" 这个事件是触发在 "),a("code",[t._v("zoomend")]),t._v(" 事件之前，而如果你快速缩放地图你会发现，即使地图已经开始变化了，但是 "),a("code",[t._v("zoomchange")]),t._v(" 并没有触发，只是在地图缩放快要结束前才会触发。")]),a("p",[t._v("地图第一次放大的时候 zoom 值是 15，第二次缩放的时候是 16 但是由于还没有触发 "),a("code",[t._v("zoomend")]),t._v(" 事件，"),a("code",[t._v("zoomstart")]),t._v(" 事件不会再触发，所以地图会继续缩放。而如果你使用 "),a("code",[t._v("zoomchange")]),t._v(" 或 "),a("code",[t._v("zoomend")]),t._v(" 事件来处理，那么地图先放大然后再缩小，对用户的使用体验非常差。")]),a("p",[t._v("另外高德地图的缩放还有一个问题，那就是 ZOOM 组件和双击地图缩放，在 "),a("code",[t._v("zoomstart")]),t._v(" 事件中获取的值是不一样的。ZOOM 组件点击获取的值是缩放后的值，而双击地图缩放获取的值是缩放前的值，具体原因是什么还不清楚，大家可以自己测试一下。")]),a("p",[t._v("既然监听 "),a("code",[t._v("zoom")]),t._v(" 事件没办法做到这个功能，哪应该怎么办呢？首先我们需要将 "),a("code",[t._v("doubleClickZoom")]),t._v(" 和 "),a("code",[t._v("scrollWheel")]),t._v(" 属性设置为 "),a("code",[t._v("false")]),t._v("，然后我们自己写一个 Zoom 组件，这样我们可以不关心 "),a("code",[t._v("zoom")]),t._v(" 事件，只需要关心组件的值即可。")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cpt-zoom"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zoomIn"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("+"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ zoom }}"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zoomOut"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("-"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\nexport default {\n\tprops: {\n\t\tmin: Number,\n\t\tmax: Number,\n\t\tmap: {\n\t\t\ttype: Object,\n\t\t\trequired: true\n\t\t}\n\t},\n\n\tdata () {\n\t\treturn {\n\t\t\tzoom: this.map.getZoom()\n\t\t}\n\t},\n\n\tmethods: {\n\t\tzoomIn () {\n\t\t\tconst { map, max } = this\n\t\t\tif (map.getZoom() < this.max) {\n\t\t\t\tmap.zoomIn()\n\t\t\t\tthis.zoom = map.getZoom()\n\t\t\t}\n\t\t},\n\n\t\tzoomOut () {\n\t\t\t// 处理\n\t\t}\n\t}\n}\n")])]),a("h2",{attrs:{id:"渲染优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 渲染优化")]),a("p",[t._v("前面说过这个项目中有一个功能就是渲染覆盖物，数据是通过浏览器窗口中的地图区域来获取的，最开始为了方便想当然的将渲染功能做成了一个组件，当时需要渲染的覆盖物数据大约在 200 多条左右，渲染所需要的时间大约在 1 秒钟左右。一个月后产品说这里看到的数据太少，要将地图缩放两个级别，高德地图缩放一个级别，地图中的面积大约放大 4 倍，也就是说我需要渲染原来数据的 8 倍，大约在 2000 条数据左右。这时却发现渲染时间高达十几秒，这么长的的渲染时间，别说用户了，我自己都受不了，肯定不行。")]),a("p",[t._v("现在最重要的问题就是提升渲染性能，最少要做到渲染 1000 条数据的时候不能超过 1 秒钟，\n想要提升性能就要找出问题出现在哪里，用 console.time 以及 console.timeEnd 打印的结果都差不多，大约是 300 毫秒左右，这个数据显然不准确。")]),a("p",[t._v("问题出现在哪里了，一点头绪都没有，后来和同事探讨发现问题出现在 Vue 身上，因为当数据发生变化之后，Vue 会将所有数据递归遍历一遍，同时为数据添加 getter/setter 方法。每次请求的数据传给组件时都会被遍历，其次，组件的 data 中还保存了 覆盖物的数组，也就是说这些覆盖物的数组也将被遍历。")]),a("p",[t._v("了解到原因后，问题就很好解决了，将地图渲染的数据从 Vue 中抽离，需要渲染的时候单独调用渲染方法不再将数据交给 Vue 处理。")]),a("p",[t._v("下面是关数据被 Vue 管理和不被 Vue 管理的一个性能测试。")]),a("p",[a("img",{attrs:{src:"https://github.com/1969290646/blog/blob/master/doc/201801/source/test.png",alt:""}})]),a("p",[a("a",{attrs:{href:"https://jsperf.com/test-vue-prop-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试链接")])])])}],!1,null,null,null);s.default=o.exports}}]);