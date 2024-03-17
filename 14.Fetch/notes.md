
# In Early Days Fetch Api Not Introduce in Node, because its heavily depend on Web Based 

# fetch() is a global Function

in Poimise network call if it gives 404. it will go the repoonse though its code 404.
Because api called sucessfully, but no data found



fetch() api its a special type of task Queue. Its Priority Most High. If There is setTimeOut() fucntion called before 
fetch() call, the fetch() call execute first 

when fetch() keyword use.. It will work in two part

Part 1: In Web Browser
Part 2: Go to The Memory To Peserve Data. Name can be Anyhing. Suppose - Data. Intially its empty

There is Two Type Array- 1. onFulFiled[], 2,onRejection[] (Name Differ). It is a Private Field

Now when call some network request through fetch api, either it fulfill its proise/retrun data or not. If it fulfil its promise
it goes to the onFulFiled[] anray and in this array there is a function which returns the data and the data return the the global memory
