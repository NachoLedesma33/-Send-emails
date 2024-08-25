import * as brevo from "@getbrevo/brevo";

const instanseApi = new brevo.TransactionalEmailsApi();

instanseApi.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

const smtpEmail = new brevo.SendSmtpEmail();

interface Params {
  subject: string;
  to: { email: string; name: string }[];
  htmlContent: string;
}
export async function sendSmtpEmail({ subject, to, htmlContent }) {
  smtpEmail.subject = subject;
  smtpEmail.to = to;
  smtpEmail.htmlContent = htmlContent;
  smtpEmail.sender = {
    name: "Nacho Ledesma",
    email: "nacholedesma33@gmail.com",
  };

  await instanseApi.sendTransacEmail(smtpEmail);
}
