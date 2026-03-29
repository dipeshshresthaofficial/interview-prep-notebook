export const interviewSiteMeta = {
  "eyebrow": "Diyo Private Library",
  "title": "Interview Questions And Answers",
  "description": "A password-protected Vue site for reviewing the supplied interview transcript in a cleaner, searchable format. The content is grouped into session-level sections and question-level answers so it can be shared through a private link without exposing the document itself."
};

export const interviewQuickFacts = [
  {
    "label": "Interview sessions",
    "value": "16"
  },
  {
    "label": "Parsed Q&A entries",
    "value": "264"
  },
  {
    "label": "Focus areas",
    "value": "45"
  },
  {
    "label": "Access model",
    "value": "Password gate"
  }
];

export const interviewSections = [
  {
    "id": "session-1",
    "sessionLabel": "Session 1",
    "title": "Introductions, Cloud, And Coding Fundamentals",
    "summary": "Self-introduction, database choices, and a stack-based coding discussion.",
    "focusAreas": [
      "Introductions",
      "AWS",
      "Databases",
      "Coding"
    ],
    "questions": [
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-do-you-want-to-introduce-yourself",
        "prompt": "Do you want to introduce yourself?",
        "answer": "So as you already know, my name is Shraddha, and I've been working as a full stack Java developer for around five years now. I've mainly worked with core Java, microservices, Spring Boot, and Hibernate in my previous projects. Apart from that, I've also handled the front end using Angular - specifically its component-based system. I've worked with databases like MySQL and Oracle. Primarily, I've been on the backend side, which makes up around 65% of my profile. The remaining portion has been on the front end. My main responsibilities revolve around development, so I've been deeply involved in coding, and to some extent in design, testing, and deployment tasks as well.",
        "shortAnswer": "So as you already know, my name is Shraddha, and I've been working as a full stack Java developer for around five years now. I've mainly worked with core Java, microservices, Spring Boot, and Hibernate in my previous...",
        "category": "Behavioral",
        "tags": [
          "Spring Boot",
          "Angular",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-have-you-ever-worked-with-public-cloud-systems-like-aws-or-a",
        "prompt": "Have you ever worked with public cloud systems like AWS or Azure? Do you have experience deploying there, not just working with those technologies?",
        "answer": "Yes, definitely. I have experience with cloud systems, particularly AWS, which I've used more extensively. I've also had some experience with Azure, but I would say most of my hands-on work has been with AWS.",
        "shortAnswer": "Yes, definitely. I have experience with cloud systems, particularly AWS, which I've used more extensively. I've also had some experience with Azure, but I would say most of my hands-on work has been with AWS.",
        "category": "System design",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-in-aws-you-mentioned-using-different-databases-can-you-tell-",
        "prompt": "In AWS, you mentioned using different databases. Can you tell me where you used NoSQL vs SQL databases and when it would be helpful to use a combination of the two, based on your experience?",
        "answer": "Definitely. I've mostly worked with relational databases, and they are typically used when we need to store structured data-data that has relationships between different entities. For example, if you need to store transactional information such as payment data or credit card transactions, using MySQL would be appropriate. On the other hand, when we are dealing with unstructured data, like user comments or suggestions, especially in cases where we want to build a recommendation system, then using NoSQL databases such as MongoDB is more suitable. So, when we need to support both structured and unstructured data, using a combination of SQL and NoSQL databases can be very helpful.",
        "shortAnswer": "Definitely. I've mostly worked with relational databases, and they are typically used when we need to store structured data-data that has relationships between different entities. For example, if you need to store tra...",
        "category": "Data",
        "tags": [
          "AWS",
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-how-about-a-system-where-you-have-structured-data-but-the-bi",
        "prompt": "How about a system where you have structured data, but the biggest issue is latency - what would be your recommendation?",
        "answer": "In that kind of scenario, where we are dealing with structured data but also need to handle latency issues, I would still consider using a MySQL database if vertical scaling or adding replica instances can help address the latency. However, in such cases, a hybrid approach could work better - where we combine MySQL with a NoSQL database. This way, we can keep the structured data in SQL for consistency and use NoSQL to serve read-heavy or low-latency operations.",
        "shortAnswer": "In that kind of scenario, where we are dealing with structured data but also need to handle latency issues, I would still consider using a MySQL database if vertical scaling or adding replica instances can help addres...",
        "category": "System design",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-but-if-latency-is-the-issue-and-availability-isn-t-would-you",
        "prompt": "But if latency is the issue and availability isn't, would you still recommend MySQL in that case?",
        "answer": "If latency is the main issue, then no, I would suggest using a NoSQL database. NoSQL systems are generally designed to handle high-speed read and write operations, so they are better suited for low-latency requirements. So in such a case, I would not go with MySQL.",
        "shortAnswer": "If latency is the main issue, then no, I would suggest using a NoSQL database. NoSQL systems are generally designed to handle high-speed read and write operations, so they are better suited for low-latency requirement...",
        "category": "Data",
        "tags": [
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-let-s-move-to-the-coding-exercise-you-said-you-ll-first-disc",
        "prompt": "Let's move to the coding exercise. You said you'll first discuss your approach - go ahead.",
        "answer": "Sure. So I think we can solve this problem using a stack to track the characters. We'll also need to track the consecutive counts of characters, and for that, we can use a custom class that stores each character and how many times it appears consecutively. When a character reaches a count equal to K, we pop it from the stack. At the end, we reconstruct the final string from whatever remains in the stack. This approach helps us manage consecutive duplicate removal efficiently.",
        "shortAnswer": "Sure. So I think we can solve this problem using a stack to track the characters. We'll also need to track the consecutive counts of characters, and for that, we can use a custom class that stores each character and h...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-how-will-you-keep-track-of-the-count-of-k-since-it-can-chang",
        "prompt": "How will you keep track of the count of K since it can change based on the input?",
        "answer": "We need to check for every character if it reaches the count K. So, if the top of the stack has the same character, we increment the count. If the count reaches K, we pop that group from the stack. If it doesn't match the top character, we push a new object with the character and a count of 1. This way, the stack will always hold the current streak of characters and how many times they have occurred consecutively.",
        "shortAnswer": "We need to check for every character if it reaches the count K. So, if the top of the stack has the same character, we increment the count. If the count reaches K, we pop that group from the stack. If it doesn't match...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-why-is-it-necessary-to-reset-the-count-if-the-next-character",
        "prompt": "Why is it necessary to reset the count if the next character is different from the current one?",
        "answer": "Because we are tracking consecutive characters. If the next character is different, that means the current sequence is broken, so we reset the count and start over with the new character. For instance, if we have a sequence like A, B, B, C, C, C, B, we track and remove the C, C, C group when it hits K. Then we move forward and track the next group again, like B, B, B, and remove them if they reach K.",
        "shortAnswer": "Because we are tracking consecutive characters. If the next character is different, that means the current sequence is broken, so we reset the count and start over with the new character. For instance, if we have a se...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-can-you-explain-what-s-happening-in-line-29-of-your-code",
        "prompt": "Can you explain what's happening in line 29 of your code?",
        "answer": "Sure. In line 29, we're checking whether the stack is empty or not. Then we compare the top character in the stack with the current character c. To get the top of the stack, we use the peek method. If the top character is equal to c, then we increment the count for that character. Next, we check if the count has reached K. If yes, then we pop that character group from the stack. If the character does not match the top of the stack, then in the else block, we simply push a new character with count 1 onto the stack.",
        "shortAnswer": "Sure. In line 29, we're checking whether the stack is empty or not. Then we compare the top character in the stack with the current character c. To get the top of the stack, we use the peek method. If the top characte...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-what-s-the-idea-behind-this-why-use-a-stack-here",
        "prompt": "What's the idea behind this? Why use a stack here?",
        "answer": "The idea is to track consecutive characters. Using a stack makes it easy to check the last seen character and its count. If we remove a group, the next character could potentially form a new group, so the stack helps us backtrack effectively. This structure allows us to manage character sequences dynamically as we iterate over the input. It's especially helpful for problems where removal affects adjacent characters and we might need to merge or recheck sequences again.",
        "shortAnswer": "The idea is to track consecutive characters. Using a stack makes it easy to check the last seen character and its count. If we remove a group, the next character could potentially form a new group, so the stack helps...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-when-are-you-building-the-final-string-during-iteration-or-a",
        "prompt": "When are you building the final string - during iteration or after?",
        "answer": "We are building the final string after the iteration. First, we iterate over the character array and manage the stack. Once the iteration is done, we use a StringBuilder to construct the final string by popping characters and their counts from the stack.",
        "shortAnswer": "We are building the final string after the iteration. First, we iterate over the character array and manage the stack. Once the iteration is done, we use a StringBuilder to construct the final string by popping charac...",
        "category": "Frontend",
        "tags": [],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-what-would-be-the-space-and-time-complexity-in-the-worst-cas",
        "prompt": "What would be the space and time complexity in the worst case?",
        "answer": "Let's say n is the length of the input string. Each character is pushed and popped at most once, so the total number of operations is O(n). Therefore, the time complexity is O(n). For the space complexity, in the worst case, if no characters are removed, the stack will hold n elements, making the space complexity also O(n).",
        "shortAnswer": "Let's say n is the length of the input string. Each character is pushed and popped at most once, so the total number of operations is O(n). Therefore, the time complexity is O(n). For the space complexity, in the wors...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-can-you-give-me-an-example-where-the-space-complexity-become",
        "prompt": "Can you give me an example where the space complexity becomes O(n)?",
        "answer": "Yes. Suppose we have a string like A, B, C, D, E, F, G, H, I with K = 3. Since there are no consecutive characters, none of them will be removed. Each character will be stored in the stack, so the stack size will grow to n, which is 9 in this example.",
        "shortAnswer": "Yes. Suppose we have a string like A, B, C, D, E, F, G, H, I with K = 3. Since there are no consecutive characters, none of them will be removed. Each character will be stored in the stack, so the stack size will grow...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Introductions, Cloud, And Coding Fundamentals-what-if-k-is-2-does-the-stack-length-change-in-that-example",
        "prompt": "What if K is 2? Does the stack length change in that example?",
        "answer": "No, in this particular example, even if K = 2, the stack size still remains the same because we don't have any consecutive characters to remove. So we're still storing all characters.",
        "shortAnswer": "No, in this particular example, even if K = 2, the stack size still remains the same because we don't have any consecutive characters to remove. So we're still storing all characters.",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Short answer"
      }
    ],
    "defaultOpen": true
  },
  {
    "id": "session-2",
    "sessionLabel": "Session 2",
    "title": "Current Project And Gateway Architecture",
    "summary": "Microservice orchestration, gateway flow, resiliency, Kafka, and reactive APIs.",
    "focusAreas": [
      "Microservices",
      "Gateway",
      "Kafka",
      "Reactive"
    ],
    "questions": [
      {
        "id": "Current Project And Gateway Architecture-can-you-talk-about-the-project-which-you-re-working-on-right",
        "prompt": "Can you talk about the project which you're working on right now?",
        "answer": "Sure, definitely. I'm currently working with JPMorgan Chase. The project is focused on an orchestration platform, and our team manages a lot of microservices. We are migrating from a legacy platform to Spring Cloud Gateway. My responsibilities mainly involve writing functions and filter factories for handling request and response manipulations, and then orchestrating those requests to multiple downstream services. These services might belong to our own internal team or other microservices. It's essentially about microservices orchestration, and we also incorporate resiliency mechanisms and handle metadata in the requests.",
        "shortAnswer": "Sure, definitely. I'm currently working with JPMorgan Chase. The project is focused on an orchestration platform, and our team manages a lot of microservices. We are migrating from a legacy platform to Spring Cloud Ga...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-just-want-to-get-like-business-context-behind-it",
        "prompt": "Just want to get like business context behind it.",
        "answer": "Since it's a banking app, we need to maintain a central point of flight for various downstream services. These downstreams could be with vendors or partners dealing with deposits, money movement, or any other banking-related operations. There is a single point of entry, so once a client makes a call, we route that request through our orchestration service. These services include attached metadata, and before the request is sent to the respective downstream services, we apply necessary functions and filters. One example of such a feature is our tokenization service, which manipulates or enriches the request - such as adding fields or removing certain headers - before it's forwarded. So, although it's a gateway, it comes with a lot of features.",
        "shortAnswer": "Since it's a banking app, we need to maintain a central point of flight for various downstream services. These downstreams could be with vendors or partners dealing with deposits, money movement, or any other banking-...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Current Project And Gateway Architecture-so-that-s-it-is-it-a-two-way-communication-at-the-same-time",
        "prompt": "So that's it. Is it a two-way communication at the same time?",
        "answer": "Yes, it's similar to an API gateway. That's the main component of the application, and we are using Spring Cloud Gateway as the core for it. It acts as the entry point for any external consumers. Before any request enters the banking system, it goes through authentication.",
        "shortAnswer": "Yes, it's similar to an API gateway. That's the main component of the application, and we are using Spring Cloud Gateway as the core for it. It acts as the entry point for any external consumers. Before any request en...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices",
          "Security",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-this-is-authenticated-before-entering-into-the-banking-syste",
        "prompt": "This is authenticated before entering into the banking system?",
        "answer": "Yeah. For authentication, we actually have an identity gateway even before our layer. The process starts with a firewall layer, and from there it moves to the identity provider, which is typically a sign-in controller. That's where users log in and are validated. Once validated, the request reaches our internal layer. We use Spring Security and access control mechanisms to ensure secure communication. So that's how authentication is handled in our orchestration flow.",
        "shortAnswer": "Yeah. For authentication, we actually have an identity gateway even before our layer. The process starts with a firewall layer, and from there it moves to the identity provider, which is typically a sign-in controller...",
        "category": "System design",
        "tags": [
          "Spring Boot",
          "Microservices",
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-is-there-any-errors-or-failures-exceptions-for-this-orchestr",
        "prompt": "Is there any errors or failures, exceptions for this orchestration?",
        "answer": "Well, for exceptions, we have a global exception handler in place by default. Any kind of error from downstream services gets written back through that. For handling failure scenarios, we use a circuit breaker mechanism. So, if a downstream service fails, we don't let that impact the rest of the flow. Instead, we return a fallback response once a defined threshold is met. The circuit breaker is one of our first resiliency patterns. Apart from that, we also use rate limiting, which is a simple mechanism to prevent bursts of traffic. Additionally, the application is horizontally scalable to handle a large volume of requests. We also have a default error filter that kicks in during failures. All this helps us handle high volumes of data even if there's a spike in error rates.",
        "shortAnswer": "Well, for exceptions, we have a global exception handler in place by default. Any kind of error from downstream services gets written back through that. For handling failure scenarios, we use a circuit breaker mechani...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Current Project And Gateway Architecture-so-you-tend-to-include-at-a-single-point-in-time",
        "prompt": "So you tend to include at a single point in time?",
        "answer": "Yes, for example, our peak transactions per second (TPS) go up to around 1400. We have about 14 instances running concurrently. We use Spring Cloud Gateway, which handles these requests in a multi-threaded way using executor services internally. It's a very resilient setup designed to manage multiple requests at scale.",
        "shortAnswer": "Yes, for example, our peak transactions per second (TPS) go up to around 1400. We have about 14 instances running concurrently. We use Spring Cloud Gateway, which handles these requests in a multi-threaded way using e...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-making-a-call-to-orchestration-so-clearly-800-apis-is-it-lik",
        "prompt": "Making a call to orchestration - so clearly, 800 APIs, is it like one-time call is one API or something else?",
        "answer": "Yes, it's more like - we have 800 APIs currently onboarded. So, clients can call any one of those 800 APIs. It's not one request triggering all 800 APIs. If a client wants to use a new feature or API, they can only use it after it's been onboarded. So, each API is individually available once configured.",
        "shortAnswer": "Yes, it's more like - we have 800 APIs currently onboarded. So, clients can call any one of those 800 APIs. It's not one request triggering all 800 APIs. If a client wants to use a new feature or API, they can only us...",
        "category": "Technical",
        "tags": [
          "Microservices"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-we-re-exposing-you-know-like-in-a-generalized-way-to-our-cli",
        "prompt": "We're exposing, you know, like, in a generalized way to our clients. Can you explain that?",
        "answer": "Sure. Let me put it in a different way. So, our orchestration layer serves as a global point of entry and adds a layer of protection around endpoints that handle critical banking operations, such as money movements, deposits, and cardholder data. This setup allows API owners not to worry about how or from where the requests are coming. For example, if a client is using a mobile device, our orchestration layer ensures that the device is valid and the request is from a trusted application. Let's say you create a new endpoint for transferring money - your application would be onboarded to our system. You provide Swagger documentation specifying which endpoints are needed, and then a single endpoint is exposed to the client that they can call. So this design helps us secure and streamline access to sensitive features.",
        "shortAnswer": "Sure. Let me put it in a different way. So, our orchestration layer serves as a global point of entry and adds a layer of protection around endpoints that handle critical banking operations, such as money movements, d...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Current Project And Gateway Architecture-kafka-or-in-this-project",
        "prompt": "Kafka or in this project?",
        "answer": "Yes, we have used Kafka in this project. One use case is for our internal notification system. There was a failure in the older notification service, which affected our app. So we migrated it to use a Kafka topic to send messages. A Kafka consumer reads those messages and sends out emails. This approach helped us decouple the email service from the main app. We also use Kafka for streaming cardholder or consumer transaction data to the audit table. So, these are the two main Kafka use cases in our project - notification messaging and auditing transaction data.",
        "shortAnswer": "Yes, we have used Kafka in this project. One use case is for our internal notification system. There was a failure in the older notification service, which affected our app. So we migrated it to use a Kafka topic to s...",
        "category": "Technical",
        "tags": [
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-messages-from-the-api-how-are-they-published-is-there-a-trig",
        "prompt": "Messages from the API - how are they published? Is there a trigger or filter involved?",
        "answer": "Yes, it happens within our orchestration layer. We use a filter that handles publishing to the Kafka topic. This happens based on certain metadata or when specific filters are triggered. So, during onboarding or during request processing, you can manually enable the feature using a run method. It's not automatically based on some criteria - it's more like configured during onboarding or explicitly invoked during request processing.",
        "shortAnswer": "Yes, it happens within our orchestration layer. We use a filter that handles publishing to the Kafka topic. This happens based on certain metadata or when specific filters are triggered. So, during onboarding or durin...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-what-is-the-tps-of-your-api",
        "prompt": "What is the TPS of your API?",
        "answer": "Our transaction per second (TPS) rate can go up to around 1400. It usually depends, though, since we sometimes do batch processing. As for Kafka volumes, I haven't worked very deeply on those metrics, but that use case I mentioned earlier with Kafka is something I was involved in. So while I contributed to parts of that, I don't have detailed insights on the full Kafka volume.",
        "shortAnswer": "Our transaction per second (TPS) rate can go up to around 1400. It usually depends, though, since we sometimes do batch processing. As for Kafka volumes, I haven't worked very deeply on those metrics, but that use cas...",
        "category": "Technical",
        "tags": [
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-there-are-some-keys-a-single-application-or-multiple-applica",
        "prompt": "There are some keys, a single application or multiple applications?",
        "answer": "It's a single application, but we have it deployed in three different flavors - one for Android, one for iOS, and one for web applications. Basically, we have three Spring Boot applications, each with a separate main class. But they all use the same internal library, so the core logic remains the same. The reason we split them was initially to separate functions, but now they are almost the same, except for some differences in application properties. When we need to add features, we just update the shared company library.",
        "shortAnswer": "It's a single application, but we have it deployed in three different flavors - one for Android, one for iOS, and one for web applications. Basically, we have three Spring Boot applications, each with a separate main...",
        "category": "Technical",
        "tags": [
          "Spring Boot"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-what-is-the-build-framework-which-you-re-using",
        "prompt": "What is the build framework which you're using?",
        "answer": "I'm using Maven. In the past, I have used Gradle - for example, during a previous project with MasterCard - but currently, I mostly work with Maven for building and managing dependencies.",
        "shortAnswer": "I'm using Maven. In the past, I have used Gradle - for example, during a previous project with MasterCard - but currently, I mostly work with Maven for building and managing dependencies.",
        "category": "Frontend",
        "tags": [],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Current Project And Gateway Architecture-are-the-endpoints-from-top-down-or-bottom-up-from-starting-t",
        "prompt": "Are the endpoints from top-down or bottom-up - from starting to getting the data from any database and getting the result back in a skeletal format?",
        "answer": "Sure, sure. Let's take an example - like an employee endpoint. So, let's say we have a downstream endpoint for something like money movement or account information, and the consumer calls that endpoint. Now, your iPhone or web app makes a request to this endpoint - let's call it changeAndCheers - and that request first goes through a firewall, then to the sign-in controller. After authentication, it reaches the Spring Cloud Gateway orchestration layer, and then it comes to our internal layer. From there, it calls an ancillary service, which accesses our database that stores the routing information for that particular endpoint. It then matches that route and checks for parameters like host, feature, and requestor version. Once the match is found, it's ready to execute the orchestration flow. It runs the required filters from our common module, which is a shared dependency in our shell applications. After that, we use a client module - an HTTP client - to make the downstream calls to the actual API providers. Once we get the response, another common module applies any required response manipulation. Clients only call our orchestration layer - they don't know the downstream services. So it gives a layer of abstraction and control over the downstream APIs.",
        "shortAnswer": "Sure, sure. Let's take an example - like an employee endpoint. So, let's say we have a downstream endpoint for something like money movement or account information, and the consumer calls that endpoint. Now, your iPho...",
        "category": "Data",
        "tags": [
          "Spring Boot",
          "Microservices",
          "Databases",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Current Project And Gateway Architecture-i-am-giving-an-item-number-and-you-have-to-call-an-endpoint-",
        "prompt": "I am giving an item number, and you have to call an endpoint to get the entire item information from multiple endpoints. How do you aggregate that?",
        "answer": "For that, you would need a merge filter. We'll write an endpoint that takes an item number, then calls different endpoints, and merges the responses. For example, in our server layer, we'd have a mapping system that stores the relationship between an item number and the APIs we need to call. The actual implementation would start from a controller, maybe a BestController, that triggers a request to the orchestration service. That service makes the first API call using a reactive web client.",
        "shortAnswer": "For that, you would need a merge filter. We'll write an endpoint that takes an item number, then calls different endpoints, and merges the responses. For example, in our server layer, we'd have a mapping system that s...",
        "category": "Technical",
        "tags": [
          "Microservices"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-you-mentioned-using-reactive-web-what-exactly-is-that-and-ho",
        "prompt": "You mentioned using reactive Web. What exactly is that and how does it help in this flow?",
        "answer": "Yeah, we'll be using Reactive Web, which is essentially non-blocking and asynchronous. So instead of waiting for the item to be retrieved in a traditional, blocking way, you get a reactive stream. This allows the system to handle high concurrency workloads efficiently, especially when dealing with a large list of numbers or API calls. That's why we don't go with blocking logic for this use case.",
        "shortAnswer": "Yeah, we'll be using Reactive Web, which is essentially non-blocking and asynchronous. So instead of waiting for the item to be retrieved in a traditional, blocking way, you get a reactive stream. This allows the syst...",
        "category": "Frontend",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-for-a-simple-one-you-might-not-but-for-your-applications-you",
        "prompt": "For a simple one you might not, but for your applications you do - can you elaborate?",
        "answer": "Right. For simple cases, we might skip it, but in our application, when you have to make multiple API calls to get information for one item, then it becomes necessary to use reactive programming. It helps us to keep the flow non-blocking and more responsive under heavy load.",
        "shortAnswer": "Right. For simple cases, we might skip it, but in our application, when you have to make multiple API calls to get information for one item, then it becomes necessary to use reactive programming. It helps us to keep t...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-once-you-get-that-item-detail-how-do-you-combine-them",
        "prompt": "Once you get that item detail, how do you combine them?",
        "answer": "So basically, once we get all the item details, we can combine them and send the merged response back to the client. That's handled within our reactive flow. For combining the results from different sources, we can use tools like Zip operators or similar mechanisms in reactive streams, depending on how the data is coming in.",
        "shortAnswer": "So basically, once we get all the item details, we can combine them and send the merged response back to the client. That's handled within our reactive flow. For combining the results from different sources, we can us...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-what-about-handling-errors-in-this-reactive-flow",
        "prompt": "What about handling errors in this reactive flow?",
        "answer": "For errors, you basically have a Mono or Flux depending on your implementation, and you can define how you want to handle those errors - for example, by providing default fallbacks or custom error responses. You define how to recover based on the type of failure. So it gives flexibility in controlling error behavior at a stream level.",
        "shortAnswer": "For errors, you basically have a Mono or Flux depending on your implementation, and you can define how you want to handle those errors - for example, by providing default fallbacks or custom error responses. You defin...",
        "category": "Frontend",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Current Project And Gateway Architecture-what-are-some-additional-activities-you-do-as-a-developer-at",
        "prompt": "What are some additional activities you do as a developer at your current role, apart from core coding tasks?",
        "answer": "Thank you so much for your time. I really appreciate talking to you. So apart from coding, I also get involved in design discussions and feature planning. For example, depending on the user stories we have, I participate in refinement meetings and help in shaping how we approach development tasks. Sometimes I help in creating technical documentation, reviewing API specs, and contributing to code reviews for the team. I also assist new developers when they join and sometimes handle small POCs to evaluate certain tools or approaches for our use cases. So yeah, apart from pure development, there's a bit of collaboration, planning, and design work involved in my day-to-day as well.",
        "shortAnswer": "Thank you so much for your time. I really appreciate talking to you. So apart from coding, I also get involved in design discussions and feature planning. For example, depending on the user stories we have, I particip...",
        "category": "Behavioral",
        "tags": [
          "AWS",
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-3",
    "sessionLabel": "Session 3",
    "title": "Frontend, Debugging, And Distributed Teamwork",
    "summary": "Regex debugging, memory usage, Angular discussions, and offshore coordination.",
    "focusAreas": [
      "Debugging",
      "Angular",
      "TDD",
      "Collaboration"
    ],
    "questions": [
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-what-does-your-stomach-do-when-you-open-up-some-code-and-you",
        "prompt": "What does your stomach do when you open up some code and you find, like, like, 100 regular expressions? They're really long ones right there. So what do you? What do you-and there's a bug in there somewhere-what does your stomach do in that particular situation, you know?",
        "answer": "So when I do find really long regular expressions, the first thing that hits me is that it's going to be very hard to debug and maintain that code. I start thinking ahead about how I can tackle the issue. I usually try to narrow down the scope of the problem and then try to reproduce the bug with some test cases. Once I isolate which regex is causing the issue, I sometimes temporarily replace the regex with simpler logic, if needed. That's because during debugging, some of these regexes can be unreadable. So what I do is replace them with basic string methods temporarily. That helps me understand what's happening and fix the issue more efficiently.",
        "shortAnswer": "So when I do find really long regular expressions, the first thing that hits me is that it's going to be very hard to debug and maintain that code. I start thinking ahead about how I can tackle the issue. I usually tr...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-tell-me-about-the-memory-usage-and-the-cpa-usage-if-say-the-",
        "prompt": "Tell me about the memory usage and the CPA usage. If, say, the input is three gigabytes long, your string is three gigabytes long-in that situation?",
        "answer": "Yeah, so in that case, I think the main thing is the memory usage, especially because we're using regex, right? In Java, since strings are immutable, any operation creates a new string object in memory. So even if the input is three GB long, the memory used can become multiple times that size. It increases, and there's a risk of hitting an OutOfMemoryError. For example, if the heap size is default, like 512MB, then obviously, I will get an error. So in such cases, I would avoid regex and apply Java Streams to process the string in a more efficient way. Instead of using multiple regex and operations on the same string, I might do character-by-character comparison. That helps reduce memory usage by not creating unnecessary string objects.",
        "shortAnswer": "Yeah, so in that case, I think the main thing is the memory usage, especially because we're using regex, right? In Java, since strings are immutable, any operation creates a new string object in memory. So even if the...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-tell-me-about-angular",
        "prompt": "Tell me about Angular.",
        "answer": "Sure. So I've been working with Angular for almost five-plus years now. Recently, I've been using Angular 16 in my current project at Capital One. There, I'm working on the Bank Tech Data Access Platform, where we are modernizing our internal dashboards using Angular 16. My role specifically focuses on improving the user experience and performance. To do that, I've been using Reactive Forms that allow users to upload and download documents, including uploading multiple documents within a form. I also created a form framework that allows us to generate a reactive form from our base form based on the form type. In my previous project, at Dron, I worked on integrating a frontend Angular 14 application with microservices. So I'm very familiar with handling asynchronous calls, subscribing to observables, and handling promises. I've also used Angular Material UI and am pretty comfortable with that.",
        "shortAnswer": "Sure. So I've been working with Angular for almost five-plus years now. Recently, I've been using Angular 16 in my current project at Capital One. There, I'm working on the Bank Tech Data Access Platform, where we are...",
        "category": "Frontend",
        "tags": [
          "Angular",
          "Microservices"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-if-you-were-to-say-let-s-say-that-you-ve-got-a-new-applicati",
        "prompt": "If you were to say, let's say that you've got a new application, and the requirement is to use Angular, and we need to design the user interface and implement it, and make it so we can debug it and so other teams can participate-make it a cleanly built project. What are your thoughts on doing something like that? How comfortable would you be in that kind of a role?",
        "answer": "So to answer that, I'm pretty comfortable in that role. I've built Angular projects from scratch before, so I'm very familiar with the Angular CLI and using Node.js commands to initialize and run Angular projects. My thought process would be to first design the UI components, then create a simple layout or outlet, and start with something like basic wireframes to define the component structure and logic. Once that's clear, I would begin development on the application. I'd also think about state management early on and how to structure the application to support that. So overall, I feel confident in leading such a project end to end.",
        "shortAnswer": "So to answer that, I'm pretty comfortable in that role. I've built Angular projects from scratch before, so I'm very familiar with the Angular CLI and using Node.js commands to initialize and run Angular projects. My...",
        "category": "System design",
        "tags": [
          "Angular",
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-now-briefly-compare-angular-with-react-which-would-you-prefe",
        "prompt": "Now briefly compare Angular with React. Which would you prefer?",
        "answer": "I prefer Angular, because Angular is a full framework, whereas React is just a library that runs on top of JavaScript. With React, you usually end up writing more code because it doesn't come with a complete toolkit. Angular, on the other hand, offers built-in support for things like routing, HTTP handling, dependency injection, and strict module boundaries. React is more flexible, which is good if you're looking to bring in different tools as you go, like for state management or HTTP API calls, but Angular already includes all of that. Angular also integrates well with tools like NgRx for state management and RxJS for reactive programming. So for me, Angular offers more out of the box and supports a structured development approach, which I prefer.",
        "shortAnswer": "I prefer Angular, because Angular is a full framework, whereas React is just a library that runs on top of JavaScript. With React, you usually end up writing more code because it doesn't come with a complete toolkit....",
        "category": "Frontend",
        "tags": [
          "Angular"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-can-you-just-mention-the-automated-testing-piece-how-do-you-",
        "prompt": "Can you just mention the automated testing piece? How do you automate that testing of an application in Angular?",
        "answer": "So previously, while working at Capital One, I used some automated testing frameworks like Jasmine and Karma for writing unit test cases for Angular components. I also used those tools for testing service layers and pipes. One of the features I liked was being able to spy on mock service calls and verify the methods and whether they were called with the correct parameters. While working at Dron, I also added many test cases for user-facing components that dealt with real-time data. Those components relied heavily on observables and external APIs, so I had to simulate asynchronous calls using tricks to mock those behaviors effectively in test scenarios.",
        "shortAnswer": "So previously, while working at Capital One, I used some automated testing frameworks like Jasmine and Karma for writing unit test cases for Angular components. I also used those tools for testing service layers and p...",
        "category": "Frontend",
        "tags": [
          "Angular",
          "Testing"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-tell-me-how-do-you-approach-a-remote-dev-team-that-doesn-t-h",
        "prompt": "Tell me, how do you approach a remote dev team that doesn't have access to the back end that they need for their UI?",
        "answer": "Yeah, thank you for that. So I think this is actually a pretty common practice. That's why application architecture has been evolving in a way where UI and backend teams can work independently. When I don't have access to a real-time API, I usually ask for some kind of mock data. If it's not available, I go ahead and create mock data myself based on expected data schemas. I then set up mock services that return this data. This allows me to develop the UI while simulating real backend calls. If it's a simple data structure, I might just use a JSON server, but if it's more complex, I'll set up a lightweight Express app in Node.js that behaves like a real backend. That way, I can continue UI development, do testing, and debugging without being blocked by the backend.",
        "shortAnswer": "Yeah, thank you for that. So I think this is actually a pretty common practice. That's why application architecture has been evolving in a way where UI and backend teams can work independently. When I don't have acces...",
        "category": "Frontend",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-tell-me-a-little-more-about-the-flow-of-the-work-you-ve-got-",
        "prompt": "Tell me a little more about the flow of the work. You've got those two devs in India, and you're the one with access to both the client side and the internal side. How does that workflow look to you?",
        "answer": "Okay, so since I have access to both backend and UI, I would act as the point of contact between both teams. I can create API contracts using something like Swagger that document all the endpoints, expected responses, and schemas. I'd put this documentation into Confluence and go over it with the offshore UI team during our meetings. That way, they clearly understand the request/response formats, and we're all working off a single source of truth. For deployment, I'd manage that with both teams by setting up a pipeline and creating a sandbox environment where both the frontend and backend can be tested together before going live.",
        "shortAnswer": "Okay, so since I have access to both backend and UI, I would act as the point of contact between both teams. I can create API contracts using something like Swagger that document all the endpoints, expected responses,...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-walk-me-through-the-flow-of-that-code-where-does-it-live-how",
        "prompt": "Walk me through the flow of that code. Where does it live? How does it get from a developer machine to the client? What's your involvement in that process?",
        "answer": "So the lifecycle of the code would begin with creating a branching strategy. The backend team would develop their part on their own branch, and the UI team would do the same on their side. We'd use feature branches or bug-fix branches tied to specific tickets. Once development and initial testing are done, we'd test the feature by deploying the branches, and if everything looks good, we'd merge them into the main/master branch. I'd review the code myself and have other colleagues do peer reviews as well. We'd follow a two-week sprint cycle, and with that, we'd have continuous integration and continuous delivery (CI/CD). The code would be automatically deployed to our development, staging, or testing environments, and both teams would be able to test their parts in those environments.",
        "shortAnswer": "So the lifecycle of the code would begin with creating a branching strategy. The backend team would develop their part on their own branch, and the UI team would do the same on their side. We'd use feature branches or...",
        "category": "Technical",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-tell-me-more-about-the-transition-into-the-client-s-environm",
        "prompt": "Tell me more about the transition into the client's environment, with the real API, once development and testing are done outside.",
        "answer": "Right, so once testing is done and all approvals are in place, we'd migrate the changes to the client's environment. The transition usually happens in phases. First, we push to lower-level environments and then move to higher-level environments once everything is validated. When everything is ready, we'd create a pull request targeting the client's main environment repository. I would handle this part personally, acting as the single point of contact for both the UI and backend sides. That way, I ensure everything is properly synchronized and aligned before it reaches the client.",
        "shortAnswer": "Right, so once testing is done and all approvals are in place, we'd migrate the changes to the client's environment. The transition usually happens in phases. First, we push to lower-level environments and then move t...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-now-tell-me-how-you-would-move-that-code-from-your-offshore-",
        "prompt": "Now tell me how you would move that code from your offshore team back into the client's source code repository, since they want the actual source-not a Docker image.",
        "answer": "Ah, I see. So in that case, once everything is approved on our side, we would migrate the code into the client's repository. We would need access to their environmental setup, including any security or network constraints. In one of my past projects, we had a similar issue where we didn't have direct internet access to AWS accounts. What we did was copy everything locally, then manually transfer it to the client's machine through an intermediate storage device, like a CD drive or USB, and then push it from there into the client's Git repository. I can adapt based on what tools or processes the client uses for this type of transition.",
        "shortAnswer": "Ah, I see. So in that case, once everything is approved on our side, we would migrate the code into the client's repository. We would need access to their environmental setup, including any security or network constra...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Docker",
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-now-you-re-running-it-in-their-environment-and-of-course-the",
        "prompt": "Now you're running it in their environment, and of course, there's a problem that was not identified in the sandbox environment with the mock server. Because the mock server is not the real API, so it's going to be a given. But now you have a bug in the application, and you're the only one who can see the bug because you're the only one on the inside. What's your thought on a scalable process to communicate that bug to the devs in India?",
        "answer": "Yeah, that makes sense. So in that situation, since I can't always just show them the issue directly, what I would do is first reproduce the bug in the client's environment and take proper notes on how to reproduce it-like the exact steps and the data involved. Then I would try to mimic the real scenario using mock data that's very similar to what's causing the issue. I would also document everything and share it with the team-like steps to reproduce, possible causes, and if possible, a screenshot of the console logs or a snapshot of the network tab in the browser. I'd also check the API response, status code, and try to isolate the part of the UI code that's failing. Then I can hand it off to the team in India so they can take action with all the context.",
        "shortAnswer": "Yeah, that makes sense. So in that situation, since I can't always just show them the issue directly, what I would do is first reproduce the bug in the client's environment and take proper notes on how to reproduce it...",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-now-i-m-going-to-throw-tdd-into-the-mix-does-that-elicit-any",
        "prompt": "Now I'm going to throw TDD into the mix. Does that elicit any other potential approach?",
        "answer": "Yeah, in that case, Test Driven Development (TDD) can really help. What I can do is turn that bug into a test case. So if the bug causes a failure, I can write a unit test that fails under the same conditions. Then I can give that test case to the offshore team, and that will simulate the same scenario they haven't seen yet. This way, they won't just rely on documentation or screenshots. They'll actually have a failing test to work with. That gives them a clear view of what's broken, and once the test passes, we'll know the issue is resolved. So yes, TDD in this kind of asynchronous setup is very useful.",
        "shortAnswer": "Yeah, in that case, Test Driven Development (TDD) can really help. What I can do is turn that bug into a test case. So if the bug causes a failure, I can write a unit test that fails under the same conditions. Then I...",
        "category": "Technical",
        "tags": [
          "Testing"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-so-what-do-you-think-about-that-idea-of-handing-off-a-failin",
        "prompt": "So what do you think about that idea of handing off a failing test instead of just screenshots and docs?",
        "answer": "Yes, that was exactly my thought process. I would first write the test case myself and then turn that bug into a unit test. Once the test case is built and fails correctly, I'd share that with the team so they know exactly what to fix. It's much clearer than just giving them notes or screenshots, and it ensures we're on the same page technically.",
        "shortAnswer": "Yes, that was exactly my thought process. I would first write the test case myself and then turn that bug into a unit test. Once the test case is built and fails correctly, I'd share that with the team so they know ex...",
        "category": "Technical",
        "tags": [
          "Testing"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-how-would-you-approach-a-new-model-where-you-re-the-onsite-l",
        "prompt": "How would you approach a new model where you're the onsite lead and have to coordinate with two offshore developers who won't have direct access to the backend APIs?",
        "answer": "Yeah, so I think the key here is having the UI and backend teams work independently, and that's something I've done before. Even if the offshore developers don't have direct access to the backend, we can still move forward by using mock data. In my previous project, I didn't always have access to live API responses, so I used mock data to simulate backend behavior. I would either request data schemas or define them myself and then build mock services that return this data. I'd set up a mock server, maybe a JSON server for simpler use cases, or an Express server in Node.js for more complex interactions. That way, development, testing, and debugging can continue without blocking the UI team.",
        "shortAnswer": "Yeah, so I think the key here is having the UI and backend teams work independently, and that's something I've done before. Even if the offshore developers don't have direct access to the backend, we can still move fo...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-tell-me-how-you-would-document-and-communicate-api-contract-",
        "prompt": "Tell me how you would document and communicate API contract details with your offshore team.",
        "answer": "Since I'd have access to both the backend and frontend, I would act as the point of contact for both sides. I would create a detailed API contract using something like Swagger, listing out all the endpoints, the request and response formats, and any relevant data schemas. Then I'd document everything in Confluence and review it with the offshore team during our regular syncs. I'd walk them through the contract, explain how each endpoint works, and address any questions they might have. This helps keep everyone aligned and ensures the UI team can work effectively, even without direct access to the backend.",
        "shortAnswer": "Since I'd have access to both the backend and frontend, I would act as the point of contact for both sides. I would create a detailed API contract using something like Swagger, listing out all the endpoints, the reque...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-let-s-say-we-ve-got-a-git-repository-on-our-side-now-you-nee",
        "prompt": "Let's say we've got a Git repository on our side. Now you need that code to be inside the client's network. They most likely have their own Git repository, right? So tell me a little bit about how you see that approach for moving the code.",
        "answer": "Yes. So in that case, once everything is approved from our side, we can create a pipeline or some type of code migration strategy to move the code into their environment. We'd need to understand their environmental details-what tools and platforms they use. For example, in a past project, I didn't have direct internet access to the client's AWS account. What we did was copy everything to a local drive, like a CD drive or USB, and then transfer it to the client's laptop. From there, we could push it to their internal repository. So I'd take a similar approach based on what's allowed in the client's environment.",
        "shortAnswer": "Yes. So in that case, once everything is approved from our side, we can create a pipeline or some type of code migration strategy to move the code into their environment. We'd need to understand their environmental de...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-now-let-s-say-you-ve-run-the-app-in-their-environment-and-yo",
        "prompt": "Now let's say you've run the app in their environment and you discover a bug that wasn't visible in your sandbox mock server. You're the only one who can see the bug. What's your scalable process for communicating that issue to the devs in India?",
        "answer": "So in that scenario, I would reproduce the bug in the client environment and take detailed notes on the steps to reproduce it. I'd try to isolate the issue and then create mock data that mimics the conditions under which the bug occurred. Then I'd write down those steps and share them with the offshore team. I'd also collect supporting materials like screenshots, console logs, or network traces, and look into the status codes or error messages to pinpoint the root cause. If possible, I would explain which API or component is causing the issue so they can fix it effectively, even though they're not inside the network.",
        "shortAnswer": "So in that scenario, I would reproduce the bug in the client environment and take detailed notes on the steps to reproduce it. I'd try to isolate the issue and then create mock data that mimics the conditions under wh...",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-what-do-you-think-about-using-tdd-test-driven-development-as",
        "prompt": "What do you think about using TDD-Test Driven Development-as part of that communication process?",
        "answer": "Yeah, I think that would be really helpful. With TDD, I can create a failing test case that simulates the exact problem. Then I can hand off that test case to the offshore team, and they can use it to replicate the issue and work on a fix. It's better than just sending screenshots or documentation. A failing test gives them a very specific, technical reproduction of the bug. They can then fix the test and confirm the issue is resolved. So I definitely support using TDD in that kind of asynchronous setup.",
        "shortAnswer": "Yeah, I think that would be really helpful. With TDD, I can create a failing test case that simulates the exact problem. Then I can hand off that test case to the offshore team, and they can use it to replicate the is...",
        "category": "Technical",
        "tags": [
          "Testing"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-once-everything-is-tested-and-approved-how-do-you-see-the-co",
        "prompt": "Once everything is tested and approved, how do you see the complete lifecycle of the code ending up in the client's environment?",
        "answer": "So once all the testing is complete and we've received all the necessary approvals, we would migrate the code to the client's environment. Typically, there are several environments involved-like lower-level and higher-level ones. First, we push changes to the lower-level environments for validation, and once that passes, we move it to the higher-level environments. The client would then be able to see and validate the changes. This might involve creating a pull request into their main Git repository, and I can take responsibility for that. I would act as the single point of contact coordinating between the UI and backend to ensure everything goes smoothly.",
        "shortAnswer": "So once all the testing is complete and we've received all the necessary approvals, we would migrate the code to the client's environment. Typically, there are several environments involved-like lower-level and higher...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-once-it-s-in-the-client-s-environment-if-there-s-a-bug-how-d",
        "prompt": "Once it's in the client's environment, if there's a bug, how do you deliver that information to the offshore devs in a scalable way?",
        "answer": "For that, I would again start by reproducing the issue in the real environment and gather detailed steps to help the offshore team understand what's going wrong. I'd collect data like API status codes, console logs, or screenshots if needed. Then, I'd try to recreate the issue using mock data that closely resembles the real data, so they can debug it in their sandbox environment. If it's a persistent issue, I'd write a unit test that fails under that specific scenario and give them the test case directly. That helps them isolate the bug without needing direct access to the client's system.",
        "shortAnswer": "For that, I would again start by reproducing the issue in the real environment and gather detailed steps to help the offshore team understand what's going wrong. I'd collect data like API status codes, console logs, o...",
        "category": "Technical",
        "tags": [
          "AWS",
          "System Design",
          "Testing"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Frontend, Debugging, And Distributed Teamwork-so-if-the-deliverable-to-the-client-is-not-a-docker-image-bu",
        "prompt": "So, if the deliverable to the client is not a Docker image, but the actual source code-how would you handle that transition?",
        "answer": "Ah, I see. So if the client requires the source code, not just a built image, then we won't be pushing a Docker container. Instead, we would push the actual source code into their internal Git repository. To do that, I would set up a process where we sync the final, approved code from our repo to theirs. If access to the internal Git is restricted, then I might use an intermediate method, like exporting the source code securely and working with someone inside the network to import it. It's something I've done before in more restricted environments, so I can handle that handoff carefully and make sure it meets all of the client's security requirements.",
        "shortAnswer": "Ah, I see. So if the client requires the source code, not just a built image, then we won't be pushing a Docker container. Instead, we would push the actual source code into their internal Git repository. To do that,...",
        "category": "Platform",
        "tags": [
          "Docker",
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-4",
    "sessionLabel": "Session 4",
    "title": "System Design: Inventory Platform",
    "summary": "Inventory ingestion, reservations, checkout flow, scalability, and resilience.",
    "focusAreas": [
      "System Design",
      "Inventory",
      "Reservation",
      "Scalability"
    ],
    "questions": [
      {
        "id": "System Design: Inventory Platform-design-an-inventory-system-for-an-e-commerce-application-oka",
        "prompt": "Design an inventory system for an E-commerce application, okay, where the inventory system, where the merchants can ingest inventory, and then the E-commerce when the buyers are purchasing, you kind of, you know, right? Since you'll have availability, you'll have reservation of inventory and stuff like that. So I want you to design that inventory system clear.",
        "answer": "Sure, so basically, we have a merchant who can upload their inventory, and then we have a buyer portal where buyers can browse the product and then purchase it. From a product search and browse perspective, I am thinking from the client's or user's point of view. They would want a product catalog where they can search and browse products. They would also want a shopping cart and order processing. Initially, I was thinking about a notification system as well, but since you mentioned keeping it out of scope, I will only focus on the inventory part. So when a buyer browses, purchases, or cancels a product, inventory needs to be updated accordingly. Similarly, on the backend, merchants should be able to ingest inventory. To design this, I'm thinking we need an API Gateway as the entry point of the application. We would have services that help merchants inject inventory data and display it to buyers. For the merchant side, we would have an injection service, and for the customer side, an API Gateway would serve the purpose. Starting with the inventory database, I think of using a relational database because it will give us consistency across the system, making it easier for managing inventory and for querying and indexing purposes. Something like PostgreSQL would be a good choice.",
        "shortAnswer": "Sure, so basically, we have a merchant who can upload their inventory, and then we have a buyer portal where buyers can browse the product and then purchase it. From a product search and browse perspective, I am think...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-how-would-you-store-the-inventory-data-like-what-tables-or-s",
        "prompt": "How would you store the inventory data? Like, what tables or structure would you use?",
        "answer": "For storing inventory data, the core table would be a Product table. The Product table would include fields like an identifier, merchant ID, description, and category. Apart from the Product table, we would also need to store metadata like price and other product-related details, but since we want to keep it simple, I will skip that for now. Then, we would have an Inventory Events table to track what happens to the inventory. The Inventory Events table would store information like created time, event type (for example, purchase, restock, or return), and what kind of change happened that relates to that particular inventory. We might also have a Product Types table so that we can manage the same product but with different types or variations. So, the Product would have a one-to-many relationship with variations, meaning one product can have multiple types, and based on each type, you would have specific data stored.",
        "shortAnswer": "For storing inventory data, the core table would be a Product table. The Product table would include fields like an identifier, merchant ID, description, and category. Apart from the Product table, we would also need...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-can-you-walk-me-through-how-the-actual-inventory-upload-proc",
        "prompt": "Can you walk me through how the actual inventory upload process would work, including ingestion?",
        "answer": "Sure. For the inventory upload process, we would have a streamed way to feed in the data. I am thinking of using something like an Injection Queue. So, merchants would upload their inventory through a portal or an API which would interact with an injection service. This injection service would be integrated with the injection queue and would handle batch uploads to inject the data into the system. The Inventory Service would be an API connected to a Load Balancer, and behind it would be the actual database like PostgreSQL. We would also have a standby replica for the database, deployed across multiple regions to handle disasters. For example, the primary database could be in the West region, and a read replica could be in the East region. We would be writing to the primary instance during inventory updates. On the merchant side, they would interact with endpoints like post inventory to upload inventory. But to keep things simple and focused on inventory touchpoints, we can skip product creation here. The main focus is on how merchants populate inventory into the system for customers to see and buy.",
        "shortAnswer": "Sure. For the inventory upload process, we would have a streamed way to feed in the data. I am thinking of using something like an Injection Queue. So, merchants would upload their inventory through a portal or an API...",
        "category": "Technical",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-how-would-you-handle-customers-browsing-and-buying-products-",
        "prompt": "How would you handle customers browsing and buying products? Like what services would you have for that?",
        "answer": "For customers, we would have a client application that interacts with the system through an API Gateway. Different services would maintain inventory information. For retrieving inventory details, there would be a Queue Service responsible for fetching data from the Inventory Table. A Load Balancer would distribute the traffic among the services. To improve the performance, especially for reads, we would incorporate a caching layer. The cache would make sure that product information could be retrieved faster, especially for read-heavy operations. There would be a separation between the client-side and the merchant-side. The client-side would deal with browsing and adding products to the shopping cart, while the merchant side would handle managing the inventory. The caching would help ensure quick responses, and the main database would still be the source of truth. This design would cover the basic inventory browsing and retrieving functionality without involving the whole e-commerce flow, just focusing purely on inventory.",
        "shortAnswer": "For customers, we would have a client application that interacts with the system through an API Gateway. Different services would maintain inventory information. For retrieving inventory details, there would be a Queu...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-when-somebody-is-purchasing-a-product-how-do-you-make-sure-y",
        "prompt": "When somebody is purchasing a product, how do you make sure you are guaranteeing the item for the buyer? Like, how do you handle reservation?",
        "answer": "Whenever a lot of users are browsing and trying to buy the same product, we need to make sure there is enough product inventory available in the database. For this particular piece, we would incorporate a Reservation Table. The Reservation Table would store data like the reservation ID, user ID, product ID, variant ID, and the quantity. These details would help in holding the inventory for a particular user temporarily. So, whenever a user completes their order, we would decrease the actual product quantity by taking into account the reservation. To calculate the available inventory, we would subtract the reserved quantity from the variant quantity. This calculation would ideally be done on a high-speed caching layer, to make the available inventory checks quick and reliable. So, in short, the inventory would be managed through a reservation system which ensures that once an item is reserved, it cannot be bought by someone else until the reservation expires or the transaction is completed.",
        "shortAnswer": "Whenever a lot of users are browsing and trying to buy the same product, we need to make sure there is enough product inventory available in the database. For this particular piece, we would incorporate a Reservation...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-how-would-you-handle-a-hot-selling-item-where-multiple-peopl",
        "prompt": "How would you handle a hot-selling item where multiple people are trying to buy limited stock?",
        "answer": "When there is a hot-selling item like a Nintendo Switch or an Xbox, and there is limited availability, concurrency becomes an issue because many buyers are trying to buy the same product. To handle this, we would rely on the inventory reservation system. We would perform a real-time available quantity check during the checkout process. The system would check if there is enough stock by querying the cache and the database. If the stock is greater than zero, the item would be reserved immediately in the Reservation Table. Until the payment is finalized, the stock would remain reserved. If the payment succeeds, we would decrease the actual inventory count. In case the payment fails, we would release the reserved stock back to the inventory, making it available for others. This acts like a locking mechanism to prevent overselling of items when there is high demand.",
        "shortAnswer": "When there is a hot-selling item like a Nintendo Switch or an Xbox, and there is limited availability, concurrency becomes an issue because many buyers are trying to buy the same product. To handle this, we would rely...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-can-you-walk-me-through-a-user-flow-where-someone-browses-pr",
        "prompt": "Can you walk me through a user flow where someone browses products, adds to cart, and checks out?",
        "answer": "Sure. So, when a user starts the process to buy an item, the user first browses the products. To get the product details, they would call a Products API. We can filter products by a category flag like games or electronics, so the users can find relevant products easily. For searching, we would have a Search Service. The Inventory Query Service would be invoked, and it would check the real-time stock by doing a stock calculation and then return the search results. This would be the searching phase. Once the user finds the product they want, they add it to their shopping cart. There would be a Cart Service behind a Load Balancer. The cart service would handle a POST API to add the item to the cart, storing how much quantity and what product the user wants. It would reserve the item immediately by updating the Reservation Table. Once the items are in the cart, the user would move to the checkout phase. During checkout, we would have a Checkout Service. The user would POST a checkout call, and the system would validate the cart against the reservation. Then it would reduce the inventory quantity and proceed with payment and shipping handling (though shipping handling is not our focus right now). This is the overall workflow from browsing to checkout.",
        "shortAnswer": "Sure. So, when a user starts the process to buy an item, the user first browses the products. To get the product details, they would call a Products API. We can filter products by a category flag like games or electro...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-can-you-summarize-the-services-involved-in-the-whole-flow",
        "prompt": "Can you summarize the services involved in the whole flow?",
        "answer": "Sure. We would have an Inventory Queue Service for querying data, a Core Service for the main inventory logic, and a Checkout Service for handling order finalization. Each of these services would be behind their own load balancers to make sure they are resilient. On the merchant side, we would have an injection layer to handle inventory uploads. On the buyer side, we would have the client app interacting with the API Gateway. Services like inventory query, cart, and checkout would coordinate to complete the buying process. Each service would focus only on its specific role to keep the system clean and scalable.",
        "shortAnswer": "Sure. We would have an Inventory Queue Service for querying data, a Core Service for the main inventory logic, and a Checkout Service for handling order finalization. Each of these services would be behind their own l...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Inventory Platform-think-of-it-more-from-a-reservation-perspective-like-if-ther",
        "prompt": "Think of it more from a reservation perspective, like if there's a hot-selling item with limited availability and several people trying to purchase it, how do you handle that?",
        "answer": "When you have high-selling products with limited availability and many people trying to buy them, it becomes a concurrency problem. We have a limited stock of a product, but multiple buyers want it at the same time. To handle this, we would rely on the Inventory Reservation system. When a buyer tries to purchase, the system would perform a real-time available inventory check. If there is enough stock, the system would reserve the quantity in the Reservation Table. Until the payment is finalized, the reserved quantity would not be available for others. This acts as a kind of locking mechanism for the particular item. So even when many users are trying to buy at the same time, the stock gets locked as soon as a reservation is made, preventing overselling.",
        "shortAnswer": "When you have high-selling products with limited availability and many people trying to buy them, it becomes a concurrency problem. We have a limited stock of a product, but multiple buyers want it at the same time. T...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-how-does-the-real-time-inventory-check-work-during-checkout",
        "prompt": "How does the real-time inventory check work during checkout?",
        "answer": "The way the real-time inventory check works is when the user requests a checkout, the system first checks the cache and then the database to see the available stock. If the stock is greater than zero, the system will reserve it and proceed to payment. If the payment is successful, the inventory count is decreased. In case of a failure during payment, the system will release the reserved stock back into the inventory. This method helps ensure that high-concurrency items like a Nintendo Switch or an Xbox do not get oversold and users have a smooth purchasing experience.",
        "shortAnswer": "The way the real-time inventory check works is when the user requests a checkout, the system first checks the cache and then the database to see the available stock. If the stock is greater than zero, the system will...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Inventory Platform-is-there-anything-more-you-would-like-to-add-in-terms-of-tec",
        "prompt": "Is there anything more you would like to add in terms of technical details or system design?",
        "answer": "Yes. From a technical standpoint, we would have auto-scaling enabled. Depending on the flow, memory usage, and network traffic patterns, the services would auto-scale. For example, if the CPU or memory increases beyond a certain threshold, the services would automatically scale up. We would also deploy everything across multiple regions to minimize latency and to handle failover properly. Like, we would have one region in the East and one in the West. There would be Geo Routing on the Load Balancers to route traffic based on the user's location. The database would also be deployed across multiple regions, with a primary in one region and read replicas in others. On the API Gateway, we would incorporate patterns like Circuit Breaker, Rate Limiting, and Retries with Exponential Backoff. All applications would be Docker containerized and deployed on AWS ECS. These services would be stateless. Overall, this setup would make the system resilient, scalable, and highly available.",
        "shortAnswer": "Yes. From a technical standpoint, we would have auto-scaling enabled. Depending on the flow, memory usage, and network traffic patterns, the services would auto-scale. For example, if the CPU or memory increases beyon...",
        "category": "System design",
        "tags": [
          "AWS",
          "Microservices",
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Inventory Platform-would-you-like-to-share-a-high-level-overview-of-the-technol",
        "prompt": "Would you like to share a high-level overview of the technologies and practices you would use for deployment?",
        "answer": "Sure. For deployment, all the services would be Docker containerized. We would use AWS ECS for container orchestration. The databases would have primary and read replica configurations across different regions. On the API Gateway, we would use Rate Limiting to protect our backend services and a Circuit Breaker pattern to prevent cascading failures. For retries, especially for reservation-related actions, we would implement three retries with exponential backoff. All of this would help make the system robust against high traffic and failures. This would be the overall technical high-level overview for the inventory management system.",
        "shortAnswer": "Sure. For deployment, all the services would be Docker containerized. We would use AWS ECS for container orchestration. The databases would have primary and read replica configurations across different regions. On the...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Microservices",
          "Databases",
          "Docker"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Inventory Platform-do-you-have-any-questions-for-me",
        "prompt": "Do you have any questions for me?",
        "answer": "Yes, first of all, I would like to thank you so much for your time. I would like to know a little bit more about how much of the similar design activities go on during the regular activities for people at PayPal. Since PayPal is an E-commerce application related to payments, I was wondering how much of the work is related to system design like what we just discussed.",
        "shortAnswer": "Yes, first of all, I would like to thank you so much for your time. I would like to know a little bit more about how much of the similar design activities go on during the regular activities for people at PayPal. Sinc...",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-5",
    "sessionLabel": "Session 5",
    "title": "Ownership, AWS, Docker, And Design Principles",
    "summary": "Project ownership, missed commitments, Docker, Kubernetes, SOLID, and databases.",
    "focusAreas": [
      "Ownership",
      "AWS",
      "Docker",
      "SOLID"
    ],
    "questions": [
      {
        "id": "Ownership, AWS, Docker, And Design Principles-can-you-tell-us-about-a-recent-project-you-were-part-of-what",
        "prompt": "Can you tell us about a recent project you were part of? What parts of that project did you own, and then what value did that project raise the business?",
        "answer": "So recently, I worked on a project that was focused on fulfilling an enterprise-wide tech backlog. It didn't directly support external business teams, but it provided important value to our internal auditing team. Sometimes, we have processes that interact with PR data and payment systems, and we act as the orchestration layer that manages the routing of those requests. The auditing team needed a way to aggregate all processing information and stream logs to a central location-specifically into Snowflake tables. Previously, our team had integrated the required SDK into multiple services to send logs forward, but this resulted in a lot of duplicated logic and different configurations across services. So, I proposed and led the development of a new solution. We created a centralized API that could be deployed as a standalone microservice. Instead of integrating the SDK into each service, all services could now make a simple API call to this centralized logging service. This significantly reduced the time and effort needed for onboarding and log streaming across microservices. This solution helped our team and partner teams onboard quickly. For example, the onboarding steps that previously took several days were reduced to just a few hours. I was the owner of both the design and implementation of this new API-based microservice.",
        "shortAnswer": "So recently, I worked on a project that was focused on fulfilling an enterprise-wide tech backlog. It didn't directly support external business teams, but it provided important value to our internal auditing team. Som...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-okay-and-you-said-you-were-part-of-the-process-you-were-the-",
        "prompt": "Okay, and you said you were part of the process-you were the actual owner of the design?",
        "answer": "Yes, the design was mine for that one. I was responsible for the design documentation, getting it approved, and also for the implementation of the service.",
        "shortAnswer": "Yes, the design was mine for that one. I was responsible for the design documentation, getting it approved, and also for the implementation of the service.",
        "category": "System design",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-can-you-tell-us-about-a-time-when-you-were-not-able-to-meet-",
        "prompt": "Can you tell us about a time when you were not able to meet a work commitment? What did you learn, and what steps do you take today to ensure you meet your commitments?",
        "answer": "There was a time when I wasn't able to meet a deadline. I was working on a new listener that was supposed to process events from an SQS queue and persist them into our database layer. At first glance, the task seemed straightforward-listen to a message, process it, and store it. But during development, we found that the persistence model was very complex. It involved deeply embedded relationships, required multiple external API calls, and had fields that existed in different data formats. Some fields were necessary for persistence, and others weren't. This complexity wasn't evident at the start, so the feature ended up being delayed by a couple of sprints. Even though I didn't meet the deadline, it became a great learning opportunity. Our team was transitioning to a newer platform for data retrieval and aggregation, so I created a checklist and some internal documentation to help us avoid similar issues in the future. Now, before we even begin implementation, we ensure we have a clear understanding of the model, data relationships, and external dependencies.",
        "shortAnswer": "There was a time when I wasn't able to meet a deadline. I was working on a new listener that was supposed to process events from an SQS queue and persist them into our database layer. At first glance, the task seemed...",
        "category": "Behavioral",
        "tags": [
          "Databases",
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-one-of-the-things-you-do-today-to-ensure-you-re-meeting-comm",
        "prompt": "One of the things you do today to ensure you're meeting commitments-you said you created some type of checklist?",
        "answer": "Yes. I created documentation for our internal team to follow whenever we deal with similar workflows. It includes details on the data model, external relationships, and API calls involved. It acts as a pre-development checklist, so teammates know what needs to be validated and what should be completed before development starts.",
        "shortAnswer": "Yes. I created documentation for our internal team to follow whenever we deal with similar workflows. It includes details on the data model, external relationships, and API calls involved. It acts as a pre-development...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-can-you-tell-me-a-little-bit-about-like-when-you-re-designin",
        "prompt": "Can you tell me a little bit about, like, when you're designing a scalable and fault-tolerant solution in AWS, what considerations do you take into account?",
        "answer": "When designing a fault-tolerant and scalable solution in AWS, there are several key things I take into account. First, I focus on auto-scaling. I make sure the application is set up to automatically scale based on demand. For example, we use ECS clusters or EC2 Auto Scaling Groups. That way, during peak traffic or with an increasing number of users, the system can spin up additional instances to handle the load. These auto-scaled instances sit behind a load balancer, which ensures traffic gets routed to healthy instances only. Second is load balancing. I make sure we distribute incoming traffic across multiple instances to avoid overloading any single one. This improves both performance and reliability. Then, for resilience and orchestration, we often go with serverless solutions like AWS Fargate or Lambda, which helps with managing stateless services. These services don't require managing the underlying infrastructure or maintaining sessions. I also consider multi-region deployments with multiple Availability Zones. We use Route 53 for failover routing, and ensure our data layer is set up with primary and read replicas in different regions. For resilience patterns, we use techniques like circuit breakers and bulkheads. Monitoring is another important piece-we use CloudWatch Alarms to track the health of instances. If something goes down, we get alerts and can act right away to troubleshoot.",
        "shortAnswer": "When designing a fault-tolerant and scalable solution in AWS, there are several key things I take into account. First, I focus on auto-scaling. I make sure the application is set up to automatically scale based on dem...",
        "category": "System design",
        "tags": [
          "AWS",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-do-you-know-what-the-difference-is-between-containerization-",
        "prompt": "Do you know what the difference is between containerization and virtualization?",
        "answer": "Yes. So, virtualization uses virtual machines that simulate entire physical hardware. You can run multiple VMs on a single physical machine, each with its own operating system, libraries, and dependencies. Each VM is isolated and runs independently. Containerization, on the other hand, uses the host machine's operating system. Containers run as isolated processes, which makes them lightweight and faster to start. Containers include just the application code and dependencies, but not a full OS like in a VM. That's the main difference between the two-containers share the OS kernel, while VMs emulate the full OS stack.",
        "shortAnswer": "Yes. So, virtualization uses virtual machines that simulate entire physical hardware. You can run multiple VMs on a single physical machine, each with its own operating system, libraries, and dependencies. Each VM is...",
        "category": "Technical",
        "tags": [
          "Docker"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-tell-me-a-little-bit-about-your-experience-with-building-on-",
        "prompt": "Tell me a little bit about your experience with building on containers in AWS.",
        "answer": "All of our microservices are containerized. We use Dockerfiles to define the steps needed to build and run our applications. We build the Docker images and push them to Artifactory, and then we deploy those images using AWS ECS or Fargate. During deployment, the system pulls the Docker image and runs it in the container environment. I've been directly involved in writing Dockerfiles and maintaining the process end to end-from building the image to deploying it on AWS.",
        "shortAnswer": "All of our microservices are containerized. We use Dockerfiles to define the steps needed to build and run our applications. We build the Docker images and push them to Artifactory, and then we deploy those images usi...",
        "category": "Frontend",
        "tags": [
          "AWS",
          "Microservices",
          "Docker"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-what-did-you-use-for-doing-the-deployments",
        "prompt": "What did you use for doing the deployments?",
        "answer": "For deployments, we primarily use AWS CloudFormation templates as the backbone of our infrastructure provisioning. We also have Jenkins pipelines set up to handle the CI/CD flow. Once code changes go through the pipeline, it progresses through different deployment stages. We have stages for pre-deployment checks, then the Docker image gets built using the Dockerfile, and finally, the deployment happens using the CloudFormation template. Jenkins acts as the orchestrator, triggering these stages and pushing the application into the desired AWS environment.",
        "shortAnswer": "For deployments, we primarily use AWS CloudFormation templates as the backbone of our infrastructure provisioning. We also have Jenkins pipelines set up to handle the CI/CD flow. Once code changes go through the pipel...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Docker"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-do-you-have-any-experience-using-terraform-at-all-writing-te",
        "prompt": "Do you have any experience using Terraform at all-writing Terraform for your infrastructure as code?",
        "answer": "Mostly, we've used CloudFormation, but I have seen and worked with Terraform scripts before. I haven't written large Terraform modules from scratch, but I've made minor changes to existing ones. I understand the concepts and know that Terraform and CloudFormation serve similar purposes-they both define infrastructure as code, but Terraform uses HCL and is more platform-agnostic, whereas CloudFormation is AWS-specific. So yes, I've had some exposure to Terraform, but I wouldn't say I have deep hands-on experience yet.",
        "shortAnswer": "Mostly, we've used CloudFormation, but I have seen and worked with Terraform scripts before. I haven't written large Terraform modules from scratch, but I've made minor changes to existing ones. I understand the conce...",
        "category": "Platform",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-speaking-about-docker-can-you-describe-how-you-write-the-doc",
        "prompt": "Speaking about Docker, can you describe how you write the Dockerfile? What are the steps?",
        "answer": "Sure. When writing a Dockerfile, the first step is to choose the right base image. After that, I define the working directory inside the container. Then I install dependencies, copy required files, and build the application. For example, I may copy over package files, install Node modules or Maven dependencies, and then build the code. After that, I use the EXPOSE instruction to expose the needed port, and then define the command to start the application, usually with CMD or ENTRYPOINT. It's a straightforward, layered process: base image, setup working directory, install dependencies, copy code, build, expose ports, and define the run command.",
        "shortAnswer": "Sure. When writing a Dockerfile, the first step is to choose the right base image. After that, I define the working directory inside the container. Then I install dependencies, copy required files, and build the appli...",
        "category": "Platform",
        "tags": [
          "Docker"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-so-this-dockerfile-to-create-the-dockerfile-what-about-optim",
        "prompt": "So, this Dockerfile-to create the Dockerfile-what about optimizing the Dockerfile image?",
        "answer": "To optimize a Dockerfile image, I try to keep it as lightweight as possible. One way is by reducing the number of layers, for example, by combining multiple RUN commands into a single line using &&. Also, I use slim or Alpine-based images instead of full versions, which helps reduce the image size. Another optimization is to clean up temporary files or cache during the image build process so nothing unnecessary remains inside the final image. We also try to keep the number of dependencies minimal, and only install what's absolutely needed. For multi-container applications, we sometimes use Docker Compose, which helps manage everything efficiently.",
        "shortAnswer": "To optimize a Dockerfile image, I try to keep it as lightweight as possible. One way is by reducing the number of layers, for example, by combining multiple RUN commands into a single line using &&. Also, I use slim o...",
        "category": "Platform",
        "tags": [
          "Docker"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-what-about-the-security-though-how-do-we-secure-the-docker-i",
        "prompt": "What about the security, though? How do we secure the Docker image and prevent vulnerabilities?",
        "answer": "For securing Docker images, we perform static scans of the base image to catch any known vulnerabilities. We follow a regular rotation schedule, usually every three months, to update the base images and patch known issues. We also integrate security scanning tools in the build pipeline to catch any vulnerable packages or libraries. That way, before anything goes to production, we know if the image has any risky components. Keeping the base image minimal, regularly updating dependencies, and running automated vulnerability scans are our main steps to keep Docker images secure.",
        "shortAnswer": "For securing Docker images, we perform static scans of the base image to catch any known vulnerabilities. We follow a regular rotation schedule, usually every three months, to update the base images and patch known is...",
        "category": "Platform",
        "tags": [
          "Docker",
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-are-you-familiar-with-kubernetes-what-about-properties-have-",
        "prompt": "Are you familiar with Kubernetes? What about properties? Have you worked with them before?",
        "answer": "Yes, I have used Kubernetes before.",
        "shortAnswer": "Yes, I have used Kubernetes before.",
        "category": "Platform",
        "tags": [
          "Kubernetes"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-how-do-you-deploy-the-docker-image-to-kubernetes-can-you-exp",
        "prompt": "How do you deploy the Docker image to Kubernetes? Can you explain that?",
        "answer": "To deploy a Docker image to Kubernetes, I start by building the image and pushing it to a Docker registry. After that, I create a deployment YAML file that includes the metadata and spec-like the container image name, the port to expose, and the number of replicas. Then I define a service YAML file, which allows us to expose the application internally or externally, depending on the use case. Once those files are ready, I use the kubectl apply command to deploy both the deployment and service files to the cluster. After that, I can check the status of the pods and services to make sure everything is running properly.",
        "shortAnswer": "To deploy a Docker image to Kubernetes, I start by building the image and pushing it to a Docker registry. After that, I create a deployment YAML file that includes the metadata and spec-like the container image name,...",
        "category": "Platform",
        "tags": [
          "Docker",
          "Kubernetes"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-if-your-application-has-configurations-some-of-them-being-se",
        "prompt": "If your application has configurations-some of them being sensitive like passwords or API tokens-when you deploy to Kubernetes, where do you store them? One is config data like settings, the other is sensitive data.",
        "answer": "For configuration data, I use ConfigMaps in Kubernetes. These are used to store environment-specific values like URLs, environment names, or other non-sensitive settings. I create a YAML file for the ConfigMap, and it gets mounted into the application at runtime. For sensitive data like passwords, tokens, or API keys, I use Secrets in Kubernetes. These are encrypted and can also be mounted into the application as environment variables or files. In some cases, we also integrate with external secret management systems like HashiCorp Vault, especially when there's a need for more advanced control. During application bootstrapping, the path to a specific secret gets resolved and injected into the app securely.",
        "shortAnswer": "For configuration data, I use ConfigMaps in Kubernetes. These are used to store environment-specific values like URLs, environment names, or other non-sensitive settings. I create a YAML file for the ConfigMap, and it...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Kubernetes",
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-so-we-have-multiple-environments-where-we-deploy-docker-imag",
        "prompt": "So, we have multiple environments where we deploy Docker images-Dev, UAT, Staging, Production. How do you manage that setup? What's a more efficient way to deploy across environments?",
        "answer": "To manage multiple environments efficiently, we use Helm charts. Each environment has its own namespace, and we pass in environment-specific values using parameterized values files during deployment. This way, we can deploy the same Helm chart across different environments like Dev, UAT, Staging, and Production, but with different configurations for each. The structure stays the same, but the values change based on the environment. Using namespaces keeps each environment isolated, and Helm helps us maintain consistency across deployments.",
        "shortAnswer": "To manage multiple environments efficiently, we use Helm charts. Each environment has its own namespace, and we pass in environment-specific values using parameterized values files during deployment. This way, we can...",
        "category": "Platform",
        "tags": [
          "Docker",
          "Kubernetes"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-can-you-tell-me-about-solid-principles",
        "prompt": "Can you tell me about SOLID principles?",
        "answer": "Okay, so talking about the SOLID principle here - basically, it's a set of five principles for application development. The first is the Single Responsibility Principle, which means a class should have only one reason to change. So, a module or class should only do one thing. Then we have the Open/Closed Principle, where software entities should be open for extension but closed for modification. For example, if you want to add a new discount model, you would create a new implementation without changing the existing logic - you might have a discount interface and different kinds of discounts attached to it. Then there is the Liskov Substitution Principle, which means subtypes must be substitutable for their base types. For example, if you have a printer and a scanner interface, any object that implements that should be able to replace it without breaking the application. Then there's the Dependency Inversion Principle, which means high-level modules should not depend on low-level modules but rather on abstractions. So, we inject dependencies through interfaces. Lastly, the Interface Segregation Principle says that clients should not be forced to depend on interfaces they do not use. Instead of one big interface, we break it into smaller ones. These principles help make the code more maintainable and scalable.",
        "shortAnswer": "Okay, so talking about the SOLID principle here - basically, it's a set of five principles for application development. The first is the Single Responsibility Principle, which means a class should have only one reason...",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-have-you-applied-any-of-the-solid-principles-in-your-code",
        "prompt": "Have you applied any of the SOLID principles in your code?",
        "answer": "Yes, I have applied these principles regularly in my projects. For example, I always follow the Single Responsibility Principle by making sure each class handles only one type of task. I also use the Interface Segregation Principle by creating smaller, focused interfaces, and not forcing classes to implement unused methods. For Dependency Inversion, I inject services using interfaces, not direct class references. That helps keep the code loosely coupled and easier to test. I also follow the Open/Closed Principle, where I create extension points using interfaces or abstract classes. That way, when we add new functionality-like a new type of calculation-we don't have to modify existing code.",
        "shortAnswer": "Yes, I have applied these principles regularly in my projects. For example, I always follow the Single Responsibility Principle by making sure each class handles only one type of task. I also use the Interface Segrega...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-can-you-give-a-specific-example-where-you-applied-one-of-tho",
        "prompt": "Can you give a specific example where you applied one of those principles in your code?",
        "answer": "Yes. In one of our services, we had a WeightCalculator class. It was used to calculate different types of weights-like neutral weight and other calculated values based on it. To handle different logic cleanly, we created a base interface with a calculate() method. Then we had two implementations: one for neutral weight and another for calculated weight. This followed the Single Responsibility and Open/Closed Principles-we could add new types of weight calculations by just implementing the interface without touching existing classes. We also injected these calculators through interfaces, applying Dependency Inversion, and used a hierarchy map to manage which calculator to use based on the request context. It made the code much cleaner and easy to extend.",
        "shortAnswer": "Yes. In one of our services, we had a WeightCalculator class. It was used to calculate different types of weights-like neutral weight and other calculated values based on it. To handle different logic cleanly, we crea...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-what-about-design-patterns-have-you-used-any-design-patterns",
        "prompt": "What about design patterns? Have you used any design patterns in your projects?",
        "answer": "Yes, I've worked with several design patterns. Some that I've used are: Singleton Pattern Factory Pattern Builder Pattern These patterns helped us structure our code in a more reusable and maintainable way, especially when working on larger microservices-based applications.",
        "shortAnswer": "Yes, I've worked with several design patterns. Some that I've used are: Singleton Pattern Factory Pattern Builder Pattern These patterns helped us structure our code in a more reusable and maintainable way, especially...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-i-saw-in-your-resume-that-in-one-of-your-projects-you-mentio",
        "prompt": "I saw in your resume that in one of your projects, you mentioned using indexes on MySQL to make the service provider ecosystem SELECT queries 75% more efficient. Can you explain how you used indexes and what you meant by that?",
        "answer": "Sure. Indexes in MySQL are used to improve query performance. In one of our projects, we had some complex queries that used WHERE clauses, JOINs, and multiple filters. Some queries were running slowly because they required full table scans. I used query analysis tools and EXPLAIN plans to identify the performance bottlenecks. After reviewing the results, I created indexes on specific columns that were frequently used in filtering and joins. This helped reduce query time significantly-by about 75% in some cases-because MySQL could use the indexes instead of scanning the entire table.",
        "shortAnswer": "Sure. Indexes in MySQL are used to improve query performance. In one of our projects, we had some complex queries that used WHERE clauses, JOINs, and multiple filters. Some queries were running slowly because they req...",
        "category": "System design",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Ownership, AWS, Docker, And Design Principles-what-are-the-pros-and-cons-of-using-dynamodb",
        "prompt": "What are the pros and cons of using DynamoDB?",
        "answer": "So, talking about the pros and cons of DynamoDB - it is a non-relational database provided by AWS. It's useful for high performance and high scalability. It's fully managed, serverless, and it can handle millions of requests per second. It also scales horizontally based on needs, and it supports flexible schemas using key-value or document structures. The major advantages are speed, high availability, and partition tolerance. But one of the disadvantages is that it doesn't offer much flexibility in querying. You must use a partition key, and sometimes a sort key, to retrieve the data. If your data is more structured or if it requires strong consistency or complex querying like joins, then DynamoDB may not be the right fit. It's not ideal for relational data with high consistency requirements because everything goes into the value field and not as structured data like in relational databases.",
        "shortAnswer": "So, talking about the pros and cons of DynamoDB - it is a non-relational database provided by AWS. It's useful for high performance and high scalability. It's fully managed, serverless, and it can handle millions of r...",
        "category": "Data",
        "tags": [
          "AWS",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-6",
    "sessionLabel": "Session 6",
    "title": "Leadership, Agile, Growth, And Architecture",
    "summary": "Career growth, leadership, agile practices, debugging, and data-model design.",
    "focusAreas": [
      "Leadership",
      "Agile",
      "Architecture",
      "Debugging"
    ],
    "questions": [
      {
        "id": "Leadership, Agile, Growth, And Architecture-describe-how-you-ve-grown-as-a-software-engineer-over-the-la",
        "prompt": "Describe how you've grown as a software engineer over the last five years.",
        "answer": "Thank you for the question. So, yeah, I definitely love this field, and I have always been passionate about software engineering. When I started, I primarily enjoyed problem-solving and working on feature development. I would get hands-on experience with anything I could, and each task was a learning opportunity. Over time, I moved into different roles and became more enthusiastic about taking on new challenges for myself. One of the significant projects I worked on was at Church Mutual, where I was introduced to a file load process and worked extensively with cloud infrastructure. This gave me a lot of learning opportunities, especially around how big data frameworks like Apache Spark function. That experience really expanded my understanding of what software engineering could be. Also, working with different people helped me get more comfortable with asking questions and collaborating. Recently at USAA, I've started taking on some senior duties, such as leading design discussions and overseeing development. So overall, I feel that I've grown by continuously learning and pushing to become a better version of myself.",
        "shortAnswer": "Thank you for the question. So, yeah, I definitely love this field, and I have always been passionate about software engineering. When I started, I primarily enjoyed problem-solving and working on feature development....",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-did-you-like-and-or-dislike-about-the-development-proce",
        "prompt": "What did you like and/or dislike about the development process at your most recent job?",
        "answer": "Talking about my recent project, the thing I really liked about the development process was working with scalable systems. At USAA, I worked on breaking down a large monolithic application into small, manageable microservices. That transformation was exciting because it made things more manageable for engineers and helped the company overall. I also appreciated the autonomy I had - I was able to explore different tools and technologies, which let me learn about new frameworks and methods. There weren't many things that went wrong, but something I disliked was how rigid some of the processes were. At times, it limited my ability to explore certain things due to communication gaps between departments, especially during cross-functional collaborations. That occasionally slowed down development. However, I tackled those challenges by opening issues and talking with the product team to handle each case individually. We eventually came up with a standard solution and moved forward with that.",
        "shortAnswer": "Talking about my recent project, the thing I really liked about the development process was working with scalable systems. At USAA, I worked on breaking down a large monolithic application into small, manageable micro...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-have-you-had-to-take-on-a-leadership-role-in-a-team-and-what",
        "prompt": "Have you had to take on a leadership role in a team? And what challenges did you face?",
        "answer": "Yeah, I've taken on a few leadership roles. I'm still aiming to grow more into a leadership position because it's a long-term goal for me. One time, I led a team that included GDPs - these are fresh college graduates who are just entering the software engineering field. I saw that as a great opportunity to lead. We worked on a self-service portal that helped with onboarding and routing certain microservices. It was a fairly simple internal application used by other users. In the beginning, one challenge I had was around time management - figuring out how to allocate time and efficiently handle queries. Another challenge was communicating with the team in a way that was clear and didn't create confusion. Over time, I was able to improve this by setting up recurring 30-minute meetings every other day. We used those to discuss progress and blockers. Besides that, I focused on improving our overall communication and making sure everyone was on the same page. These were some of the leadership experiences I had in my previous projects.",
        "shortAnswer": "Yeah, I've taken on a few leadership roles. I'm still aiming to grow more into a leadership position because it's a long-term goal for me. One time, I led a team that included GDPs - these are fresh college graduates...",
        "category": "Behavioral",
        "tags": [
          "Microservices"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-how-do-you-balance-getting-work-done-independently-versus-co",
        "prompt": "How do you balance getting work done independently versus collaborating?",
        "answer": "In my experience, I usually set aside two or three hours a day as focus time to work on individual tasks, especially those that are high priority. During this time, I really try to concentrate on my own work and make progress on things that need my attention. But sometimes, my teammates might be working on something that's even more critical and might need help. So, during our daily huddles and stand-ups, I make a point to ask if there's anything I can assist with or if there's any collaboration session needed. That way, I can support them while still being productive on my end. For example, one time I was working with the Government Shared Services, where we built a solution to batch process application logs for auditing purposes. One of my teammates was falling behind because of some technical difficulties. So, I proposed we set up collaborative meetings to go over it together. At the same time, I made sure to stick to my schedule and keep four hours reserved to focus on my other work items. So that's how I usually balance independent work with collaboration.",
        "shortAnswer": "In my experience, I usually set aside two or three hours a day as focus time to work on individual tasks, especially those that are high priority. During this time, I really try to concentrate on my own work and make...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-did-you-have-to-convince-team-members-of-your-technical-appr",
        "prompt": "Did you have to convince team members of your technical approach?",
        "answer": "Yes, one time I had to convince a few of my team members about a technical solution I proposed. We were working on a trimming engine - it was a library meant to aggregate Snowflake tables. The requirement was to integrate an SDK provided by our Cyber team for auditing purposes. The initial suggestion was to include the SDK in every individual service, but I thought we could do it better. I proposed creating a standalone service that was generic enough so each system could onboard into it. Based on the onboarding document, logs would be generated as needed. I took charge of the proof of concept and created documentation explaining my design - including how the components would interact and how the services would be structured. I also included a diagram showing how data would flow through the system. I made sure to leave room for feedback and suggestions, so the team could contribute to improving it. Eventually, they were convinced because I had backed up my approach with proper reasoning and clear examples.",
        "shortAnswer": "Yes, one time I had to convince a few of my team members about a technical solution I proposed. We were working on a trimming engine - it was a library meant to aggregate Snowflake tables. The requirement was to integ...",
        "category": "Behavioral",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-walk-me-through-your-debugging-process-when-a-production-iss",
        "prompt": "Walk me through your debugging process when a production issue occurs.",
        "answer": "Debugging is a crucial part of our project, and I've handled several production support tickets. One major issue we had recently was a global CrowdStrike outage. That caused one of the services we relied on to become unresponsive and return a 503 error. This took down our services, and our circuit breakers weren't enough to isolate the problem - everything within our instance got hung up. In that situation, the first thing I did was log into Splunk to review the application logs and see what was happening. I also used our New Relic dashboard, which is part of our observability tools, to track request and response codes and monitor the traffic patterns. Once I had an idea of what might be failing, I recreated the issue in a lower environment by mocking the backend to return 503s. That helped narrow down the root cause. I suspected the issue had to do with thread exhaustion or a heap dump, so I used jstack tools and uploaded the data into VisualVM to inspect the threads and find the bottleneck. So my approach is: check logs, monitor through dashboards, recreate the issue locally or in dev, and inspect system-level data to pinpoint what's breaking.",
        "shortAnswer": "Debugging is a crucial part of our project, and I've handled several production support tickets. One major issue we had recently was a global CrowdStrike outage. That caused one of the services we relied on to become...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-tell-us-about-the-most-interesting-project-you-have-worked-o",
        "prompt": "Tell us about the most interesting project you have worked on, and what your role was on that project.",
        "answer": "Yeah, I've worked on a lot of interesting projects. One that stands out is a GraphQL-based Lambda project on AWS. We had our own orchestration layer for the frontend, and it relied on an AWS Lambda function that acted as the configuration grammar for the frontend application. The frontend was built in Angular, and depending on the widgets, components, and user entitlements, different modules would load. These were all loaded dynamically via the AWS Lambda function, which was written in Node.js and used GraphQL. It was super interesting because, although the Lambda looked simple, it was actually a critical part of the infrastructure. If the Lambda broke for any reason, users wouldn't be able to log in or access any components. This was also my first real exposure to GraphQL and a newer style of microservices, where the Lambda was backed by AWS API Gateway.",
        "shortAnswer": "Yeah, I've worked on a lot of interesting projects. One that stands out is a GraphQL-based Lambda project on AWS. We had our own orchestration layer for the frontend, and it relied on an AWS Lambda function that acted...",
        "category": "Behavioral",
        "tags": [
          "AWS",
          "Angular",
          "Microservices"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-i-m-not-convinced-about-what-was-your-role-on-that-project",
        "prompt": "I'm not convinced about what was your role on that project?",
        "answer": "Oh, yeah. So my role was to add functionalities and integrate new queries and mutations. I worked on defining different types of GraphQL queries to retrieve user-specific internal data based on certain conditions. I was basically the engineer on the team responsible for implementing features and expanding functionality on the Lambda side.",
        "shortAnswer": "Oh, yeah. So my role was to add functionalities and integrate new queries and mutations. I worked on defining different types of GraphQL queries to retrieve user-specific internal data based on certain conditions. I w...",
        "category": "Behavioral",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-tell-us-about-your-experience-and-impression-of-agile-method",
        "prompt": "Tell us about your experience and impression of Agile methodology.",
        "answer": "I've worked in an Agile team, and we followed a two-week sprint cycle. Our team had about five developers, along with a Product Owner and a Scrum Master. I really enjoyed Agile because it's fast-paced and very result-driven. We had small units of work and well-defined user stories that were properly groomed so we could avoid spending too much time gathering extra requirements mid-sprint. I think Agile is a really good way to manage time and make sure everyone knows exactly what they're supposed to be working on. It helps with visibility, accountability, and lets us deliver iteratively, which I think is great for productivity and quality.",
        "shortAnswer": "I've worked in an Agile team, and we followed a two-week sprint cycle. Our team had about five developers, along with a Product Owner and a Scrum Master. I really enjoyed Agile because it's fast-paced and very result-...",
        "category": "Behavioral",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-have-you-had-any-experiences-where-the-agile-process-maybe-b",
        "prompt": "Have you had any experiences where the Agile process maybe broke down or didn't meet the operational needs as well?",
        "answer": "Yeah, so Agile is very structured, but sometimes it can be hard to stick to when you're under a time crunch. There was one time when we were working on a lot of features simultaneously, and the scope kept growing. Because of that, we had to be flexible, but that also meant we had to constantly adapt to changes. Since we worked with cross-functional teams and relied on external APIs, it was sometimes difficult to manage everything. One of the main priorities was very critical, and due to the need for flexibility, there were disruptions in momentum, especially when working closely with other teams. This happened during our first live-stage environment, where the UAT (User Acceptance Testing) team had to test, so we did feel some breakdown in process even though we were technically following Agile.",
        "shortAnswer": "Yeah, so Agile is very structured, but sometimes it can be hard to stick to when you're under a time crunch. There was one time when we were working on a lot of features simultaneously, and the scope kept growing. Bec...",
        "category": "Behavioral",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-how-do-you-keep-up-with-the-latest-trends-in-software-and-do",
        "prompt": "How do you keep up with the latest trends in software? And do you have a go-to resource?",
        "answer": "Yeah, as a developer, it's important to stay up to date. I usually go to platforms like Udemy and follow online blogs. Sometimes, I also participate in conferences and tech meetups when I can. Besides that, I like to try out side projects. For example, right now I'm working on preparing for the AWS Cloud Practitioner certification, where I'm learning about networking, services, and how things have changed over time. I also follow updates in frameworks and check out what's trending in the tech world. So yeah, I like to stay current by reading, learning, and trying things out in my free time.",
        "shortAnswer": "Yeah, as a developer, it's important to stay up to date. I usually go to platforms like Udemy and follow online blogs. Sometimes, I also participate in conferences and tech meetups when I can. Besides that, I like to...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-describe-how-you-ve-used-data-analysis-to-inform-design-deci",
        "prompt": "Describe how you've used data analysis to inform design decisions.",
        "answer": "I did my Master's in Data Analysis, and I really enjoyed that. In recent work, I've used data analysis to guide design decisions by tracking metrics like data structure performance, injection behavior, and user feedback. We also analyzed hotspots - for example, we noticed that some buttons or components were getting more hits than others based on user behavior. We used tools like heat maps and tracking tools to find out which parts of an application were more engaging. Based on that, we were able to scale services independently. One specific example was with the Dynamic Config Server - after analyzing the load data, we decided to update the scaling policy to increase the number of instances running in order to handle increased traffic. So keeping those metrics handy really helped us optimize and make smarter design choices.",
        "shortAnswer": "I did my Master's in Data Analysis, and I really enjoyed that. In recent work, I've used data analysis to guide design decisions by tracking metrics like data structure performance, injection behavior, and user feedba...",
        "category": "System design",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-describe-any-experience-you-have-developing-data-models-and-",
        "prompt": "Describe any experience you have developing data models and/or schema design, and how you might go about understanding an existing data model.",
        "answer": "Yeah, so one of the times I worked on this was during the modernization of the orchestration layer. We had to figure out how to store our routing information in a more optimized way. In the legacy application, we used a single table to hold the data and also relied on contact files that had to be loaded to make the routing happen. For the modernized system, we moved to a database-driven approach. I was involved in designing the data models, and the first thing I did was create a shell model to reflect the existing structure - sort of like a mapping table. It had the route ID and the filter IDs that needed to run, and it tracked which functions to apply. After that, I defined the root table with the URL and domain, then the function tables that contained the logic, and finally the filter table, which defined what function ran under what condition. To understand existing models, I looked into both the current data structure and the business documentation, then I tried to break it down into specific contexts. I focused on normalizing the data and structuring it in a way that was easier to manage and maintain.",
        "shortAnswer": "Yeah, so one of the times I worked on this was during the modernization of the orchestration layer. We had to figure out how to store our routing information in a more optimized way. In the legacy application, we used...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-explain-the-difference-between-a-relational-and-non-relation",
        "prompt": "Explain the difference between a relational and non-relational database, and when would you choose one over the other?",
        "answer": "So, relational databases are schema-based and have strict relationships between tables. You usually have a table that relates to another table, and changing the schema can be complicated due to things like backward compatibility. But the key feature is that relational databases support ACID transactions - Atomicity, Consistency, Isolation, and Durability - which is especially important in financial systems where data consistency is critical. For example, if a payment service takes money from one account and fails to deposit into another, the system needs to roll back properly - that's where ACID compliance helps. On the other hand, non-relational databases are schema-less or more flexible, and you can store key-value pairs, JSON documents, graphs, and so on. They are built for scalability and availability and work better for high-throughput applications where consistency isn't as critical. So, I'd choose relational databases for transactions and critical data integrity, and non-relational for scalable, fast, and flexible applications.",
        "shortAnswer": "So, relational databases are schema-based and have strict relationships between tables. You usually have a table that relates to another table, and changing the schema can be complicated due to things like backward co...",
        "category": "Data",
        "tags": [
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-is-your-preferred-programming-language-and-why",
        "prompt": "What is your preferred programming language and why?",
        "answer": "I would say Java is my preferred programming language. I've had a pretty good experience with Java throughout my software engineering career. I enjoy using it because it's structured, and with the latest versions, it has become even easier to work with. It's also built on object-oriented principles, and frameworks like Spring and Spring Boot make it really smooth to develop web applications and web services. Java has a strong community, so if you run into an issue, chances are someone has already asked that question. It's easy to find answers on platforms like Stack Overflow. So yeah, I'd definitely say Java is my go-to language.",
        "shortAnswer": "I would say Java is my preferred programming language. I've had a pretty good experience with Java throughout my software engineering career. I enjoy using it because it's structured, and with the latest versions, it...",
        "category": "Technical",
        "tags": [
          "Spring Boot"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-when-performing-code-reviews-what-are-you-looking-for-and-ho",
        "prompt": "When performing code reviews, what are you looking for, and how do you communicate your feedback and thoughts to the team? Did you have to take feedback back and forth?",
        "answer": "So whenever I do code reviews, I treat it as a way to have a second set of eyes to make sure we're not pushing anything buggy or something that could break existing code or workflows. The first thing I look for is whether the logic is sound and if it meets the requirements mentioned in the user story. Then I check for readability - making sure variable and method names are clear and meaningful. I also look for security issues and edge cases, like whether data validation and null handling are in place. Another thing is consistency with team patterns, including naming conventions and the overall architecture. When giving feedback, I make sure to be constructive and respectful. I usually say things like, \"Have you considered using this instead?\" or \"What would you think about approaching it this way?\" That way, it's collaborative and not critical. I think feedback should always promote open discussion and continuous improvement.",
        "shortAnswer": "So whenever I do code reviews, I treat it as a way to have a second set of eyes to make sure we're not pushing anything buggy or something that could break existing code or workflows. The first thing I look for is whe...",
        "category": "Behavioral",
        "tags": [
          "System Design",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-are-design-patterns-and-how-have-you-leveraged-them-whe",
        "prompt": "What are design patterns, and how have you leveraged them when developing code?",
        "answer": "Design patterns are predefined, proven ways to solve common programming problems. They offer a structured approach to building solutions. For example, when you're working with databases, you don't want to keep creating new client connections, because that's resource-intensive. So you can use the Singleton pattern to make sure only one instance of the database client is used across the application. If you want to hide object creation, you can use the Factory pattern to manage that via interfaces and implementations. I've worked with patterns like Singleton, Factory, and Decorator - the decorator helps to add behavior dynamically. I've also used the Saga pattern for orchestrating microservices, especially in complex workflows. These patterns really help in writing reusable, scalable, and clean code.",
        "shortAnswer": "Design patterns are predefined, proven ways to solve common programming problems. They offer a structured approach to building solutions. For example, when you're working with databases, you don't want to keep creatin...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-are-some-of-the-most-important-security-considerations-",
        "prompt": "What are some of the most important security considerations when designing and building software applications?",
        "answer": "Security is one of the most important things developers need to keep in mind. One of the common vulnerabilities is SQL injection and cross-site scripting (XSS). So we need to make sure we have proper input validation and avoid things like directly using user input in queries. Using prepared statements or ORMs can help prevent that. Another key thing is making sure users are both authenticated and authorized - that's where role-based access control (RBAC) comes in. We also need to use HTTPS protocols with proper certificates and handshakes to secure communication. And then there's error handling - we should never expose stack traces or sensitive information in error messages. Tools like API gateways and rate limiters also help secure APIs. These are just some of the essential things I focus on when building secure software.",
        "shortAnswer": "Security is one of the most important things developers need to keep in mind. One of the common vulnerabilities is SQL injection and cross-site scripting (XSS). So we need to make sure we have proper input validation...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design",
          "Databases",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-you-mentioned-using-a-number-of-sdks-or-integrating-with-oth",
        "prompt": "You mentioned using a number of SDKs or integrating with other software products, and obviously those can bring their own security concerns with them. How do you deal with that, or ensure that there's minimal risk?",
        "answer": "Yeah, so whenever we integrate with SDKs or external frameworks, we make sure they come from a trusted source. Usually, companies maintain an internal Artifactory where these dependencies are stored securely. We also use tools like WhiteSource or Fortify to scan the dependencies. These are static analysis tools that scan our dependency trees for any known vulnerabilities. If any are found, we simply exclude those dependencies and replace them with ones that are known to be safe. So yeah, whenever we bring in an SDK, we make sure it doesn't bring in any security risks by using these tools and scanning methods. We also onboard our applications into static analysis pipelines to continuously monitor for vulnerabilities.",
        "shortAnswer": "Yeah, so whenever we integrate with SDKs or external frameworks, we make sure they come from a trusted source. Usually, companies maintain an internal Artifactory where these dependencies are stored securely. We also...",
        "category": "Security",
        "tags": [
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-is-test-driven-development-and-why-is-it-important",
        "prompt": "What is test-driven development and why is it important?",
        "answer": "Test-driven development (TDD) is a strategy where you first write the test and then work your way backwards to implement the actual code. So basically, instead of writing your code and then testing it, with TDD you write the failing test case first. Since the implementation doesn't exist yet, the test fails, which is expected. Then you write the minimal amount of code to make that test pass. After that, you add more tests, handle edge cases, and continue refactoring until everything is working as intended. The idea is to build from failure to success, repeating the process. TDD is important because it helps ensure quality early on and allows you to refactor confidently, knowing that your tests will catch regressions. It's a great way to improve code reliability and catch bugs early.",
        "shortAnswer": "Test-driven development (TDD) is a strategy where you first write the test and then work your way backwards to implement the actual code. So basically, instead of writing your code and then testing it, with TDD you wr...",
        "category": "Technical",
        "tags": [
          "Testing"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-can-you-tell-us-about-ci-cd-and-what-is-your-experience",
        "prompt": "What can you tell us about CI/CD and what is your experience with it?",
        "answer": "All of the projects I've worked on have used automated deployment through Jenkins. I've worked with Jenkins for quite a while. The process usually starts when we check in code to a GitHub feature branch, and then it goes through peer review. Even before merging into the develop branch, we can trigger deployments from the feature branch. Our Jenkins pipeline takes that branch and starts by building the code, ensuring there are no compilation errors or failing tests. Once that's done, it runs static scans and vulnerability checks, and if everything passes, it uploads the Docker container to our internal Artifactory. Then it proceeds to the deployment phase, where the image is pulled and containers are launched. All these stages are automated through Jenkins, and I've also been involved in setting up those pipelines using Groovy scripts.",
        "shortAnswer": "All of the projects I've worked on have used automated deployment through Jenkins. I've worked with Jenkins for quite a while. The process usually starts when we check in code to a GitHub feature branch, and then it g...",
        "category": "Platform",
        "tags": [
          "Docker"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-tell-us-what-you-know-about-enterprise-service-bus-architect",
        "prompt": "Tell us what you know about Enterprise Service Bus architecture and what experience you have with it.",
        "answer": "Enterprise Service Bus (ESB) is a pattern used for communication between multiple applications. I would describe it as a loosely coupled and scalable middleware layer that handles messaging, routing, and transformation of data. In one of our applications that involved orchestration, ESB played a key role in managing complex workflows. For example, we used the Saga pattern to manage transactions across microservices, especially when we had to coordinate multiple steps or rollbacks. ESB helped by centralizing workflow control so we could easily manage communication between different services. It also helped us integrate legacy systems with our modern microservices, such as when we handled credit checks and user identity verification at USAA for loan applications.",
        "shortAnswer": "Enterprise Service Bus (ESB) is a pattern used for communication between multiple applications. I would describe it as a loosely coupled and scalable middleware layer that handles messaging, routing, and transformatio...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-technology-did-you-leverage-for-that-communication",
        "prompt": "What technology did you leverage for that communication?",
        "answer": "For that, we used RESTful APIs with HTTP protocol. The communication was done using JSON and sometimes XML based requests and responses, but mostly JSON. That was our main way of exchanging data across services.",
        "shortAnswer": "For that, we used RESTful APIs with HTTP protocol. The communication was done using JSON and sometimes XML based requests and responses, but mostly JSON. That was our main way of exchanging data across services.",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-you-re-considering-refactoring-our-web-apps-from-javascript-",
        "prompt": "You're considering refactoring our web apps from JavaScript to TypeScript. Do you have any thoughts or recommendations on that strategy?",
        "answer": "Yeah, moving from JavaScript to TypeScript is a big step, but a good one. TypeScript is type-safe, and switching to it provides better tooling, improves maintainability, and helps catch errors at compile time, which prevents a lot of bugs from making it into production. My suggestion would be to start small. Don't try to refactor everything at once. Begin by converting smaller utility classes or functions, and then gradually migrate the rest. It's also important to define clear interfaces and types early on and avoid things like too many optional fields. For example, if a user object may or may not have an email or a name, define that explicitly using proper type declarations. Also, you should use linting tools, type checkers, and tools like Prettier in Visual Studio Code to help enforce standards during the migration. Incremental conversion with proper structure is the best way to go.",
        "shortAnswer": "Yeah, moving from JavaScript to TypeScript is a big step, but a good one. TypeScript is type-safe, and switching to it provides better tooling, improves maintainability, and helps catch errors at compile time, which p...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-please-discuss-any-relevant-certifications-that-you-ve-earne",
        "prompt": "Please discuss any relevant certifications that you've earned and why they are important.",
        "answer": "Right now, I'm not a holder of many certifications yet, but I'm currently working on my AWS Cloud Practitioner certification. This certification is helping me learn about different networking concepts and cloud services that can be used across different parts of an application. I think it's important because it helps me understand how to use cloud infrastructure effectively, and it supports the kind of distributed systems I've been working on. Even though I haven't completed it yet, I'm putting in the effort because it adds value to both my knowledge and my career growth.",
        "shortAnswer": "Right now, I'm not a holder of many certifications yet, but I'm currently working on my AWS Cloud Practitioner certification. This certification is helping me learn about different networking concepts and cloud servic...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-impact-will-artificial-intelligence-have-on-software-de",
        "prompt": "What impact will artificial intelligence have on software development over the next few years?",
        "answer": "When I think about artificial intelligence, I see it as a tool that boosts the productivity of software engineers. AI can help with testing, spotting edge cases, and even suggesting test data that makes developers consider different angles when writing code. These tools can learn from models trained on existing code, and while they still lack full context, they're improving quickly. They might not always understand the full implementation logic, but they are heading in the right direction. The best part is that AI helps us test better, think outside the box, and come up with real-world use cases while writing code. Over time, with proper integration, I believe developers will be able to write more robust code faster with the help of AI.",
        "shortAnswer": "When I think about artificial intelligence, I see it as a tool that boosts the productivity of software engineers. AI can help with testing, spotting edge cases, and even suggesting test data that makes developers con...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-you-submitted-a-work-sample-to-us-we-d-like-you-to-share-you",
        "prompt": "You submitted a work sample to us. We'd like you to share your screen and walk us through it like you're demoing it or giving a code review.",
        "answer": "Sure. So what I submitted is a small project where we're basically sorting the alphabets in a given input and displaying the output with the same case as in the original input. I created a method called fromTheTieString, which handles this logic. When the application runs, it takes in a string argument, extracts the characters, and then converts them into integers using character mapping. Then, it filters those characters to ensure they are actual letters, using a filter in Java Streams. After that, I apply a sorted method with a comparator to sort the letters based on their lowercase values, ignoring case during comparison. Then, I collect the sorted result into a list and finally join them to return the final string. I also tested this with some inputs, like \"VirginiaTech,\" and it worked as expected. When we added numbers to the input, it correctly ignored them and only sorted the letters.",
        "shortAnswer": "Sure. So what I submitted is a small project where we're basically sorting the alphabets in a given input and displaying the output with the same case as in the original input. I created a method called fromTheTieStri...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-would-happen-if-that-function-got-passed-a-null-input",
        "prompt": "What would happen if that function got passed a null input?",
        "answer": "If the function gets a null input, it would currently throw a NullPointerException, because I haven't added any specific validation for that case in the existing version. It was meant more as a structured example than a fully packaged utility, so it doesn't handle nulls at the moment.",
        "shortAnswer": "If the function gets a null input, it would currently throw a NullPointerException, because I haven't added any specific validation for that case in the existing version. It was meant more as a structured example than...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-if-you-were-writing-this-as-a-package-that-anyone-could-call",
        "prompt": "If you were writing this as a package that anyone could call, what sorts of things would you potentially add?",
        "answer": "First, I would definitely check the input string and make sure it's not null or empty. If it is, I would just return an empty string, or in stricter cases, throw an IllegalArgumentException to signal that the input is invalid. That would be the first thing I'd add.",
        "shortAnswer": "First, I would definitely check the input string and make sure it's not null or empty. If it is, I would just return an empty string, or in stricter cases, throw an IllegalArgumentException to signal that the input is...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-if-this-was-being-delivered-as-a-real-task-on-your-current-p",
        "prompt": "If this was being delivered as a real task on your current project, what more would you do beyond what you've already done?",
        "answer": "I would definitely add more unit test cases using JUnit. I'd test different kinds of inputs to validate behavior and assert the outputs against expected values. I'd also include more logging statements for production readiness - so that if something goes wrong, we have a way to trace what happened. And I'd probably add JavaDocs or method-level comments for better documentation. Those would be my primary additions to make this production-ready.",
        "shortAnswer": "I would definitely add more unit test cases using JUnit. I'd test different kinds of inputs to validate behavior and assert the outputs against expected values. I'd also include more logging statements for production...",
        "category": "Technical",
        "tags": [
          "Testing"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Leadership, Agile, Growth, And Architecture-what-s-something-we-didn-t-ask-about-you-that-you-think-is-i",
        "prompt": "What's something we didn't ask about you that you think is important for us to know?",
        "answer": "That's actually a great question, thank you. I think we covered a lot of the technical and behavioral topics already, but something I'd like to highlight is that I take my code and coding practices very seriously. I love working hard, and I always try to maintain a collaborative mindset within the team. I make sure to get things done and focus on delivering quality code. I also care about building a strong team culture - I like helping others as much as I can and paying attention to detail. I try to encourage everyone on the team to share their ideas and contribute, so we can all bring in our unique and exciting perspectives. ------------------------------------------------------------------------",
        "shortAnswer": "That's actually a great question, thank you. I think we covered a lot of the technical and behavioral topics already, but something I'd like to highlight is that I take my code and coding practices very seriously. I l...",
        "category": "Technical",
        "tags": [
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-7",
    "sessionLabel": "Session 7",
    "title": "Sprint Flow, CI/CD, And Production Challenges",
    "summary": "Story lifecycle, endpoint implementation, deployments, and production problem solving.",
    "focusAreas": [
      "Sprint Process",
      "Spring Boot",
      "CI/CD",
      "Production"
    ],
    "questions": [
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-given-a-sprint-help-me-understand-how-the-typical-process-lo",
        "prompt": "Given a sprint, help me understand how the typical process looks like. Say for instance the next sprint is going to start from Monday onward. I would like you to help me understand what stories are assigned to you, and then how would you go as part of the development and then the deployment process?",
        "answer": "Right now, we follow a two-week sprint model, and we follow the Agile Scrum methodology. So, basically, when the sprint begins and user stories are assigned to me, the first thing I do is organize those stories based on priority. I identify which story is the highest priority - for example, the RNC one, depending on capacity and availability of the team members - and then someone begins work on that story. The story moves from To Do to In Progress in our workflow. Once the development begins, we keep an eye on the progress and ensure all the descriptions and acceptance criteria in the user story are accurate and complete. After development is completed, the developer is responsible for writing unit tests. Once those are done, the story goes into the code review phase. In our current project, it is required that at least two engineers (apart from the developer) review the code. Once it's reviewed and approved, the Pull Request (PR) is merged into the QA environment, and we move the story to Ready for Test. When the tester becomes available, they pick it up for testing, and after it's successfully tested, the story is marked as Completed. Then we verify whether it's part of a soft launch or a soft release, and we prepare to move the code to production. If it's part of a bigger release, we create a release branch and merge the changes accordingly. We release bi-weekly in most cases, but sometimes, when we work on bigger features, we follow a monthly release cycle depending on stakeholder requirements. Finally, the code is released using our CI/CD pipelines which are already configured from dev to QA to production environments. Once code is implemented, we also complete our PID, attach screenshots, and create test cases with UAT questions if needed.",
        "shortAnswer": "Right now, we follow a two-week sprint model, and we follow the Agile Scrum methodology. So, basically, when the sprint begins and user stories are assigned to me, the first thing I do is organize those stories based...",
        "category": "Platform",
        "tags": [
          "Testing",
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-assume-the-story-is-about-writing-a-new-endpoint-how-would-y",
        "prompt": "Assume the story is about writing a new endpoint. How would you go about it? What type of annotations would you use in your Spring Boot application?",
        "answer": "As a Java backend developer, I use the Spring Boot framework. When I'm writing a new endpoint, the first thing I do is create a Controller class, where I use the @RestController annotation. Then, depending on the type of endpoint, I apply annotations like @RequestMapping, and for specific HTTP methods, I use annotations like @GetMapping, @PostMapping, @PutMapping, or @DeleteMapping. In the Service layer, I use the @Service annotation. Then in the Repository layer, I use the @Repository annotation. And in the Model layer, I define my entity classes with appropriate @Entity, @Table, and field-level annotations like @Column, @Id, etc., depending on the data I'm mapping. This is how I generally go about implementing a new endpoint in a Spring Boot application.",
        "shortAnswer": "As a Java backend developer, I use the Spring Boot framework. When I'm writing a new endpoint, the first thing I do is create a Controller class, where I use the @RestController annotation. Then, depending on the type...",
        "category": "Technical",
        "tags": [
          "Spring Boot"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-how-does-your-ci-cd-pipeline-work-from-a-deployment-perspect",
        "prompt": "How does your CI/CD pipeline work from a deployment perspective, especially since you mentioned AWS?",
        "answer": "After we finish coding, we use Excel templates that are configured for our build process. These templates help us build the code and publish it. After that, we perform code commit operations and post-merge activities, where we fetch the latest code. The application then uses tools like Maven to run unit tests and perform code quality checks. We also generate the artifact during this phase. Once this part is completed, it moves into the Continuous Integration (CI) phase, and then the Continuous Deployment (CD) takes over, which automates the deployment. Our environments are containerized, and we use Kubernetes along with AWS for deployments. We create a Dockerfile, build it, and then push the Docker image. That's the complete CI/CD process we follow.",
        "shortAnswer": "After we finish coding, we use Excel templates that are configured for our build process. These templates help us build the code and publish it. After that, we perform code commit operations and post-merge activities,...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Docker",
          "Kubernetes",
          "Testing"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-how-does-the-docker-image-get-deployed-on-aws-exactly",
        "prompt": "How does the Docker image get deployed on AWS exactly?",
        "answer": "After the Docker image is built, it gets pushed to AWS Elastic Container Registry (ECR). This acts as a repository to store the image. We already have the AWS Command Line Interface (CLI) configured, which we use to authenticate and log in to ECR. We tag the Docker images and then push them to ECR. After pushing the image, we define a Task Definition and create services using ECS (Elastic Container Service). These services then pull the image from ECR and deploy it. So essentially, ECR stores the image, and ECS uses it for deployment. That's how we deploy the application image on AWS.",
        "shortAnswer": "After the Docker image is built, it gets pushed to AWS Elastic Container Registry (ECR). This acts as a repository to store the image. We already have the AWS Command Line Interface (CLI) configured, which we use to a...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Docker"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-do-you-do-provisioning-of-new-ec2-instances-or-does-someone-",
        "prompt": "Do you do provisioning of new EC2 instances, or does someone else handle that?",
        "answer": "We handle it ourselves using Terraform. So, first, we initialize Terraform, then we run the terraform plan to see the changes, and apply the configuration using terraform apply --auto-approve. After that, we access the EC2 instances and deploy our application on them. If we need to remove any of the instances, we use terraform destroy or manually remove them. So yes, we do manage the provisioning of EC2 instances on our own using Infrastructure as Code with Terraform.",
        "shortAnswer": "We handle it ourselves using Terraform. So, first, we initialize Terraform, then we run the terraform plan to see the changes, and apply the configuration using terraform apply --auto-approve. After that, we access th...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-how-many-members-are-there-in-your-development-team",
        "prompt": "How many members are there in your development team?",
        "answer": "In my current team, we have a total of five developers, along with two QA engineers and two product owners. So including everyone, it's a small but balanced team. We have a daily stand-up that usually lasts for 15 minutes, though sometimes it goes up to 20 or 30 minutes depending on the discussions. We use JIRA to manage our tasks, and we work on user stories that are prioritized in the backlog. During the stand-up, we share what we worked on yesterday, what we plan to do today, and discuss any blockers. After the stand-up, we have a sprint review call to provide a demo of the completed work, and in the retrospective, we talk about what went well, what could be improved, and come up with action items to improve the process. We also have a sprint planning session before the new sprint starts, where we populate the sprint board with user stories based on team capacity. This is how we manage our Agile development process.",
        "shortAnswer": "In my current team, we have a total of five developers, along with two QA engineers and two product owners. So including everyone, it's a small but balanced team. We have a daily stand-up that usually lasts for 15 min...",
        "category": "Behavioral",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-you-mentioned-technical-challenges-could-you-describe-one-th",
        "prompt": "You mentioned technical challenges. Could you describe one that you faced recently?",
        "answer": "Yes, as a developer, we do face technical challenges. One of the recent issues I encountered was related to memory usage. We were working with a lot of Kafka topics, and we noticed a memory issue in our application. We analyzed the problem using Eclipse Memory Analyzer Tool and other tools to check memory usage. We found that we were using strong references in some places, especially when caching objects, which were not getting garbage collected. So we decided to use weak references instead and made sure to explicitly close connections, so that the connection pool would be cleaned up and the garbage collection could happen properly. There was also an issue recently where the code we pushed to production was pointing to the wrong application properties file, which caused problems. We're not sure how it got overridden, but we had to raise a production bug and fix it. Also, in Docker and Kubernetes deployments, we've sometimes seen issues like memory leaks or database connection problems inside containers. These kinds of problems happen occasionally, but we try to identify and fix them as early as possible.",
        "shortAnswer": "Yes, as a developer, we do face technical challenges. One of the recent issues I encountered was related to memory usage. We were working with a lot of Kafka topics, and we noticed a memory issue in our application. W...",
        "category": "Technical",
        "tags": [
          "Databases",
          "Docker",
          "Kubernetes",
          "Kafka"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-speaking-about-the-first-issue-you-mentioned-can-you-explain",
        "prompt": "Speaking about the first issue you mentioned, can you explain what exactly happened?",
        "answer": "Yes, sure. So we were dealing with a large number of documents and a high volume of REST API calls. We observed that our application was consuming more memory than expected and eventually started crashing due to Java heap space issues. Initially, the service would start fine, but over time, memory usage kept increasing and the Garbage Collector couldn't reclaim enough space, leading to heap dumps. We used the Memory Analyzer Tool to analyze the heap and found that a large number of objects were not being collected. Specifically, we discovered that a static map was storing session data and API responses, and it was never getting cleared. This caused the memory to grow uncontrollably. To fix this, we replaced the static map with a WeakHashMap so that old entries would expire automatically. We also added a mechanism to limit the cache size to avoid excessive memory use. In another case, we had an issue with JDBC connections being left open, so we made sure to use try-with-resources to auto-close connections. These changes helped us reduce the memory consumption and prevent the crashes from happening again.",
        "shortAnswer": "Yes, sure. So we were dealing with a large number of documents and a high volume of REST API calls. We observed that our application was consuming more memory than expected and eventually started crashing due to Java...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-what-do-you-do-when-your-team-has-different-technical-opinio",
        "prompt": "What do you do when your team has different technical opinions?",
        "answer": "We do have moments where team members have different technical opinions, especially since we have five developers. When that happens, we first try to document all the suggested solutions and compare their pros and cons. Then, if a senior engineer or someone with more domain knowledge proposes an approach, we try to understand why that approach is being recommended and whether it fits the problem we're solving. If the issue is smaller or very specific, we might try out the proposed solution directly. But if we're looking for a more scalable or long-term solution, we usually have a team discussion to evaluate all the possibilities. The most important criteria we consider are: • Whether the solution addresses the bigger picture or just a short-term fix. • Whether it impacts performance, which is always critical. • Whether it maintains data security, since we often deal with sensitive personal information in documents. We try to listen to all ideas and make sure the chosen approach aligns with our security and performance standards before finalizing it.",
        "shortAnswer": "We do have moments where team members have different technical opinions, especially since we have five developers. When that happens, we first try to document all the suggested solutions and compare their pros and con...",
        "category": "Behavioral",
        "tags": [
          "System Design",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-what-makes-you-interested-in-citi-why-are-you-applying-for-t",
        "prompt": "What makes you interested in Citi? Why are you applying for this particular position?",
        "answer": "To be honest, if you look at my profile, I have previously worked at Citi before. I really liked the work-life balance at Citi, and that's one of the main reasons I want to join again. Also, my second project is about to be completed, so I've started looking for new opportunities and applying for interviews. Another reason is that I live just 15 minutes away from the Citi office, so I can even commute there easily. That makes it even more convenient for me. So yes, those are the reasons why I'm interested in this position and excited to work with Citi again.",
        "shortAnswer": "To be honest, if you look at my profile, I have previously worked at Citi before. I really liked the work-life balance at Citi, and that's one of the main reasons I want to join again. Also, my second project is about...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Sprint Flow, CI/CD, And Production Challenges-you-mentioned-you-worked-at-citi-before-when-was-that-and-wh",
        "prompt": "You mentioned you worked at Citi before - when was that and what was the name of the project?",
        "answer": "Yes, that was around 2021, about four or five years back. The project I was working on was called Platform Security Gateway. It was under the Customer Code for the Management System, and we were mainly working on session coexistence. Though I didn't work there for a very long period, it was still a great experience. The project was managed by another vendor at the time, before Infosys. That's why I didn't include it in detail on my resume. But yes, I've worked with Citi before and I'm excited to come back.",
        "shortAnswer": "Yes, that was around 2021, about four or five years back. The project I was working on was called Platform Security Gateway. It was under the Customer Code for the Management System, and we were mainly working on sess...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-8",
    "sessionLabel": "Session 8",
    "title": "Microservices, Kubernetes, And API Design",
    "summary": "Project architecture, Kubernetes deployment concepts, bookstore APIs, and scaling.",
    "focusAreas": [
      "Architecture",
      "Kubernetes",
      "REST APIs",
      "Payments"
    ],
    "questions": [
      {
        "id": "Microservices, Kubernetes, And API Design-can-you-explain-what-is-your-current-role-and-about-your-pro",
        "prompt": "Can you explain what is your current role and about your project?",
        "answer": "Sure, definitely. Let me start with a brief introduction. My name is Jonas, and I've been working as a software engineer for about six years now. I've primarily been working on Java-based applications, using frameworks such as Spring and Hibernate, mainly focusing on backend technologies. My work involves developing and designing microservices, and deploying them in the AWS cloud. Currently, I'm in a strictly backend engineering role where I'm responsible for designing microservices, creating different services, gathering both functional and non-functional requirements, and promoting them to higher environments. I've worked on building scalable and stable systems. Some key components I've worked on include the Maintenance API and Experience API, which are used for maintaining user profile preferences and handling entitlements for frontend components like wizards. I'm also involved with microservice orchestration using API Gateway. On a daily basis, my work revolves around writing backend Java code, performing code reviews, and supporting production issues.",
        "shortAnswer": "Sure, definitely. Let me start with a brief introduction. My name is Jonas, and I've been working as a software engineer for about six years now. I've primarily been working on Java-based applications, using framework...",
        "category": "Behavioral",
        "tags": [
          "AWS",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-can-you-explain-the-architecture-of-your-current-project",
        "prompt": "Can you explain the architecture of your current project?",
        "answer": "Yes. The main project is centered around a modernization approach. We're transitioning from a monolithic application to a microservices-based architecture. I've been involved in breaking down various components. One of the most recent components I worked on is the Experience API, which is a general-purpose microservice used by frontend components to retrieve entitlement data. This service determines what UI elements should be visible to users depending on their account permissions. Another service I've worked on is the Maintenance API. This is triggered when a user makes changes to their profile preferences, such as overdraft protection or updating various plans. It's a Spring Boot-based microservice that uses PostgreSQL for its database, and everything is deployed on AWS using Docker containers in ECS. These are REST-based microservices I'm currently focused on.",
        "shortAnswer": "Yes. The main project is centered around a modernization approach. We're transitioning from a monolithic application to a microservices-based architecture. I've been involved in breaking down various components. One o...",
        "category": "System design",
        "tags": [
          "Spring Boot",
          "AWS",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-so-how-about-kubernetes-i-see-on-your-resume-you-have-some-e",
        "prompt": "So how about Kubernetes? I see on your resume you have some experience or knowledge in Kubernetes. Did you use it in your work?",
        "answer": "Yes, I have worked with Kubernetes in my past projects, particularly when I was at KeyBank. While we primarily used AWS ECS for container orchestration, I've also worked with Kubernetes in previous roles. My work involved creating YAML configuration files for Kubernetes deployments, setting properties based on discussions with architects, and defining scaling policies and load balancer configurations. I also worked on writing Helm charts and YAML files for deployment.",
        "shortAnswer": "Yes, I have worked with Kubernetes in my past projects, particularly when I was at KeyBank. While we primarily used AWS ECS for container orchestration, I've also worked with Kubernetes in previous roles. My work invo...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Microservices",
          "Docker",
          "Kubernetes"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-what-are-the-areas-that-you-worked-in-kubernetes-can-you-exp",
        "prompt": "What are the areas that you worked in Kubernetes? Can you explain?",
        "answer": "Yes, on the Kubernetes side, it was mainly used for deployment orchestration. We had Docker containers that needed to be deployed to the cloud, and my main responsibility was creating YAML configuration files for the Kubernetes deployment, also known as deployment descriptors. These files included properties defined through discussions with the architects and based on the scaling metrics and policies. I set configurations for load balancers, and wrote both Helm charts and YAML descriptors for the services. For example, I would define deployment strategies in these YAML files by specifying metadata such as replica count, container templates, port details, and selectors. These configurations would then be applied to the Kubernetes cluster to deploy the applications.",
        "shortAnswer": "Yes, on the Kubernetes side, it was mainly used for deployment orchestration. We had Docker containers that needed to be deployed to the cloud, and my main responsibility was creating YAML configuration files for the...",
        "category": "Platform",
        "tags": [
          "Microservices",
          "Docker",
          "Kubernetes"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-if-i-give-you-a-docker-image-and-ask-you-to-create-a-service",
        "prompt": "If I give you a Docker image and ask you to create a service, what are the things that you will look for before you deploy it?",
        "answer": "So, if I already have a Docker image, the first thing I would do is make sure it's pushed to an artifact repository like the Elastic Container Registry (ECR). Then, I would create the Kubernetes deployment YAML file, which includes the API version, metadata, replica count, the container template, and the service we want to run. This file will also define selectors, ports, and the type of load balancer to be used. After setting this up, I would verify if the Kubernetes cluster is running and available. Once everything looks good, I'd apply the deployment using kubectl apply with the YAML file. Finally, I would run commands like kubectl get pods to check if the application pods are up and running properly.",
        "shortAnswer": "So, if I already have a Docker image, the first thing I would do is make sure it's pushed to an artifact repository like the Elastic Container Registry (ECR). Then, I would create the Kubernetes deployment YAML file,...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Docker",
          "Kubernetes"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-if-i-give-you-a-docker-image-for-an-api-service-and-assume-t",
        "prompt": "If I give you a Docker image for an API service and assume the database and connectivity is already in place, what components do you need to create in Kubernetes to deploy the service and expose the APIs to users?",
        "answer": "If I already have the Docker image for the API service, and the Kubernetes clusters and database are in place, the first component I'd create is the Deployment object which will run the application pods. These pods will host the API service. Then, I would create a Service YAML file to expose the API either for internal or external access. For internal use, I'd configure a ClusterIP, and for external access, a LoadBalancer. This metadata in the service file will define the ports and selectors to expose the pods. After that, I'd set up Ingress rules for managing network access and routing external traffic to the appropriate service using the Ingress Controller. I would also create ConfigMaps for non-sensitive data and Secrets for sensitive values like credentials. Optionally, readiness and liveness probes could be added to ensure the app is running properly and can handle traffic. Lastly, I would handle network policies such as VPNs and subnet rules for proper ingress and egress control.",
        "shortAnswer": "If I already have the Docker image for the API service, and the Kubernetes clusters and database are in place, the first component I'd create is the Deployment object which will run the application pods. These pods wi...",
        "category": "Platform",
        "tags": [
          "AWS",
          "Databases",
          "Docker",
          "Kubernetes"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-do-you-know-what-kind-of-services-you-can-use-in-kubernetes-",
        "prompt": "Do you know what kind of services you can use in Kubernetes or have you worked on any different types of services?",
        "answer": "Yes. Some of the common types of services in Kubernetes that I know include the ClusterIP, which is the default and is used for internal communication within the cluster. There's also the NodePort service, although I haven't worked much with that. These services expose the application in different ways, and depending on the use case - whether it's for internal communication or exposing the app to the internet - you choose the appropriate one.",
        "shortAnswer": "Yes. Some of the common types of services in Kubernetes that I know include the ClusterIP, which is the default and is used for internal communication within the cluster. There's also the NodePort service, although I...",
        "category": "Platform",
        "tags": [
          "Kubernetes"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-you-said-you-worked-on-rest-apis-in-the-backend-right-let-s-",
        "prompt": "You said you worked on REST APIs in the backend, right? Let's discuss a bit on API design. For example, if I ask you to design REST APIs for an online bookstore, what are the entities you would think of first before you deep dive into APIs?",
        "answer": "For an online bookstore, the first entity I would think of is the User entity. This would represent any customer, admin, or employee within the bookstore. Even though it's online, there still needs to be roles like admin or manager to control access. The primary users would be customers, of course. Next is the Book entity, which would store metadata like the title, author, price, and stock quantity. We'd also need a Category entity to classify the books. This would have fields like ID, Name, and Description. Then, we'd have Order-related entities. For example, an Order table to represent the customer's order and an OrderItem table to track the books within that order along with quantity and price. A Cart table could be used for storing temporary selections before checkout. Lastly, a Payment table is necessary to track all the payment details. The Order and Books would likely have a many-to-many relationship, and all these entities together would form the foundation of the system.",
        "shortAnswer": "For an online bookstore, the first entity I would think of is the User entity. This would represent any customer, admin, or employee within the bookstore. Even though it's online, there still needs to be roles like ad...",
        "category": "System design",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-let-s-take-the-books-entity-can-you-give-me-what-kind-of-api",
        "prompt": "Let's take the Books entity. Can you give me what kind of API endpoints you would define for that?",
        "answer": "For the Books entity, we primarily want to interact with books - that includes retrieving, updating, adding, and deleting book information. So the first endpoint I'd define would be a GET /books to retrieve a list of all books. This would be a paginated endpoint with search and filtering options, and it would be open to all users. Next would be GET /books/{id}, which fetches a specific book by its ID. This would also be publicly accessible. Another useful one is GET /books/categories/{id}, which retrieves all books under a specific category. For internal or admin users, there would be a POST /books endpoint to add a new book to the inventory. To update existing book details like title, price, or quantity, I'd use PUT /books/{id}. Finally, we'd have a DELETE /books/{id} endpoint for removing books from inventory. So these would be the core CRUD endpoints for managing books.",
        "shortAnswer": "For the Books entity, we primarily want to interact with books - that includes retrieving, updating, adding, and deleting book information. So the first endpoint I'd define would be a GET /books to retrieve a list of...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-you-mentioned-filtering-as-an-option-how-would-you-implement",
        "prompt": "You mentioned filtering as an option. How would you implement filtering in the APIs?",
        "answer": "Filtering would be implemented using query parameters. For example, anything optional like a search or filter term would go into the query string. You could have something like /books?search=Harry, which would return books with names like Harry Potter. These parameters would be parsed and handled in the service layer, where we apply the actual filtering logic based on the query input. This makes it flexible for users to search or filter results dynamically through the API.",
        "shortAnswer": "Filtering would be implemented using query parameters. For example, anything optional like a search or filter term would go into the query string. You could have something like /books?search=Harry, which would return...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-what-should-the-response-format-look-like-if-i-ask-for-books",
        "prompt": "What should the response format look like if I ask for books from a specific category, like Science Fiction or Fantasy?",
        "answer": "The API response should be in JSON format and contain two main keys. One would be \"category\", which would include the name of the category, like Fantasy, and the second would be \"books\", which would be an array of book objects under that category. Each book object in the array should include essential fields such as book ID, title, author, price, and stock availability. This way, users can view not only the book details but also know the current stock and pricing, which helps them decide whether to place an order.",
        "shortAnswer": "The API response should be in JSON format and contain two main keys. One would be \"category\", which would include the name of the category, like Fantasy, and the second would be \"books\", which would be an array of boo...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-you-said-some-endpoints-should-be-public-and-others-restrict",
        "prompt": "You said some endpoints should be public and others restricted to certain users. How do you validate user privileges in the API?",
        "answer": "For that, we use Spring Security to implement role-based access control. First, users must sign in using an identity provider - this could be an external service or a custom authentication system. Once authenticated, users receive a JWT token, which is included in the Authorization header of every request using the Bearer token scheme. This token is then validated by a Spring Security filter, which checks whether the token is expired or tampered with. From the token payload, we can extract the user's role. Then in the controller layer, we use @PreAuthorize annotations to restrict access to certain endpoints. For example, only users with an admin role can perform POST, PUT, or DELETE operations. This ensures proper control over who can perform sensitive actions like adding or removing books.",
        "shortAnswer": "For that, we use Spring Security to implement role-based access control. First, users must sign in using an identity provider - this could be an external service or a custom authentication system. Once authenticated,...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-can-you-define-what-endpoints-would-you-create-for-the-order",
        "prompt": "Can you define what endpoints would you create for the Orders entity?",
        "answer": "Yes, for the Orders entity, the goal is to allow users to place orders, track them, and for admins to manage them. The first endpoint I'd create is a POST /orders. This allows an authenticated user to place a new order by submitting a request body that includes their user ID, a list of book IDs with quantities, payment method, and shipping address. This endpoint would save the new order into the system. Next, we'd have a GET /orders/{id}, which retrieves an order by its ID. This should be accessible only to the user who placed the order or an admin. Another important one is GET /orders/user/{userId}, which fetches all orders placed by a specific user - useful for showing their order history. For admin users, we would expose GET /orders to retrieve all orders in the system, mainly for reporting or support purposes. Then there's a DELETE /orders/{id}, used by admins to cancel or remove an order if needed. We might also include a PUT /orders/{id} endpoint to allow order status updates, like changing it from Processing to Shipped. So, the key operations would include POST, GET by ID, GET by user, GET all (admin), DELETE, and PUT for status updates.",
        "shortAnswer": "Yes, for the Orders entity, the goal is to allow users to place orders, track them, and for admins to manage them. The first endpoint I'd create is a POST /orders. This allows an authenticated user to place a new orde...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-you-mentioned-users-and-admins-you-corrected-yourself-when-y",
        "prompt": "You mentioned users and admins - you corrected yourself when you said only admins could see orders. So what about payments? What are the challenges you see when designing the payment APIs?",
        "answer": "When it comes to payments, one of the biggest challenges is integrating with payment gateways like Stripe. These systems introduce a few complexities. The first challenge is payment failures and error handling. Payments might fail due to insufficient funds, expired cards, or invalid information. So we need to handle those errors properly and allow users to retry or change their payment method. Another challenge is ensuring the transaction integrity. We don't want a situation where an order is placed but the payment fails - so everything must be wrapped in a transactional flow. It should be all or nothing. Security is also crucial - since we're dealing with sensitive cardholder data, we must never store raw card details in our system. Instead, we delegate that to the payment gateway, and only store tokens or transaction references. Then, there's the issue of fraud prevention, chargebacks, and making sure we're compliant with security standards like PCI-DSS. All these aspects must be handled carefully when designing a payment system.",
        "shortAnswer": "When it comes to payments, one of the biggest challenges is integrating with payment gateways like Stripe. These systems introduce a few complexities. The first challenge is payment failures and error handling. Paymen...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-how-will-you-handle-transaction-failures-in-your-application",
        "prompt": "How will you handle transaction failures in your application?",
        "answer": "Since we use Spring-based applications, we can use Spring's transaction management. You can simply annotate the service methods that must be part of a single transaction using @Transactional. This ensures that all operations within that method are treated as one unit. If any part fails - for example, if the payment fails - then everything gets rolled back. There are also cases where the failures might be temporary, like a network timeout when contacting the payment gateway. In such scenarios, we can use a retry mechanism with exponential backoff. But for failures like insufficient funds or expired cards, we don't retry, because those are final failures. So it's important to distinguish failure types and implement retries only where it makes sense.",
        "shortAnswer": "Since we use Spring-based applications, we can use Spring's transaction management. You can simply annotate the service methods that must be part of a single transaction using @Transactional. This ensures that all ope...",
        "category": "Technical",
        "tags": [
          "Microservices"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-what-about-concurrency-for-example-how-do-you-make-sure-the-",
        "prompt": "What about concurrency? For example, how do you make sure the stock is updated correctly during a transaction to prevent overselling?",
        "answer": "That's a very important aspect. We need to handle concurrency properly to avoid issues like overselling. Let's say two users try to buy the last copy of a book at the same time - we must make sure the stock gets updated accurately and only one of those transactions succeeds. To do that, we can use database-level locking or optimistic locking depending on our use case. Also, if we are using Spring Data JPA, we can take advantage of @Version annotation for optimistic locking, which prevents concurrent updates from corrupting the data. Alternatively, we could manage the stock update inside the transactional method, so that stock is decremented only after the payment is successful, and it all happens in a single atomic operation. This helps prevent race conditions and ensures that inventory reflects the actual state after each transaction. Also, any failed transactions should roll back the stock update so the system always stays consistent.",
        "shortAnswer": "That's a very important aspect. We need to handle concurrency properly to avoid issues like overselling. Let's say two users try to buy the last copy of a book at the same time - we must make sure the stock gets updat...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-how-would-you-scale-your-apis-to-handle-millions-of-users",
        "prompt": "How would you scale your APIs to handle millions of users?",
        "answer": "To scale the APIs for millions of users, we deploy the services in Docker containers on AWS ECS, which is similar to Kubernetes and used for orchestration. We configure Auto Scaling Groups (ASGs), so that if metrics like CPU usage or memory usage go beyond a threshold - for example, above 50% - ECS automatically spins up new instances. We also place a load balancer in front of the services, so incoming traffic is evenly distributed across instances. Apart from that, we can use caching for data like book listings, using something like Redis or in-memory cache, to reduce the load on the database and improve response time. We also look at traffic patterns and scale horizontally based on demand. In some parts of the application, we can introduce asynchronous processing - like for sending emails, or calling payment gateways - so those don't block the user's request. All these strategies together help us scale and maintain performance during high traffic.",
        "shortAnswer": "To scale the APIs for millions of users, we deploy the services in Docker containers on AWS ECS, which is similar to Kubernetes and used for orchestration. We configure Auto Scaling Groups (ASGs), so that if metrics l...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Microservices",
          "Databases",
          "Docker"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-good-but-what-about-database-performance-what-would-you-do-i",
        "prompt": "Good. But what about database performance - what would you do if queries are becoming slow?",
        "answer": "Yes, API performance can be great, but if the database is slow, it becomes the bottleneck. So on the database side, we focus on creating indexes on frequently queried fields. That speeds up lookups and improves query performance. We also consider database sharding, where the data is split across multiple databases or tables, especially when dealing with very large datasets. This reduces the load on any single node and distributes the queries. Other than that, we use pagination - for example, instead of returning thousands of records in one call, we return smaller pages of 10 or 50 records at a time, which improves both API and database efficiency. So yes, we work on both the API and database layers to ensure smooth performance as the system scales.",
        "shortAnswer": "Yes, API performance can be great, but if the database is slow, it becomes the bottleneck. So on the database side, we focus on creating indexes on frequently queried fields. That speeds up lookups and improves query...",
        "category": "Data",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-what-are-some-good-design-patterns-that-should-be-included-w",
        "prompt": "What are some good design patterns that should be included when designing APIs?",
        "answer": "There are a few important design patterns we should consider when designing APIs. One is to always include versioning in the endpoints - like using /api/v1/ and /api/v2/ - so that if we need to make breaking changes in the future, we can release a new version without affecting the current users. This gives us flexibility to improve or refactor services over time. Another is the microservices design approach - instead of building everything in a monolith, we break down the system into smaller services that handle specific domains, like Orders, Books, or Payments. This makes the system easier to scale, maintain, and deploy independently. Other useful patterns include using GraphQL for flexible querying where appropriate, and WebSockets for real-time updates, like status notifications. These can improve the user experience where timely feedback is important. These patterns help in creating a clean, flexible, and scalable API design.",
        "shortAnswer": "There are a few important design patterns we should consider when designing APIs. One is to always include versioning in the endpoints - like using /api/v1/ and /api/v2/ - so that if we need to make breaking changes i...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Microservices, Kubernetes, And API Design-do-you-have-any-questions-for-me",
        "prompt": "Do you have any questions for me?",
        "answer": "Yes, first of all, thank you so much for your time today. It was really nice talking to you and discussing all these technical scenarios like the bookstore system. My first question is - apart from coding, how much do developers at Adobe get involved in things like design sessions or architecture discussions? (Follow-up from interviewer) Yes, in Adobe, at least in our team, whenever we work on a design, we present it during a design review meeting. People ask questions and give suggestions - for example, whether we should use a specific component or an alternative. The design documents are shared with the team, and everyone has a chance to review and provide feedback. So, developers do get involved in design discussions and contribute to architectural decisions. Candidate's follow-up That sounds really great. I appreciate you sharing that insight. Another question - what do you personally like most about working at Adobe? Answer from interviewer Adobe is a creative company, so it offers opportunities beyond just your immediate project work. For example, if you're interested in AI or machine learning, Adobe is focusing on those areas too. You can explore other teams, learn new technologies, and contribute outside your primary role. So it's a place where you can learn, grow, and bring value by contributing across domains. Candidate's final remark That really sounds great. Thank you again for the discussion and your time today.",
        "shortAnswer": "Yes, first of all, thank you so much for your time today. It was really nice talking to you and discussing all these technical scenarios like the bookstore system. My first question is - apart from coding, how much do...",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-9",
    "sessionLabel": "Session 9",
    "title": "System Design: Trading Platform",
    "summary": "Trading services, portfolio concepts, SQL reporting, and performance-oriented schema design.",
    "focusAreas": [
      "Trading",
      "System Design",
      "SQL",
      "Portfolio"
    ],
    "questions": [
      {
        "id": "System Design: Trading Platform-so-probably-let-s-use-you-have-done-full-stack-right-basical",
        "prompt": "So probably let's use, you have done full stack, right? Basically, let's start with system design, right? So I want you to design a Trading App, okay? Right from the user login, which includes the security aspect like authentication and authorization. Also, like we have different kinds of packages when users are subscribing to a trading platform - equities, derivatives, leverage-based trading. Then replacing the trade, something real-time and scalable. Also, a bit on reporting, capital gains and performance. Keep it simple - if your trader placed five trades for the same stock, buy-sell-buy-sell-buy, you should be able to generate profit/loss for the day for that user and at an enterprise level too.",
        "answer": "Yeah, sure. Let me think. So basically, in that scenario, we can design a system with different components. First, we'll need an Authentication and Authorization service. For that, we can use JWT token-based authentication, where the user logs in and receives an access token and a refresh token. We can also implement Two-Factor Authentication (2FA) for sensitive actions like placing trades or withdrawing funds. For handling different trading options like equities, derivatives, and leverage-based trading, I would create a modular service-based architecture using Spring Boot microservices. Each type of trading can be handled by a separate service so they can scale independently. For real-time trade placement, I would use WebSocket connections to push data to the front end instantly. The backend would talk to a Market Data Service which fetches real-time prices from stock exchanges. There will also be a Trade Execution Engine that checks whether the buy/sell conditions are met and then calls the Exchange APIs to place the trades. For the reporting side, we can track all the buy/sell transactions of a user using a Trade Management Service and calculate daily PnL (Profit and Loss). We can use PostgreSQL for storing relational trade data and partition the trade table based on date to improve query performance. For enterprise-level reporting, we would write aggregate SQL queries to calculate PnL across all users, maybe using views or materialized views for performance. For scaling, I would deploy these services on AWS ECS clusters using Jenkins pipelines. Configuration would be managed via AWS SSM Parameters or Secrets Manager, and APIs would be documented using Swagger. All services would be containerized using Docker.",
        "shortAnswer": "Yeah, sure. Let me think. So basically, in that scenario, we can design a system with different components. First, we'll need an Authentication and Authorization service. For that, we can use JWT token-based authentic...",
        "category": "System design",
        "tags": [
          "Spring Boot",
          "AWS",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Trading Platform-what-is-portfolio-management-service",
        "prompt": "What is portfolio management service?",
        "answer": "Yeah, so portfolio management service is basically used to track and manage the user's investments. After placing trades, it keeps track of the user's current holdings, like the quantity of stocks, purchase prices, and current market value. It shows unrealized profit or loss - meaning the gain or loss if the user hasn't sold the asset yet - and also realized profit or loss from completed trades. It includes details like the total value of the portfolio, account balances, and risk-return profiles. It's useful for both the trader and the platform to understand how well investments are doing. This service integrates with the Trade Management Service and the Market Data Service to calculate live portfolio value based on current market prices. It also tracks all asset classes, whether it's stocks, bonds, mutual funds, or commodities.",
        "shortAnswer": "Yeah, so portfolio management service is basically used to track and manage the user's investments. After placing trades, it keeps track of the user's current holdings, like the quantity of stocks, purchase prices, an...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Trading Platform-what-is-market-service-how-would-you-implement-this-market-s",
        "prompt": "What is market service? How would you implement this market service?",
        "answer": "Yes, okay. So to implement the market service, it will basically receive live market data from external sources, such as various stock exchanges. Similar to how we fetch credit card data from TransUnion or Experian, here we'll consume live trading data through APIs provided by stock exchanges. The Market Service will fetch the latest bid/ask prices, volume, and price movement for each stock. This data is then used by the Trade Execution Engine to check if a trade condition is met. For example, if a user places a buy order at a certain price, this engine will match it with the current market price fetched by the Market Service and initiate a trade if conditions are met. It also pushes this data to the frontend via WebSockets so users can see real-time price changes. We might use Kafka or another messaging queue to distribute this market data efficiently across services that need it.",
        "shortAnswer": "Yes, okay. So to implement the market service, it will basically receive live market data from external sources, such as various stock exchanges. Similar to how we fetch credit card data from TransUnion or Experian, h...",
        "category": "Technical",
        "tags": [
          "Kafka"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Trading Platform-what-kind-of-data-will-you-require-here-in-this-case-to-plac",
        "prompt": "[What kind of data will you require here in this case to place a trade?]",
        "answer": "So basically, to place a trade, we would require all the trade execution data. That includes checking the current market price from the Market Data Service. For a buy order, the system should verify if the market price is favorable, and then proceed to execute the order. This involves knowing the stock symbol, the order type (buy or sell), the quantity, and the price at the time of execution. Additionally, we need the user's entitlement to perform the trade, the order priority, and possibly limits if it's a leveraged product. The platform will initiate the trade, and the actual exchange will fulfill it.",
        "shortAnswer": "So basically, to place a trade, we would require all the trade execution data. That includes checking the current market price from the Market Data Service. For a buy order, the system should verify if the market pric...",
        "category": "Frontend",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-what-is-trade-management-service-how-is-this-different-from-",
        "prompt": "What is trade management service? How is this different from the market service?",
        "answer": "So, the Trade Management Service is different from the Market Service in that it handles the state and records of trades, not live data. While the Market Service fetches real-time market data, the Trade Management Service stores and tracks trades after they are placed. It records what order was placed, its status (pending, filled, canceled), and provides visibility to the user about their trading activity. This service is more user-centric, so each user can view their trade history, order status, and perform actions like canceling an open order or modifying it. It's essential for reporting and analytics too.",
        "shortAnswer": "So, the Trade Management Service is different from the Market Service in that it handles the state and records of trades, not live data. While the Market Service fetches real-time market data, the Trade Management Ser...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-can-you-tell-me-the-apis-which-will-define-for-this-backend-",
        "prompt": "Can you tell me the APIs which will define for this backend? For the authentication and authorization service, will you do that?",
        "answer": "So, for the Authentication and Authorization service, we will use HTTP encryption along with JWT tokens. Tokens will be securely stored, and for sensitive actions like trading or fund withdrawals, we can enable Two-Factor Authentication. We can define APIs like: • POST /auth/login: This will authenticate the user and return an access token and refresh token. • POST /auth/register: For new users to register into the system. • POST /auth/refresh: This will issue a new access token using the refresh token. For Trade Management, we can define: • POST /trade/place-order: To place a buy or sell order. It will include fields like stock symbol, order type, quantity, and price. • The response will contain the order ID and status like pending or filled. Other APIs can include GET /trade/history to fetch all user trades and GET /portfolio to view the user's current holdings.",
        "shortAnswer": "So, for the Authentication and Authorization service, we will use HTTP encryption along with JWT tokens. Tokens will be securely stored, and for sensitive actions like trading or fund withdrawals, we can enable Two-Fa...",
        "category": "Security",
        "tags": [
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Trading Platform-let-s-get-into-the-sql-part-of-it-write-me-a-sql-query-which",
        "prompt": "Let's get into the SQL part of it. Write me a SQL query which will give me profit or loss for the day by user - like for the list of users who did trading for the day.",
        "answer": "So, what I'm basically trying to do here is calculate the profit and loss by looking at all the trades a user made on a specific day. If it's a buy order, the user spends money, so that would be a negative value. If it's a sell order, the user gains money, which would be a positive value. For example, if a user spent 100k buying stocks and earned 200k by selling stocks on the same day, then the net profit would be +100k. We consider trade type, price, and quantity in the calculation. I would write a query that sums up the values accordingly, grouping them by user ID and date.",
        "shortAnswer": "So, what I'm basically trying to do here is calculate the profit and loss by looking at all the trades a user made on a specific day. If it's a buy order, the user spends money, so that would be a negative value. If i...",
        "category": "Data",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-what-if-there-are-some-trade-transaction-charges-there-will-",
        "prompt": "What if there are some trade transaction charges? There will be transaction charges for this, right? Some STT and all that happens. How will you adjust with that?",
        "answer": "Yeah, so I would basically account for a transaction fee, say 10% or any defined percentage, and then adjust it in the profit/loss calculation. The SQL query would subtract the transaction charges from the total revenue generated from the sales. For both buy and sell sides, you need to calculate the costs including the fee. So we'll separate the transaction fees from the actual profit and loss to give a clearer picture. This way, the final value will be net of charges, showing the actual realized gain or loss.",
        "shortAnswer": "Yeah, so I would basically account for a transaction fee, say 10% or any defined percentage, and then adjust it in the profit/loss calculation. The SQL query would subtract the transaction charges from the total reven...",
        "category": "Technical",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-why-would-you-subtract-transaction-fee-for-sell-orders-becau",
        "prompt": "Why would you subtract transaction fee for sell orders? Because you are getting the money back.",
        "answer": "So, basically, even though you are getting the money back when selling, the transaction fees still apply. So we need to deduct them from the selling price, not just treat it as pure profit. The actual revenue from the sale is gross amount minus the transaction fee. For accurate calculations, especially when you're considering net returns, you have to adjust both buy-side and sell-side fees. We'd also need to make sure the logic is consistent across all trade records.",
        "shortAnswer": "So, basically, even though you are getting the money back when selling, the transaction fees still apply. So we need to deduct them from the selling price, not just treat it as pure profit. The actual revenue from the...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-what-is-t-here-you-re-doing-case-negative-quantity-into-pric",
        "prompt": "[What is T here? You're doing case negative quantity into price T dot price. What is T?]",
        "answer": "T refers to the trading table - it's the alias I'm using for the table that contains all the trade data. So when I say T.price or T.quantity, I'm accessing the price and quantity columns from the trade table. This table stores details for each trade like user ID, order type (buy/sell), stock symbol, quantity, price, and timestamp. Using an alias like T helps when writing complex SQL queries, especially when we need to join multiple tables like portfolio, market data, etc., and we want to avoid ambiguity.",
        "shortAnswer": "T refers to the trading table - it's the alias I'm using for the table that contains all the trade data. So when I say T.price or T.quantity, I'm accessing the price and quantity columns from the trade table. This tab...",
        "category": "Technical",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-what-kind-of-design-you-will-have-for-the-trading-table-for-",
        "prompt": "What kind of design you will have for the trading table for good performance?",
        "answer": "So for designing the trading table, I will include a primary key, say trade_id, and necessary foreign keys to link with the user table and stock symbol reference table. I'll apply constraints like making sure quantity and price are greater than zero, and that order_type only accepts values like 'BUY' or 'SELL'. To support performance for both inserts and read operations like profit/loss reporting, I would create indexes on user_id, stock_symbol, and trade_date. These indexes will help speed up the queries that calculate user-wise or symbol-wise profit and loss. I'll also include columns like order_status, source, order_priority, and transaction_fee with default values. I'll enable audit tracking with columns like created_by, created_at, updated_by, and updated_at to track who created or modified a trade and when. These are especially useful for compliance and debugging in trading systems.",
        "shortAnswer": "So for designing the trading table, I will include a primary key, say trade_id, and necessary foreign keys to link with the user table and stock symbol reference table. I'll apply constraints like making sure quantity...",
        "category": "System design",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Trading Platform-on-which-column-will-you-do-partitioning",
        "prompt": "On which column will you do partitioning?",
        "answer": "For partitioning, I would use time-based partitioning on the trade_date column. This allows us to efficiently manage and query large amounts of trade data, especially since trading systems can generate millions of records daily. Apart from time-based partitioning, we can also consider sub-partitioning by stock symbol, which can help when users are filtering their trades by specific stocks. These strategies will significantly improve the query performance and data management for large datasets.",
        "shortAnswer": "For partitioning, I would use time-based partitioning on the trade_date column. This allows us to efficiently manage and query large amounts of trade data, especially since trading systems can generate millions of rec...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-you-mentioned-about-the-portfolio-management-service-earlier",
        "prompt": "You mentioned about the portfolio management service earlier - do you know the definition of a portfolio?",
        "answer": "Yes, in layman's terms, a portfolio refers to a collection of investments owned by a user or customer. These can include different assets such as stocks, bonds, mutual funds, or other commodities. It's generally called a trading portfolio, and it keeps track of what the user holds, buys, or sells in the market. In technical terms, the portfolio contains investment details, quantities, purchase prices, current market value, and other metrics like unrealized profit/loss and realized profit/loss. It also includes the risk-return profile for each user, depending on their holdings. This service aggregates all trade records and combines them with real-time data to give the current status of a user's investments.",
        "shortAnswer": "Yes, in layman's terms, a portfolio refers to a collection of investments owned by a user or customer. These can include different assets such as stocks, bonds, mutual funds, or other commodities. It's generally calle...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-that-s-about-the-accounting-part-of-it-right-so-you-mentione",
        "prompt": "That's about the accounting part of it, right? So you mentioned the risk part - just wanted to understand, how did you come up with the risk?",
        "answer": "Yes, the risk component is generally based on market indexes or benchmarks. You start with the return of the portfolio and compare it to the market return using metrics like beta and alpha. For instance, if a portfolio has a positive alpha, it means the investment has outperformed the market. If it's negative, then it's underperformed relative to the risk taken. Beta is a measure of an asset's sensitivity to overall market movement. If beta equals 1, the asset moves in line with the market. If it's greater than 1, it's more volatile, and if less than 1, it's less volatile. For example, if the market goes up by 10%, a stock with a beta of 1.2 is expected to go up by 12%, and a stock with beta 0.6 would go up only 6%. There are also ratios used to evaluate return on investment in comparison to the risk, such as the Sharpe Ratio or Treynor Ratio. These help in assessing whether the returns are worth the risk taken.",
        "shortAnswer": "Yes, the risk component is generally based on market indexes or benchmarks. You start with the return of the portfolio and compare it to the market return using metrics like beta and alpha. For instance, if a portfoli...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: Trading Platform-have-you-worked-on-this-domain-before-which-project-was-it",
        "prompt": "Have you worked on this domain before? Which project was it?",
        "answer": "Project? No, so actually, I am a stock trader myself. I usually do trading on my own, so I have developed a good amount of practical knowledge about how these things work. Even though I haven't worked professionally on a project in this domain, I am very hands-on with trading systems, how portfolios are tracked, and how profit/loss calculations are done.",
        "shortAnswer": "Project? No, so actually, I am a stock trader myself. I usually do trading on my own, so I have developed a good amount of practical knowledge about how these things work. Even though I haven't worked professionally o...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: Trading Platform-i-have-one-quick-question-if-you-don-t-mind-what-will-be-the",
        "prompt": "[I have one quick question if you don't mind. What will be the next steps and what exactly is this requirement about? Is it more functional or technical? Because I'm both functionally and technically sound, so that's why I wanted to know.]",
        "answer": "The functionality is defined by the product team, VMI. I hope you're attending this, right? So we are building our own wealth services platform, and there are multiple components in this. Right now, we are working on a specific part that has more to do with data, but there are many services being built around the wealth data. There are APIs, ETL processes, analytics, and reporting layers involved. The platform is focused on bringing data together from multiple systems into a common model, which includes complex processing like ingesting, transforming, and loading data. Once that unified model is ready, we expose the data to different consumers, mostly other layers in the platform. This platform consolidates many VMI products currently working in silos and aims to provide a single B2B solution for customers. The pod you're being interviewed for is working on a core component called Party Master, which integrates data from multiple systems into one.",
        "shortAnswer": "The functionality is defined by the product team, VMI. I hope you're attending this, right? So we are building our own wealth services platform, and there are multiple components in this. Right now, we are working on...",
        "category": "Frontend",
        "tags": [
          "Kafka"
        ],
        "answerLengthLabel": "Long answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-10",
    "sessionLabel": "Session 10",
    "title": "Recent Work, Security, CI/CD, And Team Dynamics",
    "summary": "Past project details, modernization ownership, security, testing, and collaboration examples.",
    "focusAreas": [
      "Experience",
      "Security",
      "Testing",
      "Teamwork"
    ],
    "questions": [
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-tell-me-about-your-education-and-your-last-job-and-what-kind",
        "prompt": "Tell me about your education and your last job, and what kind of stuff you did.",
        "answer": "Well, starting from my background, I want to say thank you so much for having me here and giving me this interview opportunity. So, starting with my last project, I worked at a financial solutions company called Proficient. I was part of the tagging team. Over there, I worked as a Java developer, developing and improving the tagging functionalities and attachment mechanisms to ensure regulatory compliance with the SEC (Securities and Exchange Commission). It was a compliance project contributing to enhancing the financial reporting system, specifically within the active disclosure platform. This is a tool used for SEC filings. As a backend developer, I developed RESTful APIs using Spring Boot and built microservices to handle different aspects of tagging, taxonomies, and financial data processing. It involved a lot of data, and we also implemented encryption and decryption using OAuth and JWT tokens. My responsibilities included processing and data synchronization across services. On the frontend, I worked a bit with Angular, but my main focus and comfort are on backend tasks. I also worked on system performance and application monitoring using AWS CloudWatch, Splunk, and Spring Boot actuators for real-time health checks and performance tracking. It was a cloud-based deployment using AWS. We used AWS Lambda to process data-intensive operations efficiently and managed various kinds of data. Regarding Kafka and MongoDB, I designed and implemented Kafka producers and consumers to handle real-time data processing related to tagging functionalities. We used Kafka topics and partitions efficiently to distribute the workload among services. MongoDB was used for flexible and scalable data storage, especially for storing dynamic taxonomy data. The data models were schema-less to accommodate evolving regulatory requirements. So, yes, that's a summary of what I was doing on my last project.",
        "shortAnswer": "Well, starting from my background, I want to say thank you so much for having me here and giving me this interview opportunity. So, starting with my last project, I worked at a financial solutions company called Profi...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "AWS",
          "Angular",
          "Microservices"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-talk-to-me-about-the-tagging-team-the-stuff-that-you-did-i-r",
        "prompt": "Talk to me about the tagging team, the stuff that you did. I realized that that was the Securities and Exchange Commission, but I'm kind of interested in the specific microservices that you worked on. What did it do, and how did you go about it?",
        "answer": "Yeah, sure. So, on the Kafka side, we were responsible for real-time data processing and building an efficient data storage solution to enhance our active disclosure system. This was mainly for security and compliance-related financial filings. Our role required us to maintain data consistency, scalability, and regulatory compliance. For example, I worked on the performance stage where we used Redis caching to improve query performance and reduce the load on MongoDB. I also optimized the Kafka consumer groups for efficient message consumption and processing. We fine-tuned MongoDB queries and used indexing to ensure faster data retrievals. For maintaining data consistency and high availability, we used Kafka Connect to sync MongoDB with other databases. We implemented Change Data Capture (CDC) patterns to track changes across microservices. We ensured data redundancy and replication in MongoDB for high availability. Our Kafka producers would publish events into various topics like taxonomy, taxonomy updates, tagging events (when a user applies a new tag to a compliance filing), and user activity log topics for auditing and compliance. On the Kafka consumer side, we subscribed to relevant topics, processed the messages, and stored them in MongoDB for historical analysis. We created Spring Boot Kafka consumers to handle specific topics like the tagging event topic.",
        "shortAnswer": "Yeah, sure. So, on the Kafka side, we were responsible for real-time data processing and building an efficient data storage solution to enhance our active disclosure system. This was mainly for security and compliance...",
        "category": "Behavioral",
        "tags": [
          "Spring Boot",
          "Microservices",
          "Databases",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-what-kind-of-kafka-did-you-work-on-like-which-kafka",
        "prompt": "What kind of Kafka did you work on? Like which Kafka?",
        "answer": "Yeah, so in my recent project, I worked with the Apache Kafka distribution, specifically the open-source version. It was hosted as part of our infrastructure and deployed in both on-premises and cloud environments. So, basically, the flavor of Kafka was vanilla Apache Kafka, and it was running on our own infrastructure for some parts and on the cloud in others.",
        "shortAnswer": "Yeah, so in my recent project, I worked with the Apache Kafka distribution, specifically the open-source version. It was hosted as part of our infrastructure and deployed in both on-premises and cloud environments. So...",
        "category": "Technical",
        "tags": [
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-how-did-you-deploy-the-apache-kafka-what-did-you-choose-to-d",
        "prompt": "How did you deploy the Apache Kafka? What did you choose to deploy the Kafka?",
        "answer": "Well, to deploy Apache Kafka, we first had to set up the Kafka brokers. We used KRaft instead of Zookeeper for managing the metadata and network configurations. For deployment, we had a self-managed Kafka setup running on virtual machines, specifically using EC2 instances. Additionally, we had a Docker-based deployment, where we ran Kafka on Kubernetes. We also explored fully managed Kafka solutions, like AWS MSK (Managed Streaming for Apache Kafka), for cloud environments. So basically, we had two different deployment options: one was self-managed Kafka on Kubernetes using Docker, and the other was using fully managed cloud services like MSK on AWS.",
        "shortAnswer": "Well, to deploy Apache Kafka, we first had to set up the Kafka brokers. We used KRaft instead of Zookeeper for managing the metadata and network configurations. For deployment, we had a self-managed Kafka setup runnin...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Docker",
          "Kubernetes",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-you-can-deploy-in-kubernetes-how-did-you-do-that-like-how-i-",
        "prompt": "You can deploy in Kubernetes. How did you do that? Like how? I mean, Kubernetes by default doesn't have Kafka, right? How did you go about deploying Kafka?",
        "answer": "So, for deploying Kafka on Kubernetes, we used the Strimzi operator. It is a popular tool for running Kafka clusters on Kubernetes. Using YAML configurations, we defined the Kafka cluster, including brokers, topics, and other components, and deployed it through the Strimzi operator. Basically, we set up everything from the Kafka brokers to topics and consumers using those YAML deployment files. The operator made it easier to manage the Kafka lifecycle inside Kubernetes. That's how we handled Kafka deployment in Kubernetes environments.",
        "shortAnswer": "So, for deploying Kafka on Kubernetes, we used the Strimzi operator. It is a popular tool for running Kafka clusters on Kubernetes. Using YAML configurations, we defined the Kafka cluster, including brokers, topics, a...",
        "category": "Platform",
        "tags": [
          "Kubernetes",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-what-kind-of-authentication-mechanisms-did-you-use-while-con",
        "prompt": "What kind of authentication mechanisms did you use while connecting to Kafka brokers?",
        "answer": "For connecting to Kafka brokers, we used different types of authentication mechanisms depending on the project. One of the main ones was SSL-based mutual authentication, where we used certificates to establish secure connections between clients and brokers. So, we configured SSL certificates on both ends. In one of our side projects, we also used OAuth-based authentication, where we integrated Keycloak for managing tokens. This provided a secure way to authenticate and authorize Kafka clients using token-based security. So overall, we used both SSL mutual authentication and OAuth-based token authentication in different setups.",
        "shortAnswer": "For connecting to Kafka brokers, we used different types of authentication mechanisms depending on the project. One of the main ones was SSL-based mutual authentication, where we used certificates to establish secure...",
        "category": "Security",
        "tags": [
          "Security",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-do-you-have-any-experience-with-the-quarkus-framework",
        "prompt": "Do you have any experience with the Quarkus framework?",
        "answer": "No, I don't have any experience with Quarkus as of now. But I'm definitely open to learning it. I understand it's similar to Spring, and since I have strong experience with Spring Boot, I believe I can pick it up quickly. Once I'm into the team, I'll be able to start working on applications developed using Quarkus and get comfortable with it over time.",
        "shortAnswer": "No, I don't have any experience with Quarkus as of now. But I'm definitely open to learning it. I understand it's similar to Spring, and since I have strong experience with Spring Boot, I believe I can pick it up quic...",
        "category": "Technical",
        "tags": [
          "Spring Boot"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-can-you-explain-source-connectors-and-sink-connectors-in-kaf",
        "prompt": "Can you explain source connectors and sink connectors in Kafka?",
        "answer": "Sure. Talking about Kafka source and sink connectors, the source connector is used for pulling data from external systems like databases, file systems, or APIs, and pushing that data into Kafka topics. For example, we used a MongoDB source connector that fetched data from a MongoDB database and streamed it into Kafka. The source connector pulls data depending on the configuration, and writes it as key-value records to one or more topics. On the other hand, the sink connector does the reverse. It consumes data from Kafka topics and writes it into an external system. In our case, we used sink connectors to move data from Kafka into different external storage systems. This way, we were able to build a complete pipeline from data ingestion to persistence in external systems.",
        "shortAnswer": "Sure. Talking about Kafka source and sink connectors, the source connector is used for pulling data from external systems like databases, file systems, or APIs, and pushing that data into Kafka topics. For example, we...",
        "category": "Technical",
        "tags": [
          "Databases",
          "Kafka"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-do-you-have-experience-with-connectors-in-your-previous-job",
        "prompt": "Do you have experience with connectors in your previous job?",
        "answer": "Yes, I do. I've worked with JDBC connectors and also used the Elastic source connector. The JDBC connector allowed us to connect Kafka with relational databases, and the Elastic connector helped us write data into distributed file systems or indexes for search and analytics. I also used the Amazon S3 sink connector, which allowed us to stream Kafka data into S3 buckets. That connector was especially useful for long-term data storage and analytics purposes.",
        "shortAnswer": "Yes, I do. I've worked with JDBC connectors and also used the Elastic source connector. The JDBC connector allowed us to connect Kafka with relational databases, and the Elastic connector helped us write data into dis...",
        "category": "Technical",
        "tags": [
          "Databases",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-how-do-you-keep-track-of-records-like-how-do-you-know-which-",
        "prompt": "How do you keep track of records? Like how do you know which records are already sourced out and which are not?",
        "answer": "Well, to keep track of records, we use offsets in Kafka. Offsets are used to record the position from where the source connector has read the data. These offsets are stored by Kafka Connect inside Kafka itself. So, Kafka keeps track of which records have already been processed from the source system, like a database or file. This mechanism helps avoid reprocessing the same data and ensures that the data pipeline only pushes new or updated records to Kafka topics. It's part of the internal state management of Kafka Connect that keeps everything in sync.",
        "shortAnswer": "Well, to keep track of records, we use offsets in Kafka. Offsets are used to record the position from where the source connector has read the data. These offsets are stored by Kafka Connect inside Kafka itself. So, Ka...",
        "category": "Technical",
        "tags": [
          "Databases",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-say-we-have-some-orders-table-and-there-are-100-records-now-",
        "prompt": "Say we have some orders table, and there are 100 records. Now I configure my source connector to Kafka. How does Kafka know which records to move and which it didn't? What's the criteria to decide whether to read a particular record or not?",
        "answer": "So in that case, we usually rely on a polling mechanism. There are two common ways to track and read data from a database. One is incremental mode, where we use a column like an ID or a timestamp that increases with every new record. The other is a full-table read, also called bulk mode. In incremental mode, Kafka Connect reads only those records that have a higher ID or timestamp than the last read one, based on the offsets stored. This allows it to read new records without repeating the old ones. So the source connector uses that incremental field to know where to continue from and which records are new.",
        "shortAnswer": "So in that case, we usually rely on a polling mechanism. There are two common ways to track and read data from a database. One is incremental mode, where we use a column like an ID or a timestamp that increases with e...",
        "category": "Technical",
        "tags": [
          "Databases",
          "Kafka"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-explain-more-about-change-streams-in-mongodb-can-you-give-an",
        "prompt": "Explain more about change streams in MongoDB. Can you give an example where you used change streams?",
        "answer": "Yeah, so change streams in MongoDB allow us to watch for changes like insertions, updates, or deletions in a collection in real time. They are built on top of the MongoDB operation log and help track the changes that happen in data collections. For example, we used change streams for a real-time sync between MongoDB and Elasticsearch. Whenever there was a change in the MongoDB collection-like an update, insert, or delete-we had to reflect that change in Elasticsearch so that search queries would always return up-to-date results. So, we set up a change stream to monitor specific collections in MongoDB. When a change was detected, an event handler was triggered to perform the corresponding update or indexing operation in Elasticsearch. We also used the operation type to match actions like inserts or updates, and based on those, we updated the Elasticsearch documents accordingly.",
        "shortAnswer": "Yeah, so change streams in MongoDB allow us to watch for changes like insertions, updates, or deletions in a collection in real time. They are built on top of the MongoDB operation log and help track the changes that...",
        "category": "Technical",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-tell-me-how-partitions-and-consumers-are-related-in-kafka",
        "prompt": "Tell me how partitions and consumers are related in Kafka.",
        "answer": "Well, in Kafka, partitions are a way to split data within a topic for scalability and parallel processing. Each Kafka topic can have multiple partitions, and each partition is an ordered, immutable sequence of records. This allows Kafka to handle large-scale data efficiently. On the other hand, consumers are the components that read data from Kafka topics. A consumer group can have multiple consumers, and Kafka will distribute partitions among them. For example, if a topic has 4 partitions and you have 3 consumers in a group, Kafka will assign those 4 partitions to the 3 consumers. It ensures load balancing and fault tolerance. So, the consumer group and partitioning strategy helps Kafka maintain high throughput and efficient message processing. Kafka also manages partition assignments dynamically to maximize resource usage and ensure that every partition is being read.",
        "shortAnswer": "Well, in Kafka, partitions are a way to split data within a topic for scalability and parallel processing. Each Kafka topic can have multiple partitions, and each partition is an ordered, immutable sequence of records...",
        "category": "Technical",
        "tags": [
          "Kafka"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-can-you-talk-a-little-bit-about-what-you-ve-done-with-splunk",
        "prompt": "Can you talk a little bit about what you've done with Splunk in terms of creating, and some of the things you've done?",
        "answer": "Yeah, sure. My experience with Splunk mainly involves working with forwarders and indexers for data ingestion. We used Splunk to process logs, search log entries, and filter data based on different conditions. I created aggregations, grouped data by field names, and transformed it using expressions to get the desired insights. I built various visualizations like time series charts, pie charts for categorical distributions, and tables to show event details and summaries. Splunk was also used to trigger alerts, like sending emails or executing scripts when certain conditions were met. Additionally, I worked with field extractions, lookups, and data enrichment to make logs more meaningful. These tools were really helpful for monitoring application behavior and generating operational reports.",
        "shortAnswer": "Yeah, sure. My experience with Splunk mainly involves working with forwarders and indexers for data ingestion. We used Splunk to process logs, search log entries, and filter data based on different conditions. I creat...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-have-you-done-much-at-all-in-azure-has-azure-been-something-",
        "prompt": "Have you done much at all in Azure? Has Azure been something you've worked in as far as cloud?",
        "answer": "To be honest, I've had very limited experience with Azure. Most of my cloud work has been with AWS, which I'm quite comfortable with. But I believe most cloud platforms work in a similar way. So even though I haven't worked directly in Azure, I don't think I would have difficulty transitioning. With the help of proper documentation and exploration, I feel confident I can learn Azure or even Google Cloud if needed. The basic concepts of cloud infrastructure, deployment, and services are mostly aligned across providers, so the transition would not be a challenge for me.",
        "shortAnswer": "To be honest, I've had very limited experience with Azure. Most of my cloud work has been with AWS, which I'm quite comfortable with. But I believe most cloud platforms work in a similar way. So even though I haven't...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-talk-a-little-bit-more-about-mongodb-at-cvs-when-you-were-an",
        "prompt": "Talk a little bit more about MongoDB at CVS when you were an intern. You said you created some NoSQL data models. Can you talk a little bit about that, in terms of how that was different than what you did in financials?",
        "answer": "Yeah, that's right. While working at CVS, my experience with MongoDB was quite different compared to my recent financial project. At CVS, we used custom NoSQL data models primarily for managing customer data because of MongoDB's flexibility in handling complex information. This included things like personal details, prescriptions, and customer preferences. We also had a loyalty program, so we tracked points that customers earned from purchases or promotions. These prescription records were stored as embedded documents, which allowed us to store multiple levels of data like dosage, medication names, and refills in one record. We also modeled inventory data, which involved managing product SKUs, pricing, stock levels, and manufacturer information, including expiration dates. Our prescription data models were also designed to reference customer IDs, statuses, and even doctor notes. We used a mix of embedded and referenced models depending on the access patterns. For performance, we added indexes on commonly queried fields and used aggregation frameworks to run complex analytics, such as tracking popular medications, customer spending habits, and inventory turnover rates. That's how we utilized MongoDB's schema flexibility and capabilities while working at CVS.",
        "shortAnswer": "Yeah, that's right. While working at CVS, my experience with MongoDB was quite different compared to my recent financial project. At CVS, we used custom NoSQL data models primarily for managing customer data because o...",
        "category": "Data",
        "tags": [
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-what-is-your-latest-version-do-you-mean-on-cvs-or-maybe-seco",
        "prompt": "What is your latest version? Do you mean on CVS or maybe second project, like recently? I worked on Java 17 API.",
        "answer": "Yes, that's correct. In my most recent project, I worked with Java 17 and developed APIs using that version. I'm pretty familiar with the latest Java features, and I used them while building Spring Boot microservices.",
        "shortAnswer": "Yes, that's correct. In my most recent project, I worked with Java 17 and developed APIs using that version. I'm pretty familiar with the latest Java features, and I used them while building Spring Boot microservices.",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-do-you-have-any-questions-for-us",
        "prompt": "Do you have any questions for us?",
        "answer": "Yeah, first of all, thank you so much for this opportunity to speak with you today and for having this interview. I do have a question - since I'll be working on your team, how do you measure success in this role?",
        "shortAnswer": "Yeah, first of all, thank you so much for this opportunity to speak with you today and for having this interview. I do have a question - since I'll be working on your team, how do you measure success in this role?",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-how-do-you-describe-how-the-team-collaborates-and-what-do-i-",
        "prompt": "How do you describe how the team collaborates, and what do I need to come in like every day - in general, what does the work look like in this team?",
        "answer": "Okay, yeah, so that sounds great. Thanks for explaining that. From what I understood, the team follows an Agile process. You use JIRA to manage tasks, sub-tasks, and user stories. Every member is aligned to different work items listed in JIRA that describe what needs to be done. You also hold daily or alternate-day stand-ups, where everyone discusses what they're working on and who might need help. Sometimes, the team does a sprint swarm, where if someone is struggling with something, everyone gets on a work group call to help resolve the issue together. Right now, the team includes yourself, Marsha, and one Angular developer, and you're looking to hire three or four more people. Everyone contributes their part in alignment with the Agile methodology, and the goal is to complete tasks that roll up into the larger project delivery. It seems like even though parts of the process still have a bit of a waterfall structure, the overall direction is toward full Agile once production deployment begins.",
        "shortAnswer": "Okay, yeah, so that sounds great. Thanks for explaining that. From what I understood, the team follows an Agile process. You use JIRA to manage tasks, sub-tasks, and user stories. Every member is aligned to different...",
        "category": "Behavioral",
        "tags": [
          "Angular",
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-so-basically-from-waterfall-to-agile-is-that-correct",
        "prompt": "So basically, from waterfall to Agile - is that correct?",
        "answer": "Yes, that's correct. Right now, it's kind of a hybrid model, especially because you're not in production yet, so there aren't biweekly releases at the moment. But the team is already operating with Agile principles, so once you move into production, the transition into full Agile with sprints and regular releases should be smooth.",
        "shortAnswer": "Yes, that's correct. Right now, it's kind of a hybrid model, especially because you're not in production yet, so there aren't biweekly releases at the moment. But the team is already operating with Agile principles, s...",
        "category": "Behavioral",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Recent Work, Security, CI/CD, And Team Dynamics-any-final-thoughts-or-wrap-up",
        "prompt": "Any final thoughts or wrap-up?",
        "answer": "Yeah, thank you again for answering all my questions and for this opportunity. I really appreciate the chance to be part of this interview and to potentially work with your team in the future. I'm looking forward to it.",
        "shortAnswer": "Yeah, thank you again for answering all my questions and for this opportunity. I really appreciate the chance to be part of this interview and to potentially work with your team in the future. I'm looking forward to it.",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Short answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-11",
    "sessionLabel": "Session 11",
    "title": "Behavioral And Technical Interview Round",
    "summary": "Introduction, experience highlights, and mixed backend engineering discussion.",
    "focusAreas": [
      "Behavioral",
      "Backend",
      "Architecture",
      "Experience"
    ],
    "questions": [
      {
        "id": "Behavioral And Technical Interview Round-can-you-introduce-yourself",
        "prompt": "Can you introduce yourself?",
        "answer": "Hi, my name is Rona Bhan, and I've been working as a Software Engineer for about six years now. I've mainly worked on Java-based applications using frameworks like Spring and Hibernate, and also developed RESTful services for API development. I have solid experience with back-end technologies, especially in designing and deploying microservices to the AWS cloud. Some of the AWS services I've worked with include ECS, EC2, SQS, SNS, and Lambda. Currently, I'm part of a Scrum team that has five developers, along with product owners and a Scrum Master. On a daily basis, I mostly work on Java back-end code, help with code reviews, and also contribute to product support duties.",
        "shortAnswer": "Hi, my name is Rona Bhan, and I've been working as a Software Engineer for about six years now. I've mainly worked on Java-based applications using frameworks like Spring and Hibernate, and also developed RESTful serv...",
        "category": "Behavioral",
        "tags": [
          "AWS",
          "Microservices",
          "System Design",
          "Agile"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-so-let-me-read-the-question-basically-what-i-m-looking-for-i",
        "prompt": "So let me read the question. Basically, what I'm looking for is like designing a library system where a user is allowed to return or borrow books with some limited number of copies, and if a copy is not available, the user is added to the wait list. The system should output a message every time a book is borrowed or returned, or if a book is not available at any point in time. Assume that the user will not return a book that they do not have, nor will they borrow the book more than once at the same time.",
        "answer": "Okay, so we're designing a library system where we'll have a Book and a User, and the Library itself will be a collection of books. The Book should have fields like title, total number of copies, and number of available copies. Then we'll also need to keep track of Users, including the set of books each user has borrowed. For the library, I'd include behaviors such as adding a book, borrowing a book, and returning a book. Those will be the main functionalities we will work with. Initially, the Book class will include the title, total copies, and available copies. I'll add constructors, getters, and setters. When creating a new book entry, the available copies will be initialized with the total number of copies. The total number is used to track how many copies exist overall, while the available count is what's currently borrowable. If no copies are available, the User should be added to a waiting list. So we'll keep a Queue within the Book class for this purpose, which works on a First In, First Out strategy. We can use a LinkedList for this queue. Every time a book is borrowed or returned, the system will output a message accordingly. The User class will store the name and a set of borrowed books. I initially used a set of Book objects, but later I thought it might be better to use a Set of Strings (titles) instead. This is because the Book object is mutable - the available count changes - so using titles might help avoid issues like duplicate entries or comparison inconsistencies. When borrowing, the flow will be to check if the book exists, check if it's available, decrease the available count, and add the book to the user's borrowed set. If the book isn't available, we add the user to the waiting list. When returning a book, we check if the return is valid, then we increase the available count. If the waiting list is not empty, we dequeue the first user from the list and allow them to borrow the book. I realized that return logic should also handle this scenario, so the waiting list must be managed properly when the book is returned. I also made sure to move user-related logic out of the Book class because the Book should only store attributes like title, available copies, and the waiting list. All the borrowing and returning operations are better handled within the Library class, which acts as the intermediary. This keeps the logic clean and aligned with single responsibility principles.",
        "shortAnswer": "Okay, so we're designing a library system where we'll have a Book and a User, and the Library itself will be a collection of books. The Book should have fields like title, total number of copies, and number of availab...",
        "category": "System design",
        "tags": [
          "AWS",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-how-do-you-handle-the-waiting-list-when-a-book-is-returned",
        "prompt": "How do you handle the waiting list when a book is returned?",
        "answer": "So I think the waiting list should be handled when the book is returned. Once a book is returned, the system should check if the waiting list is not empty, and if so, it should poll the next user from the queue and allow that user to borrow the book. I can implement this in a way that when a return is processed, we immediately check the waiting list, and if there's a user waiting, we assign the book to them. So we would remove the user from the queue, update their borrowed set, and decrease the available count again. This should take care of the waiting list logic. The borrowing for the user would be done automatically as soon as the book is returned and becomes available.",
        "shortAnswer": "So I think the waiting list should be handled when the book is returned. Once a book is returned, the system should check if the waiting list is not empty, and if so, it should poll the next user from the queue and al...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-why-do-you-think-the-book-class-should-be-handling-user-logi",
        "prompt": "Why do you think the Book class should be handling user logic like borrowing and returning? Should that responsibility lie elsewhere?",
        "answer": "That's actually an anti-pattern that I introduced earlier. The Book class should be a simple POJO (Plain Old Java Object) that only contains data like title, available copies, and the waiting list. It shouldn't be handling user-related logic. Instead, this logic should go into the Library class, which serves as the central manager for operations like borrowing and returning. The Library interacts with both the User and the Book, and it ensures that the operations are valid and coordinated. For example, in the borrowing logic, the library would check if the book is available, update the count, and add the title to the user's borrowed set. Similarly, when a book is returned, the library updates availability and processes the waiting list. This way, we follow the single responsibility principle, keeping the code clean and maintainable. I can refactor the logic accordingly by stripping out the responsibilities from the Book and moving them to the Library.",
        "shortAnswer": "That's actually an anti-pattern that I introduced earlier. The Book class should be a simple POJO (Plain Old Java Object) that only contains data like title, available copies, and the waiting list. It shouldn't be han...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-what-change-did-you-make-to-avoid-storing-book-objects-in-th",
        "prompt": "What change did you make to avoid storing Book objects in the user's borrowed set?",
        "answer": "So initially, I had a Set of Book objects to track borrowed books for a user. But then I started thinking about the implications of mutability - the Book object's available count keeps changing, and since we're working with references, I wasn't sure if it would affect equality checks or lead to duplicates in the set. To avoid these issues, I decided it would be better to store just the book titles as strings in the user's borrowed set. This way, we have a unique and immutable identifier, and we avoid any unexpected behavior that might arise from changing object states. Given that the requirement assumes a user won't borrow the same book more than once simultaneously, we can safely use a Set of Strings to represent borrowed books. This makes the logic cleaner and more predictable.",
        "shortAnswer": "So initially, I had a Set of Book objects to track borrowed books for a user. But then I started thinking about the implications of mutability - the Book object's available count keeps changing, and since we're workin...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-do-you-think-it-s-better-for-the-user-class-to-manage-borrow",
        "prompt": "Do you think it's better for the User class to manage borrow logic, or should that be handled by the Library?",
        "answer": "I think it's better to have the Library class manage the borrow logic. The User should just be a model that holds user-specific data, not the logic for how borrowing works. If we place the borrow and return logic inside the User, it would make it difficult to reuse the User object in different contexts, like if the same user appears in another system or module. Instead, a better approach is to use a Map in the Library class that maps a User to the set of books they've borrowed. That way, we keep the logic centralized in the Library, and the User remains a clean and reusable entity. This also aligns better with separation of concerns and avoids coupling the User to one particular system's behavior.",
        "shortAnswer": "I think it's better to have the Library class manage the borrow logic. The User should just be a model that holds user-specific data, not the logic for how borrowing works. If we place the borrow and return logic insi...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-what-happens-if-there-are-two-books-with-the-same-title-but-",
        "prompt": "What happens if there are two books with the same title but different authors? How would you represent that?",
        "answer": "Okay, so in that case, we would definitely want to have some kind of unique identifier for each book, even if the titles are the same. Just like how we can have multiple users with the same name, books can share titles but still be different based on the author or edition. Usually, in data models, we include an identity field to differentiate entries. So for the Book class, I'd add something like a UUID or some unique ID that can identify each book uniquely. Similarly, for a User, we could also have a unique identifier to distinguish between users with the same name. This ensures that we're always working with the correct records regardless of naming collisions.",
        "shortAnswer": "Okay, so in that case, we would definitely want to have some kind of unique identifier for each book, even if the titles are the same. Just like how we can have multiple users with the same name, books can share title...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-what-if-the-waiting-list-isn-t-first-in-first-out-let-s-say-",
        "prompt": "What if the waiting list isn't First In, First Out? Let's say you want to give preferred members priority. What would you do?",
        "answer": "So, if we don't want a First In, First Out (FIFO) order and instead need a priority-based system, we could use a PriorityQueue. This data structure allows you to prioritize elements based on some criteria. We can define a comparator that gives higher priority to users with a certain status - for example, VIP members. Then, when a book becomes available, the system pulls the highest priority user from the queue instead of just the next one who entered. That way, the preferred members get the book first, as per the defined rules.",
        "shortAnswer": "So, if we don't want a First In, First Out (FIFO) order and instead need a priority-based system, we could use a PriorityQueue. This data structure allows you to prioritize elements based on some criteria. We can defi...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-do-you-have-any-questions-for-us",
        "prompt": "Do you have any questions for us?",
        "answer": "Sure, thank you so much for your time today. It was really nice talking to you. One thing I'd like to ask is, how much of similar interactive and design sessions do developers get involved in at PayPal - like on a peer-to-peer programming basis, or in general team collaboration?",
        "shortAnswer": "Sure, thank you so much for your time today. It was really nice talking to you. One thing I'd like to ask is, how much of similar interactive and design sessions do developers get involved in at PayPal - like on a pee...",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-follow-up-from-interviewer-sorry-did-you-mean-peer-to-peer-p",
        "prompt": "Follow-up from Interviewer: Sorry, did you mean peer-to-peer programming and also design-related collaboration?",
        "answer": "Yes, I meant both - how much do developers interact on a day-to-day basis when it comes to designing systems or working together on code, especially in a collaborative environment. Answer from Interviewer: So the team is quite collaborative overall. If you have a question or you're stuck on something, you can just ping anyone on the team - whether you're working remotely or in the office - and people are generally readily available to help. If you're in the office, you can just go to someone and ask, \"Hey, can you look at this?\" and most teammates will jump in to support. We also have code reviews, PRs, and general feedback loops, so there's ongoing interaction on the implementation side. From the design side, whenever we're building a new feature, we set up a design review session once we have enough information. We then have a team discussion to explore different options - for example, whether we should go in one direction or another based on team preferences. So overall, it's quite interactive and collaborative. Okay, thanks! One more question - what are some of the opportunities PayPal provides for continuous learning and growth? Answer from Interviewer: Yeah, great question. So I've only been with PayPal for about four months, but I've already noticed that PayPal offers access to LinkedIn Learning and Udemy - all for free. You can enroll in any course you want. Personally, I haven't had the time to explore those yet, but the opportunity is definitely there. I also think there are subsidized learning programs available if you want to go deeper into specific topics, though I'm not 100% sure about the details. But I can confidently say you get access to LinkedIn Learning and Udemy for professional growth.",
        "shortAnswer": "Yes, I meant both - how much do developers interact on a day-to-day basis when it comes to designing systems or working together on code, especially in a collaborative environment. Answer from Interviewer: So the team...",
        "category": "System design",
        "tags": [
          "System Design",
          "Kafka"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Behavioral And Technical Interview Round-closing-remarks-from-candidate",
        "prompt": "Closing remarks from candidate:",
        "answer": "Okay, yeah, sure. Thank you for that. Thank you so much for answering my questions. And yeah, I think that's all I had for now. It was really nice talking with you. Response from Interviewer: Yeah, definitely. Thanks, Ronan, right? Yeah, thanks a lot. Nice talking to you, and good luck with your other interviews. Final words from candidate: Sure. Thanks so much. Thanks. Bye. Take care. Bye, bye.",
        "shortAnswer": "Okay, yeah, sure. Thank you for that. Thank you so much for answering my questions. And yeah, I think that's all I had for now. It was really nice talking with you. Response from Interviewer: Yeah, definitely. Thanks,...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-12",
    "sessionLabel": "Session 12",
    "title": "Concise Introduction Round",
    "summary": "Short-form introduction and experience-driven prompts.",
    "focusAreas": [
      "Introductions",
      "Experience",
      "Communication"
    ],
    "questions": [
      {
        "id": "Concise Introduction Round-please-give-us-a-bit-of-introduction-about-yourself",
        "prompt": "Please give us a bit of introduction about yourself",
        "answer": "My name is Ronas Brudan, and I've been working as a software engineer for about six years now. I've primarily been focused on database and web application development, using frameworks like Spring, Hibernate, and RESTful web services for API development. Recently, I've been working more on microservice development, including designing, developing, and deploying them on AWS Cloud. I've worked with services like ECS, SQS, SNS, and Lambdas. I also have strong experience on the frontend, particularly with Angular, and I'm familiar with JUnit and Mockito for unit testing. Currently, I'm part of a scrum team that includes five developers, a product owner, and a scrum master. On a day-to-day basis, I mainly work on backend Java code, assist the team with code reviews, and contribute to production software releases.",
        "shortAnswer": "My name is Ronas Brudan, and I've been working as a software engineer for about six years now. I've primarily been focused on database and web application development, using frameworks like Spring, Hibernate, and REST...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Angular",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Concise Introduction Round-can-you-share-a-time-when-you-disagreed-with-a-colleague-or-",
        "prompt": "Can you share a time when you disagreed with a colleague or a leader, and how you handled that disagreement, what it was on and how you proceeded forward with it",
        "answer": "Sure, yeah. Thinking about that time - working in a team, disagreements are bound to happen. One time I disagreed with my team was when we were working on a feature for comparing complex objects. We had to check the equality of two specific objects, and the initial thought was to just do a simple string comparison on certain fields. But I was thinking from a broader perspective - instead of comparing individual fields, I proposed stringifying the entire payload and then comparing it using object mappers. We had a solid discussion about the pros and cons of both approaches. To handle the disagreement, I suggested we both create a list of pros and cons for each method to see which one would be more beneficial and how we could proceed. We also had a mediator join us to help guide the discussion. Eventually, we reached a consensus to go with a hybrid approach, combining elements from both our suggestions. I believe the best way to handle disagreements is to remain transparent, stay calm, and maintain open communication with the person you disagree with. That's what we did, and it worked out well.",
        "shortAnswer": "Sure, yeah. Thinking about that time - working in a team, disagreements are bound to happen. One time I disagreed with my team was when we were working on a feature for comparing complex objects. We had to check the e...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Concise Introduction Round-what-is-the-time-complexity-of-this-process",
        "prompt": "What is the time complexity of this process",
        "answer": "So, we are basically using two pointers that move from the start and end of the string toward the middle. Initially, I thought the process might be O(n²) because of the way it looked with the loops, but after thinking more carefully, I realized that's not the case. Each character is only processed once, and even though there's a nested-looking structure with a while loop inside another while loop, we are not reprocessing characters. The inner loop is just moving the pointer until it finds a vowel, and then the swap happens. So, it doesn't actually double the work - both pointers are only moving forward once per iteration. That means the actual time complexity is O(n), because we traverse the input string only once.",
        "shortAnswer": "So, we are basically using two pointers that move from the start and end of the string toward the middle. Initially, I thought the process might be O(n²) because of the way it looked with the loops, but after thinking...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Concise Introduction Round-so-far-you-have-reversed-a-string-which-is-just-one-word-and",
        "prompt": "So far, you have reversed a string which is just one word, and reversed vowels in a string which is also just one word. You're just going to move on to something a little more complex - instead of reversing just a single word or doing reversal in just a single word. How about if I give you a string of words - reverse the place where the words are?",
        "answer": "So I think for this problem, the idea is to split the string by spaces and then reverse the order of the words. But you mentioned that there will be extra spaces, including leading and trailing spaces, and also multiple spaces between words, and those need to be removed in the final result. So, we'll need to handle that as well. What I did first was to trim the string to remove any leading and trailing spaces. Then, I split the string using space as a delimiter, and looped through it from the back to the front. I used a StringBuilder to build the reversed sentence. I made sure to only append non-empty words to avoid the extra spaces. Initially, I had a bug where I was adding a space after every word, even after the last word. I fixed that by checking if it's the first word being appended, and only adding a space before the next word from the second word onward. After doing that, the output string no longer had extra spaces, and it reversed the words correctly.",
        "shortAnswer": "So I think for this problem, the idea is to split the string by spaces and then reverse the order of the words. But you mentioned that there will be extra spaces, including leading and trailing spaces, and also multip...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Concise Introduction Round-what-do-you-think-is-happening-right-now",
        "prompt": "What do you think is happening right now?",
        "answer": "So, at first, I noticed that the output had extra spaces, and I realized that was happening because I was adding a space after every word, regardless of whether it was the last word or not. That meant even when the string ended, it still had an extra space at the end. After reviewing the logic, I saw that the issue was due to not properly checking if it's the last word in the loop. So, to fix it, I adjusted the condition to avoid adding a space after the final word. That way, the final result didn't include any trailing spaces, and also made sure that multiple spaces between words were collapsed into a single space. That resolved the issue, and now the sentence reversal works as expected with clean formatting.",
        "shortAnswer": "So, at first, I noticed that the output had extra spaces, and I realized that was happening because I was adding a space after every word, regardless of whether it was the last word or not. That meant even when the st...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Concise Introduction Round-do-you-have-any-questions-for-us",
        "prompt": "Do you have any questions for us?",
        "answer": "Sure, yeah. First of all, thank you so much for the opportunity. It was really nice talking with you. I'd like to know a bit more about the day-to-day responsibilities of engineers at PayPal.",
        "shortAnswer": "Sure, yeah. First of all, thank you so much for the opportunity. It was really nice talking with you. I'd like to know a bit more about the day-to-day responsibilities of engineers at PayPal.",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Concise Introduction Round-what-do-you-like-most-about-working-here",
        "prompt": "What do you like most about working here?",
        "answer": "Me specifically, I would say I love the people I work with and the team I'm part of. I've been lucky to work with some of the best people I've ever encountered - and I don't just mean they're nice, but they're also very competent. People here genuinely love the ownership that comes with the job. At PayPal, there's a lot going on, and a lot of moving pieces, so there's always opportunity for ownership. Everyone I've worked with enjoys taking initiative, whether it's on new fields, new projects, or new ideas. You're not just maintaining old systems - even though PayPal has been around for over 30 years - you also get to build new things. Just in the last year, there were new initiatives launched across all brands and products. Working with people who are excited about building and innovating, and who want to collaborate, really makes a difference. That's what I love the most.",
        "shortAnswer": "Me specifically, I would say I love the people I work with and the team I'm part of. I've been lucky to work with some of the best people I've ever encountered - and I don't just mean they're nice, but they're also ve...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Concise Introduction Round-thank-you-for-conducting-the-interview-i-really-had-a-good-t",
        "prompt": "Thank you for conducting the interview, I really had a good time",
        "answer": "Yeah, thank you so much for that. I really appreciate it, and you have a great day as well. And thanks again for conducting the interview - I really had a good time.",
        "shortAnswer": "Yeah, thank you so much for that. I really appreciate it, and you have a great day as well. And thanks again for conducting the interview - I really had a good time.",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Short answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-13",
    "sessionLabel": "Session 13",
    "title": "System Design: URL Shortener",
    "summary": "Design discussion covering service architecture, scale, and storage choices.",
    "focusAreas": [
      "System Design",
      "URL Shortener",
      "Scale"
    ],
    "questions": [
      {
        "id": "System Design: URL Shortener-can-you-design-a-url-shortening-service-and-walk-me-through-",
        "prompt": "Can you design a URL shortening service and walk me through how you would build it, from client request to storage and redirection?",
        "answer": "Sure, so basically we have a client that sends a long URL to be shortened. We want to create a shortening flow, and possibly include a rejection flow and tracking analysis as well. First, I would like to clarify a few points, like the expected volume and read vs. write ratio for the system. Since this is a read-heavy system like Bitly, I would start with placing an API gateway with a load balancer between the client and the backend server. This will help us manage high traffic effectively by providing proper routing, rate limiting, and overall ensuring a highly scalable and resilient system. The server will be responsible for two main things: generating the short URL and tracking the clicks on that URL. For the URL generation, we can use a hashing technique like SHA-256. Since hashing alone doesn't guarantee uniqueness, we should add a unique identifier or counter to the hash to handle collisions. We'll take the first few characters of the hash and store that as the short URL mapped to the original URL in our database. I would recommend using a non-relational database like AWS DynamoDB or MongoDB because we're mostly storing key-value pairs and do not require a strict schema. This provides high availability and partition tolerance, which suits our use case well. For tracking, I suggest keeping tracking information in a separate document or collection rather than updating the original URL mapping directly. This will prevent potential issues and improve performance. One collection would store the URL mapping, and another one would maintain metadata for tracking purposes. When a user clicks on the short URL, the request goes to the load balancer, then to the URL redirection service. It checks the cache first; if the URL is in the cache, it performs a fast redirect. If not found, it looks up the database, stores the result in the cache, and returns the redirect. This click event will also trigger an event to the tracking service, which could be an event-based system or a queue.",
        "shortAnswer": "Sure, so basically we have a client that sends a long URL to be shortened. We want to create a shortening flow, and possibly include a rejection flow and tracking analysis as well. First, I would like to clarify a few...",
        "category": "System design",
        "tags": [
          "AWS",
          "Microservices",
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: URL Shortener-what-would-be-your-caching-strategy-what-would-your-approach",
        "prompt": "What would be your caching strategy? What would your approach there be?",
        "answer": "For caching, I would introduce it between the short URL and the long URL mapping. If the cache already contains the mapping, we can immediately redirect. If there's a miss, then we retrieve it from the database, store it in the cache, and return the result. We should cache the most frequently accessed URLs - the hot URLs. For those, we can set a longer time-to-live (TTL), maybe around 24 to 48 hours, especially for social media posts. I suggest using a Least Frequently Used (LFU) strategy to manage these entries efficiently. This helps in minimizing unnecessary cache evictions and keeps popular URLs quickly accessible. For the caching system itself, I would use Redis. It's fast and efficient for this kind of workload.",
        "shortAnswer": "For caching, I would introduce it between the short URL and the long URL mapping. If the cache already contains the mapping, we can immediately redirect. If there's a miss, then we retrieve it from the database, store...",
        "category": "Technical",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: URL Shortener-do-you-think-there-s-any-value-in-using-in-memory-cache-on-t",
        "prompt": "Do you think there's any value in using in-memory cache on the server itself?",
        "answer": "Yes, I think there is definite value in that. If we use in-memory caching inside the server itself, we can reduce network overhead and improve latency for frequently accessed URLs. It's simple to implement, and we could preload the cache with popular URLs during server startup. These popular URLs can be identified through the tracking data we collect. So, we wouldn't cache everything, but definitely the ones with high traffic.",
        "shortAnswer": "Yes, I think there is definite value in that. If we use in-memory caching inside the server itself, we can reduce network overhead and improve latency for frequently accessed URLs. It's simple to implement, and we cou...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: URL Shortener-what-do-you-think-is-the-weakest-link-in-your-system-if-some",
        "prompt": "What do you think is the weakest link in your system? If someone called and said we're getting terrible performance when users click through, what would be the first thing you would go check?",
        "answer": "I think the weakest link in this system would be the URL minification part, specifically the caching and database layers. Since we are relying on a cache layer, if that is not set up with a proper invalidation strategy, it could lead to problems. If the cache is not managed well, we might end up overloading the database, which is supposed to be our fallback. We need to have a well-thought-out cache eviction and refresh strategy to ensure it doesn't impact performance. Also, we only have one database, so if that goes down, we need a warm replica or standby instance ready to replace the primary one. Since we're using a non-relational database, we should make sure there is a proper partitioning strategy, and we should have multiple replicas available to handle any failure. So the first places I would check are the cache layer and then the database layer, to verify they're working correctly and not causing the latency.",
        "shortAnswer": "I think the weakest link in this system would be the URL minification part, specifically the caching and database layers. Since we are relying on a cache layer, if that is not set up with a proper invalidation strateg...",
        "category": "System design",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: URL Shortener-with-everything-we-discussed-do-you-have-any-other-thoughts-",
        "prompt": "With everything we discussed, do you have any other thoughts you want to add, maybe edge cases or something you think might need to change over time?",
        "answer": "Yes, I think we should consider URL expiry handling. If the short URLs are supposed to expire after a certain time, then we need to have a cleanup process in place. This process should be able to mark expired URLs as inactive in the database and also delete them from the cache. We also need to think about having proper load balancer configurations and ensuring that the DNS routing is optimized. These infrastructure considerations help maintain availability and performance over time, especially when the system scales.",
        "shortAnswer": "Yes, I think we should consider URL expiry handling. If the short URLs are supposed to expire after a certain time, then we need to have a cleanup process in place. This process should be able to mark expired URLs as...",
        "category": "Technical",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "System Design: URL Shortener-what-advice-would-you-give-to-new-developers-who-are-just-jo",
        "prompt": "What advice would you give to new developers who are just joining the team at PayPal?",
        "answer": "I think it really depends, but if someone hasn't worked at a large company before, that's a whole different skill set aside from just the technical part. One of the key things to understand is the complexity that comes with the different layers of management, the many cross-functional teams, and how coordination works across all of them. One thing I personally really like about PayPal is that there are people working all over the world. That's probably one of my favorite aspects of the company. But of course, it also creates challenges, especially with coordination and communication. So my main piece of advice would be to be patient and take time to understand how to navigate a company of this size. Also, since PayPal is an older tech company, it has multiple generations of technology still in use. Learning to work through those different stacks is something that takes time, and it's not something you're going to pick up in a single day. So be patient and ask a lot of questions. There are many people here who have been at the company a long time, and they have a lot of context and history. You should definitely make an effort to leverage that knowledge by asking them and learning from their experience. That's probably the biggest tip I'd offer to someone joining PayPal.",
        "shortAnswer": "I think it really depends, but if someone hasn't worked at a large company before, that's a whole different skill set aside from just the technical part. One of the key things to understand is the complexity that come...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: URL Shortener-in-a-big-company-like-paypal-how-does-the-team-structure-loo",
        "prompt": "In a big company like PayPal, how does the team structure look like? How does it operate?",
        "answer": "It really varies a lot. In my team, for example, if we just look at the backend engineers, there are probably about eight of us. But then we also work very closely with the client engineers, and they are also a big part of our workflow. There are also contract workers-maybe around 10 to 20-who support various parts of the product. On top of that, we have product managers, data analysts, and machine learning engineers who we collaborate with on a regular basis. So on a day-to-day level, I work with dozens of people. It can definitely be hard sometimes to keep track of everything and everyone, and communication can be a challenge. But it's also a great environment because you get to work with a wide range of skill sets and diverse perspectives, which I think is really valuable.",
        "shortAnswer": "It really varies a lot. In my team, for example, if we just look at the backend engineers, there are probably about eight of us. But then we also work very closely with the client engineers, and they are also a big pa...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "System Design: URL Shortener-since-i-m-interviewing-for-a-java-developer-position-but-the",
        "prompt": "Since I'm interviewing for a Java Developer position, but the email mentioned something about a Staff Python Developer - do you know what position I'm actually being considered for?",
        "answer": "Yeah, I thought that you were applying for a Java backend position. But honestly, I don't know for sure. If there's confusion around that, I would definitely recommend emailing your recruiter to get that clarified. I just got the calendar invite for this interview and joined based on that. I don't know how the job roles are distinguished or labeled on the recruiting side. Personally, my main focus is on TypeScript and JavaScript, since I come from a web development background, but I do contribute to Java projects as well. From my understanding, Java is the main backend language used at PayPal. I've seen job postings that mention Python, but I've actually never personally seen a Python-based application in use here. I think Python might be used more by other business units or maybe by teams like Venmo, but I can't say for sure. So again, I'd say your best bet is to confirm it directly with your recruiter.",
        "shortAnswer": "Yeah, I thought that you were applying for a Java backend position. But honestly, I don't know for sure. If there's confusion around that, I would definitely recommend emailing your recruiter to get that clarified. I...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Long answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-14",
    "sessionLabel": "Session 14",
    "title": "Problem Solving And Difficult Technical Challenges",
    "summary": "Difficult issues, solution strategy, and technical tradeoff conversations.",
    "focusAreas": [
      "Problem Solving",
      "Technical Depth",
      "Debugging"
    ],
    "questions": [
      {
        "id": "Problem Solving And Difficult Technical Challenges-tell-me-about-a-very-difficult-problem-that-you-had-to-solve",
        "prompt": "Tell me about a very difficult problem that you had to solve at both recency and gives them more idea about that.",
        "answer": "So, I would say one of the most difficult problems I encountered was while working with historic commands. This was part of an executive framework abstraction that made it easier to work with issues, but it didn't integrate well with Spring Boot services. Since it didn't align properly with Spring Beans, we had to manually manage everything. The challenge came when I was trying to incorporate a streaming engine into our application. The engine was supposed to aggregate logs and push them to an API in batches, say of 100 logs per batch, to downstream services. Everything worked well during local testing and in staging environments, but when we began promoting it to production, we started experiencing unexpected issues. We weren't seeing any logs or clear signs of failure, yet the system was crashing, sometimes for up to 30 minutes or even an hour. So, I had to dig deep and figure out what was going wrong. I started by comparing the production configuration with the lower environments to check for threading configuration differences. After aligning them and spinning up the system with minimal threads, we started hammering the same flow. We were then able to reproduce the crash under certain failure scenarios, just like in production. Eventually, I took heap dumps of the failing instances and discovered that an open thread pool was not being closed. This was causing an accumulation of threads, leading to the system crash. The real issue was swallowing of NullPointerExceptions, because we were trying to use Spring dependencies in a non-Spring component. The dependency wasn't initialized in those edge cases, which led to a memory buildup and system failure. This incident helped us realize we lacked good failure coverage in our QA environment and that we were mostly testing only the success paths. After this, we improved our error scenario testing, and finally, we were able to catch and fix this issue.",
        "shortAnswer": "So, I would say one of the most difficult problems I encountered was while working with historic commands. This was part of an executive framework abstraction that made it easier to work with issues, but it didn't int...",
        "category": "Technical",
        "tags": [
          "Spring Boot"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-can-you-tell-me-what-is-an-mvc-architectural-pattern",
        "prompt": "Can you tell me what is an MVC architectural pattern?",
        "answer": "So, the MVC architectural pattern stands for Model-View-Controller. It breaks the application into three parts. First, there is the Model, which represents the application data and business logic. This layer would typically contain your services and data processing logic. Then we have the View, which is the user interface layer responsible for displaying data to the user. It retrieves and presents data, often formatted from the backend. Lastly, there is the Controller, which handles user input and acts as the intermediary between the model and the view. The way it works is that a user interacts with the View, the Controller processes the input and updates the Model, and then the Model updates the data and notifies the View again. It's a clean separation of concerns that helps keep the code organized and manageable.",
        "shortAnswer": "So, the MVC architectural pattern stands for Model-View-Controller. It breaks the application into three parts. First, there is the Model, which represents the application data and business logic. This layer would typ...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-we-are-trying-to-design-a-commerce-platform-let-s-say-it-s-a",
        "prompt": "We are trying to design a commerce platform. Let's say it's a standard shopping service. You can add remote products, validate items, and check if there's an item in the cart. Let's start with creating the basic classes. Then we'll design the overall architecture and databases you might use.",
        "answer": "Sure, so for this commerce platform, I would start by defining some core classes. We would need a ShoppingCart class with fields like ID, userID, and a list of items. Then we'll have a CartItem class, which contains a Product object. The Product class would include fields such as ID, name, and price. Once we have these, we should also define an Order class, which will contain an ID, userID, and a list of order items. Each OrderItem would have the product, quantity, and price. To link everything together, we'll also create a User class so that each user's activity can be tied back properly. We'll need services to support each domain object. For instance, a UserService with methods like getUserById and getOrderHistory. We'll also build a CartService that allows us to add items to the cart, get items, or remove them. A ProductService will help in fetching product data and checking availability. Finally, we'll have an OrderService responsible for creating orders, fetching order status, and other order-related operations. So this way, we have services handling responsibilities in a clean and organized fashion - like UserService, CartService, ProductService, and OrderService. Each service would be interacting with its respective models and database entities. And from a high-level flow, when the user adds an item to the cart, we first check availability via ProductService, then update the cart, and finally return the updated cart back to the client. So that's our Add to Cart flow.",
        "shortAnswer": "Sure, so for this commerce platform, I would start by defining some core classes. We would need a ShoppingCart class with fields like ID, userID, and a list of items. Then we'll have a CartItem class, which contains a...",
        "category": "System design",
        "tags": [
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-once-we-store-an-item-in-the-cart-where-is-it-going-to-get-s",
        "prompt": "Once we store an item in the cart, where is it going to get stored? Can we talk about the database now?",
        "answer": "Yes, for the database, I would go with a relational database like PostgreSQL. We'll have a Product table with fields like ID, name, and price. For the cart, there would be a Cart table, which has a one-to-one relationship with the User table and a one-to-many relationship with the CartItem table. So, the CartItem table would link to both Product and Cart, allowing us to map which user has what products in their cart. Similarly, we'll have Order and OrderItem tables with a similar relational setup. This way, we maintain strong relationships and data consistency. I'm using a relational approach because I want ACID compliance, data integrity, and a structured schema, especially for financial operations or maintaining accurate inventory. With SQL, I can also write complex queries to fetch recent orders, top-selling products, or filter orders per user, which is really useful for analytics and reporting.",
        "shortAnswer": "Yes, for the database, I would go with a relational database like PostgreSQL. We'll have a Product table with fields like ID, name, and price. For the cart, there would be a Cart table, which has a one-to-one relation...",
        "category": "Data",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-why-have-you-been-storing-it-in-mysql-and-not-in-any-other-d",
        "prompt": "Why have you been storing it in MySQL and not in any other database? Just curious.",
        "answer": "So, you're asking why I prefer MySQL here. It's mainly because I want to maintain strong relational integrity. I'm thinking more from a consistency-based perspective. With MySQL, I can rely on ACID transactions, which is critical when we're dealing with shopping carts, payments, and inventories. When you use relational databases, you do need to write separate queries - like one to get the Cart, then another to fetch the CartItems, and finally one for the Product details. But to me, those are acceptable trade-offs in return for better data consistency and reliability. For instance, I want to ensure that if multiple users try to buy the same product at once, the database can handle that with locking mechanisms to avoid overselling. That kind of control is easier to enforce in a relational setup compared to a NoSQL one, where we'd have to write additional logic to handle such edge cases.",
        "shortAnswer": "So, you're asking why I prefer MySQL here. It's mainly because I want to maintain strong relational integrity. I'm thinking more from a consistency-based perspective. With MySQL, I can rely on ACID transactions, which...",
        "category": "Data",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-if-you-have-a-very-popular-item-and-a-lot-of-people-are-tryi",
        "prompt": "If you have a very popular item, and a lot of people are trying to add that to the cart at the same time, how would MySQL handle that kind of scale?",
        "answer": "That's a good point. If there's a popular product - like, say, a newly released phone - and multiple users try to add it to their carts simultaneously, we might run into performance bottlenecks due to row-level locking. To handle that, I would suggest a hybrid approach. For instance, we can store cart data in a cache, like Redis, and then sync it with the SQL database periodically. This would allow for faster writes and handle high concurrency more efficiently. So every time a user adds an item to the cart, we write it into Redis first, and then perform asynchronous syncing with MySQL. This reduces the strain on the database during peak loads while maintaining data integrity in the long term.",
        "shortAnswer": "That's a good point. If there's a popular product - like, say, a newly released phone - and multiple users try to add it to their carts simultaneously, we might run into performance bottlenecks due to row-level lockin...",
        "category": "Data",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-but-you-ll-still-have-to-query-the-product-table-right-you-r",
        "prompt": "But you'll still have to query the product table, right? You're going to cache only the cart?",
        "answer": "Yes, that's correct. I'll cache the cart data, but for the Product table, I agree that querying it repeatedly could be a performance hit. So we can also consider caching product data - maybe not all of it, but at least the stock status and price, since that's what we access frequently during cart operations. So, let's say when someone adds a product to the cart, we do a quick check in Redis for stock availability, and only hit the database if the cache is stale or missing data. It's one of those trade-offs - NoSQL options like DynamoDB might help with partition tolerance, but they also bring up concerns around eventual consistency. So in my view, for orders and financial operations, I'd still want to use SQL for the strong consistency, and maybe use NoSQL for parts like the cart or product metadata where availability is more important.",
        "shortAnswer": "Yes, that's correct. I'll cache the cart data, but for the Product table, I agree that querying it repeatedly could be a performance hit. So we can also consider caching product data - maybe not all of it, but at leas...",
        "category": "Data",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-what-else-would-we-need-to-do-in-order-to-scale-this-service",
        "prompt": "What else would we need to do in order to scale this service for millions of customers, like Amazon? What are the modifications you might want to do in the design?",
        "answer": "So, talking about scaling this for millions of customers, I would suggest putting the services behind a load balancer with an auto-scaling group attached to it. This setup allows the system to scale horizontally based on traffic. For the database, we should introduce read replicas, so any read operations are distributed across replicas, and we reserve the primary instance only for write operations. Another modification would be to segregate the databases by domain. For example, for orders, we may want to use MySQL to maintain data consistency and integrity, but for cart and product data - where availability is more important - we could use NoSQL databases like MongoDB or DynamoDB. These databases offer better partition tolerance and scalability. That way, we design our system to meet different needs: for critical transactions like orders, we prioritize consistency, and for less critical, highly accessed data like carts and products, we prioritize availability and performance. This hybrid approach would help us scale the system effectively without compromising on reliability.",
        "shortAnswer": "So, talking about scaling this for millions of customers, I would suggest putting the services behind a load balancer with an auto-scaling group attached to it. This setup allows the system to scale horizontally based...",
        "category": "System design",
        "tags": [
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-but-your-product-data-wouldn-t-be-in-sql-then-don-t-we-need-",
        "prompt": "But your product data wouldn't be in SQL then. Don't we need strong consistency if you're using a check availability call?",
        "answer": "Yeah, that's a valid concern. So according to the CAP theorem, we can only pick two out of Consistency, Availability, and Partition Tolerance. For product data, where check availability is a key operation, if we go with DynamoDB, we have to accept eventual consistency. So in such scenarios, we might lean towards SQL to preserve strong consistency. But even within DynamoDB, we can tune it for strongly consistent reads, though that could come at the cost of performance. Another way could be denormalizing the data to reduce joins and make it easier to work with in NoSQL, but again, that depends on how critical the consistency is for our business logic. In my opinion, orders and transactions should stay with relational databases, while products and carts could optionally go to NoSQL if we're okay with the consistency trade-offs. We just have to decide based on the specific SLAs and business needs.",
        "shortAnswer": "Yeah, that's a valid concern. So according to the CAP theorem, we can only pick two out of Consistency, Availability, and Partition Tolerance. For product data, where check availability is a key operation, if we go wi...",
        "category": "Data",
        "tags": [
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-let-s-talk-about-the-checkout-flow-how-would-that-work",
        "prompt": "Let's talk about the checkout flow. How would that work?",
        "answer": "So, for the checkout flow, I would design it to have high availability and fault tolerance. When a user initiates the checkout, we would have a CheckoutService responsible for managing the entire flow. The first thing this service would do is fetch the cart items, and then perform a stock reservation. This is done to prevent other users from purchasing the same item while the checkout is in progress. Once the stock is reserved, the system proceeds to create an order. Then, it interacts with the payment gateway to initiate the payment. If the payment is successful, we would mark the order status as 'complete' and reduce the stock count accordingly. On success, we might also want to send an email notification or trigger some event-driven logic to inform other services. In case the payment fails or something goes wrong during the process, we would mark the order status as 'failed' and restore the stock to reflect that the item wasn't purchased. So essentially, we would need to manage two outcomes - one where the order is successful and one where it isn't - and handle each accordingly. That's the complete cycle of the checkout flow.",
        "shortAnswer": "So, for the checkout flow, I would design it to have high availability and fault tolerance. When a user initiates the checkout, we would have a CheckoutService responsible for managing the entire flow. The first thing...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-what-would-you-monitor-to-see-the-overall-system-health-in-t",
        "prompt": "What would you monitor to see the overall system health in this design?",
        "answer": "From my point of view, observability is key to keeping track of system health. First, I would want to integrate observability tools and create individual dashboards for each microservice. The first and most important metric would be health checks. These are basic checks that the load balancer can use to know whether to keep or remove an instance from the traffic pool. Next, I'd monitor API response times, which are critical for identifying latency issues. I'd also track error codes being returned by the APIs - things like 500s, 503s, or any spikes in 400s. Alongside that, monitoring request rates would help us understand the load on each service. On the database side, I'd want to observe query latency and also keep track of the database connection pool usage. This helps identify when connections are being exhausted. I'd also track read/write throughput (TPR/TPS) for understanding overall load.",
        "shortAnswer": "From my point of view, observability is key to keeping track of system health. First, I would want to integrate observability tools and create individual dashboards for each microservice. The first and most important...",
        "category": "System design",
        "tags": [
          "Microservices",
          "System Design",
          "Databases"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Problem Solving And Difficult Technical Challenges-do-you-have-any-questions-for-me-now-that-we-are-almost-wrap",
        "prompt": "Do you have any questions for me now that we are almost wrapping up?",
        "answer": "First of all, I would really like to thank you for giving me your precious time and the opportunity to share a few things with you. Regarding my question - I was wondering if the kind of system design exercise we did today is something engineers typically get involved in on a daily basis, or is it more of a periodic activity? Follow-up from Interviewer: Yeah, so it doesn't happen on a weekly basis. Usually, designing new systems is a monthly or quarterly activity. Everyone is expected to follow the STLC (Software Testing Life Cycle) and participate in the design phase, where they present their ideas to stakeholders, gather feedback, and then iterate over it. Design is just one part of the development cycle - after that comes the implementation phase. Candidate's closing comment: That sounds great. Again, thank you so much for the opportunity and for sharing all this information. I also want to say I really enjoyed talking to you and the team over the past few days. The questions were very exciting and interesting, and I genuinely appreciated everyone's time and the overall experience.",
        "shortAnswer": "First of all, I would really like to thank you for giving me your precious time and the opportunity to share a few things with you. Regarding my question - I was wondering if the kind of system design exercise we did...",
        "category": "Technical",
        "tags": [
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-15",
    "sessionLabel": "Session 15",
    "title": "Motivation, Role Fit, And Behavioral Questions",
    "summary": "Interest in the role, communication style, and reflective behavioral responses.",
    "focusAreas": [
      "Motivation",
      "Behavioral",
      "Communication"
    ],
    "questions": [
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-tell-us-a-little-bit-about-yourself-and-your-interest-in-thi",
        "prompt": "Tell us a little bit about yourself, and your interest in this position and why.",
        "answer": "My name is Susan, and I've been working as a software engineer for about six years now. I have solid experience working on microservices, Java-based web applications, and I've been involved in modernizing legacy systems into microservices. I've also worked with cloud technologies, primarily AWS, but I have some experience with Azure as well. My main motivation for applying to this position is that it seems like a really good opportunity to explore more technologies and contribute what I've learned from my previous experience. I'm excited about the tech stack involved and the potential to grow with newer opportunities this role offers.",
        "shortAnswer": "My name is Susan, and I've been working as a software engineer for about six years now. I have solid experience working on microservices, Java-based web applications, and I've been involved in modernizing legacy syste...",
        "category": "Technical",
        "tags": [
          "AWS",
          "Microservices"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-could-you-dive-in-a-little-bit-into-what-you-re-currently-wo",
        "prompt": "Could you dive in a little bit into what you're currently working on at USAA?",
        "answer": "I'm currently working on a migration project at USAA. We have a legacy portal hosted on a platform, and we're breaking it down into a microservices-based architecture and deploying it to AWS. I've been involved in designing microservices, creating design documents, making architectural improvements, and gathering both functional and non-functional requirements. Once that's done, I develop the code and also work on the deployment to AWS using our CI/CD tool. Two services I recently completed include the Experience API, which fetches entitlements for the frontend and controls what widgets and components the user can view, and the Maintenance API, which handles user profile preferences. My primary tech stack is Java with Spring Boot. We use AWS ECS for containerized architecture, AWS Lambda for event-based systems, AWS S3 for storage, and AWS RDS for the database. That's an overview of what I've been working on.",
        "shortAnswer": "I'm currently working on a migration project at USAA. We have a legacy portal hosted on a platform, and we're breaking it down into a microservices-based architecture and deploying it to AWS. I've been involved in des...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "AWS",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-what-has-been-one-of-the-most-interesting-projects-you-have-",
        "prompt": "What has been one of the most interesting projects you have worked on, and what made it interesting?",
        "answer": "One of the most interesting projects I worked on was the orchestration aspect at USAA - specifically, how different APIs were managed. We had Spring Cloud Gateway acting as our API gateway, and although it seemed simple initially, it actually did a lot of processing. It took in requests, transformed payloads, applied routing logic, and proxied them to appropriate hosts. What made this interesting was that each device type - iPhone, Android, web applications - had its own version, and each handled over 500-600 API calls. This orchestration layer had to ensure that request and response manipulations happened correctly and that it stayed highly available at all times. Any change made to one version could potentially impact others, so everything had to be done carefully. It was a surprisingly complex and fascinating system to work on.",
        "shortAnswer": "One of the most interesting projects I worked on was the orchestration aspect at USAA - specifically, how different APIs were managed. We had Spring Cloud Gateway acting as our API gateway, and although it seemed simp...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-were-you-part-of-a-team-doing-that-orchestration-work-or-wer",
        "prompt": "Were you part of a team doing that orchestration work, or were you primarily responsible for it? Tell us a little bit about the setup at USAA.",
        "answer": "At USAA, we worked as a team on that project. We pulled in a feature that lasted for about six months, and during that time, we focused on building the API gateway. It was a collaborative effort, not just an individual task. I worked alongside other engineers within the same Agile team, and we all contributed to different parts of the gateway setup and enhancements.",
        "shortAnswer": "At USAA, we worked as a team on that project. We pulled in a feature that lasted for about six months, and during that time, we focused on building the API gateway. It was a collaborative effort, not just an individua...",
        "category": "Behavioral",
        "tags": [
          "Microservices",
          "Agile"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-did-you-operate-as-an-agile-team-for-that-project",
        "prompt": "Did you operate as an Agile team for that project?",
        "answer": "Yes, I was part of the Agile team. We followed Agile methodologies throughout the project lifecycle. Our team had regular ceremonies like daily huddles, and we worked in sprints, which helped us manage and deliver the features in an organized way.",
        "shortAnswer": "Yes, I was part of the Agile team. We followed Agile methodologies throughout the project lifecycle. Our team had regular ceremonies like daily huddles, and we worked in sprints, which helped us manage and deliver the...",
        "category": "Behavioral",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-did-you-ever-have-a-time-where-you-were-able-to-take-ownersh",
        "prompt": "Did you ever have a time where you were able to take ownership of a project or at least a part of a project? If so, tell us about that and what the outcome was.",
        "answer": "Yes. Recently, I took ownership of the maintenance and modernization of the Experience API. At USAA, we were modernizing the account and user profile management systems. I led the migration of the Maintenance API, where I started by defining the domain and segregating responsibilities. I gathered functional and non-functional requirements, created documentation, and got reviews and approvals from the architects. After that, I moved on to developing and deploying the new service. One of the key outcomes was that I created a modernization report that served as a guide for others in the team. It helped other engineers to follow through and modernize their services by referring to the documentation I had prepared. So, it became a sort of blueprint others could build upon.",
        "shortAnswer": "Yes. Recently, I took ownership of the maintenance and modernization of the Experience API. At USAA, we were modernizing the account and user profile management systems. I led the migration of the Maintenance API, whe...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-you-mentioned-creating-that-path-for-others-to-follow-can-yo",
        "prompt": "You mentioned creating that path for others to follow. Can you talk more about the team collaboration during that effort? How did you share that with your team, and was it well received?",
        "answer": "So, we worked as a part of a joint team that included five engineers, a Product Owner, and a Scrum Master. We met daily for huddles, and once I completed the initial work on the modernization report, I gave a demo to the team. They were excited to see the outcome. Even before finishing the work, I did peer programming sessions with some teammates to walk through the solutions I was implementing. Personally, I believe that collaboration among teammates is essential, especially when there's enough time and bandwidth. Working together promotes better, more effective applications. We also follow good collaborative practices like code reviews and peer programming sessions as needed. In my opinion, team collaboration is really important both for team building and ensuring the quality of development work.",
        "shortAnswer": "So, we worked as a part of a joint team that included five engineers, a Product Owner, and a Scrum Master. We met daily for huddles, and once I completed the initial work on the modernization report, I gave a demo to...",
        "category": "Behavioral",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-have-you-ever-had-a-situation-where-another-team-member-wasn",
        "prompt": "Have you ever had a situation where another team member wasn't doing their share of the work? If so, how did you handle it?",
        "answer": "Yes, there have been times when teammates were falling behind on their tasks. When that happens, I usually offer help if they are stuck on something technical. If it's a technical issue, I try to give them technical details or explanations. If it's non-technical, I've created smaller sub-tasks from their main task to make it easier for them to complete. This way, they can complete those smaller parts step by step and build toward the bigger goal. Rather than making it discouraging, I try to motivate them and help them progress through smaller, manageable chunks.",
        "shortAnswer": "Yes, there have been times when teammates were falling behind on their tasks. When that happens, I usually offer help if they are stuck on something technical. If it's a technical issue, I try to give them technical d...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-have-you-ever-had-to-explain-a-very-technical-or-complex-pro",
        "prompt": "Have you ever had to explain a very technical or complex problem to a non-technical person? If so, tell us about that situation and how you approached it.",
        "answer": "Yes, that situation does come up from time to time. One example was when I was working on the Spring Cloud Gateway. The architecture behind it is pretty complex. I had to explain how our Spring Cloud Gateway solution helped with routing issues we were facing. So, to make it understandable, I used an analogy. I compared the gateway to a hotel front desk - it takes a guest's information and then routes them to the correct room, restaurant, or gym. Similarly, the Spring Cloud Gateway receives requests, processes or modifies them, and then routes them to the appropriate backend service. Using this analogy really helped the non-technical stakeholders visualize what was happening under the hood. I usually come up with such analogies beforehand, especially when I know I'll be talking to a business executive or someone without a technical background.",
        "shortAnswer": "Yes, that situation does come up from time to time. One example was when I was working on the Spring Cloud Gateway. The architecture behind it is pretty complex. I had to explain how our Spring Cloud Gateway solution...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-what-legacy-software-or-technologies-have-you-worked-with-an",
        "prompt": "What legacy software or technologies have you worked with, and have you been involved in converting or maintaining any of them?",
        "answer": "Yes, I have been involved in modernizing legacy applications at USAA. I've worked on both maintaining existing legacy code and migrating those systems into more modern platforms. While I don't have direct hands-on experience with IBM WebSphere, I believe some of the applications I worked on were deployed using WebSphere, and I contributed to moving those applications over to modern cloud platforms.",
        "shortAnswer": "Yes, I have been involved in modernizing legacy applications at USAA. I've worked on both maintaining existing legacy code and migrating those systems into more modern platforms. While I don't have direct hands-on exp...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-have-you-worked-with-azure-in-addition-to-aws",
        "prompt": "Have you worked with Azure in addition to AWS?",
        "answer": "Yes, I've worked with Azure in the past. I created Azure Functions and also used services like Azure Blob Storage and Azure Service Bus to trigger those functions. So, I do have experience working with Azure, although AWS is what I've used more extensively in my recent projects.",
        "shortAnswer": "Yes, I've worked with Azure in the past. I created Azure Functions and also used services like Azure Blob Storage and Azure Service Bus to trigger those functions. So, I do have experience working with Azure, although...",
        "category": "Technical",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-tell-me-about-your-experience-developing-or-working-with-ci-",
        "prompt": "Tell me about your experience developing or working with CI/CD pipelines. What did your role look like, and what would your ideal pipeline be?",
        "answer": "In my recent project at USAA, I worked on setting up our CI/CD pipeline. We used Jenkins, and to start off, we created a seed job, which is responsible for generating other Jenkins jobs. This seed job was configured using a Ruby script with its own parameters and configurations. For deployment, we created shell scripts to provision services using CloudFormation templates. We used abstractions of those templates to streamline the provisioning process. Once the seed job was ready, our application pipeline was up and running. The pipeline had multiple stages, and each stage triggered a specific shell script for that task. So yes, I've had a hands-on role in building and deploying CI/CD pipelines to the AWS cloud.",
        "shortAnswer": "In my recent project at USAA, I worked on setting up our CI/CD pipeline. We used Jenkins, and to start off, we created a seed job, which is responsible for generating other Jenkins jobs. This seed job was configured u...",
        "category": "Platform",
        "tags": [
          "AWS"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-what-is-your-experience-with-automated-testing",
        "prompt": "What is your experience with automated testing?",
        "answer": "I've done a lot of automated testing. Recently, we incorporated Cucumber for end-to-end testing, which I've been actively working with. Apart from that, I regularly write unit tests using JUnit as part of my development workflow. We also do integration testing using Spring Boot Test within our applications. During the testing stage in our CI/CD pipeline, we integrate Cucumber tests to validate the application behavior. So yes, I have hands-on experience with different types of automated testing, and testing is a core part of the development process on my team.",
        "shortAnswer": "I've done a lot of automated testing. Recently, we incorporated Cucumber for end-to-end testing, which I've been actively working with. Apart from that, I regularly write unit tests using JUnit as part of my developme...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Testing"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-was-front-end-development-your-main-focus-or-was-it-back-end",
        "prompt": "Was front-end development your main focus, or was it back-end? And what kind of front-end work have you done with Angular and RxJS?",
        "answer": "I'm primarily a back-end engineer, but I've also worked on front-end tasks when needed. For example, I developed a full feature for a task catalog that included read and update views. It was a standalone Angular component where users could view catalogs and edit them based on tags. So while the back-end is my main area of focus, I have done front-end development with Angular and RxJS when the project required it. In this particular case, I handled both the UI behavior and the data handling logic tied to the back-end services.",
        "shortAnswer": "I'm primarily a back-end engineer, but I've also worked on front-end tasks when needed. For example, I developed a full feature for a task catalog that included read and update views. It was a standalone Angular compo...",
        "category": "Frontend",
        "tags": [
          "Angular"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-what-kind-of-api-management-tools-have-you-used-are-you-fami",
        "prompt": "What kind of API management tools have you used? Are you familiar with things like MuleSoft?",
        "answer": "We don't use MuleSoft, but we manage APIs using Spring Boot and Spring Cloud Gateway. For API documentation, we use Swagger. So, in our case, the API clients are set up through the Spring ecosystem. Whenever we need to make downstream API calls, we route through our Spring Cloud Gateway, which handles traffic based on the provided URI. That's been the main API management workflow I've worked with.",
        "shortAnswer": "We don't use MuleSoft, but we manage APIs using Spring Boot and Spring Cloud Gateway. For API documentation, we use Swagger. So, in our case, the API clients are set up through the Spring ecosystem. Whenever we need t...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "Motivation, Role Fit, And Behavioral Questions-how-have-you-handled-client-security-between-your-applicatio",
        "prompt": "How have you handled client security between your application and the REST API?",
        "answer": "Client security is one of the top priorities in our system. We use Spring Security for managing application-level security. We have an identity provider that validates the user's credentials - such as username and password - and, once validated, a token is returned. This token is then used to enforce role-based access control when making downstream calls. Additionally, some of our clients use API keys, so we also implement API key-based security depending on the requirement. This ensures secure communication between the application and the APIs. What kind of tasks do engineers at Navy Federal usually get involved in aside from their coding work? Answer (Rob): Aside from actual coding, there are quite a few management-type tasks we deal with. For example, we need to go through approval processes, submit tickets to gain access to specific services, and sometimes participate in vendor analysis to figure out how a product might integrate with our existing systems. We're also going through an Agile transformation, so learning and adapting to new Agile ceremonies has been part of our day-to-day. While there is still a lot of coding to do, a big part of the current focus is on analyzing vendor products and preparing for their integration. Could you tell us what you like most about working at Navy Federal? Answer (Scott): You mentioned earlier that you heard good things about the work culture here, and that's absolutely true. One of the main reasons people stay at Navy Federal is the mission-driven work. We're here to support our members, many of whom are military families, similar to USAA. We take pride in helping them with their financial needs, and that gives a real sense of purpose to our work. Even if your work doesn't always directly touch the members, it contributes in some way to their experience. That sense of impact is really motivating. What do you personally like most about working at Navy Federal? Answer (Rob): For me, it's very rewarding because I'm a 20-year Navy veteran and currently a Navy reservist, so I actually see young sailors in my unit benefiting from Navy Federal's services. Knowing that the work I do directly supports them keeps me motivated and excited to come to work every day. It's a special kind of fulfillment that goes beyond just writing code. Answer (Mariela): Honestly, when I joined, I didn't realize how big Navy Federal really was. You hear \"credit union\" and don't expect it to be this large. But what's kept me here is absolutely the culture. Compared to other companies I've worked at, the team environment here is very strong. We're now in a hybrid setup - some days on-site, some remote - and I think that shift also reflects our commitment to a healthy work-life balance. That's something I truly appreciate. What are the next steps in the interview process? Answer (Mariela): This was your first interview, and we've just started interviewing other candidates as well. We're hoping to fill the position quickly, possibly make a decision within the next couple of weeks. If you think of any other questions after today's conversation, feel free to reach out to Kristen Klein, who you've already been in contact with about this role. She'll walk you through the rest of the hiring process once we finish the interview rounds.",
        "shortAnswer": "Client security is one of the top priorities in our system. We use Spring Security for managing application-level security. We have an identity provider that validates the user's credentials - such as username and pas...",
        "category": "Security",
        "tags": [
          "Spring Boot",
          "Security",
          "Agile"
        ],
        "answerLengthLabel": "Long answer"
      }
    ],
    "defaultOpen": false
  },
  {
    "id": "session-16",
    "sessionLabel": "Session 16",
    "title": "GEICO Experience, Security, And Agile Delivery",
    "summary": "Canonical data transformation, security controls, Angular work, and delivery practices.",
    "focusAreas": [
      "GEICO",
      "Security",
      "Angular",
      "Agile"
    ],
    "questions": [
      {
        "id": "GEICO Experience, Security, And Agile Delivery-tell-me-a-little-bit-about-what-you-ve-been-working-on-with-",
        "prompt": "Tell me a little bit about what you've been working on with Geico.",
        "answer": "Yeah, sure. So basically at GEICO, we've been working on a data transformation platform, where we take data from a non-standard format. We have clients in different states who store their data in different file formats. We take that data and convert it into a canonical JSON format, basically a standardized data format. Initially, when GEICO started, they didn't have a standardized approach, so all the representatives were still using legacy formats - mostly comma-separated files. For modernization, we didn't want the representatives to change how they store data, but we designed a centralized system that can take care of ingesting those different formats. About 20-30% of my initial work was focused on the ETL process, but after that, I worked a lot on microservices to expose the flat file data through a microservices-based architecture. These microservices were consumed by clients and customers. When customers log in to their portal, they can see their information - what coverage they have, what benefits they are eligible for, and so on.",
        "shortAnswer": "Yeah, sure. So basically at GEICO, we've been working on a data transformation platform, where we take data from a non-standard format. We have clients in different states who store their data in different file format...",
        "category": "Technical",
        "tags": [
          "Microservices",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-who-is-consuming-those-microservices",
        "prompt": "Who is consuming those microservices?",
        "answer": "So, yeah, the Geico Portal is the consumer of those microservices. But we are primarily a backend team. Before our layer, there's an orchestration layer that takes care of all the platforms. We serve all types of devices, but the orchestrator handles the incoming requests from different devices. We are abstracted from knowing exactly which device or platform is sending the request. That orchestration layer, built using Spring Cloud Gateway, works like a reverse proxy. It determines what service needs to be called and routes the request accordingly. When we onboard our microservices, we do it through the orchestrator, and our services use headers and correlation prefixes to understand the origin of the request. Regardless of the source, we respond as long as the request is valid.",
        "shortAnswer": "So, yeah, the Geico Portal is the consumer of those microservices. But we are primarily a backend team. Before our layer, there's an orchestration layer that takes care of all the platforms. We serve all types of devi...",
        "category": "Technical",
        "tags": [
          "Spring Boot",
          "Microservices",
          "Kafka"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-tell-me-a-little-bit-about-how-you-handle-security",
        "prompt": "Tell me a little bit about how you handle security.",
        "answer": "Alright, so talking about how we handle security, all our requests go through Spring Security. We use JWT tokens in the authorization header and validate them using Spring Security. A JWT token contains three parts - the header, claims, and signature. We validate the signature to ensure it's not tampered with. Once verified, we check the claims to identify the user's role. Depending on the role, certain endpoints may or may not be exposed. Apart from that, there's a device authenticity check done before our layer. It checks the device metadata to verify if the GEICO app version is valid, whether the device OS is jailbroken or not, and other similar checks. This is handled using a different kind of token, called an authenticity token. Additionally, we also have input validations in place.",
        "shortAnswer": "Alright, so talking about how we handle security, all our requests go through Spring Security. We use JWT tokens in the authorization header and validate them using Spring Security. A JWT token contains three parts -...",
        "category": "Security",
        "tags": [
          "Spring Boot",
          "Security"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-how-did-you-make-sure-that-the-request-that-you-were-servici",
        "prompt": "How did you make sure that the request that you were servicing was allowed to be requested by whoever was requesting it? Like, for instance, how did you make sure that I didn't somehow, you know, grab Postman or something and try to get your information out of Geico by changing query parameters or calling a service with different parameters on it?",
        "answer": "Yeah, so basically, we validated the authorization header. The authorization header contains claims that are tied to your identity provider. When a user logs into the GEICO portal, it connects with the identity provider, which verifies the username and password. After successful validation, the provider injects the authorization token into every request. So, for every request that comes in, we validate that token and make sure it matches the identity of the user who is making the request.",
        "shortAnswer": "Yeah, so basically, we validated the authorization header. The authorization header contains claims that are tied to your identity provider. When a user logs into the GEICO portal, it connects with the identity provid...",
        "category": "Data",
        "tags": [
          "Security"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-did-you-filter-it-to-make-sure-that-any-information-being-se",
        "prompt": "Did you filter it to make sure that any information being sent back was only for that particular user?",
        "answer": "Yes. For filtering, we used certain user identifiers. We do not expose GET endpoints for just any user. For instance, there are different roles such as customer, representative, or admin. Only someone with admin access could view everything. Customers are restricted to viewing only their own policy information, benefits, or progress data, typically identified by an ID. So yes, we filtered data based on the user's role and identity, and only allowed access to what they were authorized to view.",
        "shortAnswer": "Yes. For filtering, we used certain user identifiers. We do not expose GET endpoints for just any user. For instance, there are different roles such as customer, representative, or admin. Only someone with admin acces...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-did-you-do-any-frontend-work-as-well-i-assume-you-ve-got-som",
        "prompt": "Did you do any frontend work as well? I assume you've got some Angular, CSS, Ajax experience?",
        "answer": "Yes, I did frontend work. One of the recent things I worked on was building an Excel export service. In the portal, we deal with a lot of tabular data, and the task was to create a frontend service that could export table data into an Excel sheet. It wasn't tied to one specific table - this was a shared service that could be used with any Angular component displaying tabular data.",
        "shortAnswer": "Yes, I did frontend work. One of the recent things I worked on was building an Excel export service. In the portal, we deal with a lot of tabular data, and the task was to create a frontend service that could export t...",
        "category": "Frontend",
        "tags": [
          "Angular"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-tell-me-a-little-bit-more-about-what-that-data-is-like-what-",
        "prompt": "Tell me a little bit more about what that data is like - what is that sheet having in it, what kind of type of data and how is it used?",
        "answer": "So this was more of an abstraction, not tied to a specific table. The service was designed to take any table present in the frontend and convert it into an Excel sheet when needed. It's a shared Angular service that different components could use. For example, when a user logs into the portal, they see a list of benefits and coverage details in a table format. We created a button that allows exporting this table to Excel. To be more specific, one use case involved a coverage list that included the coverage ID, type, and expiration date. On that Angular component, we would inject the Excel service, define the metadata like the headers, and bind the component data as the input for the Excel file. When the user clicks the export button, the data is passed to the service, which generates the Excel sheet.",
        "shortAnswer": "So this was more of an abstraction, not tied to a specific table. The service was designed to take any table present in the frontend and convert it into an Excel sheet when needed. It's a shared Angular service that d...",
        "category": "Technical",
        "tags": [
          "Angular",
          "System Design"
        ],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-would-it-be-fair-to-call-it-like-a-frontend-component-as-opp",
        "prompt": "Would it be fair to call it like a frontend component as opposed to a service?",
        "answer": "So the component is specific to each use case, but the Excel export logic is implemented as a shared service that multiple components use. It was written in Angular, and it allowed us to handle this functionality consistently across different components.",
        "shortAnswer": "So the component is specific to each use case, but the Excel export logic is implemented as a shared service that multiple components use. It was written in Angular, and it allowed us to handle this functionality cons...",
        "category": "Frontend",
        "tags": [
          "Angular"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-did-you-work-on-any-of-the-frontend-pages-or-things-or-was-y",
        "prompt": "Did you work on any of the frontend pages or things, or was your frontend work mostly like libraries, helper services, or shared services?",
        "answer": "No, I also worked on frontend components. One of the recent ones I worked on was for a self-service portal. This portal allowed users to submit service requests. I used Angular's reactive forms to collect the input data from users. Once the form was filled out, we would ingest that data and send it via a RESTful API to the backend. So yes, I worked directly with Angular reactive forms to build components for self-service functionality within the GEICO portal.",
        "shortAnswer": "No, I also worked on frontend components. One of the recent ones I worked on was for a self-service portal. This portal allowed users to submit service requests. I used Angular's reactive forms to collect the input da...",
        "category": "Frontend",
        "tags": [
          "Angular"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-tell-me-what-you-think-is-difficult-about-working-in-an-agil",
        "prompt": "Tell me what you think is difficult about working in an agile environment.",
        "answer": "Yeah, so I would say one of the difficulties I've faced in an Agile environment is dealing with frequent changes. Since Agile encourages adapting to change quickly, it sometimes becomes difficult to plan long-term and still meet deadlines. It requires you to constantly think on your feet and adapt quickly. These ongoing changes in requirements can be a bit overwhelming at times and make it harder to keep things on track. So yeah, that's definitely one of the challenges I've noticed while working in Agile.",
        "shortAnswer": "Yeah, so I would say one of the difficulties I've faced in an Agile environment is dealing with frequent changes. Since Agile encourages adapting to change quickly, it sometimes becomes difficult to plan long-term and...",
        "category": "Behavioral",
        "tags": [
          "Kubernetes",
          "Agile"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-what-are-some-of-the-difficulties-you-run-into-doing-that-li",
        "prompt": "What are some of the difficulties you run into doing that? Like getting your merge requests approved, or figuring out how to incorporate into the right branch and keeping track of what branch you should be working on, and getting them into a shared dev or staged environment?",
        "answer": "Yeah, so if you don't have a clear branching strategy, it can get difficult. I've seen conflicts happen when multiple developers are working on the same feature or area. At GEICO, we had a preset branching strategy. We all worked off the same development branch, and each developer worked on their own story branches. Once a story was completed, we'd deploy to dev and quickly validate the changes. This helped keep the dev environment always open and functional for everyone else. So having that strategy in place really helped us manage merge requests and deployments better.",
        "shortAnswer": "Yeah, so if you don't have a clear branching strategy, it can get difficult. I've seen conflicts happen when multiple developers are working on the same feature or area. At GEICO, we had a preset branching strategy. W...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-were-individual-developers-responsible-for-deploying-to-the-",
        "prompt": "Were individual developers responsible for deploying to the dev environment, or was that something you managed as the lead?",
        "answer": "The individual developers deployed to the dev environment themselves.",
        "shortAnswer": "The individual developers deployed to the dev environment themselves.",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-did-you-ever-have-someone-deploy-the-wrong-code-or-forget-to",
        "prompt": "Did you ever have someone deploy the wrong code or forget to merge with the latest branch and end up breaking something?",
        "answer": "Yes, that did happen sometimes. Developers would forget to pull the latest changes or fetch updates into their local branch, and that would cause issues. But when something broke, we'd start seeing errors, and the first thing we'd do was communicate within the team. We'd check what was recently deployed, figure out whether it was a new defect or something was missed. We'd use Git compare to check what changes went in and identify the cause. So yes, it happened occasionally, but team communication helped us resolve those issues quickly.",
        "shortAnswer": "Yes, that did happen sometimes. Developers would forget to pull the latest changes or fetch updates into their local branch, and that would cause issues. But when something broke, we'd start seeing errors, and the fir...",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-how-about-keeping-track-of-all-the-administrative-stuff-were",
        "prompt": "How about keeping track of all the administrative stuff - were you using Rally or JIRA?",
        "answer": "We were using JIRA.",
        "shortAnswer": "We were using JIRA.",
        "category": "Technical",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-how-about-the-administrative-pieces-of-keeping-jira-up-to-da",
        "prompt": "How about the administrative pieces of keeping JIRA up to date - like making sure that stories are in the right status, milestones are related to the right stories, or epics, and people are putting in actuals and estimates?",
        "answer": "Yeah, sure. So in our setup, story estimation and updates were handled by the developers. During planning sessions, we made sure all the stories had proper estimates and acceptance criteria. We also broke down stories into subtasks, which helped in tracking progress through burndown charts, like the ones used by most Scrum teams. Epic management was handled by the product manager. So it was a combined effort between the developers and the product team. As developers, when we worked on tasks, we'd log how many hours we spent on certain stories or subtasks, and we used that for tracking and reporting in JIRA.",
        "shortAnswer": "Yeah, sure. So in our setup, story estimation and updates were handled by the developers. During planning sessions, we made sure all the stories had proper estimates and acceptance criteria. We also broke down stories...",
        "category": "Technical",
        "tags": [
          "Agile"
        ],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-do-you-have-any-questions-for-me-or-is-there-anything-i-can-",
        "prompt": "Do you have any questions for me, or is there anything I can answer about the team or the opportunity?",
        "answer": "Yes, thank you so much for the opportunity today. It was really nice talking to you. So the first thing I'd like to ask is, what do you think is the most important skill that a developer should have for this particular role? What do you think is the most important skill that a developer should have for this particular role? Answer (Interviewer): Yeah, good question - thanks for asking. So, I'm kind of an old-school developer. I started coding back in fourth or fifth grade on an Apple 2e. Over the years, what I've learned - both as an engineer and as a manager - is that the most important skill is problem solving.",
        "shortAnswer": "Yes, thank you so much for the opportunity today. It was really nice talking to you. So the first thing I'd like to ask is, what do you think is the most important skill that a developer should have for this particula...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Detailed answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-a-lot-of-people-focus-on-specific-languages-tools-or-technol",
        "prompt": "A lot of people focus on specific languages, tools, or technologies, and those are good - they help you get started faster and speak the same language as your team. But being able to think logically, to figure things out when they break, to know nothing on the computer is magic - that's crucial. Whether your internet goes out, your power's down, or you're tackling a user story with unknowns, you need to be able to break it down, debug, and understand the code. That kind of logical mindset and self-sufficiency is what sets apart great developers.",
        "answer": "Thank you so much. Yeah, I agree. I think one of the most important skills a developer needs is that eagerness to learn and the ability to solve any kind of issues you come across. That's actually one of the things I enjoy most about this career - figuring things out and overcoming challenges. What are the next steps for the hiring process? Answer (Interviewer): Good question again. So the next step is for you to speak with the lead for the team that we're hiring for. She's on vacation for the next three weeks, but she's working a few days during that time. I believe she'll be available next Wednesday and the following Thursday, so I'll coordinate schedules with her and the other folks here. You'll likely have an interview with two or three people, including a lead and a senior team member. They'll go deeper technically than I did, possibly even have you do a coding exam, and it should last around an hour. Would it be a virtual interview, or will it be in person? Answer (Interviewer):",
        "shortAnswer": "Thank you so much. Yeah, I agree. I think one of the most important skills a developer needs is that eagerness to learn and the ability to solve any kind of issues you come across. That's actually one of the things I...",
        "category": "Behavioral",
        "tags": [],
        "answerLengthLabel": "Long answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-that-s-a-good-question-too-ideally-we-d-like-to-bring-candid",
        "prompt": "That's a good question too. Ideally, we'd like to bring candidates in on-site, maybe for a quick 30-minute conversation with some of the team. But the main technical interview with the two leads will definitely be virtual, especially since one of them is in India. Around the holidays, many folks are traveling, so we'll try to make it work virtually if needed.",
        "answer": "Okay, I mention that because during our standup today, my manager added me to production support, so coming onsite around the 23rd might be difficult for me. Answer (Interviewer):",
        "shortAnswer": "Okay, I mention that because during our standup today, my manager added me to production support, so coming onsite around the 23rd might be difficult for me. Answer (Interviewer):",
        "category": "Frontend",
        "tags": [],
        "answerLengthLabel": "Short answer"
      },
      {
        "id": "GEICO Experience, Security, And Agile Delivery-understood-we-ll-figure-it-out-we-ve-had-a-few-folks-who-had",
        "prompt": "Understood - we'll figure it out. We've had a few folks who had trouble coming in too, so if needed, we'll keep it virtual. You're local, right?",
        "answer": "Yes, I live in Roma right now. Answer (Interviewer): Okay, that's not too far - just a bit of a drive. We usually do two days onsite and three days remote, so it's a flexible setup.",
        "shortAnswer": "Yes, I live in Roma right now. Answer (Interviewer): Okay, that's not too far - just a bit of a drive. We usually do two days onsite and three days remote, so it's a flexible setup.",
        "category": "Technical",
        "tags": [],
        "answerLengthLabel": "Short answer"
      }
    ],
    "defaultOpen": false
  }
];
