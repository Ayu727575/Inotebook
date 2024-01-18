import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "65a609c793a88290a25540b8",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "65a786bbc781b460908c6437",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration 2",
      description:
        "dsa is very important topic for grabing job in product based company 2",
      tag: "personal",
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    },
    {
      _id: "65a609c793a88290a25540b8",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "65a786bbc781b460908c6437",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration 2",
      description:
        "dsa is very important topic for grabing job in product based company 2",
      tag: "personal",
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    },
    {
      _id: "65a609c793a88290a25540b8",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "65a786bbc781b460908c6437",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration 2",
      description:
        "dsa is very important topic for grabing job in product based company 2",
      tag: "personal",
      date: "2024-01-17T07:50:19.520Z",
      __v: 0,
    },
    {
      _id: "65a609c793a88290a25540b8",
      user: "659f97231f01ddf02486e56d",
      title: "dsa prepration",
      description:
        "dsa is very important topic for grabing job in product based company",
      tag: "personal",
      date: "2024-01-16T04:44:55.428Z",
      __v: 0,
    },
    {
      _id: "65a786bbc781b460908c6437",
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
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
