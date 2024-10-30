from tasks import my_task

# Add tasks to the queue
for i in range(10):
    my_task.delay(f"Task {i}")
