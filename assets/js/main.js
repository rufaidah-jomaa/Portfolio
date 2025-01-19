const navbar = document.querySelector('.navbar')
const headerContentSpan=document.querySelector('.header-content span')
window.addEventListener('scroll',function(){
if (window.scrollY > headerContentSpan.offsetTop){
    navbar.style.backgroundColor="#fff";
}else{
    navbar.style.backgroundColor="transparent";
}
})

const loading = document.querySelector('.loading')
window.addEventListener('load',function(){
    setTimeout(function(){
    loading.classList.add('opacity-0','invisible');
    document.body.style.overflow='auto';//عشان لما تخلص مدة اللودنج يرجع السكرول
    },1000)
})

const scrollToTopBtn=document.querySelector('.scroll-to-top')
window.onscroll = () => {
    if (window.scrollY > 500) { // If the scroll exceeds 500 pixels
      scrollToTopBtn.style.opacity=1;
      scrollToTopBtn.style.visibility = "visible";
      scrollToTopBtn.style.transition='opacity 2s';
    } else {
        scrollToTopBtn.style.opacity=0;
      scrollToTopBtn.style.visibility = "hidden";
      scrollToTopBtn.style.transition = "opacity 1s";
    }
  };
  // when click top button
  scrollToTopBtn.addEventListener("click", () => { 
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const navLinks=document.querySelectorAll(".nav-link")
  for(let i = 0; i<navLinks.length ;i++){
    navLinks[i].addEventListener('click',function(e){
     e.preventDefault();
    // document.querySelector('.nav-link.active').classList.remove('active'); طريقة اخرى لازالة كلاس اكتيف
    navLinks.forEach((navLink)=>{
      navLink.classList.remove('active');
    })
     navLinks[i].classList.add('active');
     console.log(this);
     let currentId=this.getAttribute('href');//بنستخدم this مش e.target 
     console.log(currentId);
     let targetSection= document.querySelector(currentId);
     console.log(targetSection);
     window.scrollTo({ top: targetSection.offsetTop-20, behavior: "smooth" });
    })
  }
  