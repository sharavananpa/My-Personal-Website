#!/bin/sh -l

npm install gulp gulp-htmlmin gulp-clean-css gulp-uglify gulp-rename gulp-rev gulp-rev-replace del --save-dev

gulp

mv CNAME dist/CNAME