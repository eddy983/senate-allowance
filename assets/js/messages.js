const messages = {
  "1": "You can reduced your senators salary in any remuneration.",
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
  "1": "You can reduced your senators salary in any remuneration.",
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
  "1": "You can reduced your senators salary in any remuneration.",
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
                  50
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  New schools built and maintained  for nigerian children.
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
                  100,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will get 10 well equipped health centres build for them.
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
                  10,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will get  5 state-of-the art specialist hospitals built for them.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/hospital (1).svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 5000000000,
    banner: `<div class="header__box header__box--1--c4" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--5 u-sub-margin main-text">
                  Nigerian talents will have state-of-the art sports facilities built to train in all states.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/football-field.svg" alt="Icon" class="header__box__icon__img--f">
              </div>
            </div>`
  },
  {
    value: 6000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c5" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will have prepaid meters provided for them with this amount.
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
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will have 50 new roads built to serve them across the nation.
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
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will have rural electrification projects to cater for them.
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
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerian children will receive vaccinations and immunization with this.
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
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will have access to potable water.
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
                <h1 class="header__box__text main-no main-no--w" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text main-text--w">
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
                <h1 class="header__box__text main-no main-no--w" id="changes">
                  50,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text main-text--w">
                  New Police stations will be built, thereby reducing rising insecurity.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/police station.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 13000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c12" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will have soft loans to build small & medium enterprises.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/store.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 14000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c13" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--6 u-sub-margin main-text">
                  Nigerians will be served by light rail projects carried out
                  in major cities.               
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/train.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 15000000000,
    banner: `<div class="header__box header__box--1  header__box--1--c14" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--7 u-sub-margin main-text">
                  Nigerian youths will have access to quality tertiary education:
                  this will fund a massive rehabilitation of  3 major tertiary
                  institutions to World-class standard.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/university.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 16000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c15" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--8 u-sub-margin main-text">
                  Nigerians will be empowered by the funding of cottage industries across 
                  the country.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/factory.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 17000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c16" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  50,000bpd
                </h1>
                <p class="header__box__text header__box__text--8 u-sub-margin main-text">
                  Will be produced for local consuption via getting our refineries running 
                  at full capacity.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/refinery (2).svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 18000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c17" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will be fed via food processing facilities built in each geo-political zone 
                  thereby empowering 100,000 people.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/refinery.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 19000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c18" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  Nigerians will be provided with shelter via funded housing projects.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/wood-house.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 20000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c19" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--8 u-sub-margin main-text">
                  Nigerians will be trained and empowered via the building of
                  technologyhubs and research centres in all geo-political zones.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/research.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 21000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c20" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--7 u-sub-margin main-text">
                  Displaced Nigerians in troubled areas will have camps set up 
                  and maintained to cater for them.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/tent.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  }
];
