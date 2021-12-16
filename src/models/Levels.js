import levels from './levels.json';

import levels_i18n from '../i18n/levels.json';
import zone_i18n from '../i18n/zone.json';


const LEVELS = levels;

const isZoneOpen = (locale, zone_id) => {
	const zone_data = zone_i18n[zone_id];
	if (!zone_data) {
		return false;
	}
	if (!zone_data[locale]) {
		return false;
	}

	const now = Math.floor(Date.now() / 1000);
	return (zone_data[locale].start_ts || -1) <= now && now < (zone_data[locale].end_ts || Infinity);
};

const UNAVAILABLE_LEVELS = Object.fromEntries(
	['en_US', 'ja_JP', 'ko_KR', 'zh_TW'].map(locale => (
		[locale, levels.map(level => {
			const i18n_data = levels_i18n[level.unique_id];
			if (i18n_data.zh_CN && i18n_data.zh_CN.enabled) {
				if (!i18n_data[locale] || !i18n_data[locale].enabled) {
					return i18n_data.code;
				}
				if (!i18n_data[locale].is_perm) {
					if (level.zone_id) {
						if (!isZoneOpen(locale, level.zone_id)) {
							return i18n_data.code;
						}
					}
				}
			}
		}).filter(Boolean)]
	))
);

export {
	LEVELS,
	UNAVAILABLE_LEVELS,
};
