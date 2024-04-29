package com.java.group.service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class PassMailService {

	@Value("${app.base-url}")
	private String baseUrl;

	@Autowired
	private JavaMailSender javaMailSender;

	public void sendPasswordResetEmail(String resetToken, String email) {
		String resetPasswordLink = baseUrl + "/newuser/resetpassword?token=" + resetToken;

		String subject = "Your Login Details for the SHM-Application";

		String htmlContent = "<html><body>" + "<p>Welcome to our <b>SHM</b> application!</p>" + "<p>Your USER ID: <b>"
				+ email + "</b></p>" + "<p>Click the button below to reset your password:</p>" + "<p><a href=\""
				+ resetPasswordLink
				+ "\" style=\"background-color: #007BFF; color: #FFFFFF; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;\">Reset Password</a></p>"
				+ "<p>Additional information goes here...</p>" + "</body></html>";

		sendHtmlEmail(email, subject, htmlContent);
	}

	public void sendForgotPasswordResetEmail(String resetToken, String email) {
		String resetPasswordLink = baseUrl + "/newuser/resetpassword?token=" + resetToken;

		String subject = "Reset Your Password For SHM APPLICATION.";

		String htmlContent = "<html><body><p>Dear User,</p>" +

				"<p>You have requested to reset your password. Click the link below to reset your password:</p>"
				+ "<p>Your USER ID: <b>" + email + "</b></p>" +

				"<p><a href=\"" + resetPasswordLink
				+ "\" style=\"background-color: #007BFF; color: #FFFFFF; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;\">Reset Password</a></p>"
				+ "<p>If you did not request this, please ignore this email.</p>" +

				"<p>Thank you for your contribution to our SHM system. If you have any questions or require further assistance, please feel free to contact us at hr@dext.site.</p>"
				+ "<p>Best regards,</p>" + "<p>The SHM Team</p>" + "</body></html>";

		sendHtmlEmail(email, subject, htmlContent);
	}

	public void sendBridgeInfo(String email, String bridgeName, String role) {
		String subject = "NEW BRIDGE ASSIGNED";

		String htmlContent = "<html><body>" + "<p>Dear User,</p>"
				+ "<p>Welcome to our Structural Health Monitoring (SHM) application!</p>" + "<p>Your user ID: <b>"
				+ email + "</b></p>"
				+ "<p>We are pleased to inform you that you have been assigned to the following bridge:</p>"
				+ "<p><b>Bridge Name:</b> <strong>" + bridgeName + "</strong></p>" + "<p><b>Role:</b> <strong>" + role
				+ "</strong></p>"
				+ "<p>Thank you for your contribution to our SHM system. If you have any questions or require further assistance, please feel free to contact us.</p>"
				+ "<p>Best regards,</p>" + "<p>The SHM Team</p>" + "</body></html>";

		sendHtmlEmail(email, subject, htmlContent);
	}

	public void sendEmail(String email, String bridgeName, String role, String resetToken) {
		String subject = "NEW BRIDGE ASSIGEND ";

		String resetPasswordLink = baseUrl + "/newuser/resetpassword?token=" + resetToken;

		String htmlContent = "<html><body>" + "<p>Dear User,</p>"
				+ "<p>Welcome to our Structural Health Monitoring (SHM) application!</p>" + "<p>Your user ID: <b>"
				+ email + "</b></p>" + "<p>Click the button below to reset your password:</p>" + "<p><a href=\""
				+ resetPasswordLink
				+ "\" style=\"background-color: #007BFF; color: #FFFFFF; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 5px;\">Reset Password</a></p>"
				+ "<p>Additional information goes here...</p>"
				+ "<p>We are pleased to inform you that you have been assigned to the following bridge:</p>"
				+ "<p><b>Bridge Name:</b> <strong>" + bridgeName + "</strong></p>" + "<p><b>Role:</b> <strong>" + role
				+ "</strong></p>"
				+ "<p>Thank you for your contribution to our SHM system. If you have any questions or require further assistance, please feel free to contact us.</p>"
				+ "<p>Best regards,</p>" + "<p>The SHM Team</p>" + "</body></html>";

		sendHtmlEmail(email, subject, htmlContent);
	}

	void sendRemoveUserFromBridgeEmail(String email, String bridgeName,String role) {
		String subject = "Removal from Bridge Notification";
		String htmlContent = "<html><body>" + "<p>Dear User,</p>"
				+ "<p>We regret to inform you that you have been removed as a <b>Role:</b> <strong>"+role+"</strong> from the <b>Bridge Name:</b> <strong>"
				+ bridgeName + "</strong></p>" + "<p>This decision was made by the administration.</p>"
				+ "<p>If you have any questions or concerns, please feel free to contact us at <strong> hr@dext.site.com </strong></p>"
				+ "<p>Thank you for your understanding.</p>" + "<p>Regards,<br>DEXT IT SOLUTIONS PUNE </p>"
				+ "</body></html>";

		// Assuming mailService is an instance of your mail service
		sendHtmlEmail(email, subject, htmlContent);
	}

	private void sendHtmlEmail(String to, String subject, String htmlContent) {
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, "utf-8");

		try {
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(htmlContent, true);

			javaMailSender.send(message);
		} catch (MessagingException e) {

			e.printStackTrace();
		}

	}
}
