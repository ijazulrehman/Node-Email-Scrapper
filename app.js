var Scraper = require("./controllers/scraper.js");
var searchQuery = '"linkedin Student at Comsats University Islamabad" "@gmail.com" "@live.com" "@yahoo.com" "@hotmail.com" "@outlook.com"'; /* Google search query to find email address */

// Method: start()
// parameters 1: Google search query to find emails
// parameters 2: Google Page number to start
// parameters 3: Google Page number to end
// parameters 4: List file name to save emails

// Note: Don't query to many pages at once. Query 1 to 5 than 6 - 10 and so on. Google will block you if you query to much at once.

Scraper.start(searchQuery, 1, 5, "emailList.txt");