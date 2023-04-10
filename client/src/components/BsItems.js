import Accordion from "./Accordian";
import { useState } from "react";
export default function BsItems() {
  let [count, setCount] = useState(3);
  let category = [
    {
      name: "Components",
      items: [
        "Accordion",
        "Alerts",
        "Badge",
        "Breadcrumb",
        "Buttons",
        "Button Group",
        "Card",
        "Carousel",
        "Close Button",
        "Collapse",
        "Dropdowns",
        "List Group",
        "Modal",
        "Navbar",
        "Navs & Tabs",
        "Offcanvas",
        "Pagination",
        "Placeholders",
        "Popovers",
        "Progress",
        "Scrollspy",
        "Spinners",
        "Toasts",
        "Tooltips",
      ],
    },
    {
      name: "Content",
      items: [],
    },
    {
      name: "Customize",
      items: [],
    },
    {
      name: "Forms",
      items: [],
    },
    {
      name: "Helpers",
      items: [],
    },
    {
      name: "Layout",
      items: [],
    },
    {
      name: "Utilities",
      items: [],
    },
  ];
  // const accordionArr = document.querySelector('.mAccordian');

  return (
    <>
      <div className="">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {/* Components */}
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
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
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
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Profile
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    Contact
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#disabled-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="disabled-tab-pane"
                    aria-selected="false"
                    disabled
                  >
                    Disabled
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active p-2 bg-dark"
                  id="Accordian-tab-pane"
                  role="tabpanel"
                  aria-labelledby="Accordian-tab"
                  tabindex="0"
                >
                  {/* Show Accordion*/}
                  {
                    <>
                      <div class="form-floating mb-3">
                        <input
                          value={count}
                          type="email"
                          class="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                          onChange={(e) => setCount(e.target.value)}
                        />
                        <label for="floatingInput" className="fs-5">Enter Count</label>
                      </div>
                      <div
                        class="accordion accordion-flush"
                        id="accordionFlushTest"
                      >
                        <Accordion count={count} />
                      </div>
                    </>
                  }
                </div>
                <div
                  class="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="contact-tab-pane"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                  tabindex="0"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="disabled-tab-pane"
                  role="tabpanel"
                  aria-labelledby="disabled-tab"
                  tabindex="0"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
