const path = require('path');

const fractal = module.exports = require('@frctl/fractal').create();
const pkg = require(path.join(__dirname, 'package.json'));

/**
 * Metadata
 */

fractal.set('project.title', 'A user-friendly, open-source design system based on Bulma.io, focused on a clean interface and looking for the best web accessibility.');

// Provide the package.json "version" to the templates
fractal.set('project.version', pkg.version);

/**
 * Files location
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.web.set('static.path', path.join(__dirname, 'public'));

/**
 * Build options
 */

// If you change the build destination, you should adapt webpack.common.js "output.path" too.
fractal.web.set('builder.dest', 'dist');

fractal.components.set('statuses', {
  prototype: {
    label: "Prototype",
    description: "Do not implement.",
    color: "#F67280"
  },
  wip: {
    label: "WIP",
    description: "Work in progress. Implement with caution.",
    color: "#FFB270"
  },
  ready: {
    label: "Ready",
    description: "Ready to implement.",
    color: "#2AAF74"
  }
})

/**
 * Templating
 */

// Use Nunjucks as the template engine
fractal.components.engine('@frctl/nunjucks');
fractal.docs.engine('@frctl/nunjucks');

// Look for templates with a ".nunj" extension
fractal.components.set('ext', '.nunj');
fractal.components.set('default.preview', '@component_preview');

/**
 * Server configuration
 */

fractal.web.set('server.port', 8090);
fractal.web.set('server.sync', true);

/**
 * Prevent Bluebird warnings like "a promise was created in a handler but was not returned from it"
 * caused by Nunjucks from polluting the console
 */

const bluebird = require('bluebird');
bluebird.config({
  warnings: false,
});

/**
 * Theme
 */

const theme = require('./theme');

fractal.web.theme(theme);
