"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uikit_1 = require("@pancakeswap-libs/uikit");
var hooks_1 = require("state/user/hooks");
var QuestionHelper_1 = require("../QuestionHelper");
var TranslatedText_1 = require("../TranslatedText");
var StyledTransactionDeadlineSetting = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 16px;\n"], ["\n  margin-bottom: 16px;\n"])));
var Label = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"], ["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"])));
var Field = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n\n  & > ", " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"], ["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n\n  & > ", " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"])), uikit_1.Input, uikit_1.Text);
var TransactionDeadlineSetting = function () {
    var _a = hooks_1.useUserDeadline(), deadline = _a[0], setDeadline = _a[1];
    var _b = react_1.useState(deadline / 60), value = _b[0], setValue = _b[1]; // deadline in minutes
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    var handleChange = function (evt) {
        var inputValue = evt.target.value;
        setValue(parseInt(inputValue, 10));
    };
    // Updates local storage if value is valid
    react_1.useEffect(function () {
        try {
            var rawValue = value * 60;
            if (!Number.isNaN(rawValue) && rawValue > 0) {
                setDeadline(rawValue);
                setError(null);
            }
            else {
                setError('Enter a valid deadline');
            }
        }
        catch (_a) {
            setError('Enter a valid deadline');
        }
    }, [value, setError, setDeadline]);
    return (react_1["default"].createElement(StyledTransactionDeadlineSetting, null,
        react_1["default"].createElement(Label, null,
            react_1["default"].createElement(uikit_1.Text, { style: { fontWeight: 600 } },
                react_1["default"].createElement(TranslatedText_1["default"], { translationId: 90 }, "Transaction deadline")),
            react_1["default"].createElement(QuestionHelper_1["default"], { text: "Your transaction will revert if it is pending for more than this long." })),
        react_1["default"].createElement(Field, null,
            react_1["default"].createElement(uikit_1.Input, { type: "number", step: "1", min: "1", value: value, onChange: handleChange, className: "txnsip", placeholder: "Enter" }),
            react_1["default"].createElement(uikit_1.Text, { ml: "10px" }, "Minutes")),
        error && (react_1["default"].createElement(uikit_1.Text, { mt: "8px", color: "failure" }, error))));
};
exports["default"] = TransactionDeadlineSetting;
var templateObject_1, templateObject_2, templateObject_3;
