// src/modules/counter.js

// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = 'PLUS_ONE';
const MINUS_ONE = 'MINUS_ONE';
const TOTAL = 'TOTAL';
const PLUS = 'PLUS';
const MINUS = 'MINUS';

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const plusOne = (payload) => {
  return {
    type: PLUS_ONE,
    payload,
  };
};

export const minusOne = (payload) => {
  return {
    type: MINUS_ONE,
    payload,
  };
};

export const total = (payload) => {
  return {
    type: TOTAL,
    payload,
  };
};

export const plus = (payload) => {
  return {
    type: PLUS,
    payload,
  };
};

export const minus = (payload) => {
  return {
    type: MINUS,
    payload,
  };
};

// 초기 상태값
const initialState = {
  plusOneResult: 0,
  minusOneResult: 0,
  totalNumber: 0,

  globalNumber: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다.
      console.log(state.plusOneResult);
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        plusOneResult: state.plusOneResult + action.payload,
      };
    case MINUS_ONE:
      console.log(state.minusOneResult);
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        minusOneResult: state.minusOneResult - action.payload,
      };
    case TOTAL:
      console.log(state.totalNumber);
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        totalNumber: state.plusOneResult + state.minusOneResult,
      };
    case PLUS:
      console.log(state.globalNumber);
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        globalNumber: state.globalNumber + action.payload,
      };
    case MINUS:
      console.log(state.globalNumber);
      return {
        ...state, // 다른 상태값을 유지하기 위해 현재 상태를 복사합니다.
        globalNumber: state.globalNumber - action.payload,
      };

    default:
      return state;
  }
};

export default counter;
