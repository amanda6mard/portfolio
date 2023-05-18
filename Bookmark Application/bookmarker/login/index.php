<?php

    $isLoggedIn = false;

    $dbName = "";
        $dbUsername = "";
        $dbHost = "localhost";
        $dbPassword = "";
    
    $username = ""; 
    $password = "";
    $userID = "";
    $error = "";

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
        $username = $_POST["username"];
        $password = $_POST["password"];
        
        //check for input errors
        if ($username == ""){
            $error = $error."You must enter a username.<br>";
        }
        if ($password == ""){
            $error = $error."You must enter a password.<br>";
        }
        
        if ($error ==""){
            //if no error, connect to db and check if username/password exists
            // Create connection
            $conn = mysqli_connect($dbHost, $dbUsername, $dbPassword, $dbName);

            // Check connection
            if (!$conn) {
                die("Connection to database failed");
            }            
            $safeUser = mysqli_real_escape_string($conn, $username);
            
            $sql = "SELECT UserID, Username, Password FROM Users WHERE Username=\"$safeUser\"";
            $result = mysqli_query($conn, $sql);
            
            if (mysqli_num_rows($result) > 0) {
                while($row = mysqli_fetch_assoc($result)) {
                    if (password_verify($password, $row["Password"])){
                        $isLoggedIn=true;
                        $userID=$row["UserID"];
                    } else {
                        $error = $error.'Could not find an account with that username and password combination. Please try again or <a href="../create-account">create an account</a> if you don\'t have one.';
                    }
                }
            } else {
                $error = $error.'Could not find an account with that username and password combination. Please try again or <a href="../create-account">create an account</a> if you don\'t have one.';
            }
            mysqli_close($conn);
        }
        if ($isLoggedIn){
            session_start();
            $_SESSION["Bookmarker"] = array ("username" => $username, "userID" => $userID, "isLoggedIn" => true);
            header("Location: ../bookmarks");
            exit;
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
        
    </head>
    <body>
        <header>
            <img src="../shared/logo.png">
            <a href="../home/"><i class="fas fa-chevron-circle-left"></i> Back to homepage</a>
        </header>
        
        <div id="outer-form" class="outer-form"> 
            <form id="login-box" method="post" class="login-box">
                <?php if ($error!=""){
                    echo "<div class=\"error-server\">$error </div>";
                }?>
                <label>username: </label><input type="text" name="username" id="username" class="text-input" required>
                <label>password: </label><input type="password" name="password" id="password" class="text-input" required>
                <input type=submit value="Log In" class="button orange-button">
            </form>
        </div>
        <div class="blue-box">
            <p>Don't have an account? <a href="../create-account/"> Create one now.</a></p>
        </div>
    </body>
</html>
