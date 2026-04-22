**Full Domain 2**

**Completed on: Oct 4, 2025 04:40 PM**

[ ]  create index
[ ]  optimization techniques in react
    [ ] Skipping Renders 
    [ ] React.Memo
    [ ] useMemo
    [ ] useCallback
[ ]  redux devtools
[ ]  router chaining
[x]  components of nodejs
    1.V8 engine
        * developed by google for chrome
        * takes javascript code an compiles directly to machine code that your computers processor can understand
    2. Libuv
        * C++ library that gives node.js its asynchronous i/o capabilities.
            * event loop: decides what task to execute next.
            * Thread pool: incase of handling heavy lifting like file system operations or database call so the main thread doesn't freeze.
    3. Node.js Standard library.(Core Modules)
        set of build in modules that allow you to interact with the operating system without writing C++ yourself.
        * fs: file system management
        * http: Creating web servers
        * path: handling file path across different operating systems
        * crypto: handling encryption and hashing.
    4. C++ Binding
        wrappers that allow JavaScript to trigger C++ code to perform low level task like opening a network socket
    5. NPM (Node Package Manager)
        It is the world's largest software registery, allowing to plug in community made components and softwares to extend app functionality.


[x]  best case of quick sort
    * occurs when the pivot element consistently divided the array into two nearly equal halves
    *in the best case the depth of the recursion tree is minimized to log n. Since each level of the tree takes O(n) time to partition the elemes, the total wrok is  0(nlogn);
        Big O complexity - O(nlogn).
[x]  monotonic stacks
    * specialized stack datastructure that maintains its elements in a specific order either entirely increasing or decreasing.

**Full Domain 2**

**Completed on: Sep 3, 2025 01:39 PM**

[x]  Callback hell
    * situation in JavaScript where multiple nested callback make the code almost impossible to read, maintain, and debug.
    * happens when you perform several asynchronous operations  that depend on each other.
    
[ ]  Process.nextTick() vs setImmediate() —>  need clarity
[ ]  observable
[x]  Example for Event driven architecture answer   need clarity.
    in a standard procedural program the code starts at line 1 and end at line 100 and the precess exists in Node Js the Event loop keeps the program alive. Even if there is no code left to run, the event loop stays active if there are "listners"or"Timers" pending waiting  for specific signals to wake a function up.
[x]  What is Mongo DB Need clarity
    -Mongo Db is  a NoSQL, document oriented database.
    designed  for high performance high availability and easy scalability.
    - it uses JSON like Docuements called BSON stored data in Binary format.
    - you don't have to define a rigid schema before adding data. 
    - Embeded data: Instead of JOINS to link two tables we can  nest or embed realated data in one document.
    - Horizontal Sharding: MongoDB build to be destributed . If your database gets too big for one server it can automatically split the data to multiple server
[x]  Replica set
    -group of mongodb process that maintain the same dataset 
    - primary purpose is to provide redundancy and high availability.
    - a standard replica set consists of at least three nodes. They operate in a primary - secondary  relationship.
    - The Primary Node:
        - All "write" operations(insert, update, delete) go to the primary.
        -The primary, records all changes to its  data in a special file called the oplog(operations log)
    - The Secondary Node:
        -These nodes constantly replicate the primary's oplog apply the changes to their own data set.
        - If primary has a hardware failure, these nodes contain a mirror image of the data.

    -Election process:
        -The nodes stay in constant communication using heartbeats. if secondary nodes stop receiving heart beats from primary for more than 10 seconds they realize the primary is down.
        - The remaining secondary nodes hold and internal vote for a new primary.
        - One secondary is promoted to primary and the and your application automatically switches its connection to the new leader.

    -Arbitrer:
        - sometimes for cost reasons a company might not want to pay for three full servers with three copies of the data. They might use two data nodes and arbiter.
        - An arbitrer does not have a copy of data its only job is to stay in the set needs a strict majority of the original.



