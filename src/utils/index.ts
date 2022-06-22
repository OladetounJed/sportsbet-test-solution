export const formatDate = (date: string) => {
    return new Date(Number(date)).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "numeric",
    });
  };
  export const formatTime = (date: string) => {
    return new Date(Number(date)).toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
    });
  };

  export const AnimateVariant = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };