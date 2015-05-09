var elixir = require('laravel-elixir');
require('laravel-elixir-sass-compass');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */


var paths = {
    jquery: 'vendor/bower_components/jquery/',
    bootstrap: 'vendor/bower_components/bootstrap-sass-official/assets/'
}

elixir(function (mix) {
    mix
        .compass("app.scss", "public/css/", {
            style: "nested",
            sass : "./resources/assets/sass"
        })
        .copy(paths.bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        .scripts([
            paths.jquery + 'dist/jquery.js',
            paths.bootstrap + 'javascripts/bootstrap.js'
        ], 'public/js/app.js', './');
});
