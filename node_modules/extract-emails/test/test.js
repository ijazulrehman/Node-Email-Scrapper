(() => {
    'use strict';

    const assert = require('assert');
    const extractEmails = require('./../src/extract-emails');

    describe('#extractEmails', () => {
        it('should throw an error if argument not provided', () => {
            assert.throws(
                () => {
                    extractEmails();
                },
                Error
            );
        });

        it('should throw an error if argument is not a string', () => {
            assert.throws(
                () => {
                    extractEmails(1);
                },
                Error
            );
        });

        it('should return empty array if emails not found', () => {
            let actual = extractEmails('<p>Text without emails</p>');
            assert.deepEqual([], actual);
        });

        it('should return array of emails from html', () => {
            let expected, actual;

            // single email
            expected = ['john@example.com'];
            actual = extractEmails('<p>john@example.com</p>');
            assert.deepEqual(expected, actual);

            // multiple emails
            expected = ['bill@example.net', 'jack@example.edu'];
            actual = extractEmails(`
              <p>Lorem ipsum dolor bill@example.net nostrud.</p>
              <p>Lorem ipsum dolor sit amet, jack@example.edu adipisicing elit.</p>
            `);
            assert.deepEqual(expected, actual);
        });

        it('should return array of emails from html obfuscated by cloudflare', () => {
            let expected, actual;

            expected = ['tom75hen@gmail.com'];
            actual = extractEmails(`
              <p>Thomas A. Henderson - <span class="__cf_email__" data-cfemail="83f7eceeb4b6ebe6edc3e4eee2eaefade0ecee">[email&#160;protected]</span></p>
            `);
            assert.deepEqual(expected, actual);
        });
    });
})();
