## git && github的基本使用

### 使用git的基本流程

1. 工作区与暂存区的交互；
2. 暂存区与本地仓库（分支）上的交互；
3. 本地仓库与远程仓库的交互。

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/25/162fcc0987bf1c0a~tplv-t2oaga2asx-watermark.awebp)

### 图形化安装

[git官方网站](https://git-scm.com/download/mac)

也可以使用

使用brew install git

### 配置

git的选项命令都是使用--

```
$ git config --global user.name test
$ git config --global user.email test@qq.com
```

> 这两个是最重要的命令，

### 列出git的配置

使用的是git config 命令

```
git config --list //列出当前的配置选项
git config --local --list //列出repository的配置
git config --global --list //列出全局的配置选项
git config --system --list //列出系统的配置选项
```



### 基本使用

```
git init //初始化当前目录，它会给当前目录加一个.git的文件夹
git clone <地址>    //克隆指定的项目地址到当前目录中
git add -all //将仓库中的所有文件添加到暂存区
git commit  //暂存区提交到本地仓库
git status //查看git的状态。
git push  //推送到远程仓库中
```

### 生成密钥

为什么要生成密钥，主要是为了方便推送到远程仓库，

使用git生成会得到

- 私钥
- 公钥

生成密钥命令

```
ssh-keygen -t rsa -C "8888@163.com" //123 是你自己注册GitHub的邮箱
```

然后到密钥的目录中找出公钥文件复制到github中即可。
