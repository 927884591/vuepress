### Vue-route

vue的路由主要是给spa使用的，让每一标签都有指定的路径去找到该页面。SPA技术一般基于路由于组件，路由负责记录每个url和页面的映射关系，而页面又是由不同的组件构成。

前端发展的阶段

- 后端渲染阶段
- 前后端分离阶段
- SPA（single page application）阶段，就是在前后端分离的前提下加了一个前端路由

### SPA

#### location.hash()

```
SPA本质是使用location.hash()这个方法去切换锚点来达到切换网页的效果。
```

#### History.pushState()

```
也可以使用这个来达到刷新不请求数据，该方法需要传3个参数，分别是data，title，url，主要是最后的url的参数
这个很类似一个栈的结构，先进后出，就是浏览器的前进返回。
```

#### history.replaceState()

```
该方法没有前进和后退，只是切换到指定的url地址中，但也不会刷新网页
```

#### History.go()

```
跳转到指定的历史记录，参数是一个number值
```

#### history.back()

```
后退1个浏览历史记录
```

#### history.forward()

```
前进1个浏览历史记录
```

### 安装vue-router

```
npm install --save vue-router
```

#### 使用路由的步骤

1. 导入路由对象，并且调用Vue.use（VueRouter）
1. 创建路由实例，并且传入路由映射配置
1. 挂载到vue实例中
### 配置路由文件

配置文件中项目目录下的router/index.js中

```javascript
const routers = [			//配置映射关系是一个数组，而每一个映射关系是一个对象
{
	path:"/xxx",
	component:组件名				//在此之前，需要导入组件到该配置文件中
},
{
	path:"/xxx",
	component:组件名
},
]
```

然后中在使用

```html
<router-link to="路径"></router-link>			点击即可切换组件
<router-view />				//放哪显示
```

#### 页面重定向

```javascript
const routers = [			//配置映射关系是一个数组，而每一个映射关系是一个对象
{
	path:"",				//缺省路径
	redirect:"重定向的路径"			//缺省状态下重定向的的路径
},				
]
```

url中去掉hash（#）

```javascript
import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routers = [
  {
    path: "/helloworld",
    component: HelloWorld,
  },
];

let router = new VueRouter({
  routers,
  mode:"history"				//去掉hash（#）
});
export default router;

```

### router-link的属性值

- to							//跳转到什么路径
- replace           //没有浏览器前进和后退，且不需要传值
- tag     //已经取消

### 动态路由

如果路由的路径是不确定的话就可以使用动态路由。

例如用户，或者用户的id。

这时候可以给路由传一个参数

```javascript
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Me from "../views/Me.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),			//
  },
  {
    path: "/me/:userId",					//给路由传参数，而这个参数可以从¥route.params中拿到。route这个对象是哪个路由活跃时就会选用哪个路由的。
    name: "Me",
    component: Me,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

```

然后在App.vue这个组件里就使用拼接字符串的形式使用

```html
<router-link :to="'/me/' + userId">Me</router-link>
export default{
 data(){
return {
userid:"lisi"
}
}
}
```

则这个路由的路径就会赚到/me/lisi

### 路由懒加载

```javascript
{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),			//路由懒加载，使用懒加载语法
  },
  {
```

注意，如果页面没有请求到这个组件，而我们去调用这个组件的内容是会报错的， 懒加载会在打包的时候进行单独包装起来。

### 懒加载语法

```javascript
let xxx（变量名去接收） = () => import("路径")    //懒加载语法es6的语法
```

### 嵌套路由（子路由）

子路有的路径（path）中不需要加/

```html
//Message.vue
<template>
  <div class="message">
    <ul>
      <li>message1</li>
      <li>message1</li>
      <li>message1</li>
      <li>message1</li>
    </ul>
  </div>
</template>

```

```html
//News.vue
<template>
  <div class="about">
    <ul>
      <li>news1</li>
      <li>news1</li>
      <li>news1</li>
      <li>news1</li>
    </ul>
  </div>
</template>

```

```html
//Home.vue
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/home/news">新闻</router-link> |
    <router-link to="/home/message">消息</router-link>|
    <router-view />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

```

```javascript
//路由配置

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Me from "../views/Me.vue";
import Message from "../views/Message.vue";
import News from "../views/News.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "message",
        component: Message,
      },
      {
        path: "news",
        component: News,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/me/:userId",
    name: "Me",
    component: Me,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

```

###  路由的传参数

父组件传值给子组件需要在router-link标签中的to属性使用v-bind绑定值到组件中，然后在子组件的$route.params.变量名就可以中子组件拿到父组件传过来的变量值

```html
<router-link :to="'/me/' + userId">Me</router-link>
<script>
export default {
  data() {
    return {
      userId: "lisi",
    };
  },
};
</script>
```

这个是上面说过的方法

```html
<router-link :to="{path:"/me",query:{name:"张三",age:18,}}">Me</router-link>
<script>
export default {
  data() {
    return {
      userId: "lisi",
    };
  },
};
</script>
```

现在可以使用传参数 ，可以使用$route.query获取到这个对象。

### 导航守卫

每次点击跳转组件都会回调这个函数router.beforeEach(to, from,next),其中router就是我们router目录下index.js导出的router对象，这个对象里有一个before的方法to是下一个跳转的路由，from就是当前路由，next是一个方法，是可以跳转这个方法跳转到指定的路由组件。

### keep-alive

这个是vue内置的组件，而组件是可以使用标签使用的。如果需要哪个组件不用频繁的创建或销毁，就可以使用该组件

```html
<keep-alive>
	<router-view />		<!- 一般是这样子使用keep-alive，这样就会该区域的路由组件就不会频繁创建或销毁->
</keep-alive>
```

跟keep-alive的还有两个函数activited和deactivited一个是活跃状态就会回调而另一个相反
