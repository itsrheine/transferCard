import React from 'react';
import BARTmap from '../assets/BART-System-Map-API.png'

// using useState
// const Routes = () => {
// const [name, setName] = useState('')
// }

class Routes extends React.Component {
  state = {
    name: '',
    direction: '',
    num_stns: '',
    station: ''
  }

  handleChange = (event) => {
    const routeId = event.target.value;
    fetch('http://api.bart.gov/api/route.aspx?cmd=routeinfo&route=' + routeId + '&key=MW9S-E7SL-26DU-VV8V&json=y')
      .then(response => response.json())
      .then(response => {
        let { name, direction, num_stns } = response.root.routes.route;
        let  station  = JSON.stringify(response.root.routes.route.config.station)
        .replace(/"/g, " ")
        .replace(/[\[\]']+/g, " ")
        .replace(/,/g, " ")
        console.log(station)

        this.setState({
          name, direction, num_stns, station
        })

        // using useState()
        // setName(name);

      });
  }

  render() {
    const { name, direction, num_stns, station } = this.state;
    console.log(station)

    return (
    <div className="container-map">
            <div><img src={BARTmap}/></div>
      <div className="row container">
        <div className="input-field col s12">
          <select onChange={this.handleChange}>
            <option value="" disabled selected>Choose your option</option>
            <option value="1">ANTC-SFIA</option>
            <option value="2">SFIA-ANTC</option>
            <option value="3">BERY-RICH</option>
            <option value="4">RICH-BERY</option>
            <option value="5">BERY-DALY </option>
            <option value="6">DALY-BERY</option>
            <option value="7">RICH-MLBR</option>
            <option value="8">MLBR-RICH</option>
          </select>
        </div>
        <label>Materialize Select</label>
        <div>
          <div className="row">
            <div className="col-6">
              <p>{name}</p>
              <p>{direction}</p>
              <p>{num_stns}</p>
              <ul>

                <li className="bullet">{station}</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Routes;
