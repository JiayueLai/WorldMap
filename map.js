var parse ='';
var info = ''; //geojson file
var psv = d3.dsvFormat(";");
var cite = ''
var name =''
var coord=''
var data =''



mapboxgl.accessToken = 'pk.eyJ1IjoiamxhaSIsImEiOiJjamZ5N3JwYTkwZ2pnMzJxNzNydTYwZXlqIn0.-wtht5S4Z5ZuLYEzCmJZgw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jlai/cjf2vwlic6ifu2slwemahpptq',
    zoom:0.2,
    center: [-176.36514,-0.00000]
});
document.addEventListener("scroll", function() {
    map.scrollWheelZoom.disable()
    var timeOut = null;
    if (timeOut != null) {
        clearTimeout(timeOut);
    }
    timeOut = setTimeout("map.scrollWheelZoom.enable()", 1000);
});


map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 5.6900555555556,45.208777777778 ]
                        },
                        "properties": {
                            "author":"Huotari Simo, Pylkkänen Tuomas,...and Hämäläinen Keijo",
                            "location":"European Synchrotron Radiation Facility, France",
                            "description":"Huotari, S., Pylkkänen, T., & Verbeni, R. et al.(2011, jul). Direct tomography with chemical-bond contrast. Nat. Mater., 489--493, Retrieved from: http://dx.doi.org/10.1038/nmat3031",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.9257537,44.4150065 ]
                        },
                        "properties": {
                            "author":"Lavagnino Zeno, Zanacchi Francesca Cella,...and Diaspro Alberto",
                            "location":"Department of Physics, University of Genoa, Italy",
                            "description":"Lavagnino, Z., Zanacchi, F., & Ronzitti, E. et al.(2013). Two-photon excitation selective plane illumination microscopy\\n({2PE-SPIM}) of highly scattering samples: characterization\\nand application. Opt. Express, 5998--6008, Retrieved from: http://dx.doi.org/10.1364/OE.21.005998",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 11.4701,48.1399 ]
                        },
                        "properties": {
                            "author":"Leischner Ulrich, Schierloh Anja,...and Dodt Hans-Ulrich",
                            "location":"Max Planck Institute of Psychiatry, Munich, Germany",
                            "description":"Leischner, U., Schierloh, A., & Zieglgänsberger, W. et al.(2010). Formalin-induced fluorescence reveals cell shape and\\nmorphology in biological tissue samples. PLoS One, e10391, 10.1371/journal.pone.0010391. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0010391",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -123.0743,44.0455 ]
                        },
                        "properties": {
                            "author":"Taormina Michael J, Jemielita Matthew,...and Guillemin Karen",
                            "location":"Department of Physics, University of Oregon, Eugene, USA",
                            "description":"Taormina, M., Jemielita, M., & Stephens, W. et al.(2012, aug). Investigating bacterial-animal symbioses with light sheet\\nmicroscopy. Biol. Bull., 7--20, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/22983029",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 7.087376,50.727055 ]
                        },
                        "properties": {
                            "author":"Ritter Jörg G, Spille Jan-Hendrik,...and Kubitscheck Ulrich",
                            "location":"Institute of Physical and Theoretical Chemistry, Rheinische Friedrich-Wilhelms Universität Bonn, Germany",
                            "description":"Ritter, J., Spille, J., & Kaminski, T. et al.(2010). A cylindrical zoom lens unit for adjustable optical sectioning\\nin light sheet microscopy. Biomed. Opt. Express, 185--193, 10.1364/BOE.2.000185. Retrieved from: http://dx.doi.org/10.1364/BOE.2.000185",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 0.1256,52.1981 ]
                        },
                        "properties": {
                            "author":"Palayret Matthieu, Armes Helen,...and Lee Steven F",
                            "location":"Department of Chemistry, University of Cambridge, Lensfield Road, Cambridge, United Kingdom",
                            "description":"Palayret, M., Armes, H., & Basu, S. et al.(2015). PLoS One, e0125438, 10.1371/journal.pone.0125438. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0125438",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 11.374478,43.846144 ]
                        },
                        "properties": {
                            "author":"Silvestri Ludovico, Allegra Mascaro Anna Letizia,...and Pavone Francesco Saverio",
                            "location":"European Laboratory for Non-Linear Spectroscopy, University of Florence, Italy",
                            "description":"Silvestri, L., Allegra Mascaro, A., & Costantini, I. et al.(2014). Correlative two-photon and light sheet microscopy. Methods, 268--272, Retrieved from: http://dx.doi.org/10.1016/j.ymeth.2013.06.013",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -6.22209,53.30762 ]
                        },
                        "properties": {
                            "author":"Reynaud Emmanuel G, Tomancak Pavel",
                            "location":"School of Biology & Environmental Science, University College Dublin, Ireland",
                            "description":"Reynaud, E., & Tomancak, P.(2010, aug). Meeting report: first light sheet based fluorescence\\nmicroscopy workshop. Biotechnol. J., 798--804, Retrieved from: http://dx.doi.org/10.1002/biot.201000177",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -73.870182,40.652939 ]
                        },
                        "properties": {
                            "author":"Sena Giovanni, Frentz Zak,...and Leibler Stanislas",
                            "location":"Department of Biology, Center for Genomics and Systems Biology, New York University, New York, New York, United States of America",
                            "description":"Sena, G., Frentz, Z., & Birnbaum, K. et al.(2011). Quantitation of cellular dynamics in growing Arabidopsis roots\\nwith light sheet microscopy. PLoS One, e21303, 10.1371/journal.pone.0021303. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0021303",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -96.8384,32.8126 ]
                        },
                        "properties": {
                            "author":"Dean Kevin M, Roudot Philippe,...and Fiolka Reto",
                            "location":"Department of Cell Biology, University of Texas Southwestern Medical Center, Dallas, Texas",
                            "description":"Dean, K., Roudot, P., & Welf, E. et al.(2015). Deconvolution-free Subcellular Imaging with Axially Swept\\nLight Sheet Microscopy. Biophys. J., 2807--2815, 10.1016/j.bpj.2015.05.013. Retrieved from: http://dx.doi.org/10.1016/j.bpj.2015.05.013",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -78.9403,36.0007 ]
                        },
                        "properties": {
                            "author":"Bagnat Michel, Navis Adam,...and Stainier Didier Y R",
                            "location":"Department of Cell Biology, Duke University School of Medicine, Durham, USA",
                            "description":"Bagnat, M., Navis, A., & Herbstreith, S. et al.(2010). Cse1l is a negative regulator of {CFTR-dependent} fluid\\nsecretion. Curr. Biol., 1840--1845, 10.1016/j.cub.2010.09.012. Retrieved from: http://dx.doi.org/10.1016/j.cub.2010.09.012",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 101.901875,35.486703 ]
                        },
                        "properties": {
                            "author":"Wang Hao",
                            "location":"Department of Botany, College of Life Sciences, South China Agricultural University, China",
                            "description":"Wang, H.(2016). Visualizing Plant Cells in a Brand New Way. Mol. Plant, 633--635, Retrieved from: http://dx.doi.org/10.1016/j.molp.2016.02.006",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 13.73333,51.03333 ]
                        },
                        "properties": {
                            "author":"Royer Loic A, Weigert Martin,...and Myers Eugene W",
                            "location":" Dresden, Germany",
                            "description":"Royer, L., Weigert, M., & Günther, U. et al.(2015, jun). {ClearVolume}: open-source live {3D} visualization for\\nlight-sheet microscopy. Nat. Methods, 480--481, Retrieved from: http://dx.doi.org/10.1038/nmeth.3372",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 4.75729,51.248304 ]
                        },
                        "properties": {
                            "author":"Buytaert Jan A N, Descamps Emilie,...and Dirckx Joris J J",
                            "location":"Laboratory of Biomedical Physics, University of Antwerp, Belgium",
                            "description":"Buytaert, J., Descamps, E., & Adriaens, D. et al.(2012). The {OPFOS} Microscopy Family: {High-Resolution} Optical\\nSectioning of Biomedical Specimens. Anat. Res. Int., 206238, 10.1155/2012/206238. Retrieved from: http://dx.doi.org/10.1155/2012/206238",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -117.246212,32.887151 ]
                        },
                        "properties": {
                            "author":"Li Yu, Hu Ying, Cang Hu",
                            "location":"Waitt Advanced Biophotonics Center, Salk Institute for Biological Studies, La Jolla, United States",
                            "description":"Li, Y., Hu, Y., & Cang, H.(2013). Light sheet microscopy for tracking single molecules on the\\napical surface of living cells. J. Phys. Chem. B, 15503--15511, Retrieved from: http://dx.doi.org/10.1021/jp405380g",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 10.09361,48.83722 ]
                        },
                        "properties": {
                            "author":"Bruns Thomas, Schickinger Sarah, Schneckenburger Herbert",
                            "location":"Institute of Applied Research, Aalen University",
                            "description":"Bruns, T., Schickinger, S., & Schneckenburger, H.(2014). Single plane illumination module and micro-capillary approach\\nfor a wide-field microscope. J. Vis. Exp., e51993, Retrieved from: http://dx.doi.org/10.3791/51993",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 10.018343,51.133481 ]
                        },
                        "properties": {
                            "author":"Niedworok Christian J, Schwarz Inna,...and Schwarz Martin K",
                            "location":"Department of Molecular Neuroscience, Max Planck Institute for Medical Research, Germany",
                            "description":"Niedworok, C., Schwarz, I., & Ledderose, J. et al.(2012). Charting monosynaptic connectivity maps by two-color\\nlight-sheet fluorescence microscopy. Cell Rep., 1375--1386, Retrieved from: http://dx.doi.org/10.1016/j.celrep.2012.10.008",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 7.087376,50.727055 ]
                        },
                        "properties": {
                            "author":"Spille Jan-Hendrik, Kaminski Tim,...and Kubitscheck Ulrich",
                            "location":"Institute of Physical and Theoretical Chemistry, Rheinische Friedrich-Wilhelms Universität Bonn, Germany",
                            "description":"Spille, J., Kaminski, T., & Königshoven, H. et al.(2012). Dynamic three-dimensional tracking of single fluorescent\\nnanoparticles deep inside living tissue. Opt. Express, 19697--19707, Retrieved from: http://dx.doi.org/10.1364/OE.20.019697",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -0.132909,51.523386 ]
                        },
                        "properties": {
                            "author":"Bosse Jens B, Hogue Ian B,...and Enquist Lynn W",
                            "location":"Department of Molecular Biology, Princeton University, Princeton",
                            "description":"Bosse, J., Hogue, I., & Feric, M. et al.(2015). Remodeling nuclear architecture allows efficient transport of\\nherpesvirus capsids by diffusion. Proc. Natl. Acad. Sci. U. S. A., E5725--33, 10.1073/pnas.1513876112. Retrieved from: http://dx.doi.org/10.1073/pnas.1513876112",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -82.709027777778,34.494944444444 ]
                        },
                        "properties": {
                            "author":"Guan Zeyi, Lee Juhyun,...and Fei Peng",
                            "location":"Mechanical and Aerospace Engineering, University of California, Los Angeles, Los Angeles, USA",
                            "description":"Guan, Z., Lee, J., & Jiang, H. et al.(2016). Compact plane illumination plugin device to enable light sheet\\nfluorescence imaging of multi-cellular organisms on an\\ninverted wide-field microscope. Biomed. Opt. Express, 194--208, 10.1364/BOE.7.000194. Retrieved from: http://dx.doi.org/10.1364/BOE.7.000194",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -2.7954,56.3403 ]
                        },
                        "properties": {
                            "author":"Yang Zhengyi, Haslehurst Peter,...and Dholakia Kishan",
                            "location":"SUPA, School of Physics &Astronomy, University of St Andrews, St Andrews, United Kingdom",
                            "description":"Yang, Z., Haslehurst, P., & Scott, S. et al.(2016). A compact light-sheet microscope for the study of the\\nmammalian central nervous system. Sci. Rep., 26317, Retrieved from: http://dx.doi.org/10.1038/srep26317",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.45853888889,37.763319444444 ]
                        },
                        "properties": {
                            "author":"Huisken Jan, Stainier Didier Y R",
                            "location":"Department of Biochemistry and Biophysics, University of California San Francisco, San Francisco, USA",
                            "description":"Huisken, J., & Stainier, D.(2007). Even fluorescence excitation by multidirectional selective\\nplane illumination microscopy ({mSPIM}). Opt. Lett., 2608--2610, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/17767321",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -71.099965,42.345345 ]
                        },
                        "properties": {
                            "author":"Mertz Jerome",
                            "location":"Department of Biomedical Engineering, Boston University, Boston, Massachusetts, USA",
                            "description":"Mertz, J.(2011). Optical sectioning microscopy with planar or structured\\nillumination. Nat. Methods, 811--819, Retrieved from: http://dx.doi.org/10.1038/nmeth.1709",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -88.22632,40.1163 ]
                        },
                        "properties": {
                            "author":"Slattery Rebecca A, Grennan Aleel K,...and Ort Donald R",
                            "location":"Department of Plant Biology, University of Illinois at Urbana-Champaign, Urbana, USA Carl R",
                            "description":"Slattery, R., Grennan, A., & Sivaguru, M. et al.(2016). Light sheet microscopy reveals more gradual light attenuation\\nin light-green versus dark-green soybean leaves. J. Exp. Bot., Retrieved from: http://dx.doi.org/10.1093/jxb/erw246",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 114.164054,22.25959 ]
                        },
                        "properties": {
                            "author":"Zhao Teng, Lau Sze Cheung,...and Loy M M T",
                            "location":"Department of Physics, The Hong Kong University of Science and Technology, Clear Water Bay, Kowloon, Hong Kong, China",
                            "description":"Zhao, T., Lau, S., & Wang, Y. et al.(2016). Multicolor {4D} Fluorescence Microscopy using Ultrathin Bessel\\nLight Sheets. Sci. Rep., 26159, Retrieved from: http://dx.doi.org/10.1038/srep26159",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -71.059357,42.356486 ]
                        },
                        "properties": {
                            "author":"Mertz Jerome, Kim Jinhyun",
                            "location":"Boston University, Department of Biomedical Engineering, Boston, USA",
                            "description":"Mertz, J., & Kim, J.(2010, jan). Scanning light-sheet microscopy in the whole mouse brain with\\n{HiLo} background rejection. J. Biomed. Opt., 016027, 10.1117/1.3324890. Retrieved from: http://dx.doi.org/10.1117/1.3324890",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 103.808053,1.351616 ]
                        },
                        "properties": {
                            "author":"Wohland Thorsten,...and Stelzer Ernst H K",
                            "location":"Department of Chemistry, National University of Singapore, Singapore",
                            "description":"Wohland, T., Shi, X., & Sankaran, J. et al.(2010). Single plane illumination fluorescence correlation\\nspectroscopy ({SPIM-FCS}) probes inhomogeneous\\nthree-dimensional environments. Opt. Express, 10627--10641, Retrieved from: http://dx.doi.org/10.1364/OE.18.010627",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -90.2646,38.637 ]
                        },
                        "properties": {
                            "author":"Turaga Diwakar, Holy Timothy E",
                            "location":"Department of Anatomy and Neurobiology, Washington University School of Medicine, St",
                            "description":"Turaga, D., & Holy, T.(2010). Image-based calibration of a deformable mirror in wide-field\\nmicroscopy. Appl. Opt., 2030--2040, 10.1364/AO.49.002030. Retrieved from: http://dx.doi.org/10.1364/AO.49.002030",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -78.645846,35.750401 ]
                        },
                        "properties": {
                            "author":"de Luis Balaguer Maria Angels, Ramos-Pezzotti Marina,...and Sozzani Rosangela",
                            "location":"Plant and Microbial Biology Department, North Carolina State University, Raleigh, USA",
                            "description":"de Luis Balaguer, M., Ramos-Pezzotti, M., & Rahhal, M. et al.(2016). Multi-sample Arabidopsis Growth and Imaging Chamber ({MAGIC})\\nfor long term imaging in the {ZEISS} Lightsheet Z.1. Dev. Biol., Retrieved from: http://dx.doi.org/10.1016/j.ydbio.2016.05.029",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 131.14166667,34.775 ]
                        },
                        "properties": {
                            "author":"Tokunaga Makio, Imamoto Naoko, Sakata-Sogawa Kumiko",
                            "location":"Biological Macromolecules Laboratory, National Institute of Genetics, Mishima, Japan",
                            "description":"Tokunaga, M., Imamoto, N., & Sakata-Sogawa, K.(2008, feb). Highly inclined thin illumination enables clear\\nsingle-molecule imaging in cells. Nat. Methods, 159--161, Retrieved from: http://dx.doi.org/10.1038/nmeth1171",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 9.92944,49.79444 ]
                        },
                        "properties": {
                            "author":"Brede Christian, Friedrich Mike,...and Beilhack Andreas",
                            "location":"Department of Medicine II, Würzburg University Hospital, Würzburg, Germany",
                            "description":"Brede, C., Friedrich, M., & Jord\\'{a}n-Garrote, A. et al.(2012, dec). Mapping immune processes in intact tissues at cellular\\nresolution. J. Clin. Invest., 4439--4446, 10.1172/JCI65100. Retrieved from: http://dx.doi.org/10.1172/JCI65100",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 13.830871,50.060219 ]
                        },
                        "properties": {
                            "author":"Bruns T, Schickinger S, Schneckenburger H",
                            "location":"Aalen University, Institute of Applied Research, Beethovenstr",
                            "description":"Bruns, T., Schickinger, S., & Schneckenburger, H.(2015, oct). Sample holder for axial rotation of specimens in {3D}\\nmicroscopy. J. Microsc., 30--36, Retrieved from: http://dx.doi.org/10.1111/jmi.12263",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -123.0743,44.0455 ]
                        },
                        "properties": {
                            "author":"Jemielita Matthew, Taormina Michael J,...and Parthasarathy Raghuveer",
                            "location":"Department of Physics, University of Oregon, Eugene, Oregon, USA",
                            "description":"Jemielita, M., Taormina, M., & Burns, A. et al.(2014). Spatial and temporal features of the growth of a bacterial\\nspecies colonizing the zebrafish gut. MBio, 10.1128/mBio.01751-14. Retrieved from: http://dx.doi.org/10.1128/mBio.01751-14",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.45853888889,37.763319444444 ]
                        },
                        "properties": {
                            "author":"Scherz Paul J, Huisken Jan,...and Stainier Didier Y R",
                            "location":"Department of Biochemistry and Biophysics, Cardiovascular Research Institute, University of California, San Francisco, San Francisco, USA",
                            "description":"Scherz, P., Huisken, J., & Sahai-Hernandez, P. et al.(2008, mar). High-speed imaging of developing heart valves reveals\\ninterplay of morphogenesis and function. Development, 1179--1187, Retrieved from: http://dx.doi.org/10.1242/dev.010694",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 16.37,48.198888888889 ]
                        },
                        "properties": {
                            "author":"Saghafi Saiedeh, Becker Klaus,...and Dodt Hans-Ulrich",
                            "location":"Vienna University of Technology, Dept",
                            "description":"Saghafi, S., Becker, K., & Hahn, C. et al.(2014, jan). 3D-ultramicroscopy utilizing aspheric optics. J. Biophotonics, 117--125, Retrieved from: http://dx.doi.org/10.1002/jbio.201300048",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.7063888888889,49.410277777778 ]
                        },
                        "properties": {
                            "author":"Höckendorf Burkhard, Thumberger Thomas, Wittbrodt Joachim",
                            "location":"Centre for Organismal Studies, Heidelberg University, Germany",
                            "description":"Höckendorf, B., Thumberger, T., & Wittbrodt, J.(2012). Quantitative analysis of embryogenesis: a perspective for\\nlight sheet microscopy. Dev. Cell, 1111--1120, Retrieved from: http://dx.doi.org/10.1016/j.devcel.2012.10.008",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 6.720211,53.252226 ]
                        },
                        "properties": {
                            "author":"Hofman R, Segenhout J M, Wit H P",
                            "location":"Department of Otorhinolaryngology, University Medical Center Groningen, P",
                            "description":"Hofman, R., Segenhout, J., & Wit, H.(2009, feb). Three-dimensional reconstruction of the guinea pig inner ear, comparison of {OPFOS} and light microscopy, applications of\\n{3D} reconstruction. J. Microsc., 251--257, Retrieved from: http://dx.doi.org/10.1111/j.1365-2818.2009.03115.x",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 4.75729,51.248304 ]
                        },
                        "properties": {
                            "author":"Buytaert Jan A N, Dirckx Joris J J",
                            "location":"Laboratory of BioMedical Physics, University of Antwerp, Belgium",
                            "description":"Buytaert, J., & Dirckx, J.(2009). Tomographic imaging of macroscopic biomedical objects in high\\nresolution and three dimensions using orthogonal-plane\\nfluorescence optical sectioning. Appl. Opt., 941--948, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/19209207",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 82.388909,23.237933 ]
                        },
                        "properties": {
                            "author":"Park Ok Kyu, Kwak Jina,...and Kee Yun",
                            "location":"Korea Basic Science Institute Chuncheon Center, Korea",
                            "description":"Park, O., Kwak, J., & Jung, Y. et al.(2015). {3D} {Light-Sheet} Fluorescence Microscopy of Cranial Neurons\\nand Vasculature during Zebrafish Embryogenesis. Mol. Cells, 975--981, 10.14348/molcells.2015.0160. Retrieved from: http://dx.doi.org/10.14348/molcells.2015.0160",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 13.73333,51.03333 ]
                        },
                        "properties": {
                            "author":"Preibisch Stephan, Amat Fernand...and Tomancak Pavel",
                            "location":" Dresden, Germany",
                            "description":"Preibisch, S., Amat, F., & Stamataki, E. et al.(2014, jun). Efficient Bayesian-based multiview deconvolution. Nat. Methods, 645--648, 10.1038/nmeth.2929. Retrieved from: http://dx.doi.org/10.1038/nmeth.2929",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 7.5836,47.55858 ]
                        },
                        "properties": {
                            "author":"Lenard Anna, Daetwyler Stephan,...and Affolter Markus",
                            "location":"Biozentrum der Universität Basel, Basel, Switzerland",
                            "description":"Lenard, A., Daetwyler, S., & Betz, C. et al.(2015, apr). Endothelial cell self-fusion during vascular pruning. PLoS Biol., e1002126, 10.1371/journal.pbio.1002126. Retrieved from: http://dx.doi.org/10.1371/journal.pbio.1002126",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 10.018343,51.133481 ]
                        },
                        "properties": {
                            "author":"Greiss Ferdinand,...and Braun Dieter",
                            "location":"System Biophysics, Department of Physics, Ludwig Maximilians University, Munich, Germany",
                            "description":"Greiss, F., Deligiannaki, M., & Jung, C. et al.(2016). {Single-Molecule} Imaging in Living Drosophila Embryos with\\nReflected {Light-Sheet} Microscopy. Biophys. J., 939--946, Retrieved from: http://dx.doi.org/10.1016/j.bpj.2015.12.035",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -1.197,52.939 ]
                        },
                        "properties": {
                            "author":"Wilding Dean, Pozzi Paolo,...and Verhaegen Michel",
                            "location":"Centre for Plant Integrative Biology, University of Nottingham, United Kingdom",
                            "description":"Wilding, D., Pozzi, P., & Soloviev, O. et al.(2013). Lateral root morphogenesis is dependent on the mechanical\\nproperties of the overlaying tissues. Proc. Natl. Acad. Sci. U. S. A., 5229--5234, 10.1073/pnas.1210807110. Retrieved from: http://dx.doi.org/10.1073/pnas.1210807110",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Amat Fernando,...and Keller Philipp J",
                            "location":"Howard Hughes Medical Institute, Janelia Farm Research Campus, Ashburn, Virginia, USA",
                            "description":"Amat, F., Lemon, W., & Mossing, D. et al.(2014, sep). Fast, accurate reconstruction of cell lineages from\\nlarge-scale fluorescence microscopy data. Nat. Methods, 951--958, Retrieved from: http://dx.doi.org/10.1038/nmeth.3036",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 77.475138,23.122237 ]
                        },
                        "properties": {
                            "author":"Turaga Diwakar, Holy Timothy E",
                            "location":"Department of Anatomy and Neurobiology, Washington University in St",
                            "description":"Turaga, D., & Holy, T.(2008). Miniaturization and defocus correction for objective-coupled\\nplanar illumination microscopy. Opt. Lett., 2302--2304, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/18923603",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 16.37,48.198888888889 ]
                        },
                        "properties": {
                            "author":"Saghafi Saiedeh, Becker Klaus,...and Dodt Hans-Ulrich",
                            "location":"Vienna University of Technology, FKE, Dept",
                            "description":"Saghafi, S., Becker, K., & Jährling, N. et al.(2010, oct). Image enhancement in ultramicroscopy by improved laser light\\nsheets. J. Biophotonics, 686--695, Retrieved from: http://dx.doi.org/10.1002/jbio.201000047",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Tomer Raju, Khairy Khaled, Keller Philipp J",
                            "location":"Janelia Farm Research Campus, Howard Hughes Medical Institute, Ashburn, VA, USA",
                            "description":"Tomer, R., Khairy, K., & Keller, P.(2013). Light sheet microscopy in cell biology. Methods Mol. Biol., 123--137, Retrieved from: http://dx.doi.org/10.1007/978-1-62703-056-4_7",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Keller Philipp J, Ahrens Misha B",
                            "location":"Howard Hughes Medical Institute, Janelia Research Campus, Ashburn, USA",
                            "description":"Keller, P., & Ahrens, M.(2015). Visualizing whole-brain activity and development at the\\nsingle-cell level using light-sheet microscopy. Neuron, 462--483, Retrieved from: http://dx.doi.org/10.1016/j.neuron.2014.12.039",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.6513888888889,50.119444444444 ]
                        },
                        "properties": {
                            "author":"Stelzer Ernst H K",
                            "location":"Buchmann Institute for Molecular Life Sciences, IZN), Goethe Universität Frankfurt am Main, Frankfurt am Main, Germany",
                            "description":"Stelzer, E.(2015, jan). Light-sheet fluorescence microscopy for quantitative biology. Nat. Methods, 23--26, Retrieved from: http://dx.doi.org/10.1038/nmeth.3219",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 174.28382,-39.33708 ]
                        },
                        "properties": {
                            "author":"Kobitski Andrei Y, Otte Jens C,...and Nienhaus G Ulrich",
                            "location":" Karlsruhe Institute of Technology, Wolfgang-Gaede-Str",
                            "description":"Kobitski, A., Otte, J., & Takamiya, M. et al.(2015). An ensemble-averaged, cell density-based digital model of\\nzebrafish embryo development derived from light-sheet\\nmicroscopy data with single-cell resolution. Sci. Rep., 8601, Retrieved from: http://dx.doi.org/10.1038/srep08601",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 16.37,48.198888888889 ]
                        },
                        "properties": {
                            "author":"Jährling Nina, Becker Klaus, Dodt Hans-Ulrich",
                            "location":"Vienna University of Technology",
                            "description":"Jährling, N., Becker, K., & Dodt, H.(2009, oct). 3D-reconstruction of blood vessels by ultramicroscopy. Organogenesis, 227--230, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/20539742",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.6513888888889,50.119444444444 ]
                        },
                        "properties": {
                            "author":"von Wangenheim Daniel, Fangerau Jens,...and Maizel Alexis",
                            "location":"Buchmann Institute for Molecular Life Sciences, Goethe Universität Frankfurt am Main, Germany",
                            "description":"von Wangenheim, D., Fangerau, J., & Schmitz, A. et al.(2016). Rules and {Self-Organizing} Properties of Post-embryonic Plant\\nOrgan Cell Division Patterns. Curr. Biol., 439--449, Retrieved from: http://dx.doi.org/10.1016/j.cub.2015.12.047",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 9.1945916666667,45.460988888889 ]
                        },
                        "properties": {
                            "author":"Costa Alex, Cand...and Bassi Andrea",
                            "location":"Dipartimento di Bioscienze, Università degli studi di Milano, Milano, Italy",
                            "description":"Costa, A., Candeo, A., & Fieramonti, L. et al.(2013). Calcium dynamics in root cells of Arabidopsis thaliana\\nvisualized with selective plane illumination microscopy. PLoS One, e75646, 10.1371/journal.pone.0075646. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0075646",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.464224,37.673705 ]
                        },
                        "properties": {
                            "author":"Ertürk Ali, Becker Klaus,...and Dodt Hans-Ulrich",
                            "location":"Department of Neuroscience, Genentech, South San Francisco, California, USA",
                            "description":"Ertürk, A., Becker, K., & Jährling, N. et al.(2012, nov). Three-dimensional imaging of solvent-cleared organs using\\n{3DISCO}. Nat. Protoc., 1983--1995, Retrieved from: http://dx.doi.org/10.1038/nprot.2012.119",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -4.27,55.87 ]
                        },
                        "properties": {
                            "author":"Taylor Jonathan M",
                            "location":"School of Physics and Astronomy, University of Glasgow Glasgow, UK",
                            "description":"Taylor, J.(2014). Optically gated beating-heart imaging. Front. Physiol., 481, 10.3389/fphys.2014.00481. Retrieved from: http://dx.doi.org/10.3389/fphys.2014.00481",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Ahrens Misha B, Orger Michael B,...and Keller Philipp J",
                            "location":"Howard Hughes Medical Institute, Janelia Farm Research Campus, Ashburn, Virginia, USA",
                            "description":"Ahrens, M., Orger, M., & Robson, D. et al.(2013, may). Whole-brain functional imaging at cellular resolution using\\nlight-sheet microscopy. Nat. Methods, 413--420, Retrieved from: http://dx.doi.org/10.1038/nmeth.2434",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -0.176882,51.498308 ]
                        },
                        "properties": {
                            "author":"Dunsby C",
                            "location":"Photonics Group, Department of Physics, Imperial College London, South Kensington Campus, London, UK",
                            "description":"Dunsby, C.(2008). Optically sectioned imaging by oblique plane microscopy. Opt. Express, 20306--20316, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/19065169",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 4.75729,51.248304 ]
                        },
                        "properties": {
                            "author":"Buytaert Jan A N, Dirckx Joris J J",
                            "location":"University of Antwerp, Laboratory of Biomedical Physics, Department of Physics, Belgium",
                            "description":"Buytaert, J., & Dirckx, J.(2007, jan). Design and quantitative resolution measurements of an optical\\nvirtual sectioning three-dimensional imaging technique for\\nbiomedical specimens, featuring two-micrometer slicing\\nresolution. J. Biomed. Opt., 014039, Retrieved from: http://dx.doi.org/10.1117/1.2671712",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Planchon Thomas A, Gao Liang,...and Betzig Eric",
                            "location":"Janelia Farm Research Campus, Howard Hughes Medical Institute, Ashburn, Virginia, USA",
                            "description":"Planchon, T., Gao, L., & Milkie, D. et al.(2011, may). Rapid three-dimensional isotropic imaging of living cells\\nusing Bessel beam plane illumination. Nat. Methods, 417--423, 10.1038/nmeth.1586. Retrieved from: http://dx.doi.org/10.1038/nmeth.1586",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 9.030762,44.400306 ]
                        },
                        "properties": {
                            "author":"Cella Zanacchi Francesca, Lavagnino Zeno,...and Diaspro Alberto",
                            "location":"Department of Nanophysics, Istituto Italiano di Tecnologia, Genova, Italy",
                            "description":"Cella Zanacchi, F., Lavagnino, Z., & Faretta, M. et al.(2013). Light-sheet confined super-resolution using two-photon\\nphotoactivation. PLoS One, e67667, 10.1371/journal.pone.0067667. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0067667",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 77.59796,12.96991 ]
                        },
                        "properties": {
                            "author":"Mohan Kavya, Purnapatra Subhajit B, Mondal Partha Pratim",
                            "location":"Department of Instrumentation and Applied Physics, Indian Institute of Science, Bangalore, India",
                            "description":"Mohan, K., Purnapatra, S., & Mondal, P.(2014). Three dimensional fluorescence imaging using multiple\\nlight-sheet microscopy. PLoS One, e96551, 10.1371/journal.pone.0096551. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0096551",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -75.82,45.33 ]
                        },
                        "properties": {
                            "author":"Zhao Ming, Zhang Han,...and Peng Leilei",
                            "location":"College of Optical Sciences, the University of Arizona",
                            "description":"Zhao, M., Zhang, H., & Li, Y. et al.(2014). Cellular imaging of deep organ using two-photon Bessel\\nlight-sheet nonlinear structured illumination microscopy. Biomed. Opt. Express, 1296--1308, 10.1364/BOE.5.001296. Retrieved from: http://dx.doi.org/10.1364/BOE.5.001296",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -120.760049,47.283049 ]
                        },
                        "properties": {
                            "author":"Gao Liang, Zhu Liren,...and Wang Lihong V",
                            "location":"Optical Imaging Laboratory, Department of Biomedical Engineering, Washington University, , St Louis, USA",
                            "description":"Gao, L., Zhu, L., & Li, C. et al.(2014). Nonlinear light-sheet fluorescence microscopy by\\nphotobleaching imprinting. J. R. Soc. Interface, 20130851, 10.1098/rsif.2013.0851. Retrieved from: http://dx.doi.org/10.1098/rsif.2013.0851",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 7.75222,48.57333 ]
                        },
                        "properties": {
                            "author":"Dodt Hans-Ulrich, Leischner Ulrich,...and Becker Klaus",
                            "location":"Max Planck Institute of Psychiatry, Kraepelinstr",
                            "description":"Dodt, H., Leischner, U., & Schierloh, A. et al.(2007, apr). Ultramicroscopy: three-dimensional visualization of neuronal\\nnetworks in the whole mouse brain. Nat. Methods, 331--336, Retrieved from: http://dx.doi.org/10.1038/nmeth1036",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -6.22209,53.30762 ]
                        },
                        "properties": {
                            "author":"Reynaud Emmanuel G, Peychl Jan,...and Tomancak Pavel",
                            "location":"Earth Institute, University College Dublin, Dublin, Ireland",
                            "description":"Reynaud, E., Peychl, J., & Huisken, J. et al.(2015, jan). Guide to light-sheet microscopy for adventurous biologists. Nat. Methods, 30--34, Retrieved from: http://dx.doi.org/10.1038/nmeth.3222",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.88,47.82 ]
                        },
                        "properties": {
                            "author":"Voie A H, Burns D H, Spelman F A",
                            "location":"Center for Bioengineering, University of Washington",
                            "description":"Voie, A., Burns, D., & Spelman, F.(1993, jun). Orthogonal-plane fluorescence optical sectioning:\\nthree-dimensional imaging of macroscopic biological specimens. J. Microsc., 229--236, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/8371260",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.7063888888889,49.410277777778 ]
                        },
                        "properties": {
                            "author":"Breckwoldt Michael O, Bode Julia,...and Tews Björn",
                            "location":"Neuroradiology Department, University Hospital Heidelberg, Heidelberg, Germany",
                            "description":"Breckwoldt, M., Bode, J., & Kurz, F. et al.(2016). Correlated magnetic resonance imaging and ultramicroscopy\\n({MR-UM}) is a tool kit to assess the dynamics of glioma\\nangiogenesis. Elife, 10.7554/eLife.11712. Retrieved from: http://dx.doi.org/10.7554/eLife.11712",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 9.28444,53.82306 ]
                        },
                        "properties": {
                            "author":"Temerinac-Ott Maja, Ronneberger Olaf,...and Burkhardt Hans",
                            "location":"Chair of Pattern Recognition and Image Processing, Department of Computer Science, University of Freiburg, Freiburg, Germany",
                            "description":"Temerinac-Ott, M., Ronneberger, O., & Ochs, P. et al.(2012, apr). Multiview deblurring for {3-D} images from light-sheet-based\\nfluorescence microscopy. IEEE Trans. Image Process., 1863--1873, Retrieved from: http://dx.doi.org/10.1109/TIP.2011.2181528",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.650832,47.425474 ]
                        },
                        "properties": {
                            "author":"Engelbrecht Christoph J, Voigt Fabian, Helmchen Fritjof",
                            "location":"Department of Neurophysiology, Brain Research Institute, University of Zurich, Switzerland",
                            "description":"Engelbrecht, C., Voigt, F., & Helmchen, F.(2010). Miniaturized selective plane illumination microscopy for\\nhigh-contrast in vivo fluorescence imaging. Opt. Lett., 1413--1415, Retrieved from: http://dx.doi.org/10.1364/OL.35.001413",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.17,37.43 ]
                        },
                        "properties": {
                            "author":"Tomer Raju, Lovett-Barron Matthew,...and Deisseroth Karl",
                            "location":"Department of Bioengineering, Stanford University, Stanford, USA",
                            "description":"Tomer, R., Lovett-Barron, M., & Kauvar, I. et al.(2015). {SPED} Light Sheet Microscopy: Fast Mapping of Biological\\nSystem Structure and Function. Cell, 1796--1806, 10.1016/j.cell.2015.11.061. Retrieved from: http://dx.doi.org/10.1016/j.cell.2015.11.061",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -73.11623,40.914224 ]
                        },
                        "properties": {
                            "author":"Fu Qinyi, Martin Benjamin L,...and Gao Liang",
                            "location":"Department of Chemistry, Stony Brook University, Stony Brook, USA",
                            "description":"Fu, Q., Martin, B., & Matus, D. et al.(2016). Imaging multicellular specimens with real-time optimized\\ntiling light-sheet selective plane illumination microscopy. Nat. Commun., 11088, Retrieved from: http://dx.doi.org/10.1038/ncomms11088",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Keller Philipp J, Ahrens Misha B, Freeman Jeremy",
                            "location":"Janelia Research Campus, Howard Hughes Medical Institute, Ashburn, Virginia, USA",
                            "description":"Keller, P., Ahrens, M., & Freeman, J.(2015, jan). Light-sheet imaging for systems neuroscience. Nat. Methods, 27--29, Retrieved from: http://dx.doi.org/10.1038/nmeth.3214",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -75.1236,39.8272 ]
                        },
                        "properties": {
                            "author":"Turaga Diwakar, Holy Timothy E",
                            "location":"Dept",
                            "description":"Turaga, D., & Holy, T.(2013). Aberrations and their correction in light-sheet microscopy: a\\nlow-dimensional parametrization. Biomed. Opt. Express, 1654--1661, 10.1364/BOE.4.001654. Retrieved from: http://dx.doi.org/10.1364/BOE.4.001654",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -123.074581,44.063478 ]
                        },
                        "properties": {
                            "author":"Loftus Andrew F, Noreng Sigrid,...and Parthasarathy Raghuveer",
                            "location":"Department of Chemistry, The University of Oregon, Eugene, United States",
                            "description":"Loftus, A., Noreng, S., & Hsieh, V. et al.(2013). Robust measurement of membrane bending moduli using light\\nsheet fluorescence imaging of vesicle fluctuations. Langmuir, 14588--14594, Retrieved from: http://dx.doi.org/10.1021/la403837d",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 103.848198,1.332652 ]
                        },
                        "properties": {
                            "author":"Singh Anand Pratap,...and Thorsten",
                            "location":"Department of Biological Sciences and NUS Centre for Bio-Imaging Sciences, National University of Singapore, Singapore",
                            "description":"Singh, A., Krieger, J., & Buchholz, J. et al.(2013). The performance of {2D} array detectors for light sheet based\\nfluorescence correlation spectroscopy. Opt. Express, 8652--8668, Retrieved from: http://dx.doi.org/10.1364/OE.21.008652",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 9.030762,44.400306 ]
                        },
                        "properties": {
                            "author":"Cella Zanacchi Francesca, Lavagnino Zeno,...and Diaspro Alberto",
                            "location":"Istituto Italiano di Tecnologia, Genova, Italia",
                            "description":"Cella Zanacchi, F., Lavagnino, Z., & Perrone Donnorso, M. et al.(2011, dec). Live-cell {3D} super-resolution imaging in thick biological\\nsamples. Nat. Methods, 1047--1049, Retrieved from: http://dx.doi.org/10.1038/nmeth.1744",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 19.300636,52.12461 ]
                        },
                        "properties": {
                            "author":"Stefaniuk Marzena, Gualda Emilio J,...and Kaczmarek Leszek",
                            "location":"Nencki Institute, Poland",
                            "description":"Stefaniuk, M., Gualda, E., & Pawlowska, M. et al.(2016). Light-sheet microscopy imaging of a whole cleared rat brain\\nwith {Thy1-GFP} transgene. Sci. Rep., 28209, 10.1038/srep28209. Retrieved from: http://dx.doi.org/10.1038/srep28209",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -71.1056,42.3751 ]
                        },
                        "properties": {
                            "author":"Pauli Andrea, Norris Megan L,...ander F",
                            "location":"Department of Molecular and Cellular Biology, Harvard University, Cambridge, USA",
                            "description":"Pauli, A., Norris, M., & Valen, E. et al.(2014). Toddler: an embryonic signal that promotes cell movement via\\nApelin receptors. Science, 1248636, 10.1126/science.1248636. Retrieved from: http://dx.doi.org/10.1126/science.1248636",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 139.77,35.68 ]
                        },
                        "properties": {
                            "author":"Susaki Etsuo A, Tainaka Kazuki,...and Ueda Hiroki R",
                            "location":"Department of Systems Pharmacology, The University of Tokyo, Tokyo, Japan",
                            "description":"Susaki, E., Tainaka, K., & Perrin, D. et al.(2015, nov). Advanced {CUBIC} protocols for whole-brain and whole-body\\nclearing and imaging. Nat. Protoc., 1709--1727, Retrieved from: http://dx.doi.org/10.1038/nprot.2015.085",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -0.6,44.806944 ]
                        },
                        "properties": {
                            "author":"Galland Remi,...and Sibarita Jean-Baptiste",
                            "location":" University of Bordeaux, Bordeaux, France",
                            "description":"Galland, R., Grenci, G., & Aravind, A. et al.(2015, jul). {3D} high- and super-resolution imaging using single-objective\\n{SPIM}. Nat. Methods, 641--644, Retrieved from: http://dx.doi.org/10.1038/nmeth.3402",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Lemon William C, Pulver Stefan R,...and Keller Philipp J",
                            "location":"Howard Hughes Medical Institute, Janelia Research Campus, Ashburn, USA",
                            "description":"Lemon, W., Pulver, S., & Höckendorf, B. et al.(2015). Whole-central nervous system functional imaging in larval\\nDrosophila. Nat. Commun., 7924, Retrieved from: http://dx.doi.org/10.1038/ncomms8924",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -73.6775,42.73 ]
                        },
                        "properties": {
                            "author":"Can A, Al-Kofahi O,...and Roysam B",
                            "location":"Rensselaer Polytechnic Institute, Troy, U",
                            "description":"Can, A., Al-Kofahi, O., & Lasek, S. et al.(2003, jul). Attenuation correction in confocal laser microscopes: a novel\\ntwo-view approach. 67--79, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/12839553",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 7.087376,50.727055 ]
                        },
                        "properties": {
                            "author":"Ritter Jörg Gerhard, Veith Roman,...and Kubitscheck Ulrich",
                            "location":"Institute of Physical and Theoretical Chemistry, Rheinische Friedrich-Wilhelms Universität, Bonn, Germany",
                            "description":"Ritter, J., Veith, R., & Veenendaal, A. et al.(2010). Light sheet microscopy for single molecule tracking in living\\ntissue. PLoS One, e11639, 10.1371/journal.pone.0011639. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0011639",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 103.780318,1.297475 ]
                        },
                        "properties": {
                            "author":"Bhattacharya Dipanjan, Singh Vijay Raj,...and Barbastathis George",
                            "location":"Singapore-MIT Alliance for Research and Technology (SMART) Centre, Singapore",
                            "description":"Bhattacharya, D., Singh, V., & Zhi, C. et al.(2012). Three dimensional {HiLo-based} structured illumination for a\\ndigital scanned laser sheet microscopy ({DSLM}) in thick\\ntissue imaging. Opt. Express, 27337--27347, 10.1364/OE.20.027337. Retrieved from: http://dx.doi.org/10.1364/OE.20.027337",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -120.047533,37.229564 ]
                        },
                        "properties": {
                            "author":"Trivedi Vikas, Truong Thai V,...and Fraser Scott E",
                            "location":"Division of Biology and Biological Engineering, California Institute of Technology, Pasadena, USA ",
                            "description":"Trivedi, V., Truong, T., & Trinh, L. et al.(2015). Dynamic structure and protein expression of the live embryonic\\nheart captured by 2-photon light sheet microscopy and\\nretrospective registration. Biomed. Opt. Express, 2056--2066, 10.1364/BOE.6.002056. Retrieved from: http://dx.doi.org/10.1364/BOE.6.002056",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.71,49.41222 ]
                        },
                        "properties": {
                            "author":"Bradl J, Hausmann M,...and Cremer C",
                            "location":"Institute of Applied Physics, University of Heidelberg, Germany",
                            "description":"Bradl, J., Hausmann, M., & Ehemann, V. et al.(1992, oct). A tilting device for three-dimensional microscopy: application\\nto in situ imaging of interphase cell nuclei. 47--57, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/1447754",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -123.0951,44.0505 ]
                        },
                        "properties": {
                            "author":"Jemielita Matthew, Taormina Michael J,...and Parthasarathy Raghuveer",
                            "location":"Department of Physics, Eugene, OR, USA",
                            "description":"Jemielita, M., Taormina, M., & Delaurier, A. et al.(2013, dec). Comparing phototoxicity during the development of a zebrafish\\ncraniofacial bone using confocal and light sheet fluorescence\\nmicroscopy techniques. J. Biophotonics, 920--928, 10.1002/jbio.201200144. Retrieved from: http://dx.doi.org/10.1002/jbio.201200144",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 7.087376,50.727055 ]
                        },
                        "properties": {
                            "author":"Ritter Jörg G, Veith Roman,...and Kubitscheck Ulrich",
                            "location":"Institute of Physical and Theoretical Chemistry, Rheinische-Friedrich-Wilhelms Universität Bonn, Germany",
                            "description":"Ritter, J., Veith, R., & Siebrasse, J. et al.(2008). High-contrast single-particle tracking by selective focal\\nplane illumination microscopy. Opt. Express, 7142--7152, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/18545417",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.6513888888889,50.119444444444 ]
                        },
                        "properties": {
                            "author":"Pampaloni Francesco, Ansari Nariman, Stelzer Ernst H K",
                            "location":"Buchmann Institute for Molecular Life Sciences (BMLS), Goethe Universität Frankfurt am Main, Frankfurt am Main, Germany",
                            "description":"Pampaloni, F., Ansari, N., & Stelzer, E.(2013, apr). High-resolution deep imaging of live cellular spheroids with\\nlight-sheet-based fluorescence microscopy. Cell Tissue Res., 161--177, Retrieved from: http://dx.doi.org/10.1007/s00441-013-1589-7",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -87.806691,42.1029 ]
                        },
                        "properties": {
                            "author":"Pampaloni Francesco, Reynaud Emmanuel G, Stelzer Ernst H K",
                            "location":"Francesco Pampaloni, Emmanuel G",
                            "description":"Pampaloni, F., Reynaud, E., & Stelzer, E.(2007, oct). The third dimension bridges the gap between cell culture and\\nlive tissue. Nat. Rev. Mol. Cell Biol., 839--845, Retrieved from: http://dx.doi.org/10.1038/nrm2236",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 6.720211,53.252226 ]
                        },
                        "properties": {
                            "author":"Hofman R, Segenhout J M,...and Wit H P",
                            "location":"Department of Otorhinolaryngology, University Medical Center Groningen, Groningen, The Netherlands",
                            "description":"Hofman, R., Segenhout, J., & Buytaert, J. et al.(2008, feb). Eur. Arch. Otorhinolaryngol., 153--157, 10.1007/s00405-007-0424-8. Retrieved from: http://dx.doi.org/10.1007/s00405-007-0424-8",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -71.105138,42.335743 ]
                        },
                        "properties": {
                            "author":"Chittajallu Deepak R, Florian Stefan,...and Mitchison Timothy J",
                            "location":"Department of Cell Biology, Harvard Medical School, Boston, Massachusetts, USA",
                            "description":"Chittajallu, D., Florian, S., & Kohler, R. et al.(2015, jun). In vivo cell-cycle profiling in xenograft tumors by\\nquantitative intravital microscopy. Nat. Methods, 577--585, 10.1038/nmeth.3363. Retrieved from: http://dx.doi.org/10.1038/nmeth.3363",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 10.939,50.6817 ]
                        },
                        "properties": {
                            "author":"Schröter Tobias J, Johnson Shane B,...and Santi Peter A",
                            "location":"Ilmenau University of Technology, Ilmenau, Germany",
                            "description":"Schröter, T., Johnson, S., & John, K. et al.(2012). Scanning thin-sheet laser imaging microscopy ({sTSLIM}) with\\nstructured illumination and {HiLo} background rejection. Biomed. Opt. Express, 170--177, 10.1364/BOE.3.000170. Retrieved from: http://dx.doi.org/10.1364/BOE.3.000170",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -96.8384,32.8126 ]
                        },
                        "properties": {
                            "author":"Dean Kevin M, Roudot Philippe,...and Fiolka Reto",
                            "location":"Lyda Hill Department of Bioinformatics, University of Texas Southwestern Medical Center, Dallas, Texas",
                            "description":"Dean, K., Roudot, P., & Reis, C. et al.(2016). Diagonally Scanned {Light-Sheet} Microscopy for Fast\\nVolumetric Imaging of Adherent Cells. Biophys. J., 1456--1465, Retrieved from: http://dx.doi.org/10.1016/j.bpj.2016.01.029",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Amat Fernando,...and Keller Philipp J",
                            "location":"Howard Hughes Medical Institute, Janelia Research Campus, Ashburn, Virginia, USA",
                            "description":"Amat, F., Höckendorf, B., & Wan, Y. et al.(2015, nov). Efficient processing and analysis of large-scale light-sheet\\nmicroscopy data. Nat. Protoc., 1679--1696, Retrieved from: http://dx.doi.org/10.1038/nprot.2015.111",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Khairy Khaled, Lemon William C,...and Keller Philipp J",
                            "location":"Howard Hughes Medical Institute, Janelia Farm Research Campus, Ashburn, VA, USA",
                            "description":"Khairy, K., Lemon, W., & Amat, F. et al.(2015). Light sheet-based imaging and analysis of early embryogenesis\\nin the fruit fly. Methods Mol. Biol., 79--97, Retrieved from: http://dx.doi.org/10.1007/978-1-4939-1164-6_6",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -2.36967,54.237933 ]
                        },
                        "properties": {
                            "author":"Bourgenot Cyril, Saunter Christopher D,...and Love Gordon D",
                            "location":"Department of Physics & Biophysical Sciences Institute, Durham University, UK",
                            "description":"Bourgenot, C., Saunter, C., & Taylor, J. et al.(2012). {3D} adaptive optics in a light sheet microscope. Opt. Express, 13252--13261, Retrieved from: http://dx.doi.org/10.1364/OE.20.013252",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -117.84264166667,33.64535 ]
                        },
                        "properties": {
                            "author":"Cutrale Francesco, Gratton Enrico",
                            "location":"Laboratory for Fluorescence Dynamics, Biomedical Engineering Department, University of California, Irvine, California, USA",
                            "description":"Cutrale, F., & Gratton, E.(2012, nov). Inclined selective plane illumination microscopy adaptor for\\nconventional microscopes. Microsc. Res. Tech., 1461--1466, 10.1002/jemt.22089. Retrieved from: http://dx.doi.org/10.1002/jemt.22089",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 10.018343,51.133481 ]
                        },
                        "properties": {
                            "author":"Wenzel Carsten, Riefke Björn,...and Steigemann Patrick",
                            "location":"Bayer Pharma AG, Global Drug Discovery, Germany",
                            "description":"Wenzel, C., Riefke, B., & Gründemann, S. et al.(2014). {3D} high-content screening for the identification of\\ncompounds that target cells in dormant tumor spheroid regions. Exp. Cell Res., 131--143, Retrieved from: http://dx.doi.org/10.1016/j.yexcr.2014.01.017",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Tomer Raju, Khairy Khaled,...and Keller Philipp J",
                            "location":"Howard Hughes Medical Institute, Janelia Farm Research Campus, Ashburn, Virginia, USA",
                            "description":"Tomer, R., Khairy, K., & Amat, F. et al.(2012, jul). Quantitative high-speed imaging of entire developing embryos\\nwith simultaneous multiview light-sheet microscopy. Nat. Methods, 755--763, Retrieved from: http://dx.doi.org/10.1038/nmeth.2062",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 9.1881,47.690215 ]
                        },
                        "properties": {
                            "author":"Lei Ming, Zumbusch Andreas",
                            "location":"Department of Chemie, University of Konstanz, Germany",
                            "description":"Lei, M., & Zumbusch, A.(2010). Structured light sheet fluorescence microscopy based on four\\nbeam interference. Opt. Express, 19232--19241, Retrieved from: http://dx.doi.org/10.1364/OE.18.019232",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -118.125494,34.138577 ]
                        },
                        "properties": {
                            "author":"Truong Thai V, Supatto Willy,...and Fraser Scott E",
                            "location":"California Institute of Technology, Beckman Institute, Pasadena, CA, USA",
                            "description":"Truong, T., Supatto, W., & Koos, D. et al.(2011, sep). Deep and fast live imaging with two-photon scanned light-sheet\\nmicroscopy. Nat. Methods, 757--760, Retrieved from: http://dx.doi.org/10.1038/nmeth.1652",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -71.1056,42.3751 ]
                        },
                        "properties": {
                            "author":"Zhao Ziqing W, Roy Rahul,...and Xie X Sunney",
                            "location":"Department of Chemistry and Chemical Biology, Harvard University, Cambridge",
                            "description":"Zhao, Z., Roy, R., & Gebhardt, J. et al.(2014). Spatial organization of {RNA} polymerase {II} inside a\\nmammalian cell nucleus revealed by reflected light-sheet\\nsuperresolution microscopy. Proc. Natl. Acad. Sci. U. S. A., 681--686, 10.1073/pnas.1318496111. Retrieved from: http://dx.doi.org/10.1073/pnas.1318496111",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 16.37,48.198888888889 ]
                        },
                        "properties": {
                            "author":"Jährling Nina, Becker Klaus,...and Dodt Hans-Ulrich",
                            "location":"Department of Bioelectronics, FKE, Vienna University of Technology Vienna, Austria",
                            "description":"Jährling, N., Becker, K., & Schönbauer, C. et al.(2010). Three-dimensional reconstruction and segmentation of intact\\nDrosophila by ultramicroscopy. Front. Syst. Neurosci., 1, 10.3389/neuro.06.001.2010. Retrieved from: http://dx.doi.org/10.3389/neuro.06.001.2010",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -79.7589,40.4776 ]
                        },
                        "properties": {
                            "author":"Costello John H, Colin Sean P,...and Kelly R",
                            "location":"Eugene Bell Center, Marine Biological Laboratory, Woods Hole, USA",
                            "description":"Costello, J., Colin, S., & Gemmell, B. et al.(2015). Multi-jet propulsion organized by clonal development in a\\ncolonial siphonophore. Nat. Commun., 8158, 10.1038/ncomms9158. Retrieved from: http://dx.doi.org/10.1038/ncomms9158",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 5.435827,43.237163 ]
                        },
                        "properties": {
                            "author":"Cavey Matthieu, Lecuit Thomas",
                            "location":"IBDML, campus de Luminy, Marseille, France",
                            "description":"Cavey, M., & Lecuit, T.(2008). Imaging cellular and molecular dynamics in live embryos using\\nfluorescent proteins. Methods Mol. Biol., 219--238, Retrieved from: http://dx.doi.org/10.1007/978-1-59745-583-1_13",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 11.585897,49.928847 ]
                        },
                        "properties": {
                            "author":"Fickentscher Rolf, Struntz Philipp, Weiss Matthias",
                            "location":"Experimental Physics I, University of Bayreuth, Bayreuth, Germany",
                            "description":"Fickentscher, R., Struntz, P., & Weiss, M.(2013). Mechanical cues in the early embryogenesis of Caenorhabditis\\nelegans. Biophys. J., 1805--1811, 10.1016/j.bpj.2013.09.005. Retrieved from: http://dx.doi.org/10.1016/j.bpj.2013.09.005",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 1.2923,52.6286 ]
                        },
                        "properties": {
                            "author":"Shaw P J, Agard D A,...and Sedat J W",
                            "location":"Department of Cell Biology, John Innes Institute, Norwich, United Kingdom",
                            "description":"Shaw, P., Agard, D., & Hiraoka, Y. et al.(1989, jan). Tilted view reconstruction in optical microscopy.\\nThree-dimensional reconstruction of Drosophila melanogaster\\nembryo nuclei. Biophys. J., 101--110, 10.1016/S0006-3495(89)82783-3. Retrieved from: http://dx.doi.org/10.1016/S0006-3495(89)82783-3",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 11.374478,43.846144 ]
                        },
                        "properties": {
                            "author":"Silvestri L, Bria A,...and Pavone F S",
                            "location":"European Laboratory for Non-Linear Spectroscopy (LENS), University of Florence, Italy",
                            "description":"Silvestri, L., Bria, A., & Sacconi, L. et al.(2012). Confocal light sheet microscopy: micron-scale neuroanatomy of\\nthe entire mouse brain. Opt. Express, 20582--20598, Retrieved from: http://dx.doi.org/10.1364/OE.20.020582",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -117.34,33.98 ]
                        },
                        "properties": {
                            "author":"Huisken Jan, Stainier Didier Y R",
                            "location":"Department of Biochemistry and Biophysics, and Cardiovascular Research Institute, University of California, San Francisco, USA",
                            "description":"Huisken, J., & Stainier, D.(2009, jun). Selective plane illumination microscopy techniques in\\ndevelopmental biology. Development, 1963--1975, 10.1242/dev.022426. Retrieved from: http://dx.doi.org/10.1242/dev.022426",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 5.152941,52.118063 ]
                        },
                        "properties": {
                            "author":"Skupsch Christoph, Brücker Christoph",
                            "location":"Hubrecht Institute, KNAW and University Medical Center Utrecht, Cancer Genomics Netherlands, the Netherlands",
                            "description":"Skupsch, C., & Brücker, C.(2014). Genome-wide {RNA} Tomography in the zebrafish embryo. Cell, 662--675, Retrieved from: http://dx.doi.org/10.1016/j.cell.2014.09.038",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -73.11623,40.914224 ]
                        },
                        "properties": {
                            "author":"Gao Liang",
                            "location":"Department of Chemistry, Stony Brook University, Stony Brook, NY, USA ",
                            "description":"Gao, L.(2015). Optimization of the excitation light sheet in selective plane\\nillumination microscopy. Biomed. Opt. Express, 881--890, 10.1364/BOE.6.000881. Retrieved from: http://dx.doi.org/10.1364/BOE.6.000881",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.17,37.43 ]
                        },
                        "properties": {
                            "author":"Chung Kwanghun, Deisseroth Karl",
                            "location":"Department of Bioengineering, Stanford University, Stanford, California, USA",
                            "description":"Chung, K., & Deisseroth, K.(2013, jun). {CLARITY} for mapping the nervous system. Nat. Methods, 508--513, Retrieved from: http://dx.doi.org/10.1038/nmeth.2481",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 114.18262,22.334124 ]
                        },
                        "properties": {
                            "author":"Wu Jianglai, Li Jianping, Chan Robert K Y",
                            "location":"Department of Physics, Hong Kong Baptist University, Kowloon Tong, Hong Kong SAR, China",
                            "description":"Wu, J., Li, J., & Chan, R.(2013). A light sheet based high throughput 3D-imaging flow cytometer\\nfor phytoplankton analysis. Opt. Express, 14474--14480, Retrieved from: http://dx.doi.org/10.1364/OE.21.014474",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -95.1444,43.1414 ]
                        },
                        "properties": {
                            "author":"Voie Arne H",
                            "location":"Spencer Technologies",
                            "description":"Voie, A.(2002, sep). Imaging the intact guinea pig tympanic bulla by\\northogonal-plane fluorescence optical sectioning microscopy. Hear. Res., 119--128, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/12204356",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -78.960612,35.976246 ]
                        },
                        "properties": {
                            "author":"Alvers Ashley L, Ryan Sean,...and Bagnat Michel",
                            "location":"Department of Cell Biology, Duke University Medical Center, Durham, USA",
                            "description":"Alvers, A., Ryan, S., & Scherz, P. et al.(2014, mar). Single continuous lumen formation in the zebrafish gut is\\nmediated by smoothened-dependent tissue remodeling. Development, 1110--1119, 10.1242/dev.100313. Retrieved from: http://dx.doi.org/10.1242/dev.100313",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.306867,37.883247 ]
                        },
                        "properties": {
                            "author":"Arrenberg Aristides B, Stainier Didier Y R,...and Huisken Jan",
                            "location":"Department of Physiology, University of California, San Francisco, USA",
                            "description":"Arrenberg, A., Stainier, D., & Baier, H. et al.(2010). Optogenetic control of cardiac function. Science, 971--974, Retrieved from: http://dx.doi.org/10.1126/science.1195929",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 77.475138,23.122237 ]
                        },
                        "properties": {
                            "author":"Holekamp Terrence F, Turaga Diwakar, Holy Timothy E",
                            "location":"Department of Anatomy and Neurobiology, Washington University in St",
                            "description":"Holekamp, T., Turaga, D., & Holy, T.(2008). Fast three-dimensional fluorescence imaging of activity in\\nneural populations by objective-coupled planar illumination\\nmicroscopy. Neuron, 661--672, Retrieved from: http://dx.doi.org/10.1016/j.neuron.2008.01.011",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -90.257041,38.637693 ]
                        },
                        "properties": {
                            "author":"Luo Xueting, Salgueiro Yadira,...and Park Kevin K",
                            "location":"Miami Project to Cure Paralysis, University of Miami, Miller School of Medicine, Miami, USA",
                            "description":"Luo, X., Salgueiro, Y., & Beckerman, S. et al.(2013, sep). Three-dimensional evaluation of retinal ganglion cell axon\\nregeneration and pathfinding in whole mouse tissue after\\ninjury. Exp. Neurol., 653--662, 10.1016/j.expneurol.2013.03.001. Retrieved from: http://dx.doi.org/10.1016/j.expneurol.2013.03.001",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -71.1056,42.3751 ]
                        },
                        "properties": {
                            "author":"Gebhardt J Christof M, Suter David M,...and Xie X Sunney",
                            "location":"Department of Chemistry and Chemical Biology, Harvard University, Cambridge, Massachusetts, USA",
                            "description":"Gebhardt, J., Suter, D., & Roy, R. et al.(2013, may). Single-molecule imaging of transcription factor binding to\\n{DNA} in live mammalian cells. Nat. Methods, 421--426, 10.1038/nmeth.2411. Retrieved from: http://dx.doi.org/10.1038/nmeth.2411",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -2.231489,53.464108 ]
                        },
                        "properties": {
                            "author":"Yang Zhengyi, Piksarv Peeter,...and Dholakia Kishan",
                            "location":"SUPA, School of Physics and Astronomy, University of St",
                            "description":"Yang, Z., Piksarv, P., & Ferrier, D. et al.(2015). Macro-optical trapping for sample confinement in light sheet\\nmicroscopy. Biomed. Opt. Express, 2778--2785, 10.1364/BOE.6.002778. Retrieved from: http://dx.doi.org/10.1364/BOE.6.002778",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -94.1791,31.7955 ]
                        },
                        "properties": {
                            "author":"Voie A H, Spelman F A",
                            "location":"Center for Bioengineering, University of Washington, USA",
                            "description":"Voie, A., & Spelman, F.(1995, sep). Three-dimensional reconstruction of the cochlea from\\ntwo-dimensional images of optical sections. Comput. Med. Imaging Graph., 377--384, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/8734775",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Höckendorf Burkhard, Lavis Luke D, Keller Philipp J",
                            "location":"Janelia Research Campus, Howard Hughes Medical Institute, Ashburn, Virginia, USA",
                            "description":"Höckendorf, B., Lavis, L., & Keller, P.(2014, nov). Making biology transparent. Nat. Biotechnol., 1104--1105, Retrieved from: http://dx.doi.org/10.1038/nbt.3061",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -1.56667,54.78333 ]
                        },
                        "properties": {
                            "author":"Taylor Jonathan M, Saunter Christopher D,...and Chaudhry Bill",
                            "location":"Durham University, Centre for Advanced Instrumentation, Department of Physics, Durham, United Kingdom",
                            "description":"Taylor, J., Saunter, C., & Love, G. et al.(2011, nov). Real-time optical gating for three-dimensional beating heart\\nimaging. J. Biomed. Opt., 116021, Retrieved from: http://dx.doi.org/10.1117/1.3652892",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 13.73333,51.03333 ]
                        },
                        "properties": {
                            "author":"Scherf Nico, Huisken Jan",
                            "location":" Dresden, Germany",
                            "description":"Scherf, N., & Huisken, J.(2015, aug). The smart and gentle microscope. Nat. Biotechnol., 815--818, Retrieved from: http://dx.doi.org/10.1038/nbt.3310",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 1.4436111111111,43.604444444444 ]
                        },
                        "properties": {
                            "author":"Scherf Nico, Huisken Jan",
                            "location":"University of Toulouse, Toulouse, France",
                            "description":"Scherf, N., & Huisken, J.(2012). Deep and clear optical imaging of thick inhomogeneous samples. PLoS One, e35795, 10.1371/journal.pone.0035795. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0035795",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Vladimirov Nikita, Mu Yu,...and Ahrens Misha B",
                            "location":"Janelia Farm Research Campus, Howard Hughes Medical Institute, Ashburn, Virginia, USA",
                            "description":"Vladimirov, N., Mu, Y., & Kawashima, T. et al.(2014, sep). Light-sheet functional imaging in fictively behaving zebrafish. Nat. Methods, 883--884, Retrieved from: http://dx.doi.org/10.1038/nmeth.3040",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -2.967,53.406 ]
                        },
                        "properties": {
                            "author":"Samsonov D, Elsaesser A,...and Morfill G E",
                            "location":"Department of Electrical Engineering and Electronics, University of Liverpool, Brownlow Hill, United Kingdom",
                            "description":"Samsonov, D., Elsaesser, A., & Edwards, A. et al.(2008, mar). High speed laser tomography system. Rev. Sci. Instrum., 035102, Retrieved from: http://dx.doi.org/10.1063/1.2885683",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Chhetri Raghav K, Amat Fernand...and Keller Philipp J",
                            "location":"Howard Hughes Medical Institute, Janelia Research Campus, Ashburn, Virginia, USA",
                            "description":"Chhetri, R., Amat, F., & Wan, Y. et al.(2015, dec). Whole-animal functional and developmental imaging with\\nisotropic spatial resolution. Nat. Methods, 1171--1178, Retrieved from: http://dx.doi.org/10.1038/nmeth.3632",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 8.6725,49.41416667 ]
                        },
                        "properties": {
                            "author":"Krieger Jan W, Singh Anand...and Thorsten",
                            "location":"German Cancer Research Center (DKFZ), Heidelberg, Germany",
                            "description":"Krieger, J., Singh, A., & Bag, N. et al.(2015, dec). Imaging fluorescence (cross-) correlation spectroscopy in live\\ncells and organisms. Nat. Protoc., 1948--1974, Retrieved from: http://dx.doi.org/10.1038/nprot.2015.100",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -75.1236,39.8272 ]
                        },
                        "properties": {
                            "author":"Engelbrecht Christoph J, Johnston Richard S,...and Helmchen Fritjof",
                            "location":"Dept",
                            "description":"Engelbrecht, C., Johnston, R., & Seibel, E. et al.(2008). Ultra-compact fiber-optic two-photon microscope for functional\\nfluorescence imaging in vivo. 5556--5564, Retrieved from: http://www.ncbi.nlm.nih.gov/pubmed/18542658",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -120.047533,37.229564 ]
                        },
                        "properties": {
                            "author":"Munson Chantilly, Huisken Jan,...and Stainier Didier Y R",
                            "location":"Department of Biochemistry and Biophysics, Genetics and Human Genetics, University of California, San Francisco, USA",
                            "description":"Munson, C., Huisken, J., & Bit-Avragim, N. et al.(2008). Regulation of neurocoel morphogenesis by Pard6 gamma b. Dev. Biol., 41--54, 10.1016/j.ydbio.2008.08.033. Retrieved from: http://dx.doi.org/10.1016/j.ydbio.2008.08.033",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -93.234166666667,44.975277777778 ]
                        },
                        "properties": {
                            "author":"Santi Peter A, Johnson Shane B,...and Leger James R",
                            "location":"Department of Otolaryngology, University of Minnesota, Minneapolis, MN, USA",
                            "description":"Santi, P., Johnson, S., & Hillenbrand, M. et al.(2009, apr). Thin-sheet laser imaging microscopy for optical sectioning of\\nthick tissues. Biotechniques, 287--294, 10.2144/000113087. Retrieved from: http://dx.doi.org/10.2144/000113087",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 11.374478,43.846144 ]
                        },
                        "properties": {
                            "author":"Müllenbroich M Caroline, Silvestri Ludovico,...and Pavone Francesco S",
                            "location":"University of Florence , European Laboratory for Non-Linear Spectroscopy, Italy ",
                            "description":"Müllenbroich, M., Silvestri, L., & Onofri, L. et al.(2015, oct). Comprehensive optical and data management infrastructure for\\nhigh-throughput light-sheet microscopy of whole mouse brains. Neurophotonics, 041404, 10.1117/1.NPh.2.4.041404. Retrieved from: http://dx.doi.org/10.1117/1.NPh.2.4.041404",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -93.234166666667,44.975277777778 ]
                        },
                        "properties": {
                            "author":"Santi Peter A",
                            "location":"Department of Otolaryngology, University of Minnesota, USA",
                            "description":"Santi, P.(2011, feb). Light sheet fluorescence microscopy: a review. J. Histochem. Cytochem., 129--138, 10.1369/0022155410394857. Retrieved from: http://dx.doi.org/10.1369/0022155410394857",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 24.94861,60.17333 ]
                        },
                        "properties": {
                            "author":"Laksameethanasan Danai, Brand...and Shorte Spencer L",
                            "location":"Laboratory of Computational Engineering, Helsinki University of Technology, Finland",
                            "description":"Laksameethanasan, D., Brandt, S., & Engelhardt, P. et al.(2008, feb). A Bayesian reconstruction method for micro-rotation imaging in\\nlight microscopy. Microsc. Res. Tech., 158--167, Retrieved from: http://dx.doi.org/10.1002/jemt.20550",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -77.4875,39.0437 ]
                        },
                        "properties": {
                            "author":"Gao Liang, Shao Lin,...and Betzig Eric",
                            "location":" Howard Hughes Medical Institute (HHMI), Ashburn, Virginia, USA",
                            "description":"Gao, L., Shao, L., & Chen, B. et al.(2014, may). {3D} live fluorescence imaging of cellular dynamics using\\nBessel beam plane illumination microscopy. Nat. Protoc., 1083--1101, Retrieved from: http://dx.doi.org/10.1038/nprot.2014.087",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ 11.4701,48.1399 ]
                        },
                        "properties": {
                            "author":"Leischner Ulrich, Zieglgänsberger Walter, Dodt Hans-Ulrich",
                            "location":"Max Planck Institute of Psychiatry, Munich, Germany",
                            "description":"Leischner, U., Zieglgänsberger, W., & Dodt, H.(2009). Resolution of ultramicroscopy and field of view analysis. PLoS One, e5785, 10.1371/journal.pone.0005785. Retrieved from: http://dx.doi.org/10.1371/journal.pone.0005785",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -122.306867,37.883247 ]
                        },
                        "properties": {
                            "author":"Liu Jiandong,...and Stainier Didier Y R",
                            "location":"Department of Biochemistry and Biophysics, University of California, San Francisco, USA",
                            "description":"Liu, J., Bressan, M., & Hassel, D. et al.(2010, nov). A dual role for {ErbB2} signaling in cardiac trabeculation. Development, 3867--3875, 10.1242/dev.053736. Retrieved from: http://dx.doi.org/10.1242/dev.053736",
                            "icon":"star",
                            "FIELD7":""
                        }
                    },
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates":  [ -117.246212,32.887151 ]
                        },
                        "properties": {
                            "author":"Hu Ying S, Zimmerley Maxwell,...and Cang Hu",
                            "location":"Waitt Advanced Biophotonics Center, Salk Institute for Biological Studies",
                            "description":"Hu, Y., Zimmerley, M., & Li, Y. et al.(2014). Single-molecule super-resolution light-sheet microscopy. Chemphyschem, 577--586, Retrieved from: http://dx.doi.org/10.1002/cphc.201300732",
                            "icon":"star",
                            "FIELD7":""
                        }
                    }
                ]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });
});


//https://api.mapbox.com/geocoding/v5/mapbox.places/Abbe Center of Photonics.json?access_token=pk.eyJ1IjoiamxhaSIsImEiOiJjamZ5N3JwYTkwZ2pnMzJxNzNydTYwZXlqIn0.-wtht5S4Z5ZuLYEzCmJZgw