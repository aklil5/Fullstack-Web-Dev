1. intro: why are we learning ReactJS
2. Whats ReactJS
3. How does ReactJS work? What makes React faster?
4. Generating HTML using vanilla JS vs generating HTML using ReactJS
5. Getting started with React devt: installing React, configuring npm, using create-react-app
6. Getting started with React Devt: Understanding the file structure of a react app
7. Whats JSX (Javascript XML)?

---

# 1. intro: why are we learning ReactJS
- react has easier learning curve
- no need to re-learn the programming lang

- it has high demand
    - efficient performance
    - reusable UI components
    - can create large web apps that can change data, without reloading the page
    - react can be used to create mobile apps (React Native)



React - is a library



---

# 2. Whats ReactJS

MVC model - Model, view, controller
View
    client
        public
        src
            .env, gitignore, package.json, README.md

Controller
    controllers
        jokers.js

Model
    models
        jockers.js

Theres also
    db
    node_modules
    routes

- React works on the View part




---

# 3. How does ReactJS

- there are 2 react libraries we use to build UI components
    - react.js
    - react-dom.js

- React Library - to create UI and manage/track changes

- ReactDOM Library - render UI in the browser.


- what makes React efficient is the fact that it uses the React Virtual DOM (ReactDOM) to handle changes on DOM


**ReactDOM (Virtual DOM)**
- react creates a replica of the real DOM which is called the Virtual DOM/ReactDom.

- it compares the current ReactDOM with the previous one and identifies the difference. This is called [diffing]

- once it identifies the d/ce, it goes back to the Real DOM and only updates the part that is changed.



---

# 4. Generating HTML using vanilla JS vs generating HTML using ReactJS

## Vanilla JS
```
// // a place to append the HTML elements we create
const containerElement = document.querySelector("#fromjs")

// // list of items to create
const listOfItems = ["Abebe", "Kebede", "Almaz"]

// // create the ul element first
const ulElement = document.createElement("ul")

// // create li elements for each items
listOfItems.forEach((item) => {
    const listElement = document.createElement("li");
    listElement.innerText = item;
    ulElement.appendChild(listElement);
})

// console.log(ulElement);

// // Append the created element on the HTML body
containerElement.appendChild(ulElement);
```

==here the entire dom is being updated, not just the first line==

## React JS
include the scripts of react and react-dom libraries to the html.

```


```


---

# 5. Getting started with React devt: installing React, configuring npm, using create-react-app

create-react-app script
    - for jsx to be understood

Pre-requirements: - install NODE, and npm and npx comes with it

1. create-react-app
```
    npx create-react-app abebe
```
// - after entering our project folder oct 22 - we find everything configured
<!-- npx is not globall -->

```npm start```

(This is what we used to use BEFORE)
OR

## 2. Vite
https://vitejs.dev

==
```
npm create vite@latest (my-app-name)/my-batch
```
to install bootstrap 
```
npm install react-bootstrap bootstrap
```

===



the commands
```
cd my-batch
npm install
npm run dev   - to RE-RUN
```
are automatically completed


if you need to re-initialize vite, use"
`npm run dev`

- You can remove the contents inside "App.jsk" and write what you want

batch update, reconcile
web pack, 
---

