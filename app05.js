var argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        type: 'number'
    })
    .check()
    .argv
;



console.clear();

console.log(process.argv);
console.log(argv);

console.log('base : yargs', argv.b);




