import React,{Component} from 'react'
import Square from './Square'
import Board from './Board'
import calculateWinner from './calculateWinner'
import NameForm from './NameForm'

class Game extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    if(localStorage.getItem("val1")==''|| localStorage.getItem("val2")=='')
    {
      alert("Plase Enter your Names")
    }
    else {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });

    var flag=0;
    var win=calculateWinner(squares);
    let text="Winner Winner Chicken Dinner ";
    if(win=='X')
    alert(text+localStorage.getItem("val1")+"!");
    else if(win=='O')
    alert(text+localStorage.getItem("val2")+"!");
    else if(this.state.history.length==9 && !win && !flag)
      {    alert("It's a Draw!"); flag=1}
  }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    var flag=0;
    let status="X moves first!";
    if (winner && winner!='Draw') {
      if(winner=='X')
      {
      let x=localStorage.getItem("val1");
      status = "Winner is " + x;
      }
      else if(winner=='O') {
        let y=localStorage.getItem("val2");
        status = "Winner is " + y;
      }
    }
    else {
      if(localStorage.getItem("val1")!='' && localStorage.getItem("val2")!='')
      {
      if(this.state.xIsNext)
      {status=localStorage.getItem("val1")+"'s turn";}
      else {
        status=localStorage.getItem("val2")+"'s turn";
      }
    }
  }
  if(!winner && this.state.history.length === 10){
     status = "It's a Draw!";
  }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );

  }
}
export default Game
