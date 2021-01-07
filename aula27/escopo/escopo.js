function funcao4() {
  console.log(d);
}

var a = 1;

function funcao1() {
  console.log(a);
}

funcao1();//log 1, pq o 'a' foi declarado no escopo exterior

function funcao2() {
  console.log(b);
}

funcao2();//log undefined
//Devido ao hosting ele esta acessível porem não foi inicializado logo é undefined

var b = 2;
let c = 3;

funcao3();//sem erros devido ao hosting da função;
//log 3 pq?? Pq esta declaro no escopo exterior, escopo de arquivo
function funcao3() {
  console.log(c);
}

let d = 4;

/*
 * log 4, valor de d, pq apesar de 'd' ter sido declarado como let
 */
funcao4();

funcao5();
funcao6();
funcao7();
funcao8();
funcao9();
funcao10();
funcao11();

function funcao5() {
  {
    {
      var e = 5;
    }
  }

  console.log(e);
}

function funcao6() {
  if (true) {
    let f = 6;
    // console.log(f); fix
  }

  console.log(f);
  var g = 7;
}

function funcao7() {
  console.log(g);
}

let h = 8;

function funcao8() {
  console.log(h);
}

function funcao9() {
  for (var i = 0; i <= 9; i++) {}

  console.log(i);
}

function funcao10() {
  for (let j = 0; j <= 10; j++) {}

  console.log(i);
}

function funcao11() {
  console.log(k);

  let k = 11;
}
