% Fast and Convenient Sparse Matrices in Python
% Séb Arnold
% 29 June 2015

> TL;DR
> Despite being implemented in Scipy, sparse matrices are often a mess to use. By representing them as python dictionaries and using a relatively naive implementation of the basic operators (add, dot) it is possible to reach an acceptable degree of performance and keep a straightforward usage.

When it comes to scientific computing, Python has more than what it needs to compete (and more often than not beat) with programming tools optimized for this task such as R, Matlab, and Mathematica. The excellent [Numpy](http://www.numpy.org) library supports a vast panel of matrix and N-dimensional operations, transforms, and many more basic utilities. The [Scipy](http://scipy.org/scipylib/index.html) library further extends Python’s capabilities for mathematics, science and engineering. 

In this article we present a simply way to implement sparse matrices while keeping their usage straight forward.
