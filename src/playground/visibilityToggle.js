class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.state = {
            visibility: false
        };
        this.text = "The surprises you see when you stop hiding"
    }
    changeState() {
        this.setState( prevState => {
            return {
                visibility: !prevState.visibility
            };            
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.changeState}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility && <p>{this.text}</p>}
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById("app"));