import React from 'react';
import './Main.css';
import {Medicine} from "./Medicine";
import axios from 'axios';

export class GridContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resultSet: [],
      dataLoaded: false,
      searchText: props.searchText,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:57334/Home/getItemByName?_nombre='+this.state.searchText, { crossdomain: true }).then(response => this.setState({resultSet: response.data, dataLoaded: true}));
    this.props.onRef(this);
  }

  doSearchAgain(){
    this.setState({searchText: this.props.searchText});
    this.setState({dataLoaded: false});
    axios.get('http://localhost:57334/Home/getItemByName?_nombre='+this.state.searchText, { crossdomain: true }).then(response => this.setState({resultSet: response.data, dataLoaded: true}));
    this.forceUpdate();
  }

  updateExternalState(_text){
    this.setState({searchText: _text});
  }

  createTable() {
    let table = [];
    var numElements = this.state.resultSet.length;
    var numRows = Math.ceil(numElements / 2);
    var control = 0;
    for (let i = 0; i < numRows; i++) {
      if((control + 2) <= numElements){
        table.push(<tr>
          <td className="GridContainer-column"><Medicine nombreMedicina={this.state.resultSet[control].nombreMedicina} compuestoActivo={this.state.resultSet[control].compuestoActivo} nombreFarmacia={this.state.resultSet[control].nombreFarmacia} latitud={this.state.resultSet[control].latitud} longitud={this.state.resultSet[control].longitud} /></td>
          <td className="GridContainer-column"><Medicine nombreMedicina={this.state.resultSet[control+1].nombreMedicina} compuestoActivo={this.state.resultSet[control+1].compuestoActivo} nombreFarmacia={this.state.resultSet[control+1].nombreFarmacia} latitud={this.state.resultSet[control+1].latitud} longitud={this.state.resultSet[control+1].longitud} /></td>
          </tr>);
        control = control + 2;
      }
      else{
        table.push(<tr>
          <td className="GridContainer-column"><Medicine nombreMedicina={this.state.resultSet[control].nombreMedicina} compuestoActivo={this.state.resultSet[control].compuestoActivo} nombreFarmacia={this.state.resultSet[control].nombreFarmacia} latitud={this.state.resultSet[control].latitud} longitud={this.state.resultSet[control].longitud} /></td>
          </tr>);
        control = control + 1;
      }
    }
    return table;
  }

  render() {
    if ( this.state.dataLoaded ) {
      return (
        <table className="GridContainer-table">
          {this.createTable()}
        </table>
      )
    } else {
      return null;
    }
  }
} 