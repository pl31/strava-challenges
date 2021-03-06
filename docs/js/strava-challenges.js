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
    var leaderboard_tables = $(element).contents().find("div.leaderboards table");
    //var leaderboard_table_overall = $(leaderboard_tables).eq(1);
    //var leaderboard_table_women = $(leaderboard_tables).eq(2);
}

// start point ("ready" method)
$(function() {
    // get all iframes
    var iframes = $("iframe");
    // initialize counter
    stravaChallenges.data.segments_count = iframes.length;
    
    // ready event handler for all iframes 
    iframes.each(function(index, element) {
        $(element).on("load", function() { stravaChallenges.iframeReady(index, element); });
    });
});
