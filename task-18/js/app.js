$.ajax("https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346")
    .done(function (postersData) {
        renderPosters(postersData);
    })
    .fail(function (err) {
        console.log(err);
    })

$.ajax("https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0")
    .done(function (videoData) {
        renderVideoComments(videoData);
    })
    .fail(function (err) {
        console.log(err);
    })

/*
@description - Renders Video and Its below Comments
@params - video
*/
function renderVideoComments(video) {

    // Movie Part
    // Video Element
    let videoElement = $("<video></video>");
    videoElement.attr("class", "video-element");
    videoElement.attr("poster", "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg");
    videoElement.attr("controls", true);
    videoElement.attr("muted", true);

    // Source Element
    let videoSrc = $("<source></source>");
    videoSrc.attr("src", video.videoUrl);
    videoElement.append(videoSrc);

    // Page Heading
    let pageHeading = $("<h3></h3>");
    pageHeading.text(video.title);
    pageHeading.attr("class", "video-heading");

    // Page Description
    let pageDescription = $("<p></p>");
    pageDescription.text(video.description);
    pageDescription.attr("class", "video-description");

    // Appending Video, Page Heading, Page Description
    $('.movie-area').append(videoElement, pageHeading, pageDescription);

    // Comments Holder
    let commentsHolder = $("<div></div>");
    let card, cardImgWrapper, cardImg, cardTextWrapper, cardHead, cardContent;

    for (const comment of video.comments) {
        card = $("<div></div>");
        card.attr("class", "comment-card");

        cardImgWrapper = $("<div></div>");
        cardImgWrapper.attr("class", "card-image-wrapper");

        cardImg = $("<img/>");
        cardImg.attr("class", "comment-img");
        cardImgWrapper.append(cardImg);

        cardTextWrapper = $("<div></div>");
        cardHead = $("<h2></h2>");
        cardHead.attr("class", "card-heading");

        cardContent = $("<p></p>");
        cardContent.attr("class", "card-description");

        // Inserting Values
        cardHead.text(comment.name);
        cardContent.text(comment.comment);
        cardImg.attr("src", comment.image);

        cardTextWrapper.append(cardHead, cardContent);

        card.append(cardImgWrapper, cardTextWrapper);
        // Inserting Comment
        commentsHolder.append(card);
    }
    // Appending Total Comments
    $('.comments-area').append(commentsHolder);
}


/*
@description - Renders Posters
@params - posters
*/
function renderPosters(posters) {

    // Upcoming Projects
    let projectsWrapper = $("<div></div>");
    projectsWrapper.attr("class", "projects-wrapper");

    let projectsImageWrapper, upcomingProjectImage;
    for (const project of posters) {
        // Creating Poster Wrapper
        projectsImageWrapper = $("<div></div>");
        projectsImageWrapper.attr("class", "projects-image-wrapper");

        // Creating Poster 
        upcomingProjectImage = $("<img/>");

        // Setting Values
        upcomingProjectImage.attr("src", project.imageUrl);
        upcomingProjectImage.attr("title", project.title);

        // Appending Posters into Wrapper
        projectsImageWrapper.append(upcomingProjectImage);
        projectsWrapper.append(projectsImageWrapper);
    }

    // Appending Projects Holder
    $('.upcoming-projects').append(projectsWrapper);
}
