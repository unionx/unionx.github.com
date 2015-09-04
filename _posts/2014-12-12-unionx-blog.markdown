---
layout: post
title:  "一个博客，基因岛"
date:   2014-12-12 23:12:22
categories: 杂 关于
---

这个博客主要讨论计算生物学的内容。相关的项目和代码放在 [Github][github] 上。

{% highlight racket %}
;; example Fibonacci program
(define (fib n)
  (define (fib-calc n-1 n count)
    (if (= 0 count)
        n
        (fib-calc n (+ n n-1) (sub1 count))))
  (fib-calc 0 1 n))
{% endhighlight %}

[github]: http://github.com/unionx
