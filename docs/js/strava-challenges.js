var stravaChallenges = stravaChallenges || {};
stravaChallenges.data = {};

stravaChallenges.updateUI = () {

}

stravaChallenges.iframeReady = (element) {
    stravaChallenges.data.segments_loaded++;
}

// start point ("ready" method)
$(function() {
    // get all iframes
    var iframes = $("iframe");
    // initialize counter
    stravaChallenges.data.segments_count = iframes.length;
    stravaChallenges.data.segments_loaded = 0;
    
    // ready event handler for all iframes 
    iframes.each(function(index, element) {
        $(element).ready(stravaChallenges.iframeReady);
    });
});
