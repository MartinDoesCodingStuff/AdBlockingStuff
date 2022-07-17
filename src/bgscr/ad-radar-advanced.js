/**
 * This is the single most important file in the entire extension
 * manifest key: "ad-radar-advanced.js"
 * requires: consts.js, config.js, log-event.js
 */
if ((constBool ==='true') && (isReady == true)) { main(); } else { console.warn(`[file] bgscr/special-case.js ==> %cERROR%c cannot find files: ${findMissingFiles()}`, "color:red", "color:transparant"); }
function main() {
	bgpa.console.log("[file] bgscr/ad-radar-advanced.js ==> %cREADY", "color:green");
	if (switches.block.ads == true) {   chrome.webRequest.onBeforeRequest.addListener((d) => { logEvent(d, 'reg', 'ad-radar/ads'); return { cancel: true }; }, { urls: getReg() }, ["blocking"]); }
	chrome.webRequest.onBeforeRequest.addListener((d) => { logEvent(d, 'adware', 'ad-radar/adware'); return { cancel: true }; }, { urls: getAdware() }, ["blocking"]);
	if (switches.block.pings == true) { chrome.webRequest.onBeforeRequest.addListener((d) => { logEvent(d, 'ping', 'ad-radar/pings'); return { cancel: true }; }, { urls: ["*://*/*"], types: ["ping"] }, ["blocking"]); }
}// End function main();