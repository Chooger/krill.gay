document.addEventListener('DOMContentLoaded', () => {
    const titles = ["/p", "/pu", "/pud", "/pudd", "/puddl", "/puddle", "/puddles", "/puddle", "/puddl", "/pudd", "/pud", "/pu", "/p", "/"];
    let index = 0;

    function updateTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;8
    }

    setInterval(updateTitle, 355);
});
