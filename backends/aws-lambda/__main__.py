import pulumi
import pulumi_aws as aws

# Create an IAM role for the Lambda function
role = aws.iam.Role(
    "lambda-role",
    assume_role_policy="""{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Action": "sts:AssumeRole",
                "Principal": { "Service": "lambda.amazonaws.com" },
                "Effect": "Allow"
            }
        ]
    }""",
)

aws.iam.RolePolicyAttachment(
    "lambda-basic-policy",
    role=role.id,
    policy_arn="arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
)

# Create the Lambda function
lambda_function = aws.lambda_.Function(
    "hello-world",
    runtime="python3.9",
    handler="handler.lambda_handler",
    code=pulumi.AssetArchive({".": pulumi.FileArchive("./")}),
    role=role.arn,
    environment={"variables": {"MESSAGE": "Hello from Pulumi!"}},
)

# Export the Lambda function's ARN;
pulumi.export("function_arn", lambda_function.arn)
