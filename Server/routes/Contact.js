import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
    // console.log('Request body:', req.body)
    const { firstname, lastname, email, phone, message } = req.body

    try {
        const newContact = new Contact({ firstname, lastname, email, phone, message })
        await newContact.save()

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Message from Beamway Media Website',
            html: `
                <h2>New Message from Beamway Media Website</h2>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Message:</strong><br/> ${message}</p>
            `
        })

        res.status(200).json({ success: true, message: 'Message sent successfully' })
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' })
    }
})

export default router