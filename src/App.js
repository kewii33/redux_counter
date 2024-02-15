// src/App.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// 사용할 Action creator를 import 합니다.
import { plusOne } from './redux/modules/counter';
import { minusOne } from './redux/modules/counter';
import { total } from './redux/modules/counter';
import { plus } from './redux/modules/counter';
import { minus } from './redux/modules/counter';

import AddForm from './components/AddForm';
import TodoListContainer from './components/TodoListContainter';

const App = () => {
  // 간단 계산기
  const dispatch = useDispatch();
  const plusOneResult = useSelector((state) => state.counter.plusOneResult);
  const minusOneResult = useSelector((state) => state.counter.minusOneResult);
  const totalNumber = useSelector((state) => state.counter.totalNumber);
  const globalNumber = useSelector((state) => state.counter.globalNumber);

  // 편한 계산기
  const [number, setNumber] = useState(0);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
    dispatch(plus(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minus(number));
  };

  return (
    <div>
      <div>
        <div>계산기</div>
        <div>
          {plusOneResult}
          <button
            onClick={() => {
              dispatch(plusOne());
              dispatch(total()); // 액션객체를 Action creator로 변경합니다.
            }}
          >
            + 1
          </button>
        </div>
        {/* 빼기 버튼 추가 */}
        {minusOneResult}
        <button
          onClick={() => {
            dispatch(minusOne());
            dispatch(total()); // 액션객체를 Action creator로 변경합니다.
          }}
        >
          - 1
        </button>
        <div>합계 : {totalNumber}</div>
      </div>

      <hr />

      <div>
        <div>편한 계산기</div>
        <input type="number" onChange={onChangeHandler} />
        <button onClick={onClickAddNumberHandler}>더하기</button>
        <button onClick={onClickMinusNumberHandler}>빼기</button>
        <div>결과: {globalNumber}</div>
      </div>

      <hr />

      <div>
        <div>todo list</div>
        <div>
          <StContainer>
            <AddForm />
            <TodoListContainer />
          </StContainer>
        </div>
      </div>
    </div>
  );
};

export default App;

const StContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
`;
