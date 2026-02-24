module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");

  // Scholars
  eleventyConfig.addCollection("scholars", (api) => {
  return api.getFilteredByTag("scholars");
  });


  // Works (everything under content/works except index pages)
  eleventyConfig.addCollection("works", (api) =>
  api.getFilteredByGlob("content/works/**/*.md")
  .filter(i => !i.inputPath.endsWith("/index.md"))
  );

  // Work types
  eleventyConfig.addCollection("books", (api) =>
  api.getFilteredByGlob("content/works/books/*.md").filter(i => i.fileSlug !== "index")
  );

  eleventyConfig.addCollection("fatawa", (api) =>
  api.getFilteredByGlob("content/works/fatawa/*.md").filter(i => i.fileSlug !== "index")
  );

  eleventyConfig.addCollection("lectures", (api) =>
  api.getFilteredByGlob("content/works/lectures/*.md").filter(i => i.fileSlug !== "index")
  );

  // Sciences (the science pages themselves)
  eleventyConfig.addCollection("sciences", (api) =>
  api.getFilteredByGlob("content/sciences/*.{md,njk}").filter(i => i.fileSlug !== "index")
  );


  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
  };
};
