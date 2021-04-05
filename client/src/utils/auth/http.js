export class Http {
  static HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  static async get(url, config) {
    try {
      return await request(url, 'GET', null, config);
    } catch (e) {
      console.log(e);
    }
  }

  static async post(url, data, config) {
    try {
      return await request(url, 'POST', data, config);
    } catch (e) {
      console.log(e);
    }
  }

  static async put(url, data, config) {
    try {
      return await request(url, 'PUT', data, config);
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(url, data, config) {
    try {
      return await request(url, 'DELETE', data, config);
    } catch (e) {
      console.log(e);
    }
  }
}

async function request(url, method, data, additionalConf) {
  const config = {
    method,
    headers: Http.HEADERS,
    ...additionalConf,
  };
  //console.log('config >>>>>', config)

  if (method !== 'GET') {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  return await response.json();
}
