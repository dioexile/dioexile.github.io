const project = document.querySelector(".project");
const resume = document.querySelector(".container");


const circleRunWords = () => {
	const text = document.querySelector(".profile_text p");

	text.innerHTML = text.textContent.split("").map((char, i) => `<span style="transform: rotate(${i * 9.2}deg)">${char}</span>`).join("");
}


const showProject = () => {
	project.style.display = 'block'
	resume.style.display = 'none'
}
const showResume = () => {
	project.style.display = 'none'
	resume.style.display = 'grid'
}


circleRunWords();
document.querySelector(".button_text").addEventListener("click", showProject);
document.querySelector(".back").addEventListener("click", showResume);