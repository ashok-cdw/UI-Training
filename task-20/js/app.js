let notesData = [];
if (localStorage.getItem("notes-data")) {
    notesData = JSON.parse(localStorage.getItem("notes-data"));
}

function myDateSort(obj1, obj2) {
    let date1 = new Date(obj1.lastEdited);
    let date2 = new Date(obj2.lastEdited);
    return date2 - date1;
}

// notesData.length = 0;

function generateCards($start, $end) {
    notesData.sort(myDateSort);
    if (notesData.length < $end) {
        $end = notesData.length;
    }

    let notesWrapper = $(".page-notes");
    for (let i = $start; i < $end; i++) {

        let notes = document.createElement("div");
        let notesHeading = document.createElement("h1");
        notesHeading.className = "notes-heading";
        let notesTime = document.createElement("p");
        notesTime.className = "notes-time";
        let notesImage = document.createElement("img");
        let notesContent = document.createElement("p");
        notesContent.className = "notes-content";
        notes.className = "notes";

        notes.id = notesData[i].id;
        notesHeading.innerText = notesData[i].title;
        notesTime.innerText = new Date(notesData[i].lastEdited).toDateString();
        notesImage.src = notesData[i].imageUrl;
        notesContent.innerText = notesData[i].content;
        notes.style.backgroundColor = notesData[i].color;
        if (notesData[i].imageUrl !== "") {
            notes.append(notesHeading, notesTime, notesImage, notesContent);
        }
        else {
            notes.append(notesHeading, notesTime, notesContent);
        }
        notesWrapper.append(notes);
    }
    $(".notes").on("click", notesClickHandler);
    if ($end < notesData.length) {
        $(".load-more-wrapper").css({
            "display": "flex",
        });
    }
    else {
        $(".load-more-wrapper").hide();
    }
}

$start = 0;
$end = 10;

if (notesData.length) {
    $(".no-notes").hide();
    generateCards($start, $end);
}
else {
    $(".page-notes, .load-more-wrapper,.delete-all-note").hide();

    $noNotes = $("<p></p>");
    $noNotes.attr("class", "no-notes-text");
    $noNotes.text("Notes you add appear here");
    $(".no-notes").append($noNotes);
}

$(".load-more").on("click", function () {
    $start += 10;
    $end += 10;
    generateCards($start, $end);
});

$(function () {
    $(".colors.color-1").children().show(1000);
});

$colorChoosen = $(".colors.color-1");
$color = 'rgb(230, 205, 234)';

$(".colors").on("click", function () {
    $colorChoosen.children().hide(500);
    $(this).children().show(500);
    $colorChoosen = $(this);
    $color = $(this).css("background-color");
})

$(".notes-close-wrapper").on("click", function () {

    $(".add-notes-blur-effect").show();
    $('body').css('overflow', 'hidden');
    $(".modal-wrapper").css({
        "display": "flex",
    });
    $(".modal-title").text("CONFIRM");
    $(".modal-content").text("Seems like you are in the middle of adding/editing content. Do you want to leave?");
    $(".modal-success").text("Yes, Close");
})

$(".new-note").on("click", function () {
    if ($(".new-note").text() === "New") {
        $(".add-notes-wrapper").show(200);
        $(".add-notes-blur-effect").show();
        $('body').css('overflow', 'hidden');
    }
    else {
        $(".add-notes-wrapper").show(200);
        $(".add-notes-blur-effect").show();
        $('body').css('overflow', 'hidden');
        $(".notes-head-title-wrapper").text("EDIT NOTE");
        $(".add-note-btn").text("SAVE");
        $(".notes-detail-title").attr("id");
        let resultIndex = notesData.findIndex(note => note.id == $(".notes-detail-title").attr("id"));
        if (resultIndex !== -1) {
            $("#note-title").val(notesData[resultIndex].title);
            $("#note-image-url").val(notesData[resultIndex].imageUrl);
            $("#note-content").val(notesData[resultIndex].content);
            $colorChoosen.children().hide(500);
            $colorChoosen = $('.colors').filter(function () {
                return $(this).css("background-color") === notesData[resultIndex].color;
            }
            );
            $colorChoosen.children().show(500);
            $color = $colorChoosen.css("background-color");
        }
        else {
            console.log("not found");
        }
    }
})

