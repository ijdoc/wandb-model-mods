# PML is the poor man's launch

PML is a set of automation templates for your Weights & Biases (W&B) projects. PML has two primary use cases:
1. **When logging the frontend as an HTML panel**: you can trigger an arbitrary script, using any of the provided backend cloud function examples, directly from the W&B UI.
2. **When deploying a backend**: you can implement:
   - a custom backend handler for your logged custom frontend trigger, or
   - a serverless handler for your W&B automations (a.k.a. webhooks), or
   - both!

## Motivation

W&B used to offer a built-in, no-frills orchestration feature called 'Launch', which has since been deprecated. The templates in this repo should facilitate the integration of W&B with other best-in-class 3rd-party tools that replace, and improve on, the original Launch functionality.

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
├── aws-sagemaker/         # AWS Lambda → SageMaker trigger
├── aws-onprem/            # TODO: AWS Lambda → On-prem trigger
├── azure/                 # TODO: Azure cloud function trigger
├── gcp/                   # TODO: GCP cloud function trigger
├── README.md              # Documentation
└── .gitignore
LICENSE
README.md
```