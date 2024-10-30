from apscheduler.schedulers.blocking import BlockingScheduler
import datetime

# Define the task
def my_task():
    print(f"Task executed at {datetime.datetime.now()}")

# Set up the scheduler
scheduler = BlockingScheduler()
scheduler.add_job(my_task, 'interval', hours=1)  # Runs every hour

# Start the scheduler
if __name__ == '__main__':
    print("Scheduler started")
    scheduler.start()
