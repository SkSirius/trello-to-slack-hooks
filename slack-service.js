var restler = require('restler');
var conf = require('./config');


var createMessage = function(model, key) {
    var socialLink = conf.slack.socialLink + '/' + key;


    var message = ' --- \n By: *' + model.memberName + '* \n';
    message += 'List: *' + model.commentList.name + '*  \n';
    message += 'Card: *' + model.commentCard.name + '* (Board: *' + model.boardName + '*) \n\n';
    message += model.commentText + '\n\n';
    message += 'URL: <' + model.cardUrl + '|' + model.cardUrl + '> @' + key + '\n ---';

    return message;
}

module.exports = {
    sendToSlack: function(model, channel, key) {
        var message = {
            username: 'Trello-Notification-Bot',
            text: createMessage(model, key)
        };

        restler.post(channel, { data: { text: JSON.stringify(message), link_names: 1 } }).on('complete', function(data, resp) {
            console.log("DATA", data);
            console.log('RESP', resp.statusCode);
        });
    }
}
