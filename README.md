# Text Away
Easy WhatsApp texting without the need to save contact

## General Info
A simple Progressive Web App (PWA) utilizing WhatsApp's URL API to start a WhatsApp text conversation without the need to save the recipient's phone number into contacts.

## How to install
PWAs are supported by the latest version of most browsers. This PWA is set up with a cache-first service worker to enable installation and the ability to run offline. On a mobile device a you can access this website's production deployment using the following URL: https://textaway.app
On an android device running Chrome browser, the browser may display a dialog prompting you to install the app or you can manually open Chrome's browser options and click the Install App on the drop down list.
On iOS and iPadOS, this PWA is only installable using Safari.
The following web page wonderfully explains in more detail on desktop and mobile browser compatibilities: https://web.dev/learn/pwa/progressive-web-apps/#compatibility

## How it works
Once a user enters a phone number (country code required) the submit button redirects to WhatsApp's website and appends the input to the following URL:
https://api.whatsapp.com/send?phone={input}

If the phone number entered is a valid number that has been registered on WhatsApp, then the user will be shown a prompt to be redirected to the WhatsApp app and start/resume a conversation with the recipient.

## Tech
Built with Create-React-App and Material UI
