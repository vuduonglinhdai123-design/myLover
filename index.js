var aTags = document.querySelectorAll('nav a')
var nav = document.querySelector('.main-navbar')
var header = document.querySelector('header')
var dropdown_container = document.querySelector('.dropdown-item')
var dropdown_items = document.querySelectorAll('.dropdown-item a')
var gamingBtn = document.querySelector('.gamingBtn')

window.onload = start()


// Play Song
if (localStorage.getItem('loveCode') === 'iloveu') {
    setTimeout(function () {
        var musicModal = document.querySelector('.music-modal')
        var closeMusicModal = document.querySelector('.close-music-modal')
        var audio = document.querySelector('audio')
        audio.onplay = function () {
            musicModal.style.display = 'none'
            document.querySelector('html').style.overflow = "auto"; // ADD THIS LINE
            document.querySelector('html').style.height = "auto"; // ADD THIS LINE
        }

        musicModal.style.display = 'block'
        document.querySelector('html').style.overflow = "hidden"; // ADD THIS LINE
        document.querySelector('html').style.height = "100%"; // ADD THIS LINE

        closeMusicModal.onclick = function () {
            musicModal.style.display = 'none'
            document.querySelector('html').style.overflow = "auto"; // ADD THIS LINE
            document.querySelector('html').style.height = "auto"; // ADD THIS LINE
        }
    }, 3000);
}



function start() {
    setCode()
    changeActiveBtns()
    zooming()
    changeMainColor()
    // showTime();
    showLoveMessage()
}

function resolveAfter1Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 1000);
    });
}

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2500);
    });
}


window.addEventListener('scroll', function () {
    nav.classList.toggle('sticky', window.scrollY > 0)
    header.classList.toggle('sticky-header', window.scrollY > 0)
    dropdown_container.classList.toggle('active', window.scrollY > 0)
})

for (var j = 0; j < aTags.length; j++) {
    aTags[j].onclick = function (e) {
        // e.stopPropagation()
    }
}

document.querySelector('.lm-demo-panel-switcher').onmouseover = function () {
    this.querySelector('i').classList.toggle('loading')
}

document.querySelector('.lm-demo-panel-switcher').onmouseout = function () {
    this.querySelector('i').classList.remove('loading')
}

document.querySelector('.lm-demo-panel-switcher').onclick = function () {
    document.querySelector('.lm-demo-panel').classList.toggle('active')
}




function changeActiveBtns() {
    var changeFontSizeBtns = document.querySelectorAll('.nav-link')
    for (var i = 0; i < changeFontSizeBtns.length; i++) {
        changeFontSizeBtns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

// Another changeActiveBtns for dropdown nav-links
var dropdown_navLinks = document.querySelectorAll('.dropdown-nav-link')
dropdown_container.onclick = function (e) {
    for (var j = 0; j < dropdown_navLinks.length; j++) {
        if (e.target === dropdown_navLinks[j]) {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            gamingBtn.className += " active";
        }
    }
}


// function showTime() {
//     // count Day
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     today = mm + '/' + dd + '/' + yyyy;

//     const date1 = new Date("11/16/2020");
//     const date2 = new Date(today);

//     // One day in milliseconds
//     const oneDay = 1000 * 60 * 60 * 24;

//     // Calculating the time difference between two dates
//     const diffInTime = date2.getTime() - date1.getTime();

//     // Calculating the no. of days between two dates
//     const diffInDays = Math.round(diffInTime / oneDay);


//     // h m and s

//     var date_now = new Date(2020, 11, 16), // month is zero based
//         date_future = new Date;

//     // get total seconds between the times
//     var delta = Math.abs(date_future - date_now) / 1000;

//     // calculate (and subtract) whole hours
//     var hours = Math.floor(delta / 3600) % 24;

//     // calculate (and subtract) whole minutes
//     var minutes = Math.floor(delta / 60) % 60;

//     // what's left is seconds
//     var seconds = delta % 60; // in theory the modulus is not required

//     document.querySelector(".days span").innerText = diffInDays;
//     document.querySelector(".hours span").innerText = hours;
//     document.querySelector(".minutes span").textContent = minutes;
//     document.querySelector(".seconds span").textContent = Math.floor(seconds);

//     setTimeout(showTime, 1000);

// }

function zooming() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.querySelectorAll(".myImg");
    var img = document.querySelectorAll(".myImg");
    var modalImg = document.getElementById("img01");

    for (var i = 0; i < img.length; i++) {
        img[i].setAttribute('id', `${i + 1}`)
        img[i].onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            document.querySelector('html').style.overflow = "hidden"; // ADD THIS LINE
            document.querySelector('html').style.height = "100%"; // ADD THIS LINE

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
        document.querySelector('html').style.overflow = "auto"; // ADD THIS LINE
        document.querySelector('html').style.height = "auto"; // ADD THIS LINE
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.querySelector('html').style.overflow = "auto"; // ADD THIS LINE
            document.querySelector('html').style.height = "auto"; // ADD THIS LINE
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
        } else {
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
        } else {
            var nextImage = document.getElementById(imageId).src
            modalImg.src = nextImage;
        }
    }
}

