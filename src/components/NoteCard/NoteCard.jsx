export default function NoteCard({ note }) {
    const date = new Date(note.createdAt)
    return (
        <p style={{
            border: '0.5vmin solid black',
            padding: '1vmin',
            margin: '1vmin 20vmin'
        }}>
            {note.text} <br />
            <span className="small-text">Created on {date.toLocaleString('en-US')}</span>
        </p>
    )
}