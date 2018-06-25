/*
 * @author t@tabalt.net
 */

function yijianfuhua() {
	  var userauth=utils.getStorage("userauth", false);
	  console.log("run 1:"+userauth+"\n");
    chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"});
    chrome.tabs.executeScript(null, {code: "var userauth='"+userauth+"';" });
    chrome.tabs.executeScript(null, {file: "utils.js"});
    chrome.tabs.executeScript(null, {file: "yijianfuhua.js"});
    
    
}

// chrome.browserAction.onClicked.addListener(function(){ 
//     run();
// });

