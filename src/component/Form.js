import React from 'react';

class Form extends React.Component {


  getLocationData = (event) =>{
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.getLocationData}>
          <input type="text" name="city" placeholder="Enter city name" />
          <input type="submit" name="Explore!" value="Explore" />
        </form>
      </div>
    )
  }
}
export default Form;
