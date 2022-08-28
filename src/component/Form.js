import React from 'react';
import axios from 'axios';
import ThemeProvider from 'react-bootstrap/ThemeProvider';


class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      lat: '',
      lom: '',
      error: ' Enter Right city Name ',
      errFlag: false,
      mapFlag: true
    }
  }

  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.city.value;
    console.log(cityName);
    const key = 'pk.e91e9438da6fec75d64600ad5f11c625'
    const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`

    try {

      let resResult = await axios.get(URL);
      this.setState({
        display_name: resResult.data[0].display_name,
        lat: resResult.data[0].lat,
        lon: resResult.data[0].lon
      })

    }
    catch
    {
      console.log('error');
      this.setState({
        errFlag: true
      });
    }

  }
  render() {
    return (

      <div style={{ margin: '15px' ,backgroundImage : "URL('https://www.concettolabs.com/blog/wp-content/uploads/2018/04/banner4.jpg')" , width:'1300px' , height:'780px'}}>
        <h1>Location App</h1>

        <form onSubmit={this.getLocationData}>
          <input type="text" name="city" placeholder="Enter city name" />
          <input type="submit" name="Explore!" value="Explore" />

        </form>
        <ThemeProvider dir="rtl">
          <h3>display name : {this.state.display_name}</h3>
          <h3>lat : {this.state.lat}</h3>
          <h3>lon : {this.state.lon}</h3>

          {this.state.errFlag && <h4>Error : {this.state.error} </h4>}

          {this.state.mapFlag && <div class="z-depth-1-half map-container" style={{ height: '50px', width: '50px', overflow: 'hidden', padding: '56.25%', position: 'relative' }}>
            <iframe title=" " src={`https://maps.locationiq.com/v3/staticmap?key=pk.e91e9438da6fec75d64600ad5f11c625&center=${this.state.lat},${this.state.lon}`} frameborder="10"
              style={{ border: '1', left: '5px', top: '5px', height: '620px', width: '620px', position: 'absolute' }} allowfullscreen />
          </div>}
        </ThemeProvider>

      </div>

    )
  }
}
export default Form;
