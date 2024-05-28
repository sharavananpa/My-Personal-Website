#!/bin/sh -l

npm install gulp gulp-htmlmin gulp-clean-css gulp-uglify gulp-minify-inline gulp-rev gulp-rev-replace del --save-dev
gulp

mv CNAME dist/CNAME
rm *
mv -v ./dist/* .
rm dist
rm -r .github