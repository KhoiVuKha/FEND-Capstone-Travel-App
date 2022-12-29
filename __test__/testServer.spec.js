import request from "supertest";
import app from "../src/server/index";

const geoNamesUserName = process.env.GEONAMES_USERNAME;

describe('Post Endpoints', () => {
    it('get geo name locations', async () => {
        const res = await request(app)
            .post('/geo-name-locations')
            .send({
                baseURL: `http://api.geonames.org/searchJSON?formatted=true&q=manchester&username=${geoNamesUserName}`,
            });
        expect(res.statusCode).toEqual(200);
    });
});
