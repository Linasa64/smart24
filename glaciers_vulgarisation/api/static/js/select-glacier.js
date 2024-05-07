// Fonction pour ouvrir un onglet spécifique
function openTab(evt, glacierName,idTab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(idTab);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(glacierName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.preventDefault(); // Pour empêcher le comportement par défaut du lien
  }