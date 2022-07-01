import { PORT } from './presentation/config'
import { app } from './presentation/config/express.config'
import { sendEmailRouter } from './presentation/routes/sendEmailRouter'

app.listen(PORT, () => {
  console.log(`listen on https:localhost:${PORT}`)
})

app.use('/email', sendEmailRouter)
