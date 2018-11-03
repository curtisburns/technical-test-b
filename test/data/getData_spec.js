/* global describe, it, expect, api, beforeEach */

const correctVariables = ['capital loss', 'education', 'salary range'];
const incorrectVariable = 'cpital loss';


it('should return a 500 status', done => {
    api.get(`/api/data/${incorrectVariable}`)
    .end((err, res) => {
        expect(res.status).to.eq(500);
        
    });
    done();
});

for (let i = 0; i < correctVariables.length; i++) {

    it(`should return a 200 status - Variable ${i+1}`, done => {
        api.get(`/api/data/${correctVariables[i]}`)
        .end((err, res) => {
            expect(res.status).to.eq(200);
            
        });
        done();
    });
      
    it(`should return an array - Variable ${i+1}`, done => {
        api.get(`/api/data/${correctVariables[i]}`)
        .end((err, res) => {
            // Remember res.body not res.data
            expect(res.body).to.be.an('array');
        });
        done();
    });
      
    it(`should be an array of objects - Variable ${i+1}`, done => {
        api.get(`/api/data/${correctVariables[i]}`)
        .end((err, res) => {
            res.body.forEach(rowPacket => {
            expect(rowPacket).to.be.an('object');
            });
            expect(res.body).to.be.an('array');
        })
        done();
    })    
      
    it(`should be an array of objects that have the properties of age and the selected variable - Variable ${i+1}`, done => {
        api.get(`/api/data/${correctVariables[i]}`)
        .end((err, res) => {
            res.body.forEach(rowPacket => {
            rowPacket.should.have.property(correctVariables[i])
            .and.should.have.property('age');
            });
            expect(res.body).to.be.an('array');
        })
         done();
    })
    
    it(`should be an object where the values are all strings except for the age variable, which is a number - Variable ${i+1}`, done => {
        api.get(`/api/data/${correctVariables[i]}`)
        .end((err, res) => {
            res.body.forEach(rowPacket => {
                expect(rowPacket[correctVariables[i]]).to.be.a('string')
                expect(rowPacket['age']).to.be.a('number')
            });
        })
        done();
    })

}

  
  