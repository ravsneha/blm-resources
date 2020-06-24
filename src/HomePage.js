import React from 'react';
import './css/index.css';

function HomePage() {
  return (
    <div className="HomePage">
      <div class="hero">
        <h1>black lives matter</h1>
        </div>
      <div class="row cardHolder">
        <div class="card actionCard" id="donateCard">
          <a href="donate.html" class="card-link actionCardLink">
          <p class="icon"><span>&#128176;</span></p>
          <div class="card-body actionCardBody">
            <h5 class="card-title actionCardTitle">donate</h5>
            <p class="card-subtitle">even if you don't have money!</p>
          </div>
          </a>
        </div>

        <div class="card actionCard" id="advocateCard">
          <a href="https://minnesotafreedomfund.org/" class="card-link actionCardLink">
          <p class="icon"><span>&#9997;</span></p>
          <div class="card-body actionCardBody">
            <h5 class="card-title actionCardTitle">advocate</h5>
            <p class="card-subtitle">petitions, protests, and advocacy resources</p>
          </div>
          </a>
        </div>

        <div class="card actionCard" id="appreciateCard">
          <a href="https://minnesotafreedomfund.org/" class="card-link actionCardLink">
          <p class="icon"><span>&#128079;</span></p>
          <div class="card-body actionCardBody">
            <h5 class="card-title actionCardTitle">appreciate</h5>
            <p class="card-subtitle">artists, clothing brands, and more!</p>
          </div>
          </a>
        </div>

        <div class="card actionCard" id="educateCard">
          <a href="https://minnesotafreedomfund.org/" class="card-link actionCardLink">
          <p class="icon"><span>&#128214;</span></p>
          <div class="card-body actionCardBody">
            <h5 class="card-title actionCardTitle">educate</h5>
            <p class="card-subtitle">learn about blm</p>
          </div>
          </a>
        </div>
      </div>

      <div class="footer">
        <p>copyright no one, take what you need</p>
      </div>
    </div>
  );
}

export default HomePage;
