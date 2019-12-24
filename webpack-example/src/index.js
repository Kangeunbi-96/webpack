import  moment from 'moment'
function currentTime () {
    return moment().format('H:m:s')
}

const div = document.createElement('div')
document.body.appendChild(div)
setInterval(() => div.innerText = currentTime(), 1000)