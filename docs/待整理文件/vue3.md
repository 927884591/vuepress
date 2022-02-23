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

### 具名插槽

```vue
//App.vue文件
<template>
  <cpn>
    <template v-slot:hhh> hhh </template> //需要用一个template标签包裹，v-slot指定对应的插槽名称
  </cpn>
</template>

<script>
import Cpn from "./components/Cpn.vue";
export default {
  name: "App",
  components: {
    Cpn,
  },
};
</script>

//Cpn.vue文件
<template>
  <div>
    <h2>哈哈哈</h2>
    <slot name="hhh"></slot>//指定哪个名称的插槽填入这个地方
    <div>yes</div>
  </div>
</template>

<script>
export default {};
</script>
```

v-slot的语法糖是#号

```vue
<template #hhh> hhh </template> //使用v-slot的语法糖
```

### 动态组件     

```vue
<component :is="全局注册的组件或者局部注册的组件名称"></component>
```

### keep-alive

这个很简单，只需要一个keep-alive标签包裹需要保留状态的组件即可

```vue
<keep-alive>
    //里边写需要保留状态的组件
</keep-alive>
```

### $refs

 在vue中不推荐我们直接操作DOM，所有vue给了我们这个接口，可以获取DOM元素和组件

```html
<template>
	<h2 ref="title">
        哈哈哈哈
    </h2>
    <button @click="eventClick">
        获取h2元素
    </button>
</template>
<script>
	export default {
        methods:{
            eventClick(){
                console.log(this.$refs.title)
            }
        }
    }
</script>
```

![image-20220216120349594](C:\Users\ye\AppData\Roaming\Typora\typora-user-images\image-20220216120349594.png)

**如果这个给组件使用的话，可以调用组件的methods，data等这个组件的所有信息**

### $parent和$root

parent可以获取父组件的，而root可以获取根组件，这两个开发中都很少使用，因为把获取到的信息在子组件或者子孙组件使用的话可能会报错，因为你不知道父组件或者根组件到底有没有这个变量。

### $el

获取到的是组件的父元素。

### 生命周期

![image-20220216122710687](C:\Users\ye\AppData\Roaming\Typora\typora-user-images\image-20220216122710687.png)

- beforeCreate   //组件创建之前
- created    //组件创建之后
- beforeMount    //组件挂在之前
- mounted     //组件挂在之后
  - beforeUpdate      //组件数据发生更新之前
  - updated  //组件数据发生更新之后
- beforeUnmount     //组件摧毁之前
- Unmounted   //组件摧毁之后

对于有缓存的组件（keep-alive标签包裹的组件）可以使用activated和deactivated生命周期

### vue3的过渡动画

如果想单个组件或者单个元素添加动画的话可以使用trasform内置的全局组件包裹

```vue
<trasition name="test"> //这个name属性是一个类名头
	//需要添加动画的元素写在这里
</trasition>
<style scoped>
	.
</style>
```

### Mixin

组件相关的内容，就是组件与组件有相同的逻辑，相同的逻辑我们希望抽取出来，我们就可以使用Mixin

使用跟data和methods同级

```js
//demoMixin
export const demoMixin = {
    data(){
        
    },
    methods:{
        
    }
}
//App.vue
<template>
</template>
<script>
      import demoMixin from "demoMixin" //导入混入文件
      export default {
mixins:[demoMixin]
}
</script>
```

Mixin自己的合并规则

![image-20220218014409855](C:\Users\ye\AppData\Roaming\Typora\typora-user-images\image-20220218014409855.png)

### Composition API

在vue3以后使用的都是composition API不会像vue2使用例如一下配置：

```js
export default{
    data(){
        return{
            
        }
    },
    methods:{
        
    },
    computed:{
        
    },
    //生命周期函数
}
```

但vue3也是兼容这个语法。 

Composition API不支持this操作，也默认没有响应式。如果需要响应式我们需要导入vue中的ref或者active

```js
import {active} from "vue"
let counter = 100
const status = acrive({//active传过去的是一个对象
    counter, //把counter添加为响应式
})
import {ref} from "vue"
let counter = 100
counter = ref(100)

```