$("#note-title").on("keydown", function () {
    noteTitlePressed();
})

$("#note-content").on("keydown", function () {
    noteContentPressed();
})

function noteTitlePressed() {
    $noteTitle = $("#note-title").val();
    $noteContent = $("#note-content").val();
    if ($noteTitle === "") {
        $(".add-note-btn").attr("disabled", true);
    }
    else if ($noteTitle.length > 100) {
        $(".add-note-btn").attr("disabled", true);
        if (!($(".notes-title-section p").hasClass("errorClass"))) {

            $(".notes-title-section").append('<p class="errorClass">Note title should be less than 100 characters</p>');
        }
    }
    else {
        $("p.errorClass").remove();
    }

    if (($noteTitle.length > 1 && $noteTitle.length < 100) && $noteContent !== "") {
        $(".add-note-btn").removeAttr("disabled");
    }
}

function noteContentPressed() {
    $noteTitle = $("#note-title").val();
    $noteContent = $("#note-content").val();
    if ($noteContent === "") {
        $(".add-note-btn").attr("disabled", true);
    }

    if (($noteTitle.length > 1 && $noteTitle.length < 100) && $noteContent !== "") {
        $(".add-note-btn").removeAttr("disabled");
    }
}

$(".add-note-btn").on("click", function () {
    if ($(".add-note-btn").text() === "ADD") {
        $noteTitle = $("#note-title").val();
        $noteImageUrl = $("#note-image-url").val();
        $noteContent = $("#note-content").val();
        notesData.push({
            title: $noteTitle,
            imageUrl: $noteImageUrl,
            content: $noteContent,
            color: $color,
            lastEdited: new Date(),
            id: Date.now()
        });

        // Appending Persistent Data
        localStorage.setItem("notes-data", JSON.stringify(notesData));
        // Resetting Values
        $("#note-title").val("");
        $("#note-image-url").val("");
        $("#note-content").val("");

        // Closing Wrapper
        $(".notes-close-wrapper").click();

        // Regenerating Cards
        $(".page-notes").empty();
        $(".no-notes").hide();

        $(".page-notes,.delete-all-note").show();
        generateCards(0, 10);
    }
    else {
        $noteTitle = $("#note-title").val();
        $noteImageUrl = $("#note-image-url").val();
        $noteContent = $("#note-content").val();
        let index = notesData.findIndex(note => $(".notes-detail-title").attr("id") == note.id);
        if (index !== -1) {
            notesData[index] = {
                title: $noteTitle,
                imageUrl: $noteImageUrl,
                content: $noteContent,
                color: $color,
                lastEdited: new Date(),
                id: $(".notes-detail-title").attr("id"),
            };
        }

        // Appending Persistent Data
        localStorage.setItem("notes-data", JSON.stringify(notesData));
        // Resetting Values
        $("#note-title").val("");
        $("#note-image-url").val("");
        $("#note-content").val("");

        $(".notes-head-title-wrapper").text("ADD NOTE");
        $(".add-note-btn").text("ADD");

        // Closing Wrapper
        $(".notes-close-wrapper").click();

        $(".previous-arrow").click();
    }
});

$(".delete-all-note").on("click", function () {
    console.log($(".delete-all-note").text());
    if ($(".delete-all-note").text() === "Delete All") {
        $(".add-notes-blur-effect").show();
        $('body').css('overflow', 'hidden');
        $(".modal-wrapper").css({
            "display": "flex",
        });
        $(".modal-title").text("DELETE ALL NOTES");
        $(".modal-content").text("Are you sure want to delete all notes");
        $(".modal-success").text("Yes, Delete");
    }
    else {
        $(".add-notes-blur-effect").show();
        $('body').css('overflow', 'hidden');
        $(".modal-wrapper").css({
            "display": "flex",
        });
        $(".modal-title").text("DELETE NOTE");
        $(".modal-content").text("Are you sure want to delete this note");
        $(".modal-success").text("Yes, Delete");
    }
});

