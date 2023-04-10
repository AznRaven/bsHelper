export default function Alert() {
  return (
    <>
      <div id="liveAlertPlaceholder"></div>
      <button type="button" class="btn btn-success" id="liveAlertBtnSuccess">
        Show live alert
      </button>
      <button
        onClick={() => {
          const alertDanger = document.createElement("div");
          alertDanger.classList.add("alert", "alert-danger");
          alertDanger.textContent = "This is a danger alert!";
          const alertPlaceholder = document.getElementById(
            "liveAlertPlaceholder"
          );
          alertPlaceholder.appendChild(alertDanger);
        }}
        type="button"
        class="btn btn-danger"
        id="liveAlertBtnDanger"
      >
        Show live alert
      </button>
    </>
  );
}
