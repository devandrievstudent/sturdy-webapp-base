// Import rollup plugins
import html from '@web/rollup-plugin-html';
import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from '@rollup/plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';

export default {
    plugins: [
        // Використовуємо функцію html() плагіну rollup-plugin-html як точку входу у веб-додаток
        html({
            input: "index.html"
        }),

    ]
}