# Javascript And Classes


# Javscript is Proto Type Based Language. Not Functional Not Object Oriented. Prototypal Inheritance 
# End Of Day everything in javascript is an object. So each properties available in object will be available in array or string.
## It will try to access everything from buttom to top unless null was found

# Actuall Class (OOPS concept) is not present in Javascript. In Javascript Classes are syntatic sugar of prototype-based inheritance mechanisam
## It also help the programer who coming from class-based lanhauge

## Object
- Collection of Properties And Method (toLowerCase() ...)

## OOP . It just a programing paradime

# Parts Of OOP
- Constructor Function
- Prototype / Proto
- Classes
- Instances (new, this)

# 4 Pillars of OOPS
Abstraction   - Details Hide
Encapsulation - Wrap Up Data
Inheritance   - 
Polymorphism  - 

# new keyword
- When it call, it create new instances
- Constructor Fucntion Call. All Argument pack
- All Argument inject due to the this keyword
- Gave The Result

# Callback Hell

const cart = ["shoe", "pants", "shirt"]

Suppose thre is a shoping cart. To Complete order there are 3 api to call. api.createOrder(), api.procedePayment(), api.showSummary()

now when order create done then we call procedepayment, when procede done we call summary api


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

