import { useState } from 'react';

export default function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [genderPref, setGenderPref] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [liked, setLiked] = useState([]);
  const [current, setCurrent] = useState(0);

  const mockVideos = [
    { id: 1, name: 'דנה', age: 28, video: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { id: 2, name: 'עדי', age: 31, video: 'https://www.w3schools.com/html/movie.mp4' }
  ];

  const handleLike = () => {
    setLiked([...liked, mockVideos[current]]);
    handleNext();
  };

  const handleNext = () => {
    if (current + 1 < mockVideos.length) {
      setCurrent(current + 1);
    } else {
      setStep(4);
    }
  };

  const handleRemove = id => {
    setLiked(liked.filter(p => p.id !== id));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', direction: 'rtl', padding: 20 }}>
      {step === 0 && (
        <div>
          <h1>ברוך הבא ל־VIDATE</h1>
          <button onClick={() => setStep(1)}>התחל</button>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2>הרשמה</h2>
          <input placeholder="שם" value={name} onChange={e => setName(e.target.value)} /><br />
          <input placeholder="גיל" type="number" value={age} onChange={e => setAge(e.target.value)} /><br />
          <p>מין מועדף:</p>
          <button onClick={() => setGenderPref('נשים')}>נשים</button>
          <button onClick={() => setGenderPref('גברים')}>גברים</button><br />
          <input placeholder="גיל מינ'" value={minAge} onChange={e => setMinAge(e.target.value)} />
          <input placeholder="גיל מקס'" value={maxAge} onChange={e => setMaxAge(e.target.value)} /><br />
          <button onClick={() => setStep(2)}>המשך</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>העלה סרטון (דמו)</h2>
          <input type="file" accept="video/*" /><br />
          <button onClick={() => setStep(3)}>המשך</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>התאמה עבורך</h2>
          <video width="300" controls src={mockVideos[current].video}></video>
          <p>{mockVideos[current].name}, {mockVideos[current].age}</p>
          <button onClick={handleLike}>אהבתי</button>
          <button onClick={handleNext}>לא עכשיו</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>התאמות שאהבת</h2>
          {liked.map(p => (
            <div key={p.id}>
              <p>{p.name}, {p.age}</p>
              <button onClick={() => handleRemove(p.id)}>מחק</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
