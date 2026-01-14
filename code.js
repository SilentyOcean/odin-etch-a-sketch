let container = document.querySelector("#container");
let resizeButton = document.querySelector("#resizeButton");

function ask_size(){
    let size = prompt("What size do you want?");
    if(size > 100){
        ask_size();
    }
    return size;
}

resizeButton.addEventListener("click", () => {
    console.log("clicked");
    let size = ask_size();
    
    grid_generate(size);
});







function grid_generate(side){
    container.textContent = '';

    container.style.width = `${40 * side}px`;
    container.style.height = `${40 * side}px`;
 
    for(let i = 0; i < side * side; i++){
        let grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
        }
    
};






grid_generate(16);



document.querySelectorAll(".grid").forEach(grid => {
    grid.addEventListener("mouseenter", ()=>{
        grid.style.backgroundColor = "blue";
    })
    
})

container.addEventListener("mouseleave", ()=>{
    document.querySelectorAll(".grid").forEach(grid =>{
        grid.style.backgroundColor = "red";
    });
})