function changeMainColor() {
    var colorElements = document.querySelectorAll('option')
    var root = document.documentElement;
    var heartImgs = document.querySelectorAll('#ourStory .story-date')

    root.style.setProperty('--main-color', localStorage.getItem('mainColor'));

    for (var i = 0; i < heartImgs.length; i++) {
        heartImgs[i].style.backgroundImage = `url(/img/${localStorage.getItem('heartColor')})`
    }

    for (var i = 0; i < colorElements.length; i++) {
        colorElements[i].onclick = function () {
            var heartImgUrl = this.value.substring(1) + '.png'

            localStorage.setItem('heartColor', heartImgUrl)
            localStorage.setItem('mainColor', this.value)
            window.location.reload(true);
        }
    }
}



var i = 0;
var txt = "Before finishing this web, I want to say something to you";
var speed = 30;

async function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    await resolveAfter2Seconds();
    document.querySelector('.click-message-container').style.display = 'flex'
    await resolveAfter1Seconds()
    document.querySelector('.final-heart-container').style.display = 'block'
    showFinalMessage()
}

function showFinalMessage() {
    var finalHeart = document.querySelector('.final-heart')
    var modal = document.querySelector(".final-modal");

    if (localStorage.getItem('loveCode') === 'iloveu') {
        finalHeart.onclick = function () {
            modal.style.display = "block";
            document.querySelector('html').style.overflow = "hidden"; // ADD THIS LINE
            document.querySelector('html').style.height = "100%"; // ADD THIS LINE
        }

        var span = document.getElementsByClassName("final-close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
            document.querySelector('html').style.overflow = "auto"; // ADD THIS LINE
            document.querySelector('html').style.height = "auto"; // ADD THIS LINE
        }
    }
}

function setCode() {
    var keyBtn = document.querySelector('.changeCode-btn i')
    keyBtn.onclick = function () {
        var loveCode = prompt('Enter the code, if do not know, just skip :D')
        if (loveCode) {
            localStorage.setItem('loveCode', loveCode)
            window.location.reload(true);
        }
    }
}

function showLoveMessage() {
    var confirmCode = localStorage.getItem('loveCode')
    var letter_icons = document.querySelectorAll('.letter-icon')
    var closeBtn = document.querySelectorAll('.close-love-modal')
    if (confirmCode === 'iloveu') {
        document.querySelector('.changeCode-btn i').style.display = 'none'
        for (var i = 0; i < letter_icons.length; i++) {
            letter_icons[i].onclick = function () {
                this.parentElement.parentElement.querySelector('.love-modal').style.display = 'block'
                document.querySelector('html').style.overflow = "hidden"; // ADD THIS LINE
                document.querySelector('html').style.height = "100%"; // ADD THIS LINE
            }
        }

        for (var j = 0; j < closeBtn.length; j++) {
            closeBtn[j].onclick = function () {
                this.parentElement.style.display = 'none'
                document.querySelector('html').style.overflow = "auto"; // ADD THIS LINE
                document.querySelector('html').style.height = "auto"; // ADD THIS LINE
            }
        }
    } else {
        for (var i = 0; i < letter_icons.length; i++) {
            letter_icons[i].onclick = ''
        }
    }
}

const footer = document.querySelector("footer");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart rain-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    footer.appendChild(heart);
}
setInterval(createHeart, 100);
setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".rain-heart")
    if (heartArr.length > 200) {
        heartArr[0].remove()
    }
}, 100)
