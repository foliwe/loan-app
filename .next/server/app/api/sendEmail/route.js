"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/sendEmail/route";
exports.ids = ["app/api/sendEmail/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.ts&appDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.ts&appDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_foliw_CascadeProjects_loan_web_app_src_app_api_sendEmail_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/sendEmail/route.ts */ \"(rsc)/./src/app/api/sendEmail/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/sendEmail/route\",\n        pathname: \"/api/sendEmail\",\n        filename: \"route\",\n        bundlePath: \"app/api/sendEmail/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\foliw\\\\CascadeProjects\\\\loan-web-app\\\\src\\\\app\\\\api\\\\sendEmail\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_foliw_CascadeProjects_loan_web_app_src_app_api_sendEmail_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/sendEmail/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kRW1haWwlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlbmRFbWFpbCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlbmRFbWFpbCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNmb2xpdyU1Q0Nhc2NhZGVQcm9qZWN0cyU1Q2xvYW4td2ViLWFwcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZm9saXclNUNDYXNjYWRlUHJvamVjdHMlNUNsb2FuLXdlYi1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2FuLXdlYi1hcHAvPzk3ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcZm9saXdcXFxcQ2FzY2FkZVByb2plY3RzXFxcXGxvYW4td2ViLWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzZW5kRW1haWxcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmRFbWFpbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NlbmRFbWFpbFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2VuZEVtYWlsL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZm9saXdcXFxcQ2FzY2FkZVByb2plY3RzXFxcXGxvYW4td2ViLWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzZW5kRW1haWxcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvc2VuZEVtYWlsL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.ts&appDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/sendEmail/route.ts":
/*!****************************************!*\
  !*** ./src/app/api/sendEmail/route.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n\n\nasync function POST(request) {\n    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {\n        console.error(\"Missing email configuration\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Server configuration error\"\n        }, {\n            status: 500\n        });\n    }\n    try {\n        const formData = await request.json();\n        console.log(\"Received form data:\", formData);\n        // Validate form data\n        if (!formData.email || !formData.name) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Missing required fields\"\n            }, {\n                status: 400\n            });\n        }\n        // Create reusable transporter object using SMTP transport\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_1__.createTransport({\n            service: \"gmail\",\n            auth: {\n                user: process.env.EMAIL_USER,\n                pass: process.env.EMAIL_PASS\n            }\n        });\n        // Verify SMTP connection\n        try {\n            await transporter.verify();\n            console.log(\"SMTP connection verified\");\n        } catch (smtpError) {\n            console.error(\"SMTP verification failed:\", smtpError);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Email server connection failed\"\n            }, {\n                status: 500\n            });\n        }\n        // Send email to admin\n        const adminMailOptions = {\n            from: process.env.EMAIL_USER,\n            to: \"kifaruwabantu@gmail.com\",\n            subject: \"New Loan Application\",\n            html: `\n        <h2>New Loan Application</h2>\n        <p><strong>Name:</strong> ${formData.name}</p>\n        <p><strong>Email:</strong> ${formData.email}</p>\n        <p><strong>Phone:</strong> ${formData.phone}</p>\n        <p><strong>Loan Type:</strong> ${formData.loanType}</p>\n        <p><strong>Message:</strong> ${formData.message}</p>\n      `\n        };\n        try {\n            console.log(\"Sending admin email...\");\n            const adminInfo = await transporter.sendMail(adminMailOptions);\n            console.log(\"Admin email sent:\", adminInfo.response);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                success: true,\n                message: \"Application submitted successfully\"\n            });\n        } catch (emailError) {\n            console.error(\"Error sending email:\", emailError);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Failed to send email\",\n                details: emailError.message\n            }, {\n                status: 500\n            });\n        }\n    } catch (error) {\n        console.error(\"Server error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Server error\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kRW1haWwvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJDO0FBQ1A7QUFFN0IsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsSUFBSSxDQUFDRixRQUFRQyxHQUFHLENBQUNFLFVBQVUsRUFBRTtRQUN0REMsUUFBUUMsS0FBSyxDQUFDO1FBQ2QsT0FBT1Qsa0ZBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFBRUQsT0FBTztRQUE2QixHQUN0QztZQUFFRSxRQUFRO1FBQUk7SUFFbEI7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNVCxRQUFRTyxJQUFJO1FBQ25DRixRQUFRSyxHQUFHLENBQUMsdUJBQXVCRDtRQUVuQyxxQkFBcUI7UUFDckIsSUFBSSxDQUFDQSxTQUFTRSxLQUFLLElBQUksQ0FBQ0YsU0FBU0csSUFBSSxFQUFFO1lBQ3JDLE9BQU9mLGtGQUFZQSxDQUFDVSxJQUFJLENBQ3RCO2dCQUFFRCxPQUFPO1lBQTBCLEdBQ25DO2dCQUFFRSxRQUFRO1lBQUk7UUFFbEI7UUFFQSwwREFBMEQ7UUFDMUQsTUFBTUssY0FBY2YsdURBQTBCLENBQUM7WUFDN0NpQixTQUFTO1lBQ1RDLE1BQU07Z0JBQ0pDLE1BQU1oQixRQUFRQyxHQUFHLENBQUNDLFVBQVU7Z0JBQzVCZSxNQUFNakIsUUFBUUMsR0FBRyxDQUFDRSxVQUFVO1lBQzlCO1FBQ0Y7UUFFQSx5QkFBeUI7UUFDekIsSUFBSTtZQUNGLE1BQU1TLFlBQVlNLE1BQU07WUFDeEJkLFFBQVFLLEdBQUcsQ0FBQztRQUNkLEVBQUUsT0FBT1UsV0FBVztZQUNsQmYsUUFBUUMsS0FBSyxDQUFDLDZCQUE2QmM7WUFDM0MsT0FBT3ZCLGtGQUFZQSxDQUFDVSxJQUFJLENBQ3RCO2dCQUFFRCxPQUFPO1lBQWlDLEdBQzFDO2dCQUFFRSxRQUFRO1lBQUk7UUFFbEI7UUFFQSxzQkFBc0I7UUFDdEIsTUFBTWEsbUJBQW1CO1lBQ3ZCQyxNQUFNckIsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1lBQzVCb0IsSUFBSTtZQUNKQyxTQUFTO1lBQ1RDLE1BQU0sQ0FBQzs7a0NBRXFCLEVBQUVoQixTQUFTRyxJQUFJLENBQUM7bUNBQ2YsRUFBRUgsU0FBU0UsS0FBSyxDQUFDO21DQUNqQixFQUFFRixTQUFTaUIsS0FBSyxDQUFDO3VDQUNiLEVBQUVqQixTQUFTa0IsUUFBUSxDQUFDO3FDQUN0QixFQUFFbEIsU0FBU21CLE9BQU8sQ0FBQztNQUNsRCxDQUFDO1FBQ0g7UUFFQSxJQUFJO1lBQ0Z2QixRQUFRSyxHQUFHLENBQUM7WUFDWixNQUFNbUIsWUFBWSxNQUFNaEIsWUFBWWlCLFFBQVEsQ0FBQ1Q7WUFDN0NoQixRQUFRSyxHQUFHLENBQUMscUJBQXFCbUIsVUFBVUUsUUFBUTtZQUVuRCxPQUFPbEMsa0ZBQVlBLENBQUNVLElBQUksQ0FBQztnQkFDdkJ5QixTQUFTO2dCQUNUSixTQUFTO1lBQ1g7UUFDRixFQUFFLE9BQU9LLFlBQWlCO1lBQ3hCNUIsUUFBUUMsS0FBSyxDQUFDLHdCQUF3QjJCO1lBQ3RDLE9BQU9wQyxrRkFBWUEsQ0FBQ1UsSUFBSSxDQUN0QjtnQkFDRUQsT0FBTztnQkFDUDRCLFNBQVNELFdBQVdMLE9BQU87WUFDN0IsR0FDQTtnQkFBRXBCLFFBQVE7WUFBSTtRQUVsQjtJQUNGLEVBQUUsT0FBT0YsT0FBWTtRQUNuQkQsUUFBUUMsS0FBSyxDQUFDLGlCQUFpQkE7UUFDL0IsT0FBT1Qsa0ZBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFBRUQsT0FBTztZQUFnQjRCLFNBQVM1QixNQUFNc0IsT0FBTztRQUFDLEdBQ2hEO1lBQUVwQixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xvYW4td2ViLWFwcC8uL3NyYy9hcHAvYXBpL3NlbmRFbWFpbC9yb3V0ZS50cz9iYTI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBub2RlbWFpbGVyIGZyb20gJ25vZGVtYWlsZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGlmICghcHJvY2Vzcy5lbnYuRU1BSUxfVVNFUiB8fCAhcHJvY2Vzcy5lbnYuRU1BSUxfUEFTUykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01pc3NpbmcgZW1haWwgY29uZmlndXJhdGlvbicpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdTZXJ2ZXIgY29uZmlndXJhdGlvbiBlcnJvcicgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGZvcm0gZGF0YTonLCBmb3JtRGF0YSk7XG5cbiAgICAvLyBWYWxpZGF0ZSBmb3JtIGRhdGFcbiAgICBpZiAoIWZvcm1EYXRhLmVtYWlsIHx8ICFmb3JtRGF0YS5uYW1lKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcycgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSByZXVzYWJsZSB0cmFuc3BvcnRlciBvYmplY3QgdXNpbmcgU01UUCB0cmFuc3BvcnRcbiAgICBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgICAgIHNlcnZpY2U6ICdnbWFpbCcsXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LkVNQUlMX1VTRVIsXG4gICAgICAgIHBhc3M6IHByb2Nlc3MuZW52LkVNQUlMX1BBU1MsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gVmVyaWZ5IFNNVFAgY29ubmVjdGlvblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci52ZXJpZnkoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTTVRQIGNvbm5lY3Rpb24gdmVyaWZpZWQnKTtcbiAgICB9IGNhdGNoIChzbXRwRXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1NNVFAgdmVyaWZpY2F0aW9uIGZhaWxlZDonLCBzbXRwRXJyb3IpO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnRW1haWwgc2VydmVyIGNvbm5lY3Rpb24gZmFpbGVkJyB9LFxuICAgICAgICB7IHN0YXR1czogNTAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gU2VuZCBlbWFpbCB0byBhZG1pblxuICAgIGNvbnN0IGFkbWluTWFpbE9wdGlvbnMgPSB7XG4gICAgICBmcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9VU0VSLFxuICAgICAgdG86ICdraWZhcnV3YWJhbnR1QGdtYWlsLmNvbScsXG4gICAgICBzdWJqZWN0OiAnTmV3IExvYW4gQXBwbGljYXRpb24nLFxuICAgICAgaHRtbDogYFxuICAgICAgICA8aDI+TmV3IExvYW4gQXBwbGljYXRpb248L2gyPlxuICAgICAgICA8cD48c3Ryb25nPk5hbWU6PC9zdHJvbmc+ICR7Zm9ybURhdGEubmFtZX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICR7Zm9ybURhdGEuZW1haWx9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPlBob25lOjwvc3Ryb25nPiAke2Zvcm1EYXRhLnBob25lfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5Mb2FuIFR5cGU6PC9zdHJvbmc+ICR7Zm9ybURhdGEubG9hblR5cGV9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPk1lc3NhZ2U6PC9zdHJvbmc+ICR7Zm9ybURhdGEubWVzc2FnZX08L3A+XG4gICAgICBgLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgYWRtaW4gZW1haWwuLi4nKTtcbiAgICAgIGNvbnN0IGFkbWluSW5mbyA9IGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKGFkbWluTWFpbE9wdGlvbnMpO1xuICAgICAgY29uc29sZS5sb2coJ0FkbWluIGVtYWlsIHNlbnQ6JywgYWRtaW5JbmZvLnJlc3BvbnNlKTtcblxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIG1lc3NhZ2U6ICdBcHBsaWNhdGlvbiBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZW1haWxFcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZW5kaW5nIGVtYWlsOicsIGVtYWlsRXJyb3IpO1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IFxuICAgICAgICAgIGVycm9yOiAnRmFpbGVkIHRvIHNlbmQgZW1haWwnLFxuICAgICAgICAgIGRldGFpbHM6IGVtYWlsRXJyb3IubWVzc2FnZVxuICAgICAgICB9LFxuICAgICAgICB7IHN0YXR1czogNTAwIH1cbiAgICAgICk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignU2VydmVyIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnU2VydmVyIGVycm9yJywgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm5vZGVtYWlsZXIiLCJQT1NUIiwicmVxdWVzdCIsInByb2Nlc3MiLCJlbnYiLCJFTUFJTF9VU0VSIiwiRU1BSUxfUEFTUyIsImNvbnNvbGUiLCJlcnJvciIsImpzb24iLCJzdGF0dXMiLCJmb3JtRGF0YSIsImxvZyIsImVtYWlsIiwibmFtZSIsInRyYW5zcG9ydGVyIiwiY3JlYXRlVHJhbnNwb3J0Iiwic2VydmljZSIsImF1dGgiLCJ1c2VyIiwicGFzcyIsInZlcmlmeSIsInNtdHBFcnJvciIsImFkbWluTWFpbE9wdGlvbnMiLCJmcm9tIiwidG8iLCJzdWJqZWN0IiwiaHRtbCIsInBob25lIiwibG9hblR5cGUiLCJtZXNzYWdlIiwiYWRtaW5JbmZvIiwic2VuZE1haWwiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJlbWFpbEVycm9yIiwiZGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/sendEmail/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FsendEmail%2Froute&page=%2Fapi%2FsendEmail%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FsendEmail%2Froute.ts&appDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cfoliw%5CCascadeProjects%5Cloan-web-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();