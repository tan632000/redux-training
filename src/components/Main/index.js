import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { addReminderAction, resetReminderAction } from "../../actions";
import ListReminder from "../ListReminder";

function Main() {
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [dueDate, setDueDate] = useState();
  const [checked, setChecked] = useState(false);

  const addReminder = () => {
    if (text === undefined || dueDate === undefined) {
      return;
    }
    dispatch(addReminderAction(text, dueDate, checked));
    setText("");
    setDueDate("");
    setChecked(false);
  };

  const clearReminders = () => {
    dispatch(resetReminderAction());
  };

  const reminders = useSelector((state) => state);

  return (
    <div className="main">
      <div className="title">Reminder App</div>
      <div className="body">
        <div className="content">
          <input
            placeholder="I have to ..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <input
            type="datetime-local"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
          <label>Add to list priority</label>
          <input
            type="checkbox"
            onChange={(e) => setChecked(e.target.checked)}
            checked={checked}
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => addReminder()}
        >
          Add Reminder
        </button>
        <button
          type="button"
          className="btn btn-reset"
          onClick={() => clearReminders()}
        >
          Clear all reminders
        </button>
      </div>
      <ul className="list-group">{ListReminder(reminders)}</ul>
    </div>
  );
}

export default Main;
