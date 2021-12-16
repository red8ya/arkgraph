const path = require('path');

const LANG = [
	'en_US',
	'ja_JP',
	'ko_KR',
	'zh_CN',
	'zh_TW',
];

const stages_data = {};

const readTable = (lang) => {
	const { stages } = require(path.resolve(__dirname, `./data/${lang}/gamedata/excel/stage_table.json`));
	const { stageList: retro_stages } = lang === 'zh_TW'
		? { stageList: [] }
		: require(path.resolve(__dirname, `./data/${lang}/gamedata/excel/retro_table.json`));
	Object.entries(stages)
		.forEach(([
			key, value,
		]) => {
			const {
				stageType,
				code,
				stageId,
			} = value;

			stages_data[key] = stages_data[key] || {};
			stages_data[key].code = code;

			stages_data[key][lang] = stages_data[key][lang] || {};
			stages_data[key][lang].enabled = true;
			stages_data[key][lang].is_perm = stageType !== 'ACTIVITY' || Boolean(retro_stages[stageId]);
		});
};

LANG.forEach(lang => {
	readTable(lang);
});

require('fs').writeFileSync(require('path').resolve(__dirname, '../../src/i18n', 'levels.json'), JSON.stringify(stages_data, null, 2));
