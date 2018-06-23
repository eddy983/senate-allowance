const base_salary = 750000 //salary used for reference calculations doesnt channge
const base_allowance = 12500000 //allowance used for reference calculations doesnt channge
const base_allocation = 200000000 //allowance used for reference calculations doesnt channge
const no_of_senators = 109;


var salary = 750000;
var allowance = 12500000;
var allocation = 200000000;
var current = "";


const createUniqueId = prefix => {
  return `${prefix}-${Math.round(Math.random() * 100000)}`;
};

class RangeSlider {
  constructor(el) {
    this.input = document.querySelector(el);
    this.minValue = this.input.getAttribute("min");
    this.maxValue = this.input.getAttribute("max");
    this.numTicks = this.maxValue / this.minValue;
    this.input.addEventListener("change", e => this.handleInputChange(e));

    this.wrapInput().then(res => {
      if (this.input.hasAttribute("labels")) {
        this.labels = JSON.parse(this.input.getAttribute("labels"));
        this.createTicks(res);
      }
    });
  }

  handleInputChange(e) {
    const value = e.target.value;
    const ariaValueText = !this.labels ? value : this.labels[value];
    this.input.setAttribute("aria-valuetext", ariaValueText);
    current= "salary"
    changetext(e, "display");
    update(e.target.value);
    if (this.input.hasAttribute("labels")) {
      this.setSelectedLabel(this.labels[value]);
    }
  }

  // handleLabelClick(label, value, e) {
  //   console.log(e)
  //   this.input.focus();
  //   this.input.value = value;
  //   this.input.setAttribute("value", value);
  //   this.input.setAttribute("aria-valuetext", label);
  //   this.setSelectedLabel(label);
  // }

  setSelectedLabel(label) {
    const selectedLabels = document.querySelectorAll(
      ".range-slider-ticks__label"
    );

    [].forEach.call(selectedLabels, function(el) {
      el.classList[el.innerText === label ? "add" : "remove"]("is-selected");
    });
  }

  wrapInput() {
    return new Promise(resolve => {
      const wrapper = document.createElement("div");
      const wrapperId = createUniqueId("range-slider");

      wrapper.id = wrapperId;
      wrapper.className = "range-slider";

      this.input.parentNode.replaceChild(wrapper, this.input);

      document.querySelector(`#${wrapperId}`).appendChild(this.input);

      resolve(wrapperId);
    });
  }

  createTicks(wrapperId) {
    return new Promise(resolve => {
      const tickList = document.createElement("div");
      const tickListId = createUniqueId("tick-list");

      tickList.id = tickListId;
      tickList.className = "range-slider-ticks";

      document.querySelector(`#${wrapperId}`).appendChild(tickList);

      for (const prop in this.labels) {
        if (this.labels.hasOwnProperty(prop)) {
          const tick = document.createElement("div");
          const tickLabel = document.createElement("span");
          const tickLabelText = document.createTextNode(this.labels[prop]);

          tickLabel.className = `
            range-slider-ticks__label ${
              this.input.value === prop ? "is-selected" : ""
            }
          `;

          tickLabel.appendChild(tickLabelText);

          tick.className = "range-slider-ticks__tick";
          tick.addEventListener("click", e =>
            this.handleLabelClick(this.labels[prop], prop, e)
          );
          tick.appendChild(tickLabel);

          document.querySelector(`#${tickListId}`).appendChild(tick);
        }
      }

      resolve();
    });
  }
}

class RangeSlider1 {
  constructor(el1) {
    this.input = document.querySelector(el1);
    this.minValue = this.input.getAttribute("min");
    this.maxValue = this.input.getAttribute("max");
    this.numTicks = this.maxValue / this.minValue;

    this.input.addEventListener("change", e => this.handleInputChange(e));

    this.wrapInput().then(res => {
      if (this.input.hasAttribute("labels")) {
        this.labels = JSON.parse(this.input.getAttribute("labels"));
        this.createTicks(res);
      }
    });
  }

