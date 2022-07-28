"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "headbar",
  emits: ["pop"],
  setup(props, context) {
    let headbarState = common_vendor.reactive({
      mode: 0
    });
    let searchInfo = common_vendor.reactive({
      keyword: ""
    });
    function pop() {
      context.emit("pop");
    }
    return __spreadProps(__spreadValues(__spreadValues({}, common_vendor.toRefs(headbarState)), common_vendor.toRefs(searchInfo)), {
      pop
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.mode == 0
  }, _ctx.mode == 0 ? {
    b: common_vendor.o((...args) => $setup.pop && $setup.pop(...args)),
    c: common_vendor.o(($event) => _ctx.mode = 1)
  } : {
    d: _ctx.keyword,
    e: common_vendor.o(($event) => _ctx.keyword = $event.detail.value),
    f: _ctx.keyword,
    g: common_vendor.o(($event) => _ctx.keyword = ""),
    h: common_vendor.o(($event) => _ctx.mode = 0)
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/43542/Documents/WorkSpace/CFun World/j. \u7F51\u7AD9/cfundict/dictwx/components/headbar/headbar.vue"]]);
wx.createComponent(Component);
