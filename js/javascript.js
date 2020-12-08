const dayStart = "07:30"; //7:30, '35: 1h:20p' |7:45
//9:20, '79: 1h:19p'
//9:10, '10: 0h:10p'

const dayEnd = "17:45"; //17:10, '20: 0h:20p'
//17:30, '40: oh:40p'

function scheduleMeeting(startTime, durationMinutes) {
  debugger;
  let timehstart = dayStart.split(":")[0];
  let timemstart = dayStart.split(":")[1];
  let timeh = dayEnd.split(":")[0];
  let timem = dayEnd.split(":")[1];
  let starth = startTime.split(":")[0];
  let startm = startTime.split(":")[1];

  let duh = Math.floor(durationMinutes / 60);
  let dum = durationMinutes % 60;
  let duplusstartm = dum + Number(timem);
  let dmhour = Math.floor(duplusstartm / 60);
  if (Number(timeh) == Number(starth)) {
    if (Number(dmhour) + Number(timeh) > Number(timeh)) {
      alert("false");
    }
  } else if (Number(timehstart) == Number(starth)) {
    if (Number(dmhour) + Number(timehstart) > Number(timehstart)) {
      alert("true");
    }
  } else if (
    Number(starth) + duh == Number(timehstart) ||
    Number(starth) + duh == Number(timeh)
  ) {
    if (
      Number(timemstart) <= Number(startm) + dum &&
      Number(timem) >= Number(startm) + dum
    ) {
      alert("true");
    }
  } else if (
    duh + Number(starth) >= timehstart &&
    duh + Number(starth) <= timeh
  ) {
    alert("true");
  } else if (Number(starth) + timeh <= timeh) {
    alert("true");
  } else if (Number(timeh) + Number(dmhour) <= Number(timeh)) {
    alert("true");
  } else {
    alert("false");
  }
}

scheduleMeeting("07:30", "35"); //t
scheduleMeeting("07:30", "80"); //t
scheduleMeeting("17:50", "20"); //f
scheduleMeeting("17:30", "40"); //f
scheduleMeeting("9:20", "79"); //t
scheduleMeeting("18:30", "20"); //f
scheduleMeeting("17:35", "15"); //f
