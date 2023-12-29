export function colorNormalize(color: string): string {
  switch (color) {
    case 'rosegold':
      return '#e0bfb8';
      break;

    case 'spacegray':
      return '#808080';
      break;

    case 'midnightgreen':
      return '#004953';
      break;

    case 'gold':
      return '#f2d9c2';
      break;

    case 'green':
      return '#bde8d6';
      break;

    case 'purple':
      return '#bdb1dc';
      break;

    default:
      return color;
  }
}
