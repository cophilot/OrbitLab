export const getEarthMoonExample = (): any[] => {
  return [
    {
      name: 'Earth',
      x: 0,
      y: 0,
      radius: 50,
      color: '#1a5fb4',
      velocity: { x: 5, y: -5 },
      weight: 1000000,
    },
    {
      name: 'Moon',
      x: 200,
      y: 200,
      radius: 10,
      color: '#77767b',
      velocity: { x: 40, y: -40 },
      weight: 16000,
    },
  ];
};

export const getFlyByExample = (): any[] => {
  return [
    {
      name: 'Planet',
      x: 0,
      y: 0,
      radius: 50,
      color: '#ffffff',
      weight: 1000000,
      velocity: { x: 0, y: 0 },
    },
    {
      name: 'Probe',
      x: 500,
      y: 500,
      radius: 10,
      color: '#e01b24',
      weight: 10,
      velocity: { x: -75, y: -100 },
    },
  ];
};

export const getPlutoCharonExample = (): any[] => {
  return [
    {
      name: 'Pluto',
      x: 0,
      y: 0,
      radius: 50,
      color: '#3C120C',
      velocity: { x: -5, y: 5 },
      weight: 1000000,
    },

    {
      name: 'Charon',
      x: 200,
      y: 200,
      radius: 25,
      color: '#959593',
      velocity: { x: 40, y: -40 },
      weight: 400000,
    },
  ];
};

export const getEllipticalOrbit = (): any[] => {
  return [
    {
      name: 'Sun',
      x: 0,
      y: 0,
      radius: 50,
      color: '#fffb00',
      velocity: { x: 0, y: 0 },
      weight: 1000000,
    },
    {
      name: 'Pluto',
      x: 200,
      y: 200,
      radius: 7,
      color: '#6d6d6d',
      velocity: { x: 20, y: -60 },
      weight: 1000,
    },
  ];
};

export const getThreeBody = (): any[] => {
  return [
    {
      name: 'Body1',
      x: 0,
      y: 200,
      radius: 20,
      color: 'red',
      velocity: { x: 0, y: -20 },
      weight: 100000,
    },
    {
      name: 'Body2',
      x: -300,
      y: 200,
      radius: 20,
      color: 'blue',
      velocity: { x: 0, y: 20 },
      weight: 100000,
    },
    {
      name: 'Body3',
      x: 200,
      y: 400,
      radius: 20,
      color: 'yellow',
      velocity: { x: -50, y: -10 },
      weight: 100000,
    },
  ];
};
