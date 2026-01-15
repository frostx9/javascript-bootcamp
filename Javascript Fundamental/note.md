Everything in Javascript happen in the <ins>**Global Execution Context**</ins>. 

Assume This is a big container where all the code is executed. It Has two Component in it

1. <ins>**Memory Heap / Memory Component**</ins> - Where all the variables and functions are stored as a 
<ins>key : value</ins> pair. It also know as <ins>**Variable Component**</ins>.
    
    Example : a : 10 , fn : {...}

2. <ins>**Execution Context**</ins> - Where the code is executed line by line. It also know as <ins>**Thread of Execution**</ins>.

<br>

<ins>**Javascript is Synchronous Single Threaded Language**</ins>. So JS can execute one command at a time and line by line when current command is completed.

<br>

What Happend When JS Run Code ?