const def = require('./lib/index.js').MathDef;

//Вычисление окружности по его радиусу
console.log(new def("TRAUS", 500))

//--RESULT:
//MathDef { time: 'TRAUS', time2: 3141.592653589793, time3: '' }

//Вычисление числа PI
console.log(new def("PI"))
//--RESULT:
/*MathDef {
  time: PI { pi: 3.141592653589793 },
  time2: undefined,
  time3: ''
}*/

//Курс биткоина
console.log(new def("K"))