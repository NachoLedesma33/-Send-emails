import { sendSmtpEmail } from "./lib/brevo";

export async function handleForm(formData: FormData) {
  "use server";
  const title = formData.get("title");
  const to_name = formData.get("to_name");
  const to_email = formData.get("to_email");
  const content = formData.get("content");

  if (!title || !to_name || !to_email || !content) {
    return console.log("Please fill all fields");
  }

  console.log({ title, to_name, to_email, content });

  await sendSmtpEmail({
    subject: title as string,
    to: [
      {
        email: to_name as string,
        name: to_email as string,
      },
    ],

    htmlContent: content as string,
  });
}
