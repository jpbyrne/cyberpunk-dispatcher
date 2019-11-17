import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<div class={style.noisy} />
		<div class={style.emblem}><span class={style['icon-information']} /></div>
		<div class={style.frame}>
			<div class="piece output">
				<h1>NDPD</h1>
				<h2>//Auto Dispatch</h2>
				<h4>=================================
				<br />
				PATROL #464 | STATUS: ACTIVE</h4>
				<br />
				<p>DISPATCH CODE:</p>
				<h3>10-10[S] | Possible Crime [Shots fired]</h3>
				
				<p>ADDRESS:</p>
				<h3>Baggot Street Lower</h3>
				
				<p>DISPATCH NOTES:</p>
				<h3>Call came in from Harold Dunne, kiosk owner. Possible gang violence.</h3>
			</div>
			<div class={`${style.piece} ${style.scanlines} ${style.noclick}`} />
			<div class={`${style.piece} ${style.glow} ${style.noclick}`} />
		</div>
	</div>
);

export default Home;
