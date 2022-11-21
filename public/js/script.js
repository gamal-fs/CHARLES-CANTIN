window.onload = () => {

  let filters = document.querySelectorAll(".filtres li");


  for(let filter of filters) {
    filter.addEventListener("click",function () {
      let tag = this.id;


      let images = document.querySelectorAll(".gallery img");

      for(let image of images) {
        image.classList.replace("active", "inactive");

        if(tag in image.dataset || tag === "*") {
          image.classList.replace("inactive", "active")
        }
      }

    });
  };

}