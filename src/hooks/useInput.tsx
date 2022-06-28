import { ChangeEvent, FocusEvent, useReducer } from 'react';

interface IState {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

interface IAction {
  type: string;
  payload: {
    value: string;
    inputType: 'email' | 'password';
  };
}

const initialState: IState = {
  value: '',
  isTouched: false,
  isValid: false,
};

const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'INPUT':
      if (action.payload.inputType === 'email') {
        if (emailRegx.test(action.payload.value))
          return { isTouched: true, value: action.payload.value, isValid: true };
        return { ...state, value: action.payload.value, isValid: false };
      }
      if (action.payload.inputType === 'password') {
        if (action.payload.value.length >= 8) return { isTouched: true, value: action.payload.value, isValid: true };
        return { ...state, value: action.payload.value, isValid: false };
      }
      break;

    case 'BLUR':
      if (action.payload.inputType === 'email') {
        if (emailRegx.test(state.value)) return { ...state, isTouched: true, isValid: true };
        return { ...state, isTouched: true, isValid: false };
      }
      if (action.payload.inputType === 'password') {
        if (state.value.length >= 8) return { ...state, isTouched: true, isValid: true };
        return { ...state, isTouched: true, isValid: false };
      }
  }
  return { ...state };
};

const useInput = (type: 'email' | 'password') => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', payload: { inputType: type, value: e.currentTarget.value } });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    dispatch({ type: 'BLUR', payload: { inputType: type, value: e.currentTarget.value } });
  };
  return { handleInputChange, handleBlur, value: state.value, isTouched: state.isTouched, isValid: state.isValid };
};

export default useInput;
