// Async With Then - Catch (Normal Promise)

async function getData() {   // Always Return Promise
  return " Async Await"
}

const data = getData()
data
  .then((data) => {
    console.log(data);
  })



// Async Await 