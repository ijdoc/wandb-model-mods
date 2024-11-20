import pulumi
import pulumi_gcp as gcp

# Deploy a Cloud Function
bucket = gcp.storage.Bucket("function-source")

archive = gcp.storage.BucketObject(
    "source-archive",
    bucket=bucket.name,
    source=pulumi.FileAsset("main.py"),
)

function = gcp.cloudfunctions.Function(
    "hello-world",
    source_archive_bucket=bucket.name,
    source_archive_object=archive.name,
    runtime="python39",
    trigger_http=True,
    entry_point="hello_world",
)

# Export the function's URL
pulumi.export("function_url", function.https_trigger_url)
