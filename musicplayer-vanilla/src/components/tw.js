let styleSheet;
const twStyleSheet = document.styleSheets[0];
if (twStyleSheet) {
	styleSheet = new CSSStyleSheet();
	for (let rule of twStyleSheet.cssRules) {
		styleSheet.insertRule(rule.cssText);
	}
}
export const hackyStyleSheet = [styleSheet];
