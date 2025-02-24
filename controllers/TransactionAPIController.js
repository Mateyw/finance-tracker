export const getTransactionsAPI = () => {
  const transactions = {
    data: [
      {
        transferId: "TXN123456",
        paymentMethod: "Credit Card",
        transactionAmount: 49.99,
        recipientName: "Amazon",
        logoUrl: "https://logo.clearbit.com/amazon.com"
      },
      {
        transferId: "TXN789012",
        paymentMethod: "PayPal",
        transactionAmount: 15.50,
        recipientName: "Spotify",
        logoUrl: "https://logo.clearbit.com/spotify.com"
      },
      {
        transferId: "TXN345678",
        paymentMethod: "Bank Transfer",
        transactionAmount: 120.00,
        recipientName: "Netflix",
        logoUrl: "https://logo.clearbit.com/netflix.com"
      },
      {
        transferId: "TXN901234",
        paymentMethod: "Debit Card",
        transactionAmount: 30.00,
        recipientName: "Apple",
        logoUrl: "https://logo.clearbit.com/apple.com"
      },
      {
        transferId: "TXN567890",
        paymentMethod: "Google Pay",
        transactionAmount: 9.99,
        recipientName: "YouTube Premium",
        logoUrl: "https://logo.clearbit.com/youtube.com"
      },
      {
        transferId: "TXN100001",
        paymentMethod: "Credit Card",
        transactionAmount: 79.99,
        recipientName: "Walmart",
        logoUrl: "https://logo.clearbit.com/walmart.com"
      },
      {
        transferId: "TXN100002",
        paymentMethod: "Bank Transfer",
        transactionAmount: 200.00,
        recipientName: "Ebay",
        logoUrl: "https://logo.clearbit.com/ebay.com"
      },
      {
        transferId: "TXN100003",
        paymentMethod: "PayPal",
        transactionAmount: 55.75,
        recipientName: "Airbnb",
        logoUrl: "https://logo.clearbit.com/airbnb.com"
      },
      {
        transferId: "TXN100004",
        paymentMethod: "Debit Card",
        transactionAmount: 49.99,
        recipientName: "Uber",
        logoUrl: "https://logo.clearbit.com/uber.com"
      },
      {
        transferId: "TXN100005",
        paymentMethod: "Google Pay",
        transactionAmount: 19.99,
        recipientName: "DoorDash",
        logoUrl: "https://logo.clearbit.com/doordash.com"
      },
      {
        transferId: "TXN100006",
        paymentMethod: "Credit Card",
        transactionAmount: 89.99,
        recipientName: "Target",
        logoUrl: "https://logo.clearbit.com/target.com"
      },
      {
        transferId: "TXN100007",
        paymentMethod: "Bank Transfer",
        transactionAmount: 350.00,
        recipientName: "Best Buy",
        logoUrl: "https://logo.clearbit.com/bestbuy.com"
      },
      {
        transferId: "TXN100008",
        paymentMethod: "PayPal",
        transactionAmount: 22.95,
        recipientName: "Shopify",
        logoUrl: "https://logo.clearbit.com/shopify.com"
      },
      {
        transferId: "TXN100009",
        paymentMethod: "Debit Card",
        transactionAmount: 44.50,
        recipientName: "Zoom",
        logoUrl: "https://logo.clearbit.com/zoom.us"
      },
      {
        transferId: "TXN100010",
        paymentMethod: "Google Pay",
        transactionAmount: 15.00,
        recipientName: "Slack",
        logoUrl: "https://logo.clearbit.com/slack.com"
      },
      {
        transferId: "TXN100011",
        paymentMethod: "Credit Card",
        transactionAmount: 120.00,
        recipientName: "Spotify",
        logoUrl: "https://logo.clearbit.com/spotify.com"
      },
      {
        transferId: "TXN100012",
        paymentMethod: "Bank Transfer",
        transactionAmount: 65.99,
        recipientName: "Netflix",
        logoUrl: "https://logo.clearbit.com/netflix.com"
      },
      {
        transferId: "TXN100013",
        paymentMethod: "PayPal",
        transactionAmount: 150.00,
        recipientName: "Adobe",
        logoUrl: "https://logo.clearbit.com/adobe.com"
      },
      {
        transferId: "TXN100014",
        paymentMethod: "Debit Card",
        transactionAmount: 10.50,
        recipientName: "Apple Music",
        logoUrl: "https://logo.clearbit.com/apple.com"
      },
      {
        transferId: "TXN100015",
        paymentMethod: "Google Pay",
        transactionAmount: 6.99,
        recipientName: "Spotify Premium",
        logoUrl: "https://logo.clearbit.com/spotify.com"
      },
      {
        transferId: "TXN100016",
        paymentMethod: "Credit Card",
        transactionAmount: 69.95,
        recipientName: "Steam",
        logoUrl: "https://logo.clearbit.com/steampowered.com"
      },
      {
        transferId: "TXN100017",
        paymentMethod: "Bank Transfer",
        transactionAmount: 320.00,
        recipientName: "Netflix",
        logoUrl: "https://logo.clearbit.com/netflix.com"
      },
      {
        transferId: "TXN100018",
        paymentMethod: "PayPal",
        transactionAmount: 49.99,
        recipientName: "Amazon Prime",
        logoUrl: "https://logo.clearbit.com/amazon.com"
      },
      {
        transferId: "TXN100019",
        paymentMethod: "Debit Card",
        transactionAmount: 40.00,
        recipientName: "Nike",
        logoUrl: "https://logo.clearbit.com/nike.com"
      },
      {
        transferId: "TXN100020",
        paymentMethod: "Google Pay",
        transactionAmount: 99.99,
        recipientName: "Spotify",
        logoUrl: "https://logo.clearbit.com/spotify.com"
      },
      {
        transferId: "TXN100021",
        paymentMethod: "Credit Card",
        transactionAmount: 20.50,
        recipientName: "Walmart",
        logoUrl: "https://logo.clearbit.com/walmart.com"
      },
      {
        transferId: "TXN100022",
        paymentMethod: "Bank Transfer",
        transactionAmount: 330.00,
        recipientName: "HBO Max",
        logoUrl: "https://logo.clearbit.com/hbomax.com"
      },
      {
        transferId: "TXN100023",
        paymentMethod: "PayPal",
        transactionAmount: 14.75,
        recipientName: "Etsy",
        logoUrl: "https://logo.clearbit.com/etsy.com"
      },
      {
        transferId: "TXN100024",
        paymentMethod: "Debit Card",
        transactionAmount: 56.20,
        recipientName: "Home Depot",
        logoUrl: "https://logo.clearbit.com/homedepot.com"
      },
      {
        transferId: "TXN100025",
        paymentMethod: "Google Pay",
        transactionAmount: 18.99,
        recipientName: "Lyft",
        logoUrl: "https://logo.clearbit.com/lyft.com"
      },
      {
        transferId: "TXN100026",
        paymentMethod: "Credit Card",
        transactionAmount: 35.99,
        recipientName: "Target",
        logoUrl: "https://logo.clearbit.com/target.com"
      },
      {
        transferId: "TXN100027",
        paymentMethod: "Bank Transfer",
        transactionAmount: 200.50,
        recipientName: "Best Buy",
        logoUrl: "https://logo.clearbit.com/bestbuy.com"
      },
      {
        transferId: "TXN100028",
        paymentMethod: "PayPal",
        transactionAmount: 60.00,
        recipientName: "Airbnb",
        logoUrl: "https://logo.clearbit.com/airbnb.com"
      },
      {
        transferId: "TXN100029",
        paymentMethod: "Debit Card",
        transactionAmount: 15.00,
        recipientName: "Amazon",
        logoUrl: "https://logo.clearbit.com/amazon.com"
      },
      {
        transferId: "TXN100030",
        paymentMethod: "Google Pay",
        transactionAmount: 30.00,
        recipientName: "Spotify",
        logoUrl: "https://logo.clearbit.com/spotify.com"
      },
      {
        transferId: "TXN100031",
        paymentMethod: "Credit Card",
        transactionAmount: 140.00,
        recipientName: "Adobe",
        logoUrl: "https://logo.clearbit.com/adobe.com"
      },
      {
        transferId: "TXN100032",
        paymentMethod: "Bank Transfer",
        transactionAmount: 100.00,
        recipientName: "PayPal",
        logoUrl: "https://logo.clearbit.com/paypal.com"
      },
      {
        transferId: "TXN100033",
        paymentMethod: "PayPal",
        transactionAmount: 300.00,
        recipientName: "Zoom",
        logoUrl: "https://logo.clearbit.com/zoom.us"
      },
      {
        transferId: "TXN100034",
        paymentMethod: "Debit Card",
        transactionAmount: 11.99,
        recipientName: "Google",
        logoUrl: "https://logo.clearbit.com/google.com"
      },
      {
        transferId: "TXN100035",
        paymentMethod: "Google Pay",
        transactionAmount: 13.75,
        recipientName: "Uber Eats",
        logoUrl: "https://logo.clearbit.com/ubereats.com"
      },
      {
        transferId: "TXN100036",
        paymentMethod: "Credit Card",
        transactionAmount: 500.00,
        recipientName: "Apple",
        logoUrl: "https://logo.clearbit.com/apple.com"
      },
      {
        transferId: "TXN100037",
        paymentMethod: "Bank Transfer",
        transactionAmount: 220.00,
        recipientName: "Nike",
        logoUrl: "https://logo.clearbit.com/nike.com"
      },
      {
        transferId: "TXN100038",
        paymentMethod: "PayPal",
        transactionAmount: 59.99,
        recipientName: "Shopify",
        logoUrl: "https://logo.clearbit.com/shopify.com"
      },
      {
        transferId: "TXN100039",
        paymentMethod: "Debit Card",
        transactionAmount: 29.99,
        recipientName: "Zoom",
        logoUrl: "https://logo.clearbit.com/zoom.us"
      },
      {
        transferId: "TXN100040",
        paymentMethod: "Google Pay",
        transactionAmount: 7.50,
        recipientName: "Slack",
        logoUrl: "https://logo.clearbit.com/slack.com"
      },
      {
        transferId: "TXN100041",
        paymentMethod: "Credit Card",
        transactionAmount: 23.50,
        recipientName: "Home Depot",
        logoUrl: "https://logo.clearbit.com/homedepot.com"
      },
      {
        transferId: "TXN100042",
        paymentMethod: "Bank Transfer",
        transactionAmount: 90.00,
        recipientName: "Spotify",
        logoUrl: "https://logo.clearbit.com/spotify.com"
      },
      {
        transferId: "TXN100043",
        paymentMethod: "PayPal",
        transactionAmount: 80.99,
        recipientName: "Amazon",
        logoUrl: "https://logo.clearbit.com/amazon.com"
      },
      {
        transferId: "TXN100044",
        paymentMethod: "Debit Card",
        transactionAmount: 50.00,
        recipientName: "Netflix",
        logoUrl: "https://logo.clearbit.com/netflix.com"
      },
      {
        transferId: "TXN100045",
        paymentMethod: "Google Pay",
        transactionAmount: 14.99,
        recipientName: "Apple",
        logoUrl: "https://logo.clearbit.com/apple.com"
      },
      {
        transferId: "TXN100046",
        paymentMethod: "Credit Card",
        transactionAmount: 49.00,
        recipientName: "Nike",
        logoUrl: "https://logo.clearbit.com/nike.com"
      },
      {
        transferId: "TXN100047",
        paymentMethod: "Bank Transfer",
        transactionAmount: 123.00,
        recipientName: "Best Buy",
        logoUrl: "https://logo.clearbit.com/bestbuy.com"
      },
      {
        transferId: "TXN100048",
        paymentMethod: "PayPal",
        transactionAmount: 88.99,
        recipientName: "Shopify",
        logoUrl: "https://logo.clearbit.com/shopify.com"
      },
      {
        transferId: "TXN100049",
        paymentMethod: "Debit Card",
        transactionAmount: 73.50,
        recipientName: "Airbnb",
        logoUrl: "https://logo.clearbit.com/airbnb.com"
      },
      {
        transferId: "TXN100050",
        paymentMethod: "Google Pay",
        transactionAmount: 21.99,
        recipientName: "Spotify",
        logoUrl: "https://logo.clearbit.com/spotify.com"
      }
    ]
  };
  

  return transactions; // Return the data directly
};
