const uic = require('uic-918-3');
const chalk = require('chalk');
const treeify = require('treeify');

const log = console.log;

//handle barcode data on success
const onSuccessFn = (data) => {
  if (data && data.ticketContainers.length > 0) {
    data.ticketContainers.forEach((ct) =>{
        log(chalk.bold.bgGreen.black(ct.id + '-Container'));
        log(chalk.green(treeify.asTree(ct.container_data, true)));
        log('\n');
    });
    if (data.isSignatureValid ===  true | false) {
      log(chalk.bold.bgGreen.black('Signature'));
      log(chalk.green(treeify.asTree({isSignatureValid: data.isSignatureValid}, true)));
      log('\n');
      
    }
  } else {
     log(chalk.bgRed('No Data found.'));
  }
};

const onRejectedFn = (reason) => {
  log(chalk.red(reason));
};

const interpretBarcode = (file_path, opts = {}, onSuccess = onSuccessFn, onRejected= onRejectedFn) => {
  uic.readBarcode(file_path, opts).then(onSuccess).catch(onRejected);
};

module.exports = {interpretBarcode};
