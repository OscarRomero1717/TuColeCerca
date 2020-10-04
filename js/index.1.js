var map, heatmap;
let markers = [];
var pdfFileBase64 = "";
var ListaRanking = [];
var divResult = "";
var allInfo;
var listaRankingPrint = [];

var distanciaSave = [];

function initMap() {
    var heatMapData = [
        { location: new google.maps.LatLng(4.719109, -74.031375), weight: 1 },
        { location: new google.maps.LatLng(4.7534889, -74.0378885), weight: 51 },
        { location: new google.maps.LatLng(4.7371475, -74.0308108), weight: 56 },
        { location: new google.maps.LatLng(4.7453291, -74.0394951), weight: 78 },
        { location: new google.maps.LatLng(4.7255574, -74.0322549), weight: 130 },
        { location: new google.maps.LatLng(4.664612, -74.0571459), weight: 49 },
        { location: new google.maps.LatLng(4.7101896, -74.0424098), weight: 30 },
        { location: new google.maps.LatLng(4.7032732, -74.028596), weight: 130 },
        { location: new google.maps.LatLng(4.7666942, -74.0313184), weight: 50 },
        { location: new google.maps.LatLng(4.6693361, -74.0410591), weight: 37 },
        { location: new google.maps.LatLng(4.652518, -74.058304), weight: 2 },
        { location: new google.maps.LatLng(4.6355156, -74.0634685), weight: 57 },
        { location: new google.maps.LatLng(4.665937, -74.0589797), weight: 320 },
        { location: new google.maps.LatLng(4.649656, -74.063097), weight: 258 },
        { location: new google.maps.LatLng(4.6171774, -74.0702045), weight: 85 },
        { location: new google.maps.LatLng(4.6129625, -74.064951), weight: 31 },
        { location: new google.maps.LatLng(4.6112718, -74.0658856), weight: 293 },
        { location: new google.maps.LatLng(4.5800968, -74.0756201), weight: 63 },
        { location: new google.maps.LatLng(4.5902367, -74.0711044), weight: 27 },
        { location: new google.maps.LatLng(4.5695279, -74.0859339), weight: 50 },
        { location: new google.maps.LatLng(4.5783071, -74.0891635), weight: 83 },
        { location: new google.maps.LatLng(4.5663745, -74.1005042), weight: 134 },
        { location: new google.maps.LatLng(4.5489546, -74.0899378), weight: 66 },
        { location: new google.maps.LatLng(4.5420563, -74.0861506), weight: 22 },
        { location: new google.maps.LatLng(4.5203802, -74.0890896), weight: 2 },
        { location: new google.maps.LatLng(4.5383266, -74.1131347), weight: 40 },
        { location: new google.maps.LatLng(4.5095279, -74.1054048), weight: 99 },
        { location: new google.maps.LatLng(4.5056902, -74.1042), weight: 46 },
        { location: new google.maps.LatLng(4.5056683, -74.0984361), weight: 28 },
        { location: new google.maps.LatLng(4.5211166, -74.0950491), weight: 1 },
        { location: new google.maps.LatLng(4.546443, -74.0560129), weight: 14 },
        { location: new google.maps.LatLng(4.595655, -74.1341231), weight: 200 },
        { location: new google.maps.LatLng(4.5959911, -74.119795), weight: 66 },
        { location: new google.maps.LatLng(4.5972667, -74.171624), weight: 32 },
        { location: new google.maps.LatLng(4.6085126, -74.1769892), weight: 73 },
        { location: new google.maps.LatLng(4.60992, -74.18473), weight: 156 },
        { location: new google.maps.LatLng(4.6431556, -74.1884382), weight: 106 },
        { location: new google.maps.LatLng(4.6323476, -74.185276), weight: 17 },
        { location: new google.maps.LatLng(4.6421586, -74.13023), weight: 41 },
        { location: new google.maps.LatLng(4.6404736, -74.078642), weight: 170 },
        { location: new google.maps.LatLng(4.6186916, -74.1354065), weight: 107 },
        { location: new google.maps.LatLng(4.6439852, -74.1357262), weight: 128 },
        { location: new google.maps.LatLng(4.6217296, -74.1481593), weight: 170 },
        { location: new google.maps.LatLng(4.6171506, -74.152504), weight: 106 },
        { location: new google.maps.LatLng(4.6531372, -74.1616439), weight: 11 },
        { location: new google.maps.LatLng(4.6473068, -74.1635706), weight: 56 },
        { location: new google.maps.LatLng(4.6306047, -74.1599617), weight: 148 },
        { location: new google.maps.LatLng(4.6203163, -74.1770971), weight: 74 },
        { location: new google.maps.LatLng(4.6424068, -74.1597204), weight: 177 },
        { location: new google.maps.LatLng(4.6383548, -74.1707244), weight: 50 },
        { location: new google.maps.LatLng(4.6586284, -74.1095285), weight: 55 },
        { location: new google.maps.LatLng(4.6459769, -74.1128811), weight: 83 },
        { location: new google.maps.LatLng(4.6743153, -74.11394109), weight: 64 },
        { location: new google.maps.LatLng(4.6632358, -74.1166642), weight: 49 },
        { location: new google.maps.LatLng(4.7014128, -74.1444969), weight: 18 },
        { location: new google.maps.LatLng(4.7175369, -74.1031249), weight: 168 },
        { location: new google.maps.LatLng(4.6865667, -74.1542518), weight: 22 },
        { location: new google.maps.LatLng(4.67181, -74.155227), weight: 67 },
        { location: new google.maps.LatLng(4.6682581, -74.1000085), weight: 11 },
        { location: new google.maps.LatLng(4.7014432, -74.114508), weight: 38 },
        { location: new google.maps.LatLng(4.6903416, -74.0801836), weight: 93 },
        { location: new google.maps.LatLng(4.6998742, -74.0895903), weight: 82 },
        { location: new google.maps.LatLng(4.6879363, -74.09732), weight: 92 },
        { location: new google.maps.LatLng(4.6813554, -74.1040428), weight: 47 },
        { location: new google.maps.LatLng(4.7181301, -74.1140818), weight: 42 },
        { location: new google.maps.LatLng(4.7166877, -74.115271), weight: 54 },
        { location: new google.maps.LatLng(4.740226, -74.076881), weight: 36 },
        { location: new google.maps.LatLng(4.7142661, -74.0722394), weight: 11 },
        { location: new google.maps.LatLng(4.7722001, -74.0557154), weight: 43 },
        { location: new google.maps.LatLng(4.7539405, -74.055356), weight: 49 },
        { location: new google.maps.LatLng(4.755021, -74.049298), weight: 89 },
        { location: new google.maps.LatLng(4.740978, -74.096272), weight: 6 },
        { location: new google.maps.LatLng(4.7009368, -74.0554073), weight: 66 },
        { location: new google.maps.LatLng(4.7565431, -74.0678602), weight: 23 },
        { location: new google.maps.LatLng(4.7110392, -74.0706086), weight: 72 },
        { location: new google.maps.LatLng(4.6955899, -74.0716872), weight: 30 },
        { location: new google.maps.LatLng(4.7170226, -74.0733486), weight: 135 },
        { location: new google.maps.LatLng(4.7290939, -74.092795), weight: 250 },
        { location: new google.maps.LatLng(4.7404826, -74.0993608), weight: 120 },
        { location: new google.maps.LatLng(4.663569, -74.087116), weight: 18 },
        { location: new google.maps.LatLng(4.6895163, -74.0671358), weight: 76 },
        { location: new google.maps.LatLng(4.6691052, -74.0744671), weight: 90 },
        { location: new google.maps.LatLng(4.665198, -74.0671545), weight: 185 },
        { location: new google.maps.LatLng(4.6459237, -74.071329), weight: 141 },
        { location: new google.maps.LatLng(4.666132, -74.064605), weight: 192 },
        { location: new google.maps.LatLng(4.6586709, -74.0939604), weight: 55 },
        { location: new google.maps.LatLng(4.6520573, -74.0861774), weight: 37 },
        { location: new google.maps.LatLng(4.6399154, -74.0889174), weight: 60 },
        { location: new google.maps.LatLng(4.6531999, -74.0952813), weight: 42 },
        { location: new google.maps.LatLng(4.610614, -74.0843757), weight: 278 },
        { location: new google.maps.LatLng(4.6034988, -74.0977614), weight: 58 },
        { location: new google.maps.LatLng(4.5832989, -74.1000404), weight: 44 },
        { location: new google.maps.LatLng(4.5947191, -74.0957181), weight: 200 },
        { location: new google.maps.LatLng(4.6210604, -74.0952281), weight: 56 },
        { location: new google.maps.LatLng(4.645219, -74.0828719), weight: 33 },
        { location: new google.maps.LatLng(4.6037002, -74.1071036), weight: 72 },
        { location: new google.maps.LatLng(4.5991107, -74.1291017), weight: 60 },
        { location: new google.maps.LatLng(4.6272101, -74.1106959), weight: 81 },
        { location: new google.maps.LatLng(4.5991293, -74.0672921), weight: 87 },
        { location: new google.maps.LatLng(4.5813155, -74.0998585), weight: 133 },
        { location: new google.maps.LatLng(4.5843365, -74.1068595), weight: 183 },
        { location: new google.maps.LatLng(4.5698, -74.1191429), weight: 78 },
        { location: new google.maps.LatLng(4.5545314, -74.1168799), weight: 67 },
        { location: new google.maps.LatLng(4.5509315, -74.1068775), weight: 52 },
        { location: new google.maps.LatLng(4.5211166, -74.0950491), weight: 1 },
        { location: new google.maps.LatLng(4.6293625, -74.1198411), weight: 5 },
        { location: new google.maps.LatLng(4.5413618, -74.1346501), weight: 3 },
        { location: new google.maps.LatLng(4.5062818, -74.1172996), weight: 1 },
        { location: new google.maps.LatLng(4.5743778, -74.1532775), weight: 42 },
        { location: new google.maps.LatLng(4.5698383, -74.1411182), weight: 60 },
        { location: new google.maps.LatLng(4.5537987, -74.1399617), weight: 70 },
        { location: new google.maps.LatLng(4.5375942, -74.1440506), weight: 15 },
        { location: new google.maps.LatLng(4.5884931, -74.1657189), weight: 57 },
        { location: new google.maps.LatLng(4.578195, -74.1550702), weight: 46 },
    ];
    var bogota = new google.maps.LatLng(4.55, -74.11);
    map = new google.maps.Map(document.getElementById("map"), {
        center: bogota,
        zoom: 13,
    });
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
    });
    heatmap.setMap(map);
    heatmap.set("radius", heatmap.get("radius") ? null : 60);
}

