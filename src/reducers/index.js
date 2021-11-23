const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REMINDER":
      console.log("reducer");
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text,
          dueDate: action.payload.dueDate,
          checked: action.payload.checked,
        },
      ];
    case "DELETE_REMINDER":
      return state.filter((reminder) => reminder.id !== action.payload.id);
    case "CLEAR_REMINDER":
      return [];
    default: {
      return state;
    }
  }
};

export default reducer;
