import express from 'express'
import DB from "./DB.mjs";
import cors from "cors"

const app = express()
const port = 8000

app.use(cors())

app.get('/students', async (req, res) => {
    const students = DB.getStudents();
    // TODO: calculate average of grades
    res.json(students);
})

// TODO save new student grade

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
