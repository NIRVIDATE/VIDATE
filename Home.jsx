import React, { useState } from 'react';
import { Heart, X, Trash2 } from 'lucide-react';

const mockVideoList = [
  { id: 1, name: "נועה", age: 25, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [liked, setLiked] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(mockVideoList[0]);

  return (
    <div className="p-6 font-sans min-h-screen bg-gradient-to-br from-white to-purple-100 text-right">
      {step === 1 && (
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-purple-800">ברוך הבא ל־VIDATE</h1>
          <button onClick={() => setStep(2)} className="bg-pink-400 text-white px-6 py-2 rounded-full shadow-md">
            התחל
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="text-xl font-bold">צור חשבון</h2>
          <input className="w-full border p-2 rounded" placeholder="שם" value={name} onChange={e => setName(e.target.value)} />
          <input className="w-full border p-2 rounded" placeholder="גיל" value={age} onChange={e => setAge(e.target.value)} />
          <select className="w-full border p-2 rounded" value={gender} onChange={e => setGender(e.target.value)}>
            <option value="">העדפה מינית</option>
            <option value="female">נשים</option>
            <option value="male">גברים</option>
          </select>
          <button onClick={() => setStep(3)} className="bg-indigo-500 text-white px-6 py-2 rounded-full">המשך</button>
        </div>
      )}
      {step === 3 && currentVideo && (
        <div className="flex flex-col items-center gap-4">
          <video width="250" controls className="rounded-lg shadow-lg">
            <source src={currentVideo.videoUrl} type="video/mp4" />
          </video>
          <p className="text-lg">{currentVideo.name}, {currentVideo.age}</p>
          <div className="flex gap-6 text-2xl">
            <button onClick={() => {
              setLiked([...liked, currentVideo]);
              setCurrentVideo(null);
              setStep(4);
            }} className="text-pink-500"><Heart /></button>
            <button onClick={() => {
              setCurrentVideo(null);
              setStep(4);
            }} className="text-blue-500"><X /></button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">אהבתי</h2>
          {liked.map(person => (
            <div key={person.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
              <span>{person.name}, {person.age}</span>
              <button onClick={() => setLiked(liked.filter(p => p.id !== person.id))}>
                <Trash2 className="text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}