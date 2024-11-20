import os
import requests


def lambda_handler(event, context):
    runai_api_url = os.environ["RUNAI_API_URL"]
    runai_api_key = os.environ["RUNAI_API_KEY"]

    # Job configuration
    job_config = {
        "name": "example-job",
        "image": "example-image",
        "resources": {"gpu": 1, "cpu": 4, "memory": "16Gi"},
        "command": ["python3", "train.py"],
        "args": ["--epochs", "10"],
    }

    # Trigger job via Run:AI API
    response = requests.post(
        f"{runai_api_url}/jobs",
        headers={"Authorization": f"Bearer {runai_api_key}"},
        json=job_config,
    )

    if response.status_code == 201:
        return {"statusCode": 200, "body": "Job triggered successfully"}
    else:
        return {"statusCode": response.status_code, "body": response.text}
