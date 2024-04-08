export enum CollisionMode {
  IGNORE = 'Ignore',
  STOP = 'Stop',
  JOIN = 'Join',
}

export function rotateCollisionMode(mode: CollisionMode): CollisionMode {
  switch (mode) {
    case CollisionMode.IGNORE:
      return CollisionMode.STOP;
    case CollisionMode.STOP:
      return CollisionMode.JOIN;
    case CollisionMode.JOIN:
      return CollisionMode.IGNORE;
  }
}

export function collisionModeToString(mode: CollisionMode): string {
  switch (mode) {
    case CollisionMode.IGNORE:
      return 'Ignore';
    case CollisionMode.STOP:
      return 'Stop';
    case CollisionMode.JOIN:
      return 'Join';
  }
}
