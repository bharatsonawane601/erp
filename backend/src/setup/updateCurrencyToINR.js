require('module-alias/register');
require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const { globSync } = require('glob');
const path = require('path');

mongoose.connect(process.env.DATABASE);

mongoose.connection.on('error', (error) => {
  console.log(
    `1. 🔥 Common Error caused issue → : check your .env file first and add your mongodb url`
  );
  console.error(`2. 🚫 Error → : ${error.message}`);
});

// Load all models
const modelsFiles = globSync('./src/models/**/*.js');
for (const filePath of modelsFiles) {
  require(path.resolve(filePath));
}

async function updateCurrencyToINR() {
  try {
    const Setting = mongoose.model('Setting');

    // Update currency settings to INR
    const currencyUpdates = [
      { settingKey: 'default_currency_code', settingValue: 'INR' },
      { settingKey: 'currency_name', settingValue: 'Indian Rupee' },
      { settingKey: 'currency_symbol', settingValue: '₹' },
    ];

    let updatedCount = 0;
    for (const update of currencyUpdates) {
      const result = await Setting.findOneAndUpdate(
        { settingKey: update.settingKey, settingCategory: 'money_format_settings' },
        { settingValue: update.settingValue },
        { new: true }
      ).exec();
      
      if (result) {
        updatedCount++;
        console.log(`✅ Updated: ${update.settingKey} → ${update.settingValue}`);
      } else {
        console.log(`⚠️  Setting not found: ${update.settingKey}`);
      }
    }

    if (updatedCount > 0) {
      console.log(`\n✅ Currency updated to INR (₹) in database!`);
      console.log(`✅ Updated ${updatedCount} currency settings`);
      console.log('🥳 Currency update completed successfully!');
    } else {
      console.log('\n⚠️  No currency settings found to update. Make sure you have run setup first.');
    }
    
    process.exit();
  } catch (e) {
    console.log('\n🚫 Error! The Error info is below');
    console.log(e);
    process.exit();
  }
}

updateCurrencyToINR();

