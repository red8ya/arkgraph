import React, { Fragment } from 'preact';
import style from './style';

import { STORAGE_VERSION } from '../../config/useConfig';
import { getOperatorName } from '../../models/Operators';
const announcement_data = require('./auto_announcements.json');

const AnnouncementItem = ({
	date,
	children,
}) => (
	<Fragment>
		<p>{date}</p>
		{
			children
		}
		<br />
	</Fragment>
);

const OperatorUpdates = ({
	ir,
	locale,
	date,
	new_operators,
}) => (
	<AnnouncementItem
		date={date}
	>
		{ir('homepage-announcement-new_operators', 'New operators')}
		<br />
		{
			new_operators.map(
				id => (
					<Fragment>
					【<a href={`/operator/${getOperatorName({ id, locale })}`}>{getOperatorName({ id, locale })}</a>】
					</Fragment>
				)
			)
		}
	</AnnouncementItem>
);

const Info = ({
	config,
	ir,
}) => (
	<div class={style.wrapper}>
		<div class={style.info}>
			<h1><a href="https://ark-nights.com/">ARK-NIGHTS.com</a></h1>
			<h3 class={style.mobile_title}>明日方舟 | 干员培养表 <small>v{STORAGE_VERSION}</small></h3>
			<hr />
			<h2>{ir('homepage-announcement', '公告')}</h2>
			{
				announcement_data
					.filter(row => row.server.includes(config.locale))
					.filter((_, i) => i < 10)
					.map(row => {
						switch (row.type) {
							case 'new_operators':
								return <OperatorUpdates ir={ir} locale={config.locale} {...row} />;
							default:
								return null;
						}
					})
			}
			<p>2021-09-17</p>
			增加了新材料<br />
			<p>2021-08-03</p>
			尝试支持了干员模组需求计算，目前需要在【培养表】页面添加，稍后增加到【干员】页面<br />
			先选择干员，如果干员有模组可以开放，则在升级项目中可以选择模组名字即可<br />
			<br />
			<p>2020-01-16</p>
			添加了多语言支持🎉<br />
			日本語を追加しました🎉<br />
			Added English translation🎉<br />
			한국어 인터페이스를 잠시 제공하지 않아서 죄송합니다. 다만 한글판 재료명과 오퍼레이터 이름을 제공합니다. <br />
			<br />
			如果对应语言没有添加对应的干员或材料支持，会出现显示不正确的情况<br />
			オペレーターまたは素材が未だにリリースされていませんなら、正しく表示出来ませんの場合があります。<br />
			It may have incorrect display if the operator or material is not yet released.<br />
			<br />
			<p>2019-09-30</p>
			部署了镜像站 <a href="https://cn.ark-nights.com">CN.Ark-Nights.com</a><br />
			国内用户请使用CN站<br />
			<br />
			<hr />
			<p>
				<h2>{ir('homepage-donation', '捐助')}</h2>
				{config.locale === 'zh_CN' && (
					<p>
					感谢大家的支持，这计算器的访问量真的超乎我的想象<br />
					服务器一个月<code>100G</code>流量，已经尽量通过加前端缓存和减少图片使用来减少流量消耗<br />
						<small>（小声）</small>在下边有打赏/捐助链接0w0，如果大佬们愿意打赏或者捐助一点服务器费用的话，我会非常感激的！
					</p>
				)}
				{['en_US', 'ko_KR'].includes(config.locale) && (
					<p>
						To serve all Arknights players around the world, there are some costs to run the server.<br />
						I would appreciate very much for your donation if you can buy me a coke. (I don't drink coffee, lol) <br />
						If you like this tools, please also consider share it to your friends~ <br />
					</p>
				)}
				{['ja_JP'].includes(config.locale) && (
					<p>
						全世界のアークナイツプレイヤーが快適に利用できますように、サーバーの費用が多少かかります。<br />
						もしこのツールが役に立ってば、寄付頂けると非常に感謝します。
					</p>
				)}
				<div class={style.tips}>
					<img class={style.tip} src="../../assets/tip_ali.png" alt="reward_author" />
					<img class={style.tip} src="../../assets/tip_wechat.png" alt="reward_author" />
				</div>
				<div class={style.tip_donate}>
					<div class={style.tip_donate_button}>
						<a target="_blank" href="https://opencollective.com/towastudio/donate">
							Donate with OpenCollective
						</a>
					</div>
				</div>
			</p>
			<hr />
			<h2>{ir('homepage-about', '关于项目')}</h2>
			{config.locale === 'zh_CN' && (
				<Fragment>
					<p>沉迷培养干员，然而没有理智。<del>只好写点相关项目等理智恢复</del></p>
					<p>感谢以下网站及大佬</p>
					<ul>
						<li><a target="_blank" rel="noreferrer noopener" href="http://wiki.joyme.com/arknights/">明日方舟wiki</a></li>
						<li><a target="_blank" rel="noreferrer noopener" href="https://graueneko.github.io/">明日方舟工具箱</a></li>
						<li><a target="_blank" rel="noreferrer noopener" href="https://penguin-stats.io/">企鹅物流数据统计</a></li>
					</ul>
					<p>如果有各种建议或者意见，欢迎到帖子留言，提Issue或微博找我</p>
					<p>NGA发布帖：<a target="_blank" rel="noreferrer noopener" href="https://bbs.nga.cn/read.php?tid=17417159">链接</a></p>
		    <p>项目地址：<a target="_blank" rel="noreferrer noopener" href="https://github.com/Houdou/arkgraph">GitHub</a></p>
		    <p>作者： <a target="_blank" rel="noreferrer noopener" href="https://weibo.com/timeleap">@凤瞳</a></p>
				</Fragment>
			)}
			{['en_US', 'ko_KR'].includes(config.locale) && (
				<Fragment>
					<p>If you have any problem, suggestion, or issue, please fine me at:</p>
					<p>Reddit: <a target="_blank" rel="noreferrer noopener" href="https://www.reddit.com/r/arknights/comments/f04gg1/planner_material_calculator_tool/">Link</a></p>
			    <p>Project repository：<a target="_blank" rel="noreferrer noopener" href="https://github.com/Houdou/arkgraph">GitHub</a></p>
			    <p>Sina weibo: <a target="_blank" rel="noreferrer noopener" href="https://weibo.com/timeleap">@凤瞳</a></p>
				</Fragment>
			)}
			{config.locale === 'ja_JP' && (
				<Fragment>
					<p>質問、提案があたら、こちらの連絡方法で</p>
					<small>日本語が大体わかりますけど。。。あんまり上手くないです</small>
			    <p>リポジトリ：<a target="_blank" rel="noreferrer noopener" href="https://github.com/Houdou/arkgraph">GitHub</a></p>
			    <p>作者（Weibo）： <a target="_blank" rel="noreferrer noopener" href="https://weibo.com/timeleap">@凤瞳</a></p>
				</Fragment>
			)}
			<hr />
			<h2>使用说明</h2>
			<h3>干员培养表</h3>
			<ul>
				<li>点击表格左下角的<code>+</code>添加一行干员数据</li>
				<li>输入干员名称，按<code>Tab</code>或<code>Enter</code>自动补全</li>
				<li>选择升级项目（等级、精英阶段、技能、技能专精）</li>
				<li>输入目前等级，右边表格会自动查询所需材料并折叠不需要的材料列</li>
				<li>如果库存数量满足升级需求（按钮会自动点亮），可以点击左边第二列的确认按钮消耗对应材料并删除此行</li>
			</ul>
			<h3>材料追踪</h3>
			<ul>
				<li>点击<code>表头材料图标</code>或材料卡片中<code>合成原料图标</code>可添加/移除追踪材料</li>
				<li>点击<code>追踪所有原料</code>添加合成所需成分</li>
				<li>点击<code>折算合成原料</code>，需求数量自动将需求转化为合成原料需求</li>
				<ul>
					<li>由于可能产生循环计算问题，暂不添加芯片类同级转化的合成计算</li>
				</ul>
				<li>点击<code>材料大图标</code>可直接增加1个库存，右键减少1个</li>
				<li>点击<code>合成一份</code>将自动扣除原料数量，并增加1个到库存</li>
			</ul>
			<h3>干员查询</h3>
			<ul>
				<li>点击【干员查询】切换页面</li>
				<li>输入干员名称，按<code>Tab</code>或<code>Enter</code>有自动补全功能。支持拼音和汉字模糊输入：例lapu，推推</li>
				<li>选择干员目前等级以及培养目标，超出范围会自动修正</li>
				<li>如果有前置要求（如技能专精：需要精2＋基础技能7级），也会自动修正</li>
				<li>提供了几个快捷选项方便选择</li>
				<li>下方表格会自动查询所需材料并列出所有升级项目并汇总所有需求</li>
				<li>如果库存数量满足升级需求，会在【可完成】列打一个小勾勾表示可以直接升级该项</li>
			</ul>
			<h3>材料查询</h3>
			<ul>
				<li>点击【材料查询】切换页面</li>
				<li>输入材料名称，按<code>Tab</code>或<code>Enter</code>有自动补全功能。支持拼音和汉字模糊输入：例meng，纳米</li>
				<li>可以通过干员职业，稀有度，升级项目来筛选</li>
				<li>下方表格会自动显示所有需要这个材料的升级项目</li>
			</ul>
			<h3>库存管理</h3>
			<ul>
				<li>点击【库存管理】切换页面</li>
				<li>下方会显示所有材料</li>
				<li>可点击显示选项更改不同分类方式</li>
				<li>左键增加库存量，右键减少，可以按<code>Shift</code>一次增减10个</li>
				<li>可输入关卡编号，按<code>Tab</code>或<code>Enter</code>有自动补全功能</li>
			</ul>
			<h3>Tips</h3>
			<blockquote><p>虽然输入干员名称时没有备选项，但支持模糊输入，大概输对了就能找到（</p></blockquote>
			<blockquote><p>你好，博士。你或许希望能在这找到Lancet-2，但Lancet-2什么升级都没有，毕竟她只是一台医疗机器人……</p></blockquote>
			<blockquote><p>建议使用最新版本Chrome打开本网站，开发精力有限，没有计划支持Chrome和Edge之外的浏览器</p></blockquote>
			<blockquote><p>材料表格太宽时，按住<code>Shift</code>再滚动鼠标滚轮<del>应该</del>可以横向滚动</p></blockquote>
			<hr />
			<h2>功能列表</h2>
			<h3>已实现功能</h3>
			<ul>
				<li>干员数据查询</li>
				<li>自动本地保存</li>
				<li>自动折叠数据列</li>
				<li>材料图标</li>
				<li>材料出处展示</li>
				<li>材料合成公式展示</li>
				<li>追踪材料</li>
				<li>输入完库存，会自动计算差值</li>
				<li>基于合成公式展开的单个需求计算</li>
				<li>合成消耗对应材料</li>
				<li>数据导入与导出</li>
				<li>升级经验计算</li>
				<li>单个干员培养需求的批量添加</li>
				<li>材料筛选显示</li>
				<li>关联【企鹅物流数据统计】掉落概率</li>
				<li>材料查询页面的筛选功能</li>
				<li>其他筛选选项</li>
			</ul>
			<h3>待实现功能</h3>
			<ul>
				<li>增加键盘快捷键</li>
				<li>添加关卡详细物品掉落数量，示例可以参考龙门币材料卡片</li>
				<li>……</li>
			</ul>
			<h3>计划中功能</h3>
			<ul>
				<li>欢迎提供建议: <a target="_blank" rel="noreferrer noopener" href="https://github.com/Houdou/arkgraph/issues">Issue board</a></li>
			</ul>
			<hr />
			<div style={{ width: '96%', textAlign: 'right' }}>
				<small>ARK-NIGHTS.com by Houdou</small>
			</div>
		</div>
	</div>
);

export default Info;
