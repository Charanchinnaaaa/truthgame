$(".btn").click(function(){
    
})
$("img").animate({
    opacity:0.5
}).animate({
    opacity:1.0
}).animate({
    opacity:0.5
}).animate({
    opacity:1.0
}).animate({
    opacity:0.5
}).animate({
    opacity:1.0
})
$("button").click(function(){
    //audio
    var music=new Audio("tom-1.mp3");
    music.play();
})

$(".reveal").click(function(){
    var noOfPlayers=prompt("Enter the number of players:");
    var list=[];
    var i=1;
    var random=Math.floor(Math.random()*noOfPlayers)+1;
    while(i<=noOfPlayers){
        list.push(prompt("Enter the player name"));
        i++;
    }
    document.querySelector("h4").textContent=list[random];
    
   
})
$(".revealQuestion").click(function(){
    var listQuestion=["When was the last time you lied?","When was the last time you cried?",
    "What's something you're glad your mum doesn't know about you?","Who was your first celebrity crush?",
    "What's the biggest mistake you've ever made?","Who would you like to kiss in this room?","Have you ever peed in the shower"
    ,"What's the worst date you've been on?","What's your biggest regret?","Where's the weirdest place you've had sex?"
];
    var random1=Math.floor(Math.random()*listQuestion.length)+1;
    document.querySelector("p").textContent=listQuestion[random1];
})








 