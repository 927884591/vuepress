(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{403:function(t,s,a){"use strict";a.r(s);var e=a(54),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"git-github的基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-github的基本使用"}},[t._v("#")]),t._v(" git && github的基本使用")]),t._v(" "),a("h3",{attrs:{id:"使用git的基本流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用git的基本流程"}},[t._v("#")]),t._v(" 使用git的基本流程")]),t._v(" "),a("ol",[a("li",[t._v("工作区与暂存区的交互；")]),t._v(" "),a("li",[t._v("暂存区与本地仓库（分支）上的交互；")]),t._v(" "),a("li",[t._v("本地仓库与远程仓库的交互。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/4/25/162fcc0987bf1c0a~tplv-t2oaga2asx-watermark.awebp",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"图形化安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图形化安装"}},[t._v("#")]),t._v(" 图形化安装")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://git-scm.com/download/mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("git官方网站"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("也可以使用")]),t._v(" "),a("p",[t._v("使用brew install git")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("git的选项命令都是使用--")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ git config --global user.name test\n$ git config --global user.email test@qq.com\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("这两个是最重要的命令，")])]),t._v(" "),a("h3",{attrs:{id:"列出git的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出git的配置"}},[t._v("#")]),t._v(" 列出git的配置")]),t._v(" "),a("p",[t._v("使用的是git config 命令")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config --list //列出当前的配置选项\ngit config --local --list //列出repository的配置\ngit config --global --list //列出全局的配置选项\ngit config --system --list //列出系统的配置选项\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git init //初始化当前目录，它会给当前目录加一个.git的文件夹\ngit clone <地址>    //克隆指定的项目地址到当前目录中\ngit add -all //将仓库中的所有文件添加到暂存区\ngit commit  //暂存区提交到本地仓库\ngit status //查看git的状态。\ngit push  //推送到远程仓库中\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"生成密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥"}},[t._v("#")]),t._v(" 生成密钥")]),t._v(" "),a("p",[t._v("为什么要生成密钥，主要是为了方便推送到远程仓库，")]),t._v(" "),a("p",[t._v("使用git生成会得到")]),t._v(" "),a("ul",[a("li",[t._v("私钥")]),t._v(" "),a("li",[t._v("公钥")])]),t._v(" "),a("p",[t._v("生成密钥命令")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ssh-keygen -t rsa -C "8888@163.com" //123 是你自己注册GitHub的邮箱\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("然后到密钥的目录中找出公钥文件复制到github中即可。")])])}),[],!1,null,null,null);s.default=i.exports}}]);