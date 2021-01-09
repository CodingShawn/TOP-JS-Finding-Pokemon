export function capitalise(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export function formatTime(time) {
  let mins = Math.floor(time / 60);
  let seconds = time % 60;
  let formattedSeconds = addZero(seconds);

  if (mins < 60) {
    let formattedMins = addZero(mins);
    return `${formattedMins}:${formattedSeconds}`;
  } else {
    let hours = Math.floor(mins / 60);
    mins = mins % 60;
    let formattedMins = addZero(mins);
    return `${hours}:${formattedMins}:${formattedSeconds}`;
  }
}

function addZero(num) {
  if (num == 0) {
    num = "00";
  } else if (num < 10) {
    num = "0" + num;
  }
  return num;
}
