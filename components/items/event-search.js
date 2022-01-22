import Button from "../button";
import { useRef } from "react";

function EventsSearch(props) {
  const idInputRef = useRef();
  const titleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const selectedId = idInputRef.current.value;
    const selectedTitle = titleInputRef.current.value;

    props.onSearch(selectedId, selectedTitle); // a function we created
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="id">ID</label>
          <select id="id" ref={idInputRef}>
            <option value="e0">e0</option>
            <option value="e1">e1</option>
            <option value="e2">e2</option>
          </select>
        </div>
        <div>
          <label htmlFor="title"> Title</label>
          <select id="title" ref={titleInputRef}>
            <option value="B-HCG">B-HCG</option>
            <option value="FT3">FT3</option>
            <option value="Glucose">Glucose</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}
export default EventsSearch;
