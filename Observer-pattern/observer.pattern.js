class Observer {
    constructor(name) {
        // yasuo, zed
        this.namePick = name
    }
    updateStatus(location) {
        this.goToHelp(location)
    }
    goToHelp(location) {
        console.log(`${this.namePick}:::PING::::${location}`);
    }
}

class Subject {
    constructor() {
        this.observerList = []
    }

    addObserver(observer) {
        this.observerList.push(observer)
    }
    notify(location) {
        this.observerList.forEach(observer => observer.updateStatus(JSON.stringify(location)))
    }
}

const subject = new Subject()

// your pick
const yasuo = new Observer('yasuo')
const zed = new Observer('zed')
const vaybu = new Observer('vaybu')


// add yasuo and zed to team
subject.addObserver(yasuo)
subject.addObserver(zed)
subject.addObserver(vaybu)


subject.notify({ long: 123, last: 345 })

