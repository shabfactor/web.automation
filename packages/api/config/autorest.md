# Scenario: Generate TypeScript interfaces from APIS

> see https://aka.ms/autorest

## Input

```yaml
use-extension:
  '@microsoft.azure/autorest.typescript': '4.4.4'

base-folder: ../src/APIService/
batch:
    - typescript: true
      title: dx-identity-service
      input-file: https://api.dxsandbox.com/identity-service/q/openapi
      output-folder: identity-service

sync-methods: true
client-side-validation: true
```