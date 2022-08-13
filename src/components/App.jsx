import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);
  function addNote(note) {
    setNotes((prev) => [...prev, note]);
  }
  function deleteNote(id) {
    console.log(id);
    setNotes((prev) =>
      prev.filter((n, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((n, index) => (
        <Note
          key={index}
          onChecked={deleteNote}
          id={index}
          title={n.title}
          content={n.content}
        />
      ))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
