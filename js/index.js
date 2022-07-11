// Tabs object

class Tabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".triggers");
  }
  init() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    // remove current active class
    this.tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // add new active class
    e.target.classList.add("active");
  }
  toggleContent(e) {
    // remove current active class
    this.container.querySelectorAll(".mainContent").forEach((item) => {
      item.classList.remove("active");
    });
    this.container.querySelectorAll(".secondaryContent").forEach((item) => {
      item.classList.remove("active");
    });

    // add new active class
    const selector = e.target.getAttribute("data-target");
    const contents = this.container.querySelectorAll(selector);

    contents.forEach((content) => {
      content.classList.add("active");
    });
  }
}

// create tabs
const tabs = new Tabs(document.querySelector(".container"));
tabs.init();

// fetch monthly data
const fetchMonthlyData = async () => {
  const response = await fetch("../data/data.json");
  const data = await response.json();
  return data[0];
};

fetchMonthlyData()
  .then((data) => {
    // console.log(data.monthly);
    const monthlyData = data.monthly;
  })
  .catch((err) => {
    console.log(err);
  });

// yearly tabs active class switch
const tabLists = document.querySelectorAll(".tabList li");
console.log(tabLists);

tabLists.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabLists.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
