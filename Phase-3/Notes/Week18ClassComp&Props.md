P1
REACT COMPONENTS (CLASS BASED)

---
ES6 Additions you need to know
    1. Creating objects in JS using constructor function
    2. Traditional way of property inheritacne in JS (using prototype object)
    3. ES6 way of property inheritance in JS (concept of class)
    4. ES6 way of property inheritance in JS (concept of class inheritance)
    5. Array and object destructuring
6. Class based components: converting functional components into class components
7. React prop


---
# 1. Creating objects in JS using constructor function
whats constructor function? (revision)
- we can create js object in multiple ways
    - simplest - using object literal notation

`const chala = {}`

- another way - using constructor function
    - its a blueprint that lets us create an object

- The conventional name for a constructor function starts with a capital letter. That is just to differentiate it from a normal function


**Constructor function**
```
function PersonF(name, age){
    this.name = name;
    this.age = age;
}
```


**Object created using the constructor function**
let studentOne = new EvangadiStudent("A lmaz", 1)


console.log(studentOne);



# 2. Traditional way of property inheritacne in JS (using prototype object)
JS Inheritance
- ability of extending one objects behavior into another object
    - there will be base and derived 
- its done through prototypes


Object Prototypes
- to ADD PROPERTIES/METHODS  to a constructor function

- Js is sometimes referred as a prototype based language.
- Reason -> every JS object has a property called "[prototype]" thats used to keep track of relations between objects.

- if we want to add a method into our Object, we can directly add a method into the prototype of the JS object we already defined.
    Eg. Add getAge method on the prototype

```
var Abe = new Person("Abebe", 19)
Person.prototype.getName = function() {
    return this.name;
}

console.log(Abe)
```

[getName] is added to the prototype


- using [.call] to inherit



---

# 3. ES6 way of property inheritance in JS (concept of class)
- ES6 implements a class based object oriented approach

- instead of creating a constructor function, we write a class.

Eg.
```
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // you can add methods in here now

    getName(){
        return "The name of this person is: " + this.name
    }
}
- use keyword "class" to create class
- always add a method named constructor()






---

# 4. ES6 way of property inheritance in JS (concept of class inheritance)

Class based Inheritance
- if we want to create another class that we want to inherit the properties of the classes we created above, we can use the "[extends]" keyword.
We then use another keyword called super to inherit the properties defined in the parent class


```
class Student extends Person{
    constructor(grade, dept, name, age){
        super(name, age);
        this.grade = grade;
        this.dept = dept;
    }
}

const someStudent = new Student("A", "CS", "Abebe", 33)
```




---
   
# 5. Array and object destructuring
Destructuring - is a js expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## Array Destructuring
let a = [10, 20, 88]

let [b, c] = [10, 20];
console.log(b )



---

## Object Destructuring
const user = {
    id: 42,
    is_verified: true,
}


const { id, is_verified } = user; 




---

# 6. Class based components: converting functional components into class components

- is a JS class that extends React.Component.

## Steps to convert
1. Replace the function keyword with class
2. import "React and "Component" from react
`import React, { Component } from "react";
3 use "extends" keyword to inherit from "Component"

4. define the [render] method in your subclass. That method renders the react component you want to return

4. if you are passing props, make sure to use the key word "[this]" to specifically identify your current class

```
class App extends Component {
    render() {
        return (

        )
    }
}

```


# Child Components
- Real applications are a combination of multiple components working together to create the intended output.
- In order to do that, we set up an entry point for our entire application. In our boiler plate setup it is the App ffunction inside teh App.js file.


- Technically, we can build an entire website with in a single component. But, one of the main reasons why we use react is to give us the ability of organizing parts of the website as components.

- Usually, we use our App function as a place where we list all of our other components.
Ex: App.js


- Recreating Apple's website using class based components.


---
 


# 7. React prop
 Props is short for properties

 - it is what makes us to be able to create reusable components
    - Reusable component as in, we create a template component with properties in it.
    - It is just like creating a function that takes an argument. 
    - Different components will have their own specific properties. 
    - We use the concept of props to assign the specific property value for the individual component.

## Steps to use props
1. Define your component

2. In places that you want to use a unique value that is going to be provided during the instantiation of the component, use a place holder prop that matches the name of the prop that will be provided later on.

3. Instantiate the component and provide the props
    - React will pass this value to the component that uses the prop before rendering the component. 


- The use of props
    - Props make us to be able to create dynamic reusable components.
    - Props are also how you pass data from one component to another, as paramters.

    - NOTE: React Props are immutable. They are read-only! You will get an error if you try to change their value. 



Ex:
    - HeaderLinks.js
    - Fourth.js
    Ex: the Fourth component on the Apple website



```
import { Component } from 'react';

class HeaderLink extends Component {
	render(){
        return(
            <li className="nav-item" >
                <a className="nav-link js-scroll-trigger" 
                href={this.props.linkUrl}>
                    {this.props.linkName}
                </a>
            </li>
        );
    }
}

export default HeaderLink;
```








===
===

P2

PROPS

---
# Props Demo
DYNAMIC CONTENT GOES FROM PARENT TO CHILD


1. Implement props to a simple example - include destructured props


CHILD COMPONENT
export default class Card extends Component {
  render() {
    const {colorNo, name, email, phone} = this.props;
    return (
        <div className={`container ${colorNo}`}> 

        {/* {`//put it in `` template literal since it will only see it as string if inside "" and add {} to help it understand that this is a js code `} */}

            <h3>Evangadi INC.</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phone}</p>
            
        </div>
    )
  }
}



PARENT COMPONENT (App.jsx)
<Card colorNo='' name='' email='' phone=''/>
<Card colorNo='' name='' email='' phone=''/>

<Card colorNo='' name='' email='' phone=''/>

we can call it as many times as we want changing the info inside the vars





2. Collect the data then use map method an dimplement it with props

Collect the data to a js file in an object
let userData = 
export let userData = [
    {
        colorNo:'firstColor',
        name:'Adugna',
        email:'adugna@gmail.com',
        phone:'+123-456-789'
    },
    {
        colorNo:'secondColor',
        name:'Tewedaj',
        email:'tewedaj@gmail.com',
        phone:'+251-456-897'
    },
    {
        colorNo:'thirdColor',
        name:'Biruk',
        email:'biruk@gmail.com',
        phone:'+254-456-897'
    }
]

THE JS FILE SHOULD BE INSIDE [assets]

{userData.map((singleUserData, i) => {
            return (
              <Card 
              key={i}   // to unqiuely identify the data
              colorNo={singleUserData.colorNo} 
              name={singleUserData.name} 
              email={singleUserData.email} 
              phone={singleUserData.phone}
              />
            )
          })}





3. Match the data keys and props - so you an use spread opeartor when mapping


App.jsx

<section className='wrapper'>

          <h1>3. Using destructuring technique</h1>

          <h1>Business Card App (using HTML & CSS only)</h1>


          {userData.map(({colorNo, name, email, phone, group, batch}, i) => {
            return (
              <Card 
              key={i}  // to unqiuely identify the data
              colorNo={colorNo} 
              name={name} 
              email={email} 
              phone={phone}
              group={group}
              batch={batch}
              />
            )
          })}




Card.jsx
- IF YOU WANT A PARTICULAR INFO ONLY ON SOME USERS

render() {
    const {colorNo, name, email, phone, group, batch} = this.props;
    // console.log(this.props);
    return (
        <div className={`container ${colorNo}`}> 
            <h3>Evangadi INC.</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone number: {phone}</p>
            {batch && <p>Batch: {batch}</p>}

            <p>Group: {group}</p>
            
        </div>
    )
  }


