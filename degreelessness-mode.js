
'use strict';
/*jslint browser: true */

document.addEventListener("DOMContentLoaded", function () {

    var input = '',
        devhosts = window.devhosts;

//        devmaps = {
//
//        'iddqd': 'admin',
//        'idclip': 'local',
//        'idkfa': 'dev',
//        'idclev': 'live'
//    };

    document.body.addEventListener('keypress', function (ev) {

        input += String.fromCharCode(ev.keyCode);

        if (input.substr(-5, 5) === 'iddqd') {

            if (document.location.pathname.substr(0, 9) !== '/wp-admin') {

                window.location.href = '/wp-admin/index.php';

            } else {

                window.location.href = '/';
            }

        } else if (input.substr(-4, 4) === 'iddt') {

            window.location.href = '/';

        } else if (devhosts !== 'undefined') {

            if (input.substr(-6, 6) === 'idclip') {

                window.location.href = document.location.protocol + '//' + devhosts.local + document.location.pathname + document.location.search;

            } else if (input.substr(-5, 5) === 'idkfa') {

                window.location.href = document.location.protocol + '//' + devhosts.dev + document.location.pathname + document.location.search;

            } else if (input.substr(-6, 6) === 'idclev') {

                window.location.href = document.location.protocol + '//' + devhosts.live + document.location.pathname + document.location.search;
            }
        }
    });
});