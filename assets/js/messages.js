const messages = {
  "1": "There is no reduction at this level.",
  "2": "Salary of a Federal Health consultant.",
  "3": "A professor in Nigerian university.",
  "4": "Approximately same with a Colonel in the Nigerian Army.",
  "5": "Monthly Salary of a Director in the federal Civil Service.",
  "6": "Salary of a Senior Lecturer in Nigerian University.",
  "7": "Monthly salary of a Major in the Nigerian Army.",
  "8":
    "Salary of Federal Government Doctors. This is also the just about the annual salary of a minimum wage earner.",
  "9": "A lecturer II in Nigerian University.",
  "10":
    "This is almost the monthly salary earned by a graduate level civil servant."
};
const messages1 = {
  "1": "There is no reduction at this level.",
  "2": "Scholarships (at least up to Secondary school level) for 100 students.",
  "3": "Provide Street lights in major roads in a senatorial district.",
  "4": "Run a state-of-the art IT centre in at least 2 schools.",
  "5": "Immunization efforts for all 0-3months kids in the district.",
  "6":
    "Provide free drugs, free books and other incentives in schools in the senatorial districts.",
  "7":
    "Will hire 3 consultants, 2 professors, ad-hoc committee and research team for a bill.",
  "8": "Set up a research team with 2 professors and a graduate assistant.",
  "9":
    "Will hire 5 Msc. holders (at 200k/month) and 5 Bsc/HND (at 100k/month) and run a 10-man office.",
  "10": "Will hire 5 graduates (at 100k/month) and maintain a 5 – man office."
};

const messages2 = {
  "1": "There is no reduction at this level.",
  "2": "This will build a state-of-the-art SME centre/hub for entrepreneurs.",
  "3":
    "This can build and rehabilitate all link roads within a senatorial district.",
  "4":
    "This amount can create a mini –grid power generation to cater for Cottage Industries.",
  "5":
    "This will build a cottage manufacturing plant/industry to produce basic needs like bags, shoes, textiles etc at a lower level.",
  "6":
    "This will conveniently renovate at least 10 schools in a senatorial district up to standard.",
  "7":
    "This will provide food processing equipments, mills and other finishing equipments.",
  "8":
    "This amount will start a co-operative mechanized farming project in a senatorial district.",
  "9":
    "Will provide fully fixed borehole with tanks and generators in all communities in a Senatorial district.",
  "10":
    "A state-of-the- art health centre will be built in a senatorial district with this amount."
};

const banners = [
  {
    value: 1000000000,
    banner: `<div class="header__box header__box--1" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Try Again
                </h1>
                <p class="header__box__text--2 u-sub-margin main-text">
                  No significant change has been made
                </p>
              </div>
            </div>`
  },
  {
    value: 2000000000,
    banner: `<div class="header__box header__box--1" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  500,000
                </h1>
                <p class="header__box__text header__box__text--l u-sub-margin main-text">
                  Nigerian children gets 50 schools built and maintained for them.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/school.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 3000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c2" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Nigerians get 10 well equipped health centres build for them.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/hospital.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 4000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c3" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will build state of the art specialist hospitals to avoid medical tourism.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/hospital (1).svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 5000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c4" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                 Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                 Will complete all current road projects in Nigeria.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/road-with-broken-line.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 6000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c5" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will provide prepaid meters for all Nigerians.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/electric-meter.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 7000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c6" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  50
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  New roads will be built across the nation.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/road.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 8000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c7" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                 Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  This will cater for rural electrification projects.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/electric-tower.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 9000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c8" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will provide vaccinations against diseases and reduce child mortality.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/syringe.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 10000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c9" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Nigerians get portable water provided for them.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/water-pump.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 11000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c10" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                 Nigerians will be fed via a funded mechanized agriculture campaign.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/fertilizer-tractor.svg" alt="Icon" class="header__box__icon__img header__box__icon__img--9">
              </div>
            </div>`
  },
  {
    value: 12000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c11" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will fund the police to be able to curb rising insecurity, thereby saving lives.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/police.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 13000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c12" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will fund light rail projects in major cities in the country.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/train.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 14000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c13" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will fund a massive infrastructural turnaround in the country.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/city-buildings-view.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 15000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c14" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will build and maintain state-of-the art sports facilities in all states of the federation.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/football-field.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 16000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c15" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will fund a massive rehabilitation of tertiary institutions to World-class standard.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/university.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 17000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c16" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will build Cottage Industries around Nigeria, thereby reducing unemployment.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/factory.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 18000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c16" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will help launch an industrial revolution that will boost economy.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/factory.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 19000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c17" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will fund the Nigerian military to be able to intensify counter-terrorism policies.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/military.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 20000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c18" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  Savings
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Will help get our refineries running, at least producing enough for local consumption.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/refinerys.svg" alt="Icon" class="header__box__icon__img header__box__icon__img--8">
              </div>
            </div>`
  },
  {
    value: 21000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c19" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text u-sub-margin main-text">
                  Nigerians will get shelter via a funded housing project.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/wood-house.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  }
];
