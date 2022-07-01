import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })

export const PORT: any = process.env.PORT
export const EMAIL_USER: any = process.env.EMAIL_USER
export const EMAIL_PASS: any = process.env.EMAIL_PASS
