const cron = require('node-cron');

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Task is running every minute');
  // Add any additional scheduled tasks here
});

console.log("Scheduler is active. Task will run every minute.");
