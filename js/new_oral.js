function addOral(title, author, description, year, presentation_link, abstract_link, image) {
  document.getElementById("paper_container").innerHTML +=
    "<div class='card border-1 shadow rounded-3 overflow-hidden'>\
        <div class='card-body p-0'>\
            <div class='row gx-0'>\
              <div class='py-lg-4 px-lg-4 col-xl-3'> <img class='img-fluid rounded' src='"+image+"' alt=Banner Preview></img>\
              </div>\
                <div class='col-lg-6 col-xl-9 py-lg-1'>\
                    <div class='p-3 p-md-4'>\
                        <div class='h5 fw-bolder'>"+title+"</div>\
                        <p>"+author+"</p>\
                        <div class='h6'>"+description+"\
                        </div>\
                        <a href='"+presentation_link+"'><div class='badge bg-primary bg-gradient rounded-pill mb-2'>Presentation</div></a>\
                        <a href='"+abstract_link+"'><div class='badge bg-primary bg-gradient rounded-pill mb-2'>Abstract</div></a>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>";
}

addOral("Hyperspectral scanning of single-microparticle upconverting thermometers",
"PESSOA, A. R.",
"Oral talk given in the Latin America Optics and Photonics (LAOP) Conference, which took place in Recife-PE, Brazil, from 8 August to 11 August 2022.",
"2022",
"https://www.dropbox.com/s/5z1gl3w8wxk7tcx/LAOP%202022%20presentation%20-%20Allison%20Pessoa.pdf?raw=1",
"https://www.dropbox.com/s/0h7zbxuetwx7k1d/Abstract%20LAOP%20-%20Allison%20-%20Hyperspectral%20Scanning%20of%20single-microparticle%20upconverting%20thermometers.pdf?raw=1",
"images/oral-laop 08-09-2022.png");

addOral("Hyperspectral scanning of single-microparticle upconverting thermometers",
"PESSOA, A. R.",
"Oral talk given in the Optics Group Seminar at Universidade Federal de Pernambuco (UFPE), Brazil, on 3 May 2022.",
"2022",
"https://www.dropbox.com/s/hzos0ez8k0s5p9u/Apresenta%C3%A7%C3%A3o%20Semin%C3%A1rio%20de%20%C3%93ptica.pdf?raw=1",
"https://www.dropbox.com/s/01od73wpqcu6p55/Resumo.pdf?raw=1",
"images/oral-seminario de optica ufpe 03-05-2022.png");

addOral("Influence of the excitation power on the characteristics of Nd3+-based single-particle nanothermometers",
"PESSOA, A. R.",
"Oral talk given in the Optics Group Seminar at Universidade Federal de Pernambuco (UFPE), Brazil, which took place online due to COVID pandemics, on 5 October 2021.",
"2021",
"https://www.dropbox.com/s/zr7hn4o5gd3fn3t/Apresenta%C3%A7%C3%A3o%20-%20Allison%20Pessoa.pdf?raw=1",
"https://www.dropbox.com/s/auy40bdzo4b63r3/Resumo.pdf?raw=1",
"images/oral-seminario de optica ufpe 05-10-2021.png");

addOral("Digital gated integrator for time-resolved single-particle optical spectroscopy",
"PESSOA, A. R.;  DE S. MENEZES, L. ; AMARAL, A. M.",
"Oral talk given in the XXXIV Meeting of Physicists from North and Northwest Brazil, which took place in Maceió-AL, Brazil, from 3 November to 5 November 2019.",
"2019",
"https://www.dropbox.com/s/5tro8d6io6sd94l/Apresenta%C3%A7%C3%A3o%20-%20Allison%20Pessoa.pdf?raw=1",
"https://www.dropbox.com/s/n008e9l1qexhrok/XXXIV%20EFNNE%20-%20Resumo.pdf?raw=1",
"images/oral-enfnne 2019.png");
