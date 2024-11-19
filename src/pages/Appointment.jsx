import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docid } = useParams();
  const { doctors, rupees } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const daysofWeek = ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'];

  // Function to fetch doctor information by id
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docid);
    setDocInfo(docInfo);
  };

  // Function to generate available time slots
  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // Getting the date with the index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Setting the end time of the date with the index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // Setting the current hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  // Fetching doctor info when `doctors` or `docid` changes
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docid]);

  // Getting available slots when `docInfo` is fetched
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  // Logging available slots to the console when `docSlots` is updated
  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex item-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex item-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className=" px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-md font-medium text-gray-900 mt-5">
                About <img className="px-2" src={assets.info_icon} alt="" />
              </p>
              <p className="text:sm text-gray-500 max-w-[700px] mt-0 py-3">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fee:{rupees}
              {docInfo.fees}
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div onClick =
                {()=> setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`}
                  key={index}
                  onClick={() => {
                    setSlotIndex(index);
                    setSlotTime(item[0]?.time);
                  }}
                >
                  <p>{item[0] && daysofWeek[item[0].datetime.getDay()]} </p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-5">
            {docSlots.length && docSlots[slotIndex].map((item,index) => (
            
 <p onClick={() => setSlotTime(item.time)} className= {`text-sm fontr-light flex-shrink -0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`}key={index}>
  {item.time.toLowerCase()}
 </p>
            ))}
          </div>
          <button className="bg-primary  text-white text-sm font-light px-14 py-3 rounded-full my-6">Book Appointment</button>
        </div>
        {/*Listing Related Doctors*/}
        <RelatedDoctors docId = {docid} speciality= {docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointment;
