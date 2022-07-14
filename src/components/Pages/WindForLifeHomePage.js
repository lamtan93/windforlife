import React from 'react';
import axios from 'axios';
import GoogleMapWindForLife from '../GoogleMapWindForLife';
import Header from '../Header';
import windForLifeDico from '../common/winForLifeDico';

const key = 'AIzaSyB_FXi6z0rzSrN8-O-MPk2KvcO86LWJeJ0';
class WindForLifeHomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listAnemometers: null,
      detailAnemometer: null,
    }
  }
  componentDidMount(){
    setTimeout(() => this.fetchListAnemometers(), 500);
  }

  fetchListAnemometers = () => {
    axios.get('../data/anemometers/list.json')
    .then(res => {
      this.setState({
        listAnemometers: res?.data,
      })
    })
    .catch(err => console.log(err))
  }

  handleChangeAnemometer = (id) => {
    axios.get(`../data/anemometers/detail/${id}.json`)
    .then(res => {
      this.setState({
        detailAnemometer: res?.data,
      })
    })
    .catch(err => console.log(err));
  };

  render(){
    return (
      <div className='winForLifeHomePage'>
        <Header words={windForLifeDico}/>
        {this.state?.listAnemometers ? (
          <GoogleMapWindForLife
          words={windForLifeDico}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `70vh`}} />}
          mapElement={<div style={{ height: `100%` }} />}
          listAnemometers={this?.state?.listAnemometers}
          handleChangeAnemometer={this.handleChangeAnemometer}
          detailAnemometer={this?.state?.detailAnemometer}
        />
        ) : (
          <h1>{windForLifeDico?.LOADING}</h1>
        )}
      </div>
  );
}
}
export default WindForLifeHomePage;
