"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";



const TrainingCommon = ({ courseName, data }) => {
    const [activeMonth, setActiveMonth] = useState(data[0]?.month);
    const [isModalOpen, setIsModalOpen] = useState(false);



    const formatTime = (time) => {
        // Format the time as needed (e.g., convert to 12-hour format with AM/PM)
        return new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const mineMonths = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]



    // Filter courses based on the selected month
    const filterCoursesByMonth = (courses, month) => {
        return courses?.filter(course => {
            const courseMonth = new Date(course.start_date).toLocaleString('default', { month: 'long' });


            return course.month === month;
        });



    };

    const filteredData = filterCoursesByMonth(data, activeMonth);

    const [filteredMonths, setFilteredMonths] = useState([]);


    useEffect(() => {


        if (Array.isArray(data) && data.length > 0) {
            // Initialize a Set to store unique filtered months
            const uniqueFiltered = new Set();

            // Loop through each item in the data array
            for (let i = 0; i < data.length; i++) {
                const monthValue = data[i]?.month ? data[i].month.toString() : '';


                // Filter mineMonths based on monthValue and add to the Set
                mineMonths?.forEach(month => {
                    if (month.toString() === monthValue) {
                        uniqueFiltered.add(month); // Adds only unique values
                    }
                });
            }

            // Convert the Set back to an array
            const uniqueFilteredArray = Array.from(uniqueFiltered);

            // Update state with the unique filtered months
            setFilteredMonths(uniqueFilteredArray);

            // Debugging: Check the filtered result

        }
    }, [data]);








    return (
        <div className="row">
            <div className="col-12">
                <div className="tab_training">
                    <ul className="tabs-link monthBtn" id="training_cal_nav">

                        {filteredMonths?.map(month => (
                            <li
                                key={month}
                                className={`monthbtn ${activeMonth === month ? "active-calenderMonth" : ""}`}
                            >
                                <button onClick={() => setActiveMonth(month)}>{month}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="table-responsive" id="calendor">
                    <table className="table table-striped table-bordered table_training">
                        <thead className="row-hover">

                            <tr>
                                <th className="column-01" data-label="NameDisplay" width="250">Course Name</th>
                                <th className="column-1" data-label="Start Date">Start Date</th>
                                <th className="column-2" data-label="End Date">End Date</th>
                                <th className="column-3" data-label="Start/End Time">Start/End Time</th>
                                <th className="column-4" data-label="Batch Type">Batch Type</th>
                                <th className="column-5" data-label="Training Mode">Training Mode</th>
                                {/* <th className="column-6" data-label="Batch Status" colSpan="2">Batch Status</th> */}
                            </tr>

                        </thead>
                        <tbody className="row-hover" id="traning_cal_body">
                            {filteredData?.length > 0 ? filteredData?.map((course, index) => (
                                <tr key={index}>
                                    <td className="column-01">
                                        <div>{courseName || course.course_name}</div>
                                    </td>
                                    <td className="column-1" data-label="Start Date">{course.start_date}</td>
                                    <td className="column-2" data-label="End Date">{course.end_date}</td>
                                    <td className="column-3" data-label="Start/End Time">
                                        {course.start_time && course.end_time
                                            ? `${formatTime(course.start_time)} / ${formatTime(course.end_time)}`
                                            : 'N/A'}
                                    </td>
                                    <td className="column-4" data-label="Batch Type">{course.batch_type}</td>
                                    <td className="column-5" data-label="Training Mode">{course.training_mode}</td>
                                    {/* <td>
                    <button
                      type="button"
                      className="training_cal_courses call_popup_click btn_training_cal"
                      onClick={() => handleEnroll(course.course_name)}
                    >
                      Enroll Now
                    </button>
                  </td> */}
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="7">No courses available for {activeMonth}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    );
}

export default TrainingCommon
