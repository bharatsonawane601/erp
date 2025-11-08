const useDate = ({ settings }) => {
  const { dbsquare_app_date_format } = settings;

  const dateFormat = dbsquare_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
