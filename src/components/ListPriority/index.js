import { useSelector } from "react-redux";
import ListReminder from "../ListReminder";

function ListPriority() {
  const listPriority = useSelector((state) =>
    state.filter((x) => x.checked === true)
  );
  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        List Priority
      </div>
      <ul className="list-group">{ListReminder(listPriority)}</ul>
    </div>
  );
}

export default ListPriority;
