Everything in Javascript happen in the <ins>**Global Execution Context**</ins>. 

Assume This is a big container where all the code is executed. It Has two Component in it

1. <ins>**Memory Heap / Memory Component**</ins> - Where all the variables and functions are stored as a 
<ins>key : value</ins> pair. It also know as <ins>**Variable Component**</ins>.
    
    Example : a : 10 , fn : {...}

2. <ins>**Execution Context**</ins> - Where the code is executed line by line. It also know as <ins>**Thread of Execution**</ins>.

<br>

<ins>**Javascript is Synchronous Single Threaded Language**</ins>. So JS can execute one command at a time and line by line when current command is completed.

<br>

## How Javascript is executed

Everything in JavaScript runs inside an <ins>Execution Context</ins>.

```js
1.var n = 10;
2. 
3. function square(num) {
4.   var ans = num * num;
5.   return ans;
6. }
7. 
8. var square2 = square(n)
9. var square3 = square(4)
```

So When we run this code, It will create a Global Execution Context with two component. 

1. Memory Component
2. Code Component

```js
Global Execution Context

| Memory Component | Code Component |
|------------------|----------------|
|------------------|----------------|
|------------------|----------------|
|------------------|----------------|
|------------------|----------------|
|------------------|----------------|
```


<br>

This Execution Context is created in two phases.

1. <ins>Memory Creation Phase (Phase 1)</ins> : We take the above code when JS engine run this code, it will allocate the memory for the variable in Memory Component as a key : value pair

```js
Global Execution Context

| Memory Component         | Code Component |
|--------------------------|----------------|
| n : undefined            |                | // For Variable It Will be undefined
|--------------------------|----------------|
| square : {...}           |                | // // For Function It Will Store the Whole Function Code
|--------------------------|----------------|
| square2 : undefined      |                | // For Variable It Will be undefined
|--------------------------|----------------|
| square3 : undefined      |                | // For Variable It Will be undefined
|--------------------------|----------------|
```


2. <ins>Code Execution Phase (Phase 2)</ins> :  In this phase JS Engine again read the code line by line and execute the code, where all calcualtion Done

in **First Line** when js encounter var n = 10, it will place value 10 in Memory Component. Till Now n is undefined. Now n will have value 10

```js
Global Execution Context

| Memory Component         | Code Component |
|--------------------------|----------------|
| n : 10                   |                | 
|--------------------------|----------------|
| square : {...}           |                | // // For Function It Will Store the Whole Function Code
|--------------------------|----------------|
| square2 : undefined      |                | // For Variable It Will be undefined
|--------------------------|----------------|
| square3 : undefined      |                | // For Variable It Will be undefined
|--------------------------|----------------|
```

In **Third Line** when js encounter function square(num), it has nothing to do. Because it already allocated in Memory Component. So It moves to line **number 8**. Here a function is invoking / calling

Now There is a **Magic**. When A Function is calling a new Execution Context is created. in Global Code Execution Context. Again Another Execution Context is created with tow component.

1. Memory Component
2. Code Component

```js
Global Execution Context

| Memory Component         | Code Component                     |
|--------------------------|------------------------------------|
| n : 10                   |      Function Execution Context    |                          
|                          |  Memory Component | Code Component |     
|                          |-------------------|----------------|
|                          |-------------------|----------------|
|                          |-------------------|----------------|
|                          |-------------------|----------------|
|                          |                                    |
|                          |                                    |
|                          |                                    |
|                          |                                    |
|--------------------------|------------------------------------|
| square : {...}           |                                    | 
|--------------------------|------------------------------------|
| square2 : undefined      |                                    | 
|--------------------------|------------------------------------|
| square3 : undefined      |                                    | 
|--------------------------|------------------------------------|
```


In Memory Component, It will store the variable of the ***function Only***

```js
Global Execution Context

| Memory Component         | Code Component                     |
|--------------------------|------------------------------------|
| n : 10                   |      Function Execution Context    |                          
|                          |  Memory Component | Code Component |     
|                          |-------------------|----------------|
|                          | num : undefined                    |      
|                          |-------------------|----------------|
|                          | ans : undefined                    |                
|                          |-------------------|----------------|
|                          |-------------------|----------------|
|                          |                                    |
|                          |                                    |
|                          |                                    |
|                          |                                    |
|--------------------------|------------------------------------|
| square : {...}           |                                    | 
|--------------------------|------------------------------------|
| square2 : undefined      |                                    | 
|--------------------------|------------------------------------|
| square3 : undefined      |                                    | 
|--------------------------|------------------------------------|
```


 So When We invoke ***square(n)***, n value whics is 10 pass to the num. ***num*** is the parameter of the function and ***n*** is the argument 

```js
Function Memory Component

num : 10

ans : undefined
```

Now We will do the calculation. ans = num * num; <br> ans = 10 * 10 = 100 and repalce the ans in Function Memory Component *undefined* to 100

```js
Function Memory Component

num : 10

ans : 100
```
 
