# Retry action

This very simple action will take a command and a number of times to retry on failure. 

## Inputs

### retry-count

The number of times to retry, defaults to 5

### command

**Required** The command to run

## Example usage

```yaml
uses: ghostsecurity/retry-action@v1
with:
  retry-count: 5
  command: |
    make test-integration
```
