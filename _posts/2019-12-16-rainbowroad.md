---
title: Rainbow Road 🌈
date: 2019-12-16 00:00:00 +0000
layout: post
description: Analysing Heimdall — Gojek's HTTP Go Client
permalink: "/rainbow-road"
undefined: ''
twitter_text: ''

---

## What is Heimdall?

[Heimdall](https://github.com/gojek/heimdall) is [Gojek's](https://www.gojek.io/) HTTP Client that replaces Go's native HTTP client. 

It builds upon the the default libary and adds a few critical features that add robustness to the application. It allows graceful handling for failing requests, allows one to dictate retrying rules and allows one to define a different timeout for each HTTP request.



#### Quick aside:  HTTP Timeout handling in Go's native HTTP client

For legacy reasons, Go's native HTTP libary, does not define a timeout by default. This is not ideal. Therefore it is highly recommended to define timeout for the client. 

	//this defines a 5 second timeout
	client := http.Client{Timeout: 5 * time.Second}
	
## Heimdall use-cases

Heimdall (as correctly pointed in their FAQ section) is excellent for cases where the number of requests are high and it is infeasible to do custom error handling for each request. 

However, they also claim that the Heimdall can be used in small-scale applications. This is what their Github page says:

>Although Heimdall was made keeping large scale systems in mind, it's interface is simple enough to be used for any type of systems. In fact, we use it for our pet projects as well. Even if you don't require retries or circuit breaking features, the simpler HTTP client provides sensible defaults with a simpler interface, and can be upgraded easily should the need arise.

I wanted to put this claim to test. Are the wins of error handling and sensible defaults worth the (possible) additional overhead involved? 


---

## Designing the Test

### Objective

To make multiple requests and measure Heimdall's performance over the native client to see how it performs under various load states.

### Test Method

I needed to pick a HTTP resource that can be called multiple times. 
#### Candidate 1 - Hacker News
[Hacker News](https://news.ycombinator.com) is light-weight and will probably not rate-block me. It being light-weight ensured that the requests would not be timed out. However, I quickly realised that after the first request, the response was cached and the subsequent requests were quick and defeated the purpose of the test. 

#### Candidate 2 - Postman Echo
[Postman Echo](https://postman-echo.com) is a service explicitly designed to test HTTP testpoints. It even had a ```GET Current UTC time``` endpoint that I could use to timestamp my requests. However, I ran into a different problem, it was too lightweight. The first request, that probably had the overhead of a DNS lookup was slow but subsequent requests were too quick. I would need to make a very large number of requests to measure performance. 

#### Candidate 3 - Top 1 million website by traffic
I needed a large number of different websites, 




