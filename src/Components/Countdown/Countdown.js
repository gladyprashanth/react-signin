import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countDown, setCountDown] = useState(''); // State to hold the countdown text

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    // Update the count down every 1 second
    const intervalId = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the countdown state
      setCountDown(`${days}D ${hours}H ${minutes}M ${seconds}S`);

      // If the count down is finished, clear the interval and update the countdown state
      if (distance < 0) {
        clearInterval(intervalId);
        setCountDown("EXPIRED");
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p
      id="demo"
      className='rounded-4 w-75 mx-5 fw-bold '
      style={{
        background: '#FFB300',
        color: '#2A27E9',
        fontSize: '40px', // Adjust the font size as needed
         padding: '2px', // Add padding for better visibility
      }}
    >
      {countDown}
    </p>
  );
};

export default CountdownTimer;
