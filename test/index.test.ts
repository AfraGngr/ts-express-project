import request from 'supertest';
import { app } from '../src/index';

it('should return 200', async () => {
    const res = await request(app).get('/test');
    expect(res.body.message).toBe('It is a success message');
});
