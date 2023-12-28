import React, { useState, useEffect } from 'react';

const PaymentForm = () => {
  const [payWithCardToken, setPayWithCardToken] = useState(false);

  useEffect(() => {
    hideCardPANData();
  }, []);

  const hideCardPANData = () => {
    const cardPANData = document.getElementById('cardPANData');
    const cardTokenContainer = document.getElementById('cardTokenContainer');

    if (document.getElementById('isPayWithCardToken').checked) {
      cardPANData.style.display = 'none';
      cardTokenContainer.style.display = 'block';
    } else {
      cardTokenContainer.style.display = 'none';
      cardPANData.style.display = 'block';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      action="https://vpos.paratika.com.tr/merchant/post/sale/[SECURE_SESSION_TOKEN]"
      method="post"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="isPayWithCardToken">Pay with Card Token</label>
        <input
          type="checkbox"
          onClick={hideCardPANData}
          name="isPayWithCardToken"
          id="isPayWithCardToken"
          autoComplete="off"
          maxLength="32"
          checked={payWithCardToken}
          onChange={(e) => setPayWithCardToken(e.target.checked)}
        />
      </div>
      <div className="container">
        <div id="cardPANData">
          {/* ... Rest of the form fields */}
        </div>
        <div id="cardTokenContainer">
          {/* ... Rest of the form fields */}
        </div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default PaymentForm;
