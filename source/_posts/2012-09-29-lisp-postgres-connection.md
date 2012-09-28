---
layout: post
title: "PostgreSQL的各种Lisp前端"
date: 2012-09-29 02:29
comments: true
categories: [emacs, elisp, clojure, common lisp, python, postgres]
---


#### - 为什么要用PostgreSQL

因为贵圈的巨巨们都用（误）。作为搞互联网的穷逼，用不起Oracle，然后觉得Mysql太土了，Mongo不太靠谱。另，[PostgreSQL的大象Logo][1]挺萌的。

以上是开玩笑的，但是稍作对比就知道PostgreSQL是目前开源的关系型数据库里看十分靠谱的一个，所以决定以后做东西就用它了。

#### - 各种前端

PostgreSQL的标准命令行前端是psql，图像界面是pgAdmin3。Mysql DBA们比较喜欢用phpMyAdmine，对应地，PostgreSQL也有一个类似的图形化工具，叫做phpPgAdmin，不过由于用的时候还要开个服务器，所以我懒得用。

本文会介绍另外几种PostgreSQL的前端，一种是用于一般操作的界面，例如从Emacs链接PostgreSQL，另一种是程序语言的PostgreSQL驱动，主要介绍Clojure、Elisp、Common Lisp和Python版本的。

#### - PostgreSQL in Emacs

我现在尽量把所有关于文本处理的任务都放到Emacs里做，因为Emacs基于Buffer的概念很方便。来看看效果图：

![M-x sql-postgres][2]

看上去还不错，复制粘贴比较方便。我试了一下开启auto-complete，感觉还行。我在网上找了找，没有找到基于SQL语法的补全插件，也有可能是有的但是我没找到，哪位大大如果知道请告知一声，不然的话说不定哪天我就自己写一个了（坑）。

启动的方法很简单，M-x sql-postgres，然后会要求输入一些配置，例如username、server和database等。其实它就是psql，不过是在Emacs里面用罢了。比较讨厌的一点是上面说到的补全问题。直接在shell里用psql，输入一定字符之后按tab键会有基于SQL的补全提示，虽然不够全面但是还是挺方便的，在这里却是插入tab字符。所以我现在在寻找一个好的补全插件。

### - Elisp PostgreSQL connection


[1]: http://wiki.postgresql.org/wiki/Logo "PostgreSQL Logo"
[2]: http://www.yunio.com/files/viewfile/code/JTJGb2N0byUyRnNxbC1wb3N0Z3Jlcy5wbmc= "M-x sql-postgres"