function RefreshMap() {
    $("#menu1").css({ height: $(window).height() - 265 + "px" });
    $("#filters").hide();
    setTimeout(function() {
        zoom = map.getZoom();
        center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setZoom(zoom);
        map.setCenter(center);

        google.maps.event.trigger(map, "resize");
    }, 200);
}

function ToggleFilters() {
    $("#filters").toggle();
}


function PrintInfo(data, esRankin) {
    var cardsinfo = "";


    if (data[0].idiomas === undefined) {
        data.idiomas = "No aplica";
    }
    if (data[0].estrato_socio_economico === undefined) {
        data.estrato_socio_economico = "No aplica";
    }
    if (data[0].enfasis_para_el_caracter_academico_de_la_media === undefined) {
        data.enfasis_para_el_caracter_academico_de_la_media = "No aplica";
    }
    if (data[0].modelos_educativos === undefined) {
        data.modelos_educativos = "No aplica";
    }
    if (data[0].discapacidades === undefined) {
        data.discapacidad_por_categoria = "No aplica";
    }
    if (data[0].modelos_educativos === undefined) {
        data.modelos_educativos = "No aplica";
    }
    if (data[0].talentos_o_capacidades_excepcionales === undefined) {
        data.talentos_o_capacidades_excepcionales = "No aplica";
    }

    cardsinfo = cardsinfo + createCards(false, data[0]);




    $("#ComparerDiv").append(cardsinfo);
    divResult = divResult + cardsinfo;
}

