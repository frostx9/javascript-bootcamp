# Callback Hell

Javascript is synchronous single threaded language. Do one thing at a time.  Execute Code Line By Line

## Call Back Function

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

in this code there is a problem. we call api into another as a call back. Because all api dependices each other.
It Makes Call back Hell. Also Known As Pyramid Of Doom

# Inversion Of Control
Lose the control of your code while using Call back. Becaus we give a control of a function into another function and we dont know what will be happening inside

# Promises

is an object representing the eventual compleitance or failure of async operations

## Promise Channing

createOrder(cart)
  .then((orderId)=>{
    return orderId
  })
  .then((orderId)=>{
    return procedePayment(orderId)
  })
  .then(()=>{
    return showSummary()
  })
  .then(()=>{
    return updateWallet()
  })


## Example

function createOrder(cart){

  const pr = new Promise((resolve, reject)=>{
      
      // Db Call

      if(orderId){
        resolve(orderID)
      }else{
        reject("Someting Went Wrong")
      }
  })

  retutn pr
}

function procedePayment(orderId){

  return new Promise((resolve, reject)={

    resolve("Payment Sucessful")

  })

}