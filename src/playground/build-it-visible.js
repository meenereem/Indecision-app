class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            flag: false
        }
    }
    handleToggleVisibility () {
        this.setState((prevState) => {
            return {
                flag: !prevState.flag
            }
        })
    }
    render() { 
    return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{(this.state.flag) ? "hide details" : "show details"}</button>
            {this.state.flag && <p>details yo</p>}
            </div>
    )
}
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let flag = false;
// const showDetails = () => {
//     flag = !flag;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showDetails}>
//                 {flag ? "hide details" : "show details"}
//             </button>
//             {flag && <p>details yo</p>}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();