function CheckFunction() {
    var index = 0;


    $("#ComparerDiv").html("");
    $("input[type=checkbox]:checked").each(function() {
        if ($("input[type=checkbox]:checked").length >= 3) {

            showComparations();
            clearMarkers();
            $("#sendMailmodal").hide();
            var idColegio = $("input[type=checkbox]:checked")[index].id;
            var url = createInfoCompare(idColegio);

            PrintInfo(url);
            index++;
            // generatePDF('barco');
        }

        // sendMail();
    });
}

function createAPIUrl(idColegio) {
    var query = "nombreestablecimiento=" + idColegio;

    url =
        "https://www.datos.gov.co/resource/xax6-k7eu.json?" +
        query +
        "&$$app_token=K48oToivS8HmR2UDvdG3yrmeJ";

    return url;
}

function Search() {


    clearMarkers();
    $("#Filters").hide();
    document.getElementById("loader").style.display = "block";
    readJson();
}

function ChangeTab(address, schoolName) {
    showMap();
    console.log(address);
    SetDireccion(address, schoolName);
}

function ChangeTabCompartationMAP(address, schoolName) {
    showMap();

    SetDireccion(address, schoolName);
    SetDireccionUser();
}

function showMap() {
    $("#MapContent").show();
    $("#Results").hide();
    $("#Filters").hide();
    $("#ComparerDiv").hide();

    $("#sendMailmodal").hide();

    $("#MapMenu").addClass("active");
    $("#ResultMenu").removeClass("active");
    $("#FilterMenu").removeClass("active");
    $("#CompareMenu").removeClass("active");

    setTimeout(function() {
        zoom = map.getZoom();
        center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setZoom(zoom);
        map.setCenter(center);

        google.maps.event.trigger(map, "resize");
    }, 200);
}


function showFilter() {
    $("#Filters").show();

    $("#Results").hide();
    $("#RootComparerDiv").hide();

    $("#ComparerDiv").hide();
    $("#sendMailmodal").hide();


    $("#MapContent").hide();

    $("#FilterMenu").addClass("active");
    $("#ResultMenu").removeClass("active");
    $("#MapMenu").removeClass("active");
    $("#CompareMenu").removeClass("active");
}

function showResults() {
    $("#Results").show();
    $("#Filters").hide();
    $("#MapContent").hide();
    $("#RootComparerDiv").hide();
    $("#sendMailmodal").hide();
    $("#ComparerDiv").hide();

    $("#ResultMenu").addClass("active");
    $("#FilterMenu").removeClass("active");
    $("#MapMenu").removeClass("active");
    $("#CompareMenu").removeClass("active");
}

function showComparations() {
    $("#RootComparerDiv").show();
    $("#ComparerDiv").show();
    $("#Results").hide();
    $("#Filters").hide();
    $("#MapContent").hide();

    $("#CompareMenu").addClass("active");
    $("#ResultMenu").removeClass("active");
    $("#FilterMenu").removeClass("active");
    $("#MapMenu").removeClass("active");
}

