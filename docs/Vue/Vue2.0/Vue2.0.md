## Vue的简介

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的[**渐进式框架**][1]。

> Vue官方网站的介绍

### Vue的安装

有两种方式安装

- 使用外链式安装

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  ```

  > 保持最新Vue的版本

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
  ```

  > 指定Vue的版本

- 使用本地文件

  [开发版本](https://cn.vuejs.org/js/vue.js)

  [生产版本](https://cn.vuejs.org/js/vue.min.js)

  > 自己开发时建议使用开发版本

### node.js

为什么会扯到node.js呢？因为我们开发时需要用[node.js](https://nodejs.org/zh-cn/)的npm包管理工具。而包管理工具类似于手机里的应用商店，有很多的free的应用，而npm也包括有vue，vue-cli，webpack等我们开发时都需要用的工具。

[1]:可以嵌套多种格式的代码，一步步完善自己的项目。例如自己的项目用的是jquery想使用vue框架的东西，就可以一步步慢慢改。

## Vue的基本语法

### Mustache语法

```html
<body>
    <div id="app">{{msg}}</div> //可以调取到data的属性
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
        },
      });
    </script>
  </body>
```

> 在Mustuche语法中也可以写简单的表达式 + - * / ，并且只能写在标签内容里。如果需要绑定标签属性的值可以使用v-bind指令

## Vue的指令

### v-model

一般适用于input的输入框和textarea中实现双向绑定。

在radio

在checkbox中一个单选和多选

单选返回的值是布尔值

而多选返回的值是个数组

v-model中的修饰符

- lazy		//用户输入完成回车后才赋值
- number       用户输入的字符转化为number类型（input的type=“number”的时候）
- trim      删除用户输入两边的空格。保留主要的文字

### v-on

事件触发的变量，常用的事件有：

- click
- keyup

以及还有事件修饰符

- `.stop` - 调用 `event.stopPropagation()`。
- `.prevent` - 调用 `event.preventDefault()`。
- `.capture` - 添加事件侦听器时使用 capture 模式。
- `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
- `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
- `.native` - 监听组件根元素的原生事件。
- `.once` - 只触发一次回调。
- `.left` - (2.2.0) 只当点击鼠标左键时触发。
- `.right` - (2.2.0) 只当点击鼠标右键时触发。
- `.middle` - (2.2.0) 只当点击鼠标中键时触发。
- `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

v-on有一个语法糖，可以简写成@event。

```html
<body>
    <div id="app">
      <div>1 + 1 = {{sum}}</div>
      <div @click="test">{{msg}}</div>
    </div>

    <script>
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
          name: "test!!!",
        },
        computed: {
          sum() {
            return 1 + 1;
          },
        },
        methods: {
          test() {
            this.msg = "hello," + this.name;
          },
        },
      });
    </script>
  </body>
```

v-on会产生一个鼠标对象，而这个鼠标对象在你不传值的情况下就会传参数过去

```html
<body>
    <div id="app">
      <div @click="test(123,$event)">test</div>	//使用$event可以直接传鼠标事件到test方法中
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
        },
        methods: {
          test(number, event) {
            console.log(number, event);
          },
        },
      });
    </script>
  </body>
```

![Xmlp5YUWiEyxhu8](https://s2.loli.net/2021/12/22/Xmlp5YUWiEyxhu8.png)

> 而如果你需要鼠标event对象的参数，也需要其他的参数的话就可以使用$event，什么也不传



### v-once

只渲染一次，后续中改变这个值也不会重新渲染。

```html
<div id="app">
      <div>{{msg}}</div>
      <div v-once>{{msg}}</div>
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
        },
      });
    </script>
```

### v-html

```html
<body>
    <div id="app">
      <div v-html="url"></div>
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          url: '<a href="https://www.baidu.com">百度</a>',
        },
      });
    </script>
  </body>
```

![8oaszGdIqEvwJkA](https://s2.loli.net/2021/12/21/8oaszGdIqEvwJkA.png)

> 可以渲染html的标签跟类似的还有一个时v-text

### v-text

```html
<body>
    <div id="app">
      <div v-text="url"></div>
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          url: '<a href="https://www.baidu.com">百度</a>',
        },
      });
    </script>
  </body>
```

![asB2q7iSxgCRyNV](https://s2.loli.net/2021/12/21/asB2q7iSxgCRyNV.png)

### v-bind

绑定标签的属性值

绑定的值可以是个对象，也可以是个数组

```html
<style type="text/css">
      .display {
        display: none;
      }
      .show {
        display: block;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div @click="doThis">no</div>		//点击这个div标签就会触发doThis方法
      <div :class="isActive">yes</div>		//默认渲染，是隐藏
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          isActive: "display",	//默认是display
        },
        methods: {
          doThis() {
            this.isActive = "show"; 	//点击后把show样式绑定给div标签
          },
        }, 
      });
    </script>
  </body>
