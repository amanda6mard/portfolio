<!DOCTYPE html>
<html>
    <head>        
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Slideshow | Assignment 1</title>
        
        <!-- Styles -->
        <link rel="stylesheet" href="styles.css">
        
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        
        <!-- Javascript -->
        <script src="slideshow.js"></script>
        <script src="script.js"></script>
        

    </head>
    <body>
        
        <div class="container">
            <canvas id="slideshow" height="450" width="800"> 
                Your browser does not support the HTML5 canvas tag.
            </canvas>
            
            <div class="controls">
                <div class="button-group">
                    <button type="button" class="button" id="last-button">    
                        <div class="button-icon">
                            <i class="fas fa-chevron-left"></i>
                        </div>
                        <div class="button-label">
                            Last
                        </div>
                    </button>

                    <button type="button"  class="button" id="play-button">
                        <div class="button-icon">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="button-label">
                            Play Show
                        </div>
                    </button>

                    <button type="button"  class="button" id="next-button">    
                        <div class="button-icon">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                        <div class="button-label">
                            Next
                        </div>
                    </button>    
                </div>
                   
                <div class="button-group center-group">
                    <button type="button"  class="button" id="order-button">
                        <div class="button-icon">
                            <i class="fas fa-random"></i>
                        </div>
                        <div class="button-label">
                            Random
                        </div>
                    </button>

                    <button type="button"  class="button" id="dir-button">
                        <div class="button-icon">
                            <i class="fas fa-backward"></i>
                        </div>
                        <div class="button-label">
                            Reverse Order
                        </div>
                    </button>
                </div>
                
                <div class="button-group">
                    <button type="button"  class="button" id="cap-button">
                        <div class="button-icon">
                            <i class="fas fa-comment-slash"></i>
                        </div>
                        <div class="button-label">
                            Hide Caption
                        </div>
                    </button>

                    <button type="button"  class="button" id="trans-button">
                        <div class="button-icon">
                            <i class="fas fa-film"></i>
                        </div>
                        <div class="button-label">
                            Transitions
                        </div>
                    </button>
                    <div class="trans-picker" id="trans-picker">
                        <label>Pick your transition effect</label>
                        <select id="transition">
                            <option value="none">No transition effect</option>
                            <option value="right">Swipe Right</option>
                            <option value="down">Swipe Down</option>
                            <option value="stretchRight">Stretch Right</option>
                            <option value="stretchDown">Stretch Down</option>
                            <option value="fade">Fade In</option>
                        </select>
                        <label>Pick slide-rotation timing</label>
                        <select id="timing">
                            <option value="1">1 seconds</option>
                            <option value="2" selected>2 seconds</option>
                            <option value="3">3 seconds</option>
                            <option value="5">5 seconds</option>
                            <option value="10">10 seconds</option>
                            <option value="15">15 seconds</option>
                            <option value="20">20 seconds</option>
                            <option value="25">25 seconds</option>
                            <option value="30">30 seconds</option>
                        </select>       
                    </div>

                    <button type="button"  class="button" id="color-button">
                        <div class="button-icon">
                            <i class="fas fa-palette"></i>
                        </div>
                        <div class="button-label">
                            Color
                        </div>
                    </button>
                    <div class="color-picker" id="color-picker">
                            <div class="color" id="color-box">Click here to add color effect</div>
                            <p><label>Hue</label><input id = "h-range" type = "range" max = "360" value = "180" class="slider"></p>
                            <p><label>Saturation</label><input id = "s-range" type = "range" max = "100" value = "100" class="slider"></p>
                            <p><label>Lightness</label><input id = "l-range" type = "range" max = "100" value = "50" class="slider"></p>
                            <p><label>Transparency</label><input id = "a-range" type = "range" max = "100" value = "25" class="slider"></p>
                            <div id="reset-color">Reset color</div>  
                            <div id="remove-color">Remove color effect</div>          
                    </div>
                </div>
            </div>
        </div>
        
    </body>
</html>