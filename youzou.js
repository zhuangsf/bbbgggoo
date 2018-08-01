console.log("youzou ....\n");
function youzou()
{
  if(userauth!=null&&userauth!=""){
   	 getpetlist(userauth);
  }
  else{
  	console.log("userauth is not correct");
  }
}

//https://ob.bgoo.cc/api/api/pet/v1/api/pet/auxiliary/find/toMapPets?page=1&pageSize=36&code=21b7dbf9e4d9470596e82f75ae5874a3
function getpetlist(logintoken){
	$.ajax({
		type: 'GET',
		url:'api/api/pet/v1/api/pet/auxiliary/find/toMapPets?page=1&pageSize=100&code='+mapcode,
		contentType : 'application/json',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization:logintoken,	
    		},
		success:function(res){                	
                    	var petlist=res.data.rows;
                    	var petcodes="";
                    	//console.log("petlist.length:"+petlist.length);
                    	for (var i = 0; i <= petlist.length - 1; i++) {
								    		var pet = petlist[i];
								    		var endtime=pet.endTime;
								    		var petcode=pet.petCode;
								    		if(i!=0){
								    			petcodes+=",";
								    		}
							        	petcodes+=petcode;
							        	
							        	}
							        	console.log("youzou petcodes="+petcodes);
							        	if(petcodes!=null&&petcodes!=""){
							        		go(logintoken,petcodes);
							        }
							    	}
	});
}

//https://ob.bgoo.cc/api/api/walk/v1/api/walk/joins?petCodes=8f0e07a8443aae6fca9b289f249663ba,43387ee4afeff7ee29c7f0bc7841d5aa&leaseId=49b598712e7f4d978ea413a2281e168f
function go(logintoken,petcodes){
	$.ajax({
		type: 'POST',
		url:'https://ob.bgoo.cc/api/api/walk/v1/api/walk/joins?petCodes='+petcodes+'&leaseId='+leaseId,
		contentType : 'application/json',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization:logintoken,	
    		},
		success:function(res){
			 console.log("youzou go");
		}
	});
}



youzou();
//setInterval(yijianpaimai,6*1000);

