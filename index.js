'use strict';
var vfs = require('vinyl-fs');
var args = require("yargs").argv;
var fs = require("fs");
var gutil = require('gutil');
var filter = require("gulp-filter");
var xeditor = require("gulp-xml-editor");
/*
 * main functions -----------------------
 */

function cordovaConfig() {}

cordovaConfig.prototype.run = function() {

  if (args.appId) {
    return this.id(args.appId);
  } else if (args.appName) {
    return this.name(args.appName)
  } else {
    return this.help();
  }
};


cordovaConfig.prototype.name = function(newName) {
  this.pluginMessage();
  console.log(newName);
  return vfs.src(['./config.xml'])
    .pipe(vfs.dest('./'))
    .pipe(xeditor([{
      path: '//xmlns:name',
      text: newName
    }], 'http://www.w3.org/ns/widgets'))
    .pipe(vfs.dest("./"));
}


cordovaConfig.prototype.id = function(newId) {
  this.pluginMessage();
  return vfs.src(['./config.xml'])
    .pipe(vfs.dest('./'))
    .pipe(xeditor([{
      path: '.',
      attr: {
        'id': newId
      }
    }]))
    .pipe(vfs.dest("./"));
}


/*
 * helper functions -----------------------
 */

cordovaConfig.prototype.pluginMessage = function() {
  gutil.log("\nRemember to run cordova build after this\n");
}

cordovaConfig.prototype.help = function() {
  gutil.log('\n\tUSAGE:\n\t\t$ gulp config --appId="com.new.id"\n\t\t$ gulp config --appName="newName"\n');
}

/*
 * module function -----------------------
 */

var init = new cordovaConfig();
module.exports = function() {
  return init.run();
};
