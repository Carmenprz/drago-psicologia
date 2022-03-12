module.exports = config => {
  // Transforms
  const htmlMinTransform = require('./src/transforms/html-min-transform.js');

  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === 'production';

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};