console.log("youzou ....\n");
function youzou()
{
	if(userauth!=null&&userauth!=""){
		
		if(star==10){
			console.log("auto youzou start\n");
			youzou_auto();
			setInterval(youzou_auto,15*60*1000);//15min laiyici 
		}else{
   	 getpetlist(userauth,mapcode_array[star],leaseId_array[star]);
       	
    }
  }
  else{
  	console.log("userauth is not correct");
  }
}

function youzou_auto(){
									for (var i = 0; i <= mapcode_array.length - 1; i++) {
	                    setTimeout(getpetlist,i*3*1000,userauth,mapcode_array[i],leaseId_array[i]);
	                }
}

//https://ob.bgoo.cc/api/api/pet/v1/api/pet/auxiliary/find/toMapPets?page=1&pageSize=36&code=21b7dbf9e4d9470596e82f75ae5874a3
function getpetlist(logintoken,mapcode,leaseId){
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
							        		go(logintoken,petcodes,leaseId);
							        }
							    	}
	});
}

//https://ob.bgoo.cc/api/api/walk/v1/api/walk/joins?petCodes=8f0e07a8443aae6fca9b289f249663ba,43387ee4afeff7ee29c7f0bc7841d5aa&leaseId=49b598712e7f4d978ea413a2281e168f
function go(logintoken,petcodes,leaseId){
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

var mapcode_array = new Array(
			"21b7dbf9e4d9470596e82f75ae5874a3",
			"d43b04378f7d45ef8aee66057fa7c250",
		  "f6352d415278477db403c36dc69677be",
		  "894cab02790c4b0f96e8a8c0c97ff067",
		  "4c24d7d3dce549d89795d1f2f726e689",
		  "774df5dfc6b44b9d86cef885a8f2ba5a",
		  "ab1a8eb5cf8544998b15fde3aa2198bb",
		  "3b1e522d3b8d4fb8ae3f17a258ec143c",
		  "527dd54a85c64eb99945767ebdd47c76"
		);
		
		var leaseId_array = new Array(
			"2c7f388e139143458436a121ace92fb7",
			"fbb4c019c8cb4d0886d9fb3c8cd0f780",	
			"f4e3b2e534c544a5a82fe80ddb7e76bf",	
			"ad7a1fa398d24270b4511910064b283c",
			"bb8b3980b0374e39a9f092972cd28093",
			"d83afffa99f74ea899fae900ae505201",
			"4f9b8aa2473549718c9014bd0acdefc3",
			"49b598712e7f4d978ea413a2281e168f",
			"1f84c60ebc7742aabd2cf60f4106013c"
		);

youzou();
//setInterval(yijianpaimai,6*1000);

