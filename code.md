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
