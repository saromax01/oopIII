var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(codredd, redditoannuolordo, tasseinpsPercentuale, tasseirpefPercentuale) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinpsPercentuale = tasseinpsPercentuale;
        this.tasseirpefPercentuale = tasseirpefPercentuale;
    }
    return LavoratoreAutonomo;
}());
var LavoratoreAutonomoConcreto = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoConcreto, _super);
    function LavoratoreAutonomoConcreto(codredd, redditoannuolordo, tasseinpsPercentuale, tasseirpefPercentuale) {
        return _super.call(this, codredd, redditoannuolordo, tasseinpsPercentuale, tasseirpefPercentuale) || this;
    }
    LavoratoreAutonomoConcreto.prototype.getUtileTasse = function () {
        return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
    };
    LavoratoreAutonomoConcreto.prototype.getTasseInps = function () {
        return (this.redditoannuolordo * this.tasseinpsPercentuale) / 100;
    };
    LavoratoreAutonomoConcreto.prototype.getTasseIrpef = function () {
        return (this.redditoannuolordo * this.tasseirpefPercentuale) / 100;
    };
    return LavoratoreAutonomoConcreto;
}(LavoratoreAutonomo));
var lavoratore1 = new LavoratoreAutonomoConcreto(1, 50000, 10, 20);
console.log("Codice Reddito: ".concat(lavoratore1.codredd));
console.log("Reddito Annuo Lordo: ".concat(lavoratore1.redditoannuolordo));
console.log("Tasse INPS: ".concat(lavoratore1.getTasseInps()));
console.log("Tasse IRPEF: ".concat(lavoratore1.getTasseIrpef()));
console.log("Utile Tasse: ".concat(lavoratore1.getUtileTasse()));
