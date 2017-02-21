var restler = require('restler');
var conf = require('./config');


var createMessage = function(model) {
    var message = ' --- \n By: *' + model.memberName + '* \n';
    message += 'List: *' + model.commentList.name + '*  \n';
    message += 'Card: *' + model.commentCard.name + '* (Board: *' + model.boardName + '*) \n\n';
    message += model.commentText + '\n\n';
    message += 'URL: <' + model.cardUrl + '|' + model.cardUrl + '> (@username) \n ---';

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
