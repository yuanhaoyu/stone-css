//目前只支持单个

//从url中获取某参数对应的值
function getUrl(paramName) {
    var url=location.search;
    //截取字符串，去掉第0个，使字符串从第一个字符开始
    var str=url.substr(1);
    var strArray=str.split("=");
    if(strArray[0]==paramName){
      return strArray[1];
    }
    else {
      return "paramName error"
    }
}

//获取时间函数
var time=new function(){
  var myDate=new Date();
  this.getSimpleDate=function(){
    return myDate;
  };
  this.getWeekdat=function(){
    return myDate.getDay();
  }
  this.getYear=function(){
    return myDate.getFullYear();
  }
  this.getMonth=function(){
    return myDate.getMonth()+1;
  };
  this.getDay=function(){
    return myDate.getDate();
  };
  this.getHour=function(){
    return myDate.getHours();
  };
  this.getMin=function(){
    return myDate.getMinutes();
  };
  this.getSec=function(){
    return myDate.getSeconds();
  }
}
