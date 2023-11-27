console.log("sono collegato");
let h = document.querySelector("div");
console.log(h);
window.addEventListener("scroll", function () {
	if (this.scrollY > 480) {
		h.classList.add("bianco");
	} else {
		h.classList.remove("bianco");
	}
});
let vettG=document.querySelectorAll("g");

let rotazioneM= () => {
        for(let i=0;i<300;i++){
        let rand=Math.floor(Math.random()*(vettG.length-3));
        let vettGI=vettG[rand];
        let x=vettGI.outerHTML;
        let y=x.includes(`opacity="1"`);

       
        if(vettG[rand]===vettG[0]||vettG[rand]===vettG[1]){
            rotazioneM();
        }
        else{   if(y===true){
                    console.log(y)
                    setInterval(vettG[rand].setAttribute("opacity",1),700);
                    vettG[rand-1].setAttribute("opacity",0);

            }else {
                setInterval(vettG[rand].setAttribute("opacity",0),500);
                vettG[rand+3].setAttribute("opacity",1);
            }    
    }
}
}
let timer=setInterval(rotazioneM,800);