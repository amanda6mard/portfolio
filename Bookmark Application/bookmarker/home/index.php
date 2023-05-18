<?php
    $isLoggedIn = false;
    $top10Links = [];
    $error = "";
    
    session_start();
    if (isset($_SESSION["Bookmarker"])){
        $isLoggedIn = $_SESSION["Bookmarker"]["isLoggedIn"];
        $username = $_SESSION["Bookmarker"]["username"];
        $userID = $_SESSION["Bookmarker"]["userID"];
    }

    if($isLoggedIn){
        header('Location: ../bookmarks');
    }

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

    //get top 10 Bookmarks
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
    </head>
    <body>
        <header class="home-header">
            <img src="../shared/logo.png">
        </header>
        <section id="login-section">
            <div id="login-text">
                <img src="../shared/logo-icon.png"> 
                <h2>Start saving your bookmarks!</h2>
                <h3>Login or create an account</h3>
                <a href="../login" class="button orange-button">Log In</a>
                <a href="../create-account" class="button create-account-button">Create an account</a>
            </div>
        </section>
        
        <section id="welcome-section">
            <div id="welcome-text">
                <h1>Welcome to P1Bookmarker!</h1>
                <h2>Store links to your favourite websites for easy access.</h2>
                <h3><br>Or browse the TOP 10 links others are saving:</h3>
                <div id="top-ten-home">
                    <?php
                        foreach($top10Links as $link => $url) {
                            $num = $link+1;
                            $ref = $url[0]."://".$url[1];
                            echo "<a href=\"$ref\" target=\"_blank\">$num. $url[1]</a>";
                        }
                                        ?>
                

                </div>
            </div>
         </section>
        
    </body>
</html>
