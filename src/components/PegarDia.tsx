"use client"
import React from 'react';
import { DayPicker } from 'react-day-picker';

interface PegarDiaProps {
  handleResult: (date: Date | undefined) => void;
}




const PegarDia: React.FC<PegarDiaProps> = (props) => {
  const [selected, setSelected] = React.useState<Date>();
  const [timeValue, setTimeValue] = React.useState<string>('00:00');

  const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTimeValue(e.target.value);
  };

  const handleDaySelect = (date: Date | undefined) => {
    setSelected(date);
    if (!timeValue || !date) {
      console.log('Nenhuma data selecionada');
      return;
    }
    const [hours, minutes] = timeValue
      .split(':')
      .map((str) => parseInt(str, 10));
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      hours,
      minutes
    );
    props.handleResult(newDate);
    console.log('Dia:', newDate.getDate());
    console.log('Hora:', newDate.getHours());
    console.log('Mês:', newDate.getMonth() + 1);
    console.log('Data formatada:', newDate.toLocaleString());
  };

  return (
    <>
      <div>
        <p className='ml-4 text-white'>
          Selecione a hora:{' '}
          <input
            type="time"
            value={timeValue}
            onChange={handleTimeChange}
            className='bg-white text-black rounded-xl p-1 ml-5'

          />
        </p>
      </div>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={handleDaySelect}
        className='bg-[#3B82F6]  text-white'
      />
    </>
  );
}
  

export default PegarDia;
