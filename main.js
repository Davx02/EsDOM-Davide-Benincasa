    // Creare 3 paragrafi in HTML e 3 bottoni.Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima. PS: Uniamo le conoscenze che abbiamo appreso finora, come sappiamo quando c'è qualcosa di casuale possiamo utilizzare il Math.random().


    let btn = document.querySelector('.btn')
    let btn2 = document.querySelector('.btn2')
    let btn3 = document.querySelector('.btn3')

    let par = document.querySelector('.paragrafi')
    let par2 = document.querySelector('.paragrafi2')
    let par3 = document.querySelector('.paragrafi3')

    let checked = false;
    let checked2 = false;

   
    
    
    btn.innerHTML = 'bottone 1';
    btn2.innerHTML = 'bottone 2';
    btn3.innerHTML = 'bottone 3';

    par.innerHTML = 'paragrafo 1'
    par2.innerHTML = 'paragrafo 2'
    par3.innerHTML = 'paragrafo 3'

    btn.addEventListener('click', () =>{
        if (checked == false) {
            par.style.display = 'block'
            par2.style.display = 'block'
            par3.style.display = 'block' 
            checked = true
        } else {
            par.style.display = 'none'
            par2.style.display = 'none'
            par3.style.display = 'none'
            checked = false
        }


    })

    btn2.addEventListener('click', () => {
        
            let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            par.style.color = color;
            par2.style.color = color;
            par3.style.color = color;
        })

        btn3.addEventListener('click', () => {
            if (checked2 == false) {
                par.style.fontWeight = 'bold'; 
                par2.style.fontWeight = 'bold'; 
                par3.style.fontWeight = 'bold'; 
                checked2 = true;
            } else {
                par.style.fontWeight = 'normal';
                par2.style.fontWeight = 'normal';
                par3.style.fontWeight = 'normal';
                checked2 = false;
            }


        })

