"use strict";
var common_vendor = require("../common/vendor.js");
var BASEURL = "http://localhost:8989/api";
const netReq = {
  $reqGet({ url, query = {}, rsv = () => {
  }, rej = () => {
  } }) {
    common_vendor.index.request({
      url: BASEURL + url,
      header: {
        "Content-Type": "application/json;charset=utf-8"
      },
      data: query,
      success(res) {
        if (res.statusCode < 400) {
          rsv(res.data);
        } else
          common_vendor.index.showToast({ title: "\u7F51\u7EDC\u51FA\u9519\u5566", icon: "error" });
      },
      fail(err) {
        common_vendor.index.showToast({ title: "\u7F51\u7EDC\u51FA\u9519\u5566", icon: "error" });
        rej(err);
      }
    });
  }
};
exports.netReq = netReq;
