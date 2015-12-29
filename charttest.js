if ($("#landing_page_chart").length > 0) {
  var landing_page_chart = c3.generate({
    bindto: document.getElementById('landing_page_chart'),
      data: {
            x: 'date',
            xFormat: '%Y-%m-%d %H:%M:%S',
            json: {
            	"date": ["2015-10-26 14:26:07", "2015-10-26 15:26:07", "2015-10-26 16:26:07"],
              "Value 1": [30, 33, 16],
              "Value 2": [35, 3, 26],
              // keys: {x: 'date', value: ['temp']}
            },
            axes: {
              temp: 'y',
              relsat: 'y2'
              },
            },
      axis:{
            x: {
              label: {
                text: 'Date',
                position: 'outer-center'
                },
                type: 'timeseries',
                tick: {format: "%Y-%m-%d %H"}
              },
            y: {
                label: {
                text:'Chart Mockup',
                position: 'outer-middle'
              }
            },
            y2: {
                show: true,
                label: {
                text: 'Chart Mockup 2',
                position: 'outer-middle'
              }
            }
          },
      line:     {width: {ratio: 0.5}},
      point:    {show: false},
      tooltip:  {grouped: true},
      subchart: {show: true},
      zoom:     {enabled: true},
      grid:     {x: {show: true},
                 y: {show: true}},
});}
