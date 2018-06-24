console.log("app.js is running");

const app = {
    title: "Indecision",
    subtitle: "Put your life in the hands of a computer.",
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault(); // stops full page refresh
    const option = event.target.elements.option.value; // target is the form, the name of the input is "option"
    
    if (option) { //note that "" is falsy
        app.options.push(option); // add item to our options array
        event.target.elements.option.value = "";
        render();
    }

    console.log("Form submitted");
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// reuse this when rendering to ReactDOM
const appRoot = document.getElementById("app");

// this one would be better as (function render() {//stuff})();

const render = () => {
    // JSX - JavaScript XML (JS syntax extension provided by react)
    // see div --> need a single root element --> wrapper div
    const template = (
        <div> 
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                /* the key prop is necessary for react to store everything in order */
                app.options.map(option => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div> // wrapper div
); // the parentheses are not necessary, formatting purposes only
    // renders to <div id="app"> in index.html
    ReactDOM.render(template, appRoot);
};

render();

//<!-- reference the function rather than calling -->
//<form onSubmit={onFormSubmit}></form>

// const user = {
//     //name: "Maike",
//     age: 29,
//     //location: "LA"
// };

// console.log(user.name);

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } 
// }


// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
