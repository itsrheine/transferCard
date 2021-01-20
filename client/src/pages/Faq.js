import React from "react";

const Faq = () => {

  return (
    <div className="container">
      <div class="row">
        <div class="column">
          <h2>How to Purchase Tickets - Online and Mobile</h2>
          <p><i>For your convenience and for your safety, transferCard is now exclusively accepting cashless payments on web and mobile application.</i></p>
          <p>Purchase your tickets at any time on URLHERE with:
            <ul>
              <li>Valid credit card (Visa, Mastercard®, American Express, Discover®)</li>
              <li>Google Pay</li>
            </ul>
          </p>
          <p>*We currently do not accept travelers cheques or money orders.</p>
        </div>
        <div class="column">
          <h2>How do I use my Transfer card?</h2>
          <p>To use your card, locate your transferCard and tag it by holding it on top of the train's card reader.  The reader will be on the train station platform.  At the end of your trip, you will need to tag your card again since charges are based on distance or zones.</p>
          <p>Your transferCard will let you know if it is expired when the card reader beeps twice and flashes a yellow light.</p>
          <p>If your transferCard barcode does not work or is not accepted, please contact us via <a href="info@transferCard.com">info@transferCard.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;