// Features bölümündeki liste öğelerine tıklandığında arka plan rengini değiştir
document.querySelectorAll('#features li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('highlight');
    });
});
