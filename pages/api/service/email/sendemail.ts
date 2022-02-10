// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mail, { ResponseError } from '@sendgrid/mail'
import env from '../../../../environment.config.json'
interface SendEmailResponse {
  status: number,
  message: string,
  example?: SendEmail,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SendEmailResponse>
) {
  mail.setApiKey(env.MAILING.SENDGRID.API_KEY);

  let msg = req.body as SendEmail;

  let example_body: SendEmail = {
    from: "string [Required]",
    subject: "string [Required]",
    to: "string [Required]",
    text: "string <optional>",
    html: "string [Required]"

  }
  if (!msg) res.status(400).json({ status: 400, message: `Failed to send email: Missing email body`, example: example_body })
  if (!msg.from) res.status(400).json({ status: 400, message: `Failed to send email: Missing <from>`, example: example_body })
  if (!msg.to) res.status(400).json({ status: 400, message: `Failed to send email: Missing <to>`, example: example_body })
  if (!msg.subject) res.status(400).json({ status: 400, message: `Failed to send email: Missing <subject>`, example: example_body })
  if (!msg.html) res.status(400).json({ status: 400, message: `Failed to send email: Missing <html>`, example: example_body })

  let response: SendEmailResponse = await new Promise((resolve, reject) => {
    mail.send(msg).then(() => {
      resolve({ status: 200, message: `Successfully send email to ${msg.to}` })
    }, (error: ResponseError) => {
      resolve({ status: 200, message: `Failed to send email: ${error.response.body}`, example: example_body })
    }).catch(() => {
      resolve({ status: 200, message: `Failed to send email`, example: example_body })
    })
  })

  res.status(response.status).json(response);
}