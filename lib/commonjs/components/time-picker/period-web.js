"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _lodash = require("lodash");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const PeriodWeb = ({
  value,
  setValue = () => {},
  styles,
  classNames
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: () => setValue(value == 'AM' ? 'PM' : 'AM')
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [defaultStyles.period, styles === null || styles === void 0 ? void 0 : styles.time_selected_indicator],
    className: classNames === null || classNames === void 0 ? void 0 : classNames.time_selected_indicator
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles === null || styles === void 0 ? void 0 : styles.time_label,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.time_label
  }, value)));
};
const defaultStyles = _reactNative.StyleSheet.create({
  period: {
    width: 65,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
const customComparator = (prev, next) => {
  const areEqual = prev.value === next.value && prev.setValue === next.setValue && (0, _lodash.isEqual)(prev.styles, next.styles) && (0, _lodash.isEqual)(prev.classNames, next.classNames);
  return areEqual;
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(PeriodWeb, customComparator);
//# sourceMappingURL=period-web.js.map