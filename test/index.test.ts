import request from 'supertest';
import { server } from '../src/index';
import { app } from '../src/app';

const req = request(app);

it('should return 200', async () => {
    const res = await req.get('/test');
    expect(res.body.message).toBe('It is a success message');
});

afterAll(async () => server.close());
