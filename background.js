function yijianfuhua() {
	  var userauth=utils.getStorage("userauth", false);
	  console.log("bg yijianfuhua go:"+userauth+"\n");
    chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"});
    chrome.tabs.executeScript(null, {code: "var userauth='"+userauth+"';" });
    chrome.tabs.executeScript(null, {file: "utils.js"});
    chrome.tabs.executeScript(null, {file: "yijianfuhua.js"});
    
    
}


function paimai() {
	  var userauth=utils.getStorage("userauth", false);
	  console.log("bg paimai go:"+userauth+"\n");
    chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"});
    chrome.tabs.executeScript(null, {code: "var userauth='"+userauth+"';" });
    chrome.tabs.executeScript(null, {file: "utils.js"});
    chrome.tabs.executeScript(null, {file: "paimai.js"});
    
    
}



function youzou(star) {
	  var userauth=utils.getStorage("userauth", false);
	  console.log("bg youzou go:"+userauth+"\n");
	  
	  
    chrome.tabs.executeScript(null, {file: "jquery-3.3.1.min.js"});
    chrome.tabs.executeScript(null, {code: "var userauth='"+userauth+"';" });
	  chrome.tabs.executeScript(null, {code: "var star='"+star+"';" });
    chrome.tabs.executeScript(null, {file: "utils.js"});
    chrome.tabs.executeScript(null, {file: "youzou.js"});
    
    
}

// chrome.browserAction.onClicked.addListener(function(){ 
//     run();
// });

