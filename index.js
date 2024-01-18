// nav secton
let nav_section = document.getElementById("nav_section")
let parent = document.querySelector(".parent-container")
let body_section = document.getElementById("body_section")
// menu button selection
let item = document.querySelectorAll(".item")

let menu_button = document.querySelector("#menu_button")
menu_button.addEventListener("click", function(){

    if (nav_section.style.display === "none" || nav_section.style.display === "") {
        nav_section.style.display = "grid";
    } else {
        nav_section.style.display = "none";
    }
    item.forEach( (e) => {
        if(e.style.display == "none" || e.style.display == ""){
            e.style.display = "flex"
        }else{
            e.style.display = "none"
        }
    })

    body_section.addEventListener("click", (event) => {
        if(event.currentTarget.id == "body_section"){
            nav_section.style.display = "none"
        }
        item.forEach( (e) => {
            e.style.display = "none"
        })
    })
})


nav_section.addEventListener("click", function(data){
    if(data.target.className == "item"){
        gettingId = data.target.id
        contentSelected = document.getElementById(gettingId)
        let shown_data = contentSelected.getAttribute("name")

        let body_content = document.querySelectorAll(".content")
        body_content.forEach( (value) => {
            value.style.display = "none"
        })

        document.getElementById(shown_data)
        .style.display = "flex"
    }

})

// function updateWindowSize() {
//     var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//     var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

//     console.log('Window Width: ' + windowWidth + 'px');
//     console.log('Window Height: ' + windowHeight + 'px');
//   }

//   // Initial call to display window size
//   updateWindowSize();

  // Add a resize event listener to update the size when the window is resized
  window.addEventListener('resize', () => {
    if(window.innerWidth >= 600){
        nav_section.style.display = "grid"
        item.forEach( (e) => {
            e.style.display = "flex"
        }) 
    }
  });