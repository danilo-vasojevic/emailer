import * as nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'

dotenv.config({ path: 'secrets/danilo.secret' })

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS,
    },
})

async function main() {
    const info = await transporter.sendMail({
        from: `"Danilo 👻" <${process.env.USER}>`,
        to: 'brmoslav@gmail.com',
        subject: 'Hello ✔',
        text: 'Hello world',
        html: `<h1>Hello world from ${process.env.USER}</h1>`,
        attachments: [
            {
                filename: 'importantFile.txt',
                path: 'attachment.txt'
            }
        ]
    })
}

main().catch(console.error)