function SetDireccion(address, schoolName) {
    var request = {
        query: address,
        fields: ["name", "geometry"],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        console.log(results);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                createMarker(results[i], schoolName);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}

function SetDireccionUser() {
    address = document.getElementById("addressUser").value;
    var request = {
        query: address,
        fields: ["name", "geometry"],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
        console.log(results);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);
                createMarker(results[i], 'Su dirección');
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}

function generatePDF(fileName) {
    //$("#content").append(divResult);

    var doc = new jsPDF();
    doc.fromHTML($("body").get(0), 15, 15, {
        width: 170,
    });
    console.log(doc);
    demoFromHTML();

}

function convertToBase64() {
    //Read File
    var selectedFile = document.getElementById("inputFile").files;
    namePdf = selectedFile[0];
    //getBase64(selectedFile[0]);
    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        var base64;
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            // Print data in console
            //alert("oscar" + base64);
            pdfFileBase64 = base64;
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
}

function demoFromHTML() {
    var pdf = new jsPDF("p", "pt", "letter");
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = $("#content")[0];



    let date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    if (month < 10) {
        console.log(`${day}-0${month}-${year}`)

        fechaEnMiliseg = 'ColegiosBogota' + `${day}-0${month}-${year}` + '.pdf';
    } else {
        fechaEnMiliseg = 'ColegiosBogota' + `${day}-${month}-${year}` + '.pdf';
        console.log(`${day}-${month}-${year}`)
    }

    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        "#bypassme": function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true;
        },
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522,
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, {
            // y coord
            width: margins.width, // max width of content on PDF
            elementHandlers: specialElementHandlers,
        },

        function(dispose) {
            // dispose: object with X, Y of the last line add to the PDF
            //          this allow the insertion of new lines after html
            pdf.save(fechaEnMiliseg);
        },
        margins
    );
    $("#content").hide();
    return pdf;

    var pdfs = new jsPDF("p", "pt", "letter");
    pdfs.canvas.height = 72 * 11;
    pdfs.canvas.width = 72 * 8.5;

    pdfs.fromHTML(document.body);

    //pdfs.save("test.pdf");
}


function enviar(pdf, nombre, correo) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "colegiosbogota2020@gmail.com",
        Password: "AB9CD84CF2FF50D99DDD05B8520796F0C983",
        To: correo,
        From: "colegiosbogota2020@gmail.com",
        Subject: "Colegios Bogotá resultado comparación",
        Body: "Hola, somo colegios Bogotá, adjuntamos el resultado de la comparacion de colegios selecionado.",
        Attachments: [{
            name: nombre,
            data: pdf,
        }, ],
    }).then((message) => alert('Se ha enviado el correo correctamente,en caso de no encontralo en su bandeja principal por favor busquelo en spam!'));
}

function createMarker(places, name) {
    var markerPlace = new google.maps.Marker({
        map: map,
        title: places.name,
        label: name,
        position: places.geometry.location,
    });
    markers.push(markerPlace);
}

function clearMarkers() {
    setMapOnAll(null);
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function deleteMarkers() {
    clearMarkers();
    markers = [];
}

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}


function newCompare() {
    allInfo = null;

    $.ajax({
        dataType: "json",
        url: "https://oscarromero1717.github.io/TuColeCerca/response.json",
        success: function(datos) {
            if (datos.length > 0) {
                allInfo = datos;
            }
        },
        error: function() {
            alert("Error leyendo fichero ");
        },
    });

}

function readJson(esBusquenombre, nombre) {
    $.ajax({
        dataType: "json",
        url: "https://oscarromero1717.github.io/TuColeCerca/response.json",
        success: function(datos) {
            if (datos.length > 0) {

                allInfo = null;
                if (esBusquenombre) {
                    var result = apliFilterName(datos, nombre);
                } else {
                    var result = ApplyFilter(datos);
                }

                cardResult(result);
                allInfo = datos;
            }
        },
        error: function() {
            alert("Error leyendo fichero ");
        },
    });
}

function searchByNama() {
    name = document.getElementById("nameSearch").value;

    if (name.length > 0) {
        clearMarkers();
        $("#Filters").hide();
        document.getElementById("loader").style.display = "block";
        readJson(true, name)

    }
}

function apliFilterName(data, name) {


    var queryToSearch = "";
    var propertiesToSearch = "";
    queryToSearch = addAmpersand(queryToSearch) + name;
    propertiesToSearch =
        addAmpersand(propertiesToSearch) + "nombre_establecimiento_educativo";
    return filterItems(queryToSearch, data, propertiesToSearch)
}

