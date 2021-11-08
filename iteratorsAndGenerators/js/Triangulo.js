class Triangulo extends Figura {
  constructor(nombre,base, altura) {
    if (base<=0 ) {
      throw new Error( 'la base del rectangulo debe ser mayor a Cero' );
    }
    if (altura<=0 ) {
      throw new Error( 'la altura del rectangulo debe ser mayor a Cero' );
    }

      super(nombre);
    this.base=base;
    this.altura=altura;

  }
   calcularPerimetro(){
     this.perimetro= (this.base) +(this.altura)+ Math.sqrt((this.base*this.base)+(this.altura*this.altura));
    return (this.perimetro );
  }
  calcularSuperficie(){
    this.superficie= ((this.base *this.altura)/2)
    return (this.superficie);
  }
  toString(){
    return `<br/>nombre=${this.nombre}
            <br/>Perimetro=${this.perimetro}
            <br/>Superficie=${this.superficie} `;
  }


}
