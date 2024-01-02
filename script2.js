let playSongs1=document.querySelector("#playSongs");
let seqSong11=document.querySelector("seqSong1");
let audioTag11=document.querySelector("#audioTag1");
let imgBtn11=document.querySelector("#imgBtn1");
let imgBtn__211=document.querySelector("#imgBtn__21");
currStat1="pause";
let playSongs2=document.querySelector("#playSongs");
let seqSong12=document.querySelector("seqSong2");
let audioTag12=document.querySelector("#audioTag2");
let imgBtn12=document.querySelector("#imgBtn2");
let imgBtn__212=document.querySelector("#imgBtn__22");
currStat2="pause";
let playSongs3=document.querySelector("#playSongs");
let seqSong13=document.querySelector("seqSong3");
let audioTag13=document.querySelector("#audioTag3");
let imgBtn13=document.querySelector("#imgBtn3");
let imgBtn__213=document.querySelector("#imgBtn__23");
currStat3="pause";
let playSongs4=document.querySelector("#playSongs");
let seqSong14=document.querySelector("seqSong4");
let audioTag14=document.querySelector("#audioTag4");
let imgBtn14=document.querySelector("#imgBtn4");
let imgBtn__214=document.querySelector("#imgBtn__24");
currStat4="pause";
let playSongs5=document.querySelector("#playSongs");
let seqSong15=document.querySelector("seqSong5");
let audioTag15=document.querySelector("#audioTag5");
let imgBtn15=document.querySelector("#imgBtn5");
let imgBtn__215=document.querySelector("#imgBtn__25");
currStat5="pause";
let playSongs6=document.querySelector("#playSongs");
let seqSong16=document.querySelector("seqSong6");
let audioTag16=document.querySelector("#audioTag6");
let imgBtn16=document.querySelector("#imgBtn6");
let imgBtn__216=document.querySelector("#imgBtn__26");
currStat6="pause";
let playSongs7=document.querySelector("#playSongs");
let seqSong17=document.querySelector("seqSong7");
let audioTag17=document.querySelector("#audioTag7");
let imgBtn17=document.querySelector("#imgBtn7");
let imgBtn__217=document.querySelector("#imgBtn__27");
currStat7="pause";
let playSongs8=document.querySelector("#playSongs");
let seqSong18=document.querySelector("seqSong8");
let audioTag18=document.querySelector("#audioTag8");
let imgBtn18=document.querySelector("#imgBtn8");
let imgBtn__218=document.querySelector("#imgBtn__28");
currStat8="pause";
let seekbar=document.querySelector("#seekbar");

imgBtn11.addEventListener("click", ()=>{
    if (currStat1==="pause"){
        audioTag11.play();
        currStat1="play";
        imgBtn11.style.zIndex="-3";
        imgBtn__211.style.zIndex="3";

        audioTag12.currentTime=0;
        audioTag13.currentTime=0;
        audioTag14.currentTime=0;
        audioTag15.currentTime=0;
        audioTag16.currentTime=0;
        audioTag17.currentTime=0;
        audioTag18.currentTime=0;


        audioTag12.pause();
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
        audioTag13.pause();
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
        audioTag14.pause();
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
        audioTag15.pause();
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
        audioTag16.pause();
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
        audioTag17.pause();
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
        audioTag18.pause();
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";

        currStat2="pause";
        currStat3="pause";
        currStat4="pause";
        currStat5="pause";
        currStat6="pause";
        currStat7="pause";
        currStat8="pause";


}
})
imgBtn__211.addEventListener("click", ()=>{
    if (currStat1==="play"){
        audioTag11.pause();
        currStat1="pause";
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";
        
}
})

