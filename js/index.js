const gnb = document.querySelector(".gnb");
const subMenus = document.querySelectorAll(".sub_menu");
const gnbBg = document.querySelector(".gnb_bg");

// 마우스 올렸을 때
gnb.addEventListener("mouseenter", () => {
  const targetHeight = "305px"; // 펼쳐질 높이 설정

  gnbBg.style.height = targetHeight;
  subMenus.forEach((menu) => {
    menu.style.height = targetHeight;
  });
});

// 마우스 나갔을 때
gnb.addEventListener("mouseleave", () => {
  gnbBg.style.height = "0";
  subMenus.forEach((menu) => {
    menu.style.height = "0";
  });
});




//Main swiper slider
new Swiper(".main-slide .swiper", {
  direction: "horizontal",
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    // "slide .swiper-next" 이름만 수정
    prevEl: ".main-slide .swiper-prev", // 이전 버튼 선택자
    nextEl: ".main-slide .swiper-next", // 다음 버튼 선택자
  },
});




// 베스트 아이템 슬라이드
new Swiper(".information-card .swiper", {
  direction: "horizontal",
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".information-card .swiper-prev", // 이전 버튼 선택자
    nextEl: ".information-card .swiper-next", // 다음 버튼 선택자
  },
});






//뱃지
const badgeEl = document.querySelector(".badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    //console.log('scroll!');
    //console.log(window.scrollY);
    if (window.scrollY > 700) {
      //배지 숨기기 (500 이거 수정!!)
      //badgeEl.style.display = 'none';
      //gsap문법  gsap.to(요소, 지속시간초단위, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 상단으로 스크롤 버튼 보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      //배지 보이기
      //badgeEl.style.display = 'block';
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단으로 스크롤 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
});



//Scroll Magic 등장------------------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
// 등장하는 섹션에는 scroll-spy 이걸 다 설정!!
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8,
  })
    //.setClassToggle(토글할요소, 넣었다뺄 Class이름)
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
