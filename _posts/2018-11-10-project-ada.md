---
title: Project Ada
date: 2018-11-10
layout: post
description: Teaching CS to half a dozen thirteen year olds for a month 
permalink: "/ada"
undefined: ''
twitter_text: ''
---

I took the whole of October 2018 off from work to introduce half a dozen eighth graders to Computer Science. I learned quite a bit about teaching, CS and myself during this experience. 


# Inspiration

The kids I taught came from an underprivileged background and had little or no exposure to 'Computer Science'. Hailing from a school located in a Mumbai slum, they were the sharpest kids in their class. The ubiquitous computer and connectivity experience we are all used to was decidedly absent in the environment these kids were in. They didn't have the same source of wonder I grew up with when I looked at computers. They were far removed from exploring a career in CS or tech. 

Going in, I had a couple of goals:

One was showing them a possibility of exploring Computer Science further. It did not have to be an interest in pursuing a career in technology. If I could even inculcate a passing interest of CS or related fields in them, I would have shown them the light at the end of the proverbial CS tunnel. 

Another was giving them a set of basic tools and skills to explore the discipline further. Even personally, I found the biggest challenge to learning CS was getting started. It is still comically hard to setup a basic developer environment to do anything meaningful. Though it is [much](https://scratch.mit.edu/) [easier](https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x) today than it was when [I was getting started](https://www.bluej.org/).

## Constraints while designing the curriculum

My first challenge was to design a month long course. I had around 50 hours of classes to work with. 

I was made aware of a few limitations before I started which helped me design my course. Some of them were:

### Hardware

My students did not have computers of their own to work with. A couple of them had low end smart phones at home that belonged to their parents. In class however, I was given three laptops, mostly in working condition, which belonged to the school. All of them were running Windows, so I had no Unix-y shell like environment to work with. 

### Math skills

The kids I ended up teaching were extremely bright. However, they hadn't had an introduction to algebra, exponents and functions. I had limited hours to work with, so I had to make sure not to make my course math heavy. Which wasn't a problem in itself, but ruled out me teaching certain concepts. 

### Computer versus Science

I had to make my course *sticky* for these kids. I had to ensure it was not a lot of abstract mumbo-jumbo that wouldn't translate well when they tried to work with what they learned in the real world. Yet, I wanted them to have some intuition of key concepts in Computer *Science*.

A perfect example would be teaching them that Binary Search and Linear Search have vastly difference performance without necessarily teaching them computational complexity or big-o notation.

## Course Structure 

My final course included:

- Base Math / Binary
- Computational Thinking
- Writing **very** basic psuedo code
- HTML and CSS
- Introducing Javascript
- A final project of their choosing using HTML, CSS and JS

# Teaching 

## Base Math / Binary

I taught them the concept of counting in a different base and converting back and forth from decimal. I wanted them to divorce the symbol '1' and '0' in 10 with the value 10. I then introduced counting in hexadecimal and finally closed with teaching them counting in binary. 

In retrospect, it was a poor decision to teach hexadecimal and base math operations. Sure, it is useful and an important concept in Computer Science, but maybe it was not essential for them at this point. 

## Computational Thinking

I have come to realize that there are some meta concepts in CS that are not always explicitly talked about or formally taught. Some of them are quite useful. I took at shot at formalizing some of these abstract concepts before we got into more specific and well defined things.

Some of these concepts include giving a sense of *just how fast* we have made our computers and giving them a sense of exponential growth. Or the idea of *abstraction* in a real world. The only place I read about abstraction was in my OOP class but I see it as a powerful problem solving tool. I spoke about the idea of mapping binary encoded information to text, pictures, videos, just about anything.

Some of these concepts were a bit hand wavy and abstract, but I was glad to go over them as I found them key to my experience in learning computer science. 

## Pseudo Code

I taught them how to write to basic pseudo code to solve a problem. This allowed me to teach a few other key ideas we use extensively in Computer Science. Things such as:

- Interacting with a computer using 'Input' and 'Output'. The meta idea being thinking of computer as a processor of information.
- Using variables. This was particularly challenging since the students did not have any formal algebra training. I had to teach the idea of variable as a store of value that can be changed as we want it to.
- If and Else logic. Armed with I/O and variables, I taught them basic conditional logic using 'if' and 'else'. With this I was able to put across the idea of 'flow' in a computer program. Another meta idea of sequentially executing steps of our program.
- Loops - I felt the class was not in a position to grasp the syntax of for/while loops, so I introduced looping using GO TO. In hindsight, even though I was able to get a quick win by introducing simple looping programs using GO TO, it got messy fast. I faced a lot of difficulty in explaining conditional looping and I was definitely over-reaching when I introduced nested loops. Even though the kids caught up with all this by the end, it was an uphill battle.

The reason I wanted to start with Pseudo Code was to give them a taste of programming and problem solving without the cognitive burden of writing correct syntax. We did achieve it, mostly. However, I quickly realized that a large part of 'fun' while programming is running the actual code on a computer and getting the desired output. Since they were writing pseudo code, they missed out on this.



## HTML and CSS

I had a few reservations about picking HTML in my course. This wasn't helped by the Internet's unabashed disdain for it.

<img alt="I get it, HTML isn't a real programming language" src="https://i.imgflip.com/u9pv5.jpg" width="200px">

There was a feeling that I would be wasting time, teaching something like HTML when I am skipping things like Sorting and Searching. In the end, despite the ill feeling, I decided to teach HTML mostly because:

- It was a means to an end. Making web-applications was the path of least resistance when it came to making something tangible and HTML would come in handy then.
- I didn't have to teach them how to install and maintain a developer environment. No package managers, no IDEs, no dependency hell. Code out of Notepad.
- It is fun and exciting when you are starting out with almost instant gratification.


So I dove in to teach HTML. To start with, I showed them the source code of a website which they squirmed at. Most of it read gibberish to them, and for good measure. They were pleased to learn that by the end of this, they would be understand and make their own websites.

I started with the basic text formatting tags and tables. To teach them how to add links and images, I had to first clear up the concept of *relative path*. First I taught them how to represent a file system as a tree and traverse it to find the relative path of one file to another. 

For CSS, I printed out a Cheat Sheet and showed them how to apply a few styles and asked them to explore the rest of their attributes on their own. Explore they did, and sometimes to hideous ends. But haven't we all made poorly designed websites with horrible contrasts and bright colors? 


## Javascript 

We were done with around <sup>2</sup>&frasl;<sub>3</sub> of the course by now. I wasn't expecting to make a significant dent with Javascript when I was starting. However, their brush with writing pseudo code came in handy. They quickly picked up variables, boolean and logical operators. 

I showed them how to run little Javascript snippets on the browser console. This allowed them to test their code immediately and close the loop on what they learn.

I did introduce them to the syntax of 'for' and 'while' loops but we couldn't flesh out most of it due to paucity of time.

Finally, I told them how to insert a script in their web-page to hopefully build interactivity on their 

## Final Project

For their final project the students decided to make a website for their own class. I could not be prouder of the work they did. They made the entire website from scratch all by themselves! Have a look:

[Malwani's Pride](http://www.malwanispride.com)

It is not the prettiest or nicely designed website by a long shot but the students are pretty invested in maintaining and improving it in the future.

I helped with buying the domain and setting it up on a Dropbox backend. I set it to sync with one of the school laptops. This would take out the friction of dealing with web-hosts and FTP servers. I set it up using [Pancake.io](https://www.pancake.io/), an excellent service that translates static HTML files on Dropbox and serves them up.

# Conclusion

Looking back, it was a great month. It didn't take me very long to realize how sharp these kids were, they picked up a lot of alien and abstract concepts really quickly.

I am uncertain if it was wrong of me to not teach Computer Science the way it was taught to me. Or breaking away from the structure of the discipline. In the end, everybody in my class was interested in continuing with Computer Science in some way in the future. And, they had all gotten comfortable with the tools required to get started.

I will be in contact with them, my plan is to give them small JS assignments and push them to use more advanced tools. 

I too took a lot away from this experience. I got much better at explaining and breaking concepts. I learned about how to organize and present easily digestible information. It was an absolute pleasure to share my love for the subject with these young ones and see them take an interest in it!

