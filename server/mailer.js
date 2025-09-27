import nodemailer from "nodemailer";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or "outlook", "yahoo", custom SMTP
  auth: {
    user: "parvkumra2003@gmail.com", // your email
    pass: "njesxbsdkqwwowfp"     // app password (NOT your email login password)
  }
});

// Send mail function
async function sendOrderMail(to, subject, text, html) {
  const mailOptions = {
    from: '"parvkumra2003@gmail.com', // sender name
    to,    // recipient email(s)
    subject,
    text,  // plain text
    html   // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📩 Mail sent to:", to);
  } catch (error) {
    console.error("❌ Mail error:", error);
  }
}

export { sendOrderMail };
