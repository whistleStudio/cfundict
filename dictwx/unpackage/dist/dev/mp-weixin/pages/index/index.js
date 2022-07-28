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
  setup() {
    const popup = common_vendor.ref(null);
    let indexState = common_vendor.reactive({
      cateMode: 0
    });
    function pop() {
      indexState.cateMode = !indexState.cateMode;
      if (indexState.cateMode)
        popup._value.open();
      else
        popup._value.close();
    }
    common_vendor.onMounted(() => {
      console.log(popup._value);
    });
    return __spreadProps(__spreadValues({
      popup
    }, common_vendor.toRefs(indexState)), {
      pop
    });
  }
};
if (!Array) {
  const _easycom_headbar2 = common_vendor.resolveComponent("headbar");
  _easycom_headbar2();
}
const _easycom_headbar = () => "../../components/headbar/headbar.js";
if (!Math) {
  _easycom_headbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.pop)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/43542/Documents/WorkSpace/CFun World/j. \u7F51\u7AD9/cfundict/dictwx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
