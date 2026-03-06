window.onscroll = function () {
  scrollFunction();
};

const header = document.getElementById("main-header");
const sticky = header.offsetTop; // 헤더의 초기 위치값 저장

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

