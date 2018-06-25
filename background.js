/*
 * @author t@tabalt.net
 */

function yijianfuhua() {
	  console.log("run 1....\n");
    chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"});
    chrome.tabs.executeScript(null, {file: "utils.js"});
    chrome.tabs.executeScript(null, {file: "yijianfuhua.js"});
}

// chrome.browserAction.onClicked.addListener(function(){ 
//     run();
// });

