export default function Accordion(prop) {
    
  return (
    <>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {prop.category.map((x,index) => {
          return (
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${index}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {x}
                </button>
              </h2>
              <div
                id={index}
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body"></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
