Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", () =>{
  const app = new Vue({
    el: "#root",
    data: {
      message: "Hello World!",
      urlImg: "http://boolean.careers/images/misc/logo.png",
      altImg: "Boolean",
      classContainer: "container",
      classTitle: "title",
      classImg: "imgStyle",

    }
  })
});
