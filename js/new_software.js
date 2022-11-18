function addSoftware(title, author, description, year, github_page, image) {
  document.getElementById("paper_container").innerHTML +=
    "<div class='card border-1 shadow rounded-3 overflow-hidden'>\
        <div class='card-body p-0'>\
            <div class='row gx-0'>\
              <div class='py-lg-4 px-lg-4 col-xl-3'> <img class='img-fluid rounded' src='"+image+"' alt=Banner Preview></img>\
              </div>\
                <div class='col-lg-6 col-xl-9 py-lg-1'>\
                    <div class='p-3 p-md-4'>\
                        <div class='h5 fw-bolder'>"+title+"</div>\
                        <p>"+author+", "+year+".</p>\
                        <div class='h6'>"+description+"\
                        </div>\
                        <a href='"+github_page+"'><div class='badge bg-primary bg-gradient rounded-pill mb-2'>Link to GitHub</div></a>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>";
}

addSoftware("Nano Scanner",
"Allison Pessoa",
"NanoScanner is an environment to perform imaging of micro and nanosystems. It executes sample pixel-by-pixel-scan, with nanometric spatial resolution, while acquiring information from any desired peripheral instrument that is interacting with the nanosystem. This brings the versatility of building images from numerous physical parameters.",
"2022",
"https://github.com/AllisonPessoa/nano-scanner",
"images/software-nano_scanner.png");

addSoftware("TCSPC GUI",
"Allison Pessoa",
"This project is a Graphical User Interface (GUI) to interface with a home-made Time-Correlated Single Photon Counter (TCSPC) used for lifetime measurements by using single photon counters. NOT AVAILABLE YET.",
"2021",
"https://github.com/AllisonPessoa/boxcar-averager",
"images/software-tcspc.png");

addSoftware("Luminescence Data Analyser",
"Allison Pessoa",
"Python scripts to compute and manipulate luminescence signal data, including spectral data and decay curves (provenient from time-resolved measurements). It facilitates performing operations and plotting your spectral data, specially when there are tons of them.",
"2020-2022",
"https://github.com/AllisonPessoa/luminescence-data-analyser",
"images/software-lumin_analyser.png");
