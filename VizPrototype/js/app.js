var data1 = ['Flesch–Kincaid', 4, 5, 4.5, 7, 6, 5];
var data2 = ['Grammar', 1.5, 3, 2, 4.5, 2.5, 3.5];
var data3 = ['Stupid Index', 0.5, 2, 1, 8, 1.5, 2.5];

var dates = [
  'x',
  new Date('2013-01-01'),
  new Date('2013-02-01'),
  new Date('2013-03-01'),
  new Date('2013-04-01'),
  new Date('2013-05-01'),
  new Date('2013-06-01')
];

// ready?
$(function() {

  var chart = c3.generate({
    bindto: '.chart',
    data: {
      x: 'x',
      xFormat: '%Y %m% d',
      columns: [
        dates,
        data1,
        data2,
        data3
      ],
      types: {
        'Flesch–Kincaid': 'area-spline',
        'Grammar': 'area-spline',
        'Stupid Index': 'area-spline'
      },
      colors: {
        'Flesch–Kincaid': '#5d51a5',
        'Grammar': '#6bc1a3',
        'Stupid Index': '#e7f490'
      }
    },
    size: {
      height: 500
    },
    padding: {
      top: 40,
      right: 60,
      bottom: 80,
      left: 60,
    },
    legend: {
      position: 'bottom',
      inset: {
          anchor: 'bottom-left',
          x: 0,
          y: -300,
          step: 3
        }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: "%d %b %Y" // https://github.com/mbostock/d3/wiki/Time-Formatting#wiki-format
        },
        padding: { // tick padding
          left: 0,
          right: 0
        }
      },
      y: {
        label: { // ADD
          text: 'Grade Level',
          position: 'outer-middle'
        },
        padding: {
          top: 20,
          bottom: 0
        }
      }
    },
    transition: {
      duration: 500
    }
  });

  // setTimeout(function () {
  //   chart.load({
  //     columns: [ data3 ],
  //     type: 'area-spline'
  //   });
  // }, 1500);

  // console.log('foo');

}); // ./end onDocumentReady
