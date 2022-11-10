const allRatingStars = document.querySelectorAll('.rating_star');
console.log(allRatingStars);



allRatingStars.forEach( (star, i) =>{
    let selectedStar = i + 1;
    star.onclick = () => {
        allRatingStars.forEach( (star, j)=> {
            if (selectedStar >= j + 1) {
                star.classList.replace('fa-circle', 'fa-star')
                star.classList.replace('fa-3sm','fa-xl')
                star.style.color = 'orange';
                star.style.opacity = 1;
                
            }else{
                star.classList.replace('fa-star', 'fa-star-half')
                star.style.color = 'gray';
                if (star.classList.contains('fa-star-half')) {
                    gsap.to(".fa-star-half",{y: 40, rotation:110});
                    star.style.opacity = 0;
                    setTimeout(stateChange,1000,star)                    
                }
            }
        })
    }

        star.onmouseover = () => {

            allRatingStars.forEach( (star, j)=> {
                if (star.classList.contains('fa-circle')) {
                    if (selectedStar >= j + 1) {
                        star.style.color = 'orange'
                        star.classList.replace('fa-sm', 'fa-3sm')
                        star.style.opacity = 0.8;
                    }
                }
            })
        }

        star.onmouseout = () => {

            allRatingStars.forEach( (star, j)=> {
                if (star.classList.contains('fa-circle')) {
                    if (selectedStar >= j + 1) {
                        star.style.color = 'gray'
                        star.classList.replace('fa-3sm', 'fa-sm')
                        star.style.opacity = 0.5;
                    }
                }
            })
        }
    
    
})

const stateChange = (a) =>{
    a.classList.replace('fa-star-half','fa-circle')
    a.style.opacity = 0.5
    a.classList.replace('fa-xl','fa-3sm')
    a.style.transition = '0s'
    a.style.transform = 'translateY(0px)'
    setTimeout(() =>{a.style.transition = '0.4s'} , 1000 )
}
