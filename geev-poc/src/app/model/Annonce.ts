
export class Annonce {

    _id: string
    title: string

    constructor(data){
        this._id = data['id'],
        this.title = data['title']
    }
}