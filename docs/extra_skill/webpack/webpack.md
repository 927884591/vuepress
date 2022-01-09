# webpack的基本使用

## 安装

需要先安装有node环境，中使用node.js的包管理管理工具下载webpack

```
npm install webpack@3.6.0 -g   //指定webpack的版本为3.6.0并且是全局安装
```

## webpack的基本使用

```
webpack 入口文件 打包完后输出的目标目录    			
```

## 配置webpack文件

webpack的配置文件必须为

webpack.config.js    否则会报错没有找到配置文件

```javascript
let path = require("path");    //引入node.js的path！！！这个是node.js的内容
module.exports = {
  entry: "./src/main.js",						//入口文件,入口文件自己定
  output: {
    path: path.resolve(__dirname, "dist"),		//这个出口文件必须是一个绝对路径，而我们需要获取一个动态的绝对路径
    filename: "dist.js",   			//输出出去的文件名
  },
};
```

> 在终端使用的都是全局，而使用package.json跑的脚本会优先使用当前项目的包，而不是你计算机安装的全局的包

## 项目中安装

```
进入项目的目录
cd xxx
npm install webpack@3.6.0 --save-dev
```

- 开发时依赖			--save-dev  或则 -D
- 运行时依赖         -S

## webpack中的loarder

loarder类似于webpack的扩展插件，sacss或less需要转成css，而.vue文件也需要转换成js文件，这时候我们就会用到这些对应的loarder文件取扩展webpack的功能。

```
npm install -D xxx-loader   // 开发时依赖
```

> 踩的坑，版本不对会报错，可以先安装好对应的loader，在安装webpack，有些loader需要高版本的webpack，则先安装高版本的webpack后在安装loader，后在把webpack的版本降下来。

## css-loader和style-loader

```javascript
module: {
    rules: [
      {
        test: /\.css$/,				//正则表达式筛选.css文件才执行下面的语句
        use: ["style-loader", "css-loader"],				//处理css需要style-loader和css-loader，且顺序是从右向左读取
      },
    ],
  },
```

若果你使用的是less的则需要这css的基础上做添加一个less-loader

## less-loader

```javascript
module: {
    rules: [
      {
        test: /\.css$/,				//正则表达式筛选.css文件才执行下面的语句
        use: ["style-loader", "css-loader","less-loader"],				//处理css需要style-loader和css-loader，且顺序是从右向左读取
      },
    ],
  },
```

> 还是需要注意版本号，否则会报错，尽量保持一致

## url-loader

```javascript
//处理小于指定大小的图片文件，则会使用该loader
//一般处理的文件都为图片文件
module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,				//正则表达式筛选.png,jpg,gif,jpeg文件才执行下面的语句
        use: [{
          loader:"url-loader",
          option:{
            limit:13000
          }
        }],				//处理css需要style-loader和css-loader，且顺序是从右向左读取
      },
    ],
  },
```

需要处理路径问题

### File-loader

如果突变大于指定的大小则需要使用该loader取执行

### bable-loader

```javascript
//需要安装3个
npm install -D bable-loader @babel/core @babel/preset-env  
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,			//排除这两个目录的.js文件
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']			
        }
      }
    }
  ]
}

```

### vue-loader

```
是打包.vue的vue组件文件。
需要安装vue-loader 和vue-template-compiler   //而这两个是封装vue文件的所以是开发时依赖
```



### 使用webpack打包vue

```
特别注意的是，
需要把script放在需要挂在的块标签的下面，因为html是从上到下的处理，否则无法解析，导致没有找到标签
```



### 闲杂知识

```javascript
import Vue from "vue"
这里的Vue必须要跟vue模块中导出的变量名一致才行
而vue这里不写路径会直接从node_moduels中找

```

```
github中branch上分支
而发布出来的版本都会打一个tags
```

```
vue有两类版本
一个上runtime-only-> 代码中不能有任何的template
runtime-compiler->代码中可以使用template，因为有compiler编译template
如果使用webpack打包则需要指定版本
看下图
```

![CgZYjVJtq4RaovQ](https://s2.loli.net/2022/01/01/CgZYjVJtq4RaovQ.png)

```
导出可以使用export default //这个只可以导出一个不可以导出多个，这个的好处就是可以引用的时候可以给它起别的变量名。
export 
```

