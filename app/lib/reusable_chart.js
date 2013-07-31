var chart_reusable = function(elm, data) {
	$(elm).highcharts({
		chart: {
			type: data.type
		},
		title: {
			text: null
		},
		subtitle: {
			text: data.subtitle
		},
		xAxis: {
			categories: data.xAxis,
			tickWidth: null
		},
		yAxis: {
			min: 0,
			title: {
				text: ''
			},
			labels: {
				enabled: false
			},
			gridLineWidth: null
		},
		legend: {
			layout: 'vertical',
			backgroundColor: '#FFFFFF',
			align: 'center',
			verticalAlign: 'top',
			x: 100,
			y: 70,
			floating: true,
			shadow: true
		},
		tooltip: {
			enabled: false
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
				dataLabels: {
					enabled: true
				},
			},
			series: {
				animation: false,
				color: '#7B9F2D'
			}
		},
		series: [{
			data: data.results,
			showInLegend: false

		}]
	});
}
