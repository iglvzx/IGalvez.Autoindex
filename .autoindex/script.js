// set page title ----------------------------------------------------------------------------------
document.title = document.URL;

$('table').addClass('table'); // add Bootstrap CSS to table

$('td').removeAttr('align'); // remove align="right" from cells

$('td').each(function() { // change text for no size value
	if(this.innerHTML == '  - ') {
		this.innerHTML = '';
	}
});

// move header row to thead ------------------------------------------------------------------------
var header = $('table tbody tr').first();

var thead = $('<thead/>');
thead.append(header);
$('table').prepend(thead);

// CSS and icons for header links ------------------------------------------------------------------
var hName = $('a', header).eq(0);
var hModified = $('a', header).eq(1);
var hSize = $('a', header).eq(2);

if(/\/$/.test(document.URL)) {
	addIcon(hName, 'chevron-down', 'right');
} else {
	if(/\?C=N;O=D$/.test(document.URL)){
		addIcon(hName, 'chevron-up', 'right');
	} else if(/\?C=N;O=A$/.test(document.URL)){
		addIcon(hName, 'chevron-down', 'right');
	}

	if(/\?C=M;O=D$/.test(document.URL)){
		addIcon(hModified, 'chevron-up', 'right');
	} else if(/\?C=M;O=A$/.test(document.URL)){
		addIcon(hModified, 'chevron-down', 'right');
	}

	if(/\?C=S;O=D$/.test(document.URL)){
		addIcon(hSize, 'chevron-up', 'right');
	} else if(/\?C=S;O=A$/.test(document.URL)){
		addIcon(hSize, 'chevron-down', 'right');
	}
}

function addIcon(object, icon, className) {
	var HTML = '<i class="' + className + ' fa fa-fw fa-' + icon + '"></i>';
	
	if(className == 'right') {
		object.append(HTML);
	} else if(className == 'left') {
		object.prepend(HTML);
	}
}

// CSS and icons to rows and links -----------------------------------------------------------------
$('table tbody tr').each(function(i, obj) {
	
	var link = $('a', this).first();
	link.parent().addClass('td-link');
	var file = link.text();

	if(file == 'Parent Directory' && i == 0){ // parent directory
		link.attr('data-type', 'parent');
		link.attr('id', 'parent');
		$(this).addClass('warning');
		link.text('../');
		addIcon(link, 'folder', 'left');
		
	} else {
	
        if (file.substring(file.length - 1) == '/') {
			link.attr('data-type', 'folder');
			$(this).addClass('active');
			addIcon(link, 'folder', 'left');
		} else {
        
            var fparts = file.split('.');
            
            if(fparts.length > 1) {
            
                var ext = fparts[fparts.length - 1];
                
                if($.inArray(ext, filesText) > -1) { // text files
                    addIcon(link, iconText, 'left');
                    showSource = true;
                } else if($.inArray(ext, filesCode) > -1) { // code
                    addIcon(link, iconCode, 'left');
                    showSource = true;
                } else if($.inArray(ext, filesImage) > -1) { // images
                    addIcon(link, iconImage, 'left');
                } else if($.inArray(ext, filesFont) > -1) { // fonts
                    addIcon(link, iconFont, 'left');
                } else { // unknown file extension
                    addIcon(link, 'file-o', 'left');
                }
            
            } else { // files with no extension
                addIcon(link, 'file-o', 'left');
            }
            
			link.attr('target', '_blank');
			link.attr('data-type', 'file');          
		}
    
	}

});

$('#refresh').click(function(e) {
	e.preventDefault();
	location.reload();
});

var parent = $('#parent');

if(parent.length) {
	$('#nav-buttons').append('<li><a href="' + parent.attr('href') + '"><i class="fa fa-arrow-up"></i>Up</a></li>');
}

$('#wrapper').show();