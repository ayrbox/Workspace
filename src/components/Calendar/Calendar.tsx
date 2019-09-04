import React from 'react'

import WeekDays from './WeekDays';

export default function Calendar() {
  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>
          November
          <button>▾</button>
        </h1>
        <p>2018</p>
      </div>
      <div className="calendar">
        <button type="button">This is button in Grid</button>
        <WeekDays /> 
        <div className="day day--disabled">30</div>
        <div className="day day--disabled">31</div>
        <div className="day">1</div>
        <div className="day">2</div>
        <div className="day">3</div>
        <div className="day">4</div>
        <div className="day">5</div>
        <div className="day">6</div>
        <div className="day">7</div>
        <div className="day">8</div>
        <div className="day">9</div>
        <div className="day">10</div>
        <div className="day">11</div>
        <div className="day">12</div>
        <div className="day">13</div>
        <div className="day">14</div>
        <div className="day">15</div>
        <div className="day">16</div>
        <div className="day">17</div>
        <div className="day">18</div>
        <div className="day">19</div>
        <div className="day">20</div>
        <div className="day">21</div>
        <div className="day">22</div>
        <div className="day">23</div>
        <div className="day">24</div>
        <div className="day">25</div>
        <div className="day">26</div>
        <div className="day">27</div>
        <div className="day">28</div>
        <div className="day">29</div>
        <div className="day">30</div>
        <div className="day">31</div>
        <div className="day day--disabled">1</div>
        <div className="day day--disabled">2</div>
        <section className="task task--warning">Projects</section>
        <section className="task task--danger">Design Sprint</section>
        <section className="task task--primary">Product Checkup 1
          <div className="task__detail">
            <h2>Product Checkup 1</h2>
            <p>15-17th November</p>
          </div>
        </section>
        <section className="task task--info">Product Checkup 2</section>
      </div>
    </div>
  )
}
