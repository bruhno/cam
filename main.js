const { VideoCapture } = require('camera-capture')
const fs  = require('fs')

f().then(a => console.log("ok"))

async function f() {
    const c = new VideoCapture({ port: 8082 })
    await c.initialize()
    await c.startRecording()
    setTimeout(async () => {
        const data = await c.stopRecording()
        fs.writeFile('video.mpg', data, { flag: 'w+' }, err=>console.error(err))
        console.log(data.length)

    }, 3000)
}