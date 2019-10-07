{
ui: {
  currentScreen: "HomeScreen",
    fullScreenPhoto : false,
},
appData: {
  albums: {
    byId: {
      "album1": {
        id: "album1",
          name : "Money Tree",
            entries : [
              "entry1",
              "entry2",
              "entry3"
            ]
      },
      "album2": {
        id: "album2",
          name : "Lemon Tree",
            entries : [
              "entry4",
              "entry5",
              "entry6"
            ]
      }
    },
    allIds: [
      "album1",
      "album2"
    ]
  },
  entries: {
    byId: {
      "entry1": {
        id: "entry1",
          photoUri : "mypic.jpeg"
        note: "new growth!",
          date : "September 30, 2019"
      },
      "entry2": {
        id: "entry2",
          photoUri : "myplantpic.jpeg"
        note: "gave him some water",
          date : "August 1, 2019"
      },
      "entry3": {
        id: "entry3",
          photoUri : "mypic3.jpeg"
        note: "looking good",
          date : "August 2, 2019"
      },
    }
  },
  settings: {
    userName: "Rochelle",
      notifications: "daily",
        colorTheme: "light"
  }
}
}