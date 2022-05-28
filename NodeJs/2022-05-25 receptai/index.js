import express from 'express'
import cors from 'cors'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/receptai.html')
})


// const random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }



app.get('/receptai', (req, res) => {
    res.sendFile(__dirname + '/templates/receptai.html')
})

app.get('/receptas/:id', (req, res) => {
    const id = req.params.id
    const receptai = {
        1: {
            ingridientai: ` 
                            Vištienos krūtinėlė, 500 gramų <br />
                            Kiaušiniai, 2 vienetai <br />
                            Vanduo, šalto, 1 valgomasis šaukštas<br />
                            Druska, 0.5 arbatinio šaukštelio<br />
                            Juodieji pipirai, 0.5 arbatinio šaukštelio<br />
                            Aliejus<br />
                            Pabarstymui:<br />
                            Malti džiūvėsėliai, 1 stiklinė<br />
                            Miltai, 0.5 stiklinės<br />
                            Druska, 1 arbatinis šaukštelis<br />
                            Saldžiosios paprikos milteliai, 1 arbatinis šaukštelis<br />
                            Česnako milteliai, 1 arbatinis šaukštelis<br />
                            Svogūnų milteliai, 1 arbatinis šaukštelis
                        `,
            paruosimas: `
                        Vištienos krūtinėlę padedame ant maistinės plėvelės, ant viršaus taip pat užtiesiame maistinę plėvelę ir vištieną gerai išmušame mėsos muštuku. Krūtinėlė turėtų būti ~1-1,5 cm storio. Tada krūtinėlę supjaustome į nedidelius kvadratėlius<br />
                        Viename inde išplakame kiaušinius su vandeniu, druska ir pipirais.<br />
                        Kitame inde sumaišome džiūvėsėlius, miltus ir prieskonius, skirtus pabarstymui.<br />
                        Keptuvėje įkaitiname šiek tiek aliejaus ant vidutinės ugnies.<br />
                        Imame po vieną vištienos gabalėlį, pirmiausia įmerkiame į kiaušinių plakinį, tada dedame į džiūvėsėlius ir kepame įkaitintoje keptuvėje iš abiejų pusių, kol gabalėliai įgauna auksinę spalvą. Vištienos nereikia perkepti, kitaip gabalėliai bus kieti. Iškeptus vištienos gabalėlius dedame ant popierinio rankšluosčio, kad susigertų aliejus. Patiekiame su mėgstamu padažu.<br />
                        Atšalusius vištienos kąsnelius galite pašildyti įkaitintoje orkaitėje.<br />
                    `,
            nuotrauka: 'https://www.receptai.lt/uploads/modules/recipes/without-watermark/11194.jpg'
        },
        2: {
            ingridientai: `
                            Bulvės, 10 vienetų <br />
                            Pienas, 1 litras<br />
                            Kiaulienos šoninė, 7/10 kilogramo<br />
                            Kiaušiniai, 2 vienetai<br />
                            Svogūnai, 2 vienetai<br />
                            Grietinė, 2 valgomieji šaukštai<br />
                            Druska, 1 žiupsnelis<br />
                            Pipirai, 1 žiupsnelis<br />
                         `,
            paruosimas: `
                            Susitarkuoti bulves ir vieną svogūną - jis neleis tarkiams pajuoduoti. Tarkius sudėti į puodą.<br />
                            Pakepti keptuvėje šoninę su svogūnu, užpilti pienu ir dar pakaitinti, kol užvirs. Užvirus pienui, supilti visą keptuvės turinį ant tarkių, taip juos užplikyti - kugelis bus purus ir šviesus. Įdėti grietinės, įmušti kiaušinius, suberti druską ir pipirus, viską gerai išmaišyti ir supilti į kepimo indą.<br />
                            Kepame iki 180 C laipsnių įkaitintoje orkaitėje, kol gražiai apskrus, apie 40 - 50 minučių.<br />
                            Patiekti su grietine arba šoninės padažu (svogūną apkepti ant sviesto, sudėti smulkiai pjaustytą šoninę, dar kažkiek pakelti ir tada užpylus grietinėle arba pienu dar šiek tiek pakaitinti). Skanaus.<br />
                    `,
            nuotrauka: 'https://www.receptai.lt/uploads/modules/recipes/fullsize/10819.jpg'
        },
        3: {
            ingridientai: `
                        Vanduo, 5 litrai<br />
                        Duona, džiovinta, 1 kilogramas<br />
                        Cukrus, 0.5 kilogramo<br />
                        Razinos, 1 valgomasis šaukštas<br />
                        Mielės, 50 gramų<br />
                        `,
            paruosimas: `
            Suraikyta ir iki rudumo orkaitėje paskrudinta juoda duona užplikoma verdančiu vandeniu, ataušinama, pridedama su cukrumi ištrintų mielių ir palaikoma 24 val.<br />
            Vėliau iškošiama ir supilstoma į sandariai užkemšamus butelius (į kiekvieną įberiama po kelias razinas). Tinka gerti po 1—2 parų.
                    `,
            nuotrauka: 'https://www.receptai.lt/uploads/modules/recipes/fullsize/41.jpg'
        }
    }

    res.json(receptai[id])
})





app.listen(3000)