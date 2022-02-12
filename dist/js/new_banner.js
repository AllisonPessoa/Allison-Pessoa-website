function addBanner(title, author, description, year, poster_link) {
  document.getElementById("paper_container").innerHTML +=
    "<div class='card border-1 shadow rounded-3 overflow-hidden'>\
        <div class='card-body p-0'>\
            <div class='row gx-0'>\
              <div class='py-lg-4 col-xl-3'> <iframe src='"+poster_link+"' width='250' height='250'></iframe>\
              </div>\
                <div class='col-lg-6 col-xl-9 py-lg-1'>\
                    <div class='p-3 p-md-4'>\
                        <div class='h5 fw-bolder'>"+title+"</div>\
                        <p>"+author+"</p>\
                        <div class='h6'>"+description+"\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>";
}

addBanner("Influence of the excitation power on the characteristics of Nd3+-based single-particle nanothermometers",
"PESSOA, A. R.; GALINDO, J. A. O.; SANTOS, L. F.; GONÇALVES, R. R.; AMARAL, A. M.; DE S. MENEZES, L.",
"Poster presented in the XXXV Meeting of Physicists from North and Northwest Brazil, which took place online due to COVID pandemics, between October 18th to October 20th, 2020.",
"2020",
"https://www.dropbox.com/s/r6nf59ftxqoluiw/Poster%20EFNNE%202021%20-%20Influence%20of%20the%20power_submetido.pdf?raw=1");

addBanner("A photon counter with microsecond temporal resolution, digital filtering and phase-locking",
"PESSOA, A. R.; SÁNCHES, E. D. C.; DE S. MENEZES, L. ; AMARAL, A. M.",
"Poster presented in the Autumn Meeting of the Brazilian Physical Society of 2019, which took place in Aracaju-SE, Brazil, between March 16th to March 23th, 2019.",
"2019",
"https://drive.google.com/file/d/1KSVZQ4K7JFIQ6bzrSaCP21ptdsS8Qlza/preview");
