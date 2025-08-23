const cron = require('node-cron');
const Reminder = require('../models/reminder');
const WhatsAppService = require('./whatsapp');

class Scheduler {
  constructor() {
    this.jobs = new Map();
  }

  async start() {
    // Schedule job to check for pending reminders every minute
    cron.schedule('* * * * *', this.checkAndSendReminders.bind(this));
    
    // Load existing pending reminders
    await this.schedulePendingReminders();
    
    console.log('Scheduler started');
  }

  async schedulePendingReminders() {
    try {
      const now = new Date();
      const pendingReminders = await Reminder.find({
        status: 'pending',
        scheduledTime: { $gt: now }
      });

      for (const reminder of pendingReminders) {
        this.scheduleReminder(reminder);
      }
    } catch (error) {
      console.error('Error scheduling pending reminders:', error);
    }
  }

  async checkAndSendReminders() {
    try {
      const now = new Date();
      const reminders = await Reminder.find({
        status: 'pending',
        scheduledTime: { $lte: now }
      });

      for (const reminder of reminders) {
        await WhatsAppService.sendReminder(reminder);
      }
    } catch (error) {
      console.error('Error sending scheduled reminders:', error);
    }
  }

  scheduleReminder(reminder) {
    const job = setTimeout(async () => {
      try {
        await WhatsAppService.sendReminder(reminder);
        
        // Handle recurring reminders
        if (reminder.frequency !== 'once') {
          const nextTime = this.calculateNextTime(reminder);
          if (nextTime) {
            const newReminder = new Reminder({
              ...reminder.toObject(),
              _id: undefined, // Let MongoDB generate a new ID
              scheduledTime: nextTime,
              status: 'pending'
            });
            await newReminder.save();
            this.scheduleReminder(newReminder);
          }
        }
      } catch (error) {
        console.error('Error in scheduled job:', error);
      }
    }, new Date(reminder.scheduledTime) - new Date());

    this.jobs.set(reminder._id.toString(), job);
  }

  calculateNextTime(reminder) {
    const now = new Date();
    const scheduledTime = new Date(reminder.scheduledTime);
    let nextTime = new Date(scheduledTime);

    switch (reminder.frequency) {
      case 'daily':
        nextTime.setDate(nextTime.getDate() + 1);
        break;
      case 'weekly':
        nextTime.setDate(nextTime.getDate() + 7);
        break;
      case 'monthly':
        nextTime.setMonth(nextTime.getMonth() + 1);
        break;
      default:
        return null;
    }

    return nextTime > now ? nextTime : null;
  }

  cancelReminder(reminderId) {
    const job = this.jobs.get(reminderId);
    if (job) {
      clearTimeout(job);
      this.jobs.delete(reminderId);
    }
  }
}

module.exports = new Scheduler();
