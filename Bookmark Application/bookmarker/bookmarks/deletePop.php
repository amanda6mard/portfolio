<div class="popup" id="delete-box">
    <div class="popup-inner">
        <button class="close"name="delete-close">close</button>
        <div class="popup-text">
        <h3>Remove Bookmark</h3>
            <form method="post">
                <p><strong>Removing the following bookmark:</strong></p>
                <p><label>name:</label> <span id="nameDelete"></span></p> 
                <p><label>url:</label><span id="urlDelete"> </span><input type="text" class="secret" name="deleteURLID" id="deleteURLID"></p>
                <p>Are you sure you want to remove this bookmark?</p>
                <input type="submit" value="remove" class="button orange-button">
                </form><button name="delete-close" class="button blue-border-button">cancel<button>
            </form>
        </div>
    </div>
</div>