[ ]  CAP Theory need a bit more clarity
    - Author : Eric brewer
    - fundamental principle in distrubuted systems.
    - distributed data store can only provide two out of the following three guarantees.
        -Consistency:
            -every read receives the most recent write or an error.
            meaning in a consistent system , once data is written to one node it is instantly updated to all other nodes.
        - Availability
            - Every request recives a (non - error)  response.
            - no guarentee that it contains the most recent write.
            - The system is always on - even if some nodes are failling, you can still get data
        -Partition Tolerance
            -system continues to operate dispite messages being dropped (delayed) by network between nodes.

[ ]  Find the product where price is lesser than 500 and greater than 300
[ ]  The divide and conquer technique needs clarity. That is not only used in the binary search
[ ]  Graph implementation
[ ]  Stack using Queue

**Full Domain 2**

**Completed on: Aug 11, 2025 05:20 PM**

[x]  Callback Function need clarity
- it is a function that is passed as an argument to a function.
- and it is executed inside that function.

[x]  Arrow function want to understand more
-it is a consice way of writing a anonymous function
- arrow function does not have their own this value. They inherit the this value from the surrounding code.
[x]  Callback hell
-It is a situation in javascritp where you have multiple asyncronous callback depend on each other. These nested callback make the code hard to read , maintain and debug
[x]  async/await
- it is syntatic sugar over Promise.
- it lets you write aysncronous code that look like synchronous code.
- while still being non blocking.
- async keyword makes the function always return a promise.
- await Pauses execution to the function.
    -waits a promise to resolve
    - return a reasolved value.
    -How it works internally (IMPORTANT)

    This is where most people stay shallow—you shouldn’t.

    Code:
    async function example() {
        console.log("Start");

    const data = await fetchData();

    console.log("End");
    }
Step-by-step execution:
1. Function starts
"Start" logs
fetchData() runs → returns a Promise
2. await is encountered

The engine:

Registers a continuation:

fetchData().then(resumeFunction)
Pauses execution
Removes function from call stack

👉 The thread is now free

3. Promise resolves
Web API completes task (network/timer/etc.)
The .then() callback is added to Microtask Queue
4. Event loop resumes function
When stack is empty → microtask runs

Function continues from:

console.log("End");

[ ]  ESM vs CommonJS Practicals
[x]  query params 
- they appear after a question mark (?) in the URL
- as key value pairs supperated by =
-  
[x] path params 
- used to identify specific resource.
- wirte them using ":" and it si

[ ]  Middleware
[ ]  List the product on the basics of Category
[ ]  $expr $and $or $nor $not

**Full Domain 2**

**Completed on: Jul 14, 2025 12:26 PM**

[ ]  first non repeating number
[ ]  complexity of quick sort
[ ]  complexity of binary Search
[ ]  max stack implementation
[ ]  merge sort
[ ]  useParams
[ ]  useLocation
[ ]  how to get current url path
[ ]  multi key index
[ ]  .stats()
[ ]  capped collection
[ ]  query params and path params
[ ]  pass two numbers as query params and find the sum of the double of the numbers, and write it in a function.

**Full Domain 2**

**Completed on: Jun 12, 2025 11:13 PM**

[ ]  localStorage vs sessionStorage
[ ]  http in detail
[ ]  process vs threads
[ ]  clusters
[ ]  $expr
[ ]  render props
[ ]  react fiber
[ ]  core principles of Redux
[ ]  applications of singly LL
[ ]  underflow in stack
[ ]  applications of hash table

[ ]  ⁠ ⁠try-catch finally
[ ]  ⁠ ⁠Pure functions
[ ]  ⁠ ⁠closure
[ ]  ⁠ ⁠Generator functions
[ ]  ⁠ ⁠Async-await vs promise.then
[ ]  ⁠ ⁠await keyword
[ ]  ⁠ ⁠Constructor
[ ]  ⁠ ⁠Prototype chainin
[ ]  ⁠ ⁠extends keyword
[ ]  ⁠ ⁠IIFE benefits
[ ]  ⁠ ⁠Event driven architecture
[ ]  ⁠ ⁠process.nextTick
[ ]  ⁠ ⁠Concurrency vs nodejs
[ ]  ⁠ ⁠BSON datatypes
[ ]  ⁠ ⁠$set vs $unse
[ ]  ⁠ ⁠$exists
[ ]  ⁠ ⁠$group with $sum query
[ ]  ⁠ ⁠$in vs $all
[ ]  ⁠ ⁠TTL index syntax
[ ]  ⁠ ⁠function vs hook
[ ]  ⁠ ⁠Custom hook
[ ]  ⁠ ⁠useMemo

