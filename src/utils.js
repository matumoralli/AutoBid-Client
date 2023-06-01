export const getTimeAgo = (dateStr) => {
  const now = new Date();
  const date = new Date(dateStr);

  const difference = Math.floor((now - date) / 1000);

  if (difference > 31536000) {
    const years = Math.floor(difference / 31536000);
    return `Hace ${years} año${years > 1 ? "s" : ""}`;
  } else if (difference > 2592000) {
    const months = Math.floor(difference / 2592000);
    return `Hace ${months} mes${months > 1 ? "es" : ""}`;
  } else if (difference > 604800) {
    const weeks = Math.floor(difference / 604800);
    return `Hace ${weeks} semana${weeks > 1 ? "s" : ""}`;
  } else if (difference > 86400) {
    const days = Math.floor(difference / 86400);
    return `Hace ${days} día${days > 1 ? "s" : ""}`;
  } else if (difference > 3600) {
    const hours = Math.floor(difference / 3600);
    return `Hace ${hours} hora${hours > 1 ? "s" : ""}`;
  } else if (difference > 60) {
    const minutes = Math.floor(difference / 60);
    return `Hace ${minutes} minuto${minutes > 1 ? "s" : ""}`;
  } else {
    return `Hace ${difference} segundo${difference > 1 ? "s" : ""}`;
  }
};

export const leftTime = (dateStr) => {
  if (!dateStr) return;

  const now = new Date();
  const date = new Date(dateStr);

  const diference = date - now;

  let days = Math.floor(diference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (diference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diference % (1000 * 60)) / 1000);

  days = days < 0 ? 0 : days;
  hours = hours < 0 ? 0 : hours;
  minutes = minutes < 0 ? 0 : minutes;
  seconds = seconds < 0 ? 0 : seconds;

  return `${days >= 10 ? days : "0" + days}:${
    hours >= 10 ? hours : "0" + hours
  }:${minutes >= 10 ? minutes : "0" + minutes}:${
    seconds >= 10 ? seconds : "0" + seconds
  }`;
};