Next Line when js encounter ***return*** keyword, it will the tell return the whole control of function execuation context back to the main execuation context where function is envoking. So When js engine read ***returnn ans***, so it will find the ans value from the Function Memory component and replace the *undefined* value of **square2** and the execution context of the function will be **destroyed**

```js
Global Execution Context

| Memory Component         | Code Component |
|--------------------------|----------------|
| n : 10                   |                | 
|--------------------------|----------------|
| square : {...}           |                | // // For Function It Will Store the Whole Function Code
|--------------------------|----------------|
| square2 : 100            |                | 
|--------------------------|----------------|
| square3 : undefined      |                | 
|--------------------------|----------------|
```
Now ***Line Number 9*** another fucntion is invoking. So Again A New Function Execution Context is created and above process repeated. Final result will be

```js
Global Execution Context

| Memory Component         | Code Component |
|--------------------------|----------------|
| n : 10                   |                | 
|--------------------------|----------------|
| square : {...}           |                | // // For Function It Will Store the Whole Function Code
|--------------------------|----------------|
| square2 : 100            |                | 
|--------------------------|----------------|
| square3 : 16             |                | 
|--------------------------|----------------|
```

<br>

After the whole program is finished, Global Execution Context will be destroyed.

If Another Function is writeen inside the function then it will be created anther Local Function Execution Context insdie the Main Function Execution Context. Nested function calls can create multiple execution contexts, which are managed efficiently by the Call Stack.. 

Javascript Manage creation , deletion of Execution Context by this via ***Call Stack***. It is a stack data structure. When any code is executed, It will push the Global Execution Context on the Call Stack First. And When the Function Execuation Context is created. it place up to the Global Execution Context and when it will finish the execution, it will pop from the Call Stack. and when all done Global Execution Context will be pop from the Call Stack and Call Stack is empty


```js
Call Stack

GEC : Global Execution Context

FEC : Function Execution Context


1: First Call Stack is Empty

|       |
|       |
|       |
|       |
|       |
|       |  
|-------|


2: JS Engine Run The Code and Create The Global Execution Context and Push To The Call Stack

|       |
|       |
|       |
|       |
|       |
|  GEC  |  -> First Global Execution Context Push To The Call Stack
|-------|


3. A Function is Invoking / Calling. So A New Function Execution Context is created and pushed to the Call Stack above the Global Execution Context

|       |
|       |
|       |
|       |
|       |
|-------| 
| FEC 1 | -> First Function Execution Context Push To The Call Stack
|-------|
|  GEC  |  
|-------|


4: When Function Execution Context is finished, It will pop from the Call Stack

|       |
|       |
|       |
|       |
|       |
|-------| 
|       |  FEC 1  -> Pop The Function Execution Context From The Call Stack
|-------|
|  GEC  |  
|-------|


5: When All Done, Global Execution Context will be pop from the Call Stack

|       |
|       |
|       |
|       |
|       |
|       |  GEC -> Finally Pop The Global Execution Context From The Call Stack and Call Stack is empty
|-------|
```


## Hoisting In Javascript

```js
var x = 7

function getName(){
  console.log("Hello World")
}

getName()
console.log(x)
```
If We Run This Code the output will be

```js
Hello World
7
```


If we do this; 
```js
getName()
console.log(x)

var x = 7

function getName(){         // Anonymous Function
  console.log("Hello World")
}
```
So We try to access the ***getName()*** before intialize it. Also we try to print ***x*** before intialize it. Most of the programing language will throw an error. But in Javascript the output will be

```js
Hello World
undefined
```
This is called <ins>***Hoisting***</ins>. 

<br>

Now Discussing how why the programing behave like this. It act upon the <ins>**Execution Context Concept**</ins>. So when js run the code, JS engine create Global Execution Context with two component. 

1. Memory Component
2. Code Component

In memotry component, it will store all the variable and function first, then go the code component.

```js
Global Execution Context

| Memory Component         | Code Component |
|--------------------------|----------------|
| getName : {...}          |                | 
|--------------------------|----------------|
| x : undefined            |                | 
|--------------------------|----------------|
```

After that, when js go the code component, it will execute the code line by line. First Function is Invoking / Calling. So A New Function Execution Context is created and print the log

Next when go the next line , it will print the value of ***x***. But ***x*** has no value till now. So it will print undefined. Becuase After that x is assigned with value 7.


## Not Defined vs Undefined
```js
console.log(x)

var getName = () => {         // Anonymous Function
  console.log("Hello World")
}
```
When We Try to Run The Code , An Error will be thrown; <ins> ***ReferenceError : x is not defined***</ins>. Because there is no memory allocation for x in Global Execution Context memory block. This is called <ins>***Not Defined***</ins>.

When We Try to the arrow Function, An Error will be thrown; <ins> ***TypeError: getName is not a function***</ins>.
```js
getName()

var getName = () => {         // Anonymous Function
  console.log("Hello World")
}
```
In Arrow Function **getName** does not behave like fucntion, it will behave like variable. So when run the code in Execution Context memory block, a variable will declare *getName* with *undefined* value. We cant invoke a variable. Thats why **getName is not a function** error come