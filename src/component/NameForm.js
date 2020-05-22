import React from 'react';
import ReactDOM from 'react-dom';
let hello="Please Enter Your Names:";
let hello2="";
class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      p1: '',
      p2: '',
    };
  }

  myChangeHandler = (event) => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({[nam]: val});
    hello="Hello ";

    }
  render() {
    localStorage.clear();
    localStorage.setItem("val1",this.state.p1);
    localStorage.setItem("val2",this.state.p2);
    if(this.state.p2!='')
    {
      hello2="and "+this.state.p2+" !";
    }
    return (
      <form className="nameform">
      <div><strong className="high">{hello} {this.state.p1} {hello2}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <label className="lab">Dark Mode: </label>
  <input type="checkbox" onClick={()=>document.body.classList.toggle("dark-mode")}  />
  </div>
  <br/>
      <label>Player X: </label>
      <input
        type='text'
        name='p1'
        onChange={this.myChangeHandler}
      />
      &nbsp;&nbsp;&nbsp;
      <label>Player O: </label>
      <input
        type='text'
        name='p2'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }

}
export default NameForm
ReactDOM.render(<NameForm />, document.getElementById('root'));
