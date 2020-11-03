const autoProcess = require('svelte-preprocess');

module.exports = {
  preprocess: autoProcess({ postcss: true }),
};
