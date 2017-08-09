let testStr = ["i had a dozen,", "i had a gun,", "i had a plan,", "i'vehad a dozen,", "i'vehad a gun,"]
let testReference = ["i had a pen"]

function mark (str, reference) {
  let grade1 = [] // 存放空格提取的分数
  let max1 = 0 // 存放空格提取的最高得分
  let grade2 = [] // 存放含有提取的分数
  let max2 = 0 // 存放含有提取的最高得分
  let result = 0

  str.map(data=>{
    reference.map(item=>{
      grade1.push(spaceMethod(data, item))
    })
  })
  str.map(data=>{
    reference.map(item=>{
      grade2.push(ifMethod(data, item))
    })
  })
  max1 = Math.max.apply(null,grade1)  
  max2 = Math.max.apply(null,grade2)
  result = Math.max(max1, max2)
  console.log(grade1)
  console.log(grade2)
  // console.log(max1)
  // console.log(max2)
  return result
}

// 空格提取比对算分
function spaceMethod (str, reference) {
  let strArr = str.split(' ')
  let referenceArr = reference.split(' ')
  let grade = 0
  // 以小的句子为主，判断正确率
  if(strArr.length < referenceArr.length) {
    for (var i in strArr) {
      if (onlyText(strArr[i].toLowerCase()) === onlyText(referenceArr[i].toLowerCase())) {
        grade = grade + 1
      }
    }
  } else {
    for (var j in referenceArr) {
      if (onlyText(strArr[j].toLowerCase()) === onlyText(referenceArr[j].toLowerCase())) {
        grade = grade + 1
      }
    }  
  }
  return grade / parseInt(referenceArr.length) || 0
}

// 含有提取算分
function ifMethod (str, reference) {
  let referenceArr = reference.split(' ')
  let strArr = (str + '').split(' ')
  let grade = 0
  for (var i in strArr) {
    console.log(onlyText(reference.toLowerCase()))
    console.log(onlyText(strArr[i]).toLowerCase())
    console.log(onlyText(reference.toLowerCase()).indexOf(onlyText(strArr[i]).toLowerCase()))
    if (onlyText(reference.toLowerCase()).indexOf(onlyText(strArr[i]).toLowerCase())!=-1) {
      grade = grade + 1
    }
  }
  console.log('------------')
  return grade / parseInt(referenceArr.length) || 0
}

// 正则去掉所有标点符号和多余空格
function onlyText (str) {
  let result = str.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"").trim()
  return result
}

let a = mark(testStr, testReference)
console.log(a)