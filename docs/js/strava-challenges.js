var stravaChallenges = stravaChallenges || {};
stravaChallenges.data = {
    segments_count: null,
    segments_loaded: 0,
    leaderboards_overall: [],
    leaderboards_women: []
};

stravaChallenges.updateUI = function() {

}

stravaChallenges.iframeReady = function(index, element) {
    // increment loaded segments
    stravaChallenges.data.segments_loaded++;
    // get leaderboard tables
    var leaderboard_overall = $(element)(".leaderboards > table:first");
    var leaderboard_women = $(element)(".leaderboards > table:last");
}

// start point ("ready" method)
$(function() {
    // get all iframes
    var iframes = $("iframe");
    // initialize counter
    stravaChallenges.data.segments_count = iframes.length;
    
    // ready event handler for all iframes 
    iframes.each(function(index, element) {
        $(element).ready(function() { stravaChallenges.iframeReady(index, element); });
    });
});
