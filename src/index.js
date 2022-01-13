import axios from "axios";

const request = axios.get("https://cat-fact.herokuapp.com/facts");
const root = document.querySelector(".root");

request.then(response => {
  root.innerHTML = `
      <ul>
        ${response.data.map(fact => `
          <li>${fact.text}</li>
        `).join('')}
      </ul>
    `;
});