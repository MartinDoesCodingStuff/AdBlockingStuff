/**
 * @fileoverview List of global constants used everywhere
 */

// check value if file exists
const constBool = 'true';

// check value if config.js, lists/reglist.js and lists/adware.js are found
const isReady = (configBool && reglistBool && adwareBool) === 'true';

// access background page, mostly used in console.log
const bgpa = chrome.extension.getBackgroundPage();

// console.log styling
const ccss = {
	succ: ["color:white; background-color:green;", "color:lightgreen; background-color:transparent;"],
	fail: ["color:white; background-color:orangered;", "color:orangered; background-color:transparent;"],
	adware: ["color:gray; background-color:yellow", "color:yellow; background-color:transparent;"],
	warn: ["color:white; background-color:red;", "color:orangered; background-color:transparent;"],
	info: ["color:white; background-color:cyan;", "color:cyan; background-color:transparent;"],
	err: ["color:red"]
};