imgBtn12.addEventListener("click", ()=>{
    if (currStat2==="pause"){
        audioTag12.play();
        currStat2="play";
        imgBtn12.style.zIndex="-3";
        imgBtn__212.style.zIndex="3";

        audioTag11.currentTime=0;
        audioTag13.currentTime=0;
        audioTag14.currentTime=0;
        audioTag15.currentTime=0;
        audioTag16.currentTime=0;
        audioTag17.currentTime=0;
        audioTag18.currentTime=0;
        
        audioTag11.pause();
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";
        audioTag13.pause();
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
        audioTag14.pause();
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
        audioTag15.pause();
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
        audioTag16.pause();
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
        audioTag17.pause();
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
        audioTag18.pause();
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";

        currStat1="pause";
        currStat3="pause";
        currStat4="pause";
        currStat5="pause";
        currStat6="pause";
        currStat7="pause";
        currStat8="pause";

}
})
imgBtn__212.addEventListener("click", ()=>{
    if (currStat2==="play"){
        audioTag12.pause();
        currStat2="pause";
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
}
})

imgBtn13.addEventListener("click", ()=>{
    if (currStat3==="pause"){
        audioTag13.play();
        currStat3="play";
        imgBtn13.style.zIndex="-3";
        imgBtn__213.style.zIndex="3";

        audioTag12.currentTime=0;
        audioTag11.currentTime=0;
        audioTag14.currentTime=0;
        audioTag15.currentTime=0;
        audioTag16.currentTime=0;
        audioTag17.currentTime=0;
        audioTag18.currentTime=0;

        audioTag12.pause();
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
        audioTag11.pause();
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";
        audioTag14.pause();
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
        audioTag15.pause();
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
        audioTag16.pause();
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
        audioTag17.pause();
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
        audioTag18.pause();
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";

        currStat2="pause";
        currStat1="pause";
        currStat4="pause";
        currStat5="pause";
        currStat6="pause";
        currStat7="pause";
        currStat8="pause";
}
})
imgBtn__213.addEventListener("click", ()=>{
    if (currStat3==="play"){
        audioTag13.pause();
        currStat3="pause";
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
}
})

imgBtn14.addEventListener("click", ()=>{
    if (currStat4==="pause"){
        audioTag14.play();
        currStat4="play";
        imgBtn14.style.zIndex="-3";
        imgBtn__214.style.zIndex="3";

        audioTag12.currentTime=0;
        audioTag13.currentTime=0;
        audioTag11.currentTime=0;
        audioTag15.currentTime=0;
        audioTag16.currentTime=0;
        audioTag17.currentTime=0;
        audioTag18.currentTime=0;

        audioTag12.pause();
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
        audioTag13.pause();
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
        audioTag11.pause();
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";
        audioTag15.pause();
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
        audioTag16.pause();
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
        audioTag17.pause();
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
        audioTag18.pause();
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";

        currStat2="pause";
        currStat3="pause";
        currStat1="pause";
        currStat5="pause";
        currStat6="pause";
        currStat7="pause";
        currStat8="pause";
}
})
imgBtn__214.addEventListener("click", ()=>{
    if (currStat4==="play"){
        audioTag14.pause();
        currStat4="pause";
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
}
})

imgBtn15.addEventListener("click", ()=>{
    if (currStat5==="pause"){
        audioTag15.play();
        currStat5="play";
        imgBtn15.style.zIndex="-3";
        imgBtn__215.style.zIndex="3";

        audioTag12.currentTime=0;
        audioTag13.currentTime=0;
        audioTag14.currentTime=0;
        audioTag11.currentTime=0;
        audioTag16.currentTime=0;
        audioTag17.currentTime=0;
        audioTag18.currentTime=0;
        
        audioTag12.pause();
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
        audioTag13.pause();
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
        audioTag14.pause();
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
        audioTag11.pause();
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";
        audioTag16.pause();
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
        audioTag17.pause();
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
        audioTag18.pause();
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";

        currStat2="pause";
        currStat3==="pause";
        currStat4="pause";
        currStat1="pause";
        currStat6="pause";
        currStat7="pause";
        currStat8="pause";
    }
})
imgBtn__215.addEventListener("click", ()=>{
    if (currStat5==="play"){
        audioTag15.pause();
        currStat5="pause";
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
}
})

