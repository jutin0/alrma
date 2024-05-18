function setAlarm() {
    const alarmTime = document.getElementById('alarmTime').value;
    const alarmMessage = document.getElementById('alarmMessage').value;

    if (alarmTime === '' || alarmMessage === '') {
        alert('Por favor, ingrese una hora y un mensaje.');
        return;
    }

    const alarmList = document.getElementById('alarmList');
    const listItem = document.createElement('li');
    listItem.innerText = `Alarma a las ${alarmTime} - Mensaje: ${alarmMessage}`;
    alarmList.appendChild(listItem);

    const alarmTimeParts = alarmTime.split(':');
    const alarmDate = new Date();
    alarmDate.setHours(alarmTimeParts[0]);
    alarmDate.setMinutes(alarmTimeParts[1]);
    alarmDate.setSeconds(0);

    const now = new Date();
    const timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            alert(alarmMessage);
            const utterance = new SpeechSynthesisUtterance(alarmMessage);
            window.speechSynthesis.speak(utterance);
        }, timeToAlarm);
    } else {
        alert('La hora de la alarma ya ha pasado. Por favor, ingrese una hora futura.');
    }
}
