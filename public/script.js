


const socket = io("/");
var peer  = new Peer(undefined, {
    path: "/peerjs", 
    host : "/", 
    port : "443"
})
const user = prompt("Enter your name")
$(function(){
    $("#show_chat").click(function(){
        $(".left-window").css("display","none")
        $(".right-window").css("display","block")
        $(".header_back").css("display","block")
    })
    $(".header_back").click(function(){
        $(".left-window").css("display","block")
        $(".right-window").css("display","none")
        $(".header_back").css("display","none")
    })
    $("#send").click(function(){
        if($("#chat_message").val().length!==0){
            var msg = user + $("#chat_message").val()
            socket.emit("message",msg);
        }
    })
})

peer.on("open", (id) => {
    socket.emit("join-room", ROOM_ID, id, user)
})
socket.on("createmessage",(message)=>{
    $(".messages").append(` <div class="message"> <span>${message}</span> </div> `)
})