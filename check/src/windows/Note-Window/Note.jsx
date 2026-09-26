import { useEffect, useState } from 'react'
import MacWindow from '../MacWindow'
import Markdown from 'react-markdown'
import './Note.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Note = ({setWindowState, windowName}) => {

    const [markDown, setMarkDown] = useState(null)

useEffect(()=>{
    fetch("/note.txt").then(res=>res.text()).then(data=>setMarkDown(data))
},[])


  return (

    <MacWindow setWindowState={setWindowState} windowName={windowName}>
    <div className="note-content">
        {markDown && <SyntaxHighlighter language="typescript" style={atelierCaveDark}>{markDown}</SyntaxHighlighter>}
    </div>
    </MacWindow>

)
}

export default Note


// atelierCaveDark, atelierEstuaryDark