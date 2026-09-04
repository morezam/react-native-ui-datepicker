"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _prevButton = _interopRequireDefault(require("./prev-button"));
var _nextButton = _interopRequireDefault(require("./next-button"));
var _selectors = _interopRequireDefault(require("./selectors"));
var _lodash = require("lodash");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const createDefaultStyles = isRTL => _reactNative.StyleSheet.create({
  headerContainer: {
    paddingVertical: 3
  },
  container: {
    padding: 5,
    gap: 20,
    flexDirection: isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  navigation: {
    flexDirection: isRTL ? 'row-reverse' : 'row'
  }
});
const NavigationButtons = ({
  styles,
  classNames,
  isRTL
}) => {
  const style = (0, _react.useMemo)(() => createDefaultStyles(isRTL), [isRTL]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.navigation
  }, /*#__PURE__*/_react.default.createElement(_prevButton.default, {
    style: styles === null || styles === void 0 ? void 0 : styles.button_prev,
    imageStyle: styles === null || styles === void 0 ? void 0 : styles.button_prev_image,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.button_prev,
    imageClassName: classNames === null || classNames === void 0 ? void 0 : classNames.button_prev_image
  }), /*#__PURE__*/_react.default.createElement(_nextButton.default, {
    style: styles === null || styles === void 0 ? void 0 : styles.button_next,
    imageStyle: styles === null || styles === void 0 ? void 0 : styles.button_next_image,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.button_next,
    imageClassName: classNames === null || classNames === void 0 ? void 0 : classNames.button_next_image
  }));
};
const Header = ({
  navigationPosition = 'around',
  styles = {},
  classNames = {},
  isRTL
}) => {
  const style = (0, _react.useMemo)(() => createDefaultStyles(isRTL), [isRTL]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style.headerContainer, styles === null || styles === void 0 ? void 0 : styles.header],
    className: classNames === null || classNames === void 0 ? void 0 : classNames.header
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.container
  }, navigationPosition === 'left' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(NavigationButtons, {
    styles: styles,
    classNames: classNames,
    isRTL: isRTL
  }), /*#__PURE__*/_react.default.createElement(_selectors.default, {
    position: "left"
  })) : navigationPosition === 'right' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_selectors.default, {
    position: "right"
  }), /*#__PURE__*/_react.default.createElement(NavigationButtons, {
    styles: styles,
    classNames: classNames,
    isRTL: isRTL
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_prevButton.default, {
    style: styles === null || styles === void 0 ? void 0 : styles.button_prev,
    imageStyle: styles === null || styles === void 0 ? void 0 : styles.button_prev_image,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.button_prev,
    imageClassName: classNames === null || classNames === void 0 ? void 0 : classNames.button_prev_image
  }), /*#__PURE__*/_react.default.createElement(_selectors.default, {
    position: "around"
  }), /*#__PURE__*/_react.default.createElement(_nextButton.default, {
    style: styles === null || styles === void 0 ? void 0 : styles.button_next,
    imageStyle: styles === null || styles === void 0 ? void 0 : styles.button_next_image,
    className: classNames === null || classNames === void 0 ? void 0 : classNames.button_next,
    imageClassName: classNames === null || classNames === void 0 ? void 0 : classNames.button_next_image
  }))));
};
const customComparator = (prev, next) => {
  const areEqual = prev.PrevIcon === next.PrevIcon && prev.NextIcon === next.NextIcon && prev.navigationPosition === next.navigationPosition && prev.isRTL === next.isRTL && (0, _lodash.isEqual)(prev.styles, next.styles) && (0, _lodash.isEqual)(prev.classNames, next.classNames);
  return areEqual;
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Header, customComparator);
//# sourceMappingURL=index.js.map