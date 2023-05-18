<?php
    $isLoggedIn = false;
    $links = [];
    $error = "";
    $success = "";
    $top10Links = [];
    $addError = "";
    $editError = "";
    
    session_start();
    if (isset($_SESSION["Bookmarker"])){
        $isLoggedIn = $_SESSION["Bookmarker"]["isLoggedIn"];
        $username = $_SESSION["Bookmarker"]["username"];
        $userID = $_SESSION["Bookmarker"]["userID"];

        $dbName = "";
        $dbUsername = "";
        $dbHost = "localhost";
        $dbPassword = "";

        //Create connection
        $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        //First modify database if post
        if($_POST){
            if(isset($_POST["nameAdd"])){
                $url = mysqli_real_escape_string($conn, $_POST["urlAdd"]);
                $name = mysqli_real_escape_string($conn, $_POST["nameAdd"]);
                $validate = $_POST["validate"];
                
                if(true || valid($url) || $validate=="false"){
                    $host = parse_url($url, PHP_URL_HOST);
                    $path = parse_url($url, PHP_URL_PATH);
                    if ($name=="") { $name = $host.$path; }
                    
                    $sql = "SELECT URL FROM Bookmarks WHERE Host = \"$host\" AND Path = \"$path\" AND UserID = $userID";
                    $result = mysqli_query($conn, $sql);
                                        
                    if(mysqli_num_rows($result) == 0){

                        $sql = "INSERT INTO Bookmarks (URL, Host, Path, Name, UserID) values (\"$url\", \"$host\", \"$path\", \"$name\", $userID)";
                        $result = mysqli_query($conn, $sql);

                        if(!$result){
                            $error = "Error. Could not add bookmark.";
                        } else {
                            $success = "Bookmark successfully added!";
                        }
                    } else {
                        $addError = "You already have that bookmark.";
                    }
                } else {
                    $addError = "Oops! It looks like that's not a valid website.";
                }
            }

            if(isset($_POST["nameEdit"])){
                $url = mysqli_real_escape_string($conn, $_POST["urlEdit"]);
                $name = mysqli_real_escape_string($conn, $_POST["nameEdit"]);
                $id = $_POST["editURLID"];
                $validate = $_POST["validate"];
                
                if(true || valid($url) || $validate=="false"){
                    $host = parse_url($url, PHP_URL_HOST);
                    $path = parse_url($url, PHP_URL_PATH);
                    if ($name=="") { $name = $host.$path; }

                    $sql = "UPDATE Bookmarks SET URL = \"$url\" , Host=\"$host\", Path=\"$url\", Name = \"$name\" WHERE URLID = $id";
                    $result = mysqli_query($conn, $sql);

                    if(!$result){
                        $error = "Error. Could not update bookmark.";
                    } else {
                         $success = "Bookmark successfully updated!";
                    } 
                } else {
                    $editError = "Oops! It looks like that's not a valid website.";
                }
            }

            if(isset($_POST["deleteURLID"])){
                $id = $_POST["deleteURLID"];

                $sql = "DELETE FROM Bookmarks WHERE URLID = $id";
                $result = mysqli_query($conn, $sql);

                if(!$result){
                    $error = "Error. Could not remove bookmark.";
                } else {
                     $success = "Bookmark successfully removed.";
                }
            }
        }

        //Then get Bookmarks
        $sql = "SELECT URLID, Name, URL FROM Bookmarks WHERE UserID=$userID";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
                $links[] = array("linkID" => $row["URLID"], "name" => $row["Name"], "url" => $row["URL"]);
            }
        }
        
        //Then get top 10 Bookmarks
        $sql = "SELECT COUNT(Host), URL from Bookmarks GROUP BY Host ORDER BY COUNT(Host) DESC";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // output data of each row
            $i=0;
            while($row = mysqli_fetch_assoc($result)) {
                $link = $row["URL"];
                $linkArray = [parse_url($link, PHP_URL_SCHEME), parse_url($link, PHP_URL_HOST)];
                $top10Links[] = $linkArray;
                $i++;
                if ($i==10){break;}
            }
        }
        mysqli_close($conn);
    }

    function valid($url) {
        $file_headers = @get_headers($url);

        if ($file_headers === false) {
            return false; 
        }
        foreach($file_headers as $header) { // parse all headers:
            // corrects $url when 301/302 redirect(s) lead(s) to 200:
            if(preg_match("/^Location: (http.+)$/",$header,$m)) $url=$m[1]; 
            // grabs the last $header $code, in case of redirect(s):
            if(preg_match("/^HTTP.+\s(\d\d\d)\s/",$header,$m)) $code=$m[1]; 
        } // End foreach...
        if($code==200) {
            return true; // $code 200 == all OK
        } else {
            return false; // All else has failed, so this must be a bad link
        }
    } 

?>

