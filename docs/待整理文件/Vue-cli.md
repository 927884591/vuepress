### vue-cli的安装

cli（Command Line Interface）

脚手架上建筑学上的概念，我们的认识里就是搭好的框架，条条框框的大致结构给弄好，后来在这结构中在做事情。

```
npm i -g @vue/cli				//全局安装脚手架
vue -V 		//查看脚手架版本
```

拉去cli2.x版本

```
npm i -g @vue/cli-init
```

### 创建项目

```
vue create 项目名字				//vue>3.0创建项目
vue init webpack 项目名字				//vue2.x创建项目
```

### 创建项目的选项

![RsYzS7jZLHmPd93](https://s2.loli.net/2022/01/01/RsYzS7jZLHmPd93.png)

### 禁用Eslint

```
可以在脚手架创建完成后并且又启用了Eslint，则可以去config/index.js去配置下是否启用Eslint的选项
```

### this的查找

```
一层一层往外找，直到找到第一个对象为止（object）而不是数组或则其他的。
```

