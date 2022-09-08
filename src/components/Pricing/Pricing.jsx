import React from "react";
import './Pricing.css';


function Pricing() {

  return (

      <div className="price-table-wrapper">
        <div className="pricing-table table">
          <h2 className="pricing-table__header--media">10 GODZIN</h2>
          <div className="table-content">
            <div className="table-upper">
              <h2 className="pricing-table__header">10 GODZIN</h2>
              <h3 className="pricing-table__price">1000 zł</h3>
            </div>
            <ul className="pricing-table__list table-lower">
              <li>100zł / 60min</li>
              <li>2 raty: 500zł + 550zł </li>
              <li>3 raty: 400zł + 400zł + 300 zł </li>
            </ul>
          </div>
          <a target="_blank" className="pricing-table__button" href="http://www.digimadmedia.com">
                Zapisz się!
              </a>
        </div>
        <div className="featured-table table">
          <h2 className="pricing-table__header--media">20 GODZIN</h2>
          <div className="table-content">
            <div className="table-upper">
              <h2 className="pricing-table__header">20 GODZIN</h2>
              <h3 className="pricing-table__price">1800 zł</h3>
            </div>
            <ul className="pricing-table__list table-lower">
              <li>90zł / 60min</li>
              <li>2 raty: 900zł + 950zł</li>
              <li>3 raty: 700zł + 600zł + 600zł</li>
            </ul>
          </div>
          <a target="_blank" className="pricing-table__button" href="http://www.digimadmedia.com">
            Zapisz się!
          </a>
        </div>
        <div className="pricing-table table">
          <h2 className="pricing-table__header--media">40 GODZIN</h2>
          <div className="table-content">
            <div className="table-upper">
              <h2 className="pricing-table__header">40 GODZIN</h2>
              <h3 className="pricing-table__price">3200 zł</h3>
            </div>
            <ul className="pricing-table__list table-lower">
              <li>80zł / 60min</li>
              <li>2 raty: 1600zł + 1650zł</li>
              <li>3 raty: 1200zł + 1100 zł + 1000zł</li>
            </ul>
          </div>
          <a target="_blank" className="pricing-table__button" href="http://www.digimadmedia.com">
            Zapisz się!
          </a>
        </div>
      </div>

  )
}

export default Pricing;