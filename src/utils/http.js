/**
 * 原生 ajax 请求
 * @type {XMLHttpRequest}
 */
const request =  new XMLHttpRequest()
request.open("GET","www.baidu.com")
request.onreadystatechange = function (){
  if(request.readyState === 4 && request.status ===200){
    console.log(request.responseText)
  }
}
request.send()
