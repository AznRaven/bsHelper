import Accordion from "./Accordian";

export default function NavTabAccordianBody(props) {
  const { count, setCount } = props;
  return (
    <>
      <div
        class="tab-pane fade show active"
        id="Accordian-tab-pane"
        role="tabpanel"
        aria-labelledby="Accordian-tab"
        tabindex="0"
      >
        <div className="d-flex bg-dark justify-content-around">
          <div class="accordion accordion-flush col-10 my-3" id="accordionFlushTest">
            <Accordion count={count} />
          </div>
          <div class="form-floating mb-3 my-3">
            <input
              value={count}
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setCount(e.target.value)}
            />
            <label for="floatingInput" className="fs-5">
              Enter Count
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
