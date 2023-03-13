import { video, posters } from "./data.js";
let movieArea = document.querySelector(".movie-area");
let commentsArea = document.querySelector(".comments-area");


// Movie
// Video Element
let videoElement = document.createElement("video");
videoElement.className = "video-element";
videoElement.poster = "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg";
videoElement.controls = true;
videoElement.muted = true;

// Source Element
let videoSrc = document.createElement("source");
videoSrc.src = video.videoUrl;

videoElement.appendChild(videoSrc);

// Page Heading
let pageHeading = document.createElement("h3");
pageHeading.innerText = video.title;
pageHeading.className = "video-heading";

// Page Description
let pageDescription = document.createElement("p");
pageDescription.innerText = video.description;
pageDescription.className = "video-description";

// Appending Video, Page Heading, Page Description
movieArea.append(videoElement, pageHeading, pageDescription);

// Comments Holder
let commentsHolder = document.createElement("div");
let card, cardImgWrapper, cardImg, cardTextWrapper, cardHead, cardContent;

for (const comment of video.comments) {
    card = document.createElement("div");
    card.className = "comment-card";

    cardImgWrapper = document.createElement("div");
    cardImgWrapper.className = "card-image-wrapper";
    cardImg = document.createElement("img");
    cardImg.className = "comment-img"

    cardImgWrapper.append(cardImg);

    cardTextWrapper = document.createElement("div");
    cardHead = document.createElement("h2");
    cardHead.className = "card-heading";

    cardContent = document.createElement("p");
    cardContent.className = "card-description";

    // Inserting Values
    cardHead.innerText = comment.name;
    cardContent.innerText = comment.comment;
    cardImg.src = comment.image;

    cardTextWrapper.append(cardHead, cardContent);

    card.append(cardImgWrapper, cardTextWrapper);
    // Inserting Comment
    commentsHolder.append(card);
}

// Appending Total Comments
commentsArea.append(commentsHolder);

// Upcoming Projects
let upcomingProjects = document.querySelector(".upcoming-projects");

// Creating Projects Holder
let projectsWrapper = document.createElement("div");
projectsWrapper.className = "projects-wrapper";

for (const project of posters) {
    // Creating Poster Wrapper
    let projectsImageWrapper = document.createElement("div");
    projectsImageWrapper.className = "projects-image-wrapper";

    // Creating Poster 
    let upcomingProjectImage = document.createElement("img");

    // Setting Values
    upcomingProjectImage.src = project.imageUrl;
    upcomingProjectImage.title = project.title;

    // Appending Posters into Wrapper
    projectsImageWrapper.appendChild(upcomingProjectImage);
    projectsWrapper.appendChild(projectsImageWrapper);
}

// Appending Projects Holder
upcomingProjects.appendChild(projectsWrapper);

