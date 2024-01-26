import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

function Display(props) {
    const { list, currentIndex, setList, taskDone } = props;
    const [editingIndex, setEditingIndex] = useState(null);
    const [editTaskText, setEditTaskText] = useState('');

    const handleDelete = (e, index) => {
        e.preventDefault();
        const listRemove = list.filter((item, i) => i !== index);
        setList(listRemove);
    };

    const handleChecked = (newtask) => {
        const updatedList = list.map((t) => {
        if (t === newtask) {
            return { ...t, taskDone: !t.taskDone };
        } else {
            return t;
        }
        });
        setList(updatedList);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditTaskText(list[index].txt);
    };

    const handleSaveEdit = () => {
        const updatedList = list.map((t, index) => {
        if (index === editingIndex) {
            return { ...t, txt: editTaskText };
        } else {
            return t;
        }
        });
        setList(updatedList);
        setEditingIndex(null);
        setEditTaskText('');
    };

    const handleCancelEdit = () => {
        setEditingIndex(null);
        setEditTaskText('');
    };

    return (
        <div className='displayTask'>
        {list.map((task, index) => (
            <div className="oneTask" key={index}>
            <div>
                {editingIndex === index ? (
                <input
                    type="text"
                    value={editTaskText}
                    onChange={(e) => setEditTaskText(e.target.value)}
                />
                ) : (
                <p className={task.taskDone ? 'text-decoration-line-through' : ''}>{task.txt}</p>
                )}
            </div>
            <div>
                <input type="checkbox" checked={task.taskDone} className='mx-3' onChange={() => handleChecked(task)} />
                {editingIndex === index ? (
                <>
                    <Button className='mx-2' variant='outline-success' onClick={handleSaveEdit}>Save</Button>
                    <Button variant='outline-danger' onClick={handleCancelEdit}>Cancel</Button>
                </>
                ) : (
                <>
                    <Button className='mx-2' variant='outline-primary' onClick={() => handleEdit(index)}>Edit</Button>
                    <Button variant='outline-danger' onClick={(e) => handleDelete(e, index)}>Delete</Button>
                </>
                )}
            </div>
            </div>
        ))}
        </div>
    );
}

export default Display;
