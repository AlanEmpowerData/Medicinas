import React from 'react';
import {GridContainer} from "./GridContainer";
import {Header} from "./Header";
import { Web3Provider } from 'react-web3';
import './Main.css';

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: props.location.state.searchText,
    };
    this.newSearch = this.newSearch.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  newSearch(_text){
    this.setState({searchText: _text});
    this.gridContainer.doSearchAgain();
  }

  updateText(_text){
    this.setState({searchText: _text});
    this.gridContainer.updateExternalState(_text);
  }

  render() {
    return (
      <div>
        <Header callbackSearch={this.newSearch} callbackUpdate={this.updateText}/>
        <hr className="Divisor"/>
        <GridContainer searchText={this.state.searchText} onRef={ref => (this.gridContainer = ref)}/>
      </div>
    );
  }
}
