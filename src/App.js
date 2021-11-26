import React, {Component} from 'react';

import {AppointmentPicker} from 'react-appointment-picker';
import {
    returnEvenDay, returnNonWorkingDay,
    returnOddDay,
} from "./components/randomDays";

export default class App extends Component {
    state = {
        loading: false,
    };

    selectedDates = [];

    //add appointment if there are no 2 on the same day
    addAppointmentCallback = ({
                                  addedAppointment: {day, number, time, id},
                                  addCb
                              }) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                let double = false;
                for (let i = 0; i < this.selectedDates.length; i++) {
                    if (this.selectedDates[i][0] === day)
                    {
                        double = true;
                    }
                }
                if (!double) {
                    this.selectedDates.push([day, number, time, id])
                    addCb(day, number, time, id);
                    console.log(
                        `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
                    );
                }

                this.setState({loading: false});
            }
        );
    };

    // remove appointment
    removeAppointmentCallback = ({day, number, time, id}, removeCb) => {
        this.setState(
            {
                loading: true
            },
            async () => {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                console.log(
                    `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
                );
                removeCb(day, number);
                this.setState({loading: false});
            }
        );
    };

    //reset all choices
    reset() {
        window.location.reload(false);
    }



    render() {
        //fill in the calendar with randomDays starting from tomorrow
        const initialDay = new Date();
        let days = [];

        initialDay.setDate(initialDay.getDate() + 1);
        initialDay.setHours(8);
        initialDay.setMinutes(0);
        initialDay.setSeconds(0);

        function getDayName(date, locale) {
            return date.toLocaleDateString(locale, {weekday: 'long'});
        }

        function getWeek(startDate, daysToAdd) {
            var allDays = [];

            for (var i = 0; i <= daysToAdd; i++) {
                var currentDate = new Date();
                currentDate.setDate(startDate.getDate() + i);
                if (currentDate.getDate() % 2 === 0)
                    if (getDayName(currentDate, "en-US") !== "Sunday" && getDayName(currentDate, "en-US") !== "Saturday") {
                        allDays.push(returnOddDay(currentDate.getDate()));
                    } else {
                        allDays.push(returnNonWorkingDay());
                    }
                else {
                    if (getDayName(currentDate, "en-US") !== "Sunday") {
                        allDays.push(returnEvenDay(currentDate.getDate()));
                    } else {
                        allDays.push(returnNonWorkingDay());
                    }
                }
            }
            return allDays;
        }


        days = getWeek(initialDay, 6);


        const {loading} = this.state;
        return (
            <div>
                <h1>Welcome to our pick-your-appointment application!</h1>
                <p>Please select your preferable date and time. Available appointments are marked <span
                    id={"blue"}>blue</span> so please select one of these. Appointments colored in <span
                    id={"grey"}>grey</span> are already taken.
                    When you select your appointment it will turn <span id={"green"}>green</span> .
                    You can pick only one appointment per day and maximum two appointments per week.</p>
                <br/>
                <button onClick={this.reset}>Reset choice</button>
                <br/>
                <AppointmentPicker
                    addAppointmentCallback={this.addAppointmentCallback}
                    removeAppointmentCallback={this.removeAppointmentCallback}
                    initialDay={initialDay}
                    days={days}
                    maxReservableAppointments={2}
                    maxReservaleAppointmentsPerDay={1}
                    visible
                    periods={60}
                    selectedByDefault
                    loading={loading}
                />
            </div>
        );
    }
}
