const { Application } = require('spectron');
const path = require('path');

(async function() {
    const app = new Application({
        path: require('electron'),
        args: [path.join(__dirname, 'main.js')]
    });
  
    await app.start();
    
    setInterval(async() => {
      const logs = await app.client.getMainProcessLogs();
      if (logs.length > 0) 
        console.log(logs);
    }, 1000)
  
    return app;
  })()
  