```

### v-for

v-for可以用于遍历某个数组或某个对象，可以拿到数组的属性值和下标值,使用key可以提高性能。

```html
    <style>
      .color_red {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <div
        @click="red"
        :class="{'color_red':isActive}"
        v-for="(m,index) in msg"
      >
        {{index}}-{{m}}
      </div>
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          msg: ["yes", "no"],
          isActive: false,
        },
        methods: {
          red() {
            console.log(111);
            this.isActive = true;
          },
        },
      });
    </script>
  </body>
```

![9OHSvQpYke1zPAV](https://s2.loli.net/2021/12/22/9OHSvQpYke1zPAV.png)

### v-show

跟v-if的区别就是v-show是隐藏了该标签，使用了css样式中的display：none的属性。

```html
  <body>
    <div id="app">
      <div>The show</div>
      <div v-show="isTrue">yes</div>
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          isTrue: false,
        },
      });
    </script>
  </body>
```

![SUH3mf9j15W86OD](https://s2.loli.net/2021/12/23/SUH3mf9j15W86OD.png)

> 通过数组的索引值修改参数不是响应式的！！！！！

### v-if，v-else，v-else-if

这个是条件渲染语句，条件成立则渲染，条件不成立则不渲染。

```html
<body>
    <div id="app">
      <div v-if="isTrue">11111</div>
      <div v-else="isTrue">2222</div>
    </div>
    <script>
      let app = new Vue({
        el: "#app",
        data: {
          isTrue: false,
        },
      });
    </script>
  </body>
```

> 简单的条件可以使用v-if等指令，但复杂的条件处理建议使用computed属性。

## 计算（computed）属性

![urEc1hMFljqdo5s](https://s2.loli.net/2021/12/22/urEc1hMFljqdo5s.png)

把他当作一个属性而不是方法，可以使用mustuche语法调用它返回的值。

>  computed的属性必须有个返回值，计算属性有缓存，性能会更好相对于methods

```html
<body>
    <div id="app">
      <div>{{msg}}</div>
      <div>1 + 1 = {{sum}}</div>
    </div>

    <script>
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
        },
        computed: {
          sum() {
            return 1 + 1;
          },
        },
      });
    </script>
  </body>
```

![6x5o3fLpmsgRDNO](https://s2.loli.net/2021/12/22/6x5o3fLpmsgRDNO.png)

## 组件化

> 每一个组件需要一个父标签扩起来

#### 全局组册组件

- 创建组件构造器

  ```html
  let cpn = vue.extend({
  	template:`
  <div>test</div>
  <p>
    yes
  </p>
  <p>
    黄豆
  </p>
  	`
  })
  ```

  

- 注册组件

  ```html
  vue.component("标签名",构造器变量);
  ```

  > ​	标签名不能使用驼峰命名法，主要原因是标签不区分大小写。

- 使用组件

  - 直接把注册组件中的标签名放到vue挂载的标签中即可生效。

#### 局部组件

```html
let cpn = vue.extend({
	template:`
<div>test</div>
<p>
  yes
</p>
<p>
  黄豆
</p>
	`
})
let app = new Vue({
el:"#app",
components:{
cpn:cpn	//属性名是标签，而树枝上选择的构造器模版
}
})
```

### 父子组件

```html
//组件中也可以使用components属性，使用该属性后组册的组件成为子组件。

<body>
  <div id="app">
    <cpn1></cpn1>
  </div>
</body>



//这里写两个组件构造器
let cpn = vue.extend({
	template:`
<div>test</div>
<p>
  yes
</p>
<p>
  黄豆
</p>
	`
})

let cpn1 = vue.extend({
	template:`
<div>test1</div>
<p>
  yes
</p>
<p>
  黄豆
</p>
<cpn></cpn>
	`，
components:{
cpn:cpn,     //属性名是标签，而树枝上选择的构造器模版
}
})
let app = new Vue({
el:"#app"
components:{
cpn1:cpn1
}
})



```

### 注册组件的语法糖

语法糖就是不需要Vue.extend()

注册的时候使用构造器构造模版即可

```html
<body>
    <div id="app">
      <div>111</div>
      <cpn></cpn>
    </div>
    <script>
      /* let cpn = Vue.extend(); */   //可以不需要这句话，就是以前有三步而现在只需要两步就可以搞定
      Vue.component("cpn", {
        template: `
        <div>
          <div>222</div>
          <div>222</div>
          <div>222</div>
        </div>
        `,
      });
      let app = new Vue({
        el: "#app",
        data: {
        },
      });
    </script>
  </body>
