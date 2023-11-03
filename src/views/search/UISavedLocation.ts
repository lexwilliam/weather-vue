export class UISavedLocation {
    id: string
    name: string
    tempC: number
    constructor(id: string, name: string, tempC: number) {
        this.id = id
        this.name = name
        this.tempC = tempC
    }
}