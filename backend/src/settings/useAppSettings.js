const useAppSettings = () => {
  let settings = {};
  settings['dbsquare_app_email'] = 'noreply@dbsquare.com';
  settings['dbsquare_base_url'] = 'https://cloud.dbsquare.com';
  return settings;
};

module.exports = useAppSettings;
