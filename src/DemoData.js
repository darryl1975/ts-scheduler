export const Resources = [
    {
        "deleted": false,
        "createdBy": "Darryl",
        "createdTime": "2020-09-04T09:52:45.529Z",
        "lastUpdatedBy": "Darryl",
        "lastUpdatedTime": "2020-09-07T07:08:04.747Z",
        "id": 1,
        "name": "CONEX",
        "cycleDueDate": "2021-04-04",
        "daysToDue": 90,
        "squadron": {
            "id": 1
        }
    },
    {
        "deleted": false,
        "createdBy": "Darryl",
        "createdTime": "2020-09-04T09:52:45.529Z",
        "lastUpdatedBy": "Darryl",
        "lastUpdatedTime": "2020-09-07T07:08:16.797Z",
        "id": 2,
        "name": "APP COORD",
        "cycleDueDate": "2021-04-04",
        "daysToDue": 150,
        "squadron": {
            "id": 1
        }
    },
    {
        "deleted": false,
        "createdBy": "Darryl",
        "createdTime": "2020-09-04T09:52:45.529Z",
        "lastUpdatedBy": "Darryl",
        "lastUpdatedTime": "2020-09-07T12:31:16.877Z",
        "id": 3,
        "name": "APP CONT",
        "cycleDueDate": "2021-04-04",
        "daysToDue": 150,
        "squadron": {
            "id": 1
        }
    },
    {
        "deleted": false,
        "createdBy": "Darryl",
        "createdTime": "2020-09-04T09:52:45.529Z",
        "lastUpdatedBy": "string",
        "lastUpdatedTime": "2020-09-04T09:52:45.529Z",
        "id": 4,
        "name": "AREA CONT",
        "cycleDueDate": "2021-04-04",
        "daysToDue": 100,
        "squadron": {
            "id": 1
        }
    },
    {
        "deleted": false,
        "createdBy": "Darryl",
        "createdTime": "2020-09-04T09:52:45.529Z",
        "lastUpdatedBy": "Darryl",
        "lastUpdatedTime": "2020-09-07T07:08:26.009Z",
        "id": 5,
        "name": "FIS",
        "cycleDueDate": "2021-04-04",
        "daysToDue": 120,
        "squadron": {
            "id": 1
        }
    },
    {
        "deleted": false,
        "createdBy": "Darryl",
        "createdTime": "2020-09-04T09:52:45.529Z",
        "lastUpdatedBy": "Darryl",
        "lastUpdatedTime": "2020-09-07T07:08:34.029Z",
        "id": 6,
        "name": "V",
        "cycleDueDate": "2021-04-04",
        "daysToDue": 365,
        "squadron": {
            "id": 1
        }
    }
]

