# *Callback Hell*

Javascript is synchronous single threaded language. Do one thing at a time.  Execute Code Line By Line

# *Call Back Function*

Simple Word - Call A function Later to execute. Make Asychronus Javascript



const cart = ["shoe", "pants", "shirt"]


Suppose thre is a shoping cart.

To Complete order there are 3 api to call.

1. api.createOrder()
2. api.procedePayment()
3. api.showSummary()


Flow = We First Create Order with help of api.createOrder. After geeting response then it call back the api.procedePayment to procede payment. After complete the payment it again call back the api.showSummary() to view the full summary of the order


api.createOrder(cart, function(){

  api.procedePayment(function(){

    api.showSummary()

  })

})


After Suppose We want to update the wallet. Then We Create A Api and pass the api as a callback into the  api.showSummary() api

api.createOrder(cart, function(){

  api.procedePayment(function(){   // Passing A Function

    api.showSummary(function(){

      api.updateWallet()

    })

  })

})

## In this code there is a problem. We call an api into another api as a call back. Because all api dependices each other.It Makes **Call back Hell**. Also Known As **Pyramid Of Doom**


# *Inversion Of Control*
Lose the control of your code while using Call back. Becaus we give a control of a function into another function and we dont know what will be happening inside

api.createOrder(cart, function(){

  api.procedePayment()

})

In this call back scenario we blindly trusted to api.createOrder(), that some point after ctreate order it call back the api.procedePayment()
It is very risky. Because we give control of api.procedePayment() function to api.createOrder(). Thats how we loose the control of the code


# *Promises* - **It is an object representing the eventual complete or failure of async operations**


## Promise

createOrder(cart) // Take Cart Array.  Return Order Id

procedePayment(orderId) // Take Order Id To Procede Payment Page. Return Payment Id

showSummary(paymentId) // Take Payemnt Id to Prcede Summary Page


This all api are async. Depent each other. We cant go procedePayment() api directly unless createOrder() api dont give order ID


const promiseData = createOrder(cart)

Intially promiseData have emtpy promise object. Because JS excute line by line and w8 for none. {data: undefined}.After some time / async operation when createOrder() function
retrun data, then promiseData have promise object data. {data: orderID}

**In Call Back we *pass* a function as a call back into another function, but in promise...then...catch, we *attaching* a call back function to a promise object**

**when promsise have filled data, it will automatically called call back function with help of *then* keyword**

**then only work when promise have filled object**

*Promise return as a readable stream and immutable data*

## Promise Chaining

createOrder(cart)
.then(function(orderID){
 return procedePayment(orderID)
})
.then(function(paymentInfo)){
  return showSummary(paymentInfo)
}





## Example Of Promise with Return

function createOrder(cart) {
  
  const promiseData = new Promise(function (resolve, reject){  // Creating Promise


    // Validated Card
    if(!validatedCart(cart)) {
      reject(new Error("Cart is Not Valid"))
    }

    // Create Order Business Logics
    const oderID = await Order.create().exec()  // Example

    const orderID = 123456

    if(orderID){
      resolve(orderID)
    }
  })

  return promiseData  // Return Promise
}

// Calling The createOrder function / api
const promise = createOrder(cart)

promise.then((id)=>{
  consolr.log(id)  // 12345
})
.catch((err)=>{
  console.log(err.message)
})