/* global chrome */
(function () {
	'use strict';

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'styles.css', false);
	xhr.send();
	chrome.devtools.panels.applyStyleSheet(xhr.responseText);

	// var pres;
	// pres = document.querySelectorAll('.CodeMirror-code pre');

	// [].forEach.call( pres, function( pre ){
	// 	var html, regex, replace;
	// 	html = pre.innerHTML;
	// 	regex = /(\&amp;\&amp;|\&amp;|\|\||\||===|==|=|-=|\+=|\+\+|\+|--|!==|!=|!|<<|>>|<=|>=|<|>)/g;
	// 	replace = '<span class="cm-js-operator">$&</span>';

	// 	pre.innerHTML = html.replace( regex, replace );
	// });
}());