export const Resources = [
    {
      id: "r1",
      name: "Loki"
    },
    {
      id: "r2",
      name: "Maverick"
    },
    {
      id: "r3",
      name: "Ray"
    },
    {
      id: "r4",
      name: "Yoda"
    },
    {
      id: "r5",
      name: "Estee"
    },
    {
      id: "r6",
      name: "Tango"
    }
  ];
  
  const e1 = {
    id: 1,
    start: "2017-12-18 09:30:00",
    end: "2017-12-18 12:30:00",
    resourceId: "r1",
    title: "A",
    bgColor: 'lightblue'
  };
  
  const e2 = {
    id: 2,
    start: "2017-12-18 11:00:00",
    end: "2017-12-18 14:30:00",
    resourceId: "r1",
    title: "B",
    bgColor: 'lightblue'
  };
  
  const e3 = {
    id: 3,
    start: "2017-12-18 11:00:00",
    end: "2017-12-18 14:30:00",
    resourceId: "r2",
    title: "B",
    bgColor: 'lightblue'
  };
  
  const e4 = {
    id: 4,
    start: "2017-12-18 11:00:00",
    end: "2017-12-18 14:30:00",
    resourceId: "r3",
    title: "B",
    bgColor: 'lightblue'
  };
  
  const e5 = {
    id: 5,
    start: "2017-12-19 09:30:00",
    end: "2017-12-19 12:30:00",
    resourceId: "r1",
    title: "A",
    bgColor: 'lightblue'
  };
  
  const e6 = {
    id: 6,
    start: "2017-12-19 11:00:00",
    end: "2017-12-19 14:30:00",
    resourceId: "r2",
    title: "B",
    bgColor: 'lightblue'
  };
  
  const e7 = {
    id: 7,
    start: "2017-12-19 11:00:00",
    end: "2017-12-19 14:30:00",
    resourceId: "r2",
    title: "B",
    bgColor: 'lightblue'
  };
  
  const e8 = {
    id: 8,
    start: "2017-12-19 11:00:00",
    end: "2017-12-19 14:30:00",
    resourceId: "r3",
    title: "B",
    bgColor: 'lightblue'
  };

  const f1 = {
    id: 9,
    start: "2017-12-18 09:30:00",
    end: "2017-12-18 12:30:00",
    resourceId: "r4",
    title: "A",
    bgColor: 'lightgreen'
  };

  export const WorkingEvents = [e1, e2, e3, e4, e5, e6, e7, e8, f1];
  
  export const NonWorkingEvents = [e2, e1];
  
  export const WorkaroundEvents = [...NonWorkingEvents].sort(function (a, b) {
    var dateA = new Date(a.start),
      dateB = new Date(b.start);
    return dateA - dateB; //sort by date ascending
  });
  