widget = {

    onData: function(el, data) {
        if (data.title) {
            $('h2', el).text(data.title);
        }

        var $content = $('.content', el);
        $content.empty();
        console.log("data:" + data);
        console.log("data.status:" + data.status);
        console.log("data.status.length :" + data.status.length);

        if (data.status.Team != null) {
            console.log("<div> data.status.Team : " + data.status.Team);
            console.log("<div> data.status.Team.length : " + data.status.Team.length);
            if (data.status.Team.length > 0) {
                console.log(" data.status.Team[0] : " + data.status.Team[0]);
            }
        } else {
            console.log("<div> data.status.Team  is " + data.status.Team);
        }

        var json = JSON.parse(data.status);
        console.log("json : " + json);
        if (json.Team != null) {
            console.log(" json.Team : " + json.Team);
            console.log(" json.Team.length : " + json.Team.length);

        } else {
            console.log("<div> json.Team is " + json.Team);
        }
        var table = '<table width="100%">';        
        table += "<tr> <th width=\"35%\"> Name </th><th width=\"25%\">  Time </th> <th width=\"40%\"> Status </th></tr>";
        if (json.Team.length) {
            json.Team.forEach(function(team) {
                table += "<tr>" +
                    "<td>" + team.email + "</td>" +
                    "<td>" + team.time + "</td>" +
                    "<td>" + team.message + "</td>" +
                    "</tr>";
            })
        }
        table += "</table>";
        $content.append(table);


        // if (json.Team.length) {
        //     json.Team.forEach(function (team) {
        //     $content.append(
        //         "<div class='item-container'>" +
        //           "<div class='email'>" + team.email + "</div>" +
        //           "<div class='time'>" + team.time + "</div>" +
        //           "<div class='message'>" + team.message + "</div>" +
        //         "</div>"
        //     );
        //   })
        // }

        // if (data.status.Team.length) {
        //   data.status.Team.forEach(function (team) {
        //     $content.append(
        //         "<div class='item-container'>" +
        //           "<div class='email'>" + team.email + "</div>" +
        //           "<div class='time'>" + team.time + "</div>" +
        //           "<div class='message'>" + team.message + "</div>" +
        //         "</div>"
        //     );
        //   })
        // }
    }
};
