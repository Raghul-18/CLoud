from celery import Celery

# Configure Celery to use Redis
app = Celery('tasks', broker='redis://localhost:6379/0')

@app.task
def my_task(data):
    # Simulate a load-intensive task
    print(f"Processing {data}")
