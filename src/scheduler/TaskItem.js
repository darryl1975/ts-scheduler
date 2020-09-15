import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class TaskItem extends Component
{
    constructor(props){
        super(props);
    }

    static propTypes = {
        task: PropTypes.object.isRequired,
    }

    render(){
        const {task, isDragging, connectDragSource, connectDragPreview} = this.props;
        let dragContent = <li style={{color: 'black', background: 'lightgrey', fontWeight: 'bold', fontSize: '15px', border: 'solid', borderWidth: 'thin', textAlign: 'center',  listStyle: 'none', margin: '2px 2px 2px 2px'}}>{task.name}</li>;

        return (
            isDragging ? null : (
                <div>
                    {
                        connectDragPreview(
                            connectDragSource(dragContent)
                        )
                    }
                </div>
            )
        )
    }
}

export default TaskItem
