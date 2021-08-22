window.onload = start()

var aTags = document.querySelectorAll('nav a')
var nav = document.querySelector('.main-navbar')
var header = document.querySelector('header')

window.addEventListener('scroll', function () {
    nav.classList.toggle('sticky', window.scrollY > 0)
    header.classList.toggle('changeHeaderBg', window.scrollY > 0)
})

for (var i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.stopPropagation()
    }
}

function start() {
    changeActiveBtns()
    zooming()
}

function changeActiveBtns() {
    var changeFontSizeBtns = document.querySelectorAll('.main-navbar .nav-link')

    for (var i = 0; i < changeFontSizeBtns.length; i++) {
        changeFontSizeBtns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}


function showTime() {
    // count Day
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const date1 = new Date("11/16/2020");
    const date2 = new Date(today);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);


    // h m and s

    var date_now = new Date(2020, 11, 16), // month is zero based
        date_future = new Date;

    // get total seconds between the times
    var delta = Math.abs(date_future - date_now) / 1000;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;

    // what's left is seconds
    var seconds = delta % 60;  // in theory the modulus is not required

    document.querySelector(".days span").innerText = diffInDays;
    document.querySelector(".hours span").innerText = hours;
    document.querySelector(".minutes span").textContent = minutes;
    document.querySelector(".seconds span").textContent = Math.floor(seconds);

    setTimeout(showTime, 1000);

}

showTime();


function zooming() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.querySelectorAll(".myImg");
    var modalImg = document.getElementById("img01");

    for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('id', `${i + 1}`)

        img[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            document.body.style.overflow = "hidden"; // ADD THIS LINE
            document.body.style.height = "100%"; // ADD THIS LINE
            var previousBtn = document.querySelector('.previous')
            var nextBtn = document.querySelector('.next')

            previousBtn.innerHTML = "<"
            nextBtn.innerHTML = ">"
            slideShow(this.id)
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // ADD THIS LINE
        document.body.style.height = "auto"; // ADD THIS LINE
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // ADD THIS LINE
            document.body.style.height = "auto";  // ADD THIS LINE
        }
    }

}

function slideShow(id) {
    var imageId = Number(id)
    var modalImg = document.getElementById("img01");
    var previousBtn = document.querySelector('.previous')
    var nextBtn = document.querySelector('.next')
    var img = document.querySelectorAll(".myImg");


    previousBtn.onclick = function () {
        imageId -= 1
        if (imageId < 1) {
            imageId = 1
            var previousImage = document.getElementById(imageId).src
            modalImg.src = previousImage;
        }
        else {
            var previousImage = document.getElementById(imageId).src
            modalImg.src = previousImage;
        }

    }

    nextBtn.onclick = function () {
        imageId += 1
        if (imageId > img.length) {
            imageId = img.length
            var nextImage = document.getElementById(imageId).src
            modalImg.src = nextImage;
        }
        else {
            var nextImage = document.getElementById(imageId).src
            modalImg.src = nextImage;
        }
    }


}


