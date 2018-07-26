//获取当前时间
	function getNowFormatDate() {
	    var date = new Date();
	    var seperator1 = "-";
	    var seperator2 = ":";
	    var month = date.getMonth() + 1;
	    var strDate = date.getDate();
	    if (month >= 1 && month <= 9) {
	        month = "0" + month;
	    }
	    if (strDate >= 0 && strDate <= 9) {
	        strDate = "0" + strDate;
	    }
	    var hours=date.getHours();
	    if (hours >= 0 && hours <= 9) {
	    	hours = "0" + hours;
	    }

	    var Minutes=date.getMinutes();
	    if (Minutes >= 0 && Minutes <= 9){
	    	Minutes = "0" + Minutes;
	    }

		var Seconds=date.getSeconds();
		if(Seconds >= 0 && Seconds <= 9){
			Seconds = "0" + Seconds;
		}
	    
	    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
	            + " " + hours + seperator2 + Minutes
	            + seperator2 +Seconds;
	    return currentdate;
	}
