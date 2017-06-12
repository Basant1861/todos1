import React, {Component} from 'react'

class notCompleted extends Component {
  render() {
    return (
      <div> {this.props.visibility.map(todo => {

          return <p> {todo.text} </p>


      })}</div>
    )
  }

}
export default notCompleted
