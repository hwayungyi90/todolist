import {useState, useEffect} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



const Timer = ()=> {
    useEffect(()=> {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중 ing...')
        }, 1000);

        // 타이머를 다 쓰고 나서 정리해야 함. useEffect의 retrun 값으로 함수 반환
        return ()=> {
            // 정리작업 할 때 쓸 코드 적어줌
            // 여기서는 setInterval을 멈춰야 함
            clearInterval(timer);
            console.log('타이머 종료됨')
        }
    });


    return (
        <div>
            <p>타이머 시작!</p>
        </div>
    )
}



function UseEffect() {
   // 1. 모든 할 일 목록을 저장하는 상태
//   const [todos, setTodos] = useState([]);


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
//   useEffect(()=> {
//     console.log('리스트 추가됨')
//   }, [todos]);

// 3. 첫 실행(마운팅) 때만 랜더링 하고 그 이후에는 랜더링하고싶지 않다면 빈 배열로 해주기
//   useEffect(()=> {
//     console.log('처음만 실행')
//   }, [])

  // 4. clearUp (위에 있음)


  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
        
        {/* <Timer /> */}

        {/* showTimer가 true일 때만 <Timer />를 보여줌  */}
        {showTimer && <Timer />} 

        <button
        onClick={()=> setShowTimer(!showTimer)}
        // setShowTimer는 현재 showTimer와 반대되는 것으로 만들어줌 
        // 즉 showTimer가 true라면 false로, false 라면 true로 바꿔줌 
        >Toggle timer</button>
    </div>
  )
}

export default UseEffect
