var parts = document.URL.split('/');
parts.pop(); // remove last element


var breadcrumbs;

if(parts.length > 3) {

	breadcrumbs = '<a href="/"><i class="fa fa-fw fa-home"></i>' /*+ parts[0] + '//' + parts[2].replace(/(\W)/g, '$1<wbr/>') */+ '<span>/</span></a>';

	var current = '';
	for(var i = 3; i < parts.length; i++) {
		
		current += '/' + parts[i];
		breadcrumbs += '<a ';
		
		if(i == parts.length - 1) {
			breadcrumbs += 'class="active" ';
		}
		
		breadcrumbs += 'href="' + current + '/">' + parts[i].replace(/(\W)/g, '$1<wbr/>') + '<span>/</span></a></i>';

	}
} else {

	breadcrumbs = '<a class="active" href="/"><i class="fa fa-fw fa-home"></i>' /*+ parts[0] + '//' + parts[2].replace(/(\W)/g, '$1<wbr/>')*/ + '<span>/</span></a>';

}

$('#url').html(breadcrumbs);