function getName(){
    var jina = function(){
        var message= document.getElementById("text1").value;
        var identity = document.getElementById("johnDoe").value;
        var nameTag=identity;
        var emailScript =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var email= document.getElementById("email").value;
        if(nameTag=="" || nameTag==" "){
            alert(`Please enter your name`);
            document.querySelector("#johnDoe").style.border="4px solid red";
        }
        else if(email==false || email==null){
            alert(`${identity} please add your email address.`); 
            document.getElementById("email").style.border="4px solid red";
        }
        else if(email.match(emailScript)==false || email.match(emailScript)==null) {
            alert(`${identity} your email is Not Valid`);
            document.getElementById("email").style.border="4px solid red";
            document.getElementById("email").value="";
            
        }
        else if (message==""|| message==" "){
            alert(`${identity} please enter a message to relay`);
            document.querySelector("#text1").style.border="4px solid red";
        }
        else if (email.match(emailScript) && message !="" && message !=" " && nameTag !="" && nameTag !=" "){
            document.querySelector("#email").style.border="4px solid green";
            alert(`${nameTag} we have received your message. Thank you for reaching out to us.` ,false); 
        }
        // document.querySelector('form[name="contact"]').reset();

    }
    jina();
}


$(document).ready(function(){
    $(".designA").click(function(){
        $(".designA").hide();
        $(".designB").toggle();
    })
})
$(document).ready(function(){
    $(".designB").click(function(){
        $(".designB").hide();
        $(".designA").toggle();
    })
})
$(document).ready(function(){
    $("#devA").click(function(){
        $("#devA").hide();
        $("#devB").toggle();
        })
    }
)
$(document).ready(function(){
    $("#devB").click(function(){
        $("#devB").hide();
        $("#devA").toggle();
        })
    }
)
$(document).ready(function(){
    $(".prodA").click(function(){
        $(".prodA").hide();
        $(".prodB").toggle();
    })
})
$(document).ready(function(){
    $(".prodB").click(function(){
        $(".prodB").hide();
        $(".prodA").toggle();
    })
})
//portfolio

// let hoverBird=function(){
//     $(".a1>img").hover(function(){
//         $(".alp").show();
//     })
// }
// hoverBird();





// let email = document.querySelector(".email"). textContent;
// let message = document.querySelector(".message").textContent;

// function getName(){
//     var identity = document.getElementById("johnDoe").value;
//     var nameTag=identity;
//     alert(`${nameTag} we have received your message. Thank you for reaching out to us.`);
//     document.querySelector("contact").reset();
// }
// getName();