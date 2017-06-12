import React, {Component} from 'react'

class completed extends Component {
  render() {
    return (
      <div> {this.props.visibility.map(todo => {

          return <strike> {todo.text} </strike>


      })}</div>
    )
  }

}

export default completed
