"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class used as a "narrowing" interface that exposes a minimal logger
// Other members of the actual implementation are invisible
var MinimalLogger = (function () {
    function MinimalLogger() {
    }
    return MinimalLogger;
}());
exports.MinimalLogger = MinimalLogger;
/*
// Transpiles to:
  var MinimalLogger = (function () {
    function MinimalLogger() {}
    return MinimalLogger;
  }());
  exports("MinimalLogger", MinimalLogger);
*/
// See http://stackoverflow.com/questions/43154832/unexpected-token-export-in-angular-app-with-systemjs-and-typescript/
exports._ = 0;
//# sourceMappingURL=minimal-logger.service.js.map