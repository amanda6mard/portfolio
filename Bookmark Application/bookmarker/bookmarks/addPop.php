<div class="popup" id="add-box">
    <div class="popup-inner">
        <button class="close" name="add-close">close</button>
        <div class="popup-text">
            <h3>Add Bookmark</h3>
            <div id="add-error">No error.</div>
            <form method="post" id="submit-add">
                <p><label>name</label><input type="text" name="nameAdd" id="nameAdd"></p> 
                <p><label>url</label><input type="url" name="urlAdd" id="urlAdd" placeholder="http://www.example.com" required></p>
                <input type="submit" value="add" class="button orange-button" id="submit-add-button" disabled><input type="text" class="secret" name="validate" id="add-validate" value="true">
                </form><button name="add-close" class="button blue-border-button">cancel<button>
            
        </div>
    </div>
</div>