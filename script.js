const cursormove=()=>{
    const cursor = document.querySelector(".cursor");
const page1Con = document.querySelector(".page1-content");

page1Con.addEventListener("mousemove",(dets)=>{
         gsap.to(cursor,{
            x:dets.clientX,
            y:dets.clientY,
         })
    console.log(dets)
})

page1Con.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    })
})
page1Con.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0,
    })
})
};

cursormove();


const page2loco=()=>{
    
}


const hrhover= ()=>{
const hr = document.querySelectorAll(".top hr");
const h1 = document.querySelectorAll(".top");

console.clear(); // Start with a clean console on refesh

h1.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
      gsap.fromTo(hr,{width:"-100%",
        ease: "power3.out",
        duration:1,
      },{ duration: 1, width: "100%" })
});
    e.addEventListener("mouseleave",()=>{
        gsap.fromTo(hr,{width:"-80%",
            ease:"power3.out",
            duration:1,
        },{ duration: 1, width: "100%" })
});

})



}
hrhover()

const swiperfun=()=>{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
            autoplay:{
                delay:2500,
                disableOnInteraction:true,
            }
      });
}
swiperfun();


const loader=()=>{
    var tl =gsap.timeline();
    tl.from(".loader h3",{
        x:50,
        opacity:0,
        duration:1,
        stagger:0.2,
    })
    tl.to(".loader h3",{
        x:-50,
        opacity:0,
        duration:1,
        stagger:0.2,
    })
    tl.to(".loader",{
        opacity:0,
        duration:1,
    })
    tl.to(".loader",{
       display:"none",
    })
    tl.from(".page1-content h1 span",{
        y:50,
        opacity:0,
        stagger:0.1,
        duration:0.5,
        delay:-0.5,
        
    })
}
loader()