<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Assignment 2 | Amanda Simard</title>
        <link rel="stylesheet" href="../shared/styles.css">
        
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        
        <link rel="icon" href="../shared/logo-icon.png">
        
        <script src="script.js"></script>
        <?php
            if ($addError != "") {
                $name = $_POST["nameAdd"];
                $url = $_POST["urlAdd"];
                echo "<script> 
                window.onload = function(){
                    showError(\"$addError\", \"add\");
                    nameAdd.value = \"$name\";
                    urlAdd.value = \"$url\";
                    openAdd();
                }
                </script>";
            }
        
            if ($editError != "") {
                $name = $_POST["nameEdit"];
                $url = $_POST["urlEdit"];
                echo "<script> 
                window.onload = function(){
                    showError(\"$editError\", \"add\");
                    nameEdit.value = \"$name\";
                    urlEdit.value = \"$url\";
                    openEdit();
                }
                </script>";
            }
        
            if ($error != "") {
                echo "<script> 
                window.onload = function(){
                dbError = document.getElementById(\"db-error\");
                dbErrorClose = document.getElementById(\"db-error-close\");
                dbErrorClose.addEventListener(\"click\", function(){ dbError.style.display = \"none\";}, false);
                    dbError.style.display = \"block\";
                }
                </script>";
            }

            if ($success != "") {
                echo "<script> 
                window.onload = function(){
                    dbSuccess = document.getElementById(\"db-success\");
                    dbSuccessClose = document.getElementById(\"db-success-close\");
                    dbSuccessClose.addEventListener(\"click\", function(){ dbSuccess.style.display = \"none\";}, false);
                    dbSuccess.style.display = \"block\";
                }
                </script>";
            }
        ?>
        
    </head>
    <body>
        <header>
            <img src="../shared/logo.png">
            
            <?php
                if($isLoggedIn){
                    echo '<a href="../logout/"><i class="fas fa-sign-out-alt"></i> Logout</a>';
                } else {
                    echo '<a href="../login/"> Log In</a>';
                }
            ?>
        </header>
        
        <section id="main">
            <div id="menu">
            <div id="menu-collapse">menu<br><i class="fas fa-bars"></i></div>
            <div id="folders">
                <?php
                    if($isLoggedIn){
                        echo "<p>Welcome back $username! </p>";
                    }
               ?>
                <div id="folder-selection">
                    <button id="your-bks" value="user" class="folder your-bks-folder active-folder"><i class="fas fa-bookmark"></i> Your bookmarks</button>
                    <button id="top-ten-bks" name="category" value="top" class="folder top-ten">Browse TOP 10 bookmarks</button>
                </div>
            </div>
            </div>
            
            
                <?php
                    echo "<div id=\"db-error\">$error <button id=\"db-error-close\"><i class=\"fas fa-times\"></i></button></div>";
                    echo "<div id=\"db-success\">$success <button id=\"db-success-close\"><i class=\"fas fa-times\"></i></button></div>";
            
                    if($isLoggedIn){
                       echo '<div id="bookmarks">';
                        include("addPop.php");
                        include("editPop.php");
                        include("deletePop.php");
                        echo '<div class="scroll-icon" id="scroll-icon-up"><i class="fas fa-chevron-up"></i></div>';
                        echo '<div class="scroll-icon" id="scroll-icon"><i class="fas fa-chevron-down"></i></div>';
                        
                        echo '<ul id="bookmarks-ul">';
                        
                        foreach($links as $link => $value) {
                            $url = $value["url"];
                            $name = $value["name"];
                            $id = $value["linkID"];
                        
echo "<li>
    <a href=\"$url\" target=\"_blank\">$name</a>
    <div class=\"bookmark-buttons\">
    <form action=\"$url\" target=\"_blank\">
    <button class=\"open\"><i class=\"fas fa-external-link-alt\"></i></button></form>
    <button class=\"edit\" name=\"edit\" value=\"$id $url $name\"><i class=\"fas fa-pencil-alt\"></i></button>
    <button class=\"delete\" name=\"delete\" value=\"$id $url $name\"><i class=\"fas fa-trash-alt\"></i></button></div>
</li>";                     
                        }   
                        
                        if (sizeof($links)<1) {
                            echo "<p class='no-bookmarks'>You don't have any bookmarks yet!<br><br> Start adding some with the \"add a bookmark\" button below.<p>";
                        }
                        echo '<div class="scroll-icon" id="scroll-icon"><i class="fas fa-chevron-down"></i></div>';
                        echo '</ul>';
                        
                        echo '<button id="add"><i class="fas fa-plus"></i> add a bookmark</button></div>';
                        echo  '<div id="top-ten-bkmrks">';
                            
                        foreach($top10Links as $link => $url) {
                            $num = $link+1;
                            $ref = $url[0]."://".$url[1];
                            echo "<a href=\"$ref\" target=\"_blank\">$num. $url[1]</a>";
                        }

                        echo '</div>';
                    } else {
                        echo 
                        '<div id="not-logged-in">
                            <h2>Oops, it looks like you aren\'t logged in!</h2>

                            <p><a href="../login/">Log In</a> now to view your bookmarks.</p>
                        </div>';
                    }
                ?>
                
        </section>
    </body>
</html>
