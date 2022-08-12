# Easy WhatsApp

## General Info
This simple website is used to start a WhatsApp text conversation without the need to save the recipient's phone number into your contacts.

## How it works
Once a user enters a phone number (country code required) the submit button redirects to WhatsApp's website and appends the input to the following URL:
https://api.whatsapp.com/send?phone={input}

If the phone number entered is a valid number that has been registered on WhatsApp, then the user will be shown a prompt to be redirected to the WhatsApp app and start/resume a conversation with the recipient.

## Tech
Built with React and Material UI
