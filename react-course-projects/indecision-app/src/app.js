// stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options : []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));

            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('saving data');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions () {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (optionToRemove !== option))
        }));
    }

    handlePick() {
        const options = this.state.options;
        const randomNum = Math.floor(Math.random() * options.length);
        const option = options[randomNum];
        alert(option);
        console.log(randomNum);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render () {

        const title="Indecision";
        const subtitle = "!!Put your life in the hands of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                 />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'some default!'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?</button>
        </div>
    );
};


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please enter options to begin.</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        option={option}
                        handleDeleteOption={props.handleDeleteOption} 
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {"Option: " + props.option}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            >
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component{
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = "";
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));