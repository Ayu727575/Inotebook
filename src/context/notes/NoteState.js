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
    const json = await response.json();

    // add note client
    const note = {
      _id: json._id,
      user: json.user,
      title: json.title,
      description: json.description,
      tag: json.tag,
      date: json.date,
      __v: json.__v,
    };
    setNotes(notes.concat(note));
  };

  // Delete Note
  const deleteNote = async (id) => {
    const response = await fetch(`${HOST}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5Zjk3MjMxZjAxZGRmMDI0ODZlNTZkIn0sImlhdCI6MTcwNDk3NDEwMn0.3NWEnroW3nHsCsAQnPlVBAcn37PKQx182KdO7dO40JI",
      },
    });
    const json = response.json();
    console.log(json);
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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5Zjk3MjMxZjAxZGRmMDI0ODZlNTZkIn0sImlhdCI6MTcwNDk3NDEwMn0.3NWEnroW3nHsCsAQnPlVBAcn37PKQx182KdO7dO40JI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    // Logic to edit in client
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
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
