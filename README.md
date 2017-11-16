# NagMe

It nags you every few minutes to do whatever you're supposed to be doing.  Shows you an annoying notification every 5 minutes or so. Useful if you're easily distracted.

![https://imgur.com/q1Xc8Uc](https://imgur.com/q1Xc8Uc.png)
### Installation

Use either `yarn` or `npm`.

```
$ npm install -g nagme
```

```
$ yarn global add nagme
```

### Usage

```
# Basic usage
$ nagme "Finish homework"

# Advanced Usage. Custom 'title'
$ nagme -t "Please!!" Finish your taxes

# Super-advanced usage. Custom interval
$ nagme -i 2 "Are you still working on those TPS reports?"
```
