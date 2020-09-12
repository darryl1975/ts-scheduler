import React from "react";
import Scheduler, { SchedulerData, ViewTypes, DnDSource } from "react-big-scheduler";
import withDragDropContext from './withDnDContext';
import { Button, ButtonGroup } from 'react-bootstrap';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
// import Button from 'antd/lib/button'
import { DnDTypes } from './DnDTypes';
import TaskItem from './TaskItem';
import TaskList from './TaskList';
import DemoData, {
    WorkingEvents,
    NonWorkingEvents,
    WorkaroundEvents,
    Resources
} from "./DemoData";

// Reference
// https://stackoverflow.com/questions/31127731/handling-click-on-buttongroup-in-react-bootstrap


const events = WorkingEvents;
//const events = NonWorkingEvents;
//const events = WorkaroundEvents;

class AppScheduler extends React.Component {
    constructor(props) {
        super(props);

        //let schedulerData = new SchedulerData(new moment("2017-12-18").format(DATE_FORMAT), ViewTypes.Week);
        // let schedulerData = new SchedulerData(new Date(), ViewTypes.Day, false, false, {
        //     schedulerWidth: '80%',
        //     calendarPopoverEnabled: true,
        //     eventItemPopoverEnabled: true,
        //     checkConflict: false,
        //     views: [
        //         { viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false }
        //     ]
        // });
        let schedulerData = new SchedulerData(new Date(), ViewTypes.Day, false, false, {
            schedulerWidth: '80%',
            calendarPopoverEnabled: true,
            eventItemPopoverEnabled: true,
            checkConflict: false,
            views: [
                { viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false }
            ]
        });
        schedulerData.localeMoment.locale("en");
        schedulerData.setResources(Resources);
        schedulerData.setEvents(DemoData.eventsForMember);
        this.state = {
            viewModel: schedulerData,
            title: '',
            titleColour: '',
            isInstructor: false,
            isTrainee: false,
            taskDndSource: new DnDSource((props) => { return props.task; }, TaskItem, DnDTypes.TASK),
        };
    }

    schemaTypeSelectionHandle(event) {
        // console.log('key: ', $(event.target).data('key'));
        console.log('AppScheduler key: ', event.target.value);

        let color = '';
        let isInstructor = false;
        let isTrainee = false;
        switch (event.target.value) {
            case "Pos1":
                color = 'lightblue';

                break;
            case "Pos2":
                color = 'lightgreen';
                isInstructor = true;
                break;
            case "Pos3":
                color = 'pink';
                break;
            case "Pos4":
                color = 'dodgerblue';
                isTrainee = true;
                break;
            default:
                color = 'cyan';
        }

        this.setState({ title: event.target.value, titleColour: color, isInstructor: isInstructor, isTrainee: isTrainee });
    }

    css = `.ant-radio-group {
            display: none !important;
            }`

    css2 = `ul {
                padding: 0px 0px 0px 0px !important;
            }`

    css3 = `li:hover {
                background-color:#A5A5A5  !important;
            }`

    css4 = `.ant-col .ant-col-4 {
                height: 100% !important;
            }`

