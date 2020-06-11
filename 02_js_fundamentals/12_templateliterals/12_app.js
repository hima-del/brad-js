const name = 'john';
const age = 30;
const job = 'web developer';
const city = 'auckland';

//without template strings

html = '<ul><li>Name:' + name + '</li><li>Age:' + age + '</li><li>Job:' + job + '</li><li>city:' + city + '</li></ul>'

//with template strings
html2 = `
<ul>
<li>name:${name}</li>
<li>age:${age}</li>
<li>job:${job}</li>
<li>city:${city}</li>
<li>${2+2}</li>
<li>${age>20?'over 20':'under 20'}</li>
</ul>
`;
document.body.innerHTML = html2;