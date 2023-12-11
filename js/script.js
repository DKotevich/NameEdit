function copyText(event) {
	// Предотвращаем стандартное поведение кнопки (отправка формы)
	event.preventDefault();

	// Получаем значение из первого поля
	var inputText = document.getElementById('inputField').value;

	// Удаляем табуляции и запрещенные символы
	var correctedText = inputText.replace(/\t/g, '').replace(/[\\/:\*\?"<>\|]/g, '');

	// Устанавливаем откорректированное значение во втором поле
	document.getElementById('outputField').value = correctedText;
}

//Vozvrat na verh stranicy
const btnPort = document.getElementById('port');
btnPort.addEventListener('click', (e) => {
	e.preventDefault();

	window.scrollBy(0, 0);
	window.scrollBy({
		top: 0,
		behavior: 'smooth'
	});
});