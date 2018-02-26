---
layout: post
title: "Blogging with version control"
date: 2015-12-14
image: '/assets/img/'
description: Git makes everything better
tags:
categories:
twitter_text:
slug: git-init
---


I use git to maintain this website. Aside from the usual awesomeness of having version control, I found another nice way to use git for blogging. 


I am working on a super secret project that would most likely not see the light of day. My own version of [Vapourware](https://en.wikipedia.org/wiki/Vaporware) if you may. I am also blogging about it as I go. Mostly because documenting something as it happens is [fun](https://www.youtube.com/watch?v=VSKoVsHs_Ko). Everything for my *super secret* project is on a different branch, which I could merge to the website if the project is successful or kill the branch if it tanks.


<p align="right">So much fun.</p>

#### Update February 6, 2016

While digging through some git history, I stumbled upon the git repository of git. Obviously, I had to dig up the first git commit. Have a look:  
[https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290)

>"git" can mean anything, depending on your mood.
>
> - random three-letter combination that is pronounceable, and not
>   actually used by any common UNIX command.  The fact that it is a
>   mispronounciation of "get" may or may not be relevant.
> - stupid. contemptible and despicable. simple. Take your pick from the
>   dictionary of slang.
> - "global information tracker": you're in a good mood, and it actually
>   works for you. Angels sing, and a light suddenly fills the room. 
> - "goddamn idiotic truckload of sh*t": when it breaks
>
>
>*Linus Torvalds*


**Adds new meaning to**

{% highlight shell %}

git init

{% endhighlight %}