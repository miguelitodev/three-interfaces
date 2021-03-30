let frame1 = document.getElementById("frame-1");
let frame2 = document.getElementById("frame-2");
let frame3 = document.getElementById("frame-3");

let img1 = document.getElementById("img-1-frame-1");
let img2 = document.getElementById("img-2-frame-1");
let img3 = document.getElementById("img-3-frame-1");

let title = document.querySelector(".title-banner");
let logo = document.querySelector(".logo-banner");
let title2 = document.querySelector(".title-banner-2");

function loopFrame1() {
	img1.classList.add("up");
	img2.classList.add("down");
	img3.classList.add("up");
	setTimeout(() => {
		frame1.classList.add("to-invisible");
	}, 3000);
}

function loopFrame2() {
	title.classList.add("left");
	logo.classList.add("right");
	setTimeout(() => {
		title.classList.remove("left");
	}, 3000);
	setTimeout(() => {
		title2.classList.add("to-visible");
		title2.classList.add("left");
	}, 3000);
}

window.onload = () => {
	loopFrame1();
	setTimeout(() => {
		loopFrame2();
	}, 3000);
	setTimeout(() => {
		loopFrame3();
	}, 3000);
};
