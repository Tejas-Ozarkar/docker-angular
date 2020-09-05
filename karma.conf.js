module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "chai"],
    browsers: ["MyHeadlessChrome"],
    customLaunchers: {
      MyHeadlessChrome: {
        base: "Chrome",
        flags: [
          "--headless", 
          "--disable-gpu", 
          "--remote-debugging-port-9222"
        ]
      }
    },
    reporters: ["progress"],
    basePath: process.cwd(),
    colors: true,
    files: [
      "test/**/*.js" // or you can put your test bundle here
    ],
    port: 9999,
    singleRun: true,
    concurrency: Infinity
  });
};