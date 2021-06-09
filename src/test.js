let Q = '';
if (document.selection) {
	Q = document.selection.createRange().text;
};
else if (window.getSelection) {
	Q = window.getSelection();
};
else if (document.getSelection) {
	Q = window.getSelection();
}




if (Q == '') {
	l = location.href;
	location.href = 'https://href.li/?url=' + encodeURIComponent(l);
}
else {
	window.open('https://href.li/?url=' + encodeURIComponent(Q) + '');
}