A newbie trying to learn backend in js, ts

Only JavaScript




HTTP Crash Course
HTTP --> Hyper Text Transfer Protocol

URL --> uniform resource locator
URI --> uniform resource identifier
URN --> uniform resource name

=> What are HTTP headers

metadata --> key-value sent along with request & response

-> caching, authenticatin, manage state
{X-prefix -> 2012[X-deprecated]} --old

-Request Headers         --> data from client
-Response Headers        --> data from server
-Representation Headers  --> encoding / compression
-Payload Headers         --> data 


Payload is just data (fancy name for data)

Most Common Headers

-Accept: application / json
-User - Agent => [request from which application]
-Authorization
-Content - Type
-Cookie
-Cache - Control

MORE 
Header Information

=> CORS
1. Access-Control-Allow-Origin
2. Access-Control-Allow-Credentials
3. Access-Control-Allow-Method

=> Security
1. Cross-Origin-Embedder-Policy
2. Cross-Origin-Openers-Policy
3. Content-Security-Policy
4. X-XSS-Protection

HTTP methods
Basic set of operations that can be used to interact with server

1. GET - retrieve a resource
2. HEAD - no message body (response headers only)
3. OPTIONS - what operations are available
4. TRACE - loopback test (get same data)
5. DELETE - remove a resource
6. PUT - replave a resource
7. POST - interact with a resource (mostly add)
8. PATCH - change part of a resource


HTTP Status Code

1. 1xx - Informational
2. 2xx - Success
3. 3xx - Redirection
4. 4xx - Client Error
5. 5xx - Server Error


100 - Continue
102 - Processing
200 - Ok
201 - Created
202 - Accepted
307 - Tempraroy Redirect
308 - Permanent Redirect
400 - Bad Request
401 - Unauthorized
402 - Payment Required
404 - Not Found
500 - Internal Server Error
504 - Gateway time out 

