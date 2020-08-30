const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ``;
            }else{
                link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7+0.7}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

const zoomImg = ()=>{
    const modal = document.querySelector('.modal');
    const previews = document.querySelectorAll('.gallery img');
    const fullImg = document.querySelector('.full-img');

    console.log(previews)

    previews.forEach((preview) => {
        preview.addEventListener('click', (e)=>{
            modal.classList.add('open');
            const imgSrc = e.target.getAttribute('src');
            fullImg.src = `${imgSrc}`;
            fullImg.classList.add('open');
        });
    });
    
    modal.addEventListener('click', (e)=>{
        if(e.target.classList.contains('modal')){
            modal.classList.remove("open");
        }
    });
}


navSlide();
zoomImg();