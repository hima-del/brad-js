const user = { email: 'abc@gmail.com' };
try {
    //produce reference error
    // myFunction();
    //produce a typeError
    //null.myFunction();
    //produce syntax error
    //eval('hello world');
    //URI error
    // decodeURIComponent('%');
    if (!user.name) {
        // throw 'user has no name';
        throw new SyntaxError('user has no name');
    }
} catch (e) {
    console.log(`user error: ${e.message}`);
    //console.log(`${e.name}: ITS NULL`);
    //console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
} finally {
    console.log('finally runs regrdless of result');
}
console.log('program continues.....');