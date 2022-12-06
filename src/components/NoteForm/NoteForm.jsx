import React, { useEffect } from "react"
import { FaCheck, FaBan } from 'react-icons/fa'
import { useNoteList } from "../../context/NoteListContext"
import { useNoteForm } from '../../context/NoteFormContext'
import './styles.css'
import { useHighlight } from "../../context/HighlightContext"

export default function NoteForm() {
  const { noteList, setNoteList } = useNoteList()
  const { title, setTitle, description, setDescription, setVisibleForm } = useNoteForm()
  const { highlight, setHighlight } = useHighlight()

  useEffect(() => {
    saveLocalNotes()
  }, [noteList])

  function titleHandler(e) {
    setTitle(e.target.value)
  }

  function descriptionHandler(e) {
    setDescription(e.target.value)
  }

  function submitHandler(e) {
    e.preventDefault()
    if (highlight) {
      noteList.forEach(note => {
        if (note.id === highlight) {
          note.title = title
          note.description = description
        }
      })
      setNoteList([...noteList])
    } else {
      setNoteList([
        ...noteList,
        { id: String(Math.floor(Math.random() * 1000)), title, description }
      ])
    }
  }

  function cancelHandler(e) {
    e.preventDefault()
    setHighlight(false)
    setVisibleForm(false)
  }

  function saveLocalNotes() {
    localStorage.setItem('notes', JSON.stringify(noteList))
  }

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title" >Título</label>
        <input id="title" type='text' placeholder="Informe um título" value={ title } onChange={ titleHandler } />
      </div>
      <div>
        <label htmlFor="note" >Nota</label>
        <textarea id="note" type='text' rows='10' placeholder="Escreva sua nota" value={ description } onChange={ descriptionHandler } />
      </div>
      <div className="buttons">
        <button className="cancel" onClick={ cancelHandler } >
          <FaBan className="icon" />
        </button>
        <button type="submit" className="confirm" onClick={ submitHandler }>
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  )
}