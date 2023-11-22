abstract class LavoratoreAutonomo {
  codredd: number;
  redditoannuolordo: number;
  tasseinpsPercentuale: number;
  tasseirpefPercentuale: number;

  constructor(codredd: number, redditoannuolordo: number, tasseinpsPercentuale: number, tasseirpefPercentuale: number) {
    this.codredd = codredd;
    this.redditoannuolordo = redditoannuolordo;
    this.tasseinpsPercentuale = tasseinpsPercentuale;
    this.tasseirpefPercentuale = tasseirpefPercentuale;
  }

  abstract getUtileTasse(): number;

  abstract getTasseInps(): number;

  abstract getTasseIrpef(): number;
}

class LavoratoreAutonomoConcreto extends LavoratoreAutonomo {
  constructor(codredd: number, redditoannuolordo: number, tasseinpsPercentuale: number, tasseirpefPercentuale: number) {
    super(codredd, redditoannuolordo, tasseinpsPercentuale, tasseirpefPercentuale);
  }

  getUtileTasse(): number {
    return this.redditoannuolordo - this.getTasseInps() - this.getTasseIrpef();
  }

  getTasseInps(): number {
    return (this.redditoannuolordo * this.tasseinpsPercentuale) / 100;
  }

  getTasseIrpef(): number {
    return (this.redditoannuolordo * this.tasseirpefPercentuale) / 100;
  }
}

const lavoratore1 = new LavoratoreAutonomoConcreto(1, 50000, 10, 20);
console.log(`Codice Reddito: ${lavoratore1.codredd}`);
console.log(`Reddito Annuo Lordo: ${lavoratore1.redditoannuolordo}`);
console.log(`Tasse INPS: ${lavoratore1.getTasseInps()}`);
console.log(`Tasse IRPEF: ${lavoratore1.getTasseIrpef()}`);
console.log(`Utile Tasse: ${lavoratore1.getUtileTasse()}`);
