const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  distDir: "dist",
  useFileSystemPublicRoutes: false
});
