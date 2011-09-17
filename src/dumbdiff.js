;(function dumbDiff (global) {
    var dd;

    function findFirstDifferentLine (linesArr1, linesArr2) {
        var firstDifferentLine
            ,lenOfShorterArray
            ,len
            ,i;

        // This function returns `-1` by default.
        // That means that there is no difference.
        firstDifferentLine = -1;
        lenOfShorterArray = Math.min(linesArr1.length, linesArr2.length);
        len = lenOfShorterArray;

        for (i = 0; i < len; i++) {
            if (linesArr1[i] !== linesArr2[i]) {
                firstDifferentLine = i;
                break;
            }
        }

        // A different line was not found.  Make sure that the two
        // lists are not equal in length.
        if (firstDifferentLine === -1 
            && linesArr1.length !== linesArr2.length) {

            firstDifferentLine = lenOfShorterArray; 
        }

        return firstDifferentLine;
    }

    global.dumbDiff = global.dumbDiff || {};
    dd = global.dumbDiff;

    dd.lines = function lines (linesArr1, linesArr2) {
       console.log(findFirstDifferentLine(linesArr1, linesArr2));
    };

})(this);
