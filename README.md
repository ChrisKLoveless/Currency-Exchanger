# Currency Exchanger

#### A Currency converting application that utilizes the ExchangeRate-API 

#### By Chris Loveless

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _ExchangeRate-API_
* _webpack_
* _Node_

## Description

With this application the user will input an amount in US Dollars and select a currency they would like to convert to. The application then makes an API request to get the most current rates.

## Setup/Installation Requirements

* Clone down the git repo to the desktop
* Install all packages with $ npm install  
* Build the project with webpack using $ npm run build 
* Start a live development server with $ npm run start
* Lint JavaScript files with $ npm run lint
* Run tests with Jest using $ npm run test

## API Key Setup (required)

* Visit _[ExchangeRate API](https://www.exchangerate-api.com/)_
* Enter your email and click "Get Free Key" button.
* Enter a name and password when prompted to create an account. 
* Once you agree to the terms of use click "Get Started!".
* From your dashboard copy the API KEY.
* Create a .env file in the root directory of the project and paste the key as the value like this: API_KEY=[your key here] 

## Known Bugs


## License
Copyright (c) 2022 Chris Loveless
_[MIT](https://choosealicense.com/licenses/mit/)_