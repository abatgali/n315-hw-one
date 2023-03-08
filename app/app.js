function changeRoute(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "")
    console.log(pageID);

    if(pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function(data) {
            console.log("data" + data);
            $("#app").html(data);
        });
    }else {
        $.get(`pages/home/home.html`, function(data) {
            // console.log("data" + ho);
            $("#app").html(data);
        });
    }
    
}

function initURLsListener(){        
    
    $(window).on("hashchange", changeRoute);
    changeRoute();

}


$(document).ready(function(){
    initURLsListener();
})