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
    if(star==0){
		  var mapcode="21b7dbf9e4d9470596e82f75ae5874a3";//0ÐÇ
	    var leaseId="2c7f388e139143458436a121ace92fb7";//0ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==1){
		  var mapcode="d43b04378f7d45ef8aee66057fa7c250";//1ÐÇ
	    var leaseId="fbb4c019c8cb4d0886d9fb3c8cd0f780";//1ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==2){
		  var mapcode="f6352d415278477db403c36dc69677be";//2ÐÇ
	    var leaseId="f4e3b2e534c544a5a82fe80ddb7e76bf";//2ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==3){
		  var mapcode="894cab02790c4b0f96e8a8c0c97ff067";//3ÐÇ
	    var leaseId="ad7a1fa398d24270b4511910064b283c";//3ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==4){
		  var mapcode="4c24d7d3dce549d89795d1f2f726e689";//4ÐÇ
	    var leaseId="bb8b3980b0374e39a9f092972cd28093";//4ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==5){
		  var mapcode="774df5dfc6b44b9d86cef885a8f2ba5a";//5ÐÇ
	    var leaseId="d83afffa99f74ea899fae900ae505201";//5ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==6){
		  var mapcode="ab1a8eb5cf8544998b15fde3aa2198bb";//6ÐÇ
	    var leaseId="4f9b8aa2473549718c9014bd0acdefc3";//6ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==7){
		  var mapcode="3b1e522d3b8d4fb8ae3f17a258ec143c";//7ÐÇ
	    var leaseId="49b598712e7f4d978ea413a2281e168f";//7ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }else if(star==8){
		  var mapcode="527dd54a85c64eb99945767ebdd47c76";//8ÐÇ
	    var leaseId="1f84c60ebc7742aabd2cf60f4106013c";//8ÐÇ	
	    chrome.tabs.executeScript(null, {code: "var mapcode='"+mapcode+"';" });
	    chrome.tabs.executeScript(null, {code: "var leaseId='"+leaseId+"';" });
	  }
    chrome.tabs.executeScript(null, {file: "utils.js"});
    chrome.tabs.executeScript(null, {file: "youzou.js"});
    
    
}

// chrome.browserAction.onClicked.addListener(function(){ 
//     run();
// });

