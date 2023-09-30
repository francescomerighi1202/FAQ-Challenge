let questions_answers_box = document.querySelectorAll('.questions-answers');

/* Quando premo il box domande... */
questions_answers_box.forEach(box => {
    box.addEventListener('click', () => {
        // Verifico se la domanda cliccata è già aperta
        let isOpen = box.classList.contains('selected');

        // Chiudo tutte le domande
        questions_answers_box.forEach(box_sel => {
            box_sel.classList.remove('selected');
        })
        
        // Se la domanda cliccata non era aperta, aprila
        if (!isOpen) {
            box.classList.add('selected');
        }

        // Trovo la risposta e altri elementi all'interno della domanda corrente
        let selectedP = box.querySelector('.answer');
        let selectedQuestion = box.querySelector('.question-box .question');
        let selectedArrow = box.querySelector('.question-box .arrow-icon');

        // Nascondo tutte le risposte e ripristina gli stili
        questions_answers_box.forEach(box_sel => {
            let answer = box_sel.querySelector('.answer');
            let question = box_sel.querySelector('.question-box .question');
            let arrow = box_sel.querySelector('.question-box .arrow-icon');

            answer.style.display = "none";
            question.classList.remove('bold');
            arrow.style.transform = "rotate(0deg)";
        });

        // Se la domanda cliccata non era aperta, mostra la risposta e applico gli stili desiderati
        if (!isOpen) {
            selectedP.style.display = "block";
            selectedQuestion.classList.add('bold');
            selectedArrow.style.transform = "rotate(180deg)";
        }
    });
});