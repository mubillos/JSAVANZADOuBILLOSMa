class Circulo extends Figura {
  constructor(nombre,radio) {
    if (radio<=0 ) {
      throw new Error( 'El radio del circulo debe ser mayor a Cero' );
    }
      super(nombre);
    this.radio=radio;

  }
   calcularPerimetro(){
     this.perimetro=this.radio*2*Math.PI;
    return (this.perimetro);
  }
  calcularSuperficie(){
    this.superficie=(this.radio*this.radio)*Math.PI;
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
