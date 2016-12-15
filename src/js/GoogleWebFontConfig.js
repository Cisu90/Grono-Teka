WebFontConfig = {
    google: { families: [ 'Berkshire+Swash::latin,latin-ext', 'Romanesco::latin,latin-ext', 'Patrick+Hand+SC::latin,latin-ext', 'Quintessential::latin,latin-ext', 'Parisienne::latin,latin-ext', 'Marck+Script::latin,latin-ext,cyrillic', 'Roboto:400,300,700:greek,greek-ext,latin,cyrillic-ext,latin-ext,cyrillic' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 