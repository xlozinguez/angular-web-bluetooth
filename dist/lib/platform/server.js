import { Injectable } from '@angular/core';
var ServerWebBluetooth = (function () {
    function ServerWebBluetooth() {
    }
    ServerWebBluetooth.instance = function () {
        // mocked object for now
        return {};
    };
    return ServerWebBluetooth;
}());
export { ServerWebBluetooth };
ServerWebBluetooth.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ServerWebBluetooth.ctorParameters = function () { return []; };
