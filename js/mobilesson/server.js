/*
this controller should only include the general ajax call the domain url
*/

function ServerController() {

    //variable decleration
    var self = this;
    
    this.domain = "https://";

    this.sendAjax = function (to_url, func) {

        $.ajax({
            type: 'GET',
            url: self.domain + to_url,
            async: false,
            dataType: 'json',
            success: function (json) {
                func(json);
            },
            error: function (e) {
                console.log(e.message);
            }
        });
    }

    this.sendAjaxPost = function (to_url, req, func) {

        $.ajax({
            type: 'POST',
            url: self.domain + to_url,
            async: false,
            data: JSON.stringify(req),
            dataType: 'json',
            success: function (json) {
                func(json);
            },
            error: function (e) {
                console.log(e.message);
            }
        });
    }

    this.getItems = function (func) {
        var to_url = "/appServer.php?type=getItem";
        this.sendAjax(to_url, func);
    }

    this.initPage = function () {
        self.getItems(getItemsSuccess);
    }

    
}