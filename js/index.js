function startupTranslate(){
  var lang = localStorage.getItem("lang");
  if(lang != null){
    hideChoosenLanguage(`${lang}Language`);
    translate(lang, 'i18n');
  }
  else {
    hideChoosenLanguage("enLanguage");
    translate('en', 'i18n');
  }
}

//This function will be called when user click changing language
function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    // if(lng == 'en'){
    //   $("#enTranslator").css('color', '#f4623a');
    //   $("#khTranslator").css('color', '#212529');
    // } 
    // if(lng == 'kh'){
    //   $("#khTranslator").css('color', '#f4623a');
    //   $("#enTranslator").css('color', '#212529');
    // }
}

function hideChoosenLanguage(lang){
  $("#enLanguage")[0].style.display = "block";
  $("#ptLanguage")[0].style.display = "block";
  $("#esLanguage")[0].style.display = "block";

  $(`#${lang}`)[0].style.display = "none";
}

$(document).ready(function(){ 
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    localStorage.setItem("lang", "en");
    translate('en', 'i18n');
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#esTranslator").click(function(){
    localStorage.setItem("lang", "es");
    translate('es', 'i18n');
  });
  $("#ptTranslator").click(function(){
    localStorage.setItem("lang", "pt");
    translate('pt', 'i18n');
  });
});