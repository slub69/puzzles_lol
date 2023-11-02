const playlist = ["A", "B", "C", "D", "E"]
function screen(b,n,playlist){
    for(i=0;i<=n;i++){
        if(b==='1'){ //button 1
            playlist.push(playlist[0])
            playlist.slice(1)
        } else if(b==='2'){ //button 2
            playlist.unshift(playlist[playlist.length -1])
            playlist.pop()
        } else if(b==='3'){ //button 3
            let first = playlist[0]
            playlist[0] = playlist[1]
            playlist[1] = first
        } else if(b==='4'){ //button 4
            break
        }
    }
}
while(1){
    screen(/*queary input for b*/,/*queary input for n*/,playlist)
    return playlist
}