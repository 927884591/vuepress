### webpack的基本使用

### 安装

需要先安装有node环境，中使用node.js的包管理管理工具下载webpack

```
npm install webpack@3.6.0 -g   //指定webpack的版本为3.6.0并且是全局安装
```

### webpack的基本使用

```
webpack 入口文件 打包完后输出的目标目录    			
```

### 配置webpack文件

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

### 项目中安装

```
进入项目的目录
cd xxx
npm install webpack@3.6.0 --save-dev
```

- 开发时依赖			--save-dev  或则 -D
- 运行时依赖         -S

### webpack中的loarder

loarder类似于webpack的扩展插件，sacss或less需要转成css，而.vue文件也需要转换成js文件，这时候我们就会用到这些对应的loarder文件取扩展webpack的功能。

```
npm install -D xxx-loader   // 开发时依赖
```

> 踩的坑，版本不对会报错，可以先安装好对应的loader，在安装webpack，有些loader需要高版本的webpack，则先安装高版本的webpack后在安装loader，后在把webpack的版本降下来。



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
