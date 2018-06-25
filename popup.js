// 设置用户的授权信息
$('#set_current_user').click(() => {
	var userauth=$('#userauth').val();
	utils.setStorage("userauth", userauth, false);
	alert("set success="+userauth);
});



$('#get_current_user').click(() => {
	//alert("get success=");
	var userauth=utils.getStorage("userauth", false);
	alert("get success="+userauth);
});


$('#fuhua').click(() => {
	
	var bg = chrome.extension.getBackgroundPage();
        bg.yijianfuhua && bg.yijianfuhua();
        
        //alert("一键孵化");
        
});

//set default value
$(function(){
    var userauth=utils.getStorage("userauth", false);
    if(userauth!=null&&userauth!=""){
   	 $("#userauth").val(userauth);
  }
});


