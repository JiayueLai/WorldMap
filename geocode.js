var parse ='';
var info = ''; //geojson file
var psv = d3.dsvFormat(";");
var cite = ''
var name =''
var coord=''
var data =''


 d3.dsv(";", "a.csv", function(d) {
     return {
         author: d.author,  //convert "Year" column to Date
         location: d.location,
         citation: d.citation,
         latitude:d.latitude,
         longitude:d.longitude,
         icon: d.icon
     };
 }).then(function (output) {
     data = output
     console.log(data)
     var i  = 0
     for (i = 0; i<data.length-1; i++){
         parse = data[i].location +'.json?'
         cite = data[i].citation
         send(parse,i)
     }

     function send(parse,i) {

         $.ajax({
             type: "GET",
             url: "https:api.mapbox.com/geocoding/v5/mapbox.places/" + parse+"access_token=pk.eyJ1IjoiamxhaSIsImEiOiJjamZ5N3JwYTkwZ2pnMzJxNzNydTYwZXlqIn0.-wtht5S4Z5ZuLYEzCmJZgw",
             dataType: "json"
         }).success(function(data2){
             console.log(data2)
             processJSON(data2,i);
         }).error(function () {
             console.log('a')

         })
     }

     function processJSON(json,i) {
          Do stuff here
         var result=''
         info = json.features[0];
         if (!info)
             return;
         if (!info.geometry.coordinates.length){
             console.log('a')
         }
         else{
             data[i].latitude = String(info.geometry.coordinates[1])
             data[i].longitude = String(info.geometry.coordinates[0])
             data[i].icon = String('theatre')

         }


         console.log(data[0].latitude)
         toCsv(data)
     }
 })

 function toCsv(args) {
     var result, ctr, keys, columnDelimiter, lineDelimiter, data;
     data = args;
     columnDelimiter = args.columnDelimiter || ';';
     lineDelimiter = args.lineDelimiter || '\n';

     keys = Object.keys(data[0]);

     result = '';
     result += keys.join(columnDelimiter);
     result += lineDelimiter;

     data.forEach(function(item) {
         ctr = 0;
         keys.forEach(function(key) {
             if (item.latitude){
                 result += item[key];
                 result += columnDelimiter;
             }
             ctr++;
         });
         if(item.latitude)
             result += lineDelimiter;
     });
     console.log(result)


     return result;
 }
