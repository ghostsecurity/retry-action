# Retry action

This very simple action will take a command and a number of times to retry on failure. 

The action makes use of the function from [this gist](https://gist.github.com/sj26/88e1c6584397bb7c13bd11108a579746) of a Bash retry function.

## Inputs

## `retry-count`

The number of times to retry, defaults to 5

## `command`

**Required** The command to run

## Example usage

```yaml
uses: owenrumney/retry-action@v1
with:
  retry-count: 5
  command: |
    make test-integration
```