function notesClickHandler() {
    let resultIndex = notesData.findIndex(note => note.id == $(this).attr("id"));
    if (resultIndex !== -1) {
        $(".page-notes").hide();
        $(".notes-detail-wrapper").css({
            "display": "flex",
        });
        $(".previous-arrow").show();
        $(".delete-all-note").text("DELETE");
        $(".new-note").text("EDIT");

        $(".notes-detail-color").css({
            "background-color": notesData[resultIndex].color,
        });
        $(".notes-detail-title").text(notesData[resultIndex].title);
        $(".notes-detail-title").attr("id", notesData[resultIndex].id);
        $(".notes-detail-date").text(new Date(notesData[resultIndex].lastEdited).toDateString());
        if (notesData[resultIndex].imageUrl !== "") {
            $(".notes-detail-img").show();
            $(".notes-detail-img img").attr("src", notesData[resultIndex].imageUrl);
        }
        else {
            $(".notes-detail-img").hide();
        }

        $(".notes-detail-content").text(notesData[resultIndex].content);
    }
    else {
        console.log("not found");
    }
}

$(".notes").on("click", notesClickHandler);

$(".previous-arrow").on("click", function () {
    $(".page-notes").show();
    $(".notes-detail-wrapper").css({
        "display": "none",
    });
    $(".previous-arrow").hide();

    if (notesData.length >= 1) {
        // Regenerating Cards
        $(".page-notes").empty();
        $(".no-notes").hide();

        $(".delete-all-note").text("DELETE ALL");
        $(".new-note").text("New");

        // Resetting Values
        $("#note-title").val("");
        $("#note-image-url").val("");
        $("#note-content").val("");

        $(".page-notes,.delete-all-note").show();
        generateCards(0, 10);
    }
    else {
        $(".page-notes, .load-more-wrapper,.delete-all-note").hide();
        $(".no-notes").show();
        $(".new-note").text("New");
    }
});

$(".modal-close").on("click", function () {
    $('body').css('overflow', 'auto');
    $(".modal-wrapper").css({
        "display": "none",
    });

    if (($(".modal-title").text() === "DELETE NOTE") || ($(".modal-title").text() === "DELETE ALL NOTES")) {
        $(".add-notes-blur-effect").hide();
    }
});

$(".modal-success").on("click", function () {
    if ($(".modal-title").text() === "DELETE ALL NOTES") {
        notesData.length = 0;
        $(".page-notes").empty();
        $(".page-notes, .load-more-wrapper,.delete-all-note").hide();
        localStorage.removeItem("notes-data");
        $(".modal-close").click();
        $(".no-notes").show();
    }
    if ($(".modal-title").text() === "DELETE NOTE") {

        notesData = notesData.filter(e => $(".notes-detail-title").attr("id") != e.id);
        // Appending Persistent Data
        localStorage.setItem("notes-data", JSON.stringify(notesData));
        $(".modal-close").click();
        $(".previous-arrow").click();
    }

    if ($(".modal-title").text() === "CONFIRM") {
        $(".modal-close").click();

        if ($(".notes-head-title-wrapper").text() === "NEW NOTE") {
            $(".add-notes-wrapper").hide(200);
            $(".add-notes-blur-effect").hide();
            $('body').css('overflow', 'auto');
        }
        else {
            $(".add-notes-wrapper").hide(200);
            $(".add-notes-blur-effect").hide();
            $('body').css('overflow', 'auto');
            $(".notes-head-title-wrapper").text("ADD NOTE");
            $(".add-note-btn").text("ADD");
        }
    }
});