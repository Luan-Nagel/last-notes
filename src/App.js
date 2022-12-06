import Actions from "./components/Actions/Actions";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import Notes from "./components/Notes/Notes";
import NotesArea from "./components/NotesArea/NotesArea";
import HighlightProvider from "./context/HighlightContext";
import NoteListProvider from "./context/NoteListContext";
import NoteFormProvider from "./context/NoteFormContext";

function App() {
  return (
    <NoteFormProvider>
      <NoteListProvider>
        <HighlightProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes />
          </NotesArea>
        </HighlightProvider>
      </NoteListProvider>
    </NoteFormProvider>
  );
}

export default App;
