import Chat from "./pages/Chat"
import { Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
      </Routes>
    </>
  )
}