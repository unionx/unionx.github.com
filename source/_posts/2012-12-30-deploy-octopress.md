---
layout: post
title: "部署Octopress"
date: 2012-12-30 06:15
comments: true
categories: 杂 装逼
---


## 提升逼格，使用Octopress

像我这种时髦值超高的程序员怎么可能在博客园之类的地方写博客！不过自己写静态博客生成器也太麻烦了，所以就捡个现成的，用Octopress好了。不过读了几圈文档再加上hack了一下代码之后，还是觉得要总结几点需要注意的地方的，所以在此记录下来。

### 换个主题

这个不多说了，用过wordpress的同学估计都很喜欢换一些奇奇怪怪的主题。Octopress的第三方主题貌似不对，找到了一个收集Octopress主题的站点[Octopress Themes](http://octopressthemes.com/)，但是里面的主题也不多，所以就选了个还行的blanket来用了。

### hack一下导航栏

Octopress号称“黑客”的博客系统，就是鼓励用户直接更改源码。所以修改了一下html源码，在导航栏里加了个回到主页的链接。

### 关闭twitter相关功能

Fuck GFW，Fuck方校长。因为在下载twitter站点的东西都会背墙，所以干脆把twitter相关的功能都关掉了。在_config.yml里设置一下就可以了。

### 内嵌代码

Octopress内嵌代码很方便，测试一下下。内嵌Gist插件貌似在新版本Gist发布之后就坏了，正在更新中。在内嵌代码时如果要指定语言，可以到[Available Lexers](http://pygments.org/docs/lexers)查找相应的Lexer。

{% include_code The Root of Lisp lang:cl root.lisp %}
