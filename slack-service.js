var restler = require('restler');
var conf = require('./config');


var createMessage = function(model) {
    var message = 'New comment in: ';
    message += '*' + model.boardName + ' -> ' + model.commentCard.name + '* \n ';
    message += '*' + model.memberName + '* wrote: *' + model.commentText + '* \n ' ;
    message += '<' + model.cardUrl + '|Click here> for details';

    return message;
}

module.exports = {
    sendToSlack: function(model, channel) {
        var message = {
            username: 'Trello-Notification-Bot',
            text: createMessage(model)
        };

        restler.postJson(channel, message).on('complete', function(data, resp) {
            //console.log("DATA", data);
            console.log('RESP', resp.statusCode);
        });
    }
}
