var gulp = require('gulp');
	sass = require('gulp-sass');
	autoprefixer = require('gulp-autoprefixer');
	plumber = require('gulp-plumber');
	browserSync = require('browser-sync');

	gulp.task('sass', function(){ 
    return gulp.src('sass/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))  
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true})) 
});
		gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('*.html', browserSync.reload); 
});
	gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: '' 
        }
        
    });
});


	gulp.task('default', ['watch']);