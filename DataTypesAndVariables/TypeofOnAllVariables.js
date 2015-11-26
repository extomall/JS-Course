typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number';




typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string';



typeof true === 'boolean';
typeof false === 'boolean';



typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


typeof undefined === 'undefined';
typeof asdasd === 'undefined';


typeof {a:1} === 'object';


typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';



typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String("abc") === 'object';



typeof function(){} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';
