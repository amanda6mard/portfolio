<div class="popup" id="edit-box">
    <div class="popup-inner">
        <button class="close" name="edit-close">close</button>
        <div class="popup-text">
            <h3>Edit Bookmark</h3>
            <div id="edit-error">No error.</div>
            <form method="post" id="submit-edit">
                <p><label>name</label><input type="text" name="nameEdit" id="nameEdit"></p> 
                <p><label>url</label><input type="url" name="urlEdit" id="urlEdit"><input type="text" class="secret" name="editURLID" id="editURLID"><input type="text" class="secret" name="validate" id="edit-validate" value="true"></p>
                <input type="submit" value="update" class="button orange-button" id="submit-edit-button">
                </form><button name="edit-close" class="button blue-border-button">cancel<button>
            
        </div>
    </div>
</div>