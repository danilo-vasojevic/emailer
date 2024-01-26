import * as nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'

dotenv.config({ path: 'secrets/sample.secret' })

const recipient = process.env.RECIPIENT
const user = process.env.USER
const pass = process.env.PASS

async function main() {
    const info = await nodemailer
        .createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: { user, pass },
        })
        .sendMail({
            to: recipient,
            from: `"Anonymous 👻" <${user}>`,
            subject: 'Hello ✔',
            text: 'Hello world',
            html: `<h2>Hello from ${user}</h2>`,
            attachments: [
                {
                    filename: 'importantFile.txt',
                    path: 'attachment.txt',
                },
            ],
        })
}

main().catch(console.error)
