import axios from 'axios';

export const dummyLoginRequest = async (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "password") {
        resolve({
          data: {
            id: 1,
            username: "testuser",
            token: "dummy_token"
          }
        });
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 1000);
  });
};

export const dummyRegisterRequest = async (name: string, mobile: string, email: string, department: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name && mobile && email && department) {
          resolve({
            data: {
              id: 1,
              username: name,
              token: "dummy_token"
            }
          });
        } else {
          reject(new Error("All fields are required"));
        }
      }, 1000);
    });
  };
  
