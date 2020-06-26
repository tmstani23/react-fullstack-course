import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  
  state = {
    cars: [],
  }

  componentDidMount() {
    //Update state with list of cars
    this.getCars();
  }

  getCars = () => {
    //get the cars from backend api and update state
    axios.get('/api/get_cars').then((response) => {
      this.setState({
        cars: response.data
      })
    })
  }

  onCarSubmit = () => {
    let car = {
      brand: 'Viper',
      model: 'Dodge',
      year: 2012,
      avail: true,
    }
    //Post the car object to the backend api
    axios.post('/api/add_car', car).then((response) => {
      console.log(response.data)
    }).then(this.getCars()) //Update the state to render the new car
  }

  removeCar = () => {
    //post the brand to remove to the api
    axios.post('/api/remove_car', {
      brand: "Viper"
    }).then((response) => {
      console.log(response.data);
      //update state with new cars list
      this.getCars();
    })
  }
  
  render() {
    return (
      <div className='App'> 
        <h1> Add Car </h1>
        <button onClick={() => this.onCarSubmit()}>
          Add car to db
        </button>
        <hr/>
        {/* render each car from the list as a div */}
        {
          this.state.cars.map((car, i) => (
          <div key = {i}>
            {`${car.brand} - ${car.model}`}
          </div>  
          ))
        }
        <hr/>
        <h1> Remove Car </h1>
        <button onClick={() => this.removeCar()}>Remove</button>
      </div>
    )
  }
}

export default App;
