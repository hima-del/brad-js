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

//string to match
const str = 'Hello World';
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