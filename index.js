let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    triggerElement : ".small-note"
})
.setClassToggle(".small-note", "zap")
.addTo(controller); 


let controller1 = new ScrollMagic.Controller();
let scene1 = new ScrollMagic.Scene({
    triggerElement : ".project-outer"
})
.setClassToggle(".project-outer", "zap1")
.addTo(controller1);
