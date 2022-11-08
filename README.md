# AutomationTOJ

Automation training repository based on WebdriverIO and Jasmine.

# Getting started Mac OS

### 💼 Prerequisites

- git
- Java SE (https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html). Please make sure to set the right export for `JAVA_HOME` and `PATH` in `.bash_profile` or `.zshrc.` If you don't know this whole process, feel free to Google it.
- brew (https://brew.sh)

### 🔧 Installation

```
brew install nvm
```

Also make sure to have a version of npm above `v8.x.x`

## 🧭 Quickstart

Clone the project and then run the following commands, one by one:

```
nvm use
brew install yarn
yarn install
```

## 📔 Notes

- if you are using `Visual Studio Code` as your IDE, please consider installing the following extensions to make your life easier: `GitLens`, `Path Autocomplete`, `Rainbow Brackets`, `vscode-icons`.

### Commands to run tests

```
yarn test <suite>
```

Summary of command line arguments:

`yarn test` -> the script used to run tests using the local config file, which is `wdio.conf.js`.
`suite` -> can be `template` or `newTests`, check wdio.confs.js for suites structure

### WDIO

Read more about configuring [wdio.conf.js](https://webdriver.io/docs/gettingstarted).
