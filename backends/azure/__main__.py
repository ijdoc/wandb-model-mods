import pulumi
import pulumi_azure as azure

# Storage account for Function App
storage_account = azure.storage.Account(
    "storageaccount",
    resource_group_name="<resource-group>",
    account_tier="Standard",
    account_replication_type="LRS",
)

# App Service Plan
plan = azure.appservice.Plan(
    "function-plan",
    resource_group_name="<resource-group>",
    kind="FunctionApp",
    sku={"tier": "Dynamic", "size": "Y1"},
)

# Function App
function_app = azure.appservice.FunctionApp(
    "function-app",
    resource_group_name="<resource-group>",
    app_service_plan_id=plan.id,
    storage_account_name=storage_account.name,
    version="~3",
    site_config={
        "app_settings": [{"name": "FUNCTIONS_EXTENSION_VERSION", "value": "~3"}]
    },
)

pulumi.export("function_url", function_app.default_hostname)
