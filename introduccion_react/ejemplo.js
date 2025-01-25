
listNotes = [
    {
        id: "1",
        title: "test",
        description: "test"
    },
    {
        id: "2",
        title: "test",
        description: "test"
    },
    {
        id: "3",
        title: "test",
        description: "test"
    }
]

listNotes.filter((note) => note.id !== 2) //actualizar
[
    {
        id: "1",
        title: "test",
        description: "test"
    },
    {
        id: "3",
        title: "test",
        description: "test"
    }
]