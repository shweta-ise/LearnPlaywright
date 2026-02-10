import { test, expect,request } from '@playwright/test';
const endpoint  = 'https://jsonplaceholder.typicode.com/posts';

//const APIcontext =  await request.newContext();


test ('Verify statuscode,array check and property',async ()=> {
const APIcontext =  await request.newContext();

const APIresponse = await APIcontext.get('https://jsonplaceholder.typicode.com/posts');

//status code validation
expect (APIresponse.status()).toBe(200);

const body = await APIresponse.json();

expect(Array.isArray(body)).toBeTruthy();

expect(body.length).toBeGreaterThan(0); 
console.log(body.length);
const first = body[0];
expect(first).toHaveProperty('userId');
expect(first).toHaveProperty('id');
expect(first).toHaveProperty('title');
expect(first).toHaveProperty('body');''



});

test.only('Verify Get with query Parama', async () => {
    const APIcontext =  await request.newContext();

    const APIgetparamresponse = await APIcontext.get('https://jsonplaceholder.typicode.com/posts/1');
    // status code 
    expect (APIgetparamresponse.status()).toBe(200);

    const body1 = await APIgetparamresponse.json();
    console.log(body1);
   // expect(body1.length).toEqual(1);

    const obj = body1; 
    expect(obj).toHaveProperty('userId');
    expect(obj).toHaveProperty('body');
    expect(obj.userid).not.toBeNull();
     expect(obj.body).not.toBeNull();



    



});