function ApplyFilter(datos) {
    discapacidades = document.getElementById("discapacity").value;
    zona = document.getElementById("Zone").value;
    clase = document.getElementById("Class").value;
    especialidad = document.getElementById("Specialties").value;
    enfasis = document.getElementById("EMPHASIS").value;


    talentos = document.getElementById("Talents").value;

    var isFalseDiscapacity = discapacidades == "false";
    var isFalseZona = zona == "false";
    var isFalseclase = clase == "false";
    var isFalseEspecialidad = especialidad == "false";
    var isFalseEnfasis = enfasis == "false";

    var isFalseTalentos = talentos == "false";

    var prefilter = datos;
    var queryToSearch = "";
    var propertiesToSearch = "";

    if (!isFalseDiscapacity) {
        queryToSearch = addAmpersand(queryToSearch) + discapacidades;
        propertiesToSearch =
            addAmpersand(propertiesToSearch) + "discapacidad_por_categoria";
    }
    if (!isFalseZona) {
        queryToSearch = addAmpersand(queryToSearch) + zona;
        propertiesToSearch = addAmpersand(propertiesToSearch) + "nombre_localidad";
    }
    if (!isFalseclase) {
        queryToSearch = addAmpersand(queryToSearch) + clase;
        propertiesToSearch = addAmpersand(propertiesToSearch) + "clase";
    }
    if (!isFalseEspecialidad) {
        queryToSearch = addAmpersand(queryToSearch) + especialidad;
        propertiesToSearch =
            addAmpersand(propertiesToSearch) +
            "enfasis_para_el_caracter_academico_de_la_media";
    }
    if (!isFalseEnfasis) {
        queryToSearch = addAmpersand(queryToSearch) + enfasis;
        propertiesToSearch =
            addAmpersand(propertiesToSearch) + "caracter_para_la_media";
    }
    if (!isFalseTalentos) {
        queryToSearch = addAmpersand(queryToSearch) + talentos;
        propertiesToSearch =
            addAmpersand(propertiesToSearch) + "talentos_o_capacidades_excepcionales";
    }

    if (queryToSearch != "" && propertiesToSearch != "") {
        prefilter = filterItems(queryToSearch, datos, propertiesToSearch);
    }

    return prefilter;
}

function addAmpersand(wordToConvert) {
    return wordToConvert == "" ? wordToConvert : wordToConvert + "&";
}

function filterItems(needle, heystack, property) {
    var splitFilter = needle.split("&");
    var splitproperties = property.split("&");
    for (let index = 0; index < splitFilter.length; index++) {
        var query = splitFilter[index].toLowerCase();
        heystack = heystack.filter(function(item) {
            if (typeof item[splitproperties[index]] != "undefined") {
                return item[splitproperties[index]].toLowerCase().indexOf(query) >= 0;
            }
        });
    }
    return heystack;
}

function cardResult(data) {
    if (typeof data == "undefined" || data.length == 0) {
        $("#NotFound")
            .html(`<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <div class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Información de busqueda:</span>
                        Sin resultados, intente con filtros diferentes
                        </div>
                     </div>`);
        $("#ResultSearch").html("");
    } else {
        var notfound = `<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <div class="alert alert-info" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Información de busqueda:</span>
                        Se encontraron ${data.length} registros -->
                        Puedes seleccionar tres colegios para realizar la comparación
                        </div>
                     </div>`;

        $("#NotFound").html(notfound);

        var cards = "";

        for (var i = 0; i < data.length; i++) {
            if (data[i].idiomas === undefined) {
                data[i].idiomas = "No aplica";
            }
            if (data[i].estrato_socio_economico === undefined) {
                data[i].estrato_socio_economico = "No aplica";
            }
            if (
                data[i].enfasis_para_el_caracter_academico_de_la_media === undefined
            ) {
                data[i].enfasis_para_el_caracter_academico_de_la_media = "No aplica";
            }
            if (data[i].modelos_educativos === undefined) {
                data[i].modelos_educativos = "No aplica";
            }
            if (data[i].discapacidad_por_categoria === undefined) {
                data[i].discapacidad_por_categoria = "No aplica";
            }
            if (data[i].modelos_educativos === undefined) {
                data[i].modelos_educativos = "No aplica";
            }
            if (data[i].clase === undefined) {
                entry.clase = "No aplica";
            }
            if (data[i].talentos_o_capacidades_excepcionales === undefined) {
                data[i].talentos_o_capacidades_excepcionales = "No aplica";
            }

            cards = cards + createCards(true, data[i]);
        }

        $("#ResultSearch").html(cards);
    }
    $("#Results").show();
    $("#ResultMenu").addClass("active");
    $("#FilterMenu").removeClass("active");
    $("#MapMenu").removeClass("active");

    document.getElementById("loader").style.display = "none";
}

function createInfoCompare(id) {
    return $(allInfo).filter(function(i, n) {
        return n.nombre_establecimiento_educativo === id;
    });
}

