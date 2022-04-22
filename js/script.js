// AOS animation
AOS.init({
  offset: 40
});

// copy to clipboard
function copyContractNo() {
  var copyText = document.getElementById("contractNo");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("copyTooltip");
  tooltip.innerHTML = "Copied";
}

function copyTooltip() {
  var tooltip = document.getElementById("copyTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


$(document).ready(function(){
  $('#copyBtn')
      .click(copyContractNo)
      .mouseout(copyTooltip)

  // lang
  var dictionary, set_lang, en, ru;

  // $.getJSON("../locales/en.json", function(json) {
  //   en = json
  // });
  // $.getJSON("../locales/ru.json", function(json) {
  //   ru = json
  // });

  // Object literal behaving as multi-dictionary
  dictionary = {
    "en": {
      "Getting started": "Getting started",
      "Coming Soon": "Coming Soon",
      "Buy NFC": "Buy NFC",
    },
    "ru": {
      "Getting started": "Начало работы",
      "Coming Soon": "Вскоре",
      "Buy NFC": "Купить NFC",
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
