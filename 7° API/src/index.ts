const express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json({ message: 'ok' })
});

app.listen({PORT}).then(() => console.log('Server Running'));