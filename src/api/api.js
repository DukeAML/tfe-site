import axios from 'axios';

var client;
// TODO: fix this
if (0 && process.env.LOCAL_DEV) {
  client = axios.create({
    baseURL: 'http://localhost:3001',
  });
} else {
  client = axios.create({
    baseURL: 'https://dukeappml.herokuapp.com',
  });
}


export const getTFEProjects = async () => {
  const { data } = await client.get('./techforequity');
  console.log(data);
  return data;
};

export const getTFEExec = async () => {
  const { data } = await client.get('./techforequity/exec');
  console.log(data);
  return data;
};

export const getTFEFellows = async () => {
  const { data } = await client.get('./techforequity/fellows');
  console.log(data);
  return data;
};


export default {
  getTFEProjects,
  getTFEExec,
  getTFEFellows,
};
