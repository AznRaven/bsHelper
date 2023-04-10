export default function NavTabHead({name}) {
  return (
    <>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id={`${name}-tab`}
          data-bs-toggle="tab"
          data-bs-target={`#${name}-tab-pane`}
          type="button"
          role="tab"
          aria-controls={`${name}-tab-pane`}
          aria-selected="false"
        >
          {name}
        </button>
      </li>
    </>
  );
}
