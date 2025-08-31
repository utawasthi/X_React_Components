import { useState } from "react"

type DatePickerProps = {
  onChange? : (date : Date) => void;
}

function DatePicker({onChange} : DatePickerProps) {

  const [selectedDate , setSelectedDate] = useState<Date | null> (null);
  const [isOpen , setIsOpen] = useState<boolean>(false);
  const [visibleMonth , setVisibleMonth] = useState(new Date());

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function getDaysInMonth (year : number , month : number) : number {
    return new Date(year , month + 1 , 0).getDate();
  }

  function buildCalendarGrid (year : number , month : number) : (number | null)[] {
    const totalDays = getDaysInMonth(year , month);
    const firstDayOfMonth = new Date(year , month , 1).getDay();

    const grid : (number | null)[] = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      grid.push(null);
    }

    for (let day = 1; day <= totalDays; day++) {
      grid.push(day);
    }

    return grid;
  } 

  function handleSelectDate(day : number){
    const newDate = new Date (
      visibleMonth.getFullYear(),
      visibleMonth.getMonth(),
      day
    );

    setSelectedDate(newDate);
    setIsOpen(false);
    onChange?.(newDate);
  }

  function getToPreviousMonth () {
    setVisibleMonth(
      new Date(visibleMonth.getFullYear() , visibleMonth.getMonth() - 1, 1)
    );
  }

  function getToNextMonth () {
    setVisibleMonth(
      new Date(visibleMonth.getFullYear() , visibleMonth.getMonth() + 1 , 1)
    );
  }

  const calendarDays = buildCalendarGrid(
    visibleMonth.getFullYear(),
    visibleMonth.getMonth(),
  );
 
  return (
     <div className="h-screen flex justify-center items-center relative flex-col">
      <h2 className = 'text-center text-pink-600 text-4xl mb-40 -mt-30'>
        Date Picker Component
      </h2>
      <input
        type = "text"
        readOnly
        value = {selectedDate ? selectedDate.toDateString() : ""}
        placeholder = "Select date"
        className = "border rounded-3xl px-10 py-3 cursor-pointer bg-white"
        onClick = {() => setIsOpen((open) => !open)}
      />

      {isOpen && (
        <div className="absolute mt-2 p-4 bg-white rounded-lg shadow-lg z-10 w-64">
          <div className="flex justify-between items-center mb-3">
            <button onClick = {getToPreviousMonth} className="px-2">
              ◀
            </button>
            <span className="font-semibold">
              {visibleMonth.toLocaleString("default", { month: "long" })}{" "}
              {visibleMonth.getFullYear()}
            </span>
            <button onClick = {getToNextMonth} className="px-2">
              ▶
            </button>
          </div>

          <div className="grid grid-cols-7 text-center text-sm font-medium mb-1">
            {days.map((day) => (
              <div key = {day}>
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((day, index) => {
              if (!day) {
                return <div key={index} />
              }

              const isSelected =
                selectedDate &&
                day === selectedDate.getDate() &&
                visibleMonth.getMonth() === selectedDate.getMonth() &&
                visibleMonth.getFullYear() === selectedDate.getFullYear();

              return (
                <button
                  key={index}
                  onClick={() => handleSelectDate(day)}
                  className={`w-8 h-8 rounded-full text-sm ${
                    isSelected
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default DatePicker