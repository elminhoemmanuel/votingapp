// Headboy
var vote1_hb=0;
var vote2_hb=0;
var vote3_hb=0;

$(".vote1-hb").click(function(){
    vote1_hb++;
    hideDiv("headboy");        
})

$(".vote2-hb").click(function(){
    vote2_hb++;
    hideDiv("headboy");    
})

$(".vote3-hb").click(function(){
    vote3_hb++;
    hideDiv("headboy");   
})

// check headboy
$(".checkwinner-hb").click(function(){
    console.log("Headboy category : "+"Yakub Mustapha has " +vote1_hb+ "votes"+","+
    "Duru Ebuka has " +vote2_hb+ "votes"+","+"Kalgo Sani has " +vote3_hb+ "votes");
})

var headboyResult = "Headboy category : "+"Yakub Mustapha has " +vote1_hb+ "votes"+","+
"Duru Ebuka has " +vote2_hb+ "votes"+","+"Kalgo Sani has " +vote3_hb+ "votes";


// Headgirl
var vote1_hg=0;
var vote2_hg=0;

$(".vote1-hg").click(function(){
    vote1_hg++;
    hideDiv("headgirl");       
})

$(".vote2-hg").click(function(){
    vote2_hg++;
    hideDiv("headgirl");
    
    
})

$(".checkwinner-hg").click(function(){
    console.log("Headgirl category : "+"Hussaina has " +vote1_hg+ "votes"+","+
    "Maisarah has " +vote2_hg+ "votes");
})

var headgirlResult = "Headgirl category : "+"Hussaina has " +vote1_hg+ "votes"+","+
"Maisarah has " +vote2_hg+ "votes";

// female compound prefect
var vote1_fcm=0;
var vote2_fcm=0;

$(".vote1-fcm").click(function(){
    vote1_fcm++;
    hideDiv("fem-cmpd");       
})

$(".vote2-fcm").click(function(){
    vote2_fcm++;
    hideDiv("fem-cmpd");  
})

$(".checkwinner-fcm").click(function(){
    console.log("Female Compound category : "+"Ize has " +vote1_fcm+ "votes"+","+
    "Firdausi has " +vote2_fcm+ "votes");
})

var fcmResult = "Female Compound category : "+"Ize has " +vote1_fcm+ "votes"+","+
"Firdausi has " +vote2_fcm+ "votes";


// male compound prefect
var vote1_mcm=0;
var vote2_mcm=0;
var vote3_mcm=0;

$(".vote1-mcm").click(function(){
    vote1_mcm++;
    hideDiv("male-cmpd");       
})

$(".vote2-mcm").click(function(){
    vote2_mcm++;
    hideDiv("male-cmpd");  
})

$(".vote3-mcm").click(function(){
    vote3_mcm++;
    hideDiv("male-cmpd");  
})


$(".checkwinner-mcm").click(function(){
    console.log("Male Compound category : "+"Huzaifa has " +vote1_mcm+ "votes"+","+
    "Timilehin has " +vote2_mcm+ "votes" + ","+"Adams has " +vote3_mcm+ "votes");
})

var mcmResult = "Male Compound category : "+"Huzaifa has " +vote1_mcm+ "votes"+","+
"Timilehin has " +vote2_mcm+ "votes" + ","+"Adams has " +vote3_mcm+ "votes";


// male social prefect
var vote1_msp=0;
var vote2_msp=0;

$(".vote1-msp").click(function(){
    vote1_msp++;
    hideDiv("male-soc");       
})

$(".vote2-msp").click(function(){
    vote2_msp++;
    hideDiv("male-soc");  
})


$(".checkwinner-msp").click(function(){
    console.log("Male Social category : "+"Khalil has " +vote1_msp+ "votes"+","+
    "Hanif has " +vote2_msp+ "votes");
})

var mspResult = "Male Social category : "+"Khalil has " +vote1_msp+ "votes"+","+
"Hanif has " +vote2_msp+ "votes";


// female sport prefect
var vote1_fsp=0;
var vote2_fsp=0;

$(".vote1-fsp").click(function(){
    vote1_fsp++;
    hideDiv("fem-sport");
    setTimeout(function(){
        showDiv("headboy");
        showDiv("headgirl"); 
        showDiv("fem-cmpd");
        showDiv("male-cmpd");
        showDiv("male-soc");
        showDiv("fem-sport");
    }, 6000);            
})

$(".vote2-fsp").click(function(){
    vote2_fsp++;
    hideDiv("fem-sport"); 
    setTimeout(function(){
        showDiv("headboy");
        showDiv("headgirl"); 
        showDiv("fem-cmpd");
        showDiv("male-cmpd");
        showDiv("male-soc");
        showDiv("fem-sport");
    }, 6000); 
})


$(".checkwinner-fsp").click(function(){
    console.log("Female Sport category : "+"Halima has " +vote1_fsp+ "votes"+","+
    "Angel has " +vote2_fsp+ "votes");
})

var fspResult = "Female Sport category : "+"Halima has " +vote1_fsp+ "votes"+","+
"Angel has " +vote2_fsp+ "votes";

var results = [headboyResult,headgirlResult,fcmResult,mcmResult,mspResult,fspResult];

// display result
// reset
$(".reset-btn").click(function(){
    $(".result-text").text(" Click on the check button for all categories and open Web console to see result breakdown")
    $(".result-holder").show();
})

// functions
function hideDiv(givenClass){
    document.getElementsByClassName(givenClass)[0].style.display="none";
}

function showDiv(givenClass){
    document.getElementsByClassName(givenClass)[0].style.display="block";
}



