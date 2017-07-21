class GameOfChance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            randomNumber : 1,
            count : 0,
            wins : 0,
            loss : 0
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        var num = Math.random();
        if(num >= 0.5){
            this.setState(
                {
                    randomNumber : num,
                    count : this.state.count + 1,
                    wins : this.state.wins + 1,
                }
            );
        }
        else{
            this.setState(
                {
                    randomNumber : num,
                    count : this.state.count + 1,
                    loss : this.state.loss + 1, 
                }
            );
        }
    }
    render(){
        return(
            <div>
                <Button click = {this.handleClick}/>
                <Results val = {this.state.randomNumber} counter = {this.state.count} wins = {this.state.wins} loss = {this.state.loss}/>
            </div>            
        );
    }
}

class Results extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps){
        console.log('receiving props');
    }


    shouldComponentUpdate(nextProps,nextState){
        console.log('Checking')
        return true; 
    }
    render(){
        console.log('Rendering Component');
        var numValue = this.props.val;
        return(
            <div>
                {(numValue >= 0.5) ? (<h1>You Win!</h1>) : (<h1>You Lose!</h1>)}
                <h3>Turns : {this.props.counter}</h3>
                <h4>Wins : {this.props.wins}</h4>
                <h4>Loss : {this.props.loss}</h4>
                <h4>Win-Ratio {this.props.wins / ((this.props.counter) || 1)}</h4>
                <h4>Loss-Ratio {this.props.loss / ((this.props.counter) || 1)}</h4>
            </div>
        );
    }
}

function Button(props){
    return <button onClick = {props.click}>Play Again</button>
}

ReactDOM.render(<GameOfChance/>,document.getElementById('root'));