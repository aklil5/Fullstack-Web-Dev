P I
React States

1. Defn of state: whats the difference between state and props?
2. Steps to add and use states in your class based component
3. Updating state values in your class based component: handling events in react
4. Updating state values in your class based component: setState() method
5. React component's lifecycle methods (class based)

---
# 1. Defn of state: whats the difference between state and props?
## Whats state?

- state is a JS Object that holds info that INFLUENCES THE OUTPUT OF RENDER. 


- the main difference between props and States is that:
    - Props get passed to the component
        - just like parameters in a funciton
    - Props is used to pass data from parent component to a child component. 
        - props cant be changed by the component receiving the props
            - it can be done technically. But its prone to error

    - State 
        - an internal data storage mechanism within a React component
        - Represents the DYNAMIC VALUEs that can change over time (event)
        - used to store and manage data that can be modified within a component
        - when the state changes, React re-renders the component to reflect those changes

    
    State is managed within the component itself
        - Just like VARIABLE in a function
        - States can be changed by the component
        - when the state CHANGES, React RE-RENDERS the component to reflect those changes. 

- By default a COMPONENT HAS NO STATE

- State is used when we want to keep track of info during multiple renderings of a component
    - The component itself can create, update and use state


---
# 2. Steps to add and use states in your class based component

## Class based States

- while using Class based components, we create states
states are intialized inside the constructor function of the Component class.


INITIALIZING STATE

    constructor(){

        // super refers to the paarent class constructor. (React Component)
        super();
        this.state = {
            name: "Abe",
            bootCamp: "Evang",
            state1: 0,  // value can come from props 
            // state 3: this.props. if its a child component 
            state2: "Hello There"
        };
    }

    render() { 
        return (
                <div>
                     <h1>This is where you call the state</h1>   
                     <h1>To call the state: {this.state.state2}</h1>

                    <h1>Initializing State Example</h1>
                    <h2>{this.state.name}</h2>
                     {/* giving state to another component - child component if one value of the state is changes - reat re-render  */}
                    <AnotherComponent someproperty={this.state.state2}/>

                </div>
        )

    }


YOU CAN ALSO DEFINE UR STATE OUTSIDE THE CONSTRUCTOR FUNC
state - {
    name: "Abebe",
    group: 1,
};
render(){
    return()
}

OR FROM PARENT TO CHILD
PARENT
<AnotherComponent someproperty="aklilu" batchNo="Sept 2024"/>

CHILD
    - one [as props]
    and another using [this.props]

```
1. constructor(props) { // data from parent accepted through props  
        // here props is used as state and is mutable 
        super();
        this.state = {
            batch: props.batchNo,
            simpleText: "Hello World!!",
        }
    }

2. <h3>{this.props.someproperty}</h3>
```



---

# 3. Updating state values in your class based component: handling events in react

in the component write:
ReactEvent() {
        alert("You clicked me??")
    }

<button onClick={this.ReactEvent}> Click me </button>


<!-- IF ITS OUTSIDE THE CLASS - write it as a function -->
function ReactEvent(){
    alert()
}
<button onClick={ReactEvent}> Click me </button>


---
USING ARROW FUNCTION AND NOT USING INSIDE CLASS
// increment = () => {
    //     // But if arrow function is used, it auto binds it, so no need to bind it manually.
    //     console.log("You clicked Add 1");
    //     console.log(this.state.counter);
}

PREFERRED
<button onClick={this.increment}>Add 1</button>


USING NORMAL FUNCTION 
increment() {
        // if normal function used instead of arrow function, it requires binding in the constructor function in order to update the state.
        console.log("You Clicked Add 1??");
        console.log(this.state.counter);
}

YOU THEN NEED TO BIND IT INSIDE THE CONSTRUCTOR
```
this.increment = this.increment.bind(this);
```








# 4. Updating state values in your class based component: setState() method

- used to update the state of a component [setState()]

- the main job of the setState method is to enqueue changes to the state of a component. Once it enqueue the changes, it then tells React that this component and its children need to be re-rendered with the updated state.

