import moment from "moment";
import { deleteReminderAction } from "../../actions";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

function ListReminder(listPriority) {
  const dispatch = useDispatch();
  const deleteReminder = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this reminder?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#62a086",
      cancelButtonColor: "#f66b61",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      result.value && dispatch(deleteReminderAction(id));
    });
  };

  return listPriority.length === 0
    ? "You haven't added any Reminders. Please add Reminder to show list of Reminders."
    : listPriority.map((element) => {
        return (
          <li key={element.id}>
            <div className="list-item">
              <div style={{ color: "blueviolet" }}>{element.text}</div>
              <div>
                <em>{moment(new Date(element.dueDate)).fromNow()}</em>
              </div>
              <div style={{ color: "red" }}>
                {element.checked === true ? "Checked" : "UnCheck"}
              </div>
            </div>
            <div
              className="delete-button"
              onClick={() => deleteReminder(element.id)}
            >
              &#x2715;
            </div>
          </li>
        );
      });
}

export default ListReminder;
