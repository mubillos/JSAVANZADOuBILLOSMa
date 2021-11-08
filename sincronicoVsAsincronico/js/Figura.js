class Figura {
  constructor(nombre) {
      if (new.target === Figura) {
        throw new Error( 'esta es una clase abstracta' );
      }
    this.nombre=nombre;

  }
    calcularPerimetro(monto){
    throw new Error("Method 'calcularPerimetro' debe ser implementado.");
  }
  calcularSuperficie(monto){
    throw new Error("Method 'calcularSuperficie' debe ser implementado.");
  }
  toString(){
    return `<br/>nombre=${this.nombre}`;
  }


}
