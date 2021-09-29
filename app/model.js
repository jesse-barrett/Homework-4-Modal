var MODEL = (function() {
    //this function updates the page content
    function _navToPage(pageName) {
        $.get(`pages/${pageName}/${pageName}.html`, function(data) {
            $("#app").html(data);
        });
    }
    function _addModal(){
        $("body").append(
            `<div class="modal">
                <div class="modal__bg-click"></div>
                <div class="modal__callout">
                    <h1 class=" modal__callout__title title">You Are Logged In!</h1>
                    <img src="img/check.png" alt="check" class="modal__callout__check">
                </div>
            </div>`
            );
    }
    function _removeModal() {
        $(".modal").css("animation", "fadeOut 0.3s");
        window.setTimeout(function() {
            $(".modal").remove();
        }, 300);
    }
    //make the functions in the MODEL accessible by the CONTROLLER
    return {
        navToPage: _navToPage,
        addModal: _addModal,
        removeModal: _removeModal
    }
})();