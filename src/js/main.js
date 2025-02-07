const NUM_BUTTONS = document.querySelectorAll(".num-buttons")
const SYM_BUTTONS = document.querySelectorAll(".buttons-sym")
const CLR_BUTTON = document.getElementById("button-clr")
const RAV_BUTTON = document.getElementById("button-rav")

const SHOW_TAB = document.getElementById("show-tab")

let blacklist = ["*","/","+","-"]
let count = "0"



NUM_BUTTONS.forEach(function(button) {
    button.addEventListener("click",function() {
        if (count == "Error" || count == 0) {
            count = button.innerHTML
        } else {
            count += button.innerHTML
        } 

        SHOW_TAB.innerHTML = count 
    })
})

CLR_BUTTON.addEventListener("click",function() {
    count = "0"
    SHOW_TAB.innerHTML = count
})

SYM_BUTTONS.forEach(function(button) {
    button.addEventListener("click",function() {
        if (blacklist.includes(count.charAt(count.length-1)) != true && count != "Error") {
            count += button.innerHTML
            SHOW_TAB.innerHTML = count
        } else if(count != "Error") {
            count = count.slice(0,-1) + button.innerHTML
            SHOW_TAB.innerHTML = count
        }
    })
})

RAV_BUTTON.addEventListener("click",function() {
    count = eval(count)
    if (count == Infinity) {
        count = "Error"
        SHOW_TAB.innerHTML = count
    } else if (count == undefined) {
        SHOW_TAB.innerHTML = 0
    } else {
        SHOW_TAB.innerHTML = Math.round(count*10000000000)/10000000000
    }
    count = String(count)

    if(count == 1488) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
})