"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _calendarContext = require("../../calendar-context");
var _monthButton = _interopRequireDefault(require("./month-button"));
var _yearButton = _interopRequireDefault(require("./year-button"));
var _timeButton = require("./time-button");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Selectors = ({
  position
}) => {
  const {
    mode,
    calendarView,
    timePicker,
    showMonthSelector
  } = (0, _calendarContext.useCalendarContext)();
  const showMonth = showMonthSelector === true || showMonthSelector !== false && calendarView !== 'year';
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [defaultStyles.container,
    // eslint-disable-next-line react-native/no-inline-styles
    position === 'around' ? {
      justifyContent: 'space-evenly'
    } : {
      justifyContent: 'space-between',
      flexDirection: position === 'left' ? 'row-reverse' : 'row'
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: defaultStyles.monthAndYear
  }, showMonth && /*#__PURE__*/_react.default.createElement(_monthButton.default, null), /*#__PURE__*/_react.default.createElement(_yearButton.default, null)), timePicker && mode === 'single' && calendarView !== 'year' ? /*#__PURE__*/_react.default.createElement(_timeButton.TimeButton, null) : null);
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Selectors);
const defaultStyles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  monthAndYear: {
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
//# sourceMappingURL=selectors.js.map