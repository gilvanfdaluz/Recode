class Pessoa{
  constructor(nome){
    this.nome = nome;
  }

  falar(frase){
    console.log(this.nome + " disse: "  +  frase)
  }
}

class aluno extends Pessoa{
  estudar(disciplina){
    console.log(this.nome + " estudo: " + disciplina);
  }
}

class profesor extends Pessoa{
  ensinar(disciplina){
    console.log(this.nome + " ensino: " + disciplina);
  }
}


var p1 = new profesor("Francisco");
p1.falar("Oi, tudo bem?");
p1.falar("Como Vai?");
p1.ensinar("Biologia");