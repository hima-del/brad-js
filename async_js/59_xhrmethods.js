document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //cretae xhr object
    const xhr = new XMLHttpRequest();
    //OPEN
    xhr.open('GET', '59_data.txt', true);
    // console.log('READYSTATE', xhr.readyState);
    //optional -used for spinners / loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }


    xhr.onload = function() {
            console.log('READYSTATE', xhr.readyState);
            if (this.status === 200) {
                // console.log(this.responseText);
                document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
            }
        }
        // xhr.onreadystatechange = function() {
        //     console.log('READYSTATE', xhr.readyState);
        //     if (this.status === 200 && this.readyState === 4) {
        //         console.log(this.responseText);
        //     }
        // }
    xhr.onerror = function() {
        console.log('Request erroe...');
    }
    xhr.send();


    //redy state values
    //0:request not initialized
    //1:serever connection established
    //2:request recieved
    //3:processing request
    //4:request finished
    //http statuses
    //200: ok
    //403: forbidden
    //404: not found
}