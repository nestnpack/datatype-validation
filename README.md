
# Datatype Validation

An npm utility package to make it easier to check data types such as string, number, boolean and more in JavaScript

## Installation

Install with npm
```console
npm install datatype-validation
```

or connect with CDN
```text
https://www.unpkg.com/datatype-validation@latest/datatype.js
```

After installing, do the import

#### With Require
```javascript
const datatype = require('datatype-validation');
```

#### With Tag Script
```html
<script type="text/javascript" src="./node_modules/datatype-validation/datatype.js"></script>

<!-- connect with CDN -->

<script type="text/javascript" src="https://www.unpkg.com/datatype-validation@latest/datatype.js"></script>
```

## Usage
To use existing functions, use datatype.functionName(value), here is an example of its use:


### Check data type

#### String
```javascript
datatype.isString("test"); //This will return true, because the value entered is a string

datatype.isString(123); //This will return false, because the value entered is not a string but a number
```

#### Number
```javascript
datatype.isInt(123); //This will return true, because the value entered is a number

datatype.isInt("lol"); //This will return false, because the value entered is a string, not a number

datatype.isInt(123.4); //This will return false, because the value entered is a decimal number, not an integer number


datatype.isFloat(123.4); //This will return true, because the value entered is a decimal number

datatype.isFloat(123); //This will return false, because the value entered is not a decimal number but an integer number
```

#### Boolean 
```javascript
datatype.isBoolean(false); //This will return true, because the value entered is a boolean, not a string or number


datatype.isBoolTrue(true); //This will return true, because the value entered is a boolean that contains the value true not false


datatype.isBoolFalse(true); //This will return false, because the value entered is a boolean that contains the value true, not false
```

#### DateTime
```javascript
datatype.isDate("18-11-2023"); //This will return true, because the value entered is in date format

datatype.isDate(18-11-2023); //This will return false, because to do this it must be in string format

//You can do this in any delimiter/combiner for example I used (-) you can also use spaces or whatever you think is suitable

//Example:
datatype.isDate("18 11 2023");
datatype.isDate("18~11~2023");
datatype.isDate("18:11:2023");


datatype.isTime("10:30:58"); //This will return true, because the value entered is in time format

datatype.isTime(10:36:25); //This will return false, because to do this it must be in string format

//You can do this in any delimiter/combiner for example I used (:) you can also use spaces or whatever you think is suitable

//Example:
datatype.isTime("10-38-40"); 
datatype.isTime("10 39 50"); 
datatype.isTime("10|42|30"); 


datatype.isDateTime("18-11-2023 10:45:15"); //This will return true, because the value entered is in date and time format

datatype.isDateTime(18-11-2023 10:48:56); //This will return false, because to do this it must be in string format

//You can do this in any delimiter/combiner for example I used (- and :) you can also use spaces or whatever you think is suitable

//Example:
datatype.isDateTime("18 11 2023 10 57 59");
datatype.isDateTime("18/11/2023 10-58-35");
datatype.isDateTime("18:11:2023 11-14-06");
```

#### Web
```javascript
datatype.isDomain('example.com'); //This will return true, because the value entered is valid domain

datatype.isDomain('https://lol.net'); //This also result the value true

datatype.isDomain('http://lol.xyz'); //This also result the value true

datatype.isDomain('https://blog.lol.com'); //This also result the value true

datatype.isDomain('https://blog.lol.i'); //This will return false, because the domain extension is invalid

```


### Change data type
#### String
```javascript
datatype.toString(1234); //This will return a value in the form of string "1234"
```

#### Number
```javascript
datatype.toInt("12.5"); //This will convert the string float value to int (12)

datatype.toFloat(25); //This will convert the value int (25) to float (25.0)
```
## Features
| Function               | Description                                      |
| :--------------------- | :----------------------------------------------- |
| `isString(value)`      | to check whether the value entered is a string or not |
| `isInt(value)`         | to check whether the value entered is a number or not |
| `isFloat(value)`       | to check whether the value entered is a decimal number or not |
| `isBoolean(value)`     | to check whether the value entered is a boolean or not |
| `isBoolTrue(value)`    | to check whether the value entered is a boolean containing the value true or false |
| `isBoolFalse(value)`   | to check whether the value entered is a boolean containing the value false or true |
| `isDate(value)`        | to check whether the value entered is dd-mm-yyyy or not |
| `isTime(value)`        | to check whether the value entered is hh-mm-ss or not |
| `isDateTime(value)`    | to check whether the value entered is dd-mm-yyyy hh-mm-ss or not |
| `isDomain(value)`    | to check whether the value entered is valid domain or not |
| `toString(value)`      | converts the input value into a string |
| `toInt(value)`         | converts the input value into a int |
| `toFloat(value)`       | converts the input value into a float |