# Vuex

## 简介

vuex给vue组件控制状态和监控状态的插件，相当于一个管理变量的一个管家，这有什么好处呢？如果组件与组件之间的关系离的远而不仅仅只是子传父或者父传子，这样的传值就会很复杂，我们可以把想共享的变量放到一个公共的对象中，如何组件都可以访问的到的，我们就能很好的解决这个问题，所以有了vuex。

vuex有三种状态

- state
- view
- actions

数据驱动视图，而视图交互产生的事件又驱动数据

![Pq3W79CcQEzFNMb](https://s2.loli.net/2022/01/10/Pq3W79CcQEzFNMb.png)

## 安装

```
npm i --save vuex			//安装到运行时
```

## vuex的使用

最简单的vuex的程序

```javascript
//index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    //需要共享的变量放这里
  }，
  mutations:{
  	//需要处理的变量都要经过这个，否则devtools工具无法监控
  	//这个会默认传一个state过来
	},
  actions:{
		
  },
  modules:{
    
  },
  getters:{
    //类似于computed属性，里面定义是一个函数，可以当作一个属性去使用
    //在这里写方法都会默认传两个参数过来state和getters本身
  }
})
export default store			//把vuex导出去
```

```javascript
//APP.vue文件中
import Vue from 'vue'
import store from '.store'
//挂载到vue中vue.protype.$store就可以使用变量
new Vue({
  el: '#app',
  store,
})
```

### mutations的传参

```javascript
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    increase() {
      let num = 5
      this.$store.commit("increase",num);		//组件可以传值给mutations
    },
    decrease() {
      let num = 3
      this.$store.commit("decrease",num);
    },
  },
};
```

```javascript
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increase(state,num) {			//第二个参数则为传过来的参数
      state.count+num;
    },
    decrease(state,num) {
      state.count-num;
    },
  },
  actions: {},
  modules: {},
});
```

### mutations的传参风格

可以把mutations分成两部分，一部分是事件类型，一个是回调函数

```javascript
mutations:{
	incretment(){
			//改变state的参数
	}
}					//incretment可以看成事件类型，(){}看成回调函数
```

传一个对象过去

```javascript
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    increase() {
      let num = 5
      this.$store.commit({
        type:"increase",
        num															//对象传值风格
      });		//组件可以传值给mutations
    },
    decrease() {
      let num = 3
      this.$store.commit("decrease",num);
    },
  },
};
```

```javascript
export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increase(state,payload) {			//第二个参数则为传过来的参数
      state.count+payload.num;				//一个对象接收过来然后使用
    },
    decrease(state,num) {
      state.count-num;
    },
  },
  actions: {},
  modules: {},
});
```

