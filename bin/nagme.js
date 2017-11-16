import { setInterval } from 'timers';

const notifier = require('node-notifier');
const args = require('minimist')(process.argv.slice(2));

const interval = parseInt(args.i) ? parseInt(args.i) : 5;
const title = args.t ? args.t : "Stay Focussed!";
// Handle messages in quotes or without quotes
const message = typeof(args._.join) === 'function' ? args._.join(' ') : args._;

setInterval(() => {
    notifier.notify({
        title, message
    });
}, interval * 60 * 1000)

