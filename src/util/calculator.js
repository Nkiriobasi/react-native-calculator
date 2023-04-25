

export const handleNumber = (value, stateParams) => {
    if (state.currentValue === "0") {
      return { currentValue: `${value}` };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`
    };
};


export const handleEqual = (stateParams) => {
    const { currentValue, previousValue, operator } = stateParams;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {
      operator: null,
      previousValue: null
    };
  
    if (operator === "/") {
      return {
        currentValue: previous / current,
        ...resetState
      };
    }
  
    if (operator === "*") {
      return {
        currentValue: previous * current,
        ...resetState
      };
    }
  
    if (operator === "+") {
      return {
        currentValue: previous + current,
        ...resetState
      };
    }
  
    if (operator === "-") {
      return {
        currentValue: previous - current,
        ...resetState
      };
    }
  
    return state;
};


const calculator = (type, value, stateParams) => {
    switch (type) {
      case "number":
        return handleNumber(value, stateParams);
      case "operator":
        return {
          operator: value,
          previousValue: stateParams.currentValue,
          currentValue: "0"
        };
      case "equal":
        return handleEqual(stateParams);
      case "clear":
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`
        };
      default:
        return stateParams;
    }
};
  
export default calculator;
  