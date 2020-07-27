* I was stuck with a bug in drop down menu and I solved it. The code is given below

```
<div class="project-listing-head">
        <h1>PROJECT LISTING</h1>
        <nav>
            <a href="#" id="home">Home</a>
            <div class="styled-nav">
                <img src="img/Filter Icon.png" id="filter-image">
                <!-- <a href="#">Location</a> -->
                <div class="dropdown">
                    <button onclick="myFunction1()" class="dropbtn">Location <img src="img/downselector.png"id="down-selector"></button>
                    <div id="myDropdown1" class="dropdown-content">
                        <a href="#">Wayanad <img src="img/circle.png"></a>
                        <a href="#">Idukki <img src="img/circle.png"></a>
                        <a href="#">Ernakulam <img src="img/circle.png"></a>
                    </div>
                </div>
                <!-- <a href="#">Project Model</a> -->
                <div class="dropdown">
                    <button onclick="myFunction2()" class="dropbtn">Project Model <img src="img/downselector.png"id="down-selector"></button>
                    <div id="myDropdown2" class="dropdown-content">
                        <a href="#">Community Villas <img src="img/circle.png"></a>
                        <a href="#">Homestead <img src="img/circle.png"></a>
                        <a href="#">Land <img src="img/circle.png"></a>
                        <a href="#">Long Term Lease <img src="img/circle.png"></a>
                        <a href="#">Rental <img src="img/circle.png"></a>
                        <a href="#">Short Term Lease <img src="img/circle.png"></a>
                        <a href="#">Individual Villas <img src="img/circle.png"></a>
                    </div>
                </div>
                <!-- <a href="#">Status</a> -->
                <div class="dropdown">
                    <button onclick="myFunction3()" class="dropbtn">Status <img src="img/downselector.png"id="down-selector"></button>
                    <div id="myDropdown3" class="dropdown-content">
                        <a href="#">Completed <img src="img/circle.png"></a>
                        <a href="#">Legal Check <img src="img/circle.png"></a>
                        <a href="#">Customer Acquisition <img src="img/circle.png"></a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  ```
    
  ```
    .project-listing-head {
    color: rgb(45, 106, 79);
    margin-top: 80px;
}

#home {
    color: rgb(45, 106, 79);
    font-weight: bold;
    font-size: 20px;
}

.dropbtn {
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

:focus {
    outline: none;
}

.dropdown {
    position: relative;
    display: inline-block;
    white-space: nowrap;
}

.dropdown img {
    float: right;
    margin-left: 10px;
}

.dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content a {
    /* color: black; */
    padding: 12px 16px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
}

button {
    color: rgb(45, 106, 79);
    background-color: white;
}

#down-selector {
    margin-top: 8px;
}

.show {
    display: flex;
    flex-direction: column;
}

nav {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
}

nav a {
    text-decoration: none;
    padding: 30px;
}

.styled-nav a {
    color: rgb(45, 106, 79);
    font-weight: 700;
}

.styled-nav {
    border: 1px solid gray;
    padding: 5px;
    border-radius: 15px;
    white-space: nowrap;
    display: flex;
}

#filter-image {
    height: 25px;
    margin-top: 15px;
}

h1 {
    text-align: center;
    font-weight: bolder;
}
```

```
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("myDropdown3").classList.remove("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("myDropdown3").classList.remove("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("myDropdown1").classList.remove("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
```

* https://codepen.io/lalwanivikas/details/eZxjqo =>Link to js calculator project demo in codepen
