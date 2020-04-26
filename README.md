# Scraper
#### Scraper is an email scrapping tool that can scrap millions of emails daily from Google search query only.

Here is how to use it.

- Install Node.Js
- cd to the Scraper folder and run npm-install
```sh
    $ npm install
```

Now you can start scrapping your emails.
Open the app.js and configure your keyword and Google pages number you want to scrap.

```sh
var searchQuery = 'keyword "@gmail.com" "@live.com" "@yahoo.com" "@hotmail.com"';
Scraper.start(searchQuery, 1, 1, "emailList.txt");
```
Finally run the NodeJs app to start the scrapping.
```sh
    $ node app
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)


