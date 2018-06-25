console.log("yijianfuhua ....\n");
function yijianfuhuago()
{
	console.log("yijianfuhua 1....\n");
	
	//https://ob.bgoo.cc/api/api/pet/v1/api/find/blockPets?page=1&pageSize=9&petCode=&star=&petStatus=&petForm=EGG
	
	//var userauth2=utils.getStorage("userauth", false);
	console.log("yijianfuhua 2 userauth="+userauth+"\n");
    if(userauth!=null&&userauth!=""){
   	 petdetail(userauth);
  }
  else{
  	console.log("userauth is not correct");
  }
	
	
	
	
}


function petdetail(logintoken){
	$.ajax({
		type: 'GET',
		url:'api/api/pet/v1/api/find/blockPets?page=1&pageSize=9&petCode=&star=&petStatus=&petForm=EGG',
		contentType : 'application/json',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization:logintoken,	
    		},
		success:function(res){                  	
                    	var petlist=res.data.rows;
                    	
                    	for (var i = 0; i <= petlist.length - 1; i++) {
							    		var pet = petlist[i];
							        	//console.log("petcode:"+pet.petCode);
							        	//"petStatus": "WALK","FREE","MATINGMARKET"
							        	//filtercode.indexOf(pet.petCode) == -1
							        	//if(pet.eventEndTime>45*60)
							        	//if(pet.petStatus=="FREE"&& pet.generation>4)
							        	{
							        		console.log("petcode :"+pet.petCode);
							        		setTimeout(fuhua,parseInt(Math.random() * i*5000),logintoken,pet.petCode);
							        	}
							    	}
			
		}
	});
}
function fuhua(logintoken,petcode){
	$.ajax({
		type: 'POST',
		url:'api/api/pet/v1/api/pet/auxiliary/hatch?code='+petcode,
		contentType : 'application/json',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization:logintoken,	
    		},
		success:function(res){
			 console.log("孵化: \n" + res.message);
		}
	});
}

setTimeout(yijianfuhuago,1000);

