// 设置用户的授权信息
$('#set_current_user').click(() => {
	var userauth=$('#userauth').val();
	utils.setStorage("userauth", userauth);
	alert("set success="+userauth);
});



$('#get_current_user').click(() => {
	var userauth=utils.getStorage("userauth", true);
	alert("get success="+userauth);
});


//set default value
$(function(){
    var userauth=utils.getStorage("userauth", true);
    if(userauth!=null&&userauth!=""){
   	 $("#userauth").val(userauth);
  }
});


