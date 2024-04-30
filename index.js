function showTrans() {
  const originalJapanese = document.getElementById("genjokoan-jp");
  const translationEnglish = document.getElementById("genjokoan-en");
  const showTransButton = document.getElementById("show");

  if (translationEnglish.hidden) {
    showTransButton.innerHTML = "hide translation";
    translationEnglish.hidden = false;
  } else {
    showTransButton.innerHTML = "show translation";
    translationEnglish.hidden = true;
  }
}
