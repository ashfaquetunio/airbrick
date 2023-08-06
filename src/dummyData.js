export const dashboardCards = [
  {
    header: {
      icon: "assets/images/usd_badge.svg",
      value: 0.08,
      label: "MyUSD",
    },
    desc: "1 MyUSD (1.0 Peg) = 0.0808 BUSD",
    entries: [
      {
        label: "Market Cap",
        value: 80,
      },
      {
        label: "Circulating Supply",
        value: 1000,
      },
      {
        label: "Total Supply",
        value: 1000,
      },
    ],
    buttonText: "BUY MyUSD",
  },
  {
    header: {
      icon: "assets/images/my_rocks_icon.svg",
      value: 0.01,
      label: "ROCKS",
    },
    desc: "1 MyUSD (1.0 Peg) = 0.0808 BUSD",
    entries: [
      {
        label: "Market Cap",
        value: 33.33,
      },
      {
        label: "Circulating Supply",
        value: 50,
      },
      {
        label: "Total Supply",
        value: 3333,
      },
    ],
    buttonText: "NFT MINT",
  },
  {
    header: {
      icon: "assets/images/bond_badge.svg",
      value: 0.19,
      label: "BOND",
    },
    desc: "1 MyUSD (1.0 Peg) = 0.0808 BUSD",
    entries: [
      {
        label: "Market Cap",
        value: 0.76,
      },
      {
        label: "Circulating Supply",
        value: 4,
      },
      {
        label: "Total Supply",
        value: 4,
      },
    ],
    buttonText: "BUY BOND",
    disabledButton: true,
  },
];

export const dashboardItems = [
  {
    icon: "/assets/images/wave.svg",
    value: "0.08",
    label: "Peg Health",
  },
  {
    icon: "/assets/images/thumb_icon.svg",
    value: "00:00:00",
    label: "Until next Epoch",
    simple: true,
  },
  {
    icon: "/assets/images/value_icon.svg",
    value: "0",
    label: "Total Value Locked",
  },
];
export const referralItems = [
  {
    icon: "/assets/images/down_icon.svg",
    value: "0",
    label: "Referee",
    simple : true,
  },
  {
    icon: "/assets/images/amount_icon.svg",
    value: "0",
    label: "Amount Earned",
  },
  {
    icon: "/assets/images/amount_icon.svg",
    value: "0",
    label: "Balance",
    simple: true,
  },
];

export const boardroomItems = [
  {
    value: "00:00:00",
    label: "Next EPOCH",
    unit: "",
  },
  {
    value: "7",
    label: "Current EPOCH",
    unit: "",
  },
  {
    value: "0.0000",
    label: "MyUSD PEG (TWAP)",
    unit: "BUSD",
  },
  {
    value: "0",
    label: "APR",
    unit: "%",
  },
  {
    value: "40",
    label: "Rocks Staked",
    unit: "",
  },
];
export const farmItems = [
  {
    value: "Infinity%",
    label: "APR",
    unit: "",
  },
  {
    value: "Infinity%",
    label: "DAILY APR",
    unit: "",
  },
  {
    value: "Infinity%",
    label: "TVL",
    unit: "BUSD",
  },
];

export const farmCards = [
  {
    title: "MyUSD-BUSD-LP Staked",
    icons: ["/assets/images/busd_icon.svg", "/assets/images/usd_badge.svg"],
    buttonText: "Approve",
    feature: "Claim & Unstake",
    linkTextL: "Provide liquidity for",
    linkTextR: "MyUSD-BUSD",
    valueLeft: 0.0,
    valueRight: 0.0,
  },
  {
    title: "MyUSD Earned",
    icons: ["/assets/images/usd_badge.svg"],
    buttonText: "Claim & Reinvest",
    feature: "Claim only",
    valueLeft: 0.0,
    valueRight: 0.0,
  },
];

export const boardroomCard = {
  title: "MyUSD \n Earned",
  icons: ["/assets/images/usd_badge.svg"],
  buttonText: "Claim & Reinvest",
  feature: "Claim only",
  valueLeft: 0.0,
  valueRight: 0.0,
};

export const valueItems = [
  {
    icon: "/assets/images/usd_badge.svg",
    equation: "1 MyUSD = X BUSD",
    desc: "Last-Hour TWAP Price",
  },
  {
    icon: "/assets/images/bond_badge.svg",
    equation: "1 BOND = X BUSD",
    desc: "Last-Hour TWAP Price",
  },
];

export const swapItems = [
  {
    title: "Swap MyUSD for BOND",
    desc: "0.00 BOND available for purchase",
    buttonText: "Purchase BOND",
    icons: [
      "assets/images/usd_badge.svg",
      "assets/images/bond_badge.svg"
    ]
  },
  {
    title: "Swap BOND for MyUSD",
    desc: "0.00 BOND available in Wallet",
    buttonText: "Redeem BOND",
    icons: [
      "assets/images/bond_badge.svg",
      "assets/images/usd_badge.svg"
    ]
  },
];


