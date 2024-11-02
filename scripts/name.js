document.addEventListener('DOMContentLoaded', () => {
    const titles = ["Cͨ", "Cͨh", "Cͨhͪo", "Cͨhͪoͦo", "Cͨhͪoͦoͦgeͤrͬ", "Cͨhͪoͦoͦgeͤ", "Cͨhͪoͦoͦg", "Cͨhͪoͦo", "Cͨhͪoͦ", "Cͨhͪ", "Cͨ"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
