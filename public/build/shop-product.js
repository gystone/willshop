webpackJsonp([6],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

eval("var disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(219)\n}\nvar Component = __webpack_require__(51)(\n  /* script */\n  __webpack_require__(221),\n  /* template */\n  __webpack_require__(222),\n  /* styles */\n  injectStyle,\n  /* scopeId */\n  \"data-v-819cad5c\",\n  /* moduleIdentifier (server only) */\n  null\n)\nComponent.options.__file = \"D:\\\\UPUPW_NG7.0\\\\vhosts\\\\willshop\\\\resources\\\\assets\\\\js\\\\shop\\\\components\\\\product.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] product.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-819cad5c\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-819cad5c\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\nmodule.exports = Component.exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQ2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wL2NvbXBvbmVudHMvcHJvZHVjdC52dWU/NmI5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTgxOWNhZDVjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcHJvZHVjdC52dWVcIilcbn1cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZHVjdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTgxOWNhZDVjXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2R1Y3QudnVlXCIpLFxuICAvKiBzdHlsZXMgKi9cbiAgaW5qZWN0U3R5bGUsXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtODE5Y2FkNWNcIixcbiAgLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcVVBVUFdfTkc3LjBcXFxcdmhvc3RzXFxcXHdpbGxzaG9wXFxcXHJlc291cmNlc1xcXFxhc3NldHNcXFxcanNcXFxcc2hvcFxcXFxjb21wb25lbnRzXFxcXHByb2R1Y3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkuc3Vic3RyKDAsIDIpICE9PSBcIl9fXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBwcm9kdWN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04MTljYWQ1Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTgxOWNhZDVjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Nob3AvY29tcG9uZW50cy9wcm9kdWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///146\n");

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(220);\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar update = __webpack_require__(50)(\"e47cb74a\", content, false);\n// Hot Module Replacement\nif(false) {\n // When the styles change, update the <style> tags\n if(!content.locals) {\n   module.hot.accept(\"!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"vue\\\":true,\\\"id\\\":\\\"data-v-819cad5c\\\",\\\"scoped\\\":true,\\\"hasInlineConfig\\\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue\", function() {\n     var newContent = require(\"!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\\\"vue\\\":true,\\\"id\\\":\\\"data-v-819cad5c\\\",\\\"scoped\\\":true,\\\"hasInlineConfig\\\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue\");\n     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n     update(newContent);\n   });\n }\n // When the module is disposed, remove the <style> tags\n module.hot.dispose(function() { update(); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wL2NvbXBvbmVudHMvcHJvZHVjdC52dWU/ZTlhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODE5Y2FkNWNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wcm9kdWN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZTQ3Y2I3NGFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODE5Y2FkNWNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9wcm9kdWN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi04MTljYWQ1Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Byb2R1Y3QudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTgxOWNhZDVjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wL2NvbXBvbmVudHMvcHJvZHVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///219\n");

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(15)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.banner-swipe-item[data-v-819cad5c] {\\n  display: block;\\n  overflow: hidden;\\n}\\n.details[data-v-819cad5c] {\\n  display: block;\\n  background-color: #fff;\\n  overflow: hidden;\\n  margin: 5px 0;\\n}\\n.details .name[data-v-819cad5c] {\\n    display: block;\\n    padding: 0 10px;\\n    font-size: 17px;\\n    color: #666;\\n}\\n.details .price[data-v-819cad5c] {\\n    display: block;\\n    padding: 0 10px;\\n    font-size: 17px;\\n    color: red;\\n}\\n.description[data-v-819cad5c] {\\n  display: block;\\n  overflow: hidden;\\n  background-color: #fff;\\n  padding: 1rem 0.5rem 80px 0.5rem;\\n  text-align: justify;\\n  font-size: 1.1rem;\\n  color: #666;\\n}\\nfooter[data-v-819cad5c] {\\n  display: flex;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  height: 45px;\\n  background-color: #fff;\\n  border-top: 1px solid #ccc;\\n}\\nfooter .btn[data-v-819cad5c] {\\n    color: #555;\\n    text-align: center;\\n    padding: 2px 0;\\n    font-size: 12px;\\n    position: relative;\\n    flex-basis: 80px;\\n}\\nfooter .btn .icon[data-v-819cad5c] {\\n      display: block;\\n}\\nfooter .btn .icon.is-favourite[data-v-819cad5c] {\\n        color: #f00;\\n}\\nfooter .btn .amount[data-v-819cad5c] {\\n      position: absolute;\\n      background-color: #f00;\\n      top: 3px;\\n      right: 20px;\\n      color: #fff;\\n      font-size: 10px;\\n      padding: 0 4px;\\n      border-radius: 50%;\\n}\\nfooter .btn .text[data-v-819cad5c] {\\n      font-size: 12px;\\n}\\nfooter .btn-add-cart[data-v-819cad5c] {\\n    height: 45px;\\n    line-height: 45px;\\n    font-size: 15px;\\n    text-align: center;\\n    color: #fff;\\n    padding: 0;\\n    background-color: #c00;\\n    flex-grow: 5;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"D:/UPUPW_NG7.0/vhosts/willshop/resources/assets/js/shop/components/product.vue\"],\"names\":[],\"mappings\":\";AAAA;EACE,eAAe;EACf,iBAAiB;CAAE;AAErB;EACE,eAAe;EACf,uBAAuB;EACvB,iBAAiB;EACjB,cAAc;CAAE;AAChB;IACE,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;CAAE;AAChB;IACE,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;CAAE;AAEjB;EACE,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,iCAAiC;EACjC,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;CAAE;AAEhB;EACE,cAAc;EACd,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,2BAA2B;CAAE;AAC7B;IACE,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;CAAE;AACnB;MACE,eAAe;CAAE;AACjB;QACE,YAAY;CAAE;AAClB;MACE,mBAAmB;MACnB,uBAAuB;MACvB,SAAS;MACT,YAAY;MACZ,YAAY;MACZ,gBAAgB;MAChB,eAAe;MACf,mBAAmB;CAAE;AACvB;MACE,gBAAgB;CAAE;AACtB;IACE,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,aAAa;CAAE\",\"file\":\"product.vue\",\"sourcesContent\":[\".banner-swipe-item {\\n  display: block;\\n  overflow: hidden; }\\n\\n.details {\\n  display: block;\\n  background-color: #fff;\\n  overflow: hidden;\\n  margin: 5px 0; }\\n  .details .name {\\n    display: block;\\n    padding: 0 10px;\\n    font-size: 17px;\\n    color: #666; }\\n  .details .price {\\n    display: block;\\n    padding: 0 10px;\\n    font-size: 17px;\\n    color: red; }\\n\\n.description {\\n  display: block;\\n  overflow: hidden;\\n  background-color: #fff;\\n  padding: 1rem 0.5rem 80px 0.5rem;\\n  text-align: justify;\\n  font-size: 1.1rem;\\n  color: #666; }\\n\\nfooter {\\n  display: flex;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  height: 45px;\\n  background-color: #fff;\\n  border-top: 1px solid #ccc; }\\n  footer .btn {\\n    color: #555;\\n    text-align: center;\\n    padding: 2px 0;\\n    font-size: 12px;\\n    position: relative;\\n    flex-basis: 80px; }\\n    footer .btn .icon {\\n      display: block; }\\n      footer .btn .icon.is-favourite {\\n        color: #f00; }\\n    footer .btn .amount {\\n      position: absolute;\\n      background-color: #f00;\\n      top: 3px;\\n      right: 20px;\\n      color: #fff;\\n      font-size: 10px;\\n      padding: 0 4px;\\n      border-radius: 50%; }\\n    footer .btn .text {\\n      font-size: 12px; }\\n  footer .btn-add-cart {\\n    height: 45px;\\n    line-height: 45px;\\n    font-size: 15px;\\n    text-align: center;\\n    color: #fff;\\n    padding: 0;\\n    background-color: #c00;\\n    flex-grow: 5; }\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wL2NvbXBvbmVudHMvcHJvZHVjdC52dWU/ZDdiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJhbm5lci1zd2lwZS1pdGVtW2RhdGEtdi04MTljYWQ1Y10ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZGV0YWlsc1tkYXRhLXYtODE5Y2FkNWNdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG4uZGV0YWlscyAubmFtZVtkYXRhLXYtODE5Y2FkNWNdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBjb2xvcjogIzY2NjtcXG59XFxuLmRldGFpbHMgLnByaWNlW2RhdGEtdi04MTljYWQ1Y10ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcbi5kZXNjcmlwdGlvbltkYXRhLXYtODE5Y2FkNWNdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbSA4MHB4IDAuNXJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5mb290ZXJbZGF0YS12LTgxOWNhZDVjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XFxufVxcbmZvb3RlciAuYnRuW2RhdGEtdi04MTljYWQ1Y10ge1xcbiAgICBjb2xvcjogIzU1NTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycHggMDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtYmFzaXM6IDgwcHg7XFxufVxcbmZvb3RlciAuYnRuIC5pY29uW2RhdGEtdi04MTljYWQ1Y10ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5mb290ZXIgLmJ0biAuaWNvbi5pcy1mYXZvdXJpdGVbZGF0YS12LTgxOWNhZDVjXSB7XFxuICAgICAgICBjb2xvcjogI2YwMDtcXG59XFxuZm9vdGVyIC5idG4gLmFtb3VudFtkYXRhLXYtODE5Y2FkNWNdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcXG4gICAgICB0b3A6IDNweDtcXG4gICAgICByaWdodDogMjBweDtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgICAgcGFkZGluZzogMCA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5mb290ZXIgLmJ0biAudGV4dFtkYXRhLXYtODE5Y2FkNWNdIHtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxufVxcbmZvb3RlciAuYnRuLWFkZC1jYXJ0W2RhdGEtdi04MTljYWQ1Y10ge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDA7XFxuICAgIGZsZXgtZ3JvdzogNTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6L1VQVVBXX05HNy4wL3Zob3N0cy93aWxsc2hvcC9yZXNvdXJjZXMvYXNzZXRzL2pzL3Nob3AvY29tcG9uZW50cy9wcm9kdWN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0NBQUU7QUFFckI7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixjQUFjO0NBQUU7QUFDaEI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0NBQUU7QUFDaEI7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0NBQUU7QUFFakI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixZQUFZO0NBQUU7QUFFaEI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7Q0FBRTtBQUM3QjtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQUU7QUFDbkI7TUFDRSxlQUFlO0NBQUU7QUFDakI7UUFDRSxZQUFZO0NBQUU7QUFDbEI7TUFDRSxtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLFNBQVM7TUFDVCxZQUFZO01BQ1osWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsbUJBQW1CO0NBQUU7QUFDdkI7TUFDRSxnQkFBZ0I7Q0FBRTtBQUN0QjtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixhQUFhO0NBQUVcIixcImZpbGVcIjpcInByb2R1Y3QudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5iYW5uZXItc3dpcGUtaXRlbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4uZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luOiA1cHggMDsgfVxcbiAgLmRldGFpbHMgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGNvbG9yOiAjNjY2OyB9XFxuICAuZGV0YWlscyAucHJpY2Uge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGNvbG9yOiByZWQ7IH1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtIDgwcHggMC41cmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgY29sb3I6ICM2NjY7IH1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjOyB9XFxuICBmb290ZXIgLmJ0biB7XFxuICAgIGNvbG9yOiAjNTU1O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJweCAwO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1iYXNpczogODBweDsgfVxcbiAgICBmb290ZXIgLmJ0biAuaWNvbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgICBmb290ZXIgLmJ0biAuaWNvbi5pcy1mYXZvdXJpdGUge1xcbiAgICAgICAgY29sb3I6ICNmMDA7IH1cXG4gICAgZm9vdGVyIC5idG4gLmFtb3VudCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XFxuICAgICAgdG9wOiAzcHg7XFxuICAgICAgcmlnaHQ6IDIwcHg7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgICBmb290ZXIgLmJ0biAudGV4dCB7XFxuICAgICAgZm9udC1zaXplOiAxMnB4OyB9XFxuICBmb290ZXIgLmJ0bi1hZGQtY2FydCB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMDtcXG4gICAgZmxleC1ncm93OiA1OyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTgxOWNhZDVjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wL2NvbXBvbmVudHMvcHJvZHVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///220\n");

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  mounted: function mounted() {\n    this.getProduct();\n    this.checkIsFavourite();\n    this.getProductAmountInCart();\n  },\n  data: function data() {\n    return {\n      product: {},\n      amount: 1,\n      isFavourite: false,\n      productAmountInCart: 0\n    };\n  },\n\n\n  computed: {\n    banners: function banners() {\n      var temp = [];\n      if (this.product.pictures) {\n        this.product.pictures.forEach(function (picture) {\n          temp.push({ img: picture });\n        });\n      }\n      return temp;\n    }\n  },\n\n  methods: {\n    getProduct: function getProduct() {\n      var _this = this;\n\n      this.axios.get('product/' + this.$route.params.id).then(function (response) {\n        _this.product = response.data.product;\n      });\n    },\n    checkIsFavourite: function checkIsFavourite() {\n      var _this2 = this;\n\n      this.axios.get('favourite/' + this.$route.params.id + '/is-favourite').then(function (response) {\n        _this2.isFavourite = response.data.isFavourite;\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n    getProductAmountInCart: function getProductAmountInCart() {\n      var _this3 = this;\n\n      this.axios.get('cart/product-amount').then(function (response) {\n        _this3.productAmountInCart = response.data.amount;\n      }).catch(function (error) {\n        console.log(error);\n      });\n    },\n    addToCart: function addToCart(productId) {\n      var _this4 = this;\n\n      var postData = {\n        productId: productId,\n        amount: this.amount\n      };\n\n      this.axios.post('cart/add', postData).then(function (response) {\n        var data = response.data;\n\n        _this4.productAmountInCart = parseInt(_this4.productAmountInCart) + _this4.amount;\n      });\n    },\n    toggleFavourite: function toggleFavourite(productId) {\n      var _this5 = this;\n\n      this.axios.get('favourite/' + productId + '/toggle').then(function (response) {\n        _this5.isFavourite = !_this5.isFavourite;\n      });\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Byb2R1Y3QudnVlPzMyNDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYmFubmVyXCI+XHJcbiAgICAgIDx3di1zd2lwZSA6aGVpZ2h0PVwiMTgwXCIgOmF1dG89XCI0MDAwXCI+XHJcbiAgICAgICAgPHd2LXN3aXBlLWl0ZW0gY2xhc3M9XCJiYW5uZXItc3dpcGUtaXRlbVwiIHYtZm9yPVwiYmFubmVyIGluIGJhbm5lcnNcIiA6a2V5PVwiYmFubmVyXCI+XHJcbiAgICAgICAgICA8aW1nIDpzcmM9XCJiYW5uZXIuaW1nXCIgYWx0PVwiXCI+XHJcbiAgICAgICAgPC93di1zd2lwZS1pdGVtPlxyXG4gICAgICA8L3d2LXN3aXBlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPnt7IHByb2R1Y3QubmFtZSB9fTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJpY2VcIj57eyBwcm9kdWN0LnByaWNlIH19PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiB2LWh0bWw9XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcblxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJ0biBidG4tZmF2b3VyaXRlXCIgQGNsaWNrPVwidG9nZ2xlRmF2b3VyaXRlKHByb2R1Y3QuaWQpXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb25mb250XCIgOmNsYXNzPVwieyAnaXMtZmF2b3VyaXRlJzogaXNGYXZvdXJpdGUgfVwiPnt7IGlzRmF2b3VyaXRlID8gJyYjeGU2MDY7JyA6ICcmI3hlNjA3OydcclxuICAgICAgICAgIH19PC9pPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPnt7IGlzRmF2b3VyaXRlID8gJ+W3suaUtuiXjycgOiAn5pS26JePJyB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ0biBidG4tY2FydFwiIHRvPVwiL2NhcnRcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFtb3VudFwiPnt7IHByb2R1Y3RBbW91bnRJbkNhcnQgfX08L3NwYW4+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb25mb250XCI+JiN4ZTYxMTs8L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+6LSt54mp6L2mPC9zcGFuPlxyXG4gICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLWFkZC1jYXJ0XCIgQGNsaWNrPVwiYWRkVG9DYXJ0KHByb2R1Y3QuaWQpXCI+5Yqg5YWl6LSt54mp6L2mPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvZHVjdCgpO1xyXG4gICAgICB0aGlzLmNoZWNrSXNGYXZvdXJpdGUoKTtcclxuICAgICAgdGhpcy5nZXRQcm9kdWN0QW1vdW50SW5DYXJ0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb2R1Y3Q6IHt9LFxyXG4gICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICBpc0Zhdm91cml0ZTogZmFsc2UsXHJcbiAgICAgICAgcHJvZHVjdEFtb3VudEluQ2FydDogMCxcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBiYW5uZXJzICgpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnByb2R1Y3QucGljdHVyZXMpIHtcclxuICAgICAgICAgIHRoaXMucHJvZHVjdC5waWN0dXJlcy5mb3JFYWNoKHBpY3R1cmUgPT4ge1xyXG4gICAgICAgICAgICB0ZW1wLnB1c2goe2ltZzogcGljdHVyZX0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0UHJvZHVjdCAoKSB7XHJcbiAgICAgICAgdGhpcy5heGlvcy5nZXQoYHByb2R1Y3QvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9YCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb2R1Y3QgPSByZXNwb25zZS5kYXRhLnByb2R1Y3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDllYblk4HmmK/lkKblt7LooqvmlLbol49cclxuICAgICAgY2hlY2tJc0Zhdm91cml0ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5heGlvcy5nZXQoYGZhdm91cml0ZS8ke3RoaXMuJHJvdXRlLnBhcmFtcy5pZH0vaXMtZmF2b3VyaXRlYCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRmF2b3VyaXRlID0gcmVzcG9uc2UuZGF0YS5pc0Zhdm91cml0ZTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyDotK3nianovabkuK3llYblk4HmgLvmlbBcclxuICAgICAgZ2V0UHJvZHVjdEFtb3VudEluQ2FydCAoKSB7XHJcbiAgICAgICAgdGhpcy5heGlvcy5nZXQoJ2NhcnQvcHJvZHVjdC1hbW91bnQnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvZHVjdEFtb3VudEluQ2FydCA9IHJlc3BvbnNlLmRhdGEuYW1vdW50O1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8vIOWKoOWFpei0reeJqei9plxyXG4gICAgICBhZGRUb0NhcnQgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgIGxldCBwb3N0RGF0YSA9IHtcclxuICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxyXG4gICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuYXhpb3MucG9zdCgnY2FydC9hZGQnLCBwb3N0RGF0YSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgdGhpcy5wcm9kdWN0QW1vdW50SW5DYXJ0ID0gcGFyc2VJbnQodGhpcy5wcm9kdWN0QW1vdW50SW5DYXJ0KSArIHRoaXMuYW1vdW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g5Yqg5YWl6LSt54mp6L2mXHJcbiAgICAgIHRvZ2dsZUZhdm91cml0ZSAocHJvZHVjdElkKSB7XHJcbiAgICAgICAgdGhpcy5heGlvcy5nZXQoYGZhdm91cml0ZS8ke3Byb2R1Y3RJZH0vdG9nZ2xlYCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmlzRmF2b3VyaXRlID0gIXRoaXMuaXNGYXZvdXJpdGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICRmb290ZXJIZWlnaHQ6IDQ1cHg7XHJcblxyXG4gIC5iYW5uZXItc3dpcGUtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcblxyXG4gICAgLnByaWNlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbSA4MHB4IDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogJGZvb3RlckhlaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBmbGV4LWJhc2lzOiA4MHB4O1xyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICYuaXMtZmF2b3VyaXRlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFtb3VudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDA7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4tYWRkLWNhcnQge1xyXG4gICAgICBoZWlnaHQ6ICRmb290ZXJIZWlnaHQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkZm9vdGVySGVpZ2h0O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDA7XHJcbiAgICAgIGZsZXgtZ3JvdzogNTtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBwcm9kdWN0LnZ1ZT9mNzQ2MTBlOCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7OztBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE1Q0E7QUE1QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///221\n");

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', [_c('div', {\n    staticClass: \"banner\"\n  }, [_c('wv-swipe', {\n    attrs: {\n      \"height\": 180,\n      \"auto\": 4000\n    }\n  }, _vm._l((_vm.banners), function(banner) {\n    return _c('wv-swipe-item', {\n      key: banner,\n      staticClass: \"banner-swipe-item\"\n    }, [_c('img', {\n      attrs: {\n        \"src\": banner.img,\n        \"alt\": \"\"\n      }\n    })])\n  }))], 1), _vm._v(\" \"), _c('div', {\n    staticClass: \"details\"\n  }, [_c('div', {\n    staticClass: \"name\"\n  }, [_vm._v(_vm._s(_vm.product.name))]), _vm._v(\" \"), _c('div', {\n    staticClass: \"price\"\n  }, [_vm._v(_vm._s(_vm.product.price))])]), _vm._v(\" \"), _c('div', {\n    staticClass: \"description\",\n    domProps: {\n      \"innerHTML\": _vm._s(_vm.product.description)\n    }\n  }), _vm._v(\" \"), _c('footer', [_c('div', {\n    staticClass: \"btn btn-favourite\",\n    on: {\n      \"click\": function($event) {\n        _vm.toggleFavourite(_vm.product.id)\n      }\n    }\n  }, [_c('i', {\n    staticClass: \"icon iconfont\",\n    class: {\n      'is-favourite': _vm.isFavourite\n    }\n  }, [_vm._v(_vm._s(_vm.isFavourite ? '' : ''))]), _vm._v(\" \"), _c('span', {\n    staticClass: \"text\"\n  }, [_vm._v(_vm._s(_vm.isFavourite ? '已收藏' : '收藏'))])]), _vm._v(\" \"), _c('router-link', {\n    staticClass: \"btn btn-cart\",\n    attrs: {\n      \"to\": \"/cart\"\n    }\n  }, [_c('span', {\n    staticClass: \"amount\"\n  }, [_vm._v(_vm._s(_vm.productAmountInCart))]), _vm._v(\" \"), _c('i', {\n    staticClass: \"icon iconfont\"\n  }, [_vm._v(\"\")]), _vm._v(\" \"), _c('span', {\n    staticClass: \"text\"\n  }, [_vm._v(\"购物车\")])]), _vm._v(\" \"), _c('div', {\n    staticClass: \"btn-add-cart\",\n    on: {\n      \"click\": function($event) {\n        _vm.addToCart(_vm.product.id)\n      }\n    }\n  }, [_vm._v(\"加入购物车\")])], 1)])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-819cad5c\", module.exports)\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wL2NvbXBvbmVudHMvcHJvZHVjdC52dWU/MTBiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJhbm5lclwiXG4gIH0sIFtfYygnd3Ytc3dpcGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaGVpZ2h0XCI6IDE4MCxcbiAgICAgIFwiYXV0b1wiOiA0MDAwXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5iYW5uZXJzKSwgZnVuY3Rpb24oYmFubmVyKSB7XG4gICAgcmV0dXJuIF9jKCd3di1zd2lwZS1pdGVtJywge1xuICAgICAga2V5OiBiYW5uZXIsXG4gICAgICBzdGF0aWNDbGFzczogXCJiYW5uZXItc3dpcGUtaXRlbVwiXG4gICAgfSwgW19jKCdpbWcnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInNyY1wiOiBiYW5uZXIuaW1nLFxuICAgICAgICBcImFsdFwiOiBcIlwiXG4gICAgICB9XG4gICAgfSldKVxuICB9KSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXRhaWxzXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibmFtZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9kdWN0Lm5hbWUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByaWNlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnByb2R1Y3QucHJpY2UpKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVzY3JpcHRpb25cIixcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5wcm9kdWN0LmRlc2NyaXB0aW9uKVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdmb290ZXInLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWZhdm91cml0ZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udG9nZ2xlRmF2b3VyaXRlKF92bS5wcm9kdWN0LmlkKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gaWNvbmZvbnRcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lzLWZhdm91cml0ZSc6IF92bS5pc0Zhdm91cml0ZVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmlzRmF2b3VyaXRlID8gJ+6YhicgOiAn7piHJykpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHRcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uaXNGYXZvdXJpdGUgPyAn5bey5pS26JePJyA6ICfmlLbol48nKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1jYXJ0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvY2FydFwiXG4gICAgfVxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYW1vdW50XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnByb2R1Y3RBbW91bnRJbkNhcnQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGljb25mb250XCJcbiAgfSwgW192bS5fdihcIu6YkVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0XCJcbiAgfSwgW192bS5fdihcIui0reeJqei9plwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuLWFkZC1jYXJ0XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hZGRUb0NhcnQoX3ZtLnByb2R1Y3QuaWQpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwi5Yqg5YWl6LSt54mp6L2mXCIpXSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTgxOWNhZDVjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04MTljYWQ1Y1wifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Nob3AvY29tcG9uZW50cy9wcm9kdWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///222\n");

/***/ })

});