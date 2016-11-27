% PhD Application
% Séb Arnold
% November 26, 2016

\begin{abstract}
I am currently applying to PhD programs that start in Autumn of 2017. This document provides a short overview of the different aspects of my undergraduate experience.
\end{abstract}

# Timeline
<iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1wHvwpC-LW7OcPFPNBU4eQpHBwxrxlMveI5yqOcbCEEo&font=OpenSans-GentiumBook&lang=en&initial_zoom=2&height=650' width='100%' height='650' frameborder='0'></iframe>

# Research Experience

During my 3 years at USC, I was fortunate to work in a couple of research groups and under the supervision of several inspiring researchers. I will hopefully be able to include all of our results in my future bachelor thesis.

## Information Sciences Institute
In the 2015 Spring Semester, I collaborated with Dr. Greg Ver Steeg and Dr. Itay Hen at the Information Science Institute. In our first project, Dr. Hen and I decided to investigate the efficiency of a special form of quantum computers - namely quantum annealers. As a matter of fact, USC is one of only two institutions[^dwave] to have access to a D-Wave annealer, which I saw as an excellent opportunity to understand quantum computers in a hands-on environment. In particular we wanted to replicate and understand results obtained from another research group who demonstrated better scaling on Ising optimization problems using simulated annealing. My task in this project was to implement a state-of-the-art version of simulated and quantum annealing, and figure out which problems the quantum annealer solved faster. It turns out that we were not the only ones interested in this problem, and the Google-NASA collaboration found ways to accelerate quantum annealing such that they reached a $10^8$ speedup[^googqa] with respect to simulated annealing. I decided to leave the project after having efficiently implemented both algorithms and gained a working knowledge of quantum computing. My main motivation was that I was more and more attracted by problems in another field: deep learning. \newline

[^dwave]: The other being a collaboration between Google and NASA. 

