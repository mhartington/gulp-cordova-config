> Bump your Cordova package version

Run this before you run cordova build

This bumps and syncs config.xml, package.json and bower.json semantic versions

## Install

```sh
$ npm install --save-dev gulp-cordova-bump
```

## Add the following to your gulpfile

```js
gulp.task('config', require('gulp-cordova-config'));
```
## Usage
```sh
$ gulp config --appId="com.new.id"
$ gulp config --appName="newApp"
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
