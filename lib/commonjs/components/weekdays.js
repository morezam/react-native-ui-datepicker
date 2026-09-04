"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _utils = require("../utils");
var _enums = require("../enums");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Weekdays = ({
  locale,
  firstDayOfWeek,
  styles = {},
  classNames = {},
  weekdaysFormat = 'min',
  weekdaysHeight = _enums.WEEKDAYS_HEIGHT,
  components = {},
  isRTL
}) => {
  var _getWeekdays;
  const style = (0, _react.useMemo)(() => createDefaultStyles(weekdaysHeight, isRTL), [weekdaysHeight, isRTL]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.container, styles.weekdays],
    className: classNames.weekdays,
    testID: "weekdays"
  }, (_getWeekdays = (0, _utils.getWeekdays)(locale, firstDayOfWeek)) === null || _getWeekdays === void 0 ? void 0 : _getWeekdays.map((weekday, index) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    key: index,
    style: [style.weekday, styles.weekday],
    className: classNames.weekday
  }, components.Weekday ? components.Weekday(weekday) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles === null || styles === void 0 ? void 0 : styles.weekday_label,
    className: classNames.weekday_label
  }, weekday.name[weekdaysFormat]))));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Weekdays);
const createDefaultStyles = (weekdaysHeight, isRTL) => _reactNative.StyleSheet.create({
  container: {
    height: weekdaysHeight,
    flexDirection: isRTL ? 'row-reverse' : 'row',
    alignItems: 'center'
  },
  weekday: {
    width: `${99.9 / 7}%`,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//# sourceMappingURL=weekdays.js.map