```

### vue模板的分离写法

template中可以使用标签获取或者类获取

```javascript
<body>
    <div id="app">
      <div>111</div>
      <template id="cpn">
        <div>
          <div>11</div>
          <div>222</div>
          <div>11</div>
          <div>222</div>
          <cpn1></cpn1>
        </div>
      </template>
      <template id="cpn1">
        <div>222test</div>
      </template>
    </div>
    <script>
     /* let cpn = Vue.extend();*/
      Vue.component("cpn", { 				//注册全局组件父cpn
        template: "#cpn",
        component: {
          cpn1: {			
            template: "cpn1",  		//注册子组件cpn1
          },
        },
      });
      let app = new Vue({
        el: "#app",
        data: {},
      });
    </script>
  </body>
```

### 为什么组件里的data只能使用函数

主要的原因是函数每次调用会创建新的内存地址，而如果是一个对象的话会一直使用一个地址，一个对象的里面的值，所有使用这个组件里的数据都会被改，而我们需要的是同一个组件数据需要分离，所以我们才需要使用函数。

### 父子组件之间的通信

#### 父组件给子组件传值

使用的是props的属性，且定义在子组件中，后续使用v-bind把父组件的值绑定到子组件props定义的变量中，

值时绑定给组件标签的，props有两种写法，推荐使用对象这种写法，因为可以对传过来的值做类型限制和设定默认值

- props可以是个对象

  ```html
  <body>
      <div id="app">
        <div>
          <cpn :cmovies="movies"></cpn>
        </div>
      </div>
      <template id="cpn">			//组件
        <div>
          <div v-for="item in cmovies">{{item}}</div>	//遍历cmovies这个数组里的值。
        </div>
      </template>
      <script>
        let cpn = {
          template: "#cpn",
          props: {
            cmovies:Array 			//对象的写法
          }
  				/*props: { 		//可以做类型限制和默认值的设定
            cmovies:{
            type:Array,
            defult:[] //填写默认值
            }			//对象的写法
          }*/
        };		//
        let app = new Vue({
          el: "#app",
          data: {
            movies: ["毒液", "蜘蛛侠", "钢铁侠", "复仇者联盟"],
          },
          components: {
            cpn,
          },
        });
      </script>
    </body>
  ```

  

- props也可以是个数组

  ```html
  <body>
      <div id="app">
        <div>
          <cpn :cmovies="movies"></cpn>
        </div>
      </div>
      <template id="cpn">			//组件
        <div>
          <div v-for="item in cmovies">{{item}}</div>	//遍历cmovies这个数组里的值。
        </div>
      </template>
      <script>
        let cpn = {
          template: "#cpn",
          props: ["cmovies"], //把cmovies看成一个变量而不是一个字符串
        };		//
        let app = new Vue({
          el: "#app",
          data: {
            movies: ["毒液", "蜘蛛侠", "钢铁侠", "复仇者联盟"],
          },
          components: {
            cpn,
          },
        });
      </script>
    </body>
  ```

  ### 子组件传值到父组件

  > 使用的是自定义事件

 一般需要写三个事件

- 子组件的事件监听，如果监听到就使用this.$emit("自定义事件名字",需要传的值)
- 在组件标签中监听子组件传过来的自定义事件名字 （值的话是默认发）
- 组件标签中的自定义事件监听到了，父组件就使用函数去接收

```html
<body>
		<div id="app">
			<div>
				<cpn :cmovies="movies" @ftest="ftest"></cpn> <!--自定义事件，监听到调用ftest方法（发送过来的值会自动传过去，不需要我们在写参数进去）-->
			</div>
		</div>
		<template id="cpn">
			<div>
				<div v-for="item in cmovies" @click="test(item)">{{item}}</div> <!--把item值传到事件方法中-->
			</div>
		</template>
		<script>
			let cpn = {
				template: "#cpn",
				props: ["cmovies"],
				methods: {
					test(item){
						this.$emit("ftest",item); //发送自定义事件，并且传值到自定义事件中
					}
				}
			};
			let app = new Vue({
				el: "#app",
				data: {
					movies: ["毒液", "蜘蛛侠", "钢铁侠", "复仇者联盟"],
				},
				components: {
					cpn,
				},
				methods:{
					ftest(item){
						console.log(item);   //打印子组件传过来的值
					}
				}
			});
		</script>
	</body>
