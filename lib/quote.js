/**
 * By Rzamd
 * Created On 07/06/2024
 * instagram Me on https://instagram.com/rezaa.205
 * Supported By rza 2005
*/

const axios = require('axios');

const quote = async (text, name, avatar) => {
  const json = {
    "type": "quote",
    "format": "png",
    "backgroundColor": "#FFFFFF",
    "width": 512,
    "height": 768,
    "scale": 2,
    "messages": [
      {
        "entities": [],
        "avatar": true,
        "from": {
          "id": 1,
          "name": name,
          "photo": {
            "url": avatar,
          }
        },
        "text": text,
        "replyMessage": {}
      }
    ]
  };

  const res = await axios.post('https://quotly.netorare.codes/generate', json, {
    headers: {'Content-Type': 'application/json'}
  });

  const buffer = Buffer.from(res.data.result.image, 'base64');

  return { 
    result: buffer
  };
};

module.exports = { quote };
