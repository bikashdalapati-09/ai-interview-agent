import express from 'express'
import app from './app.js'
import dotenv from 'dotenv'
import connectDB from '../config/connectDB.js'

dotenv.config()

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
    connectDB()
})