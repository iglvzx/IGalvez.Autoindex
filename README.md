IGalvez.Autoindex
=================

Apache's mod_autoindex feature is very useful when you want to set up a simple file sharing server, but its design is trapped in 1997. By default it serves HTML 3.2.

So, I decided to give it an overdue makeover by taking advantage of modern components like Bootstrap, jQuery, Google Fonts, and Font Awesome!

## Prerequisite

1. These Apache modules enabled:
    * mod_dir
    * mod_mime
    * mod_deflate
    * mod_filter
    * mod_autoindex

2. Set `AllowOverride All` for your virtual host's document root. For example, here's an except from an example virtual host configuration:

<pre>DocumentRoot /home/iglvzx/www
&lt;Directory /home/iglvzx/www&gt;
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
&lt;/Directory&gt;</pre>

## Features

### Folder Path Breadcrumbs

![breadcrumbs screenshot](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/breadcrumbs.png)

### Error Pages

#### HTTP 403

![forbidden](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/http403.png)

#### HTTP 404

![not found](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/http404.png)

#### HTTP 500

![internal error](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/http500.png)

## Screenshots

### Before

![before screenshot](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/before.png)

![before screenshot 2](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/before2.png)

### After

![after screenshot](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/home.png)

![after screenshot 2](https://raw.githubusercontent.com/iglvzx/IGalvez.Autoindex/master/.autoindex/docs/images/after2.png)
