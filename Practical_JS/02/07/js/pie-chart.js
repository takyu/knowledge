import { nodeOps as ns } from './nodeOps.js';

(function poll_chart() {
	const $chart = ns.qs('#chart');

	if (!$chart) {
		return;
	}
	
	const ctx = $chart.getContext('2d');

	const count_ag = $chart.dataset.agree;
	const count_dag = $chart.dataset.disagree;
	const count_nei = $chart.dataset.neither;

	let data;

	if (count_ag == 0 && count_dag == 0 && count_nei == 0) {
		data = {
			labels: ['No votes yet.'],
			datasets: [{
				data: [1],
				backgroundColor: [
					'#696969'
				]
			}]
		}
	} else {
		data = {
			labels: ['agree', 'disagree', 'neither'],
			datasets: [{
				data: [count_ag, count_dag, count_nei],
				backgroundColor: [
					'#34d399',
					'#f87171',
					'#dcdcdc'
				]
			}]
		}
	}

	new Chart(ctx, {
		type: 'pie',
		data: data,
		options: {
			plugins: {
				legend: {
					position: 'bottom',
					labels: {
						font: {
							size: 22
						}
					}
				}
			}
		}
	});
})();