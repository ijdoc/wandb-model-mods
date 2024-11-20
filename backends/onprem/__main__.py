import pulumi
import pulumi_aws as aws

# Trigger Lambda function to connect via SSH
lambda_function = aws.lambda_.Function(
    "onprem-trigger",
    runtime="python3.9",
    handler="ssh_trigger.lambda_handler",
    code=pulumi.AssetArchive({"ssh_trigger.py": pulumi.FileAsset("ssh_trigger.py")}),
    role="<role-arn>",
)

pulumi.export("function_arn", lambda_function.arn)
