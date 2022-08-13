import React from "react";
import Note from "./Note";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
  const [isExpand, setExpand] = React.useState(false);
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    // console.log("clicked");
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setExpand(false);
    event.preventDefault();
  }
  function expand() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          // both are same
          // rows={isExpand ? "3" : "1"}
          rows={isExpand ? 3 : 1}
        />
        <Zoom in={isExpand}>
          <Fab onClick={submitNote}>
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
