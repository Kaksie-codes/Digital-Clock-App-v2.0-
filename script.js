class DigitalClock{
    constructor(element){
        this.element = element;        
    }

    start(){
        setInterval(() => {
            this.update();            
        }, 100)
    }    

    update(){
        const time = this.getTime();
        let minutesFormatted = time.minute.toString().padStart(2, "0");
        let hoursFormatted = time.hour.toString().padStart(2, "0");
        let secondsFormatted = time.seconds.toString().padStart(2, "0");
        const amPm = time.isAM ? 'AM' : 'PM'

        if(hoursFormatted > 12){            
            hoursFormatted = hoursFormatted - 12;
        }
        const timeFormated = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;        
        const clockTime = this.element.querySelector('#clock-time');
        const meridiemEl = this.element.querySelector('#meridiem');

        clockTime.textContent = timeFormated;
        meridiemEl.textContent = amPm;
    }

    getTime(){
        const now = new Date();
        
        return{
            hour: now.getHours(),
            minute: now.getMinutes(),
            seconds: now.getSeconds(),
            isAM: now.getHours() < 12
        }
    }
    
}

const clockEl = document.querySelector('.clock');
const clockObject = new DigitalClock(clockEl);
clockObject.start()