import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const HOST = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get All Notes
  const getNotes = async () => {
    //TODO api call
    const response = await fetch(`${HOST}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5Zjk3MjMxZjAxZGRmMDI0ODZlNTZkIn0sImlhdCI6MTcwNDk3NDEwMn0.3NWEnroW3nHsCsAQnPlVBAcn37PKQx182KdO7dO40JI",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add Note
  const addNote = async (title, description, tag) => {
    //TODO api call
    const response = await fetch(`${HOST}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5Zjk3MjMxZjAxZGRmMDI0ODZlNTZkIn0sImlhdCI6MTcwNDk3NDEwMn0.3NWEnroW3nHsCsAQnPlVBAcn37PKQx182KdO7dO40JI",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    // add note client
    console.log("adding a new note");
    // const note = {
    //   _id: "65aa786bbc781bb46[added]",
    //   user: "659f97231f01ddf02486e56d",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2024-01-17T07:50:19.520Z",
    //   __v: 0,
    // };
    // setNotes(notes.concat(note));
  };

  // Delete Note
  const deleteNote = (id) => {
    console.log("deleting a note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    // Api call
    const response = await fetch(`${HOST}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5Zjk3MjMxZjAxZGRmMDI0ODZlNTZkIn0sImlhdCI6MTcwNDk3NDEwMn0.3NWEnroW3nHsCsAQnPlVBAcn37PKQx182KdO7dO40JI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
