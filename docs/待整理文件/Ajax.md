```javascript
let xhr = new XMLHttpRequest() //
xhr.open('请求方式','url');
xhr.send()			//发送请求
xhr.onreadystatuschange = () => {
  if(xhr.readystatus === 4){	//状态码 0发送前，3是发送一部分，4是发送成功
    if(xhr.status >= 200 && xhr.status < 300){			//请求成功
      console.log()
    }
  }
}
```

```javascript
const express = require('express')
const app = express()
app.get('/请求路径',(request,respose) => {
  response.setHeader("Access-Control-Allow-Origin", "*"); //设置响应头，并且允许跨域
  response.send("test")			//响应并发送给客户端。
})
```

上面的发送到前端都是一个字符串的格式，而自负床的格式不能给我们很方便的使用它，例如传一个object到前端，而这个是一个字符串的话我们会不好处理。这时候我们就需要用到json格式，来帮我们把字符串的格式转化为object的格式

### 前端的转化

```javascript
//设置请求体的格式
xhr.reponseType = "json"			//设置好即可
```

### 后端的设置

```javascript
json.stringfiy(需要转化的对象或数组或别的)
app.post("/", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send(json.stringfiy('需要转化的对象或数组或别的'));
});
```

### 前端超时设置

```javascript
let xhr = new XMLHttpRequest()
xhr.timeout = 2000 				//延迟时间单位为毫秒
xhr.open('请求方式','url');
xhr.send()		
```

### 超时回调函数

```javascript
let xhr = new XMLHttpRequest()
xhr.timeout = 2000 				//延迟时间单位为毫秒
xhr.open('请求方式','url');
xhr.send()		
xhr.ontimeout = function (){
  console.log('超时')
}
```

### 手动取消请求

```javascript
let xhr = new XMLHttpRequest()
xhr.open('请求方式','url');
xhr.send()
xhr.abort()
```

### 防止重复请求问题

重复的请求会导致服务器压力过大，所以我们需要给重复请求弄一个策略来减轻服务器的负担

思路：弄一个变量判断是否正在发送，如果正在发送并且状态码已经为4的话就更改状态码

```javascript
let isSending = false
let xhr = new XMLHttpRequest()
if(isSending){
  xhr.abort()				//如果请求正在发送中，就放弃请求
}
xhr.open('GET','url');
xhr.send()
isSending = true
xhr.onreadystatuschange = () => {
  isSending = false
  if(xhr.readystatus === 4){	//状态码 0发送前，3是发送一部分，4是发送成功
    if(xhr.status >= 200 && xhr.status < 300){			//请求成功
      console.log()
    }
  }
}

```

### axios

axios是一个ajax的工具库，使用这个可以更方便的请求。

### 导入axios

- url链接导入
- 下载下来导入

### 设置默认url

因为每次请求时需要写请求的方式和url，我们可以在开头就声明好url的基本头信息

```javascript
axios.default.baseURL = 'http://127.0.0.1:8000'
```

发请求

```javascript
//get请求
axios.get('url',{
	params :{
		//url添加的参数
	}，
	headers：{
	//请求头的信息
	}
})
```

```javascript
//post请求
axios.post('url',{
	user:"admin",
  password:"admin"
	},{
  params :{
		//url添加的参数
	}，
	headers：{
	//请求头的信息
	}
	}
)
```

### axios直接发请求

```javascript
axios（{
methods:"post",
params:{
//url参数写这里
},
headers:{
//设置请求头信息
},
data:{
//请求体信息放这里
}
}）
```

jsonp的原理

```
先知道script标签是可以跨域的，而我们利用这个特性就可以解决跨域的问题

```

