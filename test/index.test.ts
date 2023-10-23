import request from 'supertest';
import { server, app } from '../src/index';

const req = request(app);

it('should return 200', async () => {
    const res = await req.get('/test');
    expect(res.body.message).toBe('It a success message');
});

afterAll(async () => server.close());
