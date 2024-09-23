// Noakhali

document.getElementById("noakhali-btn").addEventListener("click", function () {
  const myBalance = getTextValueById("my-balance");
  const noakhaliBalance = getTextValueById("noakhali-balance");
  const noakhaliDonateAmount = getInputValueById("noakhali-donate-amount");
  if (isNaN(noakhaliDonateAmount) || noakhaliDonateAmount < 0) {
    alert("please enter a valid number");
  } else if (myBalance < noakhaliDonateAmount) {
    alert("your balance no");
  } else {
    const updateMyBalance = myBalance - noakhaliDonateAmount;
    const updateNoakhaliBalance = noakhaliBalance + noakhaliDonateAmount;
    document.getElementById("my-balance").innerText = updateMyBalance;
    document.getElementById("noakhali-balance").innerText =
      updateNoakhaliBalance;
    if (!isNaN(noakhaliDonateAmount)) {
      document.getElementById("modal").classList.remove("hidden");
      document
        .getElementById("modal-btn")
        .addEventListener("click", function () {
          document.getElementById("modal").classList.add("hidden");
        });
    }
  }

  // history

  const historySection = document.createElement("div");
  historySection.className = " border border-gray-400 p-5 my-3 rounded-sm";
  historySection.innerHTML = `
  <p class= 'font-bold'> ${noakhaliDonateAmount} Taka Donate for Flood at Noakhali, Bangladesh </p>
   <p class= 'text-gray-500 text-sm'> Date: ${new Date()} </p> `;

  document.getElementById("history").appendChild(historySection);

  // input Clear
  document.getElementById("noakhali-donate-amount").value = "";
});

// Feni *********
document.getElementById("feni-btn").addEventListener("click", function () {
  const myBalance = getTextValueById("my-balance");
  const feniBalance = getTextValueById("feni-balance");
  const feniDonateAmount = getInputValueById("feni-donate-amount");

  if (isNaN(feniDonateAmount) || feniDonateAmount < 0) {
    alert("please enter a valid number");
  } else if (myBalance < feniDonateAmount) {
    alert("your balance no");
  } else {
    const updateMyBalance = myBalance - feniDonateAmount;
    const updateFeniBalance = feniBalance + feniDonateAmount;

    document.getElementById("my-balance").innerText = updateMyBalance;
    document.getElementById("feni-balance").innerText = updateFeniBalance;
    if (!isNaN(feniDonateAmount)) {
      document.getElementById("modal").classList.remove("hidden");
      document
        .getElementById("modal-btn")
        .addEventListener("click", function () {
          document.getElementById("modal").classList.add("hidden");
        });
    }
  }
  // history
  const historySection = document.createElement("div");
  historySection.className = " border border-gray-400 p-5 my-3 rounded-sm";
  historySection.innerHTML = `
  <p class= 'font-bold'> ${feniDonateAmount} Taka Donate for Flood Relief in Feni,Bangladesh</p>
   <p class= 'text-gray-500 text-sm'> Date: ${new Date()} </p> `;

  document.getElementById("history").appendChild(historySection);
  // input Clear
  document.getElementById("feni-donate-amount").value = "";
});

// Quota protest
document.getElementById("quota-btn").addEventListener("click", function () {
  const myBalance = getTextValueById("my-balance");
  const quotaBalance = getTextValueById("quota-balance");
  const quotaDonateAmount = getInputValueById("quota-donate-amount");

  if (isNaN(quotaDonateAmount) || quotaDonateAmount < 0) {
    alert("please enter a valid number");
  } else if (myBalance < quotaDonateAmount) {
    alert("your balance no");
  } else {
    const updateMyBalance = myBalance - quotaDonateAmount;
    const updateQuotaBalance = quotaBalance + quotaDonateAmount;

    document.getElementById("my-balance").innerText = updateMyBalance;
    document.getElementById("quota-balance").innerText = updateQuotaBalance;
    if (!isNaN(quotaDonateAmount)) {
      document.getElementById("modal").classList.remove("hidden");
      document
        .getElementById("modal-btn")
        .addEventListener("click", function () {
          document.getElementById("modal").classList.add("hidden");
        });
    }
  }

  // history
  const historySection = document.createElement("div");
  historySection.className = " border border-gray-400 p-5 my-3 rounded-sm";
  historySection.innerHTML = `
  <p class= 'font-bold'> ${quotaDonateAmount} Taka Donate for Injured in the Quota Movement,Bangladesh</p>
   <p class= 'text-gray-500 text-sm'> Date: ${new Date()} </p> `;

  document.getElementById("history").appendChild(historySection);
  // input Clear
  document.getElementById("quota-donate-amount").value = "";
});

// history and donate button switching
const historyButton = document.getElementById("history-btn");
const donateButton = document.getElementById("donate-btn");
historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-[#b4f461]");
  historyButton.classList.remove("border", "border-gray-400", "text-gray-500");

  donateButton.classList.remove("bg-[#b4f461]");
  donateButton.classList.add("border", "border-gray-400", "text-gray-500");
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("donate-section").classList.add("hidden");
});

donateButton.addEventListener("click", function () {
  donateButton.classList.add("bg-[#b4f461]");
  donateButton.classList.remove("border", "border-gray-400", "text-gray-500");

  historyButton.classList.remove("bg-[#b4f461]");
  historyButton.classList.add("border", "border-gray-400", "text-gray-500");

  document.getElementById("history").classList.add("hidden");
  document.getElementById("donate-section").classList.remove("hidden");
});
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
