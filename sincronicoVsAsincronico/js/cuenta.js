class  Cuenta {
  constructor(numero, saldo) {
    this.numero = numero;
    this.saldo = saldo;
  }
  acreditar(monto){
    this.saldo+=monto;
  }
  debitar(monto){
    this.saldo-=monto;
  }
  toString(){
    return `<br/>numero=  ${this.numero}
           <br/>saldo=  ${this.saldo}`;
  }
}