**Full Domain 2**

**Completed on: May 12, 2025 11:41 PM**

[ ]  How to do server security in node js
[ ]  What is middleware?
[ ]  Create piping using streams
[ ]  Difference between worker thread and cluster
[ ]  What is difference fork & spawn
[ ]  Write a code to create worker thread
[ ]  Event delegation vs event propagation
[ ]  Event capturing vs event bubbling
[ ]  What is es6/es7 features?
[ ]  Increase the salary of employee by 10% who is working in hr depart
[ ]  Write the query to retrieve duplicates record from the table
[ ]  Shadow dom
[ ]  Throttling vs debouncing
[ ]  Write a code for custom hooks for fetch api or input component
[ ]  Write the code for lazy loading
[ ]  Error boundaries in react.Js
[ ]  What is the difference between throttling and debouncing?
[ ]  How to improve react application performance (take more deeper understanding)?
[ ]  What is the purpose of hoc?
[ ]  Create auto inc/dec counter with/without redux
[ ]  UseEffect vs useLayoutEffect
[ ]  Read about use ref
[ ]  Controlled vs uncontrolled component
[ ]  Convert nested object into flat object
[ ]  Find the sum of the 2nd highest and 2nd lowest element using bst
[ ]  Remove duplicate numbers from an nested array using recursion
[ ]  Find palindromic prefix
Given a list of words, return the longest common prefix among them, if there is no common prefix, return empty string
[ ]  Reverse the strings to their own place using stack
[ ]  Find the hight if the BT
[ ]  Write a code to check if given input is balance parenthesis ?
[ ]  Find the 1st non-repeating character using hashTable.
[ ]  Reverse the string using linklist
[ ]  Find the middle elements using linklist **Show less**

**Full Domain 2**

**Completed on: Apr 26, 2025 01:19 PM**

[ ]  optional chaining
[ ]  block scope vs function scope
[ ]  rest operator
[ ]  spread operator
[ ]  web workers
[ ]  method chaining
[ ]  constructor function
[ ]  query parameters
[ ]  path parameters
[ ]  router chaining
[ ]  cron job
[ ]  write head
[ ]  set header
[ ]  concurrency
[ ]  parallelism
[ ]  rate limiting
[ ]  CSRF
[ ]  cookie- sameSite, httpOnly, domains
[ ]  node's handling of i/o bound vs cpu bound
[ ]  clustering
[ ]  useLocation
[ ]  useParams
[ ]  hot module replacement (HMR)
[ ]  react concurrent mode
[ ]  incremental rendering
[ ]  type of relations
[ ]  one-to-one
[ ]  one-to-many
[ ]  many-to-many
[ ]  mongodump
[ ]  batch sizing
[ ]  type of data modeling
[ ]  embedded data
[ ]  references
[ ]  materialized views
[ ]  1, implement stack with push, pop and getMax (all the methods should have o(1) time)
[ ]  2, write a function which will convert a given obj to string. Example
let obj = {
    name: "hi",
    age: 20
}
output = "name=hi&age=20"

**Full Domain 2**

**Completed on: Apr 12, 2025 04:12 PM**

[ ]  Timer practicals
[ ]  Generator function
[ ]  Reduce method practicals
[ ]  Type coercion
[ ]  Call, apply, bind
[ ]  Threadpool
[ ]  Libuv
[ ]  Streams
[ ]  Options method
[ ]  Child process
[ ]  app.locals
[ ]  app.all
[ ]  Partials
[ ]  Jwt components
[ ]  Proxy server
[ ]  React.Memo
[ ]  Axios interceptors
[ ]  Axios canceltoken
[ ]  Debouncing
[ ]  Hashed index
[ ]  CAP theorom - learn more
[ ]  lookup
[ ]  addToSet
[ ]  elemMatch
[ ]  Update practicals
[ ]  Segment tree
[ ]  Avl tree
[ ]  Linear probing
[ ]  Quadratic probing
[ ]  Splay tree

