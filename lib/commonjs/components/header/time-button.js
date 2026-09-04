"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _reactNative = require("react-native");
var _calendarContext = require("../../calendar-context");
var _utils = require("../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const TimeButton = () => {
  const {
    currentDate,
    date,
    calendarView,
    setCalendarView,
    styles,
    classNames,
    numerals = 'latn',
    use12Hours
  } = (0, _calendarContext.useCalendarContext)();
  const {
    hour,
    hour12,
    minute,
    period
  } = (0, _react.useMemo)(() => (0, _utils.getParsedDate)(date || currentDate), [date, currentDate]);
  const labelText = (0, _react.useMemo)(() => {
    const hourValue = use12Hours ? hour12 : hour;
    const hourLabel = hourValue < 10 ? `${(0, _utils.formatNumber)(0, numerals)}${(0, _utils.formatNumber)(hourValue, numerals)}` : `${(0, _utils.formatNumber)(hourValue, numerals)}`;
    const minuteLabel = minute < 10 ? `${(0, _utils.formatNumber)(0, numerals)}${(0, _utils.formatNumber)(minute, numerals)}` : `${(0, _utils.formatNumber)(minute, numerals)}`;
    return `${hourLabel}:${minuteLabel} ${use12Hours ? period : ''}`.trim();
  }, [numerals, hour, hour12, minute, use12Hours, period]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    onPress: () => setCalendarView(calendarView === 'time' ? 'day' : 'time'),
    accessibilityRole: "button",
    accessibilityLabel: (0, _dayjs.default)(date || currentDate).format('HH:mm')
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles === null || styles === void 0 ? void 0 : styles.time_selector,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.time_selector
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles === null || styles === void 0 ? void 0 : styles.time_selector_label,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.time_selector_label
  }, labelText)));
};
exports.TimeButton = TimeButton;
//# sourceMappingURL=time-button.js.map