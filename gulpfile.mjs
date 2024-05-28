import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import rev from 'gulp-rev';
import revReplace from 'gulp-rev-replace';
import { deleteAsync } from 'del';

gulp.task('clean', () => {
  return deleteAsync(['dist/**', '!dist']);
});

gulp.task('minify-html', () => {
  return gulp.src('*.html', { base: '.' })
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('*.css', { base: '.' })
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest('dist/rev-manifest.json', { merge: true }))
    .pipe(gulp.dest('.'));
});

gulp.task('minify-js', () => {
  return gulp.src('*.js', { base: '.' })
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest('dist/rev-manifest.json', { merge: true }))
    .pipe(gulp.dest('.'));
});

gulp.task('revreplace', () => {
  const manifest = gulp.src('dist/rev-manifest.json');

  return gulp.src('dist/*.html', { base: 'dist' })
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('clean', 'minify-html', 'minify-css', 'minify-js', 'revreplace'));