```js
<template>
{{counter}}	//因为ref在template标签中有自动解包  而且只是浅层解包，就是你把counter在赋值给一个te  st对象时，无法解包，我们只能test.counter.value才能拿到值  
</template>
import {ref} from "vue"
let counter = 100
counter = ref(100)//counter返回的是一个ref的对象，我们传过去的值会传给ref.value中
setup({//在setup中不能解包，所以我们想使用这个值时必须带.value
    console.log(counter.value)//100
    
})

```

### readonly

readonly的原理

```js
//是使用了proxy代理劫持
const test = {
    name:"zhansan"
}
const readonlytest = new Proxy(test,{
    get(test,key){
        return test[key] //返回原先的值
    },
    set(test,key){
    warning()//这里会发出警告
}
})
```

vue给我封装好了这个readonly方法我们就可以直接使用了

```js
const test = {
    name:"zhansan"
}
const readolytest = readonly(test)
readonlytest.name = "test"//无法更改发出警告
```

### 常用的Reactive API

![image-20220219003053190](C:\Users\ye\AppData\Roaming\Typora\typora-user-images\image-20220219003053190.png)

### toRefs

当一个对象已经用reactive包裹住，就是响应式的，如果我们把这个响应式的对象解构分别给N个变量的话，这些变量也不是响应式的。这个包裹的一定得是一个响应式的对象，不能是一个普通的对象

```js
const test = reactive({
    name:"zhangsan",
    age:18
})
let {name,age} = test //结构出来的变量，是没有响应式的
let {name,age} = toRefs(test) //这个是有响应式的，原理是把这个test对象传进去，然后把这个对象里边的属性使用ref包裹
let age = toRef(test,"age")//单个赋值，提高性能

```

### watch监听器

watch API在vue3中有两种用法

watch可以传的值

```js
//watch的第一个参数可以ref对象，reactive对象，函数，数组，数组中也只能包含ref对象，reactive对象，函数，vue源码中会做一个判断如果是数组就会遍历判断数组中那些元素是什么类型然后做对应的操作
watch(ref|reactive|function|arry,(newValue,oldValue){
      //值一旦发生改变就会触发该函数
      },
    {
        //option 类似于deep：true
        deep:true,
        immedate:true
    })
```



1. 如果监听的是reactive对象，我们需要在watch的第一个形参为geter函数

```js
let info = reactive({name:"zhangshan"})
watch(()=>info.name,(newValue，oldValue){
//值改变了做什么操作
})
```

2.  

###   自定义指令

我们什么时候用到自定义指令呢？我们会在操作DOM底层操作的时候会使用到这个API。生命周期函数根vue的生命周期类似

```js
export default {
    derectives:{
        focus:{  //新建了一个v-focus的自定义指令
            //这里写自定义指令的生命周期，例如
            mounted(el，bindings，vnode，preVnode){ //当当前的自定义指令应用到指定的元素中且元素挂载完成时会回调当前函数
                
            }
        }
    }
}
```

每一个生命周期都有四个参数传过来el，bindings，vnode，preVnode，

我们主要就用到前面两个参数el和bindings

bindings存放着自定义指令的修饰符和自定义指令传过来的参数

```html
<div v-test.aaa.bbb="'test'">/*这个自定义指令修饰符传过去为aaa和bbb且修饰符用对象保存，test作为参数传过去*/
    
</div>
```

### rander函数

这个函数会返回一个h()

```js
rander(){
    return h("标签名",{标签里的属性},[标签里的内容，可以是字符串，如果标签里还有多个标签的话就需要是个数组，而数组里面又是多个h()函数])
}
```

### teleport

这个是vue的一个内置组件，全局可以使用。主要是用来把一些html元素或者组件渲染到#app以外的位置。

有两个属性

1. to 
2. disable //禁用teleport

```html
<template>
	<teleport to="#test">  //这样就会把teleport的内容挂载到id为test的标签中
    </teleport>
</template>
```

### 源码解析

 vue中有三大核心源码

- complier //编译，需要把template模板中的代码编译成vnode（虚拟节点）
- runtime //渲染，把vnode渲染成真是DOM
- 

