/**
 * use S start stone.js
 * you can use [S.property] to use it！
 * -------
 * version: 版本
 * getUrl(paramName): 获取url中指定paramName的值
 * time{
 *  getSimpleDate(): 获取GMT时间
 *  getWeekday(): 获取weekday
 *  getYear():  获取年
 *  getMonth(): 获取月
 *  getDay():   获取日
 *  getHour():  获取小时
 *  getMin():   获取分钟
 *  getSec():   获取秒
 * }
 * mySet(arr) 去除数组中重复数据 （仅保留第一次存在的位置）
 * reArr(arr)  反转数组
 */
(function () {
    if (!window.S) {
        window.S = {}
    }
    window.S = {
        version: "0.1",
        time: {
            getSimpleDate: function () {
                var myDate = new Date();
                return myDate;
            },
            getWeekday: function () {
                var myDate = new Date();
                return myDate.getDay();
            },
            getYear: function () {
                var myDate = new Date();
                return myDate.getFullYear();
            },
            getMonth: function () {
                var myDate = new Date();
                return myDate.getMonth() + 1;
            },
            getDay: function () {
                var myDate = new Date();
                return myDate.getDate();
            },
            getHour: function () {
                var myDate = new Date();
                return myDate.getHours();
            },
            getMin: function () {
                var myDate = new Date();
                return myDate.getMinutes();
            },
            getSec: function () {
                var myDate = new Date();
                return myDate.getSeconds();
            }
        },
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
        }
    }
}())