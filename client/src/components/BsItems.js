import Accordion from "./Accordian";
import { useState } from "react";
import Alert from "./Alert";
import AccordionItem from "./AccordianItem";
import NavTabHead from "./NavTabHead";
import NavTabAlertBody from "./NavTabAlertBody";
import NavTabHead1 from "./NavTabHead1";
import NavTabAccordianBody from "./NavTabAccordianBody";
import NavTabBody from "./NavTabBody";
export default function BsItems() {
  let [count, setCount] = useState(3);
  // let category = [
  //   {
  //     name: "Components",
  //     items: [
  //       "Accordion",
  //       "Alerts",
  //       "Badge",
  //       "Breadcrumb",
  //       "Buttons",
  //       "Button Group",
  //       "Card",
  //       "Carousel",
  //       "Close Button",
  //       "Collapse",
  //       "Dropdowns",
  //       "List Group",
  //       "Modal",
  //       "Navbar",
  //       "Navs & Tabs",
  //       "Offcanvas",
  //       "Pagination",
  //       "Placeholders",
  //       "Popovers",
  //       "Progress",
  //       "Scrollspy",
  //       "Spinners",
  //       "Toasts",
  //       "Tooltips",
  //     ],
  //   },
  //   {
  //     name: "Content",
  //     items: [],
  //   },
  //   {
  //     name: "Customize",
  //     items: [],
  //   },
  //   {
  //     name: "Forms",
  //     items: [],
  //   },
  //   {
  //     name: "Helpers",
  //     items: [],
  //   },
  //   {
  //     name: "Layout",
  //     items: [],
  //   },
  //   {
  //     name: "Utilities",
  //     items: [],
  //   },
  // ];
  // const accordionArr = document.querySelector('.mAccordian');
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  const appendAlert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const alertTrigger = document.getElementById("liveAlertBtnSuccess");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      appendAlert("Nice, you triggered this alert message!", "success");
    });
  }
  return (
    <>
      <div className="">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {/* Components */}
          {/* <AccordionItem name={"Accordion"} /> */}
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Components
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              {/* Body */}

              <ul class="nav nav-tabs" id="myTab" role="tablist">
                {/* <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="Accordian-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Accordian-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="Accordian-tab-pane"
                    aria-selected="true"
                  >
                    Accordian
                  </button>
                </li> */}
                <NavTabHead1 name={"Accordian"}/>
                <NavTabHead name={"Alert"} />
                <NavTabHead name={"Badge"} />
                <NavTabHead name={"Breadcrumb"} />
                <NavTabHead name={"Buttons"} />
                <NavTabHead name={"Button-Group"} />
                <NavTabHead name={"Card"} />
                <NavTabHead name={"Carousel"} />
                <NavTabHead name={"Close Button"} />
                <NavTabHead name={"Collapse"} />
                <NavTabHead name={"Dropdowns"} />
                <NavTabHead name={"List-Group"} />
                <NavTabHead name={"Modal"} />
                <NavTabHead name={"Navbar"} />
                <NavTabHead name={"Navs&Tabs"} />
                <NavTabHead name={"OffCanvas"} />
                <NavTabHead name={"Pagination"} />
                <NavTabHead name={"Placeholders"} />
                <NavTabHead name={"Popovers"} />
                <NavTabHead name={"Progress"} />
                <NavTabHead name={"Scrollspy"} />
                <NavTabHead name={"Spinners"} />
                <NavTabHead name={"Toasts"} />
                <NavTabHead name={"Tooltips"} />
              </ul>
              <div class="tab-content" id="myTabContent">
                
                <NavTabAccordianBody count={count} setCount={setCount}/>
                <NavTabAlertBody/>
                {/* <NavTabBody name={Alert}/> */}

                
              </div>
            </div>
          </div>
          <AccordionItem name={"Customize"} />
          <AccordionItem name={"Forms"} />
          <AccordionItem name={"Helpers"} />
          <AccordionItem name={"Layout"} />
          <AccordionItem name={"Utilities"} />
        </div>
      </div>
    </>
  );
}
