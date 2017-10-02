"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerData = (function () {
    function CustomerData(
        // public fname: string,
        // public lname: string
        fn, ln, vn, mn, add, pd, rd) {
        if (vn === void 0) { vn = ''; }
        if (mn === void 0) { mn = null; }
        if (add === void 0) { add = ''; }
        if (pd === void 0) { pd = null; }
        if (rd === void 0) { rd = null; }
        this.fn = fn;
        this.ln = ln;
        this.vn = vn;
        this.mn = mn;
        this.add = add;
        this.pd = pd;
        this.rd = rd;
    }
    return CustomerData;
}());
exports.CustomerData = CustomerData;
//# sourceMappingURL=CustomerData.js.map