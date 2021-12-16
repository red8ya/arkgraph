const path = require('path');

const LANG = [
	'en_US',
	'ja_JP',
	'ko_KR',
	'zh_CN',
	'zh_TW',
];

const zones_data = {};

const readTable = (lang) => {
	const { zoneValidInfo } = require(path.resolve(__dirname, `./data/${lang}/gamedata/excel/zone_table.json`));
	Object.entries(zoneValidInfo)
		.forEach(([
			zone_id, values,
		]) => {
			const {
				startTs,
				endTs,
			} = values;

			zones_data[zone_id] = zones_data[zone_id] || {};

			zones_data[zone_id][lang] = zones_data[zone_id][lang] || {};
			zones_data[zone_id][lang].start_ts = startTs;
			zones_data[zone_id][lang].end_ts = endTs;
		});
};

LANG.forEach(lang => {
	readTable(lang);
});

require('fs').writeFileSync(require('path').resolve(__dirname, '../../src/i18n', 'zones.json'), JSON.stringify(zones_data, null, 2));
