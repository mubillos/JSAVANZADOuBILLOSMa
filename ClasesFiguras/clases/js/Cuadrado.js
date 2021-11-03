class Cuadrado extends Figura {
  constructor(nombre,lado) {
    if (lado<=0 ) {
      throw new Error( 'El lado del cuadrado debe ser mayor a Cero' );
    }
      super(nombre);
    this.lado=lado;

  }
   calcularPerimetro(){
     this.perimetro=this.lado*4;
    return (this.perimetro);
  }
  calcularSuperficie(){
    this.superficie=this.lado *this.lado;
    return (this.superficie);
  }
  toString(){
    this.perimetro=this.calcularPerimetro();
    this.superficie=this.calcularSuperficie();
    return `<br/>nombre=${this.nombre}
            <br/>Perimetro=${this.perimetro}
            <br/>Superficie=${this.superficie}`;
  }


}
