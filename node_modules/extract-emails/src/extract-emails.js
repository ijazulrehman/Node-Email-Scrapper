(() => {
    'use strict';

    const emailRegExp = /(\w+@\w+\.\w+)/ig;
    const cfRegExp = /data-cfemail="(\w+?)"/ig;

    function decodeCf(cfemail) {
        let e, r, a, n;

        a = cfemail;

        for (e = '', r = '0x' + a.substr(0, 2) | 0, n = 2; a.length - n; n += 2) e += '%' + ('0' + ('0x' + a.substr(n, 2) ^ r).toString(16)).slice(-2);

        return decodeURIComponent(e);
    }

    function extractPlainEmails(html) {
        let emails = [];

        let match;

        while ((match = cfRegExp.exec(html)) !== null) {
            emails.push(decodeCf(match[1]));
        }

        return emails;
    }

    function extractCfEmails(html) {
        let emails = [];

        let match;

        while ((match = emailRegExp.exec(html)) !== null) {
            emails.push(match[1]);
        }

        return emails;
    }

    function extractEmails(html) {
        if (!html) {
            throw new Error('Argument is not provided');
        }

        if (typeof html !== 'string') {
            throw new Error('Argument is not a string');
        }

        let emails = [];

        emails = emails.concat(extractPlainEmails(html));
        emails = emails.concat(extractCfEmails(html));

        return emails;
    }

    module.exports = extractEmails;
})();
