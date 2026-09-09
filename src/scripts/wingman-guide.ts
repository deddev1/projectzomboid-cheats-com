/** Spiffo wingman — slides in from the right with a short tagline. */
import { wingmanConfig } from '../data/wingman';

let hideTimer: ReturnType<typeof setTimeout> | undefined;
let enterTimer: ReturnType<typeof setTimeout> | undefined;
let isVisible = false;

function prefersReducedMotion(): boolean {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function clearTimers() {
	if (hideTimer) clearTimeout(hideTimer);
	if (enterTimer) clearTimeout(enterTimer);
	hideTimer = undefined;
	enterTimer = undefined;
}

function hideWingman(root: HTMLElement) {
	root.classList.remove('wingman--enter');
	root.classList.add('wingman--exit');
	isVisible = false;

	const onEnd = () => {
		root.classList.remove('wingman--exit');
		root.className = 'wingman';
		root.hidden = true;
	};

	if (prefersReducedMotion()) {
		onEnd();
		return;
	}

	hideTimer = setTimeout(onEnd, 780);
}

function showWingman(root: HTMLElement) {
	const messageEl = root.querySelector<HTMLElement>('[data-wingman-message]');
	if (!messageEl) return;

	clearTimers();
	isVisible = true;

	root.hidden = false;
	root.className = 'wingman';
	messageEl.textContent = wingmanConfig.message;

	enterTimer = setTimeout(() => {
		root.classList.add('wingman--enter');
		hideTimer = setTimeout(() => hideWingman(root), wingmanConfig.dwellMs);
	}, wingmanConfig.delayMs);
}

function bootWingman() {
	const root = document.querySelector<HTMLElement>('[data-wingman]');
	if (!root) return;

	if (isVisible && !root.hidden) {
		hideWingman(root);
		setTimeout(() => showWingman(root), 850);
		return;
	}

	showWingman(root);
}

function scheduleWingman() {
	const run = () => bootWingman();
	if ('requestIdleCallback' in window) {
		window.requestIdleCallback(run, { timeout: 3000 });
	} else {
		window.setTimeout(run, 1500);
	}
}

scheduleWingman();
document.addEventListener('astro:page-load', scheduleWingman);
