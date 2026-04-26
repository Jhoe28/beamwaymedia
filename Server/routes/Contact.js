import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/Contact', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
        // Save contact message to the database
        const newContact = new Contact({ firstName, lastName, email, phone, message });
        await newContact.save();

        // Send email notification to the company
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Message from Beamway Media Website',
            
            html: `
                <h2>New Message from Beamway Media Website</h2>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Message:</strong><br/> ${message}</p>
            `
        })
    } catch (error) {
        console.error('Error occurred while saving contact or sending email:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
})