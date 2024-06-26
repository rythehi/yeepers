console.log('linked!!');
function reloadChat(channel1) {
    var chatContainer = document.getElementById('chat');
    var tlkioChat = document.getElementById('tlkio');
    
    // Remove the existing iframe
    var iframes = tlkioChat.getElementsByTagName('iframe');
    if (iframes.length > 0) {
        tlkioChat.removeChild(iframes[0]);
    }
    
    // Create a new iframe element
    const tlkio = document.createElement('iframe');
    tlkio.src = '//embed.tlk.io/' + channel1 + '?theme=theme--night';
    tlkio.height = '100%';
    tlkio.width = '100%';
    tlkioChat.appendChild(tlkio);
    
    // Remove the existing script
    var script1 = document.getElementById('script');
    script1.remove();
    
    // Create a new script element to load the embed.js again
    var script = document.createElement('script');
    script.id = 'script';
    script.async = true;
    script.src = 'https://tlk.io/embed.js';
    script.type = 'text/javascript';
    
    // Append the script element to the chat container
    chatContainer.appendChild(script);
    
    // Update data-channel attribute of tlkioChat
    tlkioChat.setAttribute('data-channel', channel1);

}
function newChat(channel2) {
    addchat(channel2)
    addlocal(channel2)
    var chatContainer = document.getElementById('chat');
    var tlkioChat = document.getElementById('tlkio');
    
    // Remove the existing iframe
    var iframes = tlkioChat.getElementsByTagName('iframe');
    if (iframes.length > 0) {
        tlkioChat.removeChild(iframes[0]);
    }
    
    // Create a new iframe element
    const tlkio = document.createElement('iframe');
    tlkio.src = '//embed.tlk.io/' + channel2 + '?theme=theme--night';
    tlkio.height = '100%';
    tlkio.width = '100%';
    tlkioChat.appendChild(tlkio);
    
    // Remove the existing script
    var script1 = document.getElementById('script');
    script1.remove();
    
    // Create a new script element to load the embed.js again
    var script = document.createElement('script');
    script.id = 'script';
    script.async = true;
    script.src = 'https://tlk.io/embed.js';
    script.type = 'text/javascript';
    
    // Append the script element to the chat container
    chatContainer.appendChild(script);
    
    // Update data-channel attribute of tlkioChat
    tlkioChat.setAttribute('data-channel', channel2);

}
var divcount = 1;
function addchat(channel){
    const icons = document.getElementById('icons');
    const div = document.createElement('div');
    const center = document.createElement('center');
    const p = document.createElement('p');
    div.id = divcount;
    div.setAttribute('class', 'subicon1');
    div.setAttribute('onclick', "reloadChat(" + '"' + channel + '"' + ")");
    icons.appendChild(div);
    div.appendChild(center);
    p.textContent = channel;
    center.appendChild(p);
    const button = document.createElement('button');
    button.textContent = 'X';
    button.id = divcount + 'b'
    button.setAttribute('onclick', "event.stopPropagation(); removechat();");
    div.appendChild(button);
    divcount++;
}
function addlocal(name){
    var local = JSON.parse(localStorage.getItem('channels')) || null;
    if (local == null){
        var local = [];
        local.push(name);
        console.log('pushed' + name);
        localStorage.setItem('channels', JSON.stringify(local));
    }
    else{
        local.push(name);
        console.log('pushed' + name);
        localStorage.setItem('channels', JSON.stringify(local));
    }
}
window.onload = function(){
    var local = JSON.parse(localStorage.getItem('channels')) || null;
    if (local != null){
        for (var i = 0; i < local.length; i++){
            addchat(local[i]);
    }
}
}
function removechat(){
    const local = JSON.parse(localStorage.getItem('channels'));
    console.log(event.target.id);
    const button = document.getElementById(event.target.id);
    console.log(button)
    const div = document.getElementById(button.parentElement.id);
    console.log(div);
    const divindex = parseInt(button.parentElement.id);
    console.log(divindex);
    div.remove();
    local.splice(0 , divindex)
    localStorage.setItem('channels', JSON.stringify(local));
    console.log(localStorage.getItem('channels'))
}