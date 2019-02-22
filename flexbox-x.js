// row
window.customElements.define("row-x", class extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = `
<style>
	:host {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
	@media screen and (max-width: 768px) {
		:host {
			min-width: 100%;
			width: 100%;
			flex: 1 0 100%;
			display: block;
		}
	}
</style>
<slot></slot>
    `;
		if (this.hasAttribute('reverse')) {
			this.reverse = this.getAttribute('reverse');
		}
		if (this.hasAttribute('wrap')) {
			this.wrap = this.getAttribute('wrap');
		}
		if (this.hasAttribute('justify-content')) {
			this.justifyContent = this.getAttribute('justify-content');
			for (let i = this.children.length - 1; i >= 0; i--) {
				this.children[i].style.flexGrow = 0;
			}
		}
		if (this.hasAttribute('align-items')) {
			this.alignItems = this.getAttribute('align-items');
		}
		if (this.hasAttribute('align-content')) {
			this.alignContent = this.getAttribute('align-content');
		}
	}
	set reverse(reverse) {
		this.style.flexDirection = reverse === false ? 'row' : 'row-reverse';
	}
	set wrap(wrap) {
		this.style.flexWrap = wrap === 'reverse' ? 'wrap-reverse' : 'nowrap';
	}
	set justifyContent(position) {
		this.style.justifyContent = position;
	}
	set alignItems(position) {
		this.style.alignItems = position;
	}
	set alignContent(position) {
		this.style.alignContent = position;
	}
});
// column
window.customElements.define('column-x', class extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = `
<style>
	:host {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	@media screen and (max-width: 768px) {
		:host {
			min-width: 100%;
			width: 100%;
			flex: 1 0 100%;
			display: block;
		}
	}
</style>
<slot></slot>
    `;
		if (this.hasAttribute('reverse')) {
			this.reverse = this.getAttribute('reverse');
		}
		if (this.hasAttribute('wrap')) {
			this.wrap = this.getAttribute('wrap');
		}
		if (this.hasAttribute('justify-content')) {
			this.justifyContent = this.getAttribute('justify-content');
			for (let i = this.children.length - 1; i >= 0; i--) {
				this.children[i].style.flexGrow = 0;
			}
		}
		if (this.hasAttribute('align-items')) {
			this.alignItems = this.getAttribute('align-items');
		}
		if (this.hasAttribute('align-content')) {
			this.alignContent = this.getAttribute('align-content');
		}
	}
	set reverse(reverse) {
		this.style.flexDirection = reverse === false ? 'column' : 'column-reverse';
	}
	set wrap(wrap) {
		this.style.flexWrap = wrap === 'reverse' ? 'wrap-reverse' : 'nowrap';
	}
	set justifyContent(position) {
		this.style.justifyContent = position;
	}
	set alignItems(position) {
		this.style.alignItems = position;
	}
	set alignContent(position) {
		this.style.alignContent = position;
	}
});
// box
window.customElements.define('box-x', class extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({
			mode: 'open'
		});
		shadowRoot.innerHTML = `
<style>
	:host {
		/*flex-grow: 0;
		flex-shrink: 1;
		flex-basis: auto;
		flex: 0 1 auto;
		TODO: do not force 12
		*/

		flex: 1 0 calc(100% / 12 * ` + this.size + `);
		align-self: ` + this.alignSelf + `;
	}
	@media screen and (max-width: 768px) {
		:host {
			min-width: 100%;
			width: 100%;
			flex: 1 0 100%;
			display: block;
		}
	}
</style>
<slot></slot>
    `;
	}
	get size() {
		if (this.hasAttribute('size') && this.getAttribute('size') > 0) {
			return this.getAttribute('size');
		}
		return 1;
	}
	set size(size) {
		this.size = size;
		this.style.alignSelf = 'calc(100% / ' + size + ')';
	}
	get alignSelf() {
		return this.hasAttribute('align-self')
			? this.getAttribute('align-self')
			: 'auto';
	}
	set alignSelf(position) {
		this.style.alignSelf = position;
	}
});
