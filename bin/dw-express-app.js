#!/usr/bin/env node

/**
 * Created by cendawei on 2017/5/3.
 */

var program = require('commander');
var download = require('download-git-repo');
var ora = require('ora');

program
    .version('1.0.0')
    .option('-d, --dir [dir]', 'The destination directory to generate')
    .parse(process.argv);

if(program.dir === true || program.dir === undefined) {
    console.error("the destination directory must be explicit")
    process.exit();
}

var spinner = ora('downloading template');
spinner.start();
download('cendawei/express-gulp-webpack-app', program.dir, function (err) {
    spinner.stop();
    if(err) {
        console.log("\n download is fail");
    } else {
        console.log('\n project generated successfully in %s', program.dir);
    }
    process.exit();
})