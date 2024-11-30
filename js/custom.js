// Horizontal Left & Right Marquee Code Here
$(document).ready(function () {
    //jQuery.noConflict();
    $('.skillsMarque, .iskconMarque, .artistMarque').marquee({
        duration: 90000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    $('.rollsMarque, .hobbiesMarque').marquee({
        duration: 90000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    $('.moreWorkInnerMarquee, .projectInnerMarquee, .aboutMeInnerMarquee').marquee({
        duration: 20000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    $('.footerInnerMarquee, .projectMarquee, .bottomInnerMarquee').marquee({
        duration: 20000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    $('.leftReachMeMarque').marquee({
        duration: 120000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });

    $('.rightReachMeMarque').marquee({
        duration: 190000,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'right',
        duplicated: true,
        startVisible: true,
        pauseOnHover: true
    });
});


// Featured 002 & 003 Hover Image Reveal Effect Code Here
let links = document.querySelectorAll('.featuredMenu-item');
console.log(links);
let linkImages = document.querySelectorAll('.featuredHover-reveal__img');
console.log(linkImages);

links.forEach((link, idx) => {
    link.addEventListener('mousemove', (e) => {
        link.children[2].style.opacity = 1;
        link.children[0].style.zIndex = 10;
        link.children[1].style.zIndex = 10;
        link.children[2].style.transform = `translate(${e.clientX - 300}px, 0px) rotate(${e.clientX / 50}deg)`;
        linkImages[idx].style.transform = `scale(1, 1)`;
        link.style.zIndex = 9;
    })

    link.addEventListener('mouseleave', (e) => {
        link.children[2].style.opacity = 0;
        link.children[2].style.transform = `translate(${-e.clientX}px, -300px)`;
        linkImages[idx].style.transform = `scale(0.8, 0.8)`;
        link.style.zIndex = 0;
    })
})


// Featured 002 & 003 Hover 3D Text Rotate Effect Code Here
let parentRotateDivItems = document.querySelectorAll('.featuredParentRotateDiv');
parentRotateDivItems.forEach(item => {
    let word = item.children[0].children[0].innerText.split('');
    console.log(word)
    item.children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        // --index used for css delay animation
        item.children[0].innerHTML += `<span style="--index: ${idx};">${letter}</span>`
        item.children[0].style.mixBlendMode = "exclusion";
    })
    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.left = '0';
    cloneDiv.style.top = '0';
    item.appendChild(cloneDiv);
})



// Hamburger Menu Hover Image Reveal Effect Code Here
let hamlinks = document.querySelectorAll('.hamMenu__item');
console.log(hamlinks)
let hamlinkImages = document.querySelectorAll('.hamHover-reveal__img')
console.log(hamlinkImages)

hamlinks.forEach((link, idx) => {
    link.children[0].addEventListener('mousemove', (e) => {
        link.children[0].style.opacity = 0;
        link.children[0].style.zIndex = 25;
        link.children[2].style.zIndex = 25;
        link.children[1].style.opacity = 1;
        link.children[1].style.zIndex = 24;
        link.children[1].style.transform = `translate(${e.clientX - 300}px, -${e.clientY / 3}px) rotate(3deg)`;
        hamlinkImages[idx].style.transform = `scale(1, 1)`;
    })
    link.children[0].addEventListener('mouseleave', (e) => {
        link.children[0].style.opacity = 1;
        link.children[1].style.opacity = 0;
        link.children[1].style.zIndex = 0;
        link.children[1].style.transform = `translate(${-e.clientX}px, -300px)`;
        hamlinkImages[idx].style.transform = `scale(0.8, 0.8)`;
    })
})


// Move Circle With Mouse Pointer
const cursorE = document.querySelector('.cursor-Hover');

document.addEventListener('mousemove', (e) => {
    cursorE.style.left = (e.screenX) + 'px';
    cursorE.style.top = (e.screenY - 72) + 'px';
})


// Hover Circle Scale Up Effect
const containerH = document.getElementById('cursor-Hoverid');
const visibleH = document.getElementById('visibleHid');

const scaleFour = document.querySelectorAll("#headerNameid, #menuBtnHid, #reachmeHid, #reachmeHidAbout, #aboutmeHid, #moreworkHid");
scaleFour.forEach((linkH) => {
    linkH.addEventListener('mousemove', () => { containerH.style.transform = "scale(4)"; containerH.style.margin = "-15px 0 0 -15px" });
    linkH.addEventListener('mouseleave', () => { containerH.style.transform = "translate(-50%,-50%)"; containerH.style.margin = "0" });
});

const scaleTwo = document.querySelectorAll("#behanceHid, #linkedinHid, #instagramHid");
scaleTwo.forEach((linkH) => {
    linkH.addEventListener('mousemove', () => { containerH.style.transform = "scale(2)"; containerH.style.margin = "-15px 0 0 -15px" });
    linkH.addEventListener('mouseleave', () => { containerH.style.transform = "translate(-50%,-50%)"; containerH.style.margin = "0" });
});

const clickHereVar = document.querySelectorAll("#monoglassHid, #casadeHid, #bevmoHid, #indexHid, #projectHid, #aboutMHid");
clickHereVar.forEach((linkH) => {
    linkH.addEventListener('mousemove', () => { containerH.style.transform = "scale(4)"; containerH.style.mixBlendMode = "unset"; containerH.style.margin = "-15px 0 0 -15px"; visibleH.style.opacity = "1" });
    linkH.addEventListener('mouseleave', () => { containerH.style.transform = "translate(-50%,-50%)"; containerH.style.mixBlendMode = "exclusion"; containerH.style.margin = "0"; visibleH.style.opacity = "0" });
});






//JS For HamBurger Menu Button
var HamVar = 0;
function hamMenuToggle(x) {
    x.classList.toggle("change");

    if (HamVar == 0) {
        document.getElementById('hammenuid').style.top = "0%";
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
        HamVar = 1;
    } else {
        document.getElementById('hammenuid').style.top = "-150%";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
        HamVar = 0;
    }
}


//On scroll Event Are Here
//On scroll Star Rotating Are Here
const rotElement = document.querySelectorAll("#sectionStarTwo, #sectionStarOne, #heroStarOne, #heroStarTwo, #heroStarThree, #aboutStarOne, #aboutStarTwo");
window.onscroll = function () {

    var theta = document.documentElement.scrollTop / 500 % Math.PI;
    rotElement.forEach((linkH) => {
        linkH.style.transform = 'rotate(' + theta + 'rad)';
    });
}


//Page Transition Code is Here
window.onload = () => {
    const anchors = document.querySelectorAll('.hamMenu__item-link');
    console.log(anchors);
    const transition_el = document.querySelector('.transition');
    const kukiTrans = document.getElementById('photo-stackid');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
        //transition_el.style.top = "-100%";
    }, 1000);

    setTimeout(() => {
        kukiTrans.style.visibility = "visible";
        kukiTrans.style.visibility = "hidden";

    }, 1000);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            console.log(transition_el);

            transition_el.classList.add('is-active');
            kukiTrans.style.visibility = "hidden";

            console.log(transition_el);

            setInterval(() => {
                window.location.href = target;
            }, 1000);
        })
    }
}



const link = document.querySelectorAll('.magnetLinksall');

const animateit = function (e) {
    const spanall = this.querySelector('.magnetSpanLinkall');
    const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 15,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

    spanall.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === 'mouseleave') { spanall.style.transform = ''; }
};

link.forEach(b => b.addEventListener('mousemove', animateit));
link.forEach(b => b.addEventListener('mouseleave', animateit));




/*Draggable Cards Code Starts Here*/
const dragADiv = document.querySelectorAll("#blackVCardDrag, #whiteVCardDrag");

dragADiv.forEach((linkH) => {
    dragElement(linkH);
});

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (elmnt) {
        /* if present, the header is where you move the DIV from:*/
        elmnt.onmousedown = dragMouseDown;
    }
    else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}












const currentLink = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        currentLink = i;
    }
}
document.links[currentLink].className = 'cutText';