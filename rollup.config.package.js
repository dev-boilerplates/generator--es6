import Commonjs from 'rollup-plugin-commonjs'
import Resolve from 'rollup-plugin-node-resolve'
import Stringify from 'rollup-plugin-string'
import Babel from 'rollup-plugin-babel'
import Uglify from 'rollup-plugin-uglify'
import eslint from 'rollup-plugin-eslint'
import replace from 'rollup-plugin-replace'
import { minify } from 'uglify-js'

export default {
    entry: 'es6/package.js',
    format: 'cjs',
    dest: 'dist/axoviewer.js',
    moduleName: 'axo',
    sourceMap: false,
    plugins: [
        Stringify({ include: 'js/templates/*.html' }),
        Babel({
            exclude: 'node_modules/**',
            presets: 'es2015-rollup'
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        (process.env.NODE_ENV === 'production1' && Uglify({}, minify))
    ]
}
