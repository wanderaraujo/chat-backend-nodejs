var Pusher = require('pusher');

var pusher = new Pusher({
    appId: '769531',
    key: '6729210a0326f10db4a4',
    secret: 'ae48e15b348f2fe27e73',
    cluster: 'us2',
    forceTLS: true
});
  
module.exports = pusher;  
