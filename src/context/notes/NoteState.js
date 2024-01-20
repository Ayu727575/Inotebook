import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "65a609c793a8h540b88",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "6578g1b460908c64337",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration 2",
      description:
        "dsa is very important topic for grabing job in product based company 2",
      tag: "personal",
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    },
    {
      _id: "65a609c88290a255440b8",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "65a786e0908cc6437",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration 2",
      description:
        "dsa is very important topic for grabing job in product based company 2",
      tag: "personal",
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    },
    {
      _id: "65a60d3a88290a255540b8",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "65a78c6b781b4609008c6437",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration 2",
      description:
        "dsa is very important topic for grabing job in product based company 2",
      tag: "personal",
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    },
    {
      _id: "65a6b09c793a88290a22554",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "65aa786bbc781bb46",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration 2",
      description:
        "dsa is very important topic for grabing job in product based company 2",
      tag: "personal",
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add Note
  const addNote = (title, description, tag) => {
    //TODO api call
    console.log("adding a new note");
    const note = {
      _id: "65aa786bbc781bb46[added]",
      user: "659f97231f01ddf02486e56d",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete Note
  const deleteNote = () => {};
  // Edit Note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
