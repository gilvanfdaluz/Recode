class Pessoa{
  constructor(nome){
    this.nome = nome;
  }

  falar(frase){
    console.log(this.nome + " disse: "  +  frase)
  }

}

var p1 = new Pessoa("Francisco");
p1.falar("Oi, tudo bem?");
p1.falar("Tudo bem?");