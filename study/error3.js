
//process.on('uncaughtException',콜백함수)

process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
  });
  
  setInterval(() => {
    throw new Error('서버를 고장내주마!');
  }, 1000);
  
  setTimeout(() => {
    console.log('2초후 실행');
  }, 2000);
  