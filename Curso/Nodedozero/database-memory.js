import { randomUUID} from "node:crypto"
export class DatabaseMemory {
    #videos = new Map()

    //set, map (Estruturas de dados)

    create(videos) {
        const videoID = randomUUID()

        //UUID => Unique universal ID

        this.#videos.set(videoID, videos)
    }

    list() {
        return this.#videos.values()
    }


    update(id, videos) {
        this.#videos.set(id, videos)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}