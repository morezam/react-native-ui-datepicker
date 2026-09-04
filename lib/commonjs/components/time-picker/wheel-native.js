"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _wheelPicker = _interopRequireDefault(require("./wheel-picker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const WheelNative = ({
  value,
  setValue = () => {},
  items,
  styles,
  classNames
}) => {
  return /*#__PURE__*/_react.default.createElement(_wheelPicker.default, {
    value: value,
    options: items,
    onChange: setValue,
    containerStyle: defaultStyles.container,
    itemTextStyle: styles === null || styles === void 0 ? void 0 : styles.time_label,
    itemTextClassName: classNames === null || classNames === void 0 ? void 0 : classNames.time_label,
    selectedIndicatorClassName: classNames === null || classNames === void 0 ? void 0 : classNames.time_selected_indicator,
    selectedIndicatorStyle: styles === null || styles === void 0 ? void 0 : styles.time_selected_indicator,
    itemHeight: 44,
    decelerationRate: "fast"
  });
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(WheelNative);
const defaultStyles = _reactNative.StyleSheet.create({
  container: {
    display: 'flex',
    ..._reactNative.Platform.select({
      web: {
        userSelect: 'none'
      }
    })
  }
});
//# sourceMappingURL=wheel-native.js.map