imgBtn16.addEventListener("click", ()=>{
    if (currStat6==="pause"){
        audioTag16.play();
        currStat6="play";
        imgBtn16.style.zIndex="-3";
        imgBtn__216.style.zIndex="3";

        audioTag12.currentTime=0;
        audioTag13.currentTime=0;
        audioTag14.currentTime=0;
        audioTag15.currentTime=0;
        audioTag11.currentTime=0;
        audioTag17.currentTime=0;
        audioTag18.currentTime=0;

        audioTag12.pause();
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
        audioTag13.pause();
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
        audioTag14.pause();
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
        audioTag15.pause();
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
        audioTag11.pause();
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";
        audioTag17.pause();
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
        audioTag18.pause();
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";

        currStat2="pause";
        currStat3="pause";
        currStat4="pause";
        currStat5="pause";
        currStat1="pause";
        currStat7="pause";
        currStat8="pause";
    }
})
imgBtn__216.addEventListener("click", ()=>{
    if (currStat6==="play"){
        audioTag16.pause();
        currStat6="pause";
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
}
})

imgBtn17.addEventListener("click", ()=>{
    if (currStat7==="pause"){
        audioTag17.play();
        currStat7="play";
        imgBtn17.style.zIndex="-3";
        imgBtn__217.style.zIndex="3";

        audioTag12.currentTime=0;
        audioTag13.currentTime=0;
        audioTag14.currentTime=0;
        audioTag15.currentTime=0;
        audioTag16.currentTime=0;
        audioTag11.currentTime=0;
        audioTag18.currentTime=0;

        audioTag12.pause();
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
        audioTag13.pause();
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
        audioTag14.pause();
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
        audioTag15.pause();
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
        audioTag16.pause();
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
        audioTag11.pause();
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";
        audioTag18.pause();
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";

        currStat2="pause";
        currStat3="pause";
        currStat4="pause";
        currStat5="pause";
        currStat6="pause";
        currStat1="pause";
        currStat8="pause";
}
})
imgBtn__217.addEventListener("click", ()=>{
    if (currStat7==="play"){
        audioTag17.pause();
        currStat7="pause";
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
}
})

imgBtn18.addEventListener("click", ()=>{
    
    if (currStat8==="pause"){
        
        audioTag18.play();
        currStat8="play";
        imgBtn18.style.zIndex="-3";
        imgBtn__218.style.zIndex="3";
        
        audioTag12.currentTime=0;
        audioTag13.currentTime=0;
        audioTag14.currentTime=0;
        audioTag15.currentTime=0;
        audioTag16.currentTime=0;
        audioTag17.currentTime=0;
        audioTag11.currentTime=0;

        audioTag12.pause();
        imgBtn12.style.zIndex="3";
        imgBtn__212.style.zIndex="-3";
        audioTag13.pause();
        imgBtn13.style.zIndex="3";
        imgBtn__213.style.zIndex="-3";
        audioTag14.pause();
        imgBtn14.style.zIndex="3";
        imgBtn__214.style.zIndex="-3";
        audioTag15.pause();
        imgBtn15.style.zIndex="3";
        imgBtn__215.style.zIndex="-3";
        audioTag16.pause();
        imgBtn16.style.zIndex="3";
        imgBtn__216.style.zIndex="-3";
        audioTag17.pause();
        imgBtn17.style.zIndex="3";
        imgBtn__217.style.zIndex="-3";
        audioTag11.pause();
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";

        currStat2="pause";
        currStat3="pause";
        currStat4="pause";
        currStat5="pause";
        currStat6="pause";
        currStat7="pause";
        currStat1="pause";
    }
})
imgBtn__218.addEventListener("click", ()=>{
    if (currStat8==="play"){
        audioTag18.pause();
        currStat8="pause";
        imgBtn18.style.zIndex="3";
        imgBtn__218.style.zIndex="-3";
}
})

