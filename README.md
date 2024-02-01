[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E1vcEWuv)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer
The recurrence relation for my algorithm is:

$$\begin{equation}T(n)=\begin{cases}1, & \text{if $n<=1$} \\
3T(\frac{n}{3})+C, & \text{if $n>1$}.\end{cases}\end{equation}$$

The reasoning for this relation:\
$T(1)=1$, same as mergesort, because it takes constant time to sum the array if it has a length of 0 or 1.
It also takes constant time to split the array into thirds.
Recursively summing the values takes $3T(\frac{n}{3})$ time because you are making 3 recursive calls, and each call handles a third of the array. 
It takes constant time to perform the summation within the recursive calls, which is accounted for by the C term.

Solving by substitution:

$$\begin{aligned}T(n)& =3T(\frac{n}{3})+C \\
& =3(3T(\frac{(\frac{n}{3})}{3})+C)+C \\ 
&=9T(\frac{n}{9})+3C \\
&\cdots \\ 
&=3^iT(\frac{n}{3^i})+n*C\end{aligned}$$

For $i=\log(n)$:

$$
nT(\frac{n}{n})+nC=nT(1)+nC=2n=n\in\Theta(n)
$$

