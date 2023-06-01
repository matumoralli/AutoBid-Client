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
