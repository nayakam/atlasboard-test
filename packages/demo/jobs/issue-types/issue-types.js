var http = require('http');
var cheerio = require('cheerio');
var Client = require('node-rest-client').Client;

module.exports = {
  onRun: function (config, dependencies, jobCallback) {
    status = { "Team" : [{"email": "a@yahoo.com", "message": "Test 1", "time" :"2016-06-13T08:01:40.081Z"},
      {"email": "b@yahoo.com", "message": " sick" , "time" :"2016-06-13T09:01:40.081Z"},
      {"email": "c@test.com", "message": " Working from Home" , "time" :"2016-06-13T22:01:40.081Z"},
      {"email": "d@yahoo.com", "message": "With Client" , "time" :"2016-06-13T12:20:40.081Z" }] };


    var logger = dependencies.logger;
    logger.warn('status: ' + status );
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
      url: 'https://necsparkbot.herokuapp.com/stats',
    //  path: '/stats',
      method: 'GET'
    };

    dependencies.request(options, function(err, response, body) {
          logger.info('response.statusCode : ' + response.statusCode  );
          logger.info('response.statusMessage : ' + response.statusMessage  );
        //  logger.warn('response.body : ' + response.body  );
          logger.info('body : ' + body  );
          logger.info('body : ' + body.replace(/(\r\n|\n|\r)/gm,""));
          logger.info('body : ' + body.replace(/\n/g,""));
          logger.info('body : ' + body.replace(/\n/g,"").replace(/\s/g,""));
         jobCallback(null, {status: body, title: config.widgetTitle});
    });

    //jobCallback(null, {status: status, title: config.widgetTitle});

    // var client = new Client();
    // // direct way
    // client.get("https://necsparkbot.herokuapp.com/stats", function (data, response) {
    //     // parsed response body as js object
    //     logger.info(data);
    //     // raw response
    //     logger.info(response);
    // });
    //
    // // registering remote methods
    // client.registerMethod("jsonMethod", "https://necsparkbot.herokuapp.com/stats", "GET");
    //
    // client.methods.jsonMethod(function (data, response) {
    //     // parsed response body as js object
    //     logger.info(data);
    //     // raw response
    //     logger.info(response);
    // });
  }
};
