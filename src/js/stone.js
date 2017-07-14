/**
 * use S start stone.js
 * you can use [S.property] to use it！
 * -------
 * version: 版本
 * getUrl(paramName): 获取url中指定paramName的值
 * mySet(arr) 去除数组中重复数据 （仅保留第一次存在的位置）
 * reArr(arr)  反转数组
 * randomStr(n) 随机生成n长的字符串
 * shuffleArr(arr) 打乱数组的顺序
 * getFirstDayInfo(n) 获取这个月第n天是星期几，返回的n的取值为(0-6)
 * createRangeArr(index,end) 生成index到end的数组
 */
(function () {
    if (!window.S) {
        window.S = {}
    }
    window.S = {
        version: "0.1",
        getUrl: function (paramName) {
            var url = location.search;
            //截取字符串，去掉第0个，使字符串从第一个字符开始
            var str = url.substr(1);
            var strArray = str.split("&");
            for (var i in strArray) {
                var thisStrArray = strArray[i].split("=");
                if (thisStrArray[0] == paramName) {
                    return thisStrArray[1];
                }
            }
            return "paramName error"
        },
        swap:function(arr, a, b) {
          var temp = arr[a];
          arr[a] = arr[b];
          arr[b] = temp;
          return arr;
        },
        mySet:function(arr){
            if(!(arr instanceof Array))
                return "arr is not array";
            var newArr=[];
            for(var i=0;i<arr.length;i++){
              if(newArr.indexOf(arr[i])<0){
                  newArr.push(arr[i]);
              }
            }
            return newArr;
        },
        reArr:function(arr){
            if(!(arr instanceof Array))
                return "arr is not array";
            var newArr=[];
            for(var i=arr.length-1;i>=0;i--){
                newArr.push(arr[i]);
            } 
            return newArr;
        },
        randomStr:function (n){
            var str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
            var t="";
            for(var i=0;i<n;i++){
                t=str.charAt(Math.floor(Math.random()*str.length))+t;
            }
            return t;
        },
        shuffleArr:function(arr){
            return arr.sort(function(){
                return Math.random()-0.5;
            })
        },
        getFirstDayInfo:function(n){
            var date=new Date();
            date.setDate(n);
            return date.getDay();
        },
        createRangeArr:function(index,end){
            var result=[];
            while(index<=end){
                result.push(index);
                index++;
            }
            return result;
        }
    }
}())