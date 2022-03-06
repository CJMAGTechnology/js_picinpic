const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// prompt to select stream
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        
    }
}

// onload
selectMediaStream()