# 6. Getting started with React Devt: Understanding the file structure of a react app
- ur main index.html file 
- node_modules folder
- package.json and package-lock.json files
- src folder
    - working file - where we write our react code
    - index.js file (main.jsx file on Vite)
        - the entry point that renders your componenets and renders them on the output div (#root)
    - App.js file
        - where we actually write our components




---

# 7. Whats JSX (Javascript XML)?
- its an extension to the js lang syntax. Its used to describe what the UI should look like.
- XML that fulfills rules of HTML.

- its used to write an XML like code for elements and components.

**Why we need it**
- main purpose is to make your react code simpler and cleaner.
    - it allows us to write HTML elements is JS and place them in the DOM without any [createElement()] and/or [appendChild()] methods.

    - To make your browser understand what you write using modern additions like JSX, you need help to transpile these code to the vanilla JS the browser understands.
        - For JSX, we usually use Babel.


**Whats XML**
- its a markup language just like HTML
a way of tagging data in an organized format.
- it dont have pre-defined tags, means the tags are created by the writer.
- The only thing it has is a set of formatting rules.

**Rules**:
- all XML must have a ROOT ELEMENT
- all tags must be closed (or self closed)
- all tags must be properly nested
- tag names are case sensitive
- tag names cant contain spaces

Example of XML code:
```
    <classroom>
        <student country="USA">
        </student>

        <student country="Eth">
        </student>
    </classroom>
```


JSX Example:
```
    <div>
        <ul>
            <li>Almaz</li>
            <li>Kebe</li>
            <li>Challa</li>
        </ul>
    </div>
```

- Even though JSX is very similar to HTML, notice these difference:
    **Any HTML tag/property name thats also a keyword in JS, is replaced by an alternative name**

    1. class property in HTML is replaced by [className] is JSX
    2. for is replaced by [htmlFor]


```
    <>
    </>
```
- is called FRAGMENT, used to [[avoid the css effect]] of some tags like div and section

```
  <StrictMode>

  </StrictMode>,
```
- to show us any errors by running strictly, but when deployment it will be problem as it re-renders (reloads the entire website again and again)











==============================
===
REACT COMPONENT

==
1. Intro to react components: why do we build Apple website using react components?
2. React components: defn and types
3. Function based components: steps to create functional components
4. Building Apple website using React (functional component)

---
# 1. Intro to react components: why do we build Apple website using react components?

# 2. React components: defn and types
## What are Components?
- smallest building block.
- Components are INDEPENDENT and reusable bits of code. They serve the same purpose as [JS functions], but work in isolation and return a react Element via a render function.

- Componenets let you split the UI into independent, reusable pieces, and think about each piece in isolation.

## Conventions on components
    - Component name must [start in uppercase]
    - Keep one component in one file
    - Keey the file and component/function NAME THE SAME

## Types of Components
- There are two types of React components
    - Functional components &
    - Class based components



- Everytime you want to include js in your code use {}
    - {console.log()}



---

# 3. Function based components: steps to create functional components
## Functional component
- is just a [js function which takes props as an argument] and [returns a react element]

**Props**
- Props is short for properties
- in React, Props are used for [passing data from one component to another]. 

- For now, lets focus on what the function does.
    - it returns a REACT ELEMENT 


**What is a React Element?**
- It is an [object] that virtually describes the DOM Nodes that a component represents.

Eg. Rewrite the App function in the index.js file


 
function Abebe(Props) {
    return (
        <h1>Hello</h1>
    ) //this is what makes is a component
}



## Writing functional component
Steps
1. Create a new file for our component
    - the convention is to keep just one component in a file and make the function and file names to be the same

2. import all the necessary files and library to the file

3. write the function

4. Export it
    - you need to do this to allow this function to be able to be imported somewhere else in your application.

    Syntax `export default [Name of function];`

5. To import this function later, you just need to use the import keyword, specify the file path and give it a variable name to store the returned React element.
    - You can then use the variable in your code


- install this Extension
`ES7 React/Redux/GraphQL/React-Native snippets`
and
`JS JSX Snippet`
 
---




---
---

## React Component
- the smallest building block
- self contained
- reusable

### Class based
```
import React, { Component } from 'react'
export default class App extends Component {
    render(){
        return (
            <div>App</div>
        )
    }
}
```

### Function based
```
import React from 'react'
function App() {
    return (
        <div>App</div>
    )
}

export default App
```

## Key terms
- Component
- Type of component (difference)
- Component naming
- Reusability of components

## Tools to install
- React Dev Tools - Browser extensoin
    - it will add [[components]] section when we inspect our chrome web 
- ES& React/Redux/Graph/R-N - VsCode ext.


---
npm run dev - to restart

**To change the port**
- go to vite.config.js
    `server: {port: 5000}



---
---
---


- you can clear out the assets, App.css, App.jsx, index.css - since we dont need most of it

- You can then create a folder [Components] in the [src] folder
    - you can then create a [Header] folder and inside it a Header.jsx component

- since we have the extension, we can just type [rfc] ((React Function Component)) and it will create a function component in our file.

`import React from 'react'`
    - this is nott needed since its mentioned in the main.jsx.

```
export default function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}
```

|
```
function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}
export default Header;
```



- **you can then import it and add it to the App.jsx
`import Header from './components/Header'
**


<Header />


- Componentoch App.jsx lay collect argen then <App />n [[main.jsx]] lay enterawalen
    - already tetertual


- install the [Path-intellisence]] Extension
    - helps when you import files
    - use Ctrl + Space 

- after adding you html
    - change class to [className]
    - change img to be [self-closed]
    - import the img links at the top - as a variable . then use the var name in place of the img links.
        src = {var}
        - you also have to change the src link to access the images 

- you then change the folder of the images to ""src/assets""
- copy and paste [css] folder in the [src] folder

- since the css of the entire page is written on it - import it to [App.jsx]
```    
    import "./css/bootstrap.css
    import "./css/style.css
```

- you can have different css for different sections of the page

- you can add the common styles to the [App.css]

- You can then add the font awsome link in your ""[index.html]"" page.

- The background images may not load
    - so go to the css and find the bg image and chaneg its src link since we've hanged the location of the css folder. 


==IN GENERAL IMG
- if the img is in the index.html -> declare it to a var and include that var in the src={} in the bracket
- if the img is inserted as a background - just change the url to the img  in [style.css] since it might be changed

---
==ALWAYS when
- you add another section - SectionOne to the Components Folder and 
    - then import it to app.jsx
    - then add it inside App() function
        <Section />






---

# 4. Building Apple website using React (functional component)










