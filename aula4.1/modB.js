
// import * as A from './nodes_internos/modA.js'
// A.baz
// A.foo()

// import modA from './nodes_internos/modA'; //importando tudo do node/ modulo/ lib/ biblioteca
// modA.baz
// modA.foo()

// import {foo, baz} from './modA'; // especifico o que desejo importar do node
// foo()
// console.log(baz)

import { baz, foo } from './nodes_internos/modA.js';

console.log(baz)
foo()
