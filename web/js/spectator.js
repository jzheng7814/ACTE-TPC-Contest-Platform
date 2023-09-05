var curSpecField = "none";
var specID = -1;
var specCID = -1;

function hideSpecSections() {
    curSpecField = "none";
    $("#spec_backlay").hide();
    $("#spec_results").hide();
    typeOfSubmissions="noSubmissions";
}

function loadSpec(cid) {
    /* Requests to load spectator page of a given competition.

    Args:
        cid: The competition id
    */
    hideAllSections();
    $("#web_header").show();
    $("#spec_page").show();
    $("#spec_overlayTitle").html("Loading...");
    $("#spec_overlayLong").html("Retrieving Info...");
    $("#spec_overlay").show();
    send({func:"loadSpec", cid:cid});
}

function loadSpecCallback(obj) {
    /* Loads the spec page.

    Args:
        cid: The competition id
        specid: The id of the user with spec access to the given competition
        competitionkey: The competition key, used for loading images
    */
    hideAllSections();
    hideSpecSections();
    
    specCID = obj.cid;
    specID = obj.specid;

    $("#spec_overlay").hide();

    $("#spec_competition_name").html(obj.name);
    $("#top_competition_name").html(" - "+obj.name);
    curSpecField = "backlay";
    
    curPage = "spec";
    $("#web_header").show();
    $("#spec_page").show();
    spScoreboard();
}

function spScoreboard()
{
    /* Requests to open the admin scoreboard.

    Args:
    */
    hideSpecSections();
    $("#spec_results").show();
    curSpecField = "results";
    $("#spec_results_list").html("Loading...");
    send( {func:"specScoreboard", cid:specCID} )
}

function specScoreboardCallback(obj)
{
    /* Shows the scoreboard.

    Args:
        obj: Everything needed to generate the scoreboard.
    */
    $("#spec_results").show();
    $("#spec_results_list").html(generateScoreboard(obj, true, true));
}

function specScoreboardDivision() {
    /* Requests to open the scoreboard of a specific division.

    Args:
    */
    hideSpecSections();
    $("#spec_results").show();
    curSpecField = "results";
    send( {func:"specScoreboard", cid:specCID, division:$("#admin_sb_division_gef").val()} )
    $("#spec_results_list").html("Loading...");
}