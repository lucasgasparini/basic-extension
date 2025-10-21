"use strict";

console.log("Hello, popup!");

function setBadgeText(enabled) {
  const text = enabled ? "ON" : "OFF";
  chrome.actions.setBadgeText({ text: text });
}

const checkbox = document.getElementById("enabled");
chrome.storage.sync.get("enabled", (data) => {
  checkbox.checked = !!data.enabled;
  void setBadgeText(data.enabled);
});
checkbox.addEventListener("change", (event) => {
  if (event.target instanceof HTMLInputElement) {
    void chrome.storage.sync.set({ enabled: event.target.checked });
    void setBadgeText(event.target.checked);
  }
});

const input = document.getElementById("item");
chrome.storage.sync.get("item", (data) => {
  input.value = data.item || "";
});
input.addEventListener("change", (event) => {
  if (event.target instanceof HTMLInputElement) {
    void chrome.storage.sync.set({ item: event.target.value });
  }
});
