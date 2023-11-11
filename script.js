var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+"px"
    crsr.style.top =dets.y+"px"
    blur.style.left=dets.x+ -150+"px"
    blur.style.top =dets.y+ -150+"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="2px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11e "
        crsr.style.backgroundColor="95c11e"
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    delay:0.2,
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -5%",
        end:"bop -5.5%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -2%",
        end:"top -80%",
        scrub:1
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#about-us",
        scrolleer:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})

gsap.from("#colon1",{
    y:-80,
    x:-80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 47%",
        scrub:5

    }
})

gsap.from("#colon2",{
    y:80,
    x:80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 47%",
        scrub:5

    }
})

gsap.from("#page4 h3",{
    y:-50,
    scrollTrigger:{
        trigger:"#page4 h3",
        scroller:"body",
 
        start:"top 75%",
        end:"top 70%",
        scrub:1.5

    }
})