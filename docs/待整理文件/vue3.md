## vue3

<<<<<<< HEAD

### watch的基本使用

会监听data的数据变化，一旦变化则会触发watch监听事件，做一些逻辑的处理

```js
data(){
  return{
    question:"hello world"
  }
},
watch:{
  question(newValue,oldValue){	//第一个值为修改后的值，第二个是旧的值  ！！且这个监听的这个必须是和data的key是一样的名字
      
  }
}
```

### 深度侦听

如果是想侦听对象里的属性，则需要开启深度监听开能监听的到，

```js
data(){
  return {
    info:{
      name:"kobe",
      age：18
    }
  }
  
},
watch:{
  info:{
    handler(newValue,oldValue){
      console.log(newValue,oldValue)
    },
    deep:true,//开启深度监听
    immediate:true //页面刷新后会立即执行一次，因为oldValue没有值，则oldValue是一个undefined。 
  }
}
=======
### 基本语法  

```js
vue.createApp({
    template:""
    data(){//vue3中一定要选择方法来使用data否则会报错
    return {
        
    }
}
})
>>>>>>> 5254aeb61b9397b55f2cd03c2e616190a518338c
```

动态绑定一个对象

```html
<body>
    <div id="app">
        {{message}}
        <div v-bind="obj">yes</div>
    </div>
    <script>
        Vue.createApp({
            data() {
                return {
                    message: "hello world",
                    value: "style",
                    obj: {
                        name: "ZHANGSAN",
                        age: 18,
                        height: 1.88
                    }
                }
            }
        }).mount("#app")
    </script>

</body>
```

### 父子组件之间的传递

与vue2的区别是子传父，发送自定义时间时需要自己定义一个emits属性

```js
export default {
    data(){
        return{
            //这里写data数据
        }
    }，
    emits：["add","sub"],//相对余vue2多了这个步骤，需要声明事件
    clickEvent(){//有个按钮触发这个事件
        this.$emit("add",需要传的值)//发送上面声明好的事件名称，也可以传值
    }
}
```

### 非父子组件通信

非父子组件通信指的是兄弟组件祖孙组件之间的通信

```js
//提供数据的组件
export default {
    data(){
        return{
            //这里写data数据
        }
    }，
   	provide:{
    name:"zhansan",
    age:18
}
    
}
//接收数据的组件
export default {
    data(){
        return{
            //这里写data数据
        }
    }，
	inject:["name","age"]//然后你就可以在自己的组件使用，这些数据就像data那样使用
    
}
```

