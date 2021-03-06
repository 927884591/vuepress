# 前端模块化

## 介绍

首先得理解模块，我自己的理解就是每个模块相当于一个单独的功能，且开发中的其他人也需要用到这些功能的话也可以使用（复用）。而就是因为这个特性，我们才需要前端模块化，这些功能可以复用，单独导出，其他的人就可以使用该功能，每个模块都有自己的作用域，也不会产生变量污染的问题。

> 模块化在开发中可以大大的提高效率

模块化有很多的实现工具。node.js 中使用的 common.js 来做模块化。

实现模块化的方法

- 导出
- 导入

es6 的语法是使用

```javascript
export { 导出的object or var or function or class }
```

导入

```javascript
import{导入的变量} from "导入的文件"
```

> 导入的名字必须一致，否则会出问题

在 html 引用 js 代码需要加一个 type 属性，属性值为 moduel

```html
<script scr="xxx.js" type="moduel"></script>
```

这样浏览器才会给我们解析

## 定义别的名字

```javascript
export default 导出的内容 //只可以导出一个
```

## 导入所有变量

```javascript
import * as 对象名 from "引入文件路径"
//它会把引入文件中的所有变量放到你命名的对象命名中，如果想访问直接： 对象名.xxx
```
