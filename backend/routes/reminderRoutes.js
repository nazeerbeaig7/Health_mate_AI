const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const reminderController = require('../controllers/reminderController');
const authMiddleware = require('../middleware/auth');

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Validation rules
const reminderValidation = [
  body('phoneNumber')
    .notEmpty().withMessage('Phone number is required')
    .matches(/^[0-9]{10,15}$/).withMessage('Please enter a valid phone number'),
  body('message')
    .notEmpty().withMessage('Message is required')
    .isLength({ max: 1000 }).withMessage('Message is too long (max 1000 characters)'),
  body('scheduledTime')
    .notEmpty().withMessage('Scheduled time is required')
    .isISO8601().withMessage('Invalid date format. Use ISO 8601 format')
    .custom((value) => {
      if (new Date(value) < new Date()) {
        throw new Error('Scheduled time must be in the future');
      }
      return true;
    }),
  body('frequency')
    .optional()
    .isIn(['once', 'daily', 'weekly', 'monthly']).withMessage('Invalid frequency')
];

// Routes
router.post('/', reminderValidation, reminderController.createReminder);
router.get('/', reminderController.getUserReminders);
router.put('/:id', reminderValidation, reminderController.updateReminder);
router.delete('/:id', reminderController.deleteReminder);

module.exports = router;
