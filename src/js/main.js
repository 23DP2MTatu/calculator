const NUM_BUTTONS = document.querySelectorAll(".num-buttons")
const SYM_BUTTONS = document.querySelectorAll(".buttons-sym")
const CLR_BUTTON = document.getElementById("button-clr")
const RAV_BUTTON = document.getElementById("button-rav")

const SHOW_TAB = document.getElementById("show-tab")

let blacklist = ["*","/","+","-"]
let count = ""



NUM_BUTTONS.forEach(function(button) {
    button.addEventListener("click",function() {
        if (count == "" || count == "error") {
            count = button.innerHTML
        } else {
            count += button.innerHTML
        } 

        SHOW_TAB.innerHTML = count 
    })
})

CLR_BUTTON.addEventListener("click",function() {
    count = ""
    SHOW_TAB.innerHTML = count
})

SYM_BUTTONS.forEach(function(button) {
    button.addEventListener("click",function() {
        if (blacklist.includes(count.charAt(count.length-1)) != true && count != "error") {
            count += button.innerHTML
            SHOW_TAB.innerHTML = count
        } else if(count != "error") {
            count = count.slice(0,-1) + button.innerHTML
            SHOW_TAB.innerHTML = count
        }
    })
})

RAV_BUTTON.addEventListener("click",function() {
    count = eval(count)
    if (count == Infinity) {
        count = "error"
    } else if (typeof(count) == typeof(1)) {

    }
    SHOW_TAB.innerHTML = Math.round(count*10000000000)/10000000000
})