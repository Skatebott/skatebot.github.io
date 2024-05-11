// Features bölümündeki liste öğelerine tıklandığında arka plan rengini değiştir
document.querySelectorAll('#features li').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('highlight');
    });
});

// Botu sunucuya ekle butonuna tıklandığında mesaj kutusu göster
document.querySelector('.invite-btn').addEventListener('click', () => {
    if (confirm("Bu botu sunucunuza eklemek istediğinizden emin misiniz?")) {
        window.location.href = "https://discord.com/oauth2/authorize?client_id=1164244102590759092&scope=bot%20applications.commands&permissions=0";
    }
});

// Sayfa geçiş efektleri
const sections = document.querySelectorAll('section');

function changeSection(event) {
    const targetId = event.target.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    targetSection.classList.add('active');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', changeSection);
});

// Mouse tekerleğini kullanarak sayfa üzerinde aşağı veya yukarı kaydırma
window.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        window.scrollBy(0, -100); // Yukarı kaydır
    } else {
        window.scrollBy(0, 100); // Aşağı kaydır
    }
});

// Sayfa yüklendiğinde belirli bir bölüme odaklanma
window.addEventListener('load', () => {
    document.getElementById('home').scrollIntoView();
});

// Sayfanın en üstüne gitmek için buton
document.getElementById('go-top-btn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
