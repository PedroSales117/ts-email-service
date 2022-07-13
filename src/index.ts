import { PORT } from './presentation/config'
import { app } from './presentation/config/express.config'
import { sendEmailRouter } from './presentation/routes/send-email-router'

app.listen(PORT, () => {
  console.log(`listen on https:localhost:${PORT}`)
})

app.use('/email', sendEmailRouter)
