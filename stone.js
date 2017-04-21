/**
 * use S start stone.js
 * you can use [S.property] to use it！
 * -------
 * version: 版本
 * getUrl(paramName): 获取url中指定paramName的值
 * sentry(des,arr): 哨兵模式的顺序表查找
 * binarySearch(des,arr): 折半查找
 * bubbleSort(arr): 冒泡排序
 * selectSort(arr): 简单选择排序
 * quickSort(arr): 快速排序
 * swap(arr,a,b): 交换数组的a,b的值
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
        sentry: function (des, arr) {
            if (!(arr instanceof Array))
                return "arr is not array";
            var i;
            arr[0] = des;
            i = arr.length;
            while (arr[i] != des) {
                i--;
            }
            return i;
        },
        binarySearch: function (des, arr) {
            if (!(arr instanceof Array))
                return "arr is not array";
            var low = 0;
            var high = arr.length;
            var mid;
            while (low <= high) {
                mid = Math.floor((low + high) / 2);
                if (arr[mid] < des) {
                    low = mid + 1;
                } else if (arr[mid] > des) {
                    high = mid - 1;
                } else {
                    return mid;
                }
            }
            return 0;
        },
        bubbleSort: function (arr) {
            if (!(arr instanceof Array))
                return "arr is not array";
            var flag = true;
            for (var i = 0; i < arr.length - 1 && flag; i++) {
                flag = false;
                for (var j = arr.length - 1; j >= i; j--) {
                    if (arr[j] < arr[j - 1]) {
                        var temp = arr[j];
                        arr[j] = arr[j - 1];
                        arr[j - 1] = temp;
                        flag = true;
                    }
                }
            }
            return arr;
        },
        selectSort: function (arr) {
            if (!(arr instanceof Array))
                return "arr is not array";
            for (var i = 0; i <= arr.length - 1; i++) { //这里是否加=
                var min = i;
                for (var j = i + 1; j <= arr.length - 1; j++) {
                    if (arr[min] > arr[j])
                        min = j;
                }
                if (i != min) {
                    this.swap(arr, i, min)
                }
            }
            return arr;
        },
        swap: function (arr, a, b) {
            var temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
            return arr;
        },
        qsort: function (arr, low, high) {
            var pivot;
            if (low < high) {
                pivot = Partition(arr, low, high)
                this.qsort(arr, low, pivot - 1);
                this.qsort(arr, pivot + 1, high)
            }
        },
        Partition: function (arr, low, high) {
            var pivotkey = arr[low];
            while (low < high) {
                while (low < high && arr[high] >= pivotkey)
                    high--;
                this.swap(arr, low, high)
                while (low < high && arr[low] <= pivotkey)
                    low++;
                this.swap(arr, low, high)
            }
            return low;
        },
        quickSort: function (arr) {
            if (!(arr instanceof Array))
                return "arr is not array";
            this.qsort(arr, 0, arr.length - 1);
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