**Full Domain 2**

**Completed on: Apr 12, 2025 04:12 PM**

[ ]  Timer practicals
[ ]  Generator function
[ ]  Reduce method practicals
[ ]  Type coercion
[ ]  Call, apply, bind
[ ]  Threadpool
[ ]  Libuv
[ ]  Streams
[ ]  Options method
[ ]  Child process
[ ]  app.locals
[ ]  app.all
[ ]  Partials
[ ]  Jwt components
[ ]  Proxy server
[ ]  React.Memo
[ ]  Axios interceptors
[ ]  Axios canceltoke
[ ]  Debouncing
[ ]  Hashed index
[ ]  CAP theorom - learn more
[ ]  lookup
[ ]  addToSet
[ ]  elemMatch
[ ]  Update practicals
[ ]  Segment tree
[ ]  Avl tree
[ ]  Linear probing
[ ]  Quadratic probing
[ ]  Splay tree

**Full Domain 2**

**Completed on: Mar 22, 2025 08:02 PM**

[ ]  What is an action creator?
[ ]  What is connect() in Redux?

**Full Domain 2**

**Completed on: Mar 7, 2025 08:49 PM**

[ ]  react drawbacks
[ ]  HTML sanitization
[ ]  forwardRef
[ ]  error boundary
[ ]  why immutability important in redux, and how is it achieved
[ ]  flux architecture
[ ]  redux-thunk

**Full Domain 2**

**Completed on: Feb 28, 2025 10:39 AM**

[ ]  React.memo exact concept
[ ]  UseReducer exact concpet

**Full Domain 2**

**Completed on: Feb 20, 2025 12:31 PM**

[ ]  Controlled components vs uncontrolled components
[ ]  Higher Order components- use case
[ ]  Change colour of the text dynamically using useRef
[ ]  Increment and decrement counter using useContext
[ ]  Outlet
[ ]  Limitations of useContext
[ ]  Lazy loading

**Full Domain 2**

**Completed on: Feb 14, 2025 10:51 AM**

[ ]  parent to child props passing. useRef

**Full Domain 2**

**Completed on: Feb 5, 2025 04:52 PM**

[ ]  synthetic events
[ ]  workout: pass data from a child component to parent using props
[ ]  rules of hooks
[ ]  how to handle mounting, updating & unmounting using useEffect
[ ]  controlled & uncontrolled elements
[ ]  useRef - understand the usecases
[ ]  can we use index of an array as key props?
[ ]  shadow DOM

**Full Domain 2**

**Completed on: Jan 22, 2025 07:07 PM**

[ ]  Dynamic Rendering
[ ]  Arrow function
[ ]  map object
[ ]  usenavigate exact
[ ]  Do more practicals

**Full Domain 2**

**Completed on: Jan 15, 2025 06:14 PM**

[ ]  as use case in ts
    [ ]  Decorators

**Full Domain 2**

**Completed on: Jan 7, 2025 07:19 PM**

[ ]  Polymorphism
[ ]  difference between protected and public
[ ]  abstract class
[ ]  difference between interface and abstract class
[ ]  difference between type and interface
[ ]  static

**Full Domain 2**

**Completed on: Jan 7, 2025 07:19 PM**

[ ]  Polymorphism
[ ]  difference between protected and public
[ ]  abstract class
[ ]  difference between interface and abstract class
[ ]  difference between type and interface
[ ]  static

**Full Domain 2**

**Completed on: Dec 16, 2024 11:35 AM**

[ ]  What is a trigger?
[ ]  How do you handle transactions?
[ ]  What is a window function?
[ ]  What is a subquery?

**Normal**

**Completed on: Dec 4, 2024 01:30 PM**

[ ]  trie
[ ]  heap sort
[ ]  tree
[ ]  Linear type DS
[ ]  Quadratic time complexity
[ ]  Linear Time complexity
[ ]  weighted and an unweighted graph
[ ]  DFS Complexity
[ ]  BFS Complexity
[ ]  graph indexing
[ ]  represent a graph in memory