const body = document.getElementsByTagName('body')[0];

        function fadeOut() {
            body.classList.add('bodyfadeout');
        }

        function google2() {
            location.href = 'nyuryoku.html'
        }
        var bt5 = document.getElementById('button5');
        var a = document.getElementById('a');
        bt5.addEventListener('click', function() {
            a.classList.add('anime5');
            setTimeout(fadeOut, 1500);
            setTimeout(google2, 2500);
        });
