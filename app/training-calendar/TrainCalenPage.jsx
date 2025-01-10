import Link from "next/link";
import React, { useState, useEffect } from "react";

const TrainingCalenPage = ({ courseName, data, handleAddToCart }) => {
    const [activeMonth, setActiveMonth] = useState();
    const [filteredMonths, setFilteredMonths] = useState([]);


    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth();

            const uniqueFiltered = new Set();

            data.forEach((item) => {
                const itemDate = new Date(item.start_date);
                const itemMonth = itemDate.getMonth();
                const itemYear = itemDate.getFullYear();

                if (
                    itemYear > currentYear ||
                    (itemYear === currentYear && itemMonth >= currentMonth)
                ) {
                    const monthValue = itemDate.toLocaleString("default", {
                        month: "long",
                    });
                    uniqueFiltered.add(monthValue);
                }
            });

            const uniqueFilteredArray = Array.from(uniqueFiltered);

            // Sort the months based on their index
            uniqueFilteredArray.sort((a, b) => {
                return monthNames.indexOf(a.charAt(0).toUpperCase() + a.slice(1)) -
                    monthNames.indexOf(b.charAt(0).toUpperCase() + b.slice(1));
            });

            setFilteredMonths(uniqueFilteredArray);

            // Set the first active month if none is set
            if (uniqueFilteredArray.length > 0 && !activeMonth) {
                setActiveMonth(uniqueFilteredArray[0]);
            }
        }
    }, [data, activeMonth]);

    const filterCoursesByMonth = (courses, activeMonth) => {
        if (!activeMonth) return [];

        // Create a mapping of month names to their respective numbers (0 = Jan, 11 = Dec)
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        // Get the index of the active month from the monthNames array
        const activeMonthIndex = monthNames.indexOf(activeMonth.charAt(0).toUpperCase() + activeMonth.slice(1));

        if (activeMonthIndex === -1) return []; // Return empty if month index is not found

        // Filter courses by the month index
        return courses?.filter((course) => {
            const courseStartDate = new Date(course.start_date);
            const courseMonthIndex = courseStartDate.getMonth(); // getMonth() returns 0 for January, 11 for December

            return courseMonthIndex === activeMonthIndex;
        });
    };

    const filteredData = filterCoursesByMonth(data, activeMonth);


    return (
        <div className="row">
            <div className="col-12">
                <div className="tab_training">
                    <ul className="tabs-link monthBtn" id="training_cal_nav">
                        {filteredMonths?.map((month) => (
                            <li
                                key={month}
                                className={`monthbtn ${activeMonth === month ? "active-calenderMonth" : ""
                                    }`}
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
                                <th className="column-01" data-label="NameDisplay" width="250">
                                    Course Name
                                </th>
                                <th className="column-1" data-label="Start Date">
                                    Start Date
                                </th>
                                <th className="column-2" data-label="End Date">
                                    End Date
                                </th>
                                <th className="column-3" data-label="Start/End Time">
                                    Start/End Time
                                </th>
                                <th className="column-4" data-label="Batch Type">
                                    Batch Type
                                </th>
                                <th className="column-5" data-label="Training Mode">
                                    Training Mode
                                </th>
                                {/* <th className="column-6" data-label="Batch Status" colSpan="2">
                  Batch Status
                </th> */}
                            </tr>
                        </thead>

                        <tbody className="row-hover" id="traning_cal_body">
                  
                            {filteredData?.length > 0 ? (
                                filteredData?.map((course, index) => (
                                    <tr key={index}>
                                        <td className="column-01">
                                         


                                            <Link href={`${course.course_slug || courseName }`}>
                                            <p>{courseName || course.course_name}</p>

                                            </Link>
                                        </td>
                                        <td className="column-1" data-label="Start Date">
                                            {new Date(course.start_date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </td>
                                        <td className="column-2" data-label="End Date">
                                            {new Date(course.end_date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </td>
                                        <td className="column-3" data-label="Start/End Time">
                                            {course.start_time && course.end_time
                                                ? `${new Date(
                                                    `1970-01-01T${course.start_time}`
                                                ).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                })} / ${new Date(
                                                    `1970-01-01T${course.end_time}`
                                                ).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                })}`
                                                : "N/A"}
                                        </td>
                                        <td className="column-4" data-label="Batch Type">
                                            {course.batch_type}
                                        </td>
                                        <td className="column-5" data-label="Training Mode">
                                            {course.training_mode}
                                        </td>
                                        {/* <td>
                      <button
                        type="button"
                        className="training_cal_courses call_popup_click btn_training_cal"
                        onClick={() => handleAddToCart(course, index)}
                      >
                        Enroll Now
                      </button>
                    </td> */}
                                    </tr>
                                ))
                            ) : (
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
};

export default TrainingCalenPage;
