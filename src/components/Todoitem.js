import React, { Component } from 'react'
// make Todoitem required
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        //Long way:
        // if (this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }
        // Use the ternary operator instead:
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {
        // destructuring
        // extract the specific data from this todo to pass onto lines 33 and 34
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// Make Todo props required - good practice
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default Todoitem
