import React from 'react'


class Pokemon extends React.Component {
  render () {
    return <div className = 'pokemon'>
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.type}</p>
        <p>{this.props.weight} {this.props.unit}</p>
      </div>
      <img src={this.props.image} alt="pokemon"></img>
    </div>
  }
}

export default Pokemon