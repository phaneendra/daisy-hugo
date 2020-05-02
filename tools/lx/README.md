# lx

Extensible dev cli tool for monorepos

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lx.svg)](https://npmjs.org/package/lx)
[![Downloads/week](https://img.shields.io/npm/dw/lx.svg)](https://npmjs.org/package/lx)
[![License](https://img.shields.io/npm/l/lx.svg)](https://github.com/phaneendra/lx/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
## Usage
<!-- usage -->
```sh-session
$ npm install -g lx
$ lx COMMAND
running command...
$ lx (-v|--version|version)
lx/0.0.0 linux-x64 node-v12.16.1
$ lx --help [COMMAND]
USAGE
  $ lx COMMAND
...
```
<!-- usagestop -->
## Commands
<!-- commands -->
- [lx](#lx)
  - [Usage](#usage)
  - [Commands](#commands)
  - [`lx hello [FILE]`](#lx-hello-file)
  - [`lx help [COMMAND]`](#lx-help-command)

## `lx hello [FILE]`

describe the command here

```
USAGE
  $ lx hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ lx hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/phaneendra/lx/blob/v0.0.0/src/commands/hello.ts)_

## `lx help [COMMAND]`

display help for lx

```
USAGE
  $ lx help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
