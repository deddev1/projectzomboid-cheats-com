/** Click ripple effect for Inspira UI RippleButton (Astro port). */
function initInspiraRippleButtons(root: ParentNode = document) {
	root.querySelectorAll<HTMLElement>('[data-inspira-ripple-button]').forEach((button) => {
		if (button.dataset.rippleReady === 'true') return;
		button.dataset.rippleReady = 'true';

		button.addEventListener('click', (event) => {
			if (!(event instanceof MouseEvent)) return;

			const rect = button.getBoundingClientRect();
			const size = Math.max(rect.width, rect.height);
			const x = event.clientX - rect.left - size / 2;
			const y = event.clientY - rect.top - size / 2;
			const duration = Number(button.dataset.rippleDuration) || 600;
			const color = button.dataset.rippleColor || '#d2ae76';

			const ripple = document.createElement('span');
			ripple.className = 'inspira-ripple-btn__ripple';
			ripple.style.setProperty('--ripple-duration', `${duration}ms`);
			ripple.style.width = `${size}px`;
			ripple.style.height = `${size}px`;
			ripple.style.top = `${y}px`;
			ripple.style.left = `${x}px`;
			ripple.style.backgroundColor = color;

			button.appendChild(ripple);
			window.setTimeout(() => ripple.remove(), duration);
		});
	});
}

initInspiraRippleButtons();
document.addEventListener('astro:page-load', () => initInspiraRippleButtons());
