window.addEventListener('scroll', function() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    var name = document.getElementById('name');
    var year = document.getElementById('year');
    var description = document.getElementById('description');

    // Riferimenti alle immagini
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var section5 = document.getElementById('section5');
    var section6 = document.getElementById('section6');
    var section7 = document.getElementById('section7');
    var section8 = document.getElementById('section8');

    // Calcola l'altezza della finestra per determinare la sezione attuale
   const sections = document.querySelectorAll('section');
    let section = 0;

    sections.forEach((s, i) => {
    const rect = s.getBoundingClientRect();
    const threshold = window.innerHeight / 2;
    if (rect.top <= threshold && rect.bottom >= threshold) {
        section = i + 1;
    }
    });

    // Cambia testo e mostra immagini in base alla sezione
    switch (section) {
        case 0:
            name.textContent = "Giorgia Casadei";
            year.textContent = "2025";
            description.innerHTML = ` <p id="description">based in milan, Italy. <br> graduated with a bachelor’s degree in Communication Design at Politecnico di Milano <br> currently pursuing the master’s degree. <br> half of <a href="https://www.instagram.com/ugostudiocosasarebbe/" target="_blank">ugostudio</a>.<br><br>
            <a href="https://www.instagram.com/giorgiacasadeii/" target="_blank">@giorgiacasadeii</a><br>
            <a href="mailto:giorgiacasadei09@gmail.com">giorgiacasadei09@gmail.com</a></p>`;

            break;
        case 1:
            name.textContent = "macedonia01";
            year.textContent = "2025";
            description.innerHTML = `macedonia01 is the first issue of macedoniaMagazine.<br> in a world of superficial content, macedonia refuses any kind of meaning, depth or value. <br> <br> <a href="https://capoxxv.github.io/macedonia/" target="_blank">visit macedonia01</a>.`
            break;
        case 2:
            name.textContent = "sessantotto piramidi";
            year.textContent = "2025";
            description.innerHTML = "sixty-eight ways to make a pyramid."
            break;
        case 3:
            name.textContent = "do you think you know what nature is?";
            year.textContent = "2025";
            description.innerHTML = `The installation featured the participants moving in front of a series of images, selecting elements they perceived as natural or artificial. The experiment explored perception and spatial response. <br><br> <a href=" https://vimeo.com/1108038241?share=copy" target="_blank">watch do you know what nature is</a>.`
            break;
        case 4:
            name.textContent = "netartchive.click";
            year.textContent = "2024";
            description.innerHTML = `Netartchive is a digital archive dedicated to the preservation and exploration of net art. It reflects on the temporalities of online artistic production through curated sections like Past, Future, and About.<br> <br> <a href="https://netartchive.click" target="_blank"> visit netartchive.click</a>.`
            break;
        case 5:
            name.textContent = "abbaiare tour merch";
            year.textContent = "2025";
            description.innerHTML = `official merch for <a href=" https://www.instagram.com/lucreziamusica/" target="_blank">@lucreziamusica</a>`
            break;  
        case 6:
            name.textContent = "njörd";
            year.textContent = "2023";
            description.innerHTML = ` you already have the possibility chose the color of your salmon without knowing it. with Njörd you can actively choose between every shade of colors and texture for the salmon you’re going to eat. now you really have the power to change the nature to accomplish your desires.<br> <br> <a href="https://vimeo.com/1108041250?share=copy" target="_blank"> watch njörd</a>.` 
            break;
        case 7:  
            name.textContent = "mep";
            year.textContent = "2024";
            description.textContent = "The Mali Elephant Project protects the endangered elephants of Gourma, promoting harmony between humans, wildlife, and nature. Its redesigned visual identity reflects this mission, with a new logo that merges a comma and an elephant’s profile — a symbol of continuity and reconnection between species."
            break;
    
        default:
            name.textContent = "Giorgia Casadei";
            year.textContent = "2025";
           description.innerHTML = ` <p id="description">based in milan, Italy. <br> graduated with a bachelor’s degree in Communication Design at Politecnico di Milano <br> currently pursuing the master’s degree. <br> half of <a href="https://www.instagram.com/ugostudiocosasarebbe/" target="_blank">ugostudio</a>.<br><br>
            <a href="https://www.instagram.com/giorgiacasadeii/" target="_blank">@giorgiacasadeii</a><br>
            <a href="mailto:giorgiacasadei09@gmail.com">giorgiacasadei09@gmail.com</a></p>`;
    }
});