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
   // 1. 모든 할 일 목록을 저장하는 상태
  const [todos, setTodos] = useState([]);


  // 2. TodoInput이 새로운 할 일을 추가하면 이 함수 실행
  // 즉 새로운 할 일이 생겼을 때 App이 목록에 추가하는 함수
  // function addTodo(newTodo) {
  //   setTodos([...todos, newTodo])
  // }


  // 체크박스 추가 시 newTodo를 객체로 변환 
    function addTodo(newTodo) {
    setTodos([...todos, {text: newTodo, done: false}])
    // 새 항목 추가 시 기본 done은 false (미완료)
  }



  // useEffect란: 화면에 첫 랜더링되었을 때(마운트), 다시 랜더링될 때(업데이트), 화면에서 사라질 떼(언마운트) 특정작업을 처리할 코드를 실행시켜주고싶을 때 사용. 
  // 예를 들어 
  // 페이지가 처음 열릴 때만 실행되게 하고 싶다
  // 우리가 만든 todos가 바뀔 때마다 콘솔에 출력되게 하고 싶다
  // 특정 값이 바뀌면 서버에 요청을 보내고 싶다
  // 특정 값이 바뀌면 알림을 띄우고 싶다

  // 이런 행동을 하게 해주는 것이 바로 useEffect입니다.


  // const [count, setCount] = useState(1);
  // const handleCountUpdate = ()=> {
  //   setCount(count + 1)
  // }

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

  // 4. clearUp 




  // 3. 할일 삭제 함수 (이해하기 쉬운 버전)
  // function deleteTodo(deleteIndex) {
  //   const newTodos = [...todos]   // 기존 배열 그대로 복사
  //   newTodos.splice(deleteIndex, 1) // 클릭한 deleteIndex 1개 삭제
  //   setTodos(newTodos) //새 배열로 상태 업데이트
  // }

  // filter 함수로 만든 버전 
  function deleteTodo(deleteIndex) {
    // filter: 배열을 하나씩 훑으면서 조건에 맞는 것만 새 배열로 반환
    // const newTodos = todos.filter((item, index) => index !== deleteIndex);
    // setTodos(newTodos) //새 배열로 상태 업데이트
    
    // 이걸 한줄로 쓰면 
    setTodos(todos.filter((item, index) => index !== deleteIndex));

    // 이렇게도 쓸 수 있음
    // setTodos(todos.filter((_, index) => index !== deleteIndex))
    // 여기서 _는 “이 자리에 값(item)이 있지만, 우리는 안 쓸 거예요”
    // 즉, 값은 필요 없고 위치(index)만 필요할 때 _를 사용

  }



  // 할일 완료 상태(체크박스 체크)
  function toggleTodo(indexToToggle){
    const newTodos = todos.map((item,index)=> { //todos 배열(할 일 목록)을 한 줄씩 새 배열로 바꿔줌
      if(index === indexToToggle) { //해당 index가 내가 클릭한 index면
        return {...item, done: !item.done}; //원래 내용은 그대로 두고 done 속성만 반대로 바꿈
      }
      return item;
    });

    setTodos(newTodos) // 새 배열로 상태 업데이트
  }


  return (
    <div className='app'>

      {/* useEffect 설명 시 사용 */}
      {/* <div>
        <button onClick={handleCountUpdate}>업데이트</button>
        <p> 카운트: {count}</p> 
      </div> */}


      {/* TodoList  */}
      <h1 className='title'>Todo List</h1>

      <div className='contents'>
        <TodoInput onAddTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />

      </div>
    </div>
  )
}

export default App



// 1. useEffect clearUp 설명
// 2. 컴포넌트 분리 
// 3. TodoList에 삭제버튼 추가
// 4. TodoInput에 Enter 키 이벤트 추가 


// 5. 완료되면 체크박스로 완료 표기 
// 현재 todos는 문자열 배열 예를 들어(['청소', '공부'])만 저장하고 있음 
// 체크박스를 만들려면 객체 배열로 바꾸는 게 좋음 

// 예시 :
// [
//   { text: "청소", done: false },
//   { text: "공부", done: true }
// ]
// text → 할 일 내용, done → 완료 여부 (true/false) 