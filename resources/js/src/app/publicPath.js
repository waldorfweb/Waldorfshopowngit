let windowLocationHost = window.location.host;

if(new RegExp('^(?:(?:^|\\.)(?:2(?:5[0-5]|[0-4]\\d)|1?\\d?\\d)){4}:[0-9]{4}$', 'gm').test(windowLocationHost)) {
    __webpack_public_path__ = '/resources/js/dist/';
}else if(windowLocationHost.indexOf('localhost') > -1) {
    __webpack_public_path__ = '/resources/js/dist/';
}else {
    __webpack_public_path__ = App.publicPath;
}
