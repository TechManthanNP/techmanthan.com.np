import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      designation,
      companyName,
      companyAddress,
      contactNumber,
      companyWorkField,
      email,
      message,
    } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Tech Manthan Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        ${
          designation
            ? `<p><strong>Designation:</strong> ${designation}</p>`
            : ""
        }
        ${
          companyName
            ? `<p><strong>Company Name:</strong> ${companyName}</p>`
            : ""
        }
        ${
          companyAddress
            ? `<p><strong>Company Address:</strong> ${companyAddress}</p>`
            : ""
        }
        ${
          contactNumber
            ? `<p><strong>Contact Number:</strong> ${contactNumber}</p>`
            : ""
        }
        ${
          companyWorkField
            ? `<p><strong>Company Work Field:</strong> ${companyWorkField}</p>`
            : ""
        }
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500 }
    );
  }
}
