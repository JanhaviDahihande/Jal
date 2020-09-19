const notifier = require('node-notifier');
const path = require('path');

var intervalInSeconds = 10;
var refreshIntervalId = setInterval(showNotification, intervalInSeconds * 1000);

const reminderMessages = [
    'Give your body the water it needs! Take a sip!',
    'Take a sip!',
    'Time to drink water!',
    'Put some fluid in your body!'
];

function getRandomArbitrary() {
    const max = reminderMessages.length;
    return reminderMessages[Math.floor(Math.random() * max)];
}

function showNotification() {
    notifier.notify(
        {
          title: 'Jal 💦',
          message: getRandomArbitrary(),
          icon: path.join(__dirname, 'drop.png'),
          sound: true,
          wait: true,
          actions: ['Yes'],
          closeLabel: 'Stop'
        },
        function (err, response) {
          if (response == 'closed') {
            console.log("You opted out from reminders :(");
            clearInterval(refreshIntervalId);
          }
        }
    );
}