- Means, the setState() method is a request to React rather than an immediate command to update.
- React may delay to execute the command based on multiple factors.
    One factor can be other requests it received prior to the current request.

        - Requesting [this.state] right after calling setState() method, might not work as expected. 
        - React could still be working on other requests.
        - you need to make sure to wait until you are sure React has received the request re-rendered the component with the updated state.

    - The way to avoid this error is to use a **CALLBACK FUNCTION that guarantees to fire after the update is made**.
        - If you need to set the state based on the previous state, use the updater argument

        - Simply stated, the [updater function] is a function thats passed to the setState method whith the updated value of the state and props 

NOTE: When you change a state using the setState() method, React updates all the child components that receive the changed state.


```
constructor() {
        super();
        this.state = {
            counter: 0,
            status: "Even",
        }
    };

    // incrementCounter = () => {
    //     // Incorrect way (could lead to stale state) **USING OBJECT
    //     this.setState({ counter: this.state.counter + 1 })

    //     // This may not reflect the correct status
        //  it wont wait until the number is change to state the status to Even or Odd usually showing incorrect status 
    //     if (this.state.counter % 2 == 0) {
    //         this.setState({ status: "Even" })
    //     } else {
    //         this.setState({ status: "Odd" });
    //     }
    // }

    incrementCounterWithCallback = () => {
        // Correct way **USING CALLBACK
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
            status: prevState.counter % 2 == 0 ? "Odd" : "Even",
        }))
    }
    // changing to even or odd based on the PREVIOUS NUMBER 
    // ORRR

    incrementCounterWithCallback2 = () => {
        this.setState((prevState) => ({counter: prevState.counter + 1}))

        this.setState((prevState) => ({
            status: prevState.counter % 2 == 0 ? "Even" : "Odd",
        }))
    }

    decrement = () => {
        this.setState((prevState) => ({ counter: prevState.counter - 1}));
    };

    reset = () => {
        this.setState(() => ({counter: 0 }))
    };

  render() { 
    return (
      <div>
        <h1>Updating State</h1>

        <h2>{this.state.counter}</h2>
        <h3>{this.state.status}</h3>

        <button onClick={this.incrementCounterWithCallback}>Add 1</button>
        <button onClick={this.decrement}>Minus 1</button>
        <button onClick={this.reset}>reset</button>
        {/* <Reset resetBtn={this.reset}/> */}

        <hr />

      </div>

      
    )
  }
```




















# 5. React component's lifecycle methods (class based)

## React Life Cycle Methods
- Mounting - Birth of your component
    - whenver component is added and rendered on DOM
    - at this stage, the [componentDidMount()] method gets called

Update - Growth of your component
    - when the state of the component changes
    - everytime the state of the component changes or the component is updated, the [componentDidUpdate()] method gets invoked

Unmount - Death of your component
    - whenever the component added on DOM is removed
    - the [componentWillUnmount()] method is called just before the component is unmounted and destroyed














===

===
P2

React Hooks

1. What are React hooks, why do we use them and what rules should we follow when using them?
2. Basic React hooks: steps to implement useState() hook
3. Basic React hooks: using useState() to change a state's value based on previous state value
4. Basic React hooks: steps to implement useEffect() hook
5. Basic React hooks: steps to implement context API and useContext() hook

---
# 1. What are React hooks, why do we use them and what rules should we follow when using them?

## What are Hooks
- Functions that let you "[hook into]" React state and lifecycle features from functional components. 

- they let yo use state and other React features without writing a class.

    - There are Built in and Custom Hooks

## Why Hooks
- Even though states can be handled in the class based state management system that already exists, there are a couple of things React Hooks tries to improve

1. Complex components become hard to understand
    - Hooks let you split ONE COMPONENT INTO SMALLER FUNCTION based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.

Ex: In class based states
    - Data fetching usually happens in the componentDidMount or componentDidUpdate Life cycle methods
    - Event listening usually happens inside componentDidMount and event un-subscription usually happens in componentWillUnmount.

    * Since we use the life cycle methods to organize states, it is not possible to break components into smaller functionality based pieces. Hooks lets you do that.