function createCards(withChecks, data) {
    return `${
    withChecks
      ? `<div class="card mb-3" id="InfoAll">`
      : `<div class="col-6"> <div class="card mb-3" id="InfoAllOnlyu">`
  }   
  
  
          <div class="card-body">   
            ${
              withChecks
                ? `<h6 class="" >                
                      <input type="checkbox" onclick="CheckFunction()" class="form-check-input" id="${data.nombre_establecimiento_educativo}">
                      <label class="custom-control-label" for="defaultUnchecked"> Elegir este colegio para comparar</label>
                </h6>`
                : ``
            }     
            
           

              <h6 class="card-title mb-1">
                  <a href="#">${data.nombre_establecimiento_educativo}</a>
              </h6>
              <p class="card-text small">${
                data.direccion1_georeferenciacion
              }                                
              </p>
              <p class="card-text small">
              Localidad : 
              ${data.nombre_localidad}, barrio  ${data.barrio1_geo
  }                                  
            </p>

            <p class="card-text small">
                  Clase: 
                  ${data.clase}                                
              </p>
            

              <p class="card-text small">
                  Discapacidades: 
                  ${
                    data.discapacidad_por_categoria
                  }                                
              </p>

              <p class="card-text small">
                  Talentos excepcionales: 
                  ${
                    data.talentos_o_capacidades_excepcionales
                  }                                
              </p>
              
            
              
              <p class="card-text small">
                  Especialidad: 
                  ${
                    data.enfasis_para_el_caracter_academico_de_la_media
                  }                                
              </p>
              <p class="card-text small">
                  Modelos Educativos: 
                  ${data.modelos_educativos}                                
              </p>


          </div>
          <hr class="my-0">
          <div class="card-body py-2 small">
              
              <a class="mr-3 d-inline-block" href="javascript:void(0)" onclick= ${withChecks ? `"ChangeTab(` : `"ChangeTabCompartationMAP(`}'${
                data.direccion1_georeferenciacion
              }', '${data.nombre_establecimiento_educativo}')">
                  <i class="fa fa-fw fa-map"></i>
                  Mapa
              </a>
            
          </div>
         
        </div>
        ${withChecks ? `</div>` : ``}   
        
        `;
}



function algoritmRanking(colegio,distancia)
{
  var distnacia=0; /// 2.5
  var discapacidades= 0 // 1.25 (4)
  var capacidadExcepcionales=0 //0.25
  var otros  = 0  //1.5 (bilingue 3 --  0.75 2 -- 0.5 1 -- 0.25/ 21 --0.75 -- 14 05,)
  var idiomas= 0; //0.75

  var numeroDiscapacidades = colegio[0].discapacidad_por_categoria;
  var numeroIdiomas = colegio[0].biling_e;
  var numeroEpecialidades = colegio[0].enfasis_para_el_caracter_academico_de_la_media;
  var capacidades= colegio[0].talentos_o_capacidades_excepcionales
  var ditanciaCireccion = distancia;
  var arraydistanbica= ditanciaCireccion.split('km');
  ditanciaCireccion =arraydistanbica[0];
  ditanciaCireccion=ditanciaCireccion.trim();
  ditanciaCireccion=parseInt(ditanciaCireccion);

  
  
  distnacia=ditanciaCireccion != undefined? distanceChangeRanking(ditanciaCireccion):0;

  capacidadExcepcionales = capacidades != undefined && numeroDiscapacidades != 'No aplica' ? 0.25:0;
  var arrayDiscapacidades = numeroDiscapacidades != undefined && numeroDiscapacidades != 'No aplica' ? numeroDiscapacidades.split('-'): 0;
  discapacidades= arrayDiscapacidades.length >0?calculteDiscapacity(arrayDiscapacidades.length):0;

  var arrayIdiomas =  numeroIdiomas != undefined && numeroIdiomas != 'No aplica' ? numeroIdiomas.split('-'): 0;
  idiomas=arrayIdiomas.length >0?calculteIdioms(arrayIdiomas.length):0;

  var arrayEpecialidad =  numeroEpecialidades != undefined && numeroEpecialidades != 'No aplica'? numeroEpecialidades.split('-'): 0;
  otros=arrayEpecialidad.length >0?calculteEpecilatys(arrayEpecialidad.length):0;

  return  otros+idiomas+discapacidades+distnacia+capacidadExcepcionales;

}


function distanceChangeRanking(distance){
    if(distance >=0 && distance <2){return 2.5;}
    if(distance >=2 && distance <4){return 2.25;}
    if(distance >=4 && distance <6){return 2;}
    if(distance >=6 && distance <12){return 1.75;}
    if(distance >=12 && distance <20){return 1.5;}
    if(distance >=20 && distance <25){return 1.25;}
    if(distance >=25 && distance <35){return 1;}
    if(distance >=35 && distance <50){return 0.5;}
    if(distance >=50 ){return 0.25;}
}
function calculteDiscapacity(numeroDiscapcidades)
{
  if(numeroDiscapcidades ===1){return 0.3125}
  if(numeroDiscapcidades ===2){return 0.625}
  if(numeroDiscapcidades ===3){return 0.9375}
  if(numeroDiscapcidades >= 4){return 1.25}
}

function calculteIdioms(numeroidiomas)
{
  if(numeroidiomas ===1){return 0.25}
  if(numeroidiomas ===2){return 0.5}
  if(numeroidiomas >=3){return 0.75}  
}

function calculteEpecilatys(numeroEspecialidades)
{
  return   numeroEspecialidades*0.75/8;
}

function compare()
{
   if( validarDireccion()){
    document.getElementById("loader").style.display = "block";
    $("#ComparerDiv").hide();
    var index = 0; ListaRanking=[];
    
    $("#elementH").html("");
    distanciaSave=[];
    $("input[type=checkbox]:checked").each(function() {
    if ($("input[type=checkbox]:checked").length >= 3) {
        
        
        var idColegio = $("input[type=checkbox]:checked")[index].id;
        var url = createInfoCompare(idColegio);
        url[0]= validarDireccionColegio(url[0]);
        var rankingcolegio={nombre:url[0].nombre_establecimiento_educativo,colegio:url};
        rankingcolegio.puntaje=0;
        ListaRanking.push(rankingcolegio)
        index++;
       
    }
    });        
   
   Testcallback(ListaRanking[0],ListaRanking[1],ListaRanking[2],document.getElementById("addressUser").value);

}
else
{
    alert('Para realizar la compración es necesario una direción para ejecutar el algortimo(distancia), por favor ingresela');
}



}




function validarDireccion ()
{
    miCampoTexto = document.getElementById("addressUser").value;

    return miCampoTexto.length === 0 ? false: true;

}

function validarPDF()
{
    

    var selectedFile = document.getElementById("inputFile").files;

    if  (selectedFile.length > 0 )
    {
        mailUser = document.getElementById("oscar").value;
       
        if(mailUser.length > 0)
        {
            enviar(pdfFileBase64,"ColegiosBogota.pdf",mailUser)
            //alert('Se ha enviado el correo correctamente,en caso de no encontralo en su bandeja principal por favor busquelo en spam')

        }
        else{
            alert('Por favor digite el correo a enviar la información')
        }

    }
    else(
        alert('Por favor seleccione el pdf con el resultado de la comparación que se descargo en su équipo(seleccionar archivo)')

    )



}

function printCompare(data){


    return `<div class="card mb-3" id="InfoAll">
           
      
               <div class="card-body">   
                <h6 class="card-title mb-1">
                      <a   href="#">${data.index}). ${data.colegio[0].nombre_establecimiento_educativo}</a>
                </h6>
                <br />
                <br />
                <br />
                    
                  <p class="card-text">Distancia con direccion digitada:  ${data.distancia}, Dirección: ${data.colegio[0].direccion1_georeferenciacion}</p>
                  <p class="card-text small">
                  Localidad : ${data.colegio[0].nombre_localidad}, Barrio: ${data.colegio[0].barrio1_geo}, Estrato socieconómico: ${data.colegio[0].estrato_geo}, Nombre UPZ : ${data.colegio[0].nombre_upz} </p>
    
                <p class="card-text small">
                      Clase: 
                      ${data.colegio[0].clase} , Calendario: ${data.colegio[0].calendario} , Género: ${data.colegio[0].genero}, Grupo étnicos:   ${data.colegio[0].grupos_etnicos}                           
                  </p>
                
    
                  <p class="card-text small">
                      Discapacidades: 
                      ${
                        data.colegio[0].discapacidad_por_categoria
                      }                                
                  </p>
    
                  <p class="card-text small">
                      Talentos excepcionales: 
                      ${
                        data.colegio[0].talentos_o_capacidades_excepcionales
                      }                                
                  </p>
                  
                
                  
                  <p class="card-text small">
                      Énfasis: 
                      ${
                        data.colegio[0].caracter_para_la_media
                      }                                
                  </p>
                  <p class="card-text small">
                      Especialidades: 
                      ${data.colegio[0].enfasis_para_el_caracter_academico_de_la_media}                                
                  </p>
                  <p class="card-text small">
                      Idiomas: 
                      ${data.colegio[0].biling_e}                                
                  </p>
                  <p class="card-text">
                  Información básica:
                 
                  </p>
                  <p class="card-text small">
                  Teléfono: ${data.colegio[0].telefono}, Correo electrónico: ${data.colegio[0].email}
                 
                  </p>

                  <br />
                  <br />
                  <br />
                  <br />
    
    
              </div>
              <hr class="my-0">
              <div class="card-body py-2 small">
                  
              <br />
              <br />
                
              </div>
            </div>
            <br />
            <br />
            `;
}


function orderCardsCompare(data) {
    var cardsinfo = "";
    

    if (data.colegio[0].biling_e === undefined) {
        data.colegio[0].biling_e = "No aplica";
    }
    if (data.colegio[0].estrato_geo === undefined) {
        data.colegio[0].estrato_geo = "No aplica";
    }
    if (data.colegio[0].enfasis_para_el_caracter_academico_de_la_media === undefined) {
        data.enfasis_para_el_caracter_academico_de_la_media = "No aplica";
    }
    if (data.colegio[0].barrio1_geo === undefined) {
        data.colegio[0].barrio1_geo = "No aplica";
    }
    if (data.colegio[0].discapacidad_por_categoria === undefined) {
        data.discapacidad_por_categoria = "No aplica";
    }
    if (data.colegio[0].nombre_upz === undefined) {
        data.colegio[0].nombre_upz = "No aplica";
    }
    if (data.colegio[0].talentos_o_capacidades_excepcionales === undefined) {
        data.talentos_o_capacidades_excepcionales = "No aplica";
    }

    if (data.colegio[0].genero === undefined) {
        data.colegio[0].genero = "No aplica";
    }

    if (data.colegio[0].email === undefined) {
        data.colegio[0].email = "No aplica";
    }

    if (data.colegio[0].telefono === undefined) {
        data.colegio[0].telefono = "No aplica";
    }

    if (data.colegio[0].clase === undefined) {
        data.colegio[0].clase = "No aplica";
    }

    if (data.colegio[0].calendario === undefined) {
        data.colegio[0].calendario = "No aplica";
    }

    if (data.colegio[0].grupos_etnicos === undefined) {
        data.colegio[0].grupos_etnicos = "No aplica";
    }

    
    cardsinfo = cardsinfo + printCompare( data); 

    $("#elementH").append(cardsinfo);
    //divResult = divResult + cardsinfo;

   

    
}



function Testcallback(direccion1, direccion2,direccion3,origen) { 

    var dir1= direccion1.colegio[0].direccion1_georeferenciacion+',Bogotá, Colombia';
    var dir2=direccion2.colegio[0].direccion1_georeferenciacion+',Bogotá, Colombia';
    var dir3= direccion3.colegio[0].direccion1_georeferenciacion+',Bogotá, Colombia';
   
    var service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
      origins: [origen],
      destinations:[dir1,dir2,dir3],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, callback);

    function callback(response, status) {
        if (status == 'OK') {
          var origins = response.originAddresses;
          var destinations = response.destinationAddresses;
      
          for (var i = 0; i < origins.length; i++) {
            var results = response.rows[i].elements;
            var listNEw=[];
            listNEw.push(direccion1);
            listNEw.push(direccion2);
            listNEw.push(direccion3);
            for (var j = 0; j < results.length; j++) {
    
                if  (results[j].status ===  'NOT_FOUND')
                { 
                    
                    listNEw[j].distancia='55 km';
                    distanciaSave.push(listNEw[j]);
                }
                else
                {
                    var element = results[j];
                    var distance = element.distance.text;
                    var duration = element.duration.text;
                    var to = destinations[j]
                    listNEw[j].distancia=distance;
                    distanciaSave.push(listNEw[j]);
                    
                }
    
              
            }
          }
        }
        continueProcessCompare(distanciaSave);
      }
 
}




