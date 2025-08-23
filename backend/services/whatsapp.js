const twilio = require('twilio');
const Reminder = require('../models/reminder');

// Initialize Twilio client with your credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = 'whatsapp:+918500961428'; // Your Twilio WhatsApp number
const client = twilio(accountSid, authToken);

class WhatsAppService {
  static async sendReminder(reminder) {
    try {
      // Format the message with a friendly greeting
      const message = `⏰ *HealthMate Reminder* ⏰\n\n${reminder.message}\n\n_This is an automated reminder from HealthMate._`;
      
      // Send the message
      const result = await client.messages.create({
        body: message,
        from: whatsappNumber,
        to: `whatsapp:${reminder.phoneNumber}`
      });

      // Update the reminder status
      await Reminder.findByIdAndUpdate(reminder._id, {
        status: 'sent',
        messageSid: result.sid
      });

      return { success: true, messageId: result.sid };
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      
      // Update the reminder status to failed
      await Reminder.findByIdAndUpdate(reminder._id, {
        status: 'failed',
        error: error.message
      });
      
      return { success: false, error: error.message };
    }
  }

  static async sendWelcomeMessage(phoneNumber) {
    try {
      const welcomeMessage = `👋 *Welcome to HealthMate!*\n\n` +
        `Thank you for choosing HealthMate as your health companion. ` +
        `We'll help you stay on top of your health goals with timely reminders.`;
      
      await client.messages.create({
        body: welcomeMessage,
        from: whatsappNumber,
        to: `whatsapp:${phoneNumber}`
      });
      
      return { success: true };
    } catch (error) {
      console.error('Error sending welcome message:', error);
      return { success: false, error: error.message };
    }
  }
}

module.exports = WhatsAppService;
