"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _reactNative = require("react-native");
var _calendarContext = require("../../calendar-context");
var _utils = require("../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const MonthButton = () => {
  const {
    currentDate,
    calendarView,
    setCalendarView,
    calendar = 'gregory',
    locale,
    styles,
    classNames,
    disableMonthPicker,
    monthCaptionFormat,
    components,
    fontFamily
  } = (0, _calendarContext.useCalendarContext)();
  const currentMonthText = (0, _dayjs.default)(currentDate).calendar(calendar).locale(calendar === 'jalali' && !(0, _utils.isValidJalaliLocale)(locale) ? 'en' : locale).format(monthCaptionFormat === 'full' ? 'MMMM' : 'MMM');
  const handlePress = () => setCalendarView(calendarView === 'month' ? 'day' : 'month');
  if (components !== null && components !== void 0 && components.MonthSelector) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, components.MonthSelector({
      text: currentMonthText,
      isOpen: calendarView === 'month',
      onPress: disableMonthPicker ? () => {} : handlePress
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, {
    disabled: disableMonthPicker,
    onPress: handlePress,
    testID: "btn-month",
    accessibilityRole: "button",
    accessibilityLabel: currentMonthText
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles === null || styles === void 0 ? void 0 : styles.month_selector,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.month_selector
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles === null || styles === void 0 ? void 0 : styles.month_selector_label, fontFamily ? {
      fontFamily
    } : null],
    className: classNames === null || classNames === void 0 ? void 0 : classNames.month_selector_label
  }, currentMonthText)));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(MonthButton);
//# sourceMappingURL=month-button.js.map