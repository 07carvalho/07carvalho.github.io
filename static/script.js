(function() {
    var langBtn = document.getElementsByTagName("span");
    var textSections = document.getElementsByTagName("section");

    for (var i = 0; i < langBtn.length; i++) {
        langBtn[i].addEventListener("click", toggleLang);
    }

    function toggleLang(event) {
        deactivateAllLangButtons();
        var elem = event.target;
        elem.className += " active";

        hideAllTextSections();
        var lang = elem.getAttribute("data-lang");
        showSelectedLangSection(lang);
    }

    function showSelectedLangSection(lang) {
        for (var i = 0; i < textSections.length; i++) {
            if (textSections[i].getAttribute("data-lang") == lang + "-text") {
                textSections[i].className = "";
            }
        }
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