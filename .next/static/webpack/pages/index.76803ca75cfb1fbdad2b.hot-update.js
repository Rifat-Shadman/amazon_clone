"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/Components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./src/Components/Product.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/home/zodgin/ReactProjects/amazon-app/src/Components/ProductFeed.js\",\n    _this = undefined;\n\n\n\n\n\nvar ProductFeed = function ProductFeed(_ref) {\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image,\n          rating = _ref2.rating;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {\n        id: id,\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image,\n        rating: rating\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 21\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n      className: \"md:col-span-full\",\n      src: \"https://links.papareact.com/dyz\",\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"col-span-full\",\n      children: products.slice(4, 5).map(function (_ref3) {\n        var id = _ref3.id,\n            title = _ref3.title,\n            price = _ref3.price,\n            description = _ref3.description,\n            category = _ref3.category,\n            image = _ref3.image,\n            rating = _ref3.rating;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {\n          id: id,\n          title: title,\n          price: price,\n          description: description,\n          category: category,\n          image: image,\n          rating: rating\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBZ0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFDaEMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsc0dBQWY7QUFBQSxlQUdRQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QjtBQUFBLFVBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFVBQU1DLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFVBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFVBQW9CQyxXQUFwQixTQUFvQkEsV0FBcEI7QUFBQSxVQUFpQ0MsUUFBakMsU0FBaUNBLFFBQWpDO0FBQUEsVUFBMkNDLEtBQTNDLFNBQTJDQSxLQUEzQztBQUFBLFVBQWtEQyxNQUFsRCxTQUFrREEsTUFBbEQ7QUFBQSwwQkFDcEIsOERBQUMsNkNBQUQ7QUFFSSxVQUFFLEVBQUVOLEVBRlI7QUFHSSxhQUFLLEVBQUVDLEtBSFg7QUFJSSxhQUFLLEVBQUVDLEtBSlg7QUFLSSxtQkFBVyxFQUFFQyxXQUxqQjtBQU1JLGdCQUFRLEVBQUVDLFFBTmQ7QUFPSSxhQUFLLEVBQUlDLEtBUGI7QUFRSSxjQUFNLEVBQUlDO0FBUmQsU0FDU04sRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9CO0FBQUEsS0FBeEIsQ0FIUixlQXFCSTtBQUNJLGVBQVMsRUFBQyxrQkFEZDtBQUVJLFNBQUcsRUFBQyxpQ0FGUjtBQUdJLFNBQUcsRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkosZUEyQkk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUVJSCxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QjtBQUFBLFlBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFlBQU1DLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFlBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFlBQW9CQyxXQUFwQixTQUFvQkEsV0FBcEI7QUFBQSxZQUFpQ0MsUUFBakMsU0FBaUNBLFFBQWpDO0FBQUEsWUFBMkNDLEtBQTNDLFNBQTJDQSxLQUEzQztBQUFBLFlBQWtEQyxNQUFsRCxTQUFrREEsTUFBbEQ7QUFBQSw0QkFDcEIsOERBQUMsNkNBQUQ7QUFFSSxZQUFFLEVBQUVOLEVBRlI7QUFHSSxlQUFLLEVBQUVDLEtBSFg7QUFJSSxlQUFLLEVBQUVDLEtBSlg7QUFLSSxxQkFBVyxFQUFFQyxXQUxqQjtBQU1JLGtCQUFRLEVBQUVDLFFBTmQ7QUFPSSxlQUFLLEVBQUlDLEtBUGI7QUFRSSxnQkFBTSxFQUFJQztBQVJkLFdBQ1NOLEVBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEb0I7QUFBQSxPQUF4QjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFrREgsQ0FuREQ7O0tBQU1KO0FBcUROLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1Byb2R1Y3RGZWVkLmpzPzYzYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XG5cbmNvbnN0IFByb2R1Y3RGZWVkID0gKHtwcm9kdWN0c30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBncmlkLWNvbHMtMSAgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLnNsaWNlKDAsNCkubWFwKCh7aWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSwgcmF0aW5nfSk9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlID0ge2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5nID0ge3JhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLWZ1bGxcIiBcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCIgXG4gICAgICAgICAgICAgICAgYWx0PVwiXCIgXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLWZ1bGxcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5zbGljZSg0LDUpLm1hcCgoe2lkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UsIHJhdGluZ30pPT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3QgXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJpY2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSA9IHtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhdGluZyA9IHtyYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdCIsIlByb2R1Y3RGZWVkIiwicHJvZHVjdHMiLCJzbGljZSIsIm1hcCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInJhdGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/ProductFeed.js\n");

/***/ })

});