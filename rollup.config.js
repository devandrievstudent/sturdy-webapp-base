// Import rollup plugins
import {rollupPluginHTML as html} from '@web/rollup-plugin-html';
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import pkgMinifyHTML from 'rollup-plugin-minify-html-literals';
const minifyHTML = pkgMinifyHTML.default;
import summary from 'rollup-plugin-summary';

export default {
    plugins: [
        // Використовуємо функцію html() плагіну rollup-plugin-html як точку входу у веб-додаток
        html({
            input: "index.html"
        }),
        // Розв'язати імена модулів
        resolve(),
        // Minify HTML template literals
        minifyHTML(),
        // Minify JS
        terser({
            ecma: 2020,
            module: true,
            warnings: true,
        }),
        // Print bundle summary
        summary(),
        // Optional: copy any static assets to build directory
        // copy({
        //     patterns: ['images/**/*'],
        // })
    ],
    output: {
        dir: 'build'
    },
    preserveEntrySignatures: "strict"
}