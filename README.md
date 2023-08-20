# :x: Mark every build as red

[![Test status](https://github.com/denbeigh2000/always-red/actions/workflows/workflow.yml/badge.svg)](https://github.com/denbeigh2000/always-red/actions/workflows/workflow.yml)

Spur chaos in your corner of the world by making your build status
permanently red.

This action immediately exits with an error status, making the build
red. It should work on any repository, with no inputs, regardless of
any surrounding steps.

## Usage
### Inputs
None required.

### Example

`.github/workflows/my-workflow.yml`
```yaml
name: "Super-important test"
on: push
jobs:
  run:
    runs-on: ubuntu-latest
    steps:
      - uses: denbeigh2000/always-red
```
