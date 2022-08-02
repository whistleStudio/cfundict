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
var utils_netReq = require("../../utils/netReq.js");
var utils_hint = require("../../utils/hint.js");
const _sfc_main = {
  setup() {
    let indexState = common_vendor.reactive({
      cateMode: 0,
      mainSrc: "",
      cateInfo: []
    });
    const { $reqGet } = utils_netReq.netReq;
    function changeMain(src) {
      indexState.mainSrc = src;
    }
    common_vendor.onBeforeMount(() => {
      $reqGet({
        url: "/page/home",
        rsv(data) {
          if (!data.err) {
            console.log(data.src);
            indexState.mainSrc = data.src;
          } else
            utils_hint.hint.error(data.msg);
        }
      });
      $reqGet({
        url: "/page/getCate",
        rsv(data) {
          if (!data.err) {
            indexState.cateInfo = data.cateInfo;
          } else
            utils_hint.hint.error(data.msg);
        }
      });
    });
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(indexState)), {
      changeMain
    });
  }
};
if (!Array) {
  const _easycom_headbar2 = common_vendor.resolveComponent("headbar");
  const _easycom_category2 = common_vendor.resolveComponent("category");
  (_easycom_headbar2 + _easycom_category2)();
}
const _easycom_headbar = () => "../../components/headbar/headbar.js";
const _easycom_category = () => "../../components/category/category.js";
if (!Math) {
  (_easycom_headbar + _easycom_category)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.mainSrc
  }, _ctx.mainSrc ? {
    b: _ctx.mainSrc
  } : {}, {
    c: common_vendor.o($setup.changeMain),
    d: common_vendor.p({
      cateInfo: _ctx.cateInfo
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/43542/Documents/WorkSpace/CFun World/j. \u7F51\u7AD9/cfundict/dictwx/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
