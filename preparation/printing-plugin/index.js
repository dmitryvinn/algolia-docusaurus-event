module.exports = function () {
  return {
    name: "monitoring-plugin",
    async loadContent() {
      return console.log('Run Tests, someone update the config');
    },
  };
};
