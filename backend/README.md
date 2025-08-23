# HealthMate WhatsApp Reminder System

This is the backend service for HealthMate's WhatsApp reminder system. It allows users to set health-related reminders that will be sent via WhatsApp at specified times.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Twilio account with WhatsApp API access

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   - Copy `.env.example` to `.env`
   - Update the values in `.env` with your configuration:
     ```env
     # Server
     PORT=5000
     NODE_ENV=development
     
     # MongoDB
     MONGODB_URI=mongodb://localhost:27017/healthmate
     
     # Twilio (WhatsApp)
     TWILIO_ACCOUNT_SID=your_account_sid_here
     TWILIO_AUTH_TOKEN=your_auth_token_here
     
     # JWT (for authentication)
     JWT_SECRET=your_jwt_secret_here
     JWT_EXPIRE=30d
     JWT_COOKIE_EXPIRE=30
     
     # Frontend URL (for CORS)
     FRONTEND_URL=http://localhost:3000
     ```

4. **Twilio Setup**
   - Sign up for a Twilio account at https://www.twilio.com/
   - Get your Account SID and Auth Token from the Twilio Console
   - Set up a WhatsApp Sandbox in Twilio Console
   - Add your WhatsApp number to the sandbox (you'll need to send a message to the sandbox number)

## Running the Server

```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Reminders

- `GET /api/reminders` - Get all reminders for the authenticated user
- `POST /api/reminders` - Create a new reminder
- `PUT /api/reminders/:id` - Update a reminder
- `DELETE /api/reminders/:id` - Delete a reminder

### Example Request

```bash
# Create a new reminder
curl -X POST http://localhost:5000/api/reminders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "message": "Take your medication",
    "phoneNumber": "+919876543210",
    "scheduledTime": "2023-12-31T20:00:00.000Z",
    "frequency": "daily"
  }'
```

## Scheduler

The scheduler runs as a background process and checks for pending reminders every minute. When a reminder's scheduled time arrives, it sends the message via WhatsApp and updates the reminder status.

## Deployment

### Requirements
- Node.js environment
- MongoDB database
- Twilio account with WhatsApp API access

### Steps
1. Set up a MongoDB database (local or cloud)
2. Configure environment variables in production
3. Install PM2 for process management:
   ```bash
   npm install -g pm2
   ```
4. Start the application:
   ```bash
   pm2 start server.js --name "healthmate-reminders"
   ```
5. Set up PM2 to start on boot:
   ```bash
   pm2 startup
   pm2 save
   ```

## License

This project is licensed under the MIT License.
