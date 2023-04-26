export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { 
      ...state,
      currentValue: `${value}` 
    };
  }

  if (state.operator !== null) {
    return { 
      ...state,
      currentValue: `${value}` 
    };
  }
  
  return {
    currentValue: `${state.currentValue}${value}`
  };
};


export const handleEqual = state => {
    const { currentValue, previousValue, operator } = state;

  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    
  
    if (operator === "/") {
      return {
        currentValue: previous / current,
      };
    }
  
    if (operator === "*") {
      return {
        currentValue: previous * current,
      };
    }
  
    if (operator === "+") {
      return {
        currentValue: previous + current,
      };
    }
  
    if (operator === "-") {
      return {
        currentValue: previous - current,
      };
    }
  
    return state;
};


const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        return handleNumber(value, state);

      case "operator":
        return {
          ...state,
          operator: value,
          previousValue: state.currentValue,
        };

      case "equal":
        return handleEqual(state);

      case "clear":
        return {
          ...state,
          currentValue: "0",
          operator: null,
          previousValue: null
        };

      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`
        };

      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`
        };

      default:
        return state;
    }
};
  
export default calculator;
  