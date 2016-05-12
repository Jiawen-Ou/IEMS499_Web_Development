// Initialize collapse button
// $(".button-collapse").sideNav();
$('.button-collapse').sideNav({
  menuWidth: 240, // Default is 240
});



// sideNav title number
$('input[name=bn]').click(function() {
  $('#building').html("Building: #" + $('input[name=bn]:checked').val()+  "<i class='mdi-navigation-arrow-drop-down'></i>")
});

$('input[name=rn]').click(function() {
  $('#room').html("Romm: #" + $('input[name=rn]:checked').val()+  "<i class='mdi-navigation-arrow-drop-down'></i>")
});

$('input[name=kn]').click(function() {
  // alert("test");
  // console.log($('#kinect').html());
  $('#kinect').html("Kinect: #" + $('input[name=kn]:checked').val()+  "<i class='mdi-navigation-arrow-drop-down'></i>")
});



// date picker
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year
    format: 'yyyy-mm-dd'
  });


// timepicker
$('.timePicker').trigger('autoresize');



// qVResult
console.log(qVResult);
for(i=0 ; i<qVResult.length ;i++){
  $(".videoList").append("<p><a href='" +'./video/' + qVResult[i].fileName+ "'>" + qVResult[i].fileName+"</a></p>");
}
var playerList = document.getElementById("videoListId");
var links = playerList.getElementsByTagName('a');
for (var i=0; i<links.length; i++) {
    links[i].onclick = handler;
}
function handler(e) {
  // prevent the full screen play video
  e.preventDefault();
  videoPath = this.getAttribute("href");
  video = document.querySelector("video");
  video.removeAttribute("poster");
  source = document.querySelectorAll("video source");
  source.src =   videoPath+ ".mp4";
  document.getElementById("source").setAttribute("src",source.src ) ;
  video.load();
  video.play();
}

// qEResult

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
var eventType = [];
var myDic = [];
for(var i=0 ; i<qEResult.length; i++){
  var tmp = qEResult[i].event;
  if(!myDic[tmp]){
    var tmpAr =[];
    tmpAr.push(qEResult[i]);
    myDic[tmp] = tmpAr;
  }else{
    myDic[tmp].push(qEResult[i]);
  }
}

// console.log(myDic);
for(var i in myDic){

  var collapseBody = '';
  for(var j=0 ; j<myDic[i].length; j++){
      collapseBody = collapseBody +"<p>" + myDic[i][j].startTime +" - "+ myDic[i][j].endTime +"</p>" ;
  }

  console.log(collapseBody);
  $("#eventCollapse").append(
    "<li>"+
      '<div class="collapsible-header">' + i + '</div>'+
      '<div class="collapsible-body"> '+ collapseBody +'</div>' +
    "</li>"
);
}


// Date.prototype.addSeconds = function(secs) {
//     var dat = new Date(this.valueOf())
//     dat.setSeconds(dat.getSeconds() + secs);
//     return dat;
// }
//
//
// function getDates(startDate, stopDate) {
//     var dateArray = new Array();
//     var currentDate = startDate;
//
//     while (currentDate <= stopDate) {
//         dateArray.push( new Date (currentDate) )
//         currentDate = currentDate.addSeconds(1);
//     }
//     return dateArray;
// }
//
//
// var padding = 10;
//
// var svg = d3.select(".graph")
//           .append("svg");
//
// var w = $(".graph").width(),
// h = $(".graph").height();
//
// svg.attr("width", w)
//     .attr("height", h);
//
// console.log(qEResult);
// var minDate = new Date(qEResult[0].startTime),
// maxDate = new Date(qEResult[1].endTime);
//
// timeStamps = getDates(minDate, maxDate);
//
// var timeLength = timeStamps.length;
// var dateObj = [];
// var events = ["SIT", "WALK", "SLEEP"];
// var sitCount = 0;
// var walkCount = 0;
// var sleepCount = 0;
//
// // console.log(myDic);
// for(var i in myDic){
// }
//
//
//
// for (var i = 0; i < timeLength; i++) {
//     var start = new Date(qEResult[i].startTime),
//     end = new Date(qEResult[i].endTime);
//
//     if (start <= timeStamps[i] && timeStamps[i] <= end) {
//         var eventType;
//         var date = {
//             datetime : timeStamps[i],
//             eventName : qEResult[i].event
//         }
//         // console.log(myDic[1]);
//         for(var i = 0; i< events.length; i++){
//           if(events[i] == date.eventName) {
//             eventType = events[i];
//             date[events[i]] = 1;
//           }
//           else{
//             date[events[i]] = 0;
//           }
//         }
//
//         dateObj.push(date);
//         accumulator(date, date[eventType]);
//
//     }
// }
//
// function accumulator(date, eventType) {
//   var i = 0;
//   var sum = 0;
//
//   do {
//       sum += dateObj[i][eventType];
//       i++;
//   } while (dateObj[i].datetime != date);
//
//   return sum;
//
// }
//
// var xScale = d3.time.scale()
//     .domain([minDate, maxDate])
//     .range([padding, w - padding]);
//
// var format = d3.time.format("%b %d %H %i %s");
//
// var xAxis = d3.svg.axis()
//     .scale(xScale)
//     .orient("bottom")
//     .tickFormat(format)
//     .ticks(d3.time.second, 5);
//
//
//
//
//
// function resizeGraph() {
//     w = $(".graph").width();
//     h = $(".graph").height();
//     svg.attr("width", w)
//     .attr("height", h);
// }
//
// $(window).resize(function() {
//     resizeGraph();
//
// });
//
//
//
//
// 
//
//
//
