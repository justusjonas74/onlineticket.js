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
  } else {
     log(chalk.bgRed('No Data found.'));
  }
};

const onRejectedFn = (reason) => {
  log(chalk.red(reason));
};

const interpretBarcode = (file_path, onSuccess = onSuccessFn, onRejected= onRejectedFn) => {
  uic.readBarcode(file_path, onSuccess, onRejected);
};

module.exports = {interpretBarcode};
