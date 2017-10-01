window.onload = () => {
    var keys = document.getElementById('keys');
	var clear = document.getElementById('clear');
    var screen = document.getElementById('screen');
    var reset = false;


    keys.addEventListener('click', e => {

        if (e.target.nodeName === 'SPAN') {
            
            if (e.target.className === 'operator') {
                reset = false;
            }

            if (reset) {
                screen.innerHTML = '';
                reset = false;
            }

            var v = e.target.innerHTML;

            if (v === '=') {
                try {
                    screen.innerHTML = eval(screen.innerHTML);
                } catch(e) {
                    screen.innerHTML = e.message;
                }
                reset = true;
            } else {
                screen.innerHTML += v;
            }
        }
    });

    clear.addEventListener('click', function() {
		screen.innerHTML = '';
	});

};