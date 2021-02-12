export class Video {
    constructor (
        private id: string,
        private idUser: string,
        private url: string,
        private videoTitle: string,
        private description: string,
    ){}
    
    public getId(): string {
        return this.id
    }
    
    public getUrl(): string {
        return this.url
    }

    public getVideoTitle(): string {
        return this.videoTitle
    }

    public getDescription(): string {
        return this.description
    }

    public getIdUser(): string {
        return this.idUser
    }
}