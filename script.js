/*
$(document).ready(function() {
        $(".toOpen").hide(); // Hide initially
    
        $(".buttonToPress").click(function() {
            $(".toOpen").fadeIn().addClass("aperto"); // Show and animate
        });
    
        $(".buttonToClose").click(function() {
            $(".toOpen").fadeOut(200, function() { // Ensures smooth transition
                $(this).removeClass("aperto").hide();
            });
        });
    
        $(".aperto").click(function(event) {
            if (!$(event.target).is("img")) { // Close only when clicking outside image
                $(".aperto").fadeOut(200, function() {
                    $(this).removeClass("active").hide();
                });
            }
        });
    });

    */
/*
    $(document).ready(function() {
        $(".toOpen").hide(); // Hide the modal initially
        $(".image-caption").hide(); // Hide all captions initially
    
        // Open modal when clicking any image
        $(".container src").click(function() {
            let imgSrc = $(this).attr("src"); // Get clicked image source
            $("#modalImg").attr("src", imgSrc); // Set modal image
            $("#imageModal").fadeIn(300).addClass("aperto"); // Show modal smoothly
        });
    
        function closeModal() {
            $("#imageModal").fadeOut(300, function() {
                $("#modalImg").attr("src", ""); // Clear image source after fade out
                $(this).removeClass("aperto"); // Ensure class is removed
            });
        }
    
        // Close modal when clicking close button
        $("#closeModal").click(function() {
            closeModal();
        });
    
        // Close modal when clicking outside the image
        $("#imageModal").click(function(event) {
            if (!$(event.target).is("#modalImg")) { 
                closeModal();
            }
        });
    });
*/
/*
$(document).ready(function() {
        $(".toOpen").hide(); // Hide modal initially
    
        $(".modalImage").click(function() {
            let imgSrc = $(this).attr("src"); // Get clicked image source
            let imgName = $(this).attr("data-name"); // Get name from data attribute
            let imgYear = $(this).attr("data-year"); // Get year from data attribute
    
            $("#modalImg").attr("src", imgSrc); // Set modal image
            $("#modalCaption").text(imgName + " (" + imgYear + ")"); // Set caption
            $("#imageModal").fadeIn().addClass("aperto"); // Show modal
        });
    
        $("#closeModal").click(function() {
            $("#imageModal").fadeOut(300, function() {
                $("#modalImg").attr("src", ""); // Clear image src after closing
                $("#modalCaption").text(""); // Clear caption text
                $(this).fadeOut(300).removeClass("aperto");
            });
        });
    
        $("#imageModal").click(function(event) {
            if (!$(event.target).is("#modalImg")) { 
                $("#imageModal").fadeOut(300).removeClass("aperto");
            }
        });
    });
    
    
*/

$(document).ready(function() {
        $(".toOpen").hide(); // Hide modal initially
    
        $(".modalImage").click(function() {
            let imgSrc = $(this).attr("src"); // Get clicked image source
            let imgName = $(this).attr("data-name"); // Get name from data attribute
            let imgYear = $(this).attr("data-year"); // Get year from data attribute
    
            $("#modalImg").attr("src", imgSrc).show(); // Ensure image is visible
            $("#modalCaption").text(imgName + " (" + imgYear + ")"); // Set caption
            $("#imageModal").fadeIn().addClass("aperto"); // Show modal
        });
    
        function closeModal() {
            $("#modalImg, #imageModal").fadeOut(200, function() { // Fade out both at the same time
                $("#modalImg").attr("src", ""); // Clear image source
                $("#modalCaption").text(""); // Clear caption text
                $("#imageModal").removeClass("aperto").hide(); // Hide modal instantly after fade
                $("#modalImg").show(); // Reset for next use
            });
        }
    
        $("#closeModal").click(closeModal);
    
        $("#imageModal").click(function(event) {
            if (!$(event.target).is("#modalImg")) { 
                closeModal();
            }
        });
    });


function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}

function toggleArtisticResearch(){
    document.querySelector(".info").classList.toggle("active")
}


$(document).ready(function() {
    $(".toOpen1").hide(); // Hide modal initially

   $(".modalImage1").click(function() {
        let imgSrc = $(this).attr("src"); // Get clicked image source
       
        $("#modalImg").attr("src", imgSrc).show(); // Ensure image is visible
        $("#imageModal").fadeIn().addClass("aperto"); // Show modal
    });
    
    function closeModal() {
        $("#modalImg, #imageModal").fadeOut(200, function() { // Fade out both at the same time
            $("#modalImg").attr("src", ""); // Clear image source
            $("#imageModal").removeClass("aperto").hide(); // Hide modal instantly after fade
            $("#modalImg").show(); // Reset for next use
        });
    }

    $("#closeModal").click(closeModal);

    $("#imageModal").click(function(event) {
        if (!$(event.target).is("#modalImg")) { 
            closeModal();
        }
    });
});
