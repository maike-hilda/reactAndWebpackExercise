import React from "react";

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    // this method needs to be kept in place
    handleAddOption = (event) => {
        // no page refresh
        event.preventDefault(); 
        // target is the form, the name of the input is "option"
        // remove all extra spaces (also works for "    " type inputs)
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error /* can also say just error */ }));

        if (!error) {
            event.target.elements.option.value = "";
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}