import React from "react";
import Scheduler, { SchedulerData, ViewTypes } from "react-big-scheduler";
import withDragDropContext from './withDnDContext';
import { ButtonGroup, Button } from 'react-bootstrap';
import "./styles.css";

import {
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
        let schedulerData = new SchedulerData("2017-12-18", ViewTypes.Day, false, false, {
            schedulerWidth: '60%',
            eventItemPopoverEnabled: true,
            views: [
                { viewName: 'Day', viewType: ViewTypes.Day, showAgenda: false, isEventPerspective: false }
            ]
        });
        schedulerData.localeMoment.locale("en");
        schedulerData.setResources(Resources);
        schedulerData.setEvents(events);
        this.state = {
            viewModel: schedulerData,
            title: '',
            titleColour: ''
        };
    }

    schemaTypeSelectionHandle(event) {
        // console.log('key: ', $(event.target).data('key'));
        console.log('AppScheduler key: ', event.target.value);

        let color = '';
        switch (event.target.value) {
            case "Pos1":
                color = 'lightblue';
                break;
            case "Pos2":
                color = 'lightgreen';
                break;
            case "Pos3":
                color = 'pink';
                break;
            default:
            color = 'cyan';
        }

        this.setState({ title: event.target.value, titleColour: color });
    }

    render() {
        const { viewModel } = this.state;

        return (
            //   <DragDropContextProvider backend={HTML5Backend}>
            <div className="App">
                <ButtonGroup aria-label="Basic example" onClick={this.schemaTypeSelectionHandle.bind(this)}>
                    <Button variant="secondary" value="Pos1">Position 1</Button>
                    <Button variant="secondary" value="Pos2">Position 2</Button>
                    <Button variant="secondary" value="Pos3">Position 3</Button>
                </ButtonGroup>

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
                    newEvent={this.newEvent}
                    onScrollLeft={this.onScrollLeft}
                    onScrollRight={this.onScrollRight}
                    onScrollTop={this.onScrollTop}
                    onScrollBottom={this.onScrollBottom}
                    slotClickedFunc={this.slotClickedFunc}
                    toggleExpandFunc={this.toggleExpandFunc}
                />
            </div>
            //   </DragDropContextProvider>
        );
    }
    prevClick = schedulerData => {
        schedulerData.prev();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        });
    };

    nextClick = schedulerData => {
        schedulerData.next();
        schedulerData.setEvents(events);
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
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        });
    };

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(events);
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
        if (
            window.confirm(
                `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
            )
        ) {
            let newFreshId = 0;
            schedulerData.events.forEach(item => {
                if (item.id >= newFreshId) newFreshId = item.id + 1;
            });

            let newEvent = {
                id: newFreshId,
                title: this.state.title,
                start: start,
                end: end,
                resourceId: slotId,
                bgColor: this.state.titleColour
            };
            schedulerData.addEvent(newEvent);
            this.setState({
                viewModel: schedulerData
            });
        }
    };

    updateEventStart = (schedulerData, event, newStart) => {
        if (
            window.confirm(
                `Do you want to adjust the start of the event? {eventId: ${
                event.id
                }, eventTitle: ${event.title}, newStart: ${newStart}}`
            )
        ) {
            schedulerData.updateEventStart(event, newStart);
        }
        this.setState({
            viewModel: schedulerData
        });
    };

    updateEventEnd = (schedulerData, event, newEnd) => {
        if (
            window.confirm(
                `Do you want to adjust the end of the event? {eventId: ${
                event.id
                }, eventTitle: ${event.title}, newEnd: ${newEnd}}`
            )
        ) {
            schedulerData.updateEventEnd(event, newEnd);
        }
        this.setState({
            viewModel: schedulerData
        });
    };

    moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
        if (
            window.confirm(
                `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${
                event.title
                }, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
            )
        ) {
            schedulerData.moveEvent(event, slotId, slotName, start, end);
            this.setState({
                viewModel: schedulerData
            });
        }
    };

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

    toggleExpandFunc = (schedulerData, slotId) => {
        schedulerData.toggleExpandStatus(slotId);
        this.setState({
            viewModel: schedulerData
        });
    };
}

export default withDragDropContext(AppScheduler);