+++
title = "Convolution Integral" 
description = "Finding the output of an LTI system, given its input and response."
date = 2020-04-27
weight = 3
+++
In Digital Signal Processing, the Convolution operation, notated "ⓧ", is used to map the output of a [Linear Time-Invariant System](/engd/dsp/lti) to any input function, and the reverse. Only the impulse response (called the kernal, filter kernal, or convolution kernal) must be known. From the impulse response, any input can be convoluted to its output, and any output deconvoluted to the causal input. 

The Convolution Equation: 

\\[y(t) = x(t) \otimes h(t) \\]

Where x(t) and h(t) include the input and unit response, in either order. 

## Mapping Inputs
Any function can be broken down into discrete intervals, and atomized into discrete points. An LTI System defines the response to a unit impulse, a single discrete-time input of unit area, as h(t): 

\\[\delta(t) \Rightarrow h(t) \\]

The output h(t) may be of <em>longer duration than the</em> (instantaneous) <em>input</em>. Therefore, the response would affect the output at the moment the input is applied and <em>into</em> the future. 
 
Due to the properties of linearity and time-invariance, we can also scale and shift the input by any real number, and see the exact same translation on the output: 

\\[k\delta(t-T) \Rightarrow kh(t-T) \\]

More complicated signals, like sine waves, square waves, and exponentials can all be represented by superpositioned unit impulses. Thereby we can superposition detailed inputs to achieve a desired output. 

## Charting Outputs 
Whether an LTI's output is discrete or continuous, any individual signal or interval is the sum of multiple super-positioned, possible scaled or shifted, impulse responses. The system's response could be a square pulse, a half-cycle of a sinusoid, a sawtooth. But once an input triggers that response signal, it will echo in the system's memory, overlapping with fading responses and new ones, until it has run its course (i.e. exponentially decayed to zero, reached the end of its sequence). 

The discrete summation of a convoluted output at t=i, for a unit response of duration [0, M]: 

\\[y(i) = \sum_{j=0}^{M-1} h(j) x(i-j)\\]

Notice how one of the input or unit response is time-shifted by the index of summation, but the other is not? Think of it as a moving frame of reference: One signal passing another, stock-still. What does the output look like when an inputs that happened before, or just happened, is convoluted with the system's response? Equally, what output follows from responses in the past up to the present are convoluted with an input? 

The answers to both questions are the same. That is because of the Commutative Property of integrals: that inputs and outputs may be switched. This opening statement will be [proved](#commutative-property) further along. 