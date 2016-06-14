var http = require('http');
var cheerio = require('cheerio');
var Client = require('node-rest-client').Client;

module.exports = {
    onRun: function(config, dependencies, jobCallback) {
        status = {
            "Team": [{
                "email": "Testname Surname",
                "message": "Yahooo !!!",
                "time": "2016-06-14 08:01:40"
            }, {
                "email": "Atlasboard Jira",
                "message": "Unwell, Will check emails",
                "time": "2016-06-14 09:01:40"
            }, {
                "email": "Nodejs Javascript",
                "message": " Working from home",
                "time": "2016-06-14 09:15:35"
            }, {
                "email": "James Bond",
                "message": "Waiting in beach side hotel :) _/\\_",
                "time": "2016-06-14 00:20:40"
            }]
        };


        var logger = dependencies.logger;

        // logger.debug('TEST DEBUG');
        // logger.warn('TEST WARN');
        // logger.log('TEST LOG');
        // logger.trace('TEST TRACE');
        //
        // logger.log('hello');
        // logger.trace('hello', 'world');
        // logger.debug('hello %s',  'world', 123);
        // logger.info('hello %s %d',  'world', 123, {foo:'bar'});
        // logger.warn('hello %s %d %j', 'world', 123, {foo:'bar'});
        // logger.error('hello %s %d %j', 'world', 123, {foo:'bar'}, [1, 2, 3, 4], Object);

        var options = {
            url: 'https://necsparkbot.herokuapp.com/stats1',
            //  path: '/stats',
            method: 'GET'
        };

        dependencies.request(options, function(err, response, body) {
            logger.info('response.statusCode : ' + response.statusCode);
            logger.info('response.statusMessage : ' + response.statusMessage);
            //  logger.warn('response.body : ' + response.body  );

            //  logger.info('body : ' + body.replace(/(\r\n|\n|\r)/gm,""));
            //  logger.info('body : ' + body.replace(/\n/g,""));
            //  logger.info('body : ' + body.replace(/\n/g,"").replace(/\s/g,""));
            if (response.statusCode === 200) {
                logger.info('body : ' + body);
                jobCallback(null, {
                    status: body,
                    title: config.widgetTitle
                });
            } else {
                logger.warn('body : ' + body);
                logger.info('Dummy JSON Object status : ' + JSON.stringify(status));
                jobCallback(null, {
                    status: JSON.stringify(status),
                    title: config.widgetTitle
                });
            }
        });
    }
};
