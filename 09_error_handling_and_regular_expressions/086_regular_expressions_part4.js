let re;
//literal characters
re = /hello/;
re = /hello/i;
//metacharacter symbols
re = /^h/i; // must start with h
re = /d$/i; //must ends with d
re = /^hello$/; //must start with hello and end eith hello
re = /^h.llo$/; //. matches any one charecter
re = /h*llo/; //matches a charcter 0 or more times
re = /gra?ay/i; //optional character e and a
re = /gra?a\?y/i; //escape character e and a
//brackets[]-character sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/i; // must be an G or F
re = /[^ae]ray/i; // match anything except a or e
re = /[A-Z]ray/; // MATCH ANY UPPERCASE LETTER
re = /[a-z]ray/i; // match nay lower case letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; //match nay digit
re = /[0-9][0-9]ray/; //match nay digit
//braces{}-quantifiers
re = /hel{2}o/; //must occur exactlt {m} amount of times
re = /he{2,4}o/; //occur between 2 and 4
re = /he{2,}o/; //must occur atleast {m} times
//paranthesis()-grouping
re = /([0-9]x){3}/;
//shorthand character classes
re = /\w/; //word character-alphaneumeric or _
re = /\w+/; //+=one or more word characters
re = /\W/; //non-word character
re = /\d/; //match any digit 0 or more times
re = /\D/; //match any non-digit
re = /\s/; //whitespace character
re = /\S/; //match non whitespace character
re = /hell\b/i; //word boundary 
//asertions
re = /x(?=y)/; //match x only if followed by y
re = /x(?!y)/; //match x only if not followed by y
const str = 'jdhebfjxy';
//const str = 'hello ,welcome to hell';
//const str = 'grey';
//const str = '10ray';
//string to match
//const str = 'Hello World';
//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}
reTest(re, str);