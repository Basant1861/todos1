import React, { PropTypes } from 'react'
import {Component} from 'react'
import Todo from './Todo'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo,toggleTodo,select_1,select_2,select_3} from '../actions/index'
import {all} from './todosall'
import {completed} from './todoscomp'
import {notCompleted} from './todosnotcomp'

class TodoList extends Component {


  render() {

    console.log(this.props.todos)
    console.log(this.props.visible)
    return  (
      <div className='todo'>
          <form id="frm1">
                Add To Do: <input type="text" name="fname" id="todo" /><br></br>
                <input type="button" onClick={()=> this.props.actions.addTodo(document.getElementById("todo").value)} value="Submit" />
          </form>

          {this.props.todos.map(t => (
          <li key={t.id} className='todo__item' onClick={() => this.props.actions.toggleTodo(t.id)}>
            <Todo todo={t} />
          </li>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        visible: state.visible
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({addTodo,toggleTodo,select_1,select_2,select_3}, dispatch)

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
