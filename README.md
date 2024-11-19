# PML is the poor man's launch

PML is a set of automation templates for your Weights & Biases (W&B) projects. PML has two primary use cases:
1. Creating a custom workspace panel that allows you to run an arbitrary script, directly from the W&B UI (e.g., re-run an experiment)
2. Creating a serverless handler for your W&B automations (a.k.a. webhooks)

## Motivation

W&B used to offer a built-in orchestration feature called 'Launch', which has been deprecated. The templates in this repo should facilitate the integration of W&B with other best-in-class 3rd-party tools that replace, and improve on, the original Launch functionality.

## Requirements

- node (npm)
- The pulumi CLI
- A public cloud (AWS, GCP or Azure) account

> [!IMPORTANT]
> The template will be implemented and tested using a serverless (lambda) function on AWS, which in turn triggers a sample workload on Sagemaker. All other examples will be provided as is, without testing or maintenance.


## Getting Started

## Repo Organization
```
LICENSE
README.md
frontend/                   # Node/React/Vite frontend example
├── src/                    # React source
├── index.html              # frontend entry point
├── package-lock.json       # Node locked packages
├── package.json            # Node config
├── vite.config.js          # Vite config
├── README.md               # Documentation
├── .eslintrc.cjs           # ESLint rules
└── .gitignore
backends/                   # Pulumi backend example
├── runai/                  # run.ai integration
├── aws-lambda/             # AWS lambda integration
├── aws-sagemaker/          # AWS sagemaker integration (via lambda)
├── gcp/                    # GCP cloud function integration
├── azure/                  # Azure cloud function integration
├── onprem/                 # On-prem integration
├── Pulumi.yaml             # Root Pulumi configuration
├── Pulumi.dev.yaml         # Root dev environment config
├── README.md               # Documentation
└── .gitignore
```