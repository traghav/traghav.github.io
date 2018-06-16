---
title: Public Bloom Filters
date: 2017-09-20 13:23:06 +0000
layout: post
description: Solving a problem no one has
permalink: "/publicbloomfilters"
twitter_text: Public Bloom Filters
undefined: ''
---
## What are Bloom Filters?

Bloom Filters are a probabilistic data structure that test set membership. [Here is where I first heard about them](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff). If you're unfamiliar, there are a lot of [really](http://llimllib.github.io/bloomfilter-tutorial/) [good](http://gsd.di.uminho.pt/members/cbm/ps/dbloom.pdf) [explainers](http://en.wikipedia.org/wiki/Bloom_filter#Probability_of_false_positives) on the inter-web.

For the adventurous, here is a hand crafted [explanation](http://splasho.com/upgoer5/?i=PvqPoT9ioI9TnJk0MKWmWlOwLJ4tL2uyL2ftnJLtp29gMFO3o3WxVTymVUOupaDto2LtLFOvnJptq29lMPOmMKDhVSEbMKxtL2ShVT5iqPOuoUqurKZtqTIfoPOcMvOmo21yqTucozptnKZtpTSlqPOiMvOuVTWcMlOmMKDtLaI0VUEbMKxtL2ShVUEyoTjtnJLtp29gMKEbnJ5aVTymVT5iqPOjLKW0VT9zVTRtLzyaVUAyqP4tPtcHnTI5VUImMFNanTSmnTyhMlpfVUqbnJAbVTymVTRtq29ln2IlVUEbLKDtqUIloaZtLJ4to2gurF13o3WxVTyhqT8tLFOwo25zqKAcozpgq29lMPOiMvOznKuyMPO0rKOyYvOTo3VtLJ55VTqcqzIhVUqipzDfVUEbMFNanTSmnTyhMlptq29ln2IlVTSfq2S5plOanKMyplO0nTHtp2SgMFOwo25zqKAcozptq29lMP4tITuyVPqbLKAbnJ5aWlO3o3WeMKVtq29lMUZtL29hMaImMFO1pljtLaI0VT5iqPO0nTHtL29gpUI0MKVhPtbaDzkio21sEzyfqTIlplpfVUImMFOmMKMypzSfVUA1L2ttW2uup2ucozpaVUqipzgypv4tITuyrFOznKWmqPOwnTShM2HtMTyzMzIlMJ50VT9eLKxgq29lMUZtqT8tLFOwo25zqKAcozpgq29lMPOuozDtpzIgMJ1vMKVtnKDhVRyzVUyiqFOmnT93VTy0VTShVT9eLKxgq29lMPjtW0Wfo29gK0McoUEypaZaYPOmMJ5xplO0nTHtq29lMPO0olOxnJMzMKWyoaDtW2uup2ucozpaVUqipzgypvOuozDtpzIgMJ1vMKWmVTSfoPO0nTHtL29hMaImnJ5aYKqipzEmVUEbMKxtp2IhMPOvLJAeYvNbH29gMKEcoJImVUEbMFO3o3WeMKVtoJS5VTI2MJ4tp2IhMPO0nTHtp2SgMFOwo25zqKAcozptq29lMPOzo3VtqUqiVTEcMzMypzIhqPO3o3WxpljtqTucplOcplOwLJkfMJDtLFNaL29foTymnJ9hWlxtPxkuqTIlYPO3nTIhVUyiqFOup2ftqTuyVTAioKO1qTIlVTyzVTy0VTuuplOmMJIhVUAioJHto2gurF13o3WxVTWyMz9lMFjtnKDtp2IhMUZtqTuyVUqipzDtqT8tMTyzMzIlMJ50VPqbLKAbnJ5aWlO3o3WeMKVtLJ5xVTAbMJAeplOcMvOcqPOlMJ1yoJWypaZtqTuyVTAiozM1p2yhMl13o3WxplO0nTI5VUAyozDtLzSwnl4tFJLtnKDtpzIgMJ1vMKWmVTSfoPO0nTHtL29hMaImnJ5aYKqipzEmVUEbMFO3o3WeMKVtp2IhMPOvLJAeYPOcqPOjpz9vLJWfrFObLKZtp2IyovO0nTHtq29lMP4tFJLtnKDtp2IyplOuVTAiozM1p2yhMl13o3WxVUEbLKDtnKDtL2ShVT5iqPOlMJ1yoJWypvjtnKDtn25iq3ZtMz9lVUA1pzHtqTuuqPOcqPObLKZtoz90VUAyMJ4tqTuyVT9eLKxgq29lMPOvMJMipzHh) using only the 1000 most used words in English.

## Why Public Bloom Filters?

Public Bloom Filters are exactly like regular bloom filters, aside from the fact that they are shared. For instance multiple entities can look-up if something is part of a bigger set.

There are a few good reasons to offer a Public Bloom Filter as a service. One application could be ensuring unique usernames across multiple services while ensuring a relatively high degree of anonymity.  If you claim a username on a platform that uses a Public Bloom Filter, you stake your claim on the username for every other platform that uses the same Public Bloom Filter.

Another use could be maintaining a public list of really common or bad passwords and doing a quick lookup to ensure a user does not set it as their own password. To be fair, this service [already exists]() ( offered by none other than [Troy Hunt]()).

## Implementation

To design my very own PBFaaS (Public Bloom Filters as a Service d'oh), I faced a couple of design decisions. I wanted the service to be fast and scalable. Also implicit in the requirement of such a service being fast is it being computationally cheap.

### Selecting the Hash Function

The secret sauce behind any bloom filter is the hashing function it uses. There are [two classes of hashing functions](): [cryptographic hash functions]() and [non cryptographic hash functions](https://en.wikipedia.org/wiki/List_of_hash_functions#Non-cryptographic_hash_functions). Cryptographic hash functions guarantee certain security benefits such as hard-to-find collisions and are suitable for Information Security. Non-cryptographic functions trade security for speed. Thus they are ideal for Bloom Filters. The function I picked for this project is called Fowler–Noll–Vo (FNV).

### Fowler–Noll–Vo  Hash Function

This is a 32 bit implementation of the FNV hash function

    def fnv1_32(string, seed=0):
    	"""
    	Returns: The FNV-1 hash of a given string. 
    	"""
    	#Constants
    	FNV_prime = 16777619
    	offset_basis = 2166136261
    
    	#FNV-1a Hash Function
    	hash = offset_basis + seed
    	for char in string:
    		hash = hash * FNV_prime
    		hash = hash ^ ord(char)
    	return hash

Aside from being really fast, it uses a seed, which when changed cheaply generates different hashes. This is useful because multiple hash functions are required to scale the bloom filter.

### Platform

Due to the simple requirements of the service, I decided to go serverless. I implemented my skeleton API on AWS Lambda. For the actual Bloom Filter, I used the persistent storage provided by AWS Lambda itself. This cut down the complexity and more importantly avoided network calls. This gave me a quick solution with really low latency (≈5ms). To provide a front-end I used Amazon's API Gateway. It was trivial to link my Lambda function with the Gateway. It also provided me with (hitherto unused) features like staged rollouts, API authentication and Usage limits. 

The filter has been designed to provide less than 0.001% false positive rate for upto a million entries and the final latency comes to ≈40ms. Improvements on both fronts can be made.

## Take it for a spin

Here is the curl command to add elements to the Bloom Filter

    curl -i https://5yywisgjji.execute-api.us-east-1.amazonaws.com/prod/dute\?action\=add\&element\=pilot

Here is the curl command to check if an element was previously added.

    curl -i https://5yywisgjji.execute-api.us-east-1.amazonaws.com/prod/dute\?action\=check\&element\=pilot

Here is the response if a filter hit is found

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: 16
    Connection: keep-alive
    Date: Mon, 16 Apr 2018 14:11:11 GMT
    x-amzn-RequestId: 03eb4627-4180-11e8-8e9f-dd939118442c
    x-amz-apigw-id: FcBH4FyGoAMFjjQ=
    X-Amzn-Trace-Id: sampled=0;root=1-5ad4aeff-753379e178d4e6446371d874
    X-Cache: Miss from cloudfront
    Via: 1.1 b804a121dcbb7cb51fd709903749806e.cloudfront.net (CloudFront)
    X-Amz-Cf-Id: jzafBEMDYR1hW8rFFwipf7QxNXFSo8gR01xZ5h4ypRb-vfVm4m5PFQ==
    
    {"result": true}
