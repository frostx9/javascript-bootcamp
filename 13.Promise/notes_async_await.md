## Async - 
*Async is a keyword to create a **function to async***

## Aync Function - 
Async Function always return a promise

 

# Example -

async function getData() {

  *Always Return A Promise*

  retrun new Promise() // Normal Promise Vale

  return data // Normal Value. IF We return a value. It will automatically wrap into promise and return the promise
}

## Async-Await combo to handle promises


# Normal Promise

const p = new Promise((resolve, reject)>{
  resolve("Promise Value esolved")
})

function getData(){

  p.then(res => console.log(res))

}

# Promise with Async Await

const p = new Promise((resolve, reject)=>{
  resolve("Promise Value esolved")
})

async function handlePromise(){
  const val =  await p     // Await Key Word use always infront of the promise and stored into a varaiable and work only inside in the async function
}


## How Fetch Work

fetch() => Returns A Promise. After Promise Fullfiled it will give response object, which is readable stream

*To Convert Readable Stram in json format we use **.json()** Method*

Again .json() retrun a pronise object. When promise resolved it finally give the result / json value