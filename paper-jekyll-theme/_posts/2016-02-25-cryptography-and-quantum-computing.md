---
layout: post
title: "Alice, Bob, and Cryptography in the age of Quantum Computing"
date: 2016-02-25 10:26:20
image: '/assets/img/'
description: "Quantum Computing poses a burgeoning threat to cryptography as we know it."
tags:
categories:
twitter_text:
slug: "Cryptography and Quantum Computing"
---

## From Schrödinger's Tortured Cat To Qubits

Traditional computers use bits  as their basic building block, which can either exist in the state of 0 or 1. Quantum Computers, on the other hand, use qubits, which can exist in the state of 0, 1, or both.


>If you think you understand quantum mechanics, you don't understand quantum mechanics. 
>
>*Richard Feynman*

This interesting property is called entanglement and it gives rise to many algorithms which exponentially reduce the time taken to solve specific problems.  However, making quantum computers poses an enormous engineering challenge. 

## Is your computer smarter than a fifth grader?

Breaking encryption protocol commonly involves finding prime factors of very large numbers, which is hard, NP hard.  Traditional computers use the same approach to solving this problem as a twelve year old would. It works fine for small numbers, but due to lack of optimisation, it takes exponentially longer with each digit  added to it. This is the corner stone of several widely used cryptographic techniques.

In 1994, an AT&T researcher named Peter Shor came up with a theoretical approach to solving this problem using quantum computers. It relied on using the Quantum Entanglement properties of qubits to compute in parallel. This led to a dramatic reduction in the time taken to break encryption algorithms. Ever since, serious attempts have been made to make quantum computers a practical reality. Huge public and private endeavours into the field have resulted in major breakthroughs and we are inching closer to making a quantum computer capable of running Shor's algorithm to break commonly used encryption techniques.


## All is not lost

Many advances  in the field of 'Post Quantum' cryptography have been made. The use of these quantum resistant encryption techniques are perhaps the way forward.

One technique uses a lattice-based cryptography, wherein  the public key is encoded onto a high dimensional mathematical space, and without the knowledge of a private key, both traditional and quantum computers would find it hard to decode the information. Another technique uses algebraic manipulation to encode sensitive information and without a prior knowledge of the manipulation involved, it is extremely difficult to break the encryption. 

The drawbacks of these approaches are that they are not battle-tested. Which is to say, given their relatively low adoption, these algorithms in their current form take large amounts of space and are slower in comparison to their mainstream counterparts. They are expected to undergo several rounds of space and speed optimisations before they can be deployed on public devices at large.

## The NSA cares about you, maybe

The National Security Agency has been asking companies and governments to invest money in upgrading  their encryption to Suite B elliptic curve algorithms since 2005. This class of algorithms are a leg up on security and are deemed acceptable for encrypting sensitive information by the NSA. In August, last year, alarm bells went ringing when NSA updated a page on their website declaring an upcoming (yet undecided) class of acceptable algorithms that are quantum proof. This acknowledgement by the NSA regarding  quantum computers as a viable threat was reinforced earlier this month when they published a FAQ style post on the adoption of quantum resistant techniques. 

The Snowden leaks revealed a $250 million quantum computer project underway at the NSA. A multi-million dollar project for the advancement of quantum proof techniques for the purposes of data protection has been undertaken by the EU. UK has its own Quantum Computer project ongoing. China launched a 'hack-proof' quantum communications network last year. If there was not already enough proof pointing to a quantum computers arms race, North Korea announced that it has already developed a quantum cryptography communications technology.

## Why Should We Care?

Moore's law has shown an exponential increase in speed with falling costs for transistor based computers. However, it would not hold true for Quantum Computers. This implies that quantum computers may never reach the hands of the consumers and the technology may be limited to large governments and organisations only. We suddenly note a shift from the current day algorithmic barriers to breaking encryption schemes to hardware barriers for doing the same. This has grave implications. At the very least, we see a loss in incentives for these powerful bodies to improve and promote encryption standards as they would have a simple 'backdoor' to the current standards. Worse, citizens of a pro-surveillance state would have no means to digital privacy from the state. 

The timeline for a feasible encryption cracking quantum computer is a contentious issue. However, even ambitious claims give us at least another decade free of them. These timeframes do seem long but for every year we do not upgrade our encryption, the costs for converting all our data to newer cryptographic standards rise. 
