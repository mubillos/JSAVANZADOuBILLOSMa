class CuentaCorriente extends Cuenta {
  constructor(numero, saldo, descubierto) {
    super(numero, saldo);
    this.descubierto = descubierto;
  }
  debitar(monto){
    if(monto<=(this.saldo + this.descubierto))
        this.saldo-=monto;
  }
  toString(){
    return super.toString() +
           "<br/>descubierto=" + this.descubierto;
  }
}
