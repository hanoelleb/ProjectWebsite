function addDetail(project) {
    project.addEventListener('mouseover', () => { 
        var desc = project.getElementsByClassName('desc')[0];
	desc.style.display='block';
    });

    project.addEventListener('mouseout', () => { 
        var desc = project.getElementsByClassName('desc')[0];
        desc.style.display='none';
    });
}

function makeFooter(flowernum) {
     var holder = document.createElement('div');
     holder.style.display='flex';
     holder.style.width = '150vw';
     holder.style.overflow='hidden';

     var p1 = document.createElement('p');
     p1.innerHTML = makeString1('_,-._', flowernum, 17, 3) + '<br>' + 
		    makeString1('/ \\_/ \\' + '&nbsp;&nbsp;&nbsp;' + '/\\' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
             + '/\\' + '&nbsp;&nbsp;&nbsp;', flowernum, 0, 2) + '<br>' + 
	      makeString1('>-(_)-<---`\'--,.-`\'---', flowernum, 0, 2) + '<br>' +
	      makeString1('\\_/ \\_/' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '\\/' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp', flowernum, 0, 2) + '<br>' +
	      makeString1('`-\'', flowernum, 19, 4);

     holder.appendChild(p1);
     document.body.append(holder);
}

function makeString1(base, num, spaces, starting) {
    var res = '';

    var singleSpace = '&nbsp;'
    var startString = '';
    for (var k = 0; k < starting; k++)
        startString += singleSpace;

    var spaceStr = '';
    for (var i = 0; i < spaces; i++)
	spaceStr += singleSpace;

    res += startString;
    for (var j = 0; j < num-1; j++) {
        res += base + spaceStr;    
    }
    res += base;
    res += '\n';

    return res;
}

addDetail(document.getElementById('mainsite'));
addDetail(document.getElementById('hometown'));
addDetail(document.getElementById('weather'));
addDetail(document.getElementById('waldo'));
addDetail(document.getElementById('soapbox'));
addDetail(document.getElementById('battleship'));
addDetail(document.getElementById('library'));
addDetail(document.getElementById('messenger'));
addDetail(document.getElementById('todo'));
addDetail(document.getElementById('tealinquent'));
addDetail(document.getElementById('sketch'));
addDetail(document.getElementById('calc'));
addDetail(document.getElementById('tictactoe'));
addDetail(document.getElementById('three'));
addDetail(document.getElementById('pass'));
addDetail(document.getElementById('brick'));
addDetail(document.getElementById('idee'));
addDetail(document.getElementById('fuudie'));
addDetail(document.getElementById('blog'));
addDetail(document.getElementById('rubyblog'));
addDetail(document.getElementById('pomo'));
addDetail(document.getElementById('survey'));
addDetail(document.getElementById('tribute'));
addDetail(document.getElementById('odinbook'));
addDetail(document.getElementById('painte'));
addDetail(document.getElementById('life'));
addDetail(document.getElementById('sol'));
addDetail(document.getElementById('forme'));
addDetail(document.getElementById('cranny'));
addDetail(document.getElementById('nodelib'));



document.getElementById('filter_list').style.display = 'none';

$(document).ready(function() {
    $('#filter').hover(function() {
	$('#filter_list').css('display', 'flex');
    });

    $('#filter_list').mouseleave(function() { $(this).hide(); });
    $('#filter_list li').hover(function() {
        $(this).css({'color': 'black', 'background-color': 'palegreen'})
    }, function() {
        $(this).css({'color': 'palegreen', 'background-color': 'black'})
    });

    $('#filter_list li').click(function() {
        var tag = $(this).text();
	$('#project_list li').each( function() {
	    var hasTag = $(this).hasClass(tag);
            if (tag === 'All' || hasTag)
		$(this).show();
            else
		$(this).hide();
	})
    });
});

var flowers = 5;
var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
    flowers = 3;
}
else {
    // window width is greater than 570px
}

makeFooter(flowers);
