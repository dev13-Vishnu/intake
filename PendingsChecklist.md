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

[x]  ESM vs CommonJS Practicals
[x]  query params 
- they appear after a question mark (?) in the URL
- as key value pairs supperated by =
-  
[x] path params 
- used to identify specific resource.
- wirte them using ":" and it si

[x]  Middleware
- function that has access to the request and response object and the next function in the applications request response cycle.
-uses: 
    -Authentication and authorization
    before requrest ever touch private data
    -Logging:
    for debugging and analytics
    -Body parsing:
    example:
    to convert Json object in a POST request the raw data is just a stream of bytes middlewares like express.json() converts that stream into readable javascript objects and attach it to request.body.
    -Security:
    setting special HTTP Headers to protect against hackers

[x] Types of middlewares
- Application-level
- Router-level
- Error-handling
- Build-in
- Third-partyx

[x] http security headers :
are HTTP response headers  sent by a server  to a browser  instructing to enable  security features that protect the web applications
- mitigate threats like cross site scripting(XSS), click jacking and data injection by restricting browser behaviour  and restricting browser behaviour.
[x]  List the product on the basics of Category
[ ]  $expr $and $or $nor $not

**Full Domain 2**

**Completed on: Jul 14, 2025 12:26 PM**

[X]  first non repeating number
[ ]  complexity of quick sort
[ ]  complexity of binary Search
[ ]  max stack implementation
[ ]  merge sort
[x]  useParams
- used to access the path parameters
- when to use when you need id or slug  of a specific resources.
-how it works: if your route is defined as <Route path ="/product/:id"/> and the user  visits /products/99, useParams will capture that 99
[x]  useLocation
- returns an object that represents an entire current URL.
-the object structure:  it returns object with these properties.
    -pathname: The path (e.g., /shop);
    -search: The query string  (e.g., ?category=electronics);
    -hash: The anchor(e.g., #reviews)
    -state: private data passed through a <Link> or maps()
[x]  how to get current url path
-using plain javascript web api:
    -window.location.pathname: returns everything after domain name
    -window.locaion.href: returns teh entire url
    - usign react router: use "useLocation" hook
[ ]  multi key index
[ ]  .stats()
[x]  capped collection
-specialized type of mongodb collection.
-fixed in size.
-follows First-In-First-Out insertion order.
-like regular collection it does not grow dynamically as new data is added.
-strict maximum size limit can be the size of memory used or number of documents.
-when limit is reached mongodb automatically makes room for new documents by overwritting the older ones in the collection.
     db.createCollection('log-data', {
        capped: true,
        size: 5242880, //size i bytes e.g: 5MB
        max: 500 // optional maximum number or documents.
     })

[ ]  pass two numbers as query params and find the sum of the double of the numbers, and write it in a function.

**Full Domain 2**

**Completed on: Jun 12, 2025 11:13 PM**

[x]  localStorage
-designed for data that should persist even after the browser or tab is closed.
-no exipration date, permenent until manually deleted by the user or the application.
-Data is shared across all tabs and windows from the same orgin
-storage limit around  5mb -10mb
-storing: user preference(dark mode) persistent settings 
[x] sessionStorage
-data is removed as soon as the tab is closed. restricted to specific tab as the tab was created. same website different tab gets unique sessions storages.
-usually similar to localstorage ~5MB.
-for storing: form data, multistep wizard process, or sensitive data that shouldn't survive when tab is clossed.

[x]  http in detail
- foundational, application-layer protocol for the transfer of data
- follows request- response model
-Http is  stateless : server doesn't remember the client between the request. every request is treated as brand new interaction.
- Anatomy of Http Request
    1. Method: GET,POST,PUT,PATCH,DELETE
    2.URL
    3.Headers
    4.Body(payload)
-Anatomy Http Response
    1.Status code
    2.Headers
    3.Body
-http simply wraped in SSL/TLS encryption layer

[x]  process vs threads
-when you start an application the operating create process.
-each process is independent it has it's own dedicated memory space.
-one process crashing usually doesn't affect  others.
-communication is difficult because processes don't share memory.
-threads exist inside a process. Every process has atleast one thread.
-threads share memory of their parent process. however each thread has its own stack and registers to keep track or its own calculation
-if a thread has a major  error it can crash the entire process
-communication is very easy since they share the same memmory then they can talk to each other  by simply writing and reading the same variables. 
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




🧠 MASTER PLAN: Processes & Threads in Node.js
🔴 PHASE 1 — Core Mental Model (Non-negotiable foundation)
✅ Checklist You should be able to answer:
1. Why can’t Node handle CPU-heavy tasks on main thread?
    Node.js runs JavaScript on a single-threaded event loop. CPU-heavy tasks (e.g., large loops, hashing, image processing) are blocking operations.
    - While such a task is executing, the call stack is occupied
    - The event loop cannot process other callbacks
    - This lead to event loop starvation -> no incoming requests are served.
    Key point: Node is designed for non-blocking I/O , not long-running synchronous computation.
    In production, CPU-heavy work must be offloaded to Worker Threads or external services.
2. Why are threads faster but riskier than processes?
    Threads:
        - Share the same memory space
        - Communication is fast (no IPC overhead)
        - Lower memory footprint
    Processes:
        - Have isolated memory
        - Communicate via IPC (inter-Process communication) -> slower
        - More memory overhead
    Why threads are riskier:
        - Shared memory -> race conditions
        - Required synchronization (locks, mutexes)
        - Bugs like deadlocks and data corruption
3. How does Node achieve concurrency with one thread?
    -Node uses an event-driven, non-blocking architecture powered by libuv
    Mechanism:
    1. Async thread continues execution (non-blocking)
        -OS kernal Or
        -Libuv threadpool
    2. Main thred continues execution (non-blocking)
    3. When task completes: 
        -callback is pushed to callbacke queue / microtask queue
    4. Event loop picks it up when callstack is empty.
    Result: Multiple operations are in progress simultaneously -> concurrency without multiple JS threads
4. When do you need parallelism instead of concurrency?
- when performance depeds on CPU utilization , concurrency alone is insufficient.
- you need paralelism when taks must execute simultaneously
on multiple CPU cores, typically for:
    CPU-bound workloads:
    -Image/video processing
    -Cryptography
    -Machine learning computations
    -Large data transformations
5. Why is I/O perfect for Node but CPU is not?
    I/O operations:
    - Network request, DB queries, file reads
    - Mostly waiting time, not CPU time
    - Node offloads them -> keeps event loop free.
    CPU operations:
    - Require continuous computation on the main thread 
    - Cannot be offloaded automatically (except specific libuv thread pool tasks)
    - Block the even loop


“Why is Node.js called single-threaded but still handles concurrency?”

🔴 PHASE 2 — Node.js Architecture Deep Dive
✅ Checklist You should be able to explain:

1. Why do promises run before setTimeout?
    -Promise callbacks go to the microtask queue.
    -setTimeout callback goes to the timer queue
    -After each turn of the event loop, Node drains microtask first, then process timers.

2. Where does fs.readFile actually execute?
    - the JS call is made in V8 , but the work is delegated to libuv's thread pool.
    - A worker thread performs the blocking file I/O.
    - On completion, a callback is queued back to the eventloop.
3. Why does CPU-heavy code block everything?
    - your JS runs on the singe main thread (eventloop).
    - A long CPU taks occupies the callstack, preventing the loop from handling other events.
4. What is the role of libuv vs V8?
    -V8: Executes JavaScript 
    - libuv: Provides the event loop, async I/O and abstraction, timers and a thread pool for certain blocking operations.
    - V8 runse code; libuv orchestrate I/O and scheduling.
5. Why doesn’t HTTP use thread pool?
    - network is handled via non-blocking sockets
    - Thread pool is for operations that lack non-blocing OS APIs
6. Why doesn’t fs.readFile block Node?
    - it is offloaded to libuv thread pool.
    - the main thread return immediately and keeps serving other work.
    - completion delivered via callback.
7. Why does a for loop block Node but crypto.pbkdf2 doesn’t?
    - for loop : pure JS -> runs on the main thread -> blocks.
    - crypto.pdkdf2 : delegated to libuv thread pool -> runs on worker thread -> non blocking to the event loop.
8. What actually runs inside libuv threads?
    - Blocking or CPU-intensive native tasks such as:
        - File system operations (fs.*)
        - Crypto (pbkdf2, scrypt, some randomBytes)
        - DNS (when not using OS async APIs)
    - Implemented in C/C++ bindings, not your JS.
9. When do you NEED worker threads instead of async/await?
use wroker_thread when:
    - Work is CPU- bound and long-running (image processing, compression, ML inference).
    - You need Parellel JS execution or shared memory 
    async/await only structures non-blocking I/O: it doesn't add parallel CPU
10. Why HTTP requests don’t need threads
-they are I/O-bound . Non-blocking sockets+ event loop let one thread manage thousands of connections concurrently.
no per request thread needed.
11. Why crypto.pbkdf2 runs in parallel but a loop doesn’t
-for loop runs in single main thread -> no parallelism, and Pdkdf2 offloaded into thread pool -> can run on multiple cores
12. Why Node can handle 10k requests concurrently but choke on CPU work
    -10k requests ≈ mostly waiting (I/O) → event loop scales well.
    -CPU-heavy work consumes the only JS thread, stalling progress for all requests.

13. When to choose:
Async I/O (default)
    - DB calls, HTTP calls, file reads/writes (typical web APIs)
    - Goal: throughput with minimal threads
libuv thread pool
    - Built-in APIs that already use it (fs, crypto, dns)
    - You generally don’t manage it, maybe tune UV_THREADPOOL_SIZE
Worker Threads
    - CPU-bound JS tasks you control
    - Need parallelism within a process
    - Care about lower IPC overhead vs processes
Cluster (multiple processes)
    - Scale across CPU cores for serving requests
    - Each process has its own event loop (better isolation)
Horizontal scaling (multiple machines)
    - When a single box isn’t enough
    - Combine with queues/workers for CPU jobs
    - thread pool vs worker threads vs cluster

🔴 PHASE 3 — libuv Thread Pool (Hidden Multithreading)
✅ Checklist You should understand:

1. Why does increasing UV_THREADPOOL_SIZE sometimes NOT improve performance?
2. Why is bcrypt a common bottleneck in Node apps?
3. Why doesn’t HTTP traffic use the thread pool?
4. What happens when 100 crypto tasks hit a pool of 4 threads?
5. When should you switch from thread pool → worker threads?

🔴 PHASE 4 — Child Processes (True Parallelism)
✅ Checklist
 Why Node needs multiple processes
 Understand:
 spawn
 exec
 execFile
 fork
 IPC (Inter-process communication)
 Message passing (process.send)
🧪 Practice
 Build a parent script spawning child processes
 Send data between them
🎯 Outcome

You should answer:

“When would you use child_process instead of worker_threads?”

🔴 PHASE 5 — Worker Threads (True Multithreading in Node)
✅ Checklist
 Why worker threads were introduced
 Difference:
 Worker Threads vs Child Processes
 Shared memory:
 SharedArrayBuffer
 Atomics
 Message passing (postMessage)
 Worker lifecycle
🧪 Practice
 Move CPU-heavy task to worker thread
 Compare performance with main thread
🎯 Outcome

You should confidently explain:

“How Node achieves multithreading”

🔴 PHASE 6 — Cluster Module (Scaling Node Apps)
✅ Checklist
 What is clustering?
 Why Node uses clustering
 How cluster works (multiple processes sharing server port)
 Load balancing basics
 Sticky sessions problem
🧪 Practice
 Create clustered HTTP server
 Log process IDs handling requests
🎯 Outcome

You should answer:

“How do you scale a Node app on multi-core machines?”

🔴 PHASE 7 — Advanced Concepts (Where most devs fail)
✅ Checklist
 Event loop blocking (real examples)
 Identifying CPU bottlenecks
 When to use:
 Async I/O
 Thread pool
 Worker threads
 Child processes
 Backpressure handling
 Race conditions in worker threads
 Memory overhead comparison:
 Process vs Thread
🔴 PHASE 8 — Production Engineering Decisions
✅ Checklist
 Design decisions:
 When to scale vertically vs horizontally
 Monitoring:
 CPU usage
 Event loop lag
 Tools:
 clinic.js
 node --inspect
 Real-world cases:
 Image processing
 Video encoding
 Large JSON parsing
🧪 FINAL PROJECT (MANDATORY)

Build a mini system:

💡 “Task Processor System”
Main server (Express)
Offload CPU task:
Version 1 → blocking
Version 2 → worker thread
Version 3 → child process
Compare:
Response time
CPU usage
🧠 INTERVIEW CHECKPOINTS

You are NOT done until you can answer:

Why Node is single-threaded but not limited
Difference: event loop vs thread pool
worker_threads vs child_process
How clustering works internally
How to handle CPU-heavy tasks