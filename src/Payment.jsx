import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SessionTokenForm = () => {
  const [formData, setFormData] = useState({
    ACTION: 'SESSIONTOKEN',
    MERCHANT: '10000000',
    ORDERITEMS: [
      {
        code: 'T00D3AITCC',
        name: 'Galaxy S8+',
        quantity: '1',
        description: 'The Samsung Galaxy S8 is Android smartphone produced by Samsung Electronics as part of the Samsung Galaxy S series.',
        amount: '1000',
      },
      {
        code: 'T00F2IONA',
        name: 'HP - 14" Chromebook',
        quantity: '1',
        description: 'Intel Celeron - 4GB Memory - 16GB eMMC Flash Memory - Silver.',
        amount: '200',
      },
    ],
    EXTRA: {
      AlwaysSaveCard: 'true',
      IntegrationModel: 'API',
    },
  });

  useEffect(() => {
    generateRandomData(); // Similar to onload="generateRandomData()" in the original file
  }, []);

  const generateRandomData = () => {
    const now = new Date();
    setFormData((prevData) => ({
      ...prevData,
      merchantpaymentid: `MPID-${now.getTime()}`,
      customerId: `CUS-${now.getTime()}`,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://test.paratika.com.tr/paratika/api/v2',
        formData
      );

      // Handle the response if needed
      console.log('API response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="container">
      <h2>Session Token</h2>
      {/* ... other HTML content */}
      <form onSubmit={handleSubmit}>
        <table>
        <table>
            <tr>
               <td>ACTION:</td>
               <td><input type="text" name="ACTION" value="PAYBYLINKPAYMENT"/></td>
            </tr>
            <tr>
               <td>MERCHANT:</td>
               <td><input type="text" name="MERCHANT" value="10000000"/></td>
            </tr>
            <tr>
               <td>MERCHANTUSER:</td>
                <td><input type="text" name="MERCHANTUSER" value="apiuser@testmerchant.com"/></td>
            </tr>
            <tr>
               <td>MERCHANTPASSWORD:</td>
               <td><input type="text" name="MERCHANTPASSWORD" value="Pluto321`"/></td>
            </tr>
            <tr>
               <td>SESSIONTYPE</td>
               <td><input type="text" name="SESSIONTYPE" value="PAYMENTSESSION"/></td>
            </tr>
            <tr>
               <td>MERCHANTPAYMENTID:</td>
               <td><input id="merchantpaymentid" type="text" name="MERCHANTPAYMENTID" value="Payment-UCUoumJV"/></td>
            </tr>
            <tr>
               <td>CURRENCY:</td>
               <td><input type="text" name="CURRENCY" value="TRY"/></td>
            </tr>
            <tr>
               <td>AMOUNT:</td>
               <td><input type="text" name="AMOUNT" value="12.00"/></td>
            </tr>
            <tr>
               <td>RETURNURL:</td>
               <td><input type="text" name="RETURNURL" value="http://localhost/paratikasamples/php/directpost/return.php"/></td>
               <td><label> (Please consider your local environment URI and Port you are using for running this project)</label>
  				</td>
            </tr>
            <tr>
               <td>CUSTOMER:</td>
               <td><input id="customerId" type="text" name="CUSTOMER" value=""/></td>
            </tr>
            <tr>
               <td>CUSTOMERNAME:</td>
                  <td><input type="text" name="CUSTOMERNAME" value="Aydonat Aydınlar"/></td>
            </tr>
            <tr>
               <td>CUSTOMEREMAIL:</td>
               <td><input type="text" name="CUSTOMEREMAIL" value="mghUzjPn@email.com"/></td>
            </tr>
             {/* <tr>
               <td>CUSTOMERIP</td>
               <td><input type="text" name="CUSTOMERIP" value="172.16.1.157:8002"/></td>
            </tr> */}
            <tr>
               <td>CUSTOMERPHONE:</td>
               <td><input type="text" name="CUSTOMERPHONE" value="+903120000011"/></td>
            </tr>
            {/* <tr>
               <td>CUSTOMERBIRTHDAY:</td>
               <td><input type="text" name="CUSTOMERBIRTHDAY" value="01-01-2001"/></td>
            </tr>
            <tr>
               <td>CUSTOMERUSERAGENT:</td>
               <td><input type="text" name="CUSTOMERUSERAGENT" 
               value="Mozilla/5.0 (Windows NT 6.1; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0"/></td>
            </tr>
            <tr>
               <td>NAMEONCARD:</td>
               <td><input type="text" name="NAMEONCARD" value="Aydonat Aydınlar"/></td>
            </tr>
             <tr>
               <td>CARDPAN:</td>
               <td><input type="text" name="CARDPAN" value="4022774022774026"/></td>
            </tr>
            <tr>
               <td>CARDEXPIRY:</td>
               <td><input type="text" name="CARDEXPIRY" value="12.2030"/></td>
            </tr>
            <tr>
               <td>CARDCVV:</td>
               <td><input type="text" name="CARDCVV" value="000"/></td>
            </tr>

            <tr>
               <td>BILLTOADDRESSLINE:</td>
               <td><input type="text" name="BILLTOADDRESSLINE" value="Çöişüğı Plaza, Ostim No:83/9, Yenimahalle"/></td>
            </tr>
            <tr>
               <td>BILLTOCITY:</td>
               <td><input type="text" name="BILLTOCITY" value="Ankara"/></td>
            </tr>
            <tr>
               <td>BILLTOCOUNTRY:</td>
                  <td><input type="text" name="BILLTOCOUNTRY" value="Türkiye"/></td>
            </tr>
            <tr>
               <td>BILLTOPOSTALCODE:</td>
               <td><input type="text" name="BILLTOPOSTALCODE" value="06000"/></td>
            </tr>
            <tr>
               <td>BILLTOPHONE:</td>
                  <td><input type="text" name="BILLTOPHONE" value="+903120000001"/></td>
            </tr>
            <tr>
               <td>SHIPTOADDRESSLINE:</td>
               <td><input type="text" name="SHIPTOADDRESSLINE" value="Plaza ÇÖİŞÜĞI, Ostim No:83/9, Yenimahalle"/></td>
            </tr>
             <tr>
               <td>SHIPTOCITY</td>
               <td><input type="text" name="SHIPTOCITY" value="Ankara"/></td>
            </tr>
            <tr>
               <td>SHIPTOCOUNTRY:</td>
               <td><input type="text" name="SHIPTOCOUNTRY" value="Türkiye"/></td>
            </tr>
            <tr>
               <td>SHIPTOPOSTALCODE:</td>
               <td><input type="text" name="SHIPTOPOSTALCODE" value="06000"/></td>
            </tr>
            <tr>
               <td>SHIPTOPHONE:</td>
               <td><input type="text" name="SHIPTOPHONE" value="+903120000001"/></td>
            </tr> */}
            <tr> 
            <td>ORDERITEMS:</td>
            <td>
              <input
                type="text"
                name="ORDERITEMS"
                value={JSON.stringify(formData.ORDERITEMS)}
                onChange={handleChange}
              />
            </td>
            <td>
              <label>
                Decoded ORDERITEMS param:{' '}
                {JSON.stringify(formData.ORDERITEMS, null, 2)}
              </label>
            </td>
          </tr>
          {/* <tr>
            <td>EXTRA:</td>
            <td>
              <input
                type="text"
                name="EXTRA"
                value={JSON.stringify(formData.EXTRA)}
                onChange={handleChange}
              />
            </td>
            <td>
              <label>
                Decoded EXTRA param:{' '}
                {JSON.stringify(formData.EXTRA, null, 2)}
              </label>
            </td>
          </tr> */}
            <tr>
               <td></td>
               <td></td>
            </tr>
         </table>
        </table>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SessionTokenForm;
