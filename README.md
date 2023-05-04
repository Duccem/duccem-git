# Committer 

A little CLI tool to make more easy semantics commits

## Installation

```bash
 $ npm install -g ducen-git
```

## Commands

| command | alias                | Description                  |
| --------|----------------------|------------------------------|
| commit  | -c --commit          | Make a commit with a message |
| add     | -a --add             | Add to the staging           |
| amend   | -ca ----commit-amend | Make commit to amend         |

## Usage 

### Add to staging
```bash
$ ducen-git -a
```

### Commit with message
```bash
$ ducen-git -c
```

### Commit amend
```bash
$ ducen-git -ca
```