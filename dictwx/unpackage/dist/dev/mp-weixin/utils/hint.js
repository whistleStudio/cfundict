"use strict";
var common_vendor = require("../common/vendor.js");
const hint = {
  error(err) {
    common_vendor.index.showToast({
      title: err,
      icon: "error"
    });
  }
};
exports.hint = hint;
