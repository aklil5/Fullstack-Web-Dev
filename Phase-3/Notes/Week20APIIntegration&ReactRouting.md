P1

1. Introduction to API: what do we mean by API?
2. Whats JSON? Why is JSON format preferred to transmit data in web applications?
3. API key: definition and steps to creating a Youtube API Key
4. How do we call/request a JSON data from Youtube?
5. Demo on how to use the JSON data we obtained from YouTube API in our react component



--------------------

# 1. Introduction to API: what do we mean by API?

## Whats API/REST API - Application Programming Interface
**************
API
    - Application Programming Interface
    - An API is a set of [programming contract/rules that enables data transmission] between one sw product and another.
    - API is a sw intermediary that allows two applications to talk to each other.

TYPES OF APIS
    - Private
        - APIs are only used within an organization (backend with frontend).
        - Apps are mostly built for company employees.
        - Common use cases are the integration of company systems/ apps or development of new systems using existing resources.
 
    - Partner
        - Openely promoted but available for known business partners.
        - End customers or business users are potential target audiences for such apps.
        - SW instructions between two organizations is the popular use case for these APIs.

    - Public or external
        - Available to any third-party developers.
        - Apps with public APIs are mostly designed for end customers.
        - This API release policy allows for increasing brand awarness and fostering external innovation.
        - Public APIs can be open and commercial.



API DOCUMENTATION
    - API documentation is technical content that documents the API.
    - It includes instructions on how to effectively use and integrate the API.
    - If you are providing the API, then you would also have a set of rules on how to use and integrate the API.
    - There are no standard way ot making API requests, therefore use the API doc every time.


----

- Interface is the Keyword in here. An API is an interface between an application and developers who are trying to use the output of the application.

- If you are an owner of an application, and you are willing to open up some of the data in your database to external developers, you don't want to provide them a direct access to the Database. What you prefer to do is, create an interface that returns some pre-selected list of things as per the developers request.

- It would be the application owner's responsibility to write the interface code (API) that returns the requested data. Depending on how the API is written, the writters need to provide instructions on how to make the requests. There is no standard way of making API requests.

- We will see Example on how to use one of Google's API









# 2. Whats JSON? Why is JSON format preferred to transmit data in web applications?

## Whats JSON
    - stands for JS Object Notation
    - lightweight data interchange format used for storing and exchanging data between a server and c client.
    - Independent of any programming lang
    - Common API output in a wide variety of apps

    - in the same category as XML, JSON is also a format for storing and transporting data.

    - The reason why JSON is preferred by most apps as a way of sending data is its [simplicity to understand by the user of the data].

## JSON Format:
    - JSON is very similar with how JS structures objects

    - Because of this similarity, a JS program can easily convert JSON data into native JS objects.

    Eg:
    {
        "students":[
            {"firstName":"abe", "lastName":"daru"},
            {"firstName":"kebe", "lastName":"raji"},

        ]
    }

    - MAIN DIFFERENCE - KEYS ARE IN QUOTATION"""



XML
<video>
    id
    title
    thumb
    link
    description
</video>











# 3. API key: definition and steps to creating a Youtube API Key

API Key
    - is a simple encrypted string that identifies an application without any principal.
    - is a unique identifier used to autheticate a user, developer, or calling program to an API.
    - They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.

- API Key is like a user [name and password] for your request. 
- Most API providers require you to get an API key just for the sake of avoiding scammers.

- Heres how you can get an API Key to use Google APIs

STEP 1:
    Go Google Console   https://console.cloud.google.com
    - Login

STEP 2:
    Create a project
        - Look on the top bar wher you can select or create a new project
 
STEP 3:
    Create an API key
        - go to API and Services section
        - go to the library section
        - scroll down til you find the Youtube section
        - Click on YouTube Data API v3
        - Enable your API
        - create credentials
            - select Youtube Data v3 API
            - Web browser
            - Public data access
            - Copy your API key










# 4. How do we call/request a JSON data from Youtube?

Documentation
    - https://developers.google.com/youtube/v3

The main link ypu use to communicate with google APIs
    https://www.googleapis.com/youtube/v3

    <!-- BASE URL -->

    <!-- This is NOT COMPLETED YET -->


- To construct your Youtube API request


    https://www.googleapis.com/youtube/v3/search?key=AIzaSyAmCMFeeg9zUt9EaId3m1B8yk8Aew8qBOk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6

    /search?
    key={YOUR_API_KEY}
    &channelId={channel_id_here}
    &part=snippet,id
    &order=date
    &maxResults={number}

To get the channel ID
    - if the channel has a unique channel name set, you can then make an API request using the channel name and get the channel ID

    Format:
    https://www.googleapis.com/youtube/v3/channels?key={YOUR_API_KEY}&forUsername={CHANNEL_NAME}&part=id

    https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAmCMFeeg9zUt9EaId3m1B8yk8Aew8qBOk&forUsername=Apple&part=id

we get the id
UCE_M8A5yxnLfW0KghEeajjw

- Another resource to get channel ID
    https://commentpicker.com/youtube-channel-id.php





Final API request URL
    - to test if the URL is working, just copy and paste it on your browser.


# 5. Demo on how to use the JSON data we obtained from YouTube API in our react component

 




























=========
---------
P II

1. Limitations of React without React Router
2. Main parts of React Router
3. Non existing routes and Nested routes
4. iPhone Page - Products
5. Single Product
6. Additional Tips - fetching data from JSON file, React Bootstrap, Deployment

---