```

小小练习

- 子传父
- 父传子
- 实现子组件的值和父组件的值相等
- cnum2是cnum1的100倍

```html
<body>
    <div id="app">
      <cpn
        :num1="number1"
        :num2="number2"
        @tofather1="change1"
        @tofather2="change2"
      ></cpn>
    </div>
    <template id="cpn">
      <div>
        <div>父组件传过来的值{{num1}}</div>
        <div>子组件{{cnum1}}</div>
        <input type="text" name="" id="" v-model="cnum1" @input="tofather1()" />
        <div>父组件传过来的值{{num2}}</div>
        <div>子组件{{cnum2}}</div>
        <input type="text" name="" id="" v-model="cnum2" @input="tofather2()" />
      </div>
    </template>
    <script>
      let cpn = {
        template: "#cpn",
        props: {
          num1: Number,
          num2: Number,
        },
        data() {
          return {
            cnum1: this.num1,
            cnum2: this.num2,
          };
        },
        methods: {
          tofather1() {
            this.cnum2 = this.cnum1 * 100;
            this.$emit("tofather1", this.cnum1);
            this.$emit("tofather2", this.cnum2);
          },
          tofather2() {
            this.cnum1 = this.cnum2 / 100;
            this.$emit("tofather2", this.cnum2);
            this.$emit("tofather1", this.cnum1);
          },
        },
      };
      let app = new Vue({
        el: "#app",
        data: {
          number1: 1,
          number2: 2,
        },
        components: {
          cpn,
        },
        methods: {
          change1(value) {
            this.number1 = parseInt(value);
          },
          change2(value) {
            this.number2 = parseInt(value);
          },
        },
      });
    </script>
  </body>
```

### 组件插槽

> 插槽主要是为了提升组件的扩展性，

```html
<body>
    <div id="app">
      <p>组件的基本使用</p>
      <div>{{msg}}</div>
      <cpn>
        <div>444</div>
      </cpn>
      <div>----------</div>
      <cpn></cpn>
    </div>
    <template id="cpn">
      <div>
        <div>111</div>
        <div>222</div>
        <slot>333</slot>
        <!-- cpn标签汇中没有写有则默认使用<slot></slot>标签中的模版 -->
      </div>
    </template>
    <script>
      let cpn = {
        template: "#cpn", //组件构造器
      };
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
        },
        components: {
          cpn, //注册组件
        },
      });
    </script>
  </body>
```

### 具名插槽

只有使用该名字的才会替换，如果没有则使用默认的指定插槽

```html
<body>
    <div id="app">
      <p>组件的基本使用</p>
      <div>{{msg}}</div>
      <cpn>
        <div slot="center">444</div> <!--只有name的属性值为center才会修改，意思就是把属性值为center的slot插槽替换成该语句 -->
      </cpn>
      <div>----------</div>
      <cpn></cpn>
    </div>
    <template id="cpn">
      <div>
        <div>111</div>
        <div>222</div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
        <!-- cpn标签汇中没有写有则默认使用<slot></slot>标签中的模版 -->
      </div>
    </template>
    <script>
      let cpn = {
        template: "#cpn", //组件构造器
      };
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
        },
        components: {
          cpn, //注册组件
        },
      });
    </script>
  </body>
```

### 作用域插槽

作用域插槽是为了使用子组件里的数据，而不是父组件里的数据

我们在使用组件时拿到的数据都是父组件的，而我们想在组件

```html
<body>
    <div id="app">
      <p>组件的基本使用</p>
      <div>{{msg}}</div>
      <cpn>
        <template slot="center" slot-scope="slot"> 	//这里的slot是引用了子组件的data数据，slot-scope是固定写法
          <ul>
            <li v-for="item in slot.data">{{item}}</li>		//这里的data就是子组件的data数据
          </ul>
        </template>
      </cpn>
      <div>----------</div>
      <cpn></cpn>
    </div>
    <template id="cpn">
      <div>
        <div>111</div>
        <div>222</div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center" :data="languages"><span>中间</span></slot>			//这里的data是可以随便取的名字，但引用时需要属性名一致
        <slot name="right"><span>右边</span></slot>
        <!-- cpn标签汇中没有写有则默认使用<slot></slot>标签中的模版 -->
      </div>
    </template>
    <script>
      let cpn = {
        template: "#cpn", //组件构造器
        data() {
          return {
            languages: ["javascript", "java", "c++", "c#"],    //子组件的数据
          };
        },
      };
      let app = new Vue({
        el: "#app",
        data: {
          msg: "hello，world",
        },
        components: {
          cpn, //注册组件
        },
      });
    </script>
  </body>
```

> 总结：slot标签中可以使用nam标签属性（具名插槽），而自定义的绑定属性就是作用域插槽。

### 生命周期函数

create

```
每个组件被创建出来之后，都会调用这个函数。
```

