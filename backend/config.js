require('dotenv').config();

module.exports = {
  'aws': {
      'key': `AKIARHF3OV3BTSEFMXGN`,
      'secret': `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`,
      'ses': {
          'from': {
              'default': '"publiquerecords.com" <tjmacu@gmail.com>', 
          },
          'region': `us-west-1` 
      }
  }
};