export const Resources2 = [
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

const DemoData = {
    resources: [
        {
            id: 'r0',
            name: 'Resource0',
            groupOnly: true,
        },
        {
            id: 'r1',
            name: 'Resource1',
            parentId: 'r0',
        },
        {
            id: 'r2',
            name: 'Resource2',
            parentId: 'r3',
        },
        {
            id: 'r3',
            name: 'Resource3',
            parentId: 'r1',
        },
        {
            id: 'r4',
            name: 'Resource4',
        },
        {
            id: 'r5',
            name: 'Resource5',
        },
        {
            id: 'r6',
            name: 'Resource6',
        },
        {
            id: 'r7',
            name: 'Resource7Resource7Resource7Resource7Resource7',
        }
    ],
    events: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            showPopover: false
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false
        },
        {
            id: 4,
            start: '2017-12-19 14:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
        },
        {
            id: 5,
            start: '2017-12-19 15:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false
        },
        {
            id: 6,
            start: '2017-12-19 15:35:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal'
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95'
        },
        {
            id: 8,
            start: '2017-12-19 15:50:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red'
        },
        {
            id: 9,
            start: '2017-12-19 16:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 1'
        },
        {
            id: 10,
            start: '2017-12-19 17:30:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'R1 has recurring tasks every week on Tuesday, Friday',
            rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
            bgColor: '#f759ab'
        },
        {
            id: 11,
            start: '2017-12-19 18:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 3'
        },
        {
            id: 12,
            start: '2017-12-20 18:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 4'
        },
        {
            id: 13,
            start: '2017-12-21 18:30:00',
            end: '2017-12-24 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 5'
        },
        {
            id: 14,
            start: '2017-12-23 18:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 6'
        },
    ],
    eventsForTaskView: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-18 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            groupId: 2,
            groupName: 'Task2'
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 4,
            start: '2017-12-20 14:30:00',
            end: '2017-12-21 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 5,
            start: '2017-12-21 15:30:00',
            end: '2017-12-22 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 9,
            start: '2017-12-21 16:30:00',
            end: '2017-12-21 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 6,
            start: '2017-12-22 15:35:00',
            end: '2017-12-23 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 8,
            start: '2017-12-25 15:50:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 10,
            start: '2017-12-26 18:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'R2 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 11,
            start: '2017-12-27 18:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r14',
            title: 'R4 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 12,
            start: '2017-12-28 18:30:00',
            end: '2017-12-28 23:30:00',
            resourceId: 'r6',
            title: 'R6 has many tasks',
            groupId: 3,
            groupName: 'Task3'
        },
    ],
    eventsForCustomEventStyle: [
        {
            id: 1,
            start: '2017-12-18 09:30:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            type: 1
        },
        {
            id: 2,
            start: '2017-12-18 12:30:00',
            end: '2017-12-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            type: 2
        },
        {
            id: 3,
            start: '2017-12-19 12:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            type: 3
        },
        {
            id: 4,
            start: '2017-12-19 14:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            type: 1
        },
        {
            id: 5,
            start: '2017-12-19 15:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            type: 2
        },
        {
            id: 6,
            start: '2017-12-19 15:35:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            type: 3
        },
        {
            id: 7,
            start: '2017-12-19 15:40:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            type: 1
        },
        {
            id: 8,
            start: '2017-12-19 15:50:00',
            end: '2017-12-19 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            type: 2
        },
        {
            id: 9,
            start: '2017-12-19 16:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 1',
            type: 3
        },
        {
            id: 10,
            start: '2017-12-20 18:30:00',
            end: '2017-12-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 2',
            type: 1
        },
        {
            id: 11,
            start: '2017-12-21 18:30:00',
            end: '2017-12-22 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 3',
            type: 2
        },
        {
            id: 12,
            start: '2017-12-23 18:30:00',
            end: '2017-12-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 4',
            type: 3
        },
    ],
    eventsForMember: [
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 1,
            groupName: 'Loki',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 2,
            groupName: 'Zavier',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 3,
            groupName: 'Marco',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 4,
            groupName: 'Savvy',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 5,
            groupName: 'Tubby',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 6,
            groupName: 'Missi',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 7,
            groupName: 'Carebear',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 8,
            groupName: 'Rhino',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 9,
            groupName: 'Java',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
        {
            id: 0,
            start: '',
            end: '',
            resourceId: '',
            title: '',
            bgColor: '#D9D9D9',
            groupId: 10,
            groupName: 'dotNet',
            isInstructor: false,
            isTrainee: false,
            squadron: null
        },
    ],
    membersForSelection: [
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:19:30.114Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 1,
            email: "testa01@rsaf.gov.sg",
            password: "",
            callSign: "Testa01",
            initials: "Tham",
            mobileNum: "91234567",
            tl1position: {
                deleted: false,
                createdBy: "Darryl",
                createdTime: "2020-09-04T09:52:45.529Z",
                lastUpdatedBy: "Darryl",
                lastUpdatedTime: "2020-09-07T07:08:04.747Z",
                id: 1,
                name: "CONEX",
                cycleDueDate: "2021-04-04",
                daysToDue: 90,
                squadron: {
                    id: 1
                }
            },
            catStatusColour: "green",
            catStatus: {
                id: 1,
                displayOrder: 1,
                displayString: "Staff",
                dbValue: "staff"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T12:31:16.877Z",
                    id: 3,
                    name: "APP CONT",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 150,
                    squadron: {
                        id: 1
                    }
                },
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "string",
                    lastUpdatedTime: "2020-09-04T09:52:45.529Z",
                    id: 4,
                    name: "AREA CONT",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 100,
                    squadron: {
                        id: 1
                    }
                }
            ]
        },
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:20:16.42Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 2,
            email: "testa02@rsaf.gov.sg",
            password: "",
            callSign: "Testa02",
            initials: "Tham",
            mobileNum: "92234567",
            tl1position: {
                deleted: false,
                createdBy: "Darryl",
                createdTime: "2020-09-04T09:52:45.529Z",
                lastUpdatedBy: "Darryl",
                lastUpdatedTime: "2020-09-07T07:08:16.797Z",
                id: 2,
                name: "APP COORD",
                cycleDueDate: "2021-04-04",
                daysToDue: 150,
                squadron: {
                    id: 1
                }
            },
            catStatusColour: "green",
            catStatus: {
                id: 1,
                displayOrder: 1,
                displayString: "Staff",
                dbValue: "staff"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T12:31:16.877Z",
                    id: 3,
                    name: "APP CONT",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 150,
                    squadron: {
                        id: 1
                    }
                }
            ]
        },
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:21:04.727Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 3,
            email: "testa03@rsaf.gov.sg",
            password: "",
            callSign: "Testa03",
            initials: "Tham",
            mobileNum: "93234567",
            tl1position: {
                deleted: false,
                createdBy: "Darryl",
                createdTime: "2020-09-04T09:52:45.529Z",
                lastUpdatedBy: "Darryl",
                lastUpdatedTime: "2020-09-07T07:08:04.747Z",
                id: 1,
                name: "CONEX",
                cycleDueDate: "2021-04-04",
                daysToDue: 90,
                squadron: {
                    id: 1
                }
            },
            catStatusColour: "indigo",
            catStatus: {
                id: 3,
                displayOrder: 3,
                displayString: "CONEX",
                dbValue: "CNX"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T07:08:16.797Z",
                    id: 2,
                    name: "APP COORD",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 150,
                    squadron: {
                        id: 1
                    }
                },
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T07:08:34.029Z",
                    id: 6,
                    name: "V",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 365,
                    squadron: {
                        id: 1
                    }
                }
            ]
        },
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:21:37.15Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 4,
            email: "testa04@rsaf.gov.sg",
            password: "",
            callSign: "Testa04",
            initials: "Tham",
            mobileNum: "94234567",
            tl1position: {
                deleted: false,
                createdBy: "Darryl",
                createdTime: "2020-09-04T09:52:45.529Z",
                lastUpdatedBy: "Darryl",
                lastUpdatedTime: "2020-09-07T07:08:04.747Z",
                id: 1,
                name: "CONEX",
                cycleDueDate: "2021-04-04",
                daysToDue: 90,
                squadron: {
                    id: 1
                }
            },
            catStatusColour: "indigo",
            catStatus: {
                id: 3,
                displayOrder: 3,
                displayString: "CONEX",
                dbValue: "CNX"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T07:08:26.009Z",
                    id: 5,
                    name: "FIS",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 120,
                    squadron: {
                        id: 1
                    }
                },
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "string",
                    lastUpdatedTime: "2020-09-04T09:52:45.529Z",
                    id: 4,
                    name: "AREA CONT",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 100,
                    squadron: {
                        id: 1
                    }
                }
            ]
        },
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:22:26.884Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 5,
            email: "testa05@rsaf.gov.sg",
            password: "",
            callSign: "Testa05",
            initials: "Tham",
            mobileNum: "95234567",
            tl1position: {
                deleted: false,
                createdBy: "Darryl",
                createdTime: "2020-09-04T09:52:45.529Z",
                lastUpdatedBy: "Darryl",
                lastUpdatedTime: "2020-09-07T12:31:16.877Z",
                id: 3,
                name: "APP CONT",
                cycleDueDate: "2021-04-04",
                daysToDue: 150,
                squadron: {
                    id: 1
                }
            },
            catStatusColour: "red",
            catStatus: {
                id: 4,
                displayOrder: 4,
                displayString: "TXO",
                dbValue: "TXO"
            },
            squadron: {
                id: 1
            },
            tl2Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "string",
                    lastUpdatedTime: "2020-09-04T09:52:45.529Z",
                    id: 4,
                    name: "AREA CONT",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 100,
                    squadron: {
                        id: 1
                    }
                }
            ],
            tl3Position: []
        },
        {
            deleted: false,
            createdBy: null,
            createdTime: null,
            lastUpdatedBy: "samuel@rsaf.gov.sg",
            lastUpdatedTime: "2020-09-05T05:33:45.744Z",
            id: 6,
            email: "testa06@rsaf.gov.sg",
            password: "",
            callSign: "Testa06",
            initials: "Tham",
            mobileNum: "96234567",
            tl1position: {
                deleted: false,
                createdBy: "Darryl",
                createdTime: "2020-09-04T09:52:45.529Z",
                lastUpdatedBy: "string",
                lastUpdatedTime: "2020-09-04T09:52:45.529Z",
                id: 4,
                name: "AREA CONT",
                cycleDueDate: "2021-04-04",
                daysToDue: 100,
                squadron: {
                    id: 1
                }
            },
            catStatusColour: "red",
            catStatus: {
                id: 4,
                displayOrder: 4,
                displayString: "TXO",
                dbValue: "TXO"
            },
            squadron: {
                id: 1
            },
            tl2Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T07:08:26.009Z",
                    id: 5,
                    name: "FIS",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 120,
                    squadron: {
                        id: 1
                    }
                }
            ],
            tl3Position: []
        },
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:34:41.981Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 7,
            email: "testa07@rsaf.gov.sg",
            password: "",
            callSign: "Testa07",
            initials: "Tham",
            mobileNum: "97234567",
            tl1position: null,
            catStatusColour: "yellow",
            catStatus: {
                id: 2,
                displayOrder: 2,
                displayString: "NSMen",
                dbValue: "NSMen"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T07:08:26.009Z",
                    id: 5,
                    name: "FIS",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 120,
                    squadron: {
                        id: 1
                    }
                }
            ]
        },
        {
            deleted: false,
            createdBy: null,
            createdTime: null,
            lastUpdatedBy: "samuel@rsaf.gov.sg",
            lastUpdatedTime: "2020-09-05T05:35:22.279Z",
            id: 8,
            email: "testa08@rsaf.gov.sg",
            password: "",
            callSign: "Testa08",
            initials: "Tham",
            mobileNum: "98234567",
            tl1position: null,
            catStatusColour: "yellow",
            catStatus: {
                id: 2,
                displayOrder: 2,
                displayString: "NSMen",
                dbValue: "NSMen"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T07:08:34.029Z",
                    id: 6,
                    name: "V",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 365,
                    squadron: {
                        id: 1
                    }
                }
            ]
        },
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:36:01.051Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 9,
            email: "testa09@rsaf.gov.sg",
            password: "",
            callSign: "Testa09",
            initials: "Tham",
            mobileNum: "99234567",
            tl1position: null,
            catStatusColour: "yellow",
            catStatus: {
                id: 2,
                displayOrder: 2,
                displayString: "NSMen",
                dbValue: "NSMen"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "string",
                    lastUpdatedTime: "2020-09-04T09:52:45.529Z",
                    id: 4,
                    name: "AREA CONT",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 100,
                    squadron: {
                        id: 1
                    }
                }
            ]
        },
        {
            deleted: false,
            createdBy: "samuel@rsaf.gov.sg",
            createdTime: "2020-09-05T05:37:48.47Z",
            lastUpdatedBy: null,
            lastUpdatedTime: null,
            id: 10,
            email: "testa10@rsaf.gov.sg",
            password: "",
            callSign: "Testa10",
            initials: "Tham",
            mobileNum: "92345678",
            tl1position: null,
            catStatusColour: "yellow",
            catStatus: {
                id: 2,
                displayOrder: 2,
                displayString: "NSMen",
                dbValue: "NSMen"
            },
            squadron: {
                id: 1
            },
            tl2Position: [],
            tl3Position: [
                {
                    deleted: false,
                    createdBy: "Darryl",
                    createdTime: "2020-09-04T09:52:45.529Z",
                    lastUpdatedBy: "Darryl",
                    lastUpdatedTime: "2020-09-07T07:08:04.747Z",
                    id: 1,
                    name: "CONEX",
                    cycleDueDate: "2021-04-04",
                    daysToDue: 90,
                    squadron: {
                        id: 1
                    }
                }
            ]
        }
    ]
}

export default DemoData;