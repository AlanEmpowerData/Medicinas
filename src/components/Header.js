import React from 'react';
import './Main.css';
import logo from '../images/Logo.jpg';

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.callbackUpdate(event.target.value);
  }

  handleClick(event) {
    this.props.callbackSearch(event.target.value);
  }

  render() {
    return (
      <div className="Header">
        <img src={logo} alt="logo" className="Header-logo" />
        <p></p>
        <input name="searchText" id="searchText" type="text" className="Header-box" value={this.state.value} onChange={this.handleChange} />
        <button className="Header-submit" onClick={this.handleClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
        <select className="Header-combobox">
          <option value="0">Ordenar por...</option>
          <option value="1">Precio</option>
          <option value="2">Cantidad</option>
          <option value="3">Cercania</option>
        </select>
      </div>
    );
  }
}
