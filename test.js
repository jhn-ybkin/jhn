$.ajax({
		//请求方式
		type : "GET",
		//请求的媒体类型
		//contentType: "application/json;charset=UTF-8",
		//请求地址
		url : "http://localhost:8080/wp-json/iaa/countdown",
		//数据，json字符串
		//data : JSON.stringify(list),
		//请求成功
		success : function(result) {
			console.log("请求成功");
			//console.log(result);
			$(".target").html(result.target);
			$(".now").html(result.now);
			$(".day").html(result.day);
			$(".hour").html(result.hour);
			$(".second").html(result.second);
			$(".minute").html(result.minute);
		},
		//请求失败，包含具体的错误信息
		error : function(e){
			console.log(e.status);
			console.log(e.responseText);
		}
	});		
