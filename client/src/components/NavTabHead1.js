export default function NavTabHead1({name}) {
    return (
      <>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id={`${name}-tab`}
            data-bs-toggle="tab"
            data-bs-target={`#${name}-tab-pane`}
            type="button"
            role="tab"
            aria-controls={`${name}-tab-pane`}
            aria-selected="true"
          >
            {name}
          </button>
        </li>
      </>
    );
  }
  