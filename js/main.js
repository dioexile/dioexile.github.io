`use strict`;

const circleRunWords = () => {
	const text = document.querySelector(".profile_text p");

	text.innerHTML = text.textContent.split("").map((char, i) => `<span style="transform: rotate(${i * 9.2}deg)">${char}</span>`).join("");
}

circleRunWords();

// убрано на время
// const showProject = () => {
// 	const mainResume = document.querySelector(".container");
// 	const projectsResume = document.querySelector(".popup-container");

// 	projectsResume.style.display = "flex";
// 	setTimeout(() => {
// 		mainResume.style.display = "none";
// 		projectsResume.classList.add("active");
// 	}, 800)
// 	mainResume.classList.remove("active");
// }

// const showResume = () => {
// 	const mainResume = document.querySelector(".container");
// 	const projectsResume = document.querySelector(".popup-container");

// 	setTimeout(() => {
// 		projectsResume.style.display = "none";
// 		mainResume.style.display = "grid";
// 		setTimeout(() => {
// 			mainResume.classList.add("active");
// 		}, 200)
// 	}, 800)
// 	projectsResume.classList.remove("active");
// }


// document.querySelector(".button_text").addEventListener("click", showProject);
// document.querySelector(".back").addEventListener("click", showResume);