export enum CollisionMode {
  IGNORE = 'Ignore',
  END = 'End',
  JOIN = 'Join',
}

export function rotateCollisionMode(mode: CollisionMode): CollisionMode {
  switch (mode) {
    case CollisionMode.IGNORE:
      return CollisionMode.END;
    case CollisionMode.END:
      return CollisionMode.JOIN;
    case CollisionMode.JOIN:
      return CollisionMode.IGNORE;
  }
}

export function collisionModeToString(mode: CollisionMode): string {
  switch (mode) {
    case CollisionMode.IGNORE:
      return 'Ignore';
    case CollisionMode.END:
      return 'End';
    case CollisionMode.JOIN:
      return 'Join';
  }
}
