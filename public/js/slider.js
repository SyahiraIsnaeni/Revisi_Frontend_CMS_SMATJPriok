const sliderElement = document.getElementById("sliderPrestasiLarge");
const totalSlides = sliderElement.childElementCount;
let currentSlideID = totalSlides - 1;

function nextPrestasiLarge() {
  if (currentSlideID > 1) {
    currentSlideID--;
  }
  showSlidePrestasi3();
}

function prevPrestasiLarge() {
  if (currentSlideID < totalSlides - 1) {
    currentSlideID++;
    showSlidePrestasi3();
  }
}

function showSlidePrestasi3() {
  const slides = sliderElement.getElementsByTagName("li");
  const textH1 = sliderElement.getElementsByTagName("h1");
  const textP = sliderElement.getElementsByTagName("p");
  const high = sliderElement.getElementsByTagName("img");

  for (let index = 0; index < totalSlides; index++) {
    const element = slides[index];
    const anchorTag = slides[index].querySelector("a"); // Mengambil tag <a> di dalam slide

    if (index === currentSlideID) {
      // Menampilkan slide saat ini
      slides[index].classList.remove("hidden");
      slides[index].classList.remove(
        "w-[240px]",
        "xl:w-[280px]",
        "opacity-55",
        "mt-5",
        "lg:mt-6",
        "xl:mt-7"
      );
      slides[index].classList.add(
        "w-[330px]",
        "xl:w-[380px]",
        "opacity-100",
        "mt-0"
      );
      textH1[index].classList.remove(
        "text-[13px]",
        "lg:text-sm",
        "xl:text-[15px]"
      );
      textP[index].classList.remove(
        "text-[11px]",
        "lg:text-xs",
        "xl:text-sm",
        "mt-1",
        "lg:mt-1.5"
      );
      high[index].classList.remove("h-[120px]", "lg:h-[140px]", "xl:h-[180px]");
      textH1[index].classList.add(
        "text-sm",
        "lg:text-[15px]",
        "xl:text-[17px]"
      );
      textP[index].classList.add(
        "text-xs",
        "lg:text-[13px]",
        "xl:text-[15px]",
        "mt-1",
        "lg:mt-1.5",
        "xl:mt-2"
      );
      high[index].classList.add("h-[170px]", "lg:h-[190px]", "xl:h-[230px]");

      // Menghilangkan kemampuan klik pada tag <a>
      anchorTag.setAttribute("href", "#");
    } else if (index === currentSlideID - 1) {
      // Menampilkan slide sebelumnya
      slides[index].classList.remove("hidden");
      slides[index].classList.remove(
        "w-[330px]",
        "xl:w-[380px]",
        "opacity-100",
        "mt-0"
      );
      slides[index].classList.add(
        "w-[240px]",
        "xl:w-[280px]",
        "opacity-55",
        "mt-5",
        "lg:mt-6",
        "xl:mt-7"
      );
      textH1[index].classList.remove(
        "text-sm",
        "lg:text-[15px]",
        "xl:text-[17px]"
      );
      textP[index].classList.remove(
        "text-xs",
        "lg:text-[13px]",
        "xl:text-[15px]",
        "mt-1",
        "lg:mt-1.5",
        "xl:mt-2"
      );
      high[index].classList.remove("h-[170px]", "lg:h-[190px]", "xl:h-[230px]");
      textH1[index].classList.add(
        "text-[13px]",
        "lg:text-sm",
        "xl:text-[15px]"
      );
      textP[index].classList.add(
        "text-[11px]",
        "lg:text-xs",
        "xl:text-sm",
        "mt-1",
        "lg:mt-1.5"
      );
      high[index].classList.add("h-[120px]", "lg:h-[140px]", "xl:h-[180px]");

      // Menonaktifkan tag <a>
      anchorTag.removeAttribute("href");
    } else {
      // Menyembunyikan slide lainnya
      slides[index].classList.add("hidden");
    }
  }
}

showSlidePrestasi3();
