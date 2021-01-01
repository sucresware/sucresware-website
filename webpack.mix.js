let mix = require('laravel-mix');
require('mix-html-builder');

mix
    .setPublicPath('public')
    .js('src/js/app.js', 'assets')
    .postCss('src/css/app.css', 'assets', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .webpackConfig(require('./webpack.config'))
    .copyDirectory('src/public', 'public')
    .html({
        output: '.',
        inject: true,
        versioning: true,
    })
    .disableSuccessNotifications();