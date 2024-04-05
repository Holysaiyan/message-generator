const groupMessages = {
  name: ['Gideon', 'Ronaldo', 'Elmer', 'James'],
  job: ['Software Engineer', 'Chef', 'Support Worker', 'Cleaner'],
};

const generateMessage = (obj) => {
  const nameGenerator = Math.floor(Math.random() * obj.name.length);
  const jobGenerator = Math.floor(Math.random() * obj.job.length);
  const myName = obj.name[nameGenerator];
  const job = obj.job[jobGenerator];

  return `My name is ${myName} and i am a ${job}`;
};

console.log(generateMessage(groupMessages));
