import Home from '../../src/views/home/Component.vue'

describe('Home', () => {
  console.log(Home.methods);
  
  it('Home', () => {
    expect(Home.methods.calculateInmediateNumber(1,0,6))
    .toEqual(5)
  })
})