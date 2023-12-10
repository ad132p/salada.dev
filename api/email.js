const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

function getOrderConfirmationEmailHtml(customerName) {
  return `<html> 
  <head></head>
  <body>
  <p>Hello ${customerName}, welcome to salada.dev . Please click image below to confirm your registration to my website. 
  If you do not want to registe, please disregard this e-mail.</p>
  <img src="img_girl.jpg" alt="fornalha" width="500" height="600">
  </body>
  </html>`;
}

function getMessage(emailParams) {
  return {
    to: emailParams.toEmail,
    from: 'sac@mail.salada.dev',
    subject: 'Register on salada.dev',
    text: `Hey ${emailParams.name}, please confirm your account creation on salada.dev.`,
    html: getOrderConfirmationEmailHtml(emailParams.name),
  };
}

async function sendOrderConfirmation(emailParams) {
  try {
    await sendGridMail.send(getMessage(emailParams));
    return  { message: `confirmation email sent successfully for: ${emailParams.toEmail}`};
  } catch (error) {
    const message = `Error sending order confirmation email: ${emailParams.toEmail}`;
    console.error(message);
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
    return {message};
  }
}

module.exports = {
  sendOrderConfirmation
}

