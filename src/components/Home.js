import React from 'react';
import { browserHistory } from 'react-router';
import './Home.css';
import logo from '../images/Logo.jpg';

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.onNavigateMain = this.onNavigateMain.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onNavigateMain(event) {
    if(this.state.value !== ""){
      browserHistory.push({
        pathname: '/Main',
        state: { searchText: this.state.value }
      });
    }
    else{
      alert('Colocar algo que buscar ');
    }
  }

  render() {
    return (
      <div className="Home">
        <img src={logo} alt="logo" className="Home-logo" />
        <p></p>
        <input name="searchText" id="searchText" type="text" className="Home-box" value={this.state.value} onChange={this.handleChange} />
        <button className="Home-submit" onClick={this.onNavigateMain}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
        <p className="Home-text">
          Busque su medicina
        </p>
      </div>
    );
  }
}
