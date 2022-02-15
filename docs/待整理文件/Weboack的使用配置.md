##  webpack的基本配置

webpack有几个必选项

- entry
- output
- module
- mode
- plugins

entry是入口文件

output是出口文件，这个文件也是一个对象，对象中含有连个属性

module有rules选项，rules是一个数组，数组的每一个下标都表示一个loader，

```js
const path = require("path") //node.js自带的一个可以动态获取绝对路径的方法
module.export = {
	entry:"入口文件",
    output:{
        path:path.resolve(__dirname,"./build"),//自定义输出路径为build
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.CSS$/, //正则表达式
                use:[
                    //因为加载.css文件不只是需要到一个loader，需要到cssloader和styleloader所以使用到这个完整的写法
                    "style-loader",
                    "css-loader"
                ]
            },  //每一个对象代表一个loader
            {
                //简易的写法
                test：/\.css$/,
                loader:"css-loader"  //只有一个loader的时候使用这种简易的写法
            }
        ],
    }
}
```

styleloader是把所有的样式写到了style标签中，而不是一个link链接过来的

### bable

bable是解决es5+与浏览器兼容的问题，因为还有小部分的浏览器只支持es5的语法，而这款工具就是解决了这个问题，把es5+的javascript的语法转成es5的语法。

#### 安装

```js
npm install @babel/core @babel/cli -D 	//开发时依赖，如果没有借助webpack的话可以不需要安装cli
```

### 使用

```js
npx bable ["需要转换的文件"] --out-dir ["输出的文件目录"] //npx 是指在node_modules文件中寻找bable，如果你是全局安装的bable则不需要这个选项  !!这个输出的是个文件
npx bable ["需要转换的文件"] --out-file ["输出的文件"] //可以输出文件
npx bable ["需要转换的文件"] --out-file ["输出的文件"] --plugins=["需要使用的插件"] //每个插件使用逗号隔开
```



### 安装常用的插件

```js
npm install @babel/plugin-trasform-arrow-functions -D//转换箭头函数的插件
```



###  安装预设

因为有很多的插件，一个一个的安装并且一个一个的使用比较麻烦，预设里带了一些常用的插件，我们直接使用预设就可以了

```js
npm install @babel/preset-env -D
```

### 使用预设

```js
npx bable ["需要转换的文件"] --out-file ["输出的文件"] --presets=["需要使用的预设"]//每个预设使用逗号隔开
```

### webpack的热更新

需要安装webpack

```js
//webpack.config.js文件中
const path = require("path")
export default {
    mode:"development",
    entry:"./main.js",
    output:""
    target:"web", //也可以使用别的环境例如node
    devserve:{
    //使用这个配置需  要安装webpack-dev-serve
    hot：true, //开启热更新  需要和target属性一起使用
   	open:true, //自动打开浏览器
    host:"0.0.0.0", //设置主机地址
    port:7777 //端口
}
}
```

这个只是开启了热更新，如果还要哪个模块需要热替换的话，还是需要到自己的代码中写一个判断

```js
if(module.hot){ //这里的module是一个全局的对象
    module.hot.accept("模块的路径",()=>{
        //热替换后的回调函数
    })
}
```

### 起别名和自动添加扩展名

```js
const path = require("path")
export default {
    resolve:{
        extensions:[".wasm",".mjs",".js",".json"],//如果有扩展名在内的话可以不用填，webpack会自动帮我们填写进去
        alias:{
            "@":path.resolve(__dirname,"./src")//给路径起别名
        }
    }
}
```