2. "Classes" and "this" keyword are confusing to understand for some people
    - Hooks let you use more of React's features without classes.

    - React provides a few built-in hooks like useState.
    You can also create your own Hooks to reuse stateful behavior between different components

3. Its 100% backward compatible (previous versions)

    - Hooks dont introduce a new concept. They just provide a more direct API to the things that yo ualready know.


## Rules to follow
- Only Call Hooks from React [Component] Functions
    - Means do not call them from any regular js function but only from React component function

    function calculate() {
        const [count, setCount] = useState(0)  // this is wrong
        return count;
    }

- You must import Hooks from react.
    - import { useContext } from 'react';

- Only Call Hooks at the Top Level Component
    - means don't call hooks inside loops, conditions or any nested function.
    - By following this rule, you ensure that Hooks are called in the same order each time a component renders.

    function ExampleComponent() {
        const [ count, setCount ] = useState(0); // Correct: Called at the top level

        for (const item of items){
            // loop logic  
        }
    }


### Custom Hooks
    - a js function that starts with "use"
    - Allow us to reuse stateful logic between components.

    function useCustomHookk(){
        const [ state, setState ] = useState(initialValue);
        <!-- Additional logic -->
    }




# 2. Basic React hooks: steps to implement useState() hook
useState()
    - is a Hook
    - we call it inside a function component to add some local state to it.

- it allows us to track state in a function component.
    - State generally refers to data or properties that needs to be tracked in an application.



- What can State Hold
    - to keep track of:
        - strings,
        - numbers,
        - booleans,
        - arrays,
        - objects and any combination of these

Steps followed in implementing it using CLASS based states:
    - Create class based component
    - Initialize the state to 0 inside of the constructor
    - Create a method to change the state value when run
    - Finally attach the function with an event. In our case the button click event.

    Eg: ClassStateExample/Counter UsingClassState


Steps to implement it using state hooks
    - create functional component
    - Now we need a way to access the react state from a functional component. The [useState] method lets you to "Hook into" the react state
        - To be able to do that, we **import the useState** named export from React on to your component
        - Then you use the method


    - useState returns a PAIR:
        - [the current state value] and
        - [A funciton that lets you update to (State Updater)]


```
import React, { useState } from 'react'

export default function CounterHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(22)
  const [fruit, setFruit] = useState("banana")
  // count will have the initial value
  // setCount method - to change the value of count

  console.log(useState(0))   // its an array with initial value: 0 and an updating function  - so we destructure it to count, setCount or other, setOther
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)
      }>
        Count: {count}
      </button>
      <br />
      {age}
      <button onClick={() => setAge((age) => age + 1)}>Age</button>
      
    </div>
  )
}

```


