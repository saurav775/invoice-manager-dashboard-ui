export const getCurrentYear = () => new Date().getFullYear();
export const camelToSentenceCase = (value) => {
    return value.split("_").join(" ");
  };