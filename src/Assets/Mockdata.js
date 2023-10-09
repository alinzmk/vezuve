export let UserData = [
    {
      id: 1,
      uniqueID: "12D312D",
      email: "ali@hotmail.com",
      phone: "5325325555",
      password: "12345",
      name: "Ali Nazım Küçük",
      year: 2016,
      currentPlan: "Amazon Business",
      expert: "Burak Bey",
      expertmail: "burak@vezuve.com",
      startDate: "2020-12-31T12:00:00Z",
      finishDate: "2023-01-01T12:00:00Z", 
      accountName: "VEZUZE COMPANY",
      companyTitle: "Chief Technology Officer",
      taxAdmin: "ANKARA",
      taxNumber: "987654321",
      city: "TRABZON", 
      adress: "ORTAHİSAR/TRABZON",
      totalSales: 181,
      totalPurchase: 14,
      totalOrder: 104,
      totalGrowth: "1.100.204",
      reportGraph: [
        { month: 'Jan', value: 374 },
        { month: 'Feb', value: 200 },
        { month: 'Mar', value: 400 },
        { month: 'April', value: 542 },
        { month: 'May', value: 122 },
        { month: 'June', value: 325 },
        { month: 'July', value: 667 },
        { month: 'Aug', value: 531 },
        { month: 'Sep', value: 933 }
      ],
      status:[
        { month: 'January', value: 374 },
        { month: 'February', value: 200 },
        { month: 'March', value: 400 },
      ],
      bankInfo: false,
      identityDocument: false,
      activityDocument: false,
      englandCertificate: false,
      taxPlate: false,
      bill: false,
      watRegister: false,
    },
    {
      id: 2,
      email: "bertay@hotmail.com",
      password: "12345",
      name: "Ali Bertay Solak",
      year: 2017,
      currentPlan: "Premium Pack",
      accountName: "Ali Bertay",
      companyTitle: "Chief Executive Officer",
      taxAdmin: "ISTANBUL",
      taxNumber: "123456789",
      city: "ISTANBUL",
      adress: "Sakarya Caddesi 1050 No'lu Sokak Kat:5 ÇANKAYA/ANKARA",
      totalSales: 99,
      totalPurchase: 90,
      totalOrder: 89,
      totalGrowth: 999989,
      reportGraph: [
        { month: 'January', value: 500 },
        { month: 'February', value: 467 },
        { month: 'March', value: 231 },
        { month: 'April', value: 333 },
        { month: 'May', value: 672 },
        { month: 'June', value: 981 },
        { month: 'July', value: 467 },
        { month: 'August', value: 999 },
        { month: 'September', value: 1231 }
      ],
      status:{
      },
      bankInfo: false,
      identityDocument: false,
      activityDocument: true,
      englandCertificate: true,
      taxPlate: false,
    },
  ];

  export function updateUserData(id, newData) {
    const userIndex = UserData.findIndex(data => data.id === id);
  
    if (userIndex !== -1) {
      // Loop through each key in newData object
      for (const key in newData) {
        if (newData.hasOwnProperty(key)) {
          // Check if the value is a File object
          if (newData[key] instanceof File) {
            // Update the field in UserData with the corresponding key
            UserData[userIndex][key] = true;
          }
        }
      }
    } else {
      console.log(`User with ID ${id} not found`);
    }
  }
  
  
  
  
  
  