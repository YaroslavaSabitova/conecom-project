export default function () {
    const hiddenTexts = document.querySelectorAll('.js_hidden_text');
    const crossBtns = document.querySelectorAll('.js_cross');

    crossBtns.forEach(function (cross, index) {
        cross.addEventListener('click', event => {
            const target = event.target;

            if (hiddenTexts[index]) {
                target.classList.toggle('active');
                hiddenTexts[index].classList.toggle('active');
            }
        });
    });
}
