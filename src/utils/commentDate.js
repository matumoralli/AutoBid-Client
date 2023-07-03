
export default function commentDate(date) {
  const commentD = new Date(date).getTime();
  const now = new Date().getTime();
  const distance = now - commentD;

  const timePast = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  };

  if (timePast.days > 0) {
    return `${timePast.days}d`
  }

  return `${timePast.hours}h`
  
}