    render() {
        const { viewModel, title, titleColour, taskDndSource } = this.state;

        let dndList = <TaskList schedulerData={viewModel} newEvent={this.newEvent} taskDndSource={taskDndSource} />;

        //register the external DnDSources
        let dndSources = [taskDndSource];

        return (
            <div>
                <div className="App">
                    <Row>
                        <Col span={19}>
                            <style>
                                {this.css}
                            </style>
                            <hr></hr>
                            <div className="text-right">
                                <ButtonGroup className="text-right" aria-label="Basic example" onClick={this.schemaTypeSelectionHandle.bind(this)}>
                                    <Button variant="primary" value="Pos1">Controller</Button>
                                    <Button variant="primary" value="Pos2">Instructor</Button>
                                    <Button variant="primary" value="Pos3">Instructor Trainee</Button>
                                    <Button variant="primary" value="Pos4">Trainee</Button>
                                </ButtonGroup>
                            </div>

                            <Scheduler
                                schedulerData={viewModel}
                                prevClick={this.prevClick}
                                nextClick={this.nextClick}
                                onSelectDate={this.onSelectDate}
                                onViewChange={this.onViewChange}
                                eventItemClick={this.eventClicked}
                                viewEventClick={this.ops1}
                                viewEventText="Ops 1"
                                viewEvent2Text="Ops 2"
                                viewEvent2Click={this.ops2}
                                updateEventStart={this.updateEventStart}
                                updateEventEnd={this.updateEventEnd}
                                moveEvent={this.moveEvent}
                                movingEvent={this.movingEvent}
                                newEvent={this.newEvent}
                                eventItemPopoverTemplateResolver={this.eventItemPopoverTemplateResolver}
                                onScrollLeft={this.onScrollLeft}
                                onScrollRight={this.onScrollRight}
                                onScrollTop={this.onScrollTop}
                                onScrollBottom={this.onScrollBottom}
                                slotClickedFunc={this.slotClickedFunc}
                                conflictOccurred={this.conflictOccurred}
                                dndSources={dndSources}
                                toggleExpandFunc={this.toggleExpandFunc}
                            />
                        </Col>
                        <Col span={4}>
                            <div style={{ 'margin-top': '100px', 'height': '100%', 'padding-top': '5px', 'padding-bottom': '10px', backgroundColor: 'grey', color: 'white' }}>
                                <b><em>Squadron Members</em></b>
                            </div>
                            <style>
                                {/* {this.css2} */}
                                {/* {this.css3} */}
                                {/* {this.css4} */}
                            </style>
                            <div style={{ 'border-width': 'thin', border: 'solid', 'height': '100% !important' }}>
                                {dndList}
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Button className="btn btn-primary" onClick={this.checkEvents}>Save</Button>
                </div>
            </div>
        );
    }

    prevClick = schedulerData => {
        schedulerData.prev();
        schedulerData.setEvents(DemoData.eventsForMember);
        this.setState({
            viewModel: schedulerData
        });
    };

