class Vis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: true
        };
        this.onToggle = this.onToggle.bind(this);
    }
    onToggle () {
        this.setState((prevState) => {
            return {
                visibility: !(prevState.visibility)
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visiblity Toggle 2</h1>
                <button onClick={this.onToggle}>{!this.state.visibility ? 'Show' : 'Hide'}</button>
                {this.state.visibility && <p>Here is some text you can now see!!</p>}
            </div>
        );

    }
}

ReactDOM.render(<Vis />, document.getElementById('app'));

// const onToggle = (e) => {
//     toggle = !toggle;
//     render();
// }

// let toggle = true;
// const messages = ['Show', 'Hide'];

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>
//             {toggle ? messages[0] : messages[1]}
//             </button>
//             {toggle && (
//                 <div>
//                     <p>Hey, these are some details you can now see.</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// const appRoot = document.getElementById('app');

// render();