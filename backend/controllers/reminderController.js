const Reminder = require('../models/reminder');
const WhatsAppService = require('../services/whatsapp');
const { validationResult } = require('express-validator');

class ReminderController {
  // Create a new reminder
  static async createReminder(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { phoneNumber, message, scheduledTime, frequency = 'once', timezone = 'Asia/Kolkata' } = req.body;
      
      // Create new reminder
      const reminder = new Reminder({
        userId: req.user.id,
        phoneNumber,
        message,
        scheduledTime: new Date(scheduledTime),
        frequency,
        timezone
      });

      await reminder.save();

      // Send welcome message if it's the first reminder for this user
      const reminderCount = await Reminder.countDocuments({ userId: req.user.id });
      if (reminderCount === 1) {
        await WhatsAppService.sendWelcomeMessage(phoneNumber);
      }

      res.status(201).json({
        success: true,
        data: reminder
      });

    } catch (error) {
      console.error('Error creating reminder:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to create reminder'
      });
    }
  }

  // Get all reminders for a user
  static async getUserReminders(req, res) {
    try {
      const reminders = await Reminder.find({ userId: req.user.id })
        .sort({ scheduledTime: 1 });
      
      res.json({
        success: true,
        data: reminders
      });
    } catch (error) {
      console.error('Error fetching reminders:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to fetch reminders'
      });
    }
  }

  // Update a reminder
  static async updateReminder(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const reminder = await Reminder.findOneAndUpdate(
        { _id: id, userId: req.user.id },
        updateData,
        { new: true, runValidators: true }
      );

      if (!reminder) {
        return res.status(404).json({
          success: false,
          error: 'Reminder not found'
        });
      }

      res.json({
        success: true,
        data: reminder
      });
    } catch (error) {
      console.error('Error updating reminder:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to update reminder'
      });
    }
  }

  // Delete a reminder
  static async deleteReminder(req, res) {
    try {
      const { id } = req.params;

      const reminder = await Reminder.findOneAndDelete({
        _id: id,
        userId: req.user.id
      });

      if (!reminder) {
        return res.status(404).json({
          success: false,
          error: 'Reminder not found'
        });
      }

      res.json({
        success: true,
        data: {}
      });
    } catch (error) {
      console.error('Error deleting reminder:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to delete reminder'
      });
    }
  }
}

module.exports = ReminderController;
