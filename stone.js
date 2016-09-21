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
