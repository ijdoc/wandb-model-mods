# PML is poor man's launch

PML or "poor man's launch" is a template for logging custom panels to launch experiments directly from Weights & Biases

## Requirements

- node (npm)
- The pulumi CLI
- A public cloud (AWS, GCP or Azure) account

> [!IMPORTANT]
> The template will be implemented and tested using a serverless (lambda) function on AWS, which in turn triggers a sample workload on Sagemaker. All other examples will be provided as is, without testing or maintenance.


## Getting Started

## Repo Organization
```
┌── LICENSE
├── README.md
├── frontend/                   # Node/React/Vite frontend example
    ├── src/                    # React source
    ├── index.html              # frontend entry point
    ├── package-lock.json       # Node locked packages
    ├── package.json            # Node config
    ├── vite.config.js          # Vite config
    ├── README.md               # Documentation
    ├── .eslintrc.cjs           # ESLint rules
    └── .gitignore
├── backends/                   # Pulumi backend example
    ├── aws/                    # AWS implementation
    ├── gcp/                    # GCP implementation
    ├── azure/                  # Azure implementation
    ├── onprem/                 # On-prem implementation
    ├── Pulumi.yaml             # Root Pulumi configuration
    ├── Pulumi.dev.yaml         # Root dev environment config
    ├── README.md               # Documentation
    └── .gitignore
```