Run this before you run cordova build

## Install

```sh
$ npm install --save-dev gulp-cordova-config
```

## Add the following to your gulpfile

```js
gulp.task('config', require('gulp-cordova-config'));
```
## Usage
```sh
$ gulp config --appId="com.new.id"
$ gulp config --appName="newApp"
$ gulp config --appVersion="newVersion"
```


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
