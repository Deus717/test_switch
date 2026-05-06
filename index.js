    // Получаем поле ввода
    const input = document.querySelector('.search-input');

    // Получаем все карточки
    const cards = document.querySelectorAll('.card');

    // Событие при вводе текста
    input.addEventListener('input', function () {
      const value = input.value.toLowerCase();

      cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        // Если текст найден — показываем карточку
        if (text.includes(value)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });