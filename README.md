dumbdiff.js
===

This is a deliberately "dumb" diffing algorithm that favors CPU optimization over memory efficiency.  It is most appropriate to use this algorithm if it is going to be called very frequently on two versions of a body of text, and memory use/disk space is less of a priority.

Roughly speaking, the algorithm works by finding _one_ range of different lines.  Anything between the start of the range and end of it are considered to be different.

It is distributed under an [MIT License](http://en.wikipedia.org/wiki/MIT_License).

API
===

dumbdiff.lines:
---

````javascript
/**
 * @param {Array} oldVersion
 * @param {Array} newVersion
 */
dumbdiff.lines( oldVersion, newVersion )
````
The important thing to note here is that both `oldVersion` and `newVersion` need to be Arrays of Strings.  The idea here is that each Array element represents a line of text.

This method always returns an Object.  It looks like this:

````javascript
{
    'lines': Array // Contains the lines of the diff.  
    ,'rangeStart': Number // 0-based start of the diff.  This is -1 if there were no different lines.
    ,'rangeEnd': Number // 0-based end of the diff.  This is -1 if there were no different lines.
}
````

If a line was deleted, then the diff contains everything from the start of the missing line to the end of `newVersion`.
