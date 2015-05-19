var frameModule = require("ui/frame");
var topmost = frameModule.topmost();

var page;

exports.onPageLoaded = function(args) {
    page = args.object;

    frames.topmost().navigate({
        moduleName: "squash",
        context: appViewModel.redditItems.getItem(args.index)
    });
};