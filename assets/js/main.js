function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatBrazilianDate(date) {
    const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const day = days[date.getDay()];
    const dayNumber = zeroLeft(date.getDate());
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hour = zeroLeft(date.getHours());
    const minutes = zeroLeft(date.getMinutes());
    const seconds = zeroLeft(date.getSeconds());
    return `${day}, ${dayNumber} de ${month} de ${year} ${hour}:${minutes}:${seconds}`;
}

function main() {
    let date = new Date();
    let container = document.querySelector(".container h1");
    let brazilianDate = formatBrazilianDate(date);
    container.innerHTML = brazilianDate;
}

setInterval(main, 500)
