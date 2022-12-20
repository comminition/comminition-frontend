import classNames from 'classnames/bind';
import {
  ChangeEvent,
  CSSProperties,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import type { State as ProfileState } from '../hooks/useProfile';
import styles from './input.module.scss';

interface IProps {
  type: 'part' | 'major' | 'address' | 'email';
  initialValue?: string;
  placeholder?: string;
  style?: CSSProperties;
  onChange: Dispatch<SetStateAction<ProfileState>>;
}

interface State {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

interface Action {
  type: 'INPUT' | 'BLUR' | 'INIT';
  payload: {
    inputType: 'text' | 'email';
    value: string;
  };
}

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const cx = classNames.bind(styles);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INPUT':
      if (action.payload.inputType === 'text') {
        if (action.payload.value.length < 1) return { isValid: false, isTouched: true, value: action.payload.value };
        return { isValid: true, isTouched: true, value: action.payload.value };
      }
      if (action.payload.inputType === 'email') {
        if (!emailRegex.test(action.payload.value))
          return { isValid: false, isTouched: true, value: action.payload.value };
        return { isValid: true, isTouched: true, value: action.payload.value };
      }
      break;
    case 'INIT':
      return { isValid: false, isTouched: false, value: action.payload.value };
    case 'BLUR':
      if (action.payload.inputType === 'text') {
        if (action.payload.value.length < 1) return { ...state, isValid: false, isTouched: true };
        return { ...state, isValid: true, isTouched: true };
      }
      if (action.payload.inputType === 'email') {
        if (!emailRegex.test(action.payload.value)) return { ...state, isValid: false, isTouched: true };
        return { ...state, isValid: true, isTouched: true };
      }
      break;
  }
  return { ...state };
};

const Input = ({ type, initialValue, placeholder, style, onChange }: IProps) => {
  const INITIAL_STATE: State = useMemo(
    () => ({
      value: initialValue!,
      isValid: false,
      isTouched: false,
    }),
    [initialValue],
  );
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (type === 'email') {
        dispatch({ type: 'INPUT', payload: { inputType: 'email', value: e.currentTarget.value } });
        return;
      }
      dispatch({ type: 'INPUT', payload: { inputType: 'text', value: e.currentTarget.value } });
    },
    [type],
  );

  const handleBlur = useCallback(() => {
    if (type === 'email') {
      dispatch({ type: 'INPUT', payload: { inputType: 'email', value: state.value } });
      return;
    }
    dispatch({ type: 'BLUR', payload: { inputType: 'text', value: state.value } });
  }, [state.value, type]);

  useEffect(() => {
    onChange((prev) => ({ ...prev, [type]: state.value }));
  }, [onChange, state.value, type]);

  return (
    <input
      type="text"
      className={cx(
        'input',
        { valid: state.isTouched && state.isValid },
        { invalid: state.isTouched && !state.isValid },
      )}
      style={style}
      placeholder={placeholder || '입력해주세요'}
      value={state.value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default Input;
