import { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// 1. 리스트 먼저만들기 
// function TodoList({todos}) {
  
//   return (
//     <>
//     {todos.length > 0 ? 
//         <ul>
//           {todos.map((item, index)=> (
//             <li key={index}>{item}</li>
//           )) }
//         </ul>
//         : 
//         <p>아직 할일이 없어요.</p>
//       }
//     </>
//   )
// }


// 2. 추가할 리스트 영역 만들기 
// function TodoInput({onAddTodo}) {

//   const [newText, setNewText] = useState("");

//   const addNewText = ()=> {
//       if(newText.trim() === "") {
//           return setNewText("");
//       }

//       // App에게 전달하는 순간 
//       onAddTodo(newText);
//       setNewText("");
//   };

//   return(
//       <div>
//           <input type="text" value={newText} onChange={(e)=> setNewText(e.target.value)} placholder="할 일을 입력하세요" />
//           <button onClick={addNewText}>Add</button>
//       </div>
//   )
// }




function App() {
  const [todos, setTodos] = useState([]);


  // TodoInput이 새로운 할 일을 추가하면 이 함수 실행
  // 즉 새로운 할 일이 생겼을 때 App이 목록에 추가하는 함수
  function addTodo(newTodo) {
    setTodos([...todos, newTodo])
  }


  // useEffect란: 화면에 첫 랜더링되었을 때(마운트), 다시 랜더링될 때(업데이트), 화면에서 사라질 떼(언마운트) 특정작업을 처리할 코드를 실행시켜주고싶을 때 사용. 
  // 예를 들어 
  // 페이지가 처음 열릴 때만 실행되게 하고 싶다
  // 우리가 만든 todos가 바뀔 때마다 콘솔에 출력되게 하고 싶다
  // 특정 값이 바뀌면 서버에 요청을 보내고 싶다
  // 특정 값이 바뀌면 알림을 띄우고 싶다

  // 이런 행동을 하게 해주는 것이 바로 useEffect입니다.


  const [count, setCount] = useState(1);
  const handleCountUpdate = ()=> {
    setCount(count + 1)
  }

  // 1. 랜더링 될 때마다 매번 실행됨 
  // useEffect(()=> {
  //   console.log('핼로')
  // });

// 2. 첫 실행(마운팅) + todos 변경될 때마다 실행:
  useEffect(()=> {
    console.log('리스트 추가됨')
  }, [todos]);

// 3. 첫 실행(마운팅) 때만 랜더링 하고 그 이후에는 랜더링하고싶지 않다면 빈 배열로 해주기
  useEffect(()=> {
    console.log('처음만 실행')
  }, [])

  return (
    <div className='app'>

      {/* useEffect 설명 시 사용 */}
      <div>
        <button onClick={handleCountUpdate}>업데이트</button>
        <p> 카운트: {count}</p> 
      </div>


      {/* TodoList  */}
      <h1 className='title'>Todo List</h1>

      <div className='contents'>
        <TodoInput onAddTodo={addTodo} />
        <TodoList todos={todos} />

      </div>
    </div>
  )
}

export default App
