//目前只支持单个

//从url中获取某参数对应的值
function S_getUrl(paramName) {
    var url=location.search;
    //截取字符串，去掉第0个，使字符串从第一个字符开始
    var str=url.substr(1);
    var strArray=str.split("&");
    for(var i in strArray){
      var thisStrArray=strArray[i].split("=");
      if(thisStrArray[0]==paramName){
        return thisStrArray[1];
      }
    }
      return "paramName error"
}

//获取时间函数
var S_time=new function(){
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
//ajax for ie9+
// var ajax=function(method,url,data,success,fail){
//   var request=new XMLHttpRequest();
//   request.open(method,url,true);
//   request.onload = function(){
//     if(request.status>=200 && request.status<400){
//       var res=request.responseText;
//       success(res);
//     }else{
//       // We reached our target server, but it returned an error
//     }
//     request.onerror=function(){
//       fail;
//     }
//   }
//   request.send(data);
// }
