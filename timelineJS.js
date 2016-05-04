
 $(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0.0,
      max: 1.0,
      step: 0.01,
      values: [ 0.0, 1.0 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });

    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  });




  
  // var container = document.getElementById('visualization');

  // // Create a DataSet (allows two way data-binding)
  // // var tempDate = new Date(null,null,null,00,00,00,00);
  // // var tempDate2 = new Date(null,null,null,00,00,01,300);

  // // var a = vis.moment([1900,10,01,00,00,00]);
  // // var myDate = new Date (tempDate.getUTCDay());

  // var items = new vis.DataSet([
  //    {id: 1, content: '1', 
  //     start: new Date(null,null,null,00,00,00,000),  
  //     end: new Date(null,null,null,00,00,20,300), 
  //     type: 'background'
  //  },
  //     {id: 2, content: '2', 
  //     start: new Date(null,null,null,00,00,20,300),  
  //     end: new Date(null,null,null,00,01,40,500), 
  //     type: 'background', 
  //     className: 'negative'
  //   },
  //     {id: 3, content: '3', 
  //     start: new Date(null,null,null,00,01,40,500),  
  //     end: new Date(null,null,null,00,02,40,500), 
  //     type: 'background' 
  //     // className: 'negative'
  //   },
  //     {id: 4, content: '4', 
  //     start: new Date(null,null,null,00,02,40,500),  
  //     end: new Date(null,null,null,00,04,00,100), 
  //     type: 'background', 
  //     className: 'negative'
  //   },
  // ]);

  // // Configuration for the Timeline
  // var options = {
  // timeAxis: {scale: 'second', step: 10},
  // // moveable: false,
  // start: new Date(null,null,null,00,00,00,000),
  // end: new Date(null,null,null,00,10,00,100), 
  // min: new Date(null,null,null,00,00,00,00),
  // max: new Date(null,null,null,00,10,00,00),
  // align: 'center',
  // stack: true,
  // // zoomMin: 1000 * 60,           
  // // zoomMax: 1000 * 60 * 3,     
  // format:{
  //         majorLabels: {
  //           millisecond:'HH:mm:ss',
  //           second:     'HH:mm',
  //           minute:     '',
  //           hour:       '',
  //           weekday:    '',
  //           day:        '',
  //           month:      '',
  //           year:       ''
  //         }
  //       }
  // }

  //   var timeline = new vis.Timeline(container, items, options);

  //   var r = timeline.getWindow();
  //   var l = r.end - r.start;
  //   var s = r.start.valueOf();
  //   var e = r.end.valueOf();

  //   /**
  //    * Move the timeline a given percentage to left or right
  //    * @param {Number} percentage   For example 0.1 (left) or -0.1 (right)
  //    */
  //   function movel (percentage) {
  //       var range = timeline.getWindow();
  //       // var interval = range.end - range.start;

  //       timeline.setWindow({
  //           // start: range.start.valueOf() - interval * percentage,
  //           // end:   range.end.valueOf()   - interval * percentage
  //           start: s + l*percentage,
  //           end: range.end.valueOf()
  //       });
  //   }

  //   function mover (percentage) {
  //        var range = timeline.getWindow();
  //       // var interval = range.end - range.start;

  //       timeline.setWindow({
  //           // start: range.start.valueOf() - interval * percentage,
  //           // end:   range.end.valueOf()   - interval * percentage
  //           start: range.start.valueOf(),
  //           end: s + l*percentage
  //       });
  //   }

  //   /**
  //    * Zoom the timeline a given percentage in or out
  //    * @param {Number} percentage   For example 0.1 (zoom out) or -0.1 (zoom in)
  //    */
  //   function zoom (percentage) {
  //       var range = timeline.getWindow();
  //       var interval = range.end - range.start;

  //       timeline.setWindow({
  //           start: range.start.valueOf() - interval * percentage,
  //           end:   range.end.valueOf()   + interval * percentage
  //       });
  //   }

  //   // attach events to the navigation buttons
  //   document.getElementById('zoomIn').onclick    = function () { zoom(-0.2); };
  //   document.getElementById('zoomOut').onclick   = function () { zoom( 0.2); };
  //   document.getElementById('moveLeft').onclick  = function () { movel( 0.4); };
  //   document.getElementById('moveRight').onclick = function () { mover( 0.8); };