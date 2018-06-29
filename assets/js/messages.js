const messages = {
  "1": "0% - You can reduce the salary allocation of your senators by %.",
  "2": "N675, 000 – At 10% reduction, the salary is now equivalent to that of a federal health consultant.",
  "3": "N600, 000 – With 20% reduction, this is now same salary with a ProfessorI in a federal University.",
  "4": "N525, 000 – At this level, the salary is now approximately same with that of a Colonel in the Nigerian Army.",
  "5": "N450, 000 – With 40% reduction, this is now same with the salary of a Director in the federal Civil Service",
  "6": "N375, 000 – At this 50% reduction, this is now same with the salary of a Senior Lecturer in a Nigerian University.",
  "7": "N300, 000 – With this 60% reduction, it is now same with the monthly salary of a Major in the Nigerian Army.",
  "8":
    "N225, 000 – With 70% reduction, this is now same with that of Federal Government Doctors. Also, this is just about the annual salary of a minimum wage (18,000) earner.",
  "9": "N150,000 – With 80% cut, this is now same salary with a Lecturer II in a federal University.",
  "10":
    "N75,000 – With 90% cut, the senators salary will now be the same with a graduate level civil servant."
};
const messages1 = {
  "1": "0% - You can reduce the allowance allocation of your senators by %.",
  "2": "N11,250,000 – With 10% reduction, this amount can  provide scholarships (up to at least Secondary school level) for 100 students.",
  "3": "N10,000,000 – With 20% cut, this amount will provide solar powered street lights in major roads in a senatorial district.",
  "4": "N8,750,000 – After the cut, this amount can run a state-of-the art IT centre in at least 5 schools.",
  "5": "N7,500,000 – With 40% reduction, the remaining amount can fund Immunization efforts for all 0-3months kids in a senatorial district.",
  "6":
    "N6,250,000 – With 50% cut, the allowance can provide free drugs, free books and other incentives in schools in a senatorial district.",
  "7":
    "N5,000,000 - With 60% reduction, the allowance can hire a research team for a bill with 3 consultants, 2 professors and others.",
  "8": "N3,750, 000 – With 70% cut, the allowance can set up a research team with 2 professors and a graduate assistant.",
  "9":
    "N2,500,000 – With 80% cut, this allowance can hire 5 Msc. holders (at 200k/month) and 5 Bsc/HND (at 100k/month) and run a 10-man office.",
  "10": "N1,250, 000 – With 90% cut, the allowance can hire 5 graduates (at 100k/month) and maintain a 5–man office."
};

