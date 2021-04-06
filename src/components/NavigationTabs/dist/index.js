"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.AddRemoveTabs = exports.FindPoolTabs = exports.Nav = exports.SwapPoolTabs = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var polished_1 = require("polished");
var react_router_dom_1 = require("react-router-dom");
var react_feather_1 = require("react-feather");
var Row_1 = require("components/Row");
var QuestionHelper_1 = require("components/QuestionHelper");
var TranslatedText_1 = require("components/TranslatedText");
var Tabs = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n  background: #000 !important;\n"], ["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n  background: #000 !important;\n"])));
var activeClassName = 'ACTIVE';
var StyledAbsoluteLink = styled_components_1["default"].a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, activeClassName, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.colors.text);
});
var StyledNavLink = styled_components_1["default"](react_router_dom_1.NavLink).attrs({
    activeClassName: activeClassName
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, activeClassName, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.colors.text);
});
var ActiveText = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-weight: 500;\n  font-size: 20px;\n"], ["\n  font-weight: 500;\n  font-size: 20px;\n"])));
var StyledArrowLeft = styled_components_1["default"](react_feather_1.ArrowLeft)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
function SwapPoolTabs(_a) {
    var active = _a.active;
    return (react_1["default"].createElement(Tabs, { style: { marginBottom: '20px' } },
        react_1["default"].createElement(StyledNavLink, { id: "swap-nav-link", to: "/swap", isActive: function () { return active === 'swap'; } },
            react_1["default"].createElement(TranslatedText_1["default"], { translationId: 8 }, "Swap")),
        react_1["default"].createElement(StyledNavLink, { id: "pool-nav-link", to: "/pool", isActive: function () { return active === 'pool'; } },
            react_1["default"].createElement(TranslatedText_1["default"], { translationId: 74 }, "Pool")),
        react_1["default"].createElement(StyledAbsoluteLink, { id: "pool-nav-link", target: "_blank", href: "https://www.binance.org/en/panama" }, "Bridge")));
}
exports.SwapPoolTabs = SwapPoolTabs;
exports.Nav = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b;
    return (react_1["default"].createElement(uikit_1.ButtonMenu, { activeIndex: activeIndex, size: "sm", variant: "subtle" },
        react_1["default"].createElement(uikit_1.ButtonMenuItem, { id: "swap-nav-link", to: "/swap", as: react_router_dom_1.Link },
            react_1["default"].createElement(TranslatedText_1["default"], { translationId: 8 }, "Swap")),
        react_1["default"].createElement(uikit_1.ButtonMenuItem, { id: "pool-nav-link", to: "/pool", as: react_router_dom_1.Link },
            react_1["default"].createElement(TranslatedText_1["default"], { translationId: 74 }, "Liquidity")),
        react_1["default"].createElement(uikit_1.ButtonMenuItem, { id: "pool-nav-link", as: "a", href: "https://www.binance.org/en/panama", target: "_blank", rel: "noreferrer noopener" }, "Bridge")));
};
function FindPoolTabs() {
    return (react_1["default"].createElement(Tabs, null,
        react_1["default"].createElement(Row_1.RowBetween, { style: { padding: '1rem' } },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/pool" },
                react_1["default"].createElement(StyledArrowLeft, null)),
            react_1["default"].createElement(ActiveText, null, "Import Pool"),
            react_1["default"].createElement(QuestionHelper_1["default"], { text: "Use this tool to find pairs that don't automatically appear in the interface." }))));
}
exports.FindPoolTabs = FindPoolTabs;
function AddRemoveTabs(_a) {
    var adding = _a.adding;
    return (react_1["default"].createElement(Tabs, null,
        react_1["default"].createElement(Row_1.RowBetween, { style: { padding: '1rem' } },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "/pool" },
                react_1["default"].createElement(StyledArrowLeft, null)),
            react_1["default"].createElement(ActiveText, null,
                adding ? 'Add' : 'Remove',
                " Liquidity"),
            react_1["default"].createElement(QuestionHelper_1["default"], { text: adding
                    ? 'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
                    : 'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.' }))));
}
exports.AddRemoveTabs = AddRemoveTabs;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
