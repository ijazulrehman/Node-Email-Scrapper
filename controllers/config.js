// Email domains you want to save : return empty [] array to save all email domains
exports.domains = function() {
    // return ["@aol.com"];
    return [
        "@gmail.com",
        "@gmail.co.uk", 
        "@gmail.de",
        "@gmail.fr",

        "@yahoo.com",
        "@yahoo.co.uk", 

        "@live.com",
        "@live.co.uk",
        "@live.de",
        "@live.fr",
    
        "@hotmail.com",
        "@hotmail.co.uk",
        "@hotmail.de",
        "@hotmail.fr",

        "@outlook.com",
        
        "@aol.com"
    ];
}

exports.settings = function() {
    return {
        "saveEmailsWithNumberOnlyLocalPart": false, /* true if you wish to save emails with a number only local-part : example - 123@example.com */
        "min_character_local_part": 3,             /* this-is-local-part@example.com */
        "max_character_local_part": 25,           /* this-is-local-part@example.com */
        "listFolder": "email_list/",             /* Folder to save the email list */ 
        "reqestTimeOut": 30000                  /* Timeout for requests */
    };
}