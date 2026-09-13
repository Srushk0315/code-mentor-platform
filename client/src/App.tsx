// Root shell. MentorProvider holds the explain / practice lesson state.
import { MentorProvider } from './context/MentorContext'
import { Workspace } from './pages/Workspace'
import './App.css'

export default function App() {
  return (
    <MentorProvider>
      <div className="app-shell">
        <Workspace />
      </div>
    </MentorProvider>
  )
}
