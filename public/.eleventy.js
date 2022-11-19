module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy(".(")

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};