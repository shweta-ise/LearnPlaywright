import { test, expect,request } from '@playwright/test';
const endpoint  = 'https://jsonplaceholder.typicode.com/posts';


test.only ('Verify statuscode',async ()=> {
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
expect(first).toHaveProperty('body');
//expect(first).toHaveProperty('baady');


});




