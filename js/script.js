// AOS animation
AOS.init();

// lang
$(document).ready(function(){
  var dictionary, set_lang, en, es;

  // $.getJSON("../locales/en.json", function(json) {
  //   en = json
  // });
  // $.getJSON("../locales/es.json", function(json) {
  //   es = json
  // });

  // Object literal behaving as multi-dictionary
  dictionary = {
    "en": {
      "Getting started": "Getting started",
      "Soon": "Soon",
      "Buy NFC": "Buy NFC",
    },
    "es": {
      "Getting started": "Empezando",
      "Soon": "Pronto",
      "Buy NFC": "Comprar NFC",
    }
  };

  // Function for swapping dictionaries
  set_lang = function (dictionary) {
    $("[data-translate]").text(function () {
      var key = $(this).data("translate");
      if (dictionary.hasOwnProperty(key)) {
        return dictionary[key];
      }
    });
  };

  //
  $(document).on("click", function (event) {
    if ($(event.target).hasClass('lang__selected')) {
      $("#lang").addClass('active');
    } else {
      $("#lang").removeClass('active');
    }
  });

  // Swap languages when menu changes
  $(".lang__item").on("click", function (e) {
    var language = $(e.target).text().toLowerCase();
    if (dictionary.hasOwnProperty(language)) {
      set_lang(dictionary[language]);
    }
    $("#lang")
        .html(language)
        .removeClass('active');
  });

  // Set initial language to English
  set_lang(dictionary.en);
});
