const request = require('supertest');
class Test{
    initTest(app){
           
              request(app)
                .post('/usuario')
                .send({
                    name:"APAMED",
                    email:"contato@contato.com",
                    whatsapp:"4700000000",
                    city:"Sao Paulo",
                    uf:"SP"  
                })
                .auth('nome', 'email')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
    }
}
module.exports = new Test;