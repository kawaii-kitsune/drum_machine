import React, { useState, useEffect } from 'react';
// import Heater1 from '../dist/sounds/Heater-1.mp3';
// import Heater2 from '../dist/sounds/Heater-2.mp3';
// import Heater3 from '../dist/sounds/Heater-3.mp3';
// import Heater4 from '../dist/sounds/Heater-4_1.mp3';
// import Heater6 from '../dist/sounds/Heater-6.mp3';
// import DscOh from '../dist/sounds/Dsc_Oh.mp3';
// import KickNHat from '../dist/sounds/Kick_n_Hat.mp3';
// import RP4Kick1 from '../dist/sounds/RP4_KICK_1.mp3';
// import CevH2 from '../dist/sounds/Cev_H2.mp3';

const DrumMachine = () => {
  const [display, setDisplay] = useState('');

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
    setDisplay(sound.split('/').pop().split('.')[0]);
  };
  const soundURLs = {
    heaterOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    heaterTwo: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    heaterThree: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    heaterFour: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    heaterSix: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    dsc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    kickAndHat: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    closedHH: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    chordOne: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    chordTwo: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    chrodThree: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    lighter: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    openHH: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    SnareAndHH: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    PunchyKick: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    SideStickSnare: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    Snare: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
  const drumPads = [
    { key: 'Q', sound: soundURLs.heaterOne },
    { key: 'W', sound: soundURLs.heaterTwo },
    { key: 'E', sound: soundURLs.heaterThree },
    { key: 'R', sound: soundURLs.heaterSix },
    { key: 'A', sound: soundURLs.lighter },
    { key: 'S', sound: soundURLs.chordOne },
    { key: 'D', sound: soundURLs.chordTwo },
    { key: 'F', sound: soundURLs.chrodThree },
    { key: 'Z', sound: soundURLs.openHH },
    { key: 'X', sound: soundURLs.dsc},
    { key: 'C', sound: soundURLs.kick },
    { key: 'V', sound: soundURLs.PunchyKick },
    { key: 'G', sound: soundURLs.SideStickSnare },
    { key: 'H', sound: soundURLs.Snare },
    { key: 'J', sound: soundURLs.closedHH },
    { key: 'K', sound: soundURLs.closedHH }
  ];

  // const drumPads = [
  //   { key: 'Q', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  //   { key: 'W', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  //   { key: 'E', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  //   { key: 'A', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  //   { key: 'S', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  //   { key: 'D', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  //   { key: 'Z', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  //   { key: 'X', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  //   { key: 'C', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  // ];

  const handleKeyDown = (e) => {
    const pressedKey = e.key.toUpperCase();
    const drumPad = drumPads.find((pad) => pad.key === pressedKey);
    console.log('Pressed Key:', pressedKey);
    if (drumPad) {
      console.log('Triggering Drum Pad:', drumPad.key);
      playSound(drumPad.sound);
    }
  };
  
  const handlePadClick = (pad) => {
    console.log('Clicked Pad:', pad.key);
    console.log('Playing Sound:', pad.sound);
    playSound(pad.sound);
  };
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      {drumPads.map((pad) => (
          <div
          key={pad.key}
          className="drum-pad"
          id={pad.key}
          onClick={() => handlePadClick(pad)}
          tabIndex="0"
        >
          {pad.key}
          <audio className="clip" id={pad.key} src={pad.sound} />
        </div>
      ))}
    </div>
  );
};

export default DrumMachine;
