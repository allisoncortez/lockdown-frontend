class ScoreAdapter {
    constructor() {
        this.scoreUrl = 'http://localhost:3000/api/v1/scores'
    }
    
    // api/v1/scores/top(.:format)
    // api/v1/scores/topfive(.:format)

    // async getTopScore() {
    //     try {
    //         let response = await fetch(`${this.scoreUrl}/top`)
    //         let data = await response.json()
    //         return data.score
    //     } catch (error) {
    //         "Error on Fetch."
    //     }
    // }

    async getTopFive() {
        try {
            let response = await fetch(`${this.scoreUrl}/topfive`)
            let data = await response.json()
            return data
        } catch (error) {
            "Error on Fetch."
        }
    }

    // getTopFive(){
    //         return fetch(`${this.scoreUrl}/topfive`)
    //         .then(resp => resp.json())
    //         // .catch(error => {
    //         //     console.log(error)
    //         // })
    // }
}