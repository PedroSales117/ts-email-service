import { Email } from '../config/email.config'

export class EmailController {
  async send (data: any): Promise<any> {
    try {
      const EmailDataSent = new Email().send(data).then((emailData) => {
        return emailData
      })
      return await EmailDataSent
    } catch (err) {
      return err
    }
  }
}
