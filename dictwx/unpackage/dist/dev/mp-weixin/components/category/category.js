"use strict";
var __defProp = Object.defineProperty;
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
var common_vendor = require("../../common/vendor.js");
var utils_netReq = require("../../utils/netReq.js");
var utils_hint = require("../../utils/hint.js");
const sub = [
  {
    name: "\u6587\u6863",
    cate: [
      {
        name: "\u63A7\u5236\u5668",
        item: [
          "CFun-Board-A",
          "\u667A\u80FD\u63A7\u5236\u5668"
        ]
      },
      {
        name: "\u6267\u884C\u5668",
        item: [
          "LED\u706F",
          "\u7535\u673A",
          "\u6C34\u6CF5",
          "\u8235\u673A",
          "\u8702\u9E23\u5668"
        ]
      },
      {
        name: "\u4F20\u611F\u5668",
        item: [
          "\u5149\u7EBF\u68C0\u6D4B\u6A21\u5757",
          "\u58F0\u97F3\u68C0\u6D4B\u6A21\u5757",
          "\u7EA2\u5916\u907F\u969C\u68C0\u6D4B\u6A21\u5757",
          "\u8D85\u58F0\u6CE2\u6D4B\u8DDD\u6A21\u5757"
        ]
      }
    ]
  },
  {
    name: "\u5E2E\u52A9",
    cate: [
      {
        name: "\u63A7\u5236\u5668",
        item: [
          "CFun-Board-A",
          "\u667A\u80FD\u63A7\u5236\u5668"
        ]
      },
      {
        name: "\u6267\u884C\u5668",
        item: [
          "LED\u706F",
          "\u8702\u9E23\u5668"
        ]
      },
      {
        name: "\u4F20\u611F\u5668",
        item: [
          "\u5149\u7EBF\u68C0\u6D4B\u6A21\u5757",
          "\u58F0\u97F3\u68C0\u6D4B\u6A21\u5757"
        ]
      }
    ]
  }
];
const _sfc_main = {
  name: "category",
  emits: ["changeMain"],
  props: {
    cateInfo: Array
  },
  setup(props, context) {
    const { proxy } = common_vendor.getCurrentInstance();
    const drawer = common_vendor.ref(null);
    const cateState = common_vendor.reactive({
      actIdx: [-1, 0, 0]
    });
    const { $reqGet } = utils_netReq.netReq;
    function drawerOpen() {
      cateState.actIdx[0] = -1;
      drawer._value.open();
    }
    function drawerClose() {
      drawer._value.close();
    }
    function subClick(i) {
      cateState.actIdx[0] = cateState.actIdx[0] == i ? -1 : i;
    }
    function itemClick(i, ci, ii) {
      let { actIdx } = cateState;
      actIdx[0] = i;
      actIdx[1] = ci;
      actIdx[2] = ii;
      getPage(i, ci, ii);
      drawerClose();
    }
    function getPage(sub2, cate, item) {
      $reqGet({
        url: "/page/getPage",
        query: { sub: sub2, cate, item },
        rsv(data) {
          if (!data.err) {
            context.emit("changeMain", data.src);
          } else
            utils_hint.hint.error(data.msg);
        }
      });
    }
    common_vendor.onMounted(() => {
      proxy.$bus.on("pop", drawerOpen);
    });
    return __spreadValues({
      drawer,
      sub,
      drawerOpen,
      drawerClose,
      subClick,
      itemClick
    }, common_vendor.toRefs(cateState));
  }
};
if (!Array) {
  const _easycom_uni_drawer2 = common_vendor.resolveComponent("uni-drawer");
  _easycom_uni_drawer2();
}
const _easycom_uni_drawer = () => "../../uni_modules/uni-drawer/components/uni-drawer/uni-drawer.js";
if (!Math) {
  _easycom_uni_drawer();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.drawerClose && $setup.drawerClose(...args)),
    b: common_vendor.f($props.cateInfo, (v, i, i0) => {
      return common_vendor.e({
        a: common_vendor.t(v.name),
        b: _ctx.actIdx[0] != i ? 1 : "",
        c: _ctx.actIdx[0] == i ? 1 : "",
        d: _ctx.actIdx[0] == i ? 1 : "",
        e: common_vendor.o(($event) => $setup.subClick(i)),
        f: _ctx.actIdx[0] == i
      }, _ctx.actIdx[0] == i ? {
        g: common_vendor.f(v.cate, (cv, ci, i1) => {
          return {
            a: common_vendor.t(cv.name),
            b: common_vendor.f(cv.item, (iv, ii, i2) => {
              return {
                a: common_vendor.t(iv),
                b: common_vendor.o(($event) => $setup.itemClick(i, ci, ii))
              };
            }),
            c: ci
          };
        })
      } : {}, {
        h: i
      });
    }),
    c: common_vendor.sr("drawer", "896b54b4-0"),
    d: common_vendor.p({
      mode: "left",
      width: 240
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/43542/Documents/WorkSpace/CFun World/j. \u7F51\u7AD9/cfundict/dictwx/components/category/category.vue"]]);
wx.createComponent(Component);
