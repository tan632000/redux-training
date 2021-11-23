export const addReminderAction = (text, dueDate, checked) => {
  return {
    type: "ADD_REMINDER",
    payload: {
      text,
      dueDate,
      checked,
    },
  };
};

export const deleteReminderAction = (id) => {
  return {
    type: "DELETE_REMINDER",
    payload: { id },
  };
};

export const resetReminderAction = () => {
  return {
    type: "CLEAR_REMINDER",
    payload: {},
  };
};
