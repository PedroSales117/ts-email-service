import nodemailer from 'nodemailer'
import { emailInterface } from '../protocols/email'

export class Email {
  async send (emailData: emailInterface): Promise<any> {
    const trasporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: emailData.emailSender,
        pass: emailData.emailSenderPass
      }
    })
      .sendMail({
        from: `${emailData.emailSender}`,
        to: `${emailData.emailReceiver}`,
        subject: `${emailData.emailSubject}`,
        text: `${emailData.emailText}`,
        html: `${emailData.emailHtml}`
      })
      .then(emailSentInfo => {
        return emailSentInfo
      })
    return await trasporter
  }
}
