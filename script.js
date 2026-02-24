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

