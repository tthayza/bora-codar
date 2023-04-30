import React from 'react'
import next from './assets/arrow-next.svg'
import prev from './assets/arrow-prev.svg'
import './styles/global.css'
function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <img src={prev} alt="" />
          <h3>Month</h3>
          <img src={next} alt="" />
        </header>
        <div className="calendar">
          <ul className="weeks">
            <li>Dom</li>
            <li>Seg</li>
            <li>Ter</li>
            <li>Qua</li>
            <li>Qui</li>
            <li>Sex</li>
            <li>Sáb</li>
          </ul>
          <ul className="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
