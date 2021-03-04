const bandArray = [["Oasis", "oasis.jpg", 10, 9, 10, 10, 10],
["Blur", "blur.jpg", 9, 10, 9, 9, 9],
["Pulp", "pulp.jpg", 8, 9, 8, 8, 10],
["The Verve", "verve.jpg", 10, 9, 9, 8, 8],
["Radiohead", "radiohead.jpg", 10, 9, 7, 8, 7],
["Primal Scream", "primal.jpg", 8, 8, 7, 7, 6],
["Supergrass", "supergrass.jpg", 7, 9, 8, 7, 6],
["Ocean Colour Scene", "ocean.jpg", 8, 8, 7, 6, 6],
["Stereophonics", "stereo.jpg", 9, 8, 9, 7, 7],
["Cast", "cast.jpg", 6, 7, 7, 6, 6],
["Suede", "suede.jpg", 6, 6, 6, 5, 6],
["Texas", "texas.jpg", 7, 7, 6, 7, 8],
["Manic Street Preachers", "manic.jpg", 6, 7, 6, 5, 7],
["Embrace", "embrace.jpg", 5, 7, 5, 4, 6],
["Skunk Anasie", "skunk.jpg", 7, 8, 7, 5, 5],
["Catatonia", "catatonia.jpg", 5, 7, 4, 5, 6],
["James", "james.jpg", 6, 7, 5, 6, 7],
["Travis", "travis.jpg", 8, 7, 5, 4, 6],
["Kula Shaker", "kula.jpg", 6, 8, 7, 5, 5],
["Space", "space.jpg", 6, 7, 7, 5, 4],
["Shed Seven", "shed.jpg", 4, 5, 7, 4, 4],
["Ash", "ash.jpg", 7, 6, 5, 6, 3],
["The La's", "las.jpg", 5, 8, 7, 7, 3],
["Elastica", "elastica.jpg", 7, 6, 8, 3, 3],
["The Charlatans", "charlatans.jpg", 7, 7, 7, 3, 2],
["The Sea Horses", "seahorses.jpg", 6, 8, 5, 4, 1],
["The Boo Radleys", "boorad.jpg", 3, 7, 5, 6, 2],
["Cornershop", "cornershop.jpg", 2, 7, 3, 7, 3],
["Dodgy", "dodgy.jpg", 2, 8, 5, 7, 1],
["Doves", "doves.jpg", 5, 6, 7, 2, 2]]

let playerCards = []
let computerCard = []
let topCards = []
// card counts
const playerCount = document.getElementById("numOfCardsP")
const computerCount = document.getElementById("numOfCardsC")
//card attributes
const playerBand = document.getElementById("nameP")
const computerBand = document.getElementById("nameC")
const playerImg = document.getElementById("imgP")
const computerImg = document.getElementById("imgC")
const playerAlbums = document.getElementById("albumTxtP")
const computerAlbums = document.getElementById("albumTxtC")
const playerSingles = document.getElementById("singleTxtP")
const computerSingle = document.getElementById("singleTxtC")
const playerLive = document.getElementById("liveTxtP")
const computerLive = document.getElementById("liveTxtC")
const playerFame = document.getElementById("fameTxtP")
const computerFame = document.getElementById("fameTxtC")
const playerAwards = document.getElementById("awardsTxtP")
const computerAwards = document.getElementById("awardsTxtC")
// buttons
const startGame = document.getElementById("startGame")
const nextCard = document.getElementById(id="nextCardButton")
const showCardP = document.getElementById(id="showCardButtonP")
const showCardC = document.getElementById(id="showCardButtonC")
// message
const message = document.getElementById(id="message")




class Band {
    constructor(aName, anImage, anAlbums, aSingles, aLive, aFame, anAwards) {
        this.name = aName
        this.image = anImage
        this.albums = anAlbums
        this.singles = aSingles
        this.live = aLive
        this.fame = aFame
        this.awards = anAwards
    }

    get bandName() {
        return this.name;
    }

    get bandImage() {
        return this.image;
    }


    get bandAlbums() {
        return this.albums;
    }


    get bandSingles() {
        return this.singles;
    }



    get bandLive() {
        return this.live;
    }


    get bandFame() {
        return this.fame;
    }

    get bandAwards() {
        return this.awards
    }


}


const createBandObjects = (data) => {
    let objectArray = []
    for (let i = 0; i < data.length; i++) {
        let o = data[i]
        let object = new Band(o[0], o[1], o[2], o[3], o[4], o[5], o[6])
        objectArray.push(object)
    }
    return objectArray
}

const getRandonArray = () => {
    let a = []
    let twoArray = []
    let oneArray = []


    while (a.length < 30) {
        let ranNum = Math.floor(Math.random() * 30)

        if (a.indexOf(ranNum) === -1) {
            a.push(ranNum)
        }


        oneArray = a.slice(0, 15)
        twoArray = a.slice(15)

    }
    return [oneArray, twoArray]
}

const dealCards = (anArray) => {
    let array1 = anArray[0]
    let array2 = anArray[1]
    let oArray = createBandObjects(bandArray)

    for (let i = 0; i < anArray[0].length; i++) {

        let iOne = array1[i]
        let iTwo = array2[i]

        playerCards.push(oArray[iOne])
        computerCard.push(oArray[iTwo])

    }

}

const getTopCards = (aArray1, aArray2) => {
    let playerTop = playerCards.shift()
    let computerTop = computerCard.shift()

    topCards = [playerTop, computerTop]
}


const chooseStat = (objectArray, stat) => {
    let player = objectArray[0]
    let computer = objectArray[1]
    switch (stat) {
        case "albums":
            return [player.bandAlbums, computer.bandAlbums];
            break;
        case "singles":
            return [player.bandSingles, computer.bandSingles];
            break;
        case "live":
            return [player.bandLive, computer.bandLive];
            break;
        case "fame":
            return [player.bandFame, computer.bandFame];
            break;
        case "awards":
            return [player.bandAwards, computer.bandAwards];
            break;
    }

}

const compareStats = (sArray) => {

    if (sArray[0] > sArray[1]) {
        Array.prototype.push.apply(playerCards, topCards)
        topCards = []
        return "Player"

    } else if (sArray[0] < sArray[1]) {
        Array.prototype.push.apply(computerCard, topCards)
        topCards = []
        return "Computer"
    } else {
        playerCards.push(topCards[0])
        computerCard.push(topCards[1])
        topCards = []
        return "draw"
    }
}









// let aArray = getRandonArray()
// let one = aArray[0]
// let two =aArray[1]
let a = getRandonArray()
dealCards(a)
console.log(playerCards[0].bandName)
console.log(computerCard[0].bandName)
getTopCards(playerCards, computerCard)
console.log(playerCards.length)
console.log(topCards[1].bandName)
let b = chooseStat(topCards, "fame")

console.log(compareStats(b))
// console.log(playerCards.length)
// console.log (computerCard[14])
console.log(topCards)

// console.log(two)
