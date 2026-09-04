"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _calendarContext = require("../calendar-context");
var _header = _interopRequireDefault(require("./header"));
var _years = _interopRequireDefault(require("./years"));
var _months = _interopRequireDefault(require("./months"));
var _days = _interopRequireDefault(require("./days"));
var _timePicker = _interopRequireDefault(require("./time-picker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const CalendarView = {
  year: /*#__PURE__*/_react.default.createElement(_years.default, null),
  month: /*#__PURE__*/_react.default.createElement(_months.default, null),
  day: /*#__PURE__*/_react.default.createElement(_days.default, null),
  time: /*#__PURE__*/_react.default.createElement(_timePicker.default, null)
};
const Calendar = () => {
  const {
    hideHeader,
    calendarView,
    style = {},
    className = '',
    styles = {},
    classNames = {},
    containerHeight,
    containerStyle: containerStyleProps,
    navigationPosition,
    isRTL
  } = (0, _calendarContext.useCalendarContext)();
  const containerStyle = (0, _react.useMemo)(() => ({
    ...containerStyleProps,
    height: containerHeight
  }), [containerHeight, containerStyleProps]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style,
    className: className,
    testID: "calendar"
  }, !hideHeader ? /*#__PURE__*/_react.default.createElement(_header.default, {
    navigationPosition: navigationPosition,
    styles: styles,
    classNames: classNames,
    isRTL: isRTL
  }) : null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: containerStyle
  }, CalendarView[calendarView]));
};
var _default = exports.default = Calendar;
//# sourceMappingURL=calendar.js.map