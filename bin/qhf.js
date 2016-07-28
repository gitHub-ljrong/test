#! /usr/bin/env node


var program = require('commander');
var caretePage = require('../lib/create.js');

program .version(require('../package.json').version) 
        .usage('[options] [project name]') 
        .option('-C, --createPage <str | array>', 'create a new page!')
        .parse(process.argv); 

var pname = program.args[0]
if (!pname) {
    program.help();
    return;
}

caretePage(pname);