audioTag11.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag11.currentTime / audioTag11.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag11.currentTime = (seekbar.value / 100) * audioTag11.duration;
});


audioTag12.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag12.currentTime / audioTag12.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag12.currentTime = (seekbar.value / 100) * audioTag12.duration;
});

audioTag13.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag13.currentTime / audioTag13.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag13.currentTime = (seekbar.value / 100) * audioTag13.duration;
});


audioTag14.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag14.currentTime / audioTag14.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag14.currentTime = (seekbar.value / 100) * audioTag14.duration;
});

audioTag15.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag15.currentTime / audioTag15.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag15.currentTime = (seekbar.value / 100) * audioTag15.duration;
});

audioTag16.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag16.currentTime / audioTag16.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag16.currentTime = (seekbar.value / 100) * audioTag16.duration;
});

audioTag17.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag17.currentTime / audioTag17.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag17.currentTime = (seekbar.value / 100) * audioTag17.duration;
});

audioTag18.addEventListener("timeupdate", () => {
    seekbar.value = (audioTag18.currentTime / audioTag18.duration) * 100;
});

seekbar.addEventListener("input", () => {
    audioTag18.currentTime = (seekbar.value / 100) * audioTag18.duration;
});

audioTag11.addEventListener('ended', () => {
        audioTag12.play();
        currStat1 = "pause";
        currStat2="play";
        imgBtn12.style.zIndex="-3";
        imgBtn__212.style.zIndex="3";
        imgBtn11.style.zIndex="3";
        imgBtn__211.style.zIndex="-3";

});
audioTag12.addEventListener('ended', () => {
    audioTag13.play();
    currStat2 = "pause";
    currStat3="play";
    imgBtn13.style.zIndex="-3";
    imgBtn__213.style.zIndex="3";
    imgBtn12.style.zIndex="3";
    imgBtn__212.style.zIndex="-3";

});
audioTag13.addEventListener('ended', () => {
    audioTag14.play();
    currStat3 = "pause";
    currStat4="play";
    imgBtn14.style.zIndex="-3";
    imgBtn__214.style.zIndex="3";
    imgBtn13.style.zIndex="3";
    imgBtn__213.style.zIndex="-3";

});
audioTag14.addEventListener('ended', () => {
    audioTag15.play();
    currStat4 = "pause";
    currStat5="play";
    imgBtn15.style.zIndex="-3";
    imgBtn__215.style.zIndex="3";
    imgBtn14.style.zIndex="3";
    imgBtn__214.style.zIndex="-3";

});
audioTag15.addEventListener('ended', () => {
    audioTag16.play();
    currStat5 = "pause";
    currStat6="play";
    imgBtn16.style.zIndex="-3";
    imgBtn__216.style.zIndex="3";
    imgBtn15.style.zIndex="3";
    imgBtn__215.style.zIndex="-3";

});
audioTag16.addEventListener('ended', () => {
    audioTag17.play();
    currStat6 = "pause";
    currStat7="play";
    imgBtn17.style.zIndex="-3";
    imgBtn__217.style.zIndex="3";
    imgBtn16.style.zIndex="3";
    imgBtn__216.style.zIndex="-3";

});
audioTag17.addEventListener('ended', () => {
    audioTag18.play();
    currStat7 = "pause";
    currStat8="play";
    imgBtn18.style.zIndex="-3";
    imgBtn__218.style.zIndex="3";
    imgBtn17.style.zIndex="3";
    imgBtn__217.style.zIndex="-3";

});
audioTag18.addEventListener('ended', () => {
    audioTag11.play();
    currStat8 = "pause";
    currStat1="play";
    imgBtn11.style.zIndex="-3";
    imgBtn__211.style.zIndex="3";
    imgBtn18.style.zIndex="3";
    imgBtn__218.style.zIndex="-3";

});