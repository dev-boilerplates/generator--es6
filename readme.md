#__PROJECTNAME

### notes
* Uses `rollup` where most `commonjs` modules from `npm` will work, there may still need to be some tweaking.
* `eslint` needs defining to code style. `npm run firstrun` will trigger the default `init` script to build up a `.json` file
* `ENV variables` are available, see `npm run production` and in `js/main.js`. Also `rollup.config.js` detects `ENV` and `uglifies` where applicable. **todo** - use this to include **sourcemaps** or not too.

---