import { sendSmtpEmail } from "./lib/brevo";

export async function handleForm(formData: FormData) {
  "use server";
  const title = formData.get("title");
  console.log({ title });
  const to_name = formData.get("to_name");
  const to_email = formdata.get("to_email");
  const content = formData.get("content");

  if (!title || !to_name || !to_email || !content) {
    return console.log("Please fill all fields");
  }

  console.log({ title, to, content });

  await sendSmtpEmail({
    subject: title as string,
    to: [
      {
        email: to as string,
        name: "Nacho Ledesma",
      },
    ],

    htmlContent: content as string,
  });
}