  handleInputChange(e) {
    const value = e.target.value;
    const ariaValueText = !this.labels ? value : this.labels[value];
    console.log("slider2")
    this.input.setAttribute("aria-valuetext", ariaValueText);

    current= "allowance"
    changetext(e, "display1");
    update(e.target.value)

    if (this.input.hasAttribute("labels")) {
      this.setSelectedLabel(this.labels[value]);
    }
  }

  handleLabelClick(label, value, e) {
    this.input.focus();
    this.input.value = value;
    this.input.setAttribute("value", value);
    this.input.setAttribute("aria-valuetext", label);
    this.setSelectedLabel(label);
  }

  setSelectedLabel(label) {
    const selectedLabels = document.querySelectorAll(
      ".range-slider-ticks__label1"
    );

    [].forEach.call(selectedLabels, function(el) {
      el.classList[el.innerText === label ? "add" : "remove"]("is-selected");
    });
  }

  wrapInput() {
    return new Promise(resolve => {
      const wrapper = document.createElement("div");
      const wrapperId = createUniqueId("range-slider");

      wrapper.id = wrapperId;
      wrapper.className = "range-slider";

      this.input.parentNode.replaceChild(wrapper, this.input);

      document.querySelector(`#${wrapperId}`).appendChild(this.input);

      resolve(wrapperId);
    });
  }

  createTicks(wrapperId) {
    return new Promise(resolve => {
      const tickList = document.createElement("div");
      const tickListId = createUniqueId("tick-list");

      tickList.id = tickListId;
      tickList.className = "range-slider-ticks";

      document.querySelector(`#${wrapperId}`).appendChild(tickList);

      for (const prop in this.labels) {
        if (this.labels.hasOwnProperty(prop)) {
          const tick = document.createElement("div");
          const tickLabel = document.createElement("span");
          const tickLabelText = document.createTextNode(this.labels[prop]);

          tickLabel.className = `
            range-slider-ticks__label1 ${
              this.input.value === prop ? "is-selected" : ""
            }
          `;

          tickLabel.appendChild(tickLabelText);

          tick.className = "range-slider-ticks__tick";
          tick.addEventListener("click", e =>
            this.handleLabelClick(this.labels[prop], prop, e)
          );
          tick.appendChild(tickLabel);

          document.querySelector(`#${tickListId}`).appendChild(tick);
        }
      }

      resolve();
    });
  }
}


class RangeSlider2 {
  constructor(el2) {
    this.input = document.querySelector(el2);
    this.minValue = this.input.getAttribute("min");
    this.maxValue = this.input.getAttribute("max");
    this.numTicks = this.maxValue / this.minValue;

    this.input.addEventListener("change", e => this.handleInputChange(e));

    this.wrapInput().then(res => {
      if (this.input.hasAttribute("labels")) {
        this.labels = JSON.parse(this.input.getAttribute("labels"));
        this.createTicks(res);
      }
    });
  }

  handleInputChange(e) {
    const value = e.target.value;
    const ariaValueText = !this.labels ? value : this.labels[value];
    current= "allocation"
    changetext(e, "display2");
    update(e.target.value);
    
    this.input.setAttribute("aria-valuetext", ariaValueText);

    if (this.input.hasAttribute("labels")) {
      this.setSelectedLabel(this.labels[value]);
    }
  }

  handleLabelClick(label, value, e) {
    this.input.focus();
    this.input.value = value;
    this.input.setAttribute("value", value);
    this.input.setAttribute("aria-valuetext", label);
    this.setSelectedLabel(label);
  }

  setSelectedLabel(label) {
    const selectedLabels = document.querySelectorAll(
      ".range-slider-ticks__label2"
    );

    [].forEach.call(selectedLabels, function(el) {
      el.classList[el.innerText === label ? "add" : "remove"]("is-selected");
    });
  }

  wrapInput() {
    return new Promise(resolve => {
      const wrapper = document.createElement("div");
      const wrapperId = createUniqueId("range-slider");

      wrapper.id = wrapperId;
      wrapper.className = "range-slider";

      this.input.parentNode.replaceChild(wrapper, this.input);

      document.querySelector(`#${wrapperId}`).appendChild(this.input);

      resolve(wrapperId);
    });
  }

