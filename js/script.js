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
let email = document.querySelector(".email"). textContent;
let message = document.querySelector(".message").textContent;

let nameInput= function(){
    document.querySelector("johnDoe").click(function(){
    let identity;
    document.getElementById("johnDoe").value=identity;
    console.log(typeof(identity));
    alert(`${identity} your message has been received. Will respond soon`)
    document.querySelector("contact").reset();
})}
nameInput();