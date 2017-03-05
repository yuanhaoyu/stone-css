//从url中获取某参数对应的值
function S_getUrl(paramName) {
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
}

//获取时间函数
var S_time = new function() {
    var myDate = new Date();
    this.getSimpleDate = function() {
        return myDate;
    };
    this.getWeekdat = function() {
        return myDate.getDay();
    }
    this.getYear = function() {
        return myDate.getFullYear();
    }
    this.getMonth = function() {
        return myDate.getMonth() + 1;
    };
    this.getDay = function() {
        return myDate.getDate();
    };
    this.getHour = function() {
        return myDate.getHours();
    };
    this.getMin = function() {
        return myDate.getMinutes();
    };
    this.getSec = function() {
        return myDate.getSeconds();
    }
}

//哨兵模式 （有序表查找）
/**
*查找的时候如果用for的，可以改进为whie(a!=des) 这样可以减少a的越界判断
*/
function S_sentry(des, arr) {
    if (!(arr instanceof Array))
        return "arr is not array";
    var i;
    arr[0] = des;
    i = arr.length;
    while (arr[i] != des) {
        i--;
    }
    return i;
}

//折半查找 （有序表查找）
function S_binarySearch(des, arr) {
  if (!(arr instanceof Array))
      return "arr is not array";
  var low=0;
  var high=arr.length;
  var mid;
  while (low<=high) {
    mid=Math.floor((low+high)/2);
    if(arr[mid]<des){
      low=mid+1;
    }else if (arr[mid]>des) {
      high=mid-1;
    }else{
      return mid;
    }
  }
  return 0;
}

//冒泡排序(改进)
function S_bubbleSort(arr){
  if (!(arr instanceof Array))
      return "arr is not array";
  var flag=true;
  for(var i=0;i<arr.length-1 && flag;i++){
    flag=false;
    for(var j=arr.length-1;j>=i;j--){
      if(arr[j]<arr[j-1]){
        var temp=arr[j];
        arr[j]=arr[j-1];
        arr[j-1]=temp;
        flag=true;
      }
    }
  }
  return arr;
}

//简单选择排序
function S_selectSort(arr){
  if (!(arr instanceof Array))
      return "arr is not array";
  for(var i=0;i<=arr.length-1;i++){  //这里是否加=
    var min=i;
    for(var j=i+1;j<=arr.length-1;j++){
      if(arr[min]>arr[j])
        min=j;
    }
    if(i!=min){
      swap(arr,i,min)
    }
  }
  return arr;
}

//快速排序
function S_quickSort(arr){
  if (!(arr instanceof Array))
      return "arr is not array";
  qsort(arr,0,arr.length-1);
  return arr;
}

function qsort(arr,low,high){
      var pivot;
      if(low<high){
        pivot=Partition(arr,low,high)
        qsort(arr,low,pivot-1);
        qsort(arr,pivot+1,high)
      }
}

function Partition(arr,low,high){
  var pivotkey=arr[low];
  while(low<high){
    while(low<high && arr[high]>=pivotkey)
      high--;
      swap(arr,low,high)
    while(low<high && arr[low]<=pivotkey)
      low++;
      swap(arr,low,high)
  }
  return low;
}

//数字交换通用函数
function swap(arr,a,b){
  var temp = arr[a];
  arr[a]=arr[b];
  arr[b]=temp;
  return arr;
}

var res = S_selectSort([2,6,3,7,1])
console.log(res)
