function generateHeader() {
    let header = `<a href="../home">
        <div id="site-title">
            <img src="../shared/media/logo.png" id="header-logo">
            <div>
                Pet Rescue
            </div>
        </div>
    </a>
    <nav>
        <ul>
            <li><a href="../home">Home</a></li>
            <li><a href="../about-us">About Us</a></li>
            <li><a href="../our-work">Our Work</a></li>
            <li><a href="../get-involved">Get Involved</a></li>
            <li class="no-side-pd"><a href="../adopt" class="button button-sml accent-button link-button">Adopt</a>
            </li>
            <li class="no-side-pd"><a href="../donate" class="button button-sml link-button">Donate</a></li>
        </ul>
        </ul>
        <div id="search-bar"><input>
            <div id="search-button" class="button button-sml no-side-mg">
                <div class="centered-in-container"><i class="fas fa-search"></i></div>
            </div>
    </nav>`;

    let headerElement = document.getElementsByTagName("header")[0];
    if ( typeof headerElement !== 'undefined'){
        headerElement.innerHTML = header;
        if(document.getElementById("homepage-header") !== null){
            document.getElementById("header-logo").src = "../shared/media/logo-ondark.png"
        }
    }
}

function bogusSearch() {
    alert("This search bar is just for looking! It doesn't work...");
}

function headerIni() {
    generateHeader();
    let searchButton = document.getElementById("search-button");
    if(searchButton !== null)
    {
        searchButton.addEventListener("click", bogusSearch);
    }
}

window.addEventListener("load",headerIni);