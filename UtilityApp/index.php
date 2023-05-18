<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Utility Tools</title>
        
        <!-- Styles for the app -->
        <link rel="stylesheet" href="styles/utilitiesStyles.css">
        
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        
        <!--Tool scripts must be loaded first -->
        <script src="scripts/measurement-converter.js"></script>
        <script src="scripts/mortgage-calculator.js"></script>
        <script src="scripts/metronome.js"></script>
        
        <!-- Javascript for whole app -->
        <script src="scripts/utilities.js"></script>

        
    </head>
    <body>
        <div id="color-scheme"><link rel="stylesheet" href="styles/purple.css"></div>        
        <nav class="main">
            <div class="nav-info">Select a utility tool:</div>
            <ul id="tools">
                <li id="measurement-converter" class=" active">Measurement Converter</li>
                <li id="mortgage-calculator">Mortgage Calculator</li>
                <li id="metronome">Metronome</li>
            </ul>
            <div class="color-picker">
                <p>Pick a color scheme:</p>
                <div id="color1" class="color"></div>
                <div id="color2" class="color"></div>
                <div id="color3" class="color"></div>
            </div>
        </nav>
        
        <nav class="mobile">
            <ul id="tools">
                <li id="measurement-converter-mobile" class=" active"><i class="fas fa-balance-scale"></i></li>
                <li id="mortgage-calculator-mobile"><i class="fas fa-home"></i></li>
                <li id="metronome-mobile"><i class="fas fa-music"></i></li>
            </ul>
        </nav>
        
        <section>
            <div id="tool-title">
                Placeholder
            </div>

            <div id="tool-block">
                <!-- Javascript for measurement converter -->
                <script src='scripts/measurement-converter.js'></script>    
                
                <!-- measurement convert -->
                <div id='meas-container'>
                    <p>
                        <select id='measurement-type'>
                            <option value='weight'>
                                weight
                            </option>
                            <option value='length'>
                                length
                            </option>
                            <option value='area'>
                                area
                            </option>
                            <option value='volume'>
                                volume
                            </option>
                        </select>
                    </p>
                    <div class='units'> 
                        <div id='unit1' class='unit'>
                            <div class='number'><input id='from-number' placeholder='0' autocomplete='off'></div>
                            <select id='units-1'></select>
                        </div> 
                        <span id='equals'>equals</span>
                        <div id='unit2' class='unit'>
                            <div class='number' id='result-display'></div>
                            <select id='units-2'></select>
                        </div> 
                    </div>
                    <p>
                        <span id="error-msg">
                            There was no error. 
                        </span>
                    </p> 
                </div>
                
            </div>
        </section>
        
        <footer>
            <p class="footer-text">Amanda Simard | Assignment 1 - COMP 466</p>
        </footer>        
    </body>
</html>