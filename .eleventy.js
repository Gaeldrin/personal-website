module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/webfonts');
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addWatchTarget('src/css');

  eleventyConfig.addCollection('projects', (collection) => {
    return collection.getFilteredByGlob('src/projects/*.md');
  });

  eleventyConfig.addShortcode('year', () => {
    return `${new Date().getFullYear()}`;
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
