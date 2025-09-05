import React from 'react';
import './BookingForm.css';

function BookingForm({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  updateAvailableTimes,
  handleSubmit,
}) {
  return (
    <div 
      // style={{
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   height: '100vh'
      // }}
      className='form-container'
    >
      <form
        // style={{
        //   display: 'grid',
        //   maxWidth: '200px',
        //   gap: '20px',
        //   padding: '20px',
        //   border: '1px solid #ccc',
        //   borderRadius: '10px',
        //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        // }}
        onSubmit={handleSubmit}
      >
        <div className="input-box">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='reserve-input'
          />
        </div>
        <div className="input-box">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select a time</option>
            {availableTimes.map((availableTime) => (
              <option className='reserve-option' key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>
        <div className="input-box">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.valueAsNumber)}
            className='reserve-input'
          />
        </div>
        <div className="input-box">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option className='reserve-option'>Birthday</option>
            <option className='reserve-option'>Anniversary</option>
          </select>
        </div>
        <div className="submit">
          <input
            type="submit"
            value="Make Your reservation"
            className='reserve-submit'
          />
        </div>
      </form>
    </div>
  );
}

export default BookingForm;