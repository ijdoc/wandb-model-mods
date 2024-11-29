# ModelMods - custom interactive panels for your W&B Workspace

Improve your ML workflows with custom, interactive web panels (applets) you can use, extend and log to any W&B workspace. ModelMods has two complementary uses:
1. **When logging a frontend as an HTML object**: you will extend the functionality of your Weights & Biases (W&B) workspace, with a custom interactive panel (applet).
2. **When deploying a backend** you can either:
   - implement a custom backend handler for your logged applet, or
   - setup a serverless handler for your W&B automations (a.k.a. webhooks), or
   - both!

## Getting Started

### Prerequisites

#### Frontend
- Install [node](https://nodejs.org/en/download/package-manager) (& npm)

#### Backends
- Install [uv](https://docs.astral.sh/uv/getting-started/installation/) to manage python environments and dependencies
- Install [pulumi](https://www.pulumi.com/docs/iac/download-install/) to manage the backend's infrastructure as code (IaC)
- Configure your cloud provider (or onprem infra) access credentials

### Local Development

#### Frontend

- Navigate to the frontend directory (e.g., `frontend/`)
- Install dependencies: `npm install`
- Start the local development server: `npm dev`

#### Backends

- Navigate to the desired directory (e.g., `backends/aws-lambda/`)
- Deploy: `pulumi up`
- Create or use a pulumi stack for your deployment. If you are using a free pulumi account to deploy your backend, the 'organization' is your username.

### Deployment

#### Frontend

#### Backend

## Repo Organization
```
frontend/                  # React + Vite frontend example
└── ...
backends/                  # Pulumi backend examples
├── aws-lambda/            # AWS Lambda trigger
├── aws-sagemaker/         # TODO: AWS Lambda → SageMaker trigger
├── aws-onprem/            # TODO: AWS Lambda → On-prem trigger
├── azure/                 # TODO: Azure cloud function trigger
├── gcp/                   # TODO: GCP cloud function trigger
├── README.md              # Documentation
└── .gitignore
LICENSE
README.md
```
