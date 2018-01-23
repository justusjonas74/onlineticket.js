#!/usr/bin/env node

const program = require('commander');
var clear       = require('clear');
var figlet      = require('figlet');
const chalk = require('chalk');


const {interpretBarcode} = require('./lib/logic');

/* FIX: Should als work:
  - globally (DONE!)
  - with dirrectories
  - multiple Inputs
*/
//const file_path = process.argv[2];

program
  //.version('0.1.0')
  .version(require('./package.json').version,  '-v, --version')
  .description('Onlineticket CLI Parser for UIC-918.3 barcodes');

program
  .usage('[options] <file ...>')
  .option('-i, --image', 'if file is an image (png,jpeg,...)');

// program
//   .command('image <file_path>')
//   .alias('i')
//   .description('parse a single (image) file')
//   .action((file_path) => {
//     interpretBarcode(file_path);
//   });

program.parse(process.argv);


if (program.args.length > 0) {
  // ONE OR MORE ARGUMENTS GIVEN
  if (program.image) {
    //console.log(program.args);
    drawIntro();
    program.args.forEach((file_path) => interpretBarcode(file_path));
  } else {
    // DON'T KNOW HOW TO HANDLE THAT FILE:
    err('No file type argument (--image, --pdf, ...) passed.');
//    program.help();
  }
} else {
  // NO ARGUMENTS GIVEN
  //console.error(chalk.red('\n  ERROR: No arguments given.\n'));
  err('No arguments given.');
  program.help();
}

// FIXING: INVALID ARGUMENTS
// program.on('*', function() {
//   drawIntro();
//   program.help();
// });


function drawIntro () {
  clear();
  const repo_name  = capitalizeFirstLetter(require('./package.json').name) + '.js';
  console.log(
    chalk.yellow(
      figlet.textSync(repo_name, { font: 'Standard', horizontalLayout: 'full' })
    )
  );
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function err(string) {
  console.error(chalk.red(`\n  ERROR: ${string}\n`));
}
