
export class Annonce {

    id: string
    title: string
    pictures: Array<String>

    constructor(json: Object){
        this.id = json['_id'],
        this.title = json['title']
        this.pictures = json['pictures']
    }
}