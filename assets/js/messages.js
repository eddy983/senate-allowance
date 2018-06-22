const messages = {
  "1": "There is no reduction at this level.",  
  "2": "Salary of a Federal Health consultant.",
  "3": "A professor in Nigerian university.",
  "4": "Approximately same with a Colonel in the Nigerian Army.",
  "5": "Monthly Salary of a Director in the federal Civil Service.",
  "6": "Salary of a Senior Lecturer in Nigerian University.",
  "7": "Monthly salary of a Major in the Nigerian Army.",
  "8": "Salary of Federal Government Doctors. This is also the just about the annual salary of a minimum wage earner.",
  "9": "A lecturer II in Nigerian University.",
  "10": "This is almost the monthly salary earned by a graduate level civil servant."
}
const messages1 = {
  "1": "There is no reduction at this level.",
  "2": "Scholarships (at least up to Secondary school level) for 100 students.",
  "3": "Provide Street lights in major roads in a senatorial district.",
  "4": "Run a state-of-the art IT centre in at least 2 schools.",
  "5": "Immunization efforts for all 0-3months kids in the district.",
  "6": "Provide free drugs, free books and other incentives in schools in the senatorial districts.",
  "7": "Will hire 3 consultants, 2 professors, ad-hoc committee and research team for a bill.",
  "8": "Set up a research team with 2 professors and a graduate assistant.",
  "9": "Will hire 5 Msc. holders (at 200k/month) and 5 Bsc/HND (at 100k/month) and run a 10-man office.",
  "10": "Will hire 5 graduates (at 100k/month) and maintain a 5 – man office."
}

const messages2 = {
  "1": "There is no reduction at this level.",
  "2": "This will build a state-of-the-art SME centre/hub for entrepreneurs.",
  "3": "This can build and rehabilitate all link roads within a senatorial district.",
  "4": "This amount can create a mini –grid power generation to cater for Cottage Industries.",
  "5": "This will build a cottage manufacturing plant/industry to produce basic needs like bags, shoes, textiles etc at a lower level.",
  "6": "This will conveniently renovate at least 10 schools in a senatorial district up to standard.",
  "7": "This will provide food processing equipments, mills and other finishing equipments.",
  "8": "This amount will start a co-operative mechanized farming project in a senatorial district.",
  "9": "TWill provide fully fixed borehole with tanks and generators in all communities in a Senatorial district.",
  "10": "A state-of-the- art health centre will be built in a senatorial district with this amount.",
  
}


const banners = [
  { "value": 1000000000,
    "banner": `<div class="header__box__icon header__box__icon--1">
                      <img src="assets/img/Man.svg" alt="Senator" class="header__box__icon__img header__box__icon__img--1">
                      <img src="assets/img/man.svg" alt="Money" class="header__box__icon__img header__box__icon__img--2">
                      <img src="assets/img/man.svg" alt="Money" class="header__box__icon__img header__box__icon__img--3">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--4">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--5">
                      <h1 class="header__box__text--1">Senator</h1>
                    </div>`
  },
  { "value": 2000000000,
    "banner": `<div class="header__box__icon header__box__icon--1">
                      <img src="assets/img/Ma.svg" alt="Senator" class="header__box__icon__img header__box__icon__img--1">
                      <img src="assets/img/ma.svg" alt="Money" class="header__box__icon__img header__box__icon__img--2">
                      <img src="assets/img/man.svg" alt="Money" class="header__box__icon__img header__box__icon__img--3">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--4">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--5">
                      <h1 class="header__box__text--1">20000000</h1>
                    </div>`
  },
  { "value": 3000000000,
    "banner": `<div class="header__box__icon header__box__icon--1">
                      <img src="assets/img/Ma.svg" alt="Senator" class="header__box__icon__img header__box__icon__img--1">
                      <img src="assets/img/ma.svg" alt="Money" class="header__box__icon__img header__box__icon__img--2">
                      <img src="assets/img/man.svg" alt="Money" class="header__box__icon__img header__box__icon__img--3">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--4">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--5">
                      <h1 class="header__box__text--1">3000000</h1>
                    </div>`
  },
  { "value": 4000000000,
    "banner": `<div class="header__box__icon header__box__icon--1">
                      <img src="assets/img/Ma.svg" alt="Senator" class="header__box__icon__img header__box__icon__img--1">
                      <img src="assets/img/ma.svg" alt="Money" class="header__box__icon__img header__box__icon__img--2">
                      <img src="assets/img/man.svg" alt="Money" class="header__box__icon__img header__box__icon__img--3">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--4">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--5">
                      <h1 class="header__box__text--1">4000000</h1>
                    </div>`
  },
  { "value": 5000000000,
    "banner": `<div class="header__box__icon header__box__icon--1">
                      <img src="assets/img/Ma.svg" alt="Senator" class="header__box__icon__img header__box__icon__img--1">
                      <img src="assets/img/ma.svg" alt="Money" class="header__box__icon__img header__box__icon__img--2">
                      <img src="assets/img/man.svg" alt="Money" class="header__box__icon__img header__box__icon__img--3">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--4">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--5">
                      <h1 class="header__box__text--1">50000000</h1>
                    </div>`
  },
  { "value": 6000000000,
    "banner": `<div class="header__box__icon header__box__icon--1">
                      <img src="assets/img/Ma.svg" alt="Senator" class="header__box__icon__img header__box__icon__img--1">
                      <img src="assets/img/ma.svg" alt="Money" class="header__box__icon__img header__box__icon__img--2">
                      <img src="assets/img/man.svg" alt="Money" class="header__box__icon__img header__box__icon__img--3">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--4">
                      <img src="assets/img/Money.svg" alt="Money" class="header__box__icon__img header__box__icon__img--5">
                      <h1 class="header__box__text--1">Breaking point</h1>
                    </div>`
  }
  
]