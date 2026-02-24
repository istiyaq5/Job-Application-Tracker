// ========================
// SELECT ELEMENTS
// ========================
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

const emptyState = document.getElementById("emptyState");
const tabJobCount = document.getElementById("tabJobCount");

// ========================
// INITIAL VALUES
// ========================
let interview = 0;
let rejected = 0;
let currentTab = "all";

// ========================
// UPDATE DASHBOARD
// ========================
function updateDashboard() {
  const total = document.querySelectorAll(".job-card").length;

  totalCount.innerText = total;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}

// ========================
// UPDATE DASHBOARD
// ========================
function updateDashboard() {
  const total = document.querySelectorAll(".job-card").length;

  totalCount.innerText = total;
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}

// ========================
// FILTER FUNCTION
// ========================
function filterCards(status) {
  let visible = 0;

  document.querySelectorAll(".job-card").forEach((card) => {
    if (status === "all" || card.dataset.status === status) {
      card.style.display = "block";
      visible++;
    } else {
      card.style.display = "none";
    }
  });

  // Update job count
  tabJobCount.innerText = visible + " jobs";

  // Empty state
  if (visible === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  // Active tab style
  allTab.classList.remove("btn-primary");
  interviewTab.classList.remove("btn-primary");
  rejectedTab.classList.remove("btn-primary");

  allTab.classList.add("btn-outline");
  interviewTab.classList.add("btn-outline");
  rejectedTab.classList.add("btn-outline");

  if (status === "all") allTab.classList.replace("btn-outline", "btn-primary");
  if (status === "interview")
    interviewTab.classList.replace("btn-outline", "btn-primary");
  if (status === "rejected")
    rejectedTab.classList.replace("btn-outline", "btn-primary");
}

// ========================
// BUTTON LOGIC
// ========================
document.querySelectorAll(".job-card").forEach((card) => {
  const interviewBtn = card.querySelector(".interview-btn");
  const rejectedBtn = card.querySelector(".rejected-btn");
  const deleteBtn = card.querySelector(".delete-btn");
  const badge = card.querySelector(".status-badge");

  // INTERVIEW BUTTON
  interviewBtn.addEventListener("click", () => {
    const current = card.dataset.status;

    if (current === "interview") {
      card.dataset.status = "all";
      badge.innerText = "NOT APPLIED";
      badge.className = "badge badge-outline mt-3 status-badge";
      interview--;
    } else {
      if (current === "rejected") rejected--;

      card.dataset.status = "interview";
      badge.innerText = "INTERVIEW";
      badge.className = "badge badge-success mt-3 status-badge";
      interview++;
    }

    updateDashboard();
    filterCards(currentTab);
  });

  // REJECTED BUTTON
  rejectedBtn.addEventListener("click", () => {
    const current = card.dataset.status;

    if (current === "rejected") {
      card.dataset.status = "all";
      badge.innerText = "NOT APPLIED";
      badge.className = "badge badge-outline mt-3 status-badge";
      rejected--;
    } else {
      if (current === "interview") interview--;

      card.dataset.status = "rejected";
      badge.innerText = "REJECTED";
      badge.className = "badge badge-error mt-3 status-badge";
      rejected++;
    }

    updateDashboard();
    filterCards(currentTab);
  });

  // DELETE BUTTON
  deleteBtn.addEventListener("click", () => {
    const current = card.dataset.status;

    if (current === "interview") interview--;
    if (current === "rejected") rejected--;

    card.remove();

    updateDashboard();
    filterCards(currentTab);
  });
});

