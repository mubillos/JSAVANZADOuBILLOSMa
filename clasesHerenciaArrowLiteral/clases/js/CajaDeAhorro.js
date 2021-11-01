class CajaDeAhorro extends Cuenta {
  constructor(numero, saldo , interes) {
    super(numero, saldo);
    this.interes = interes;
  }
  debitar(monto){
    if(monto<=this.saldo)
      super.debitar(monto);
  }
  toString(){
    return super.toString() +
          "<br/>interes=" +
          this.interes;
  }
}
