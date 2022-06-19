function addPaper(title, author, ref, year, link, image) {
  document.getElementById("paper_container").innerHTML +=
    "<div class='card border-1 shadow rounded-3 overflow-hidden'>\
        <div class='card-body p-0'>\
            <div class='row gx-0'>\
              <div class='py-lg-4 px-lg-4 col-xl-3'><img class='img-fluid rounded' src='"+image+"' alt='Paper cover' /></div>\
                <div class='col-lg-6 col-xl-9 py-lg-1'>\
                    <div class='p-3 p-md-4'>\
                        <div class='h5 fw-bolder'>"+title+"</div>\
                        <p>"+author+"</p>\
                        <div class='h6'>"+ref+", "+year+".\
                        <a href='"+link+"'><div class='badge bg-primary bg-gradient rounded-pill mb-2'>Read Online</div></a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>";
}

addPaper("Influence of the surrounding medium on the luminescence-based thermometric properties of single Yb3+/Er3+ codoped yttria nanocrystals",
"GALINDO, J. A. O. ; PESSOA, A.R. ; AMARAL, A. M. ; MENEZES, L DE S.",
"Nanoscale Advances, v. 3, p. 6231-6241",
"2021",
"https://pubs.rsc.org/en/content/articlelanding/2021/NA/D1NA00466B",
"images/article-nanoscale adv,2021,3,6231-6241.jpg");

addPaper("Phonon-assisted NIR-to-visible upconversion in single β-NaYF4 microcrystals codoped with Er3+ and Yb3+ for microthermometry applications: Experiment and theory",
"GONÇALVES, I.M. ; PESSOA, A.R. ; HAZRA, C. ; CORREALES, Y.S. ; RIBEIRO, S.J.L. ; DE S. MENEZES, L.",
"Journal of Luminescence, v. 231, p. 117801",
"2021",
"https://www.sciencedirect.com/science/article/abs/pii/S0022231320317683?via%3Dihub",
"images/article-jour lumin, 231, 117801, 2021.jpg");

addPaper("Microcontroller-based magnetometer using a single nitrogen-vacancy defect in a nanodiamond",
"C. SÁNCHEZ, E. D. ; PESSOA, A. R. ; AMARAL, A. M. ; DE S. MENEZES, L.",
" AIP Advances, v. 10, p. 025323",
"2020",
"https://aip.scitation.org/doi/figure/10.1063/1.5139115",
"images/article-aip adv, 10, 025323, 2020.jpg");
