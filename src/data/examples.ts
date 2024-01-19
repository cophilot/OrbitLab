export const getEarthMoonExample = (): any[] => {
  return [
    {
      moveVectorX: 0,
      moveVectorY: 0,
      history: [{ x: 0, y: 0 }],
      id: 6,
      name: 'Earth',
      x: 0,
      y: 0,
      radius: 50,
      color: '#1a5fb4',
      velocity: { x: 5, y: -5 },
      weight: 1000000,
    },
    {
      moveVectorX: 0,
      moveVectorY: 0,
      history: [{ x: 200, y: 200 }],
      id: 7,
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

export const getPlutoCharonExample = (): any[] => {
  return [
    {
      moveVectorX: 0,
      moveVectorY: 0,
      history: [{ x: 0, y: 0 }],
      id: 6,
      name: 'Pluto',
      x: 0,
      y: 0,
      radius: 50,
      color: '#3C120C',
      velocity: { x: -5, y: 5 },
      weight: 1000000,
    },

    {
      moveVectorX: 0,
      moveVectorY: 0,
      history: [{ x: 200, y: 200 }],
      id: 7,
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
