# Duccem-git 

A little CLI tool to make more easy semantics commits

## Installation

```bash
 $ npm install -g @duccem/duccem-git
```

## Commands

| command | alias                | Description                  |
| --------|----------------------|------------------------------|
| commit  | -c --commit          | Make a commit with a message |
| add     | -a --add             | Add to the staging           |
| amend   | -ca --commit-amend   | Make commit to amend         |
| push    | -p --push            | Push the commit              |

## Usage 

### Add to staging
```bash
$ duccem-git -a
$ dcgit -a
```

### Commit with message
```bash
$ duccem-git -c
$ dcgit -c
$ dcgit
```

### Commit amend
```bash
$ duccem-git -ca
$ dcgit -ca
```

### Push commit
```bash
$ duccem-git -p
$ dcgit -p
```