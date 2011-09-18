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

    dd.lines = function lines (older, newer) {
        var olderReversed
            ,newerReversed
            ,diffRangeStart
            ,diffRangeEnd
            ,differentLines;

        olderReversed = older.slice(0).reverse();
        newerReversed = newer.slice(0).reverse();

        diffRangeStart = findFirstDifferentLine(older, newer);
        diffRangeEnd = newer.length - findFirstDifferentLine(olderReversed, newerReversed);

        if (diffRangeStart === -1) {
           differentLines = []; 
        } else {
            differentLines = newer.slice(diffRangeStart, diffRangeEnd);
        }
        
        // There was no difference across the files.
        // Fudge the ranges to be indicative of this.
        if (differentLines.length === 0) {
            diffRangeStart = diffRangeEnd = -1;
        }
        
        return {
            'lines': differentLines
            ,'rangeStart': diffRangeStart
            ,'rangeEnd': diffRangeEnd
        };
    };

})(this);
