import { useState, useEffect } from "react";

const Timer = () => {
  // Mengatur waktu dalam detik (contoh: 60 menit 0 detik)
  const initialTime = 60 * 60; // 1 jam dalam detik
  
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  useEffect(() => {

    if (timeLeft > 0) {
      const timerInterval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      
      return () => clearInterval(timerInterval);
    }

    return undefined;
  }, [timeLeft]);

  // Mengubah waktu dari detik ke format jam, menit, detik
  const formatTime = (timeInSeconds) => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(timeInSeconds % 60).padStart(2, "0");

    return `${hours} : ${minutes} : ${seconds}`;
  };

  return (
    <div className=" p-4 rounded-lg flex w-full justify-center items-center gap-3">
      <p className="text-md">Selesaikan pesanan dalam</p>
      <div className="flex space-x-2 text-lg font-bold text-white">
        <span className="bg-red-500 p-2 rounded">{formatTime(timeLeft).split(" : ")[0]}</span>
        <span className="bg-red-500 p-2 rounded">{formatTime(timeLeft).split(" : ")[1]}</span>
        <span className="bg-red-500 p-2 rounded">{formatTime(timeLeft).split(" : ")[2]}</span>
      </div>
    </div>
  );
};

export default Timer;
