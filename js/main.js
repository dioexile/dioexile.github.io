const project = document.querySelector(".project");
const resume = document.querySelector(".container");
const project2 = document.querySelector(".project2");
const page1 = document.getElementById('first-page');
const page11 = document.getElementById('first-page2');
const page2 = document.getElementById('second-page');

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
	project2.style.display = 'none'
}
const showResume2 = () => {
	project2.style.display = 'none'
	resume.style.display = 'grid'
}
const showSecond = () => {
	project.style.display = 'none'
	project2.style.display = 'block'
}
const showFirst = () => {
	project.style.display = 'block'
	project2.style.display = 'none'
	console.log('asd')
}

page2.addEventListener('click', showSecond);
page11.addEventListener('click', showFirst);


circleRunWords();
document.querySelector(".button_text").addEventListener("click", showProject);
document.querySelector(".back").addEventListener("click", showResume);
document.querySelector(".back2").addEventListener("click", showResume2);