import React from "react"
import NoteForm from "../NoteForm/NoteForm"
import './styles.css'

import { useNoteForm } from "../../context/NoteFormContext"

export default function NotesArea({ children }) {
  const { visibleForm } = useNoteForm()

  return (
    <article className="notes-area">
      { children }
      { visibleForm && <NoteForm /> }
    </article>
  )
}