    nextClick = schedulerData => {
        schedulerData.next();
        schedulerData.setEvents(DemoData.eventsForMember);
        this.setState({
            viewModel: schedulerData
        });
    };

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(
            view.viewType,
            view.showAgenda,
            view.isEventPerspective
        );
        schedulerData.setEvents(DemoData.eventsForMember);
        this.setState({
            viewModel: schedulerData
        });
    };

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(DemoData.eventsForMember);
        this.setState({
            viewModel: schedulerData
        });
    };

    eventClicked = (schedulerData, event) => {
        console.log('AppScheduler eventClicked:', event);

        window.alert(
            `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
        );
    };

    ops1 = (schedulerData, event) => {
        window.alert(
            `You just executed ops1 to event: {id: ${event.id}, title: ${
            event.title
            }}`
        );

        schedulerData.removeEvent(event);
    };

    ops2 = (schedulerData, event) => {
        window.alert(
            `You just executed ops2 to event: {id: ${event.id}, title: ${
            event.title
            }}`
        );
    };

    newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
        // if (
        //     window.confirm(
        //         `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
        //     )
        // ) {
        let newFreshId = 0;
        schedulerData.events.forEach((item) => {
            if (item.id >= newFreshId) newFreshId = item.id + 1;
        });

        console.log('newEvent>>>>>>>:', item);

        if (item === undefined) return;

        let newEvent = {
            id: newFreshId,
            title: item.name,
            start: start,
            end: end + 1,
            resourceId: slotId,
            bgColor: this.state.titleColour,
            isInstructor: this.state.isInstructor,
            isTrainee: this.state.isTrainee,
            squadron: null
        };

        if (type === DnDTypes.TASK) {
            newEvent = {
                ...newEvent,
                groupId: item.id,
                groupName: item.name
            };
        }

        schedulerData.addEvent(newEvent);
        this.setState({
            viewModel: schedulerData
        });
        // }
    };

    updateEventStart = (schedulerData, event, newStart) => {
        // if (
        //     window.confirm(
        //         `Do you want to adjust the start of the event? {eventId: ${
        //         event.id
        //         }, eventTitle: ${event.title}, newStart: ${newStart}}`
        //     )
        // ) {
        schedulerData.updateEventStart(event, newStart);
        // }
        this.setState({
            viewModel: schedulerData
        });
    };

    updateEventEnd = (schedulerData, event, newEnd) => {
        // if (
        //     window.confirm(
        //         `Do you want to adjust the end of the event? {eventId: ${
        //         event.id
        //         }, eventTitle: ${event.title}, newEnd: ${newEnd}}`
        //     )
        // ) {
        schedulerData.updateEventEnd(event, newEnd);
        // }
        this.setState({
            viewModel: schedulerData
        });
    };

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        // if (
        //     window.confirm(
        //         `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${
        //         event.title
        //         }, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
        //     )
        // ) {
        schedulerData.moveEvent(event, slotId, slotName, start, end);
        this.setState({
            viewModel: schedulerData
        });
        // }
    };

    movingEvent = (schedulerData, slotId, slotName, newStart, newEnd, action, type, item) => {
        // console.log('moving event', schedulerData, slotId, slotName, newStart, newEnd, action, type, item);
    }

    eventItemPopoverTemplateResolver = (schedulerData, eventItem, title, start, end, statusColor) => {
        return (
            // <React.Fragment>
            //     <h3>{title}</h3>
            //     <h5>{start.format("HH:mm")} - {end.format("HH:mm")}</h5>
            //     <img src="./icons8-ticket-96.png" />
            // </React.Fragment>
            <div style={{ width: '300px' }}>
                <Row type="flex" align="middle">
                    <Col span={2}>
                        <div className="status-dot" style={{ backgroundColor: statusColor }} />
                    </Col>
                    <Col span={22} className="overflow-text">
                        <span className="header2-text" title={title}>{title}</span>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={2}>
                        <div />
                    </Col>
                    <Col span={22}>
                        <span className="header1-text">{start.format("HH:mm")} - {end.format("HH:mm")}</span>
                    </Col>
                </Row>
                <Row type="flex" align="middle">
                    <Col span={2}>
                        <div />
                    </Col>
                    <Col span={22}>
                        <Button onClick={() => { this.demoButtonClicked(schedulerData, eventItem); }}>Delete</Button>
                    </Col>
                </Row>
            </div>
        );
    }

    demoButtonClicked = (schedulerData, eventItem) => {
        // alert(`You just clicked demo button. event title: ${eventItem.title}`);
        // alert(eventItem);

        schedulerData.removeEvent(eventItem);
    }

    onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
        if (schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.next();
            schedulerData.setEvents(events);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = maxScrollLeft - 10;
        }
    };

    onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
        if (schedulerData.ViewTypes === ViewTypes.Day) {
            schedulerData.prev();
            schedulerData.setEvents(events);
            this.setState({
                viewModel: schedulerData
            });

            schedulerContent.scrollLeft = 10;
        }
    };

    onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log("onScrollTop");
    };

    onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
        console.log("onScrollBottom");
    };

    // resource clickable
    slotClickedFunc = (schedulerData, slot) => {
        alert(`You just clicked a ${schedulerData.isEventPerspective ? 'task' : 'resource'}.{id: ${slot.slotId}, name: ${slot.slotName}}`);
    }

    conflictOccurred = (schedulerData, action, event, type, slotId, slotName, start, end) => {
        alert(`Conflict occurred. {action: ${action}, event: ${event}`);
    }

    toggleExpandFunc = (schedulerData, slotId) => {
        schedulerData.toggleExpandStatus(slotId);
        this.setState({
            viewModel: schedulerData
        });
    };


    checkEvents = () => {
        console.log('checkEvents:', this.state.viewModel);
    }
}

export default withDragDropContext(AppScheduler);