
export class Annonces {

    _id: string
    title: string
    pictures: Array<String>

    constructor(json: Object){
        this._id = json['id'],
        this.title = json['title']
        this.pictures = json['pictures']
    }
}