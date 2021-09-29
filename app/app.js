//MVC: DETECT USER INPUT HERE IN THE CONTROLLER
function route() {
    //retrieve the desired page destination from the URL
    let hashTag = window.location.hash;
    let pageId = hashTag.replace("#/", "");

    //function that lets the MODEL change the page content
    if(pageId == "") {
        //load the page found in the URL
        MODEL.navToPage("home");
    }else {
        //load the home page
        MODEL.navToPage(pageId);
    }
}

function addModalListener() {
    //listen for: the background div of the Modal to be clicked
    $('body').on("click", ".modal__bg-click", function(e) {
        //remove the Modal from the screen
        MODEL.removeModal();
    })
}

function initListeners() {
    //listen for: a URL change
    $(window).on("hashchange", route);

    //when the page first loads, run the route function to find a landing page
    route();

    //listen for: when the submit button on the login page is clicked
    $('body').on("click", "#submit", function() {
        //add the Modal to the page
        MODEL.addModal();
                
        //start a listener in the Modal
        addModalListener();
    });
}

$(document).ready(function() {
    initListeners();
});