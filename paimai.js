console.log("paimai ....\n");
function yijianpaimai()
{
	//console.log("paimai 1....\n");
	//https://dino.lynndone.com/api/api/transaction/v1/api/market/list?page=0&pageSize=9&currency=BGO&marketType=TRANSACTION&seachSortContent=%7B%22createTime%22:%22DESC%22%7D&searchParams=%7B%22goods.goodsType%22:%22EGG%22,%22:isUser%22:false,%22contentModel%22:%22AUCTIONMODE%22%7D
	//console.log("paimai 2 userauth="+userauth+"\n");
    if(userauth!=null&&userauth!=""){
   	 getpaimaiinfo(userauth);
  }
  else{
  	console.log("userauth is not correct");
  }
}


function getpaimaiinfo(logintoken){
	$.ajax({
		type: 'GET',
		url:'api/api/transaction/v1/api/market/list?page=0&pageSize=9&currency=BGO&marketType=TRANSACTION&seachSortContent=%7B%22createTime%22:%22DESC%22%7D&searchParams=%7B%22goods.goodsType%22:%22EGG%22,%22:isUser%22:false,%22contentModel%22:%22AUCTIONMODE%22%7D',
		contentType : 'application/json',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization:logintoken,	
    		},
		success:function(res){                	
                    	var petlist=res.data.rows;
                    	//console.log("petlist.length:"+petlist.length);
                    	for (var i = 0; i <= petlist.length - 1; i++) {
							    		var pet = petlist[i];
							    		var endtime=pet.endTime;
							    		var nowPrice=pet.nowPrice;
							    		var marketId=pet.marketId;
							    		var marketType=pet.marketType;
							    		var petcode=pet.goods.code;
							        	//console.log("petcode:"+pet.petCode);
							        	//"petStatus": "WALK","FREE","MATINGMARKET"
							        	//filtercode.indexOf(pet.petCode) == -1
							        	//if(pet.eventEndTime>45*60)
							        	if(nowPrice<100)
							        	{
							        		var timestamp_now = new Date().getTime();
							        		//console.log("nowtime:"+timestamp_now+"endtime :"+endtime+",nowPrice:"+nowPrice);
							        		var delta_t = Math.round((endtime-timestamp_now));
							        		var howlongtoaddprice = delta_t-3*1000+Math.random() * 2000;
							        		console.log(i+",nowPrice:"+nowPrice+",delta_t:"+delta_t+",howlongtoaddprice:"+howlongtoaddprice);
							        		//可能会和服务器时间有一点的差别。需要自己测试了微调。  感觉相差5s左右
							        		
							        		if(delta_t<6000){
							        			console.log(i+",%cpetcode:"+petcode+"%c,nowPrice:"+nowPrice+"%c,howlongtoaddprice:"+howlongtoaddprice,"color:red;font-weight:bold;","color:orange;font-weight:bold;","color:DodgerBlue;font-weight:bold;","");
			
							        			setTimeout(jiajia,parseInt(delta_t-4000),logintoken,marketId,marketType,petcode,nowPrice+0.1);
							        		}
							        		//setTimeout(jiajia,parseInt(Math.random() * i*2000),logintoken,marketId,marketType,petcode,nowPrice+1);
							        	}
							    	}
			
		}
	});
}
function jiajia(logintoken,marketId,marketType,petcode,price){
	//api/api/transaction/v1/api/market/buy?marketId=2022974051350347776&petCode=f99bdb0437feaa3ca81f175d6ca4cd50&offerPrice=2&currency=BGO&marketType=TRANSACTION
	$.ajax({
		type: 'POST',
		url:'api/api/transaction/v1/api/market/buy?marketId='+marketId+'&petCode='+petcode+'&offerPrice='+price+'&currency=BGO&marketType='+marketType,
		contentType : 'application/json',
		headers: {
			Accept: 'application/json, text/plain, */*',
			Authorization:logintoken,	
    		},
		success:function(res){
			 console.log("加价: \n" + res.message);
		}
	});
}

setInterval(yijianpaimai,6*1000);

