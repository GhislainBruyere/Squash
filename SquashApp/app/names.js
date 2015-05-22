var frameModule = require("ui/frame");

var page;

exports.onPageLoaded = function(args) {
    page = args.object;
}

exports.tapStart = function(args){
    frameModule.topmost().navigate({
        moduleName: "squash",
        context: "Jean-Michel",
		animated: true
    });
};