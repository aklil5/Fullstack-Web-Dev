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