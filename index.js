

function makeFooter() {
     	
     var str2 = '  / \_/ \   /\        /\   / \_/ \   /\        /\   / \_/ \   /\        /\   / \_/ \   /\        /\   / \_/ \   /\        /\   / \_/ \ \n';
     var str3 = '  >-(_)-<---`\'---,.---`\'--->-(_)-<---`\'---,.---`\'--->-(_)-<---`\'---,.---`\'--->-(_)-<---`\'---,.---`\'--->-(_)-<---`\'---,.---`\'--->-(_)-<\n';
     var str4 = '  \_/ \_/        \/        \_/ \_/        \/        \_/ \_/        \/        \_/ \_/        \/        \_/ \_/        \/        \_/ \_/\n';
     var str5 = '    `-\'                      `-\'                      `-\'                      `-\'                      `-\'                      `-\'  \n';

     var p1 = document.createElement('p');
     p1.innerHTML = makeString1('_,-._', 5, 17, 3) + '<br>' + 
		    makeString1('/ \\_/ \\' + '&nbsp;&nbsp;&nbsp;' + '/\\' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
             + '/\\' + '&nbsp;&nbsp;&nbsp;', 5, 0, 2) + '<br>' + 
	      makeString1('>-(_)-<---`\'--,.-`\'---', 5, 0, 2) + '<br>' +
	      makeString1('\\_/ \\_/' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '\\/' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp', 5, 0, 2) + '<br>' +
	      makeString1('`-\'', 5, 19, 4);
     document.body.append(p1);

/*
     var p2 = document.createElement('p');
     p2.innerHTML = makeString1('/ \\_/ \\' + '&nbsp;&nbsp;&nbsp;' + '/\\' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
	     + '/\'' + '&nbsp;&nbsp;&nbsp;', 4, 0, 2);
     document.body.append(p2);

     var p3 = document.createElement('p');
     p3.innerHTML = makeString1('>-(_)-<---`\'---,.---`\'', 4, 0, 2);
     document.body.append(p3);
     /*
     var p2 = document.createElement('p');
     document.body.append(p1);
     document.body.append(p2);
*/	
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

makeFooter();
