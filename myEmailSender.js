var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'your-email-service',
	auth: {
		user: 'your-email',
		pass: 'your-password'
	}
});

var mailOptions = {
	from: 'your-email',
	to: 'receiver-email',
	subject: 'Sending Email using NodeJS',
	text: 'Hello from NodeJS'
};

transporter.sendMail(mailOptions, (error, info) => {
	if(error)
		console.log(error);
	else
		console.log('Email sent: ' + info.response);
});
