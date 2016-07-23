# ADP code contest

## Getting Started
This is coding practice project for Redbox team. Also a platform to figure out debugging and restart between scenario features which doesn't work in current 'grunt e2e' framework.

```shell
npm install
```

## Execution CLI
Just for comparison purpose I implemented this using both commonly used test framework. The default configuration will go to cucumber but you can specify to run this for Jasmine as shown below
```shell
node_modules/.bin/protractor protractor.cuke.js
node_modules/.bin/protractor protractor.jasm.js
```