function continueProcessCompare (distanciaSave){

    
    ListaRanking=distanciaSave;

    for (var i = 0; i < ListaRanking.length; i++) {
        var ranking=algoritmRanking(ListaRanking[i].colegio,ListaRanking[i].distancia);
        if  (ListaRanking[i].distancia==='55 km'){ListaRanking[i].distancia ='No se encontro direccion en google maps'};
        ListaRanking[i].puntaje=ranking;
        
     }
   


    ListaRanking=ListaRanking.sort(function(a, b) {
        return b.puntaje - a.puntaje;
     });    
    
     for (var i = 0; i < ListaRanking.length; i++) {
         
         var listaOrdenada={puntaje:ListaRanking[i].puntaje,colegio:ListaRanking[i].colegio,index: i+1,distancia:ListaRanking[i].distancia}        
         orderCardsCompare(listaOrdenada);
      }
    
    
      document.getElementById("loader").style.display = "none";
    
     generatePDF();
     alert('Se ha generado un archivo pdf que se desacargara en su equipo con el resultado de la comparación');
    
     $("#sendMailmodal").show();
     
     $("#RootComparerDiv").hide();
     $("#ComparerDiv").hide();
     ListaRanking=[];
     newCompare();
   

}

function validarDireccionColegio(colegio){

  var  direccion  = colegio.direccion1_georeferenciacion;

  if(direccion.includes('KR') ){direccion =direccion.replace('KR', 'Carrera'); colegio.direccion1_georeferenciacion = direccion ;return colegio; }
  if(direccion.includes('CR') ){direccion =direccion.replace('CR', 'Carrera');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }
  if(direccion.includes('k') ){direccion =direccion.replace('K', 'Carrera');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }

  if(direccion.includes('CL') ){direccion =direccion.replace('CL', 'Calle');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }
  if(direccion.includes('C') ){direccion =direccion.replace('C', 'Calle');colegio.direccion1_georeferenciacion = direccion ;return colegio; }

  if(direccion.includes('DG') ){direccion =direccion.replace('DG', 'Diagonal');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }
  if(direccion.includes('D') ){direccion =direccion.replace('D', 'Diagonal');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }
  if(direccion.includes('DIAG') ){direccion =direccion.replace('DIAG', 'Diagonal');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }


  if(direccion.includes('TR') ){direccion =direccion.replace('TR', 'Tranversal');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }
  if(direccion.includes('TV') ){direccion =direccion.replace('TV', 'Tranversal');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }
  if(direccion.includes('T') ){direccion =direccion.replace('T', 'Tranversal');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }

  if(direccion.includes('AK') ){direccion =direccion.replace('AK', 'Avenida carrera');colegio.direccion1_georeferenciacion = direccion ;return colegio;  }
  if(direccion.includes('AC') ){direccion =direccion.replace('AC', 'Avenida calle');colegio.direccion1_georeferenciacion = direccion ;return colegio; }



  colegio[0].direccion1_georeferenciacion=direccion;
  

}