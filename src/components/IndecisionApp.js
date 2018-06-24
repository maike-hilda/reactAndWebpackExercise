import React from "react";
import AddOption from "./AddOption"; // don't need .js extension
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

// React Component is a class; it gives us all features of React
// requires "render" to be defined
export default class IndecisionApp extends React.Component {
    state = {
            options: [],
            selectedOption: undefined //for modal
    };
        
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };
    handlePick = () => {
        console.log("in");
        const rand = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[rand];
        // use set state to change selectedOption
        this.setState(() => ({ selectedOption: option } ));
    };
    handleAddOption = (option) => {
        if (!option) {
            return "Enter valid value to add item"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists"
        } // adding else or not doesn't change anything
        // don't want to push to prevState, we wouldn't want to change prevState
        this.setState(prevState => (
            {options: prevState.options.concat(option)}
        ));
    };
    handleClearSelectedOption = (event) => {
        this.setState(() => (
            {
                selectedOption: undefined
            }
        ));
    }

    // fire lifecycle method, need exact spelling
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                 this.setState(() => ({
                options: options
                }));
            }   
        } catch (event) {
            // Do nothing at all 
        }
        console.log("componentDidMount");
    }
    // fires when states update
    // prevous state and prevous update
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log("saving data")
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
        console.log("componentDidUpdate");
    }
    // when switching pages i.e. when a given component disappears 
    // (here that would be IndecisionApp)
    componentWillUnmount() {
        console.log("compoentWillUnmount");
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                    <div className="container">
                        <Action 
                            hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                        <div className="widget">
                            <Options 
                                options={this.state.options}
                                handleDeleteOptions={this.handleDeleteOptions}
                                handleDeleteOption={this.handleDeleteOption}
                            />
                            <AddOption handleAddOption={this.handleAddOption}/>
                        </div>
                    </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}



