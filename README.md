Degreelessness Mode
===================

*Frontend JavaScript tools for navigating development environments. Supports the WordPress Toolbar.*

If you knew the reference, [I'll buy you a pint](mailto:jack@kingbrick.co.uk?subject=I%20know%20what%20deg%20mode%20is!&body=Buy%20me%20a%20drink.).

*Degreelessness Mode* is a small tool that lets a developer navigate to absolute and relative URLs from the browser. Currently this is done using typed sequences from the keyboard using the `keypress` event listener. If the focus is on another component, the sequence won't register and the tool will not work.

Example
-------

From `http://example.com/child-page.html` in a browser, a developer could type `gotoroot` and be navigated to `http://example.com/`. Typing `gotoadmin` could navigate to `http://example.com/admin/index.php`. `gotodev` to `http://dev.example.com`. `goto2` to `http://secondexample.net`.


Configuration
-------------

*Degreelessness Mode* is too small for configuration files to be viable, and the code is easily adjusted even for users unsure of JavaScript.

By default, it uses the following mapping:

> `iddqd` -> `/wp-admin/index.php` or `/` if in `/wp-admin`
>
> `iddt` -> `/`

If the global variable `devhosts` is set, the following maps will also apply, modifying only the host fragment of the URL:

> `idclip` -> `devhosts.local`
>
> `idkfa` -> `devhosts.dev`
>
> `idclev` -> `devhosts.live`

The `devhosts` global variable can be set by adding the following JavaScript before loading the `degreelessness-mode.js` script:

    var devhosts = {
      'local':  'example.com.local',
      'dev':    'dev.example.uk',
      'live':   'example.uk'
    };

Contributions
-------------

If you have an understanding of how this could be done better, including loading and listening, please make a suggestion. Contact details are below.

Releases
--------

 * **0.1.0:** Initial release.

Contact
-------

This project is maintained by Jack Gutteridge. My email is jack@kingbrick.co.uk.
If you would prefer, other contact details can be found on my website http://jng.me.uk/.

Copyright
---------

Copyright &copy; 2015 J. N. Gutteridge.

This software is released under the terms of the [Apache License 2.0](LICENSE).