## vue3

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
```

