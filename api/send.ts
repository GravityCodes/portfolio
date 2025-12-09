import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
} as SMTPTransport.Options);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await transporter.sendMail({
      from: "Johan.mesa2001@gmail.com",
      to: "Johan.mesa2001@gmail.com",
      subject: "New Message From Portfolio",
      text: `Name: ${data.name} email: ${data.email} phone Number:${data.phoneNumber} message: ${data.message}`,
      html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0;">

            <center class="wrapper" style="font-family: Arial, Helvetica, sans-serif;width: 100%;table-layout: fixed;background-color: #bbc1bb;padding-bottom: 60px;">
            <table class="main" width="100%" style="border-spacing: 0;width: 100%;max-width: 600px;color: #44413d;text-align: center;">
            <!-- BODY -->
            <tr>
            <td style="padding: 10px;background-color: #fff;border-top: 4px solid#508759;border-spacing: 0;">
                <table width="100%" style="border-spacing: 0;">
                <tr>
                    <td style="padding: 20px 0 20px;text-align: center;margin: 0;border-spacing: 0;">
                    <p style="margin: 0; font-size: 25px; font-weight:bold; "> New Message!</p>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 0 20px;text-align: center;border-spacing: 0;">
                    <ul style="list-style:none; border: 1px solid #44413d; border-radius:5px; padding:10px; margin: 0" >
                        <li style="text-align: left; font-weight:bold; padding: 0 0 10px;">Information</li>
                        <li style="text-align: left; padding: 0 0 10px; font-size:18px; font-weight:bold; color:#508759">${data.name}</li>
                        <li style="text-align: left; padding: 0 0 10px;">${data.email}</li>
                        <li style="text-align: left; padding: 0 0 10px;">${data.phoneNumber}</li>
                        <li style="text-align: left; padding: 0 0 10px;">${data.message}</li>
                    </ul>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 0 20px;text-align: center;border-spacing: 0;">
                    </td>
                </tr>
                </table>
            </td>
            </tr>
            </table>
            </center>
            </body>
            </html>
                        `,
    });
    return new Response("Message Sent!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("A server error has occured. Please try again later.", {
      status: 500,
    });
  }
}
