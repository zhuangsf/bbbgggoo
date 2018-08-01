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

$('#paimai').click(() => {
	
	var bg = chrome.extension.getBackgroundPage();
        bg.paimai && bg.paimai();
        
        
});

$('#youzou0').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(0); 
});
$('#youzou1').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(1); 
});
$('#youzou2').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(2); 
});
$('#youzou3').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(3); 
});
$('#youzou4').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(4); 
});
$('#youzou5').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(5); 
});
$('#youzou6').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(6); 
});
$('#youzou7').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(7); 
});
$('#youzou8').click(() => {
	var bg = chrome.extension.getBackgroundPage();
        bg.youzou && bg.youzou(8); 
});
$('#youzou9').click(() => {
	 alert("请把9星龙转到地址：0ba76199c9c6a2c52cd346ee53fd6793 谢谢合作！");
});






//set default value
$(function(){
    var userauth=utils.getStorage("userauth", false);
    if(userauth!=null&&userauth!=""){
   	 $("#userauth").val(userauth);
  }
});


