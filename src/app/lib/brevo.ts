import * as brevo from "@getbrevo/brevo";

const instanseApi = new brevo.TransactionalEmailsApi();
const api_key ="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"

instanseApi.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  api_key as string
);

interface Params {
  subject: string;
  to: { email: string; name: string }[];
  htmlContent: string;
}

export async function sendSmtpEmail({ subject, to, htmlContent }: Params) {
  const smtpEmail = new brevo.SendSmtpEmail();

  smtpEmail.subject = subject;
  smtpEmail.to = to;
  smtpEmail.htmlContent = `<html><body>${htmlContent}</body></html>`;
  smtpEmail.sender = {
    name: "Nacho Ledesma",
    email: "nacholedesma33@gmail.com",
  };

  try {
    const response = await instanseApi.sendTransacEmail(smtpEmail);
    console.log("API response:", response);
  } catch (e) {
    console.error("Error during email sending process:");

    if (e instanceof Error) {
      console.error("Error message:", e.message);
    }

    if (typeof e === "object" && e !== null && "response" in e) {
      const response = (e as any).response;
      console.error("Response status:", response?.status);
      console.error("Response data:", response?.data);
    }
  }
}

