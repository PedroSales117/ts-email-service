import { router } from '../config/express.config'
import { EmailController } from '../controllers/emailController'

export const sendEmailRouter = router

sendEmailRouter.post('/send', (request, response) => {
  const { emailSender, emailSenderPass, emailReceiver, emailSubject, emailText, emailHtml } = request.body
  const requiredFields = ['emailSenderPass', 'emailSender', 'emailReceiver', 'emailSubject', 'emailText', 'emailHtml']

  for (const field of requiredFields) {
    if (!request.body[field]) {
      return response.status(400).json({ Error: `Missing required field ${field}` })
    }
  }

  void new EmailController().send({ emailSender, emailSenderPass, emailReceiver, emailSubject, emailText, emailHtml })
    .then(emailResponse => {
      if (emailResponse?.accepted[0] !== emailReceiver) {
        return response.status(400).json({ Error: 'Email not send', Message: emailResponse })
      }
      return response.status(200).json({ data: emailResponse })
    })
})
