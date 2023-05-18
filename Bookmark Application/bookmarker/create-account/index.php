<?php    
    $dbName = "";
        $dbUsername = "";
        $dbHost = "localhost";
        $dbPassword = "";

    $chosenUsername = ""; 
    $chosenPassword = ""; 
    $confPassword = "";
    $error="";
    $accountCreated=false;

    $isLoggedIn = "";
    $username = "";
    $userID = "";

    session_start();
    if (isset($_SESSION["Bookmarker"])){
        $isLoggedIn = $_SESSION["Bookmarker"]["isLoggedIn"];
        $username = $_SESSION["Bookmarker"]["username"];
        $userID = $_SESSION["Bookmarker"]["userID"];
    }

    if($isLoggedIn){
        header('Location: ../bookmarks');
    }

    if ($_POST){
        $chosenUsername = $_POST["username"];
        $chosenPassword = $_POST["password"]; 
        $confPassword = $_POST["passwordConfirm"];
        
        //check for input errors
        if ($chosenUsername == ""){
            $error = $error."You must choose a username.<br>";
        } else {
            //connect to db and check if username is already taken
            // Create connection
            $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

            // Check connection
            if (!$conn) {
                die("Connection to database failed");
            }
            $safeUser = mysqli_real_escape_string($conn, $chosenUsername);
                        
            $sql = "SELECT Username FROM Users WHERE Username=\"$safeUser\"";
            $result = mysqli_query($conn, $sql);
            
            if (mysqli_num_rows($result) > 0) {
                $error = $error."That username has already been selected. Please chose a different one.<br>";
            }
            mysqli_close($conn);
        }

        if ($chosenPassword == ""){
            $error = $error."You must choose a password.<br>";
        }

        if ($chosenPassword != $confPassword){
            $error = $error."Passwords don't match.<br>";
        }
        
        if ($error==""){
            //if no error, add user
            //hash password
            $safePassword = password_hash($chosenPassword, PASSWORD_DEFAULT);
            //connect to database and add user
            // Create connection
                $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);
                
                // Check connection
                if (!$conn) {
                    die("Connection to database failed");
                }
                //safe username string
                $safeUser = mysqli_real_escape_string($conn, $chosenUsername);
                $sql = "INSERT INTO Users (Username, Password)
                            VALUES (\"$chosenUsername\", \"$safePassword\")";

                if (mysqli_query($conn, $sql)) {
                    $accountCreated=true;
                } else {
                    $error = $error."Database error. Failed to create account.";
                }
                mysqli_close($conn);
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
        
    </head>
    <body>
        <header>
            <img src="../shared/logo.png"> 
            <a href="../home/"><i class="fas fa-chevron-circle-left"></i> Back to homepage</a>
        </header>
        
        <div id="outer-form" class="outer-form">
            <?php
                if($accountCreated){
                    echo "<div class=\"account-created\">
                            <h2> Your account was successfully created!</h2>
                            <p><strong>Username:</strong> $chosenUsername <br>
                            <strong>Password:</strong> $chosenPassword</p>
                            <p><a href=\"../login\">Log in to your account</a> to start creating bookmarks!</p>
                            </div>";
                } else {
            
                    echo 
                    '<form id="create-account-form" method="post" class="login-box">
                        <div class="error" id="error"></div>';
                    if ($error!=""){
                        echo "<div class=\"error-server\">$error </div>";
                    }
                    echo '<label>Pick a username: </label><input type="text" name="username" id="username" class="text-input" autocomplete="username"';
                    if ($chosenUsername!=""){
                        echo "value=\"$chosenUsername\"";
                    }
                    echo '>
                    <label>Pick a password: </label><input type="password" name="password" id="password" class="text-input" autocomplete="new-password"';
                    if ($chosenPassword!=""){
                        echo "value=\"$chosenPassword\"";
                    }
                    echo '>
                    <label>Confirm password: </label><input type="password" name="passwordConfirm" id="password-confirm" class="text-input" disabled="disabled"';
                    if ($confPassword!=""){
                        echo "value=\"$confPassword\"";
                    }
                    echo '>
                    <input type=submit id="submit" value="Create your account!" class="button orange-button" disabled="disabled">
                    </form>';
                }
            ?>
        </div>
        <div class="blue-box">
            <p>Already have an account? <a href="../login/"> Log in now.</a></p>
        </div>
    </body>
</html>
