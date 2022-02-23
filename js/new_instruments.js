function addOral(title, author, description, year, project_page, github_page, image) {
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
                        <a href='"+project_page+"'><div class='badge bg-primary bg-gradient rounded-pill mb-2'>Link to project page</div></a>\
                        <a href='"+github_page+"'><div class='badge bg-primary bg-gradient rounded-pill mb-2'>Link to GitHub</div></a>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>";
}

addOral("3D-printable Motorized Wheel for optical filter turning",
"Allison Pessoa",
"Often in optics laboratories, one needs to filter the light before analyzing it. It can be done by using commercially available optical filters. This project is a 3D-printed wheel, attached to a stepper motor, where optical filters can be placed at it. The motor can rotate the wheel, thus changing the filter which is in the optical path. Two pushbuttons, placed away from the wheel, for example, control the filter in-line. Project used for Lab automatization by me at UFPE, Recife, Brazil.",
"2022",
"https://create.arduino.cc/projecthub/allisonpessoa/3d-printable-motorized-wheel-for-optical-filter-turning-fba365/",
"",
"images/instruments-rotation_wheel.png");

addOral("Heating Device",
"Allison Pessoa",
"The Heating Device acts to hold at a constant and adjustable setpoint (through PID control) the temperature in a thermal blanket (heater), while a thermistor is constantly reading the temperature. The communication PC-Heater is done via serial, through which some commands can be sent, like changing the PID parameters or changing the temperature setpoint value. Furthermore, a GUI (Graphic User Interface) can be designed to control the hardware, and plot the temperature in real-time. This project was shared with Simon Bongarz at LMU, Munich, Germany, for his Master's project.",
"2020",
"https://create.arduino.cc/projecthub/allisonpessoa/gui-heating-device-with-pid-temperature-control-c31aa2",
"https://github.com/AllisonPessoa/heating-device",
"images/instruments-heating_device.png");
