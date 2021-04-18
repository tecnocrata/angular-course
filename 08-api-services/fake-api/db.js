// db.js
// Should export a function which return an object
const userProfile = require("./data-user-profile");
const blogEntries = require("./data-blog-entries");

module.exports = () => ({
  "user-info": userProfile,
  "blog-entries": blogEntries,
});
