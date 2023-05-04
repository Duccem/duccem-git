# Duccem-git 

A little CLI tool to make more easy semantics commits

## Installation

```bash
 $ npm install -g duccem-git
```

## Commands

| command | alias                | Description                  |
| --------|----------------------|------------------------------|
| commit  | -c --commit          | Make a commit with a message |
| add     | -a --add             | Add to the staging           |
| amend   | -ca --commit-amend   | Make commit to amend         |

## Usage 

### Add to staging
```bash
$ duccem-git -a
```

### Commit with message
```bash
$ duccem-git -c
```

### Commit amend
```bash
$ duccem-git -ca
```