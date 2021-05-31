
export default function formatTime(seconds) {
    let hours = Math.floor(seconds/60/60)
    let minutes = Math.floor(seconds/60) - (hours * 60)
    let sec = seconds % 60
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    sec = sec < 10 ? '0' + sec : sec
return `${hours}:${minutes}:${sec} ${ampm}`
}
