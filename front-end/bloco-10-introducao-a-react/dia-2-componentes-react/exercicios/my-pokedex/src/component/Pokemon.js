// vai criar cada car
import { Component } from "react";

class Pokemon extends Component {
  render () {
    const { poke: { name, type, averageWeight: { value, measurementUnit}, image, moreInfo } } = this.props;

    return (
      <div id={name} className='card'>
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> Average Weight: { value } { measurementUnit } </p>
          </div>
        <div>
        <img src={ image } alt={ moreInfo }/>
        </div>
      </div>
    )
  }
}

export default Pokemon;