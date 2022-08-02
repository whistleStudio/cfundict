"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var utils_netReq = require("./utils/netReq.js");
if (!Math) {
  "./pages/index/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/43542/Documents/WorkSpace/CFun World/j. \u7F51\u7AD9/cfundict/dictwx/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$bus = new common_vendor.mitt();
  app.config.globalProperties.$reqGet = utils_netReq.netReq.$reqGet;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
