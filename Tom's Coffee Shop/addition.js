class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = { num1: 1, num2: 1, response: "", score: 0 }
        }
        render() {
            return ( < div >
                <
                div > { this.state.num1 } + { this.state.num2 } < /div> <
                input onKeyPress = { this.inputKeyPress }
                onChange = { this.updateResponse }
                value = { this.state.response }
                /> <
                div > Score: { this.state.score } < /div> <
                div > You wrote: { this.state.response } < /div> < /
                div >
            );
        }
        inputKeyPress = (event) => {
            if (event.key === "Enter") { const answer = parseInt(this.state.response); if (answer === this.state.num1 + this.state.num2) { this.setState(state => ({ score: state.score + 1 })); } else {} }
            updateResponse = (event) => { this.setState({ response: event.target.value }); }
        };
        ReactDOM.render( <
            App / > , document.querySelector("#app"));