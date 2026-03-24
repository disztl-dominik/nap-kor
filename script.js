window.addEventListener('load', function() {
    const minFontSize = 70;
    const maxFontSize = 130;
    let currentFontSize = 100;

    document.querySelector("#increase-font-size").addEventListener("click", () => {
        currentFontSize += 10;
        if (currentFontSize >= maxFontSize) currentFontSize = maxFontSize;
        document.documentElement.style.setProperty('--base-font-size', currentFontSize + "%");
    });

    document.querySelector("#decrease-font-size").addEventListener("click", () => {
        currentFontSize -= 10;
        if (currentFontSize <= minFontSize) currentFontSize = minFontSize;
        document.documentElement.style.setProperty('--base-font-size', currentFontSize + "%");
    });

    document.querySelector("#high-contrast").addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });

    document.querySelector("#sidenav-default").addEventListener('click', function() {
        document.body.classList.remove('high-contrast');
        currentFontSize = 100;
        document.documentElement.style.setProperty('--base-font-size', currentFontSize + "%");
    });
});