(function() {
    var langBtn = document.getElementsByTagName("span");
    var textSections = document.getElementsByTagName("section");

    for (var i = 0; i < langBtn.length; i++) {
        langBtn[i].addEventListener("click", changeLang);
    }

    function changeLang(event) {
        var elem = event.target;
        deactivateAllLangButtons();
        elem.className += " active";

        var lang = elem.getAttribute("data-lang")
        hideAllTextSections();
        document.getElementById(lang + "-text").className = "";
    }

    function deactivateAllLangButtons() {
        for (var i = 0; i < langBtn.length; i++) {
            langBtn[i].className = "pointer";
        }
    }

    function hideAllTextSections() {
        for (var i = 0; i < textSections.length; i++) {
            textSections[i].className = "hide";
        }
    }
})();