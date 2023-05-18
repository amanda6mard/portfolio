function getNewsList(){
    let newsList = "";
    for(let i = 0; i<5; i++){
        let story = fakeDatabase.stories[i]
        let date = story.date.getDate() + " " + months[story.date.getMonth()]+ ", " + story.date.getFullYear();
       newsList += `<li><a href="../news/?id=${story.id}">${story.title}</a><br><span class="date-tag">${date}</span></li>`
    }

    return newsList;
}

function getStoryCards(number=2)
{
    let cards = "";
   number = number === "" ? 2 : number;
    for(let i = 0; i<number && i<fakeDatabase.stories.length; i++){
        let story = fakeDatabase.stories[i]
        let date = story.date.getDate() + " " + months[story.date.getMonth()]+ ", " + story.date.getFullYear();
       cards += `<div class="news-box-item story-card">
       <h2><a href="../news/?id=${story.id}">${story.title}</a></h2><img src=${story["feature-image"]}>
       <span class="date-tag">${date}</span>
       <p>${story["preview-text"]}</p><a href="../deadend" class="button link-button">Learn more</a>
   </div>`
    }

    return cards;
}

function loadStory(){
    let storyElement = document.getElementById("story-container");
    let story;
    let storyContent = "";    
    const urlParams = new URLSearchParams(window.location.search);
    let storyId=0;

    if(urlParams.has('id'))
    {
        storyId=urlParams.get('id');
    
        for(let i = 0; i<fakeDatabase.stories.length; i++)
        {
            let s = fakeDatabase.stories[i];
            if(s.id === +storyId){
                story = s;
                break;
            }
        }
        
        if(typeof story !== 'undefined')
        {   
            let date = story.date.getDate() + " " + months[story.date.getMonth()]+ ", " + story.date.getFullYear();
            storyContent = `
            <div id="feature">
                <div class="image-container">
                    <div class="image-fit-to-container image-centered-in-container"><img src=${story["feature-image"]}>
                    </div>
                    <div class="image-overlay centered-in-container">
                        <h1>${story.title}</h1>
                    </div>
                </div>
            </div>
            <div id="story-summary" class= "content-section">${story["preview-text"]}</div>
            <div>Written by: ${story.author}</div>
            <div class="date-tag">${date}</div>
            <div id="story" class="content-section">${story["article-text"]}</div>
            `;
        }   else {
            storyContent="<h2>Oops, looks like this article doesn't exist.</h2>"
        }
    } else {
        storyContent += '<h2>News Stories</h2>'
        for(let i = 0; i<fakeDatabase.stories.length; i++){
            story = fakeDatabase.stories[i]
            let date = story.date.getDate() + " " + months[story.date.getMonth()]+ ", " + story.date.getFullYear();
           storyContent += `<div class="news-box-item story-card mb-20">
           <h2><a href="../news/?id=${story.id}">${story.title}</a></h2><img src=${story["feature-image"]}>
           <span class="date-tag">${date}</span>
           <p>${story["preview-text"]}</p><a href="../deadend" class="button link-button">Learn more</a>
       </div>`
        }
    }
    if(storyElement !== null)
    {
        storyElement.innerHTML = storyContent;
    }
   
}

function generateNews(){
    if(window.location.pathname.match("news"))
    {
        loadStory();
    }
    let newsBox = document.getElementById("news-box");
    let storyCount = "";
    if(newsBox !== null){
        storyCount = newsBox.innerHTML;
    }
    let news = `<div id="news-list" class="news-box-item">
    <h2>News</h2>
    <ul>
        ${getNewsList()}
    </ul>
</div>
${getStoryCards(newsBox.innerHTML)}
`;
    if(newsBox !== null){
        newsBox.innerHTML = news;
    }
}

window.addEventListener("load", generateNews);