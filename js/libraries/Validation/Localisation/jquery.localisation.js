/* KOD 06/01/2014 - Loading a language file into jquery validation dynamically jquery.validate.min.js
    dependent on the language setting of the visiting user's browser.
    This is not always 100% infailable since javascript cannot directly access the language settings on browsers (Safari)
    navigator.language - Mozilla, navigator.userLanguage - IE 
  */

(function($) { // Hide scope, no $ conflict


$.localise = function(packages, settings, loadBase, path, timeout, async, complete) {
	if (typeof settings != 'object' && typeof settings != 'string') {
		complete = async;
		async = timeout;
		timeout = path;
		path = loadBase;
		loadBase = settings;
		settings = '';
	}
	if (typeof loadBase != 'boolean') {
		complete = async;
		async = timeout;
		timeout = path;
		path = loadBase;
		loadBase = false;
	}
	if (typeof path != 'string' && !$.isArray(path)) {
		complete = async;
		async = timeout;
		timeout = path;
		path = '';
	}
	if (typeof timeout != 'number') {
		complete = async;
		async = timeout;
		timeout = 500;
	}
	if (typeof async != 'boolean') {
		complete = async;
		async = false;
	}
	settings = (typeof settings != 'string' ?
		$.extend({loadBase: false, path: '', timeout: 500, async: false}, settings || {}) :
		{language: settings, loadBase: loadBase, path: path,
		timeout: timeout, async: async, complete: complete});
	var paths = (!settings.path ? ['', ''] :
		($.isArray(settings.path) ? settings.path : [settings.path, settings.path]));
	var opts = {async: settings.async, dataType: 'script', timeout: settings.timeout};
	var localisePkg = function(pkg, lang) {
		var files = [];
		if (settings.loadBase) {
			files.push(paths[0] + pkg + '.js');
        }

        if (lang.length >= 2) {
            files.push(paths[1] + pkg + '_' + lang.substring(0, 2).replace('-','_') + '.js');
        }
        if (lang.length >= 5) {
            files.push(paths[1] + pkg + '_' + lang.substring(0, 5).replace('-', '_') + '.js');
        }
//		if (lang.length >= 2) {
//			files.push(paths[1] + pkg + '-' + lang.substring(0, 2) + '.js');
//		}
//		if (lang.length >= 5) {
//			files.push(paths[1] + pkg + '-' + lang.substring(0, 5) + '.js');
//		}
		var loadFile = function() {
			$.ajax($.extend(opts, {url: files.shift(), complete: function() {
				if (files.length == 0) {
					if ($.isFunction(settings.complete)) {
						settings.complete.apply(window, [pkg]);
					}
				}
				else {
					loadFile();
				}
			}}));
		};
		loadFile();
	};
	var lang = normaliseLang(settings.language || $.localise.defaultLanguage);
	packages = ($.isArray(packages) ? packages : [packages]);
	for (var i = 0; i < packages.length; i++) {
		localisePkg(packages[i], lang);
	}
};

// Localise it!
$.localize = $.localise;

/* Retrieve the default language set for the browser. */
$.localise.defaultLanguage = normaliseLang(navigator.language /* Mozilla */ ||
	navigator.userLanguage /* IE */);

/* Ensure language code is in the format aa-AA. */
function normaliseLang(lang) {
	lang = lang.replace(/_/, '-').toLowerCase();
	if (lang.length > 3) {
		lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
	}
	return lang;
}

})(jQuery);
