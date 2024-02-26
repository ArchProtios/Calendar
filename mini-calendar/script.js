const day = document.querySelector(".day")
const datee = document.querySelector(".date")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const card = document.querySelector(".card")


card.addEventListener("mouseover", () => {
    const date = new Date()
    // day.textContent = date.getDay()
    day.textContent = date.toLocaleDateString('en-US', { weekday: 'long' });// to get output in string instead of numbers
    datee.textContent = date.getDate()
    // month.textContent = date.getMonth()
    month.textContent = date.toLocaleDateString('en-US', { month: 'long' });
    year.textContent = date.getFullYear()
})