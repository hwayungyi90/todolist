import { useState } from 'react'

function TodoInput({onAddTodo}) {

    const [newText, setNewText] = useState("");

    const addNewText = ()=> {
        if(newText.trim() === "") {
            return setNewText("");
        }

        // App에게 전달하는 순간 
        onAddTodo(newText);
        setNewText("");
    };

    return(
        <div>
            <h3 className='list-title'>할일 추가</h3>
            <div className='input-wrap'>
                <input className='input-add' type="text" value={newText} onChange={(e)=> setNewText(e.target.value)}  placeholder="할 일을 입력하세요" />
                <button className='btn' onClick={addNewText}>Add</button>
            </div>
        </div>
    )
}

export default TodoInput;