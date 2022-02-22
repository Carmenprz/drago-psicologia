module.exports = config => {
    config.addPassthroughCopy('./src/images/');
    // Returns work items, sorted by display order
    const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
    // Returns work items, sorted by display order
    config.addCollection('work', collection => {
      return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    // Returns work items, sorted by display order then filtered by featured
    config.addCollection('featuredWork', collection => {
      return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(
        x => x.data.featured
      );
    });

    // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
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