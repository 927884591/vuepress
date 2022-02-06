##  webpack的基本配置

webpack有几个必选项

- entry
- output
- module

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
