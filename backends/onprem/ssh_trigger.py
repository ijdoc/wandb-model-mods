import os
import paramiko


def lambda_handler(event, context):
    host = os.environ["ONPREM_HOST"]
    user = os.environ["SSH_USER"]
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(host, username=user, key_filename="/path/to/key")

    # Run the workload
    stdin, stdout, stderr = ssh.exec_command("python3 /path/to/script.py")
    output = stdout.read().decode()
    ssh.close()

    return {"statusCode": 200, "body": output}
