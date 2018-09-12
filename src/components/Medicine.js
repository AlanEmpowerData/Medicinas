import React from 'react';
import './Main.css';
import imageMedicine from '../images/paracetamol.jpg';

export class Medicine extends React.Component {

  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      nombreMedicina: this.props.nombreMedicina,
      compuestoActivo: this.props.compuestoActivo,
      nombreFarmacia: this.props.nombreFarmacia,
      latitud: this.props.latitud,
      longitud: this.props.longitud,
    };
  }

  render() {
    return (
      <div className="Medicine-box">
        <tbody className="Medicine-table">
          <tr>
            <td rowSpan="5" className="Medicine-photo">
              <img src={imageMedicine} alt="imageMedicine" className="Medicine-img" />
            </td>
            <td className="Medicine-title">
              <p>
                {this.state.nombreMedicina}
              </p>
            </td>
            <td rowSpan="5" className="Medicine-price">
              <p>
                $1000.00
              </p>
            </td>
          </tr>
          <tr>
            <td className="Medicine-text">
              <p>
                {this.state.compuestoActivo}
              </p>
            </td>
          </tr>
          <tr>
            <td className="Medicine-text">
              <p>
                {this.state.nombreFarmacia}
              </p>
            </td>
          </tr>
          <tr>
            <td className="Medicine-text">
              <p>
                Cantidad en existencia
              </p>
            </td>
          </tr>
          <tr>
            <td className="Medicine-text">
              <p>
                <a href={'https://www.google.com/maps/@' + this.state.latitud + '.' + this.state.longitud} target="_blank">Ubicacion del Negocion</a>
              </p>
            </td>
          </tr>
        </tbody>
      </div>
    );
  }
}
