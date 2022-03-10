module.exports = config => {
    config.addPassthroughCopy('./src/images/');

    config.addPassthroughCopy('./src/assets/scripts/');

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