[^googqa]: "When can Quantum Annealing win ?", [https://goo.gl/gQiWJ0](https://goo.gl/gQiWJ0)

![An example of the generalist-specialist setup.](phd_figs/specialists.png)

Throughout the fall of 2015, Dr. Ver Steeg allowed me to work on the project of my choice. At that time, I was fascinated by an idea I had seen in @distill, which consisted of using an ensemble of neural networks as a way to improve classification performance. This is the so called *generalist-specialist* framework, and is easily understood through the following analogy; when feeling ill, you first go to a general practitioner who might then send you to a specialist. By replacing doctors with neural networks, this can be directly applied to image classification where the generalist could predict the family of object in the image (eg, vehicles), and the specialists will refine the original prediction. (eg, tow truck) The problem I decided to tackle was to find a better class-assignment algorithm for the specialists, which was previously done using variations of the k-means clustering algorithms. The results were summarized in the paper "A Greedy Algorithm to Cluster Specialists" [@specialists], which is my first publication [^preprint]. Despite obtaining mitigated results (my method only gets about 2% improvement), I am particularly proud that I was able to autonomously designed and executed the entire research project. (Including the management of more than 200Gb of produced data with my desktop GPU.) 

[^preprint]: Not yet published, but available on the pre-print website [ArXiv](http://www.arxiv.org).

## Modeling and Simulation Lab
My main takeaway from our project with Dr. Hen is that every problem can be phrased as an optimization problem. With a long-standing interest in distributed computing and my recent work at [Nervana Systems](#nervana-internship), it was only a matter of time before I merged both interests. In the Spring of 2016, I asked Prof. Chunming Wang if he would be interested in exploring distributed algorithms to train neural networks. He readily accepted, and we began benchmarking existing stochastic gradients algorithms in the sequential and distributed (synchronous and asynchronous) settings. \newline

![Benchmark of synchronous distributed algorithms on the Six-Humps toy problem.](phd_figs/sync_compare.png)

Although the field of distributed optimization has existed for a long time, the loss surface of deep neural networks is poorly understood and a very active research topic. Experts tend to agree that in very high-dimensions, the number of local minimas decreases exponentially and for neural-networks those local minimas are "not that bad". [@dauphin; @losssurface] Our approach is to gather as much information about the Hessian of the loss function as we can, by taking advantage of the asynchrony in the distributed setting. I am responsible for designing and implementing the experiments, while the theory - and mathematical rigorousity - is developed in our meetings with Prof. Wang.

## Brain Body Dynamics Lab
With an expanding understanding of the theory of optimization of neural networks and efficient distributed implementations, I was looking for an interesting project where I could apply those new skills. As a matter of fact, I believe the best researchers are able to produce both solid theoretical results - to impress their peers - as well as impressive applications - to impress their grandmothers. \newline

![A simulated tendon-driven finger.](phd_figs/finger_screenshots.png)

In the early summer of 2016, I was given a chance to tour Prof. Francisco Valero-Cuevas' lab. In particular I connected with Brian Cohn, and we started looking for opportunities to apply distributed deep reinforcement learning to problems related to optimal control. By the end of July, we decided to explore transfer learning from a simulation, to a robotic, and finally to a human finger. The goal is to use the neural network as a controller so that by the end of the training procedure it is able to control a cadaveric finger activated by its tendons. Our current strategy is to mix TRPO @trpo with progressive neural networks @pnn, using ideas from probabilistic differential dynamic programming @pddp. My task is to develop the mathematical and experimental framework behind the experiments, and our early results @trpocem with Prof. Valero-Cuevas have been accepted as a poster paper at the SoCal Machine Learning Symposium. For those experiments, I developed the fastest implementation of TRPO, and distributed it over GPUs. I am also designing custom environments for transfer learning in reinforcement setups, as well as a convenient random search library.

# Nervana Internship
During the summer of 2015, Nervana Systems asked me if I would be interested in joining their team as an intern for the fall semester. This request came after several of my contributions being merged in their framework. From August 2015 to August 2016, I was thus interning with them remote and part-time. This would not have been possible without the help of Dr. Michael Shindler who supervised me throughout the internship. \newline

![The Gorila setup for Distributed Deep Reinforcement Learning.](phd_figs/gorila.png)

While at Nervana I worked on two projects, mostly independent of the rest of the team. This allowed me to work at my own pace - a requirement since I was working part-time. The project I was tasked with was to replicate the work originated at DeepMind which was named the *General Reinforcement Learning Architecture* @gorila, or *Gorila*. Gorila is a distributed architecture and is summarized in four parts:

* $N$ **actors** whose goal is to generate as much experience from the environment as possible. For example, in the game of chess this would mean playing as many games as possible using the current parameters. Hence, no learning is involved.
* A **replay memory** which stores and centralizes the experience accumulated by the actors. Think of it as a database of states, rewards, and actions.
* A **learner** who takes the experience from the memory replay and executes the optimization procedure. That's where parameters are updated.
* A **manager** responsible for the coordination of all other processes. This includes start-up and shutdown management, parameters distribution, etc...

This implementation is unfortunately private and is the only such implementation I am aware of. (Besides the original one developed by DeepMind)

![Our ndist pipeline for distributed deep learning.](phd_figs/pipeline.png)

In the second project at Nervana, I re-spawned the distributed training effort of the company. I investigated several approaches using MPI. In particular, we were interested in very large neural network optimization (with several dozens of millions of parameters) and concluded that tree-based reductions were our best option. While I worked on scaling the training procedure across machines using fast Infiniband connects, a colleague worked on improving the efficiency of intra-node communication. We were both implementing different versions of the all-reduce algorithm and were obtaining different results because of the network architecture of the computational system. I then suggested to merge our efforts into the *Nervana Distributed Pipeline* or *ndist*. Ndist essentially allows us to use his fast GPU kernels for intra-node communication, and MPI for inter-node communication. In addition, by clearly separating the those two levels, we are now able to explore more interesting and complex training and reduction schemes. For example, we can use a ring-based reduction algorithm at the GPU level while using a tree-based one at the machine level. Similarly, we can use different optimization algorithms at each computational level which permits more flexibility with respect to asynchrony. We are currently in the midst of writing the paper about ndist, but the recent acquisition[^intel] of Nervana by Intel has added a bit of paperwork overhead.

[^intel]: Reportedly for more than $400M. Not bad for 45 full-timers. Interns did not get a share though.

# ETH Zürich

It is no secret that before joining USC, I was a student at ETH Zürich. In the following section I'll shortly describe my work in the Computational Social Science Group.

## Computational Social Science
As a freshman, I joined the COMS of Prof. Dirk Helbing in the Spring of 2012. (In Europe, it is rather unusual for first-year students to join a research group.) I was under the supervision of Dr. Stefano Balietti, at the time a PhD student. Together we designed a social infrastructure for researchers to communicate about their work. That platform was part of a larger project spanning multiple universities in Europe, and we received funding and appraisal from the European Commission for the coming years. The entirety of this work was built on top of web technologies, and more information can be found on [QLectives.eu](http://www.qlectives.eu). \newline

While a student at the COMS, I also implemented part of the infrastructure for a mass experiment trying to quantify the meritocratic behaviour in groups of people. As far as I know, those results have never been published.


# Personal Projects
I've been working on a few personal projects, and here are a few lines about some of them.

### Randopt
[Randopt](https://seba-1511.github.io/randopt/) is a python package to streamline the search for good hyper-parameters. It provides a programmatic interface to serialize hyper-parameters and results. The same interface can be used to visualize and work with those serializations, or rendered in an interactive web-page. Finally, we're working on utilities for hyper-parameter selection. (eg, random search, Bayesian optimization, Hyperband)

### Tooski
As I was learning to program, I used to ski competitively. I merged both passions and founded [Tooski](http://www.tooski.ch), which is a website about ski racing. It is currently the most visited French-speaking skiing website, and we are particularly proud to support the Swiss youth through blogs and sponsoring. The lead of this project has now been handed over to a group of people based in Europe who can maintain the website and more closely follow the evolution of this promising Swiss youth.

### Paperify
I've always liked to build my own tools. Paperify is a set of custom templates, wrappers, filters, and other small hacks that allow me to produce professional documents. This document, [my website](http://www.seba1511.com), my resume are all written in markdown - which forces the focus on the content rather than the form - and then converted to the appropriate format using paperify. Using that same workflow, it is possible to generate PDFs, \LaTeX{} documents, presentations, and web pages.

### Languages
I was fortunate to be the offspring of an Italian mother and a Swiss father, in a country with four official languages. Given that my father is a translator, it is not surprising that I am generally interested in learning new languages as soon as I have a chance. Lately I've been taking a stab at Spanish and I hope to become as fluent in it as I am in French, Italian, German and English.

# References
Some of the papers I referenced in this document.