-   Update State
    - to update our state, we use our state updater function
    Eg:
        <button type="button" onClick={() => setColor("blue)}>Blue</button>

    NOTE:
        we should NEVER directly update state
            Eg. color = "red" is NOT ALLOWED








# 3. Basic React hooks: using useState() to change a state's value based on previous state value
 
 - If you come across a scenario where state has to depend on the previous value, its always a good ida to pass the value in a callback function as oppose to directly passing the state variable.
    - This forces that the state is updated before it is executed.
    - For the similar reason we faced while using the setState method in Class based state

    E.g CounterIncrementDecrement








# 4. Basic React hooks: steps to implement useEffect() hook

    - Use of React useEffect Hooks
        - the useEffect Hook allows you to perform side effects in your components.
        - Some examples of side effects are:
            - fetching data,
            - directly updating the DOM
            - setting up timers.


- Steps to use useEffect() hook & syntax
    - Import useEffect from React
    - Call the method and pass a callback function with anything you want to change (be side effect)

    - Syntax
        - useEffect(<funciton>, <dependency>)
            - useEffect accepts two arguments. The second argument is optional.

            1. No dependency passed:
                useEffect(()=> {
                    <!-- Runs on every render -->
                })

            2. An empty array:
                useEffect(() => {
                    <!-- Runs only on the first render -->
                }, [])

            3. Props or state values:
                useEffect(() => {
                    <!-- Runs on the first render -->
                    <!-- And any time any dependency alue changes -->
                }, [prop, state])


    - Effect Cleanup (component unmount)
        - Some effects require cleanup to reduce memory leaks.
        - Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
        - We do this by including a return funciton at the end of the useEffect Hook.

        - Eg:
            useEffect(() => {
                <!-- effect -->
                return () => {
                    <!-- cleanup Eg. to stop a timer-->
                }
            }, [<dependency>])









- As we have said before, the goal of this hook is to make the life cycle methods we know on class components availabe in side of functional components

- Lets start by building a simple counter that update the title bar of a page

    Eg. Components /UseEffect/ UsingClassLifeCycleComponent.js

- Now let's re-implement this using the useEffect book
    - The useEffect hooks takes a function as an argument and an array of state variables to watch before running the function. This function gets executed after EVERY RENDER of the component.
        - Means it checks if the state in the watch list is updated.

    - It just saves us writing the code that updates the title on to two different places. (Under componentDidMount and componentDidUpdate)

    - Since the useEffect hook is implemented inside of the functional component, we can access all the states of the component directly.


useEffect funciton takes TWO ARGUMENTS
```
import React, {useState, useEffect } from 'react'

export default function UseEffect() {

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(45);

    // takes two arguments
    // when the 2nd argt is changed, the 1st argument runs
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

  return (
    <div>
      <h1>Use Effect</h1>
      <div className='valueHolder'>
        <h3>The value of count is: {count}</h3>
        <h3>The value of age is: {age}</h3>
      </div>

      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  )
}
```





------

# 5. Basic React hooks: steps to implement context API and useContext() hook


## Whats context API OR (Global State)
    Question
    ********
    - How to you send data to child components?
        - By passing them as props
    - How about if we want to pass to grand child component?
        - By passing data to the child first and then the child passes it to the grand child as props
    - How about if we directly want to pass data to the grand child component without going through the child
        - Thats when we use "[context]"


Definition 1:
    Context provides a way to pass data through the component tree without having to pass props down manually at every level

Definition 2:
    - The Context API is a component structure provided by the React framework, which enables us to share specific forms of data (data that can be considered global) across all levels of the application. It's aimed at solving the problem of PROP DRILLING.
        - PROP DRILLING (also called "THREADING") refers to the process you have to go through to get data to parts of the React Component tree.


Steps to use context API
************
Step 1
    - [CREATE THE CONTEXT] using the React.createContext() method

`export const MyContext = React.createContext();`

---


Step 2
    - [PASS THE CONTEXT VALUE] on the PARENT component using context provider (Is called providing)
        - To do this, wrap the provider component with the context you created.
        - Provide the value you want to pass to the child inside of your context
        - Export your context to be consumed by the child component

BEFORE
```
function App() {
    return { 
        <div> 
            <Component 1 /> 
        </div>
    }
}
```

NOW
```
function App() {
    return{
        <div> 
            <MyContext.Provider value={"Abebe beso bela"}>
                <Component1 />   // component1 and its children 
            </MyContext.Provider>
        </div>
    }
}
```



Step 3
    - [CONSUME THE CONTEXT] in the child component using the render pattern
    - The consuming part is what the useContext hook tries to simplify

Eg: Use context to consume data from te app component down on the child component

---
```
function Component3(){
    return(
        <div>
            <MyContext.Consumer>
                {(data) => {
                    return (
                        <div>
                            <h1>The last child</h1>
                            <p>Using context API: {data}</p>
                        </div>
                    )
                }};
            </MyContext.Consumer>
        </div>
    )
}
```

 


---
How to use useContext
*********
Step 1 and Step 2 remain the same with above. The last step is what differs. We can also divide the last step into three steps.

To use useContexr,
    Step 1:
        You need to import useContext first just like the other hooks we have seen
    
    Step 2:
        Import the context

    Step 3:







theres 
Provider
C onsumer

