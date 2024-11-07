import { 
  APPLY_NUMBER, 
  CHANGE_OPERATION, 
  CLEAR_DISPLAY,
  CALCULATE_RESULT,
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
  previousTotal: 0,
  newNumber: true
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return num2;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: state.newNumber ? action.payload : Number(state.total.toString() + action.payload.toString()),
        newNumber: false
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        previousTotal: state.total,
        total: 0,
        newNumber: true
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
        newNumber: true
      };

    case CALCULATE_RESULT:
      return {
        ...state,
        total: calculateResult(state.previousTotal, state.total, state.operation),
        newNumber: true
      };

    case MEMORY_ADD:
      return {
        ...state,
        memory: state.total
      };

    case MEMORY_RECALL:
      return {
        ...state,
        total: state.memory,
        newNumber: true
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0
      };

    default:
      return state;
  }
};

export default reducer;