const messages2 = {
  "1": "0% - You can reduce the constituency allocation of your senators by %.",
  "2": "N180,000,000 – After 10% cut, this amount will build a state-of-the-art SME centre/hub for entrepreneurs in a senatorial district.",
  "3":
    "N160,000,000 – With 20% reduction, this amount can build and rehabilitate all link roads within a senatorial district.",
  "4":
    "N140,000,000 – With 30% cut, this amount can create a mini –grid power generation to cater for Cottage Industries.",
  "5":
    "N120,000,000 – With 40% decrease, this amount will build cottage industry for basic needs like bags, shoes, textiles etc at a lower level.",
  "6":
    "N100,000,000 – With 50% reduction, this amount will conveniently renovate at least 10 schools in a senatorial district up to standard.",
  "7":
    "N80,000,000 – With 60% cut, this amount will provide food processing machineries other finishing equipment for farmers and entrepreneurs.",
  "8":
    "N60,000,000 – With 70% reduction, this amount will start a co-operative mechanized farming project in a senatorial district.",
  "9":
    "N40,000,000 – With 80% cut in allocation, this amount will fix full borehole projects in all communities in a Senatorial district.",
  "10":
    "N20,000,000 – With 90% reduction in allocation, this amount will build and maintain a state-of-the- art health centre in a senatorial district."
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
                  25,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  With the cuts you have made, 50 schools can be built and maintained to cater for at least 25,000 kids.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/school.svg" alt="Icon" class="header__box__icon__img header__box__icon__img--1">
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
                <p class="header__box__text header__box__text--6 u-sub-margin main-text">
                  With the amount saved, 100 well equipped health centers will be built and maintained to cater for 100,000 people.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/hospital.svg" alt="Icon" class="header__box__icon__img header__box__icon__img--1">
              </div>
            </div>`
  },
  {
    value: 4000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c3" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--7 u-sub-margin main-text">
                  At this amount, 5 state-of-the art specialist hospitals will be built and maintained to cater for 100,000 Nigerians thereby avoiding medical tourism.
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
                  The cuts you have made will build and maintain state-of-the art sports facilities in all states of the federation to identify and nurture 100,000 talents.
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
                  10,000,000
                </h1>
                <p class="header__box__text header__box__text--8 u-sub-margin main-text">
                  This amount you have saved will build 50 new roads across the nation to serve 10m Nigerians.
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
                <p class="header__box__text header__box__text--10 u-sub-margin main-text">
                  With this amount, rural electrification projects can be completed to cater for 1,000,000 Nigerians.
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
                <p class="header__box__text header__box__text--10 u-sub-margin main-text">
                  With the amount you have saved 1,000,000 children will receive vaccinations and immunization against diseases and reduce child mortality.
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
                  Right now, 1,000,000 people will have access to potable water.
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
                <p class="header__box__text header__box__text--8 u-sub-margin main-text main-text--w">
                  The amount saved will fund a mechanized agriculture campaign that will feed 1,000,000 Nigerians.
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
                <p class="header__box__text header__box__text--6 u-sub-margin main-text main-text--w">
                  This amount will build and maintain 50,000 police stations, thereby reducing rising insecurity.
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
                <p class="header__box__text header__box__text--5A u-sub-margin main-text">
                  The amount saved will have soft loan for 100,000 Nigerians to build small & medium enterprises.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/store.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 14000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c17" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--4 u-sub-margin main-text">
                  This amount will fund a food processing facilities industry in each geo-political zone 
                  thereby empowering 100,000 people to feed 1,000,000 Nigerians.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/refinery.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 15000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c13" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--6 u-sub-margin main-text">
                  The amount you have saved can jump start a light rail project that will serve about 100,000 people in major cities.               
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/train.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 16000000000,
    banner: `<div class="header__box header__box--1  header__box--1--c14" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--7 u-sub-margin main-text">
                  With the saved amount, we can fund a massive rehabilitation of 4 tertiary institutions to world-class standard so 100,000 Nigerian youths can have access to quality tertiary education.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/university.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 17000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c15" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--10 u-sub-margin main-text">
                  This amount will fund of cottage industries around Nigeria, thereby empowering 1,000,000 Nigerians and reducing unemployment.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/factory.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 18000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c19" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--11 u-sub-margin main-text">
                  With the cuts made, we can build a technology hub and research centre in all geo-political zones to train and empower 100,000 Nigerians.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/research.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 19000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c20" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  100,000
                </h1>
                <p class="header__box__text header__box__text--6 u-sub-margin main-text">
                  The amount you have saved will fully run and maintain relief camps to cater for 100,000 internally displaced people in troubled areas.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/tent.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 20000000000,
    banner:`<div class="header__box header__box--1 header__box--1--c16" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  50,000bpd
                </h1>
                <p class="header__box__text header__box__text--8 u-sub-margin main-text">
                  The amount you have saved will get refineries running at full capacity, producing 50,000bpd for local consumption.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/refinery (2).svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  },
  {
    value: 21000000000,
    banner: `<div class="header__box header__box--1 header__box--1--c18" id="header__box">
              <div class="u-text-align">
                <h1 class="header__box__text main-no" id="changes">
                  1,000,000
                </h1>
                <p class="header__box__text header__box__text--8 u-sub-margin main-text">
                  With this amount, we can conveniently fund a housing project that will provide shelter for 1,000,000 Nigerians.
                </p>
              </div>
              <div class="header__box__icon">
                <img src="assets/img/wood-house.svg" alt="Icon" class="header__box__icon__img">
              </div>
            </div>`
  }
];