  createTicks(wrapperId) {
    return new Promise(resolve => {
      const tickList = document.createElement("div");
      const tickListId = createUniqueId("tick-list");

      tickList.id = tickListId;
      tickList.className = "range-slider-ticks";

      document.querySelector(`#${wrapperId}`).appendChild(tickList);

      for (const prop in this.labels) {
        if (this.labels.hasOwnProperty(prop)) {
          const tick = document.createElement("div");
          const tickLabel = document.createElement("span");
          const tickLabelText = document.createTextNode(this.labels[prop]);

          tickLabel.className = `
            range-slider-ticks__label2 ${
              this.input.value === prop ? "is-selected" : ""
            }
          `;

          tickLabel.appendChild(tickLabelText);

          tick.className = "range-slider-ticks__tick";
          tick.addEventListener("click", e =>
            this.handleLabelClick(this.labels[prop], prop, e)
          );
          tick.appendChild(tickLabel);

          document.querySelector(`#${tickListId}`).appendChild(tick);
        }
      }

      resolve();
    });
  }
}

// const changetext = (e, target)=>{
//   message = messages[parseInt(e.target.value)/100];
//   console.log(e)
//   let targ = document.querySelector( `#${target}` );
//   targ.innerHTML = `${message}`
// }

const changetext = (e, target)=>{
  if (e.target.className == "range-slider-input"){
      message = messages[parseInt(e.target.value)/100];
    
      let targ = document.querySelector( `#${target}` );
      targ.innerHTML = `${message}`
  }
  else if (e.target.className == "range-slider-input--1"){
      message = messages1[parseInt(e.target.value)/100];
    
      let targ = document.querySelector( `#${target}` );
      targ.innerHTML = `${message}`
  }
  else if (e.target.className == "range-slider-input--2"){
      message = messages2[parseInt(e.target.value)/100];
    
      let targ = document.querySelector( `#${target}` );
      targ.innerHTML = `${message}`
  }

  console.log(e.target.className)

}
const update = (e)=>{
     let changes = document.querySelector("#changes");
     let savings = document.querySelector("#savings");
     let cuts = document.querySelector("#cuts");
     let allowance_targ = document.querySelector("#allowance");
     let allocation_targ = document.querySelector("#allocation");
     let salary_targ = document.querySelector("#salary");
     if (current == "salary"){
      salary =  base_salary - (base_salary*((e-100)/1000))
      salary_targ.innerHTML = `N${(salary).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  ;
      cuts.innerHTML = `N${((base_salary*((e-100)/1000))+(base_allowance - allowance) + base_allocation - allocation).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  ;
     }
     else if (current == "allowance"){
      allowance =  base_allowance - (base_allowance*((e-100)/1000))
      allowance_targ.innerHTML = `N${(allowance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  ;
      cuts.innerHTML = `N${(base_allowance*((e-100)/1000)+(base_salary - salary) + base_allocation - allocation).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  ;
     }
     else if (current == "allocation"){
      allocation =  base_allocation - (base_allocation*((e-100)/1000))
      allocation_targ.innerHTML = `N${(allocation).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  ;
      savings.innerHTML = `N${((base_allocation*((e-100)/1000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))}`  ;
      cuts.innerHTML = `N${(base_allowance*((e-100)/1000)+(base_salary - salary) + base_allocation - allocation).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  ;
     }
     else if (current == "none"){
      savings.innerHTML = `N${0}`  ;
      cuts.innerHTML = `N${0}`  ;
      savings.innerHTML = `N${0}`;
      salary = 750000;
      allowance = 12500000;
      allocation = 200000000;
      return;
     }

     savings.innerHTML = `N${((base_allocation - allocation) * no_of_senators + ((base_allowance - allowance) + (base_salary - salary))
                               * no_of_senators).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`  ;
}

new RangeSlider(".range-slider-input");

new RangeSlider1(".range-slider-input--1");

new RangeSlider2(".range-slider-input--2");