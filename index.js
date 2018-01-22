#!/usr/bin/env node

const program = require('commander');

const {interpretBarcode} = require('./lib/logic');

/* FIX: Should als work:
  - globally
  - with dirrectories
  - multiple Inputs
*/
//const file_path = process.argv[2];

program
  .version('0.1.0')
  .description('Onlineticket CLI Parser for UIC-918.3 barcodes');

program
  .command('readFile <file_path>')
  .alias('f')
  .description('parse a single (image) file')
  .action((file_path) => {
    interpretBarcode(file_path);
  });
program.parse(process.argv);

if (program.args.length === 0) program.help();
