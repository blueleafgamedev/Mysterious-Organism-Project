// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return console.log(dnaBases[Math.floor(Math.random() * 4)])
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (uniqueNum, dnaStrand) => {
    return {
      specimenNum: uniqueNum,
      dna: dnaStrand,
    
      mutate() {
      console.log(' ')
      const dnaCopy = dnaStrand.slice();
      let mutationIndex = Math.floor(Math.random() * 15);
      let newMutatedBase = returnRandBase();  
      
      while (newMutatedBase === dnaCopy[mutationIndex]) {
        newMutatedBase = returnRandBase;
      }
  
      dnaCopy[mutationIndex] = newMutatedBase;
      return dnaCopy;
    },
  
    compareDNA(pAequorObj) {
      let commonCount = 0;
      for (let i of pAequorObj) {
        if (this.dna[i] === pAequorObj[i]) {
          commonCount++;
        }
      }
  
      let percentCommon = (commonCount/15 * 100).toFixed(2);
      console.log(`Specimen #${this.specimenNum} and Speciment #${this.specimenNum} have ${percentCommon}% DNA in common.`)
    },
  
      willLikelySurvive() {
        let count = 0;
        for (let base of dnaStrand) {
          if (base === 'C' || base === 'G') {
            count++;
          }
        }
        if (count/15 >= 0.6) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  
  const likelySurviveList = (num) => {
    const list = [];
    let i = 0; n = 1;
    while (i < num) {
      let sample = pAequorFactory(n, mockUpStrand());
      if (sample.willLikelySurvive() === true) {
        list.push(sample);
        i++;
      }
      n++;
    }
    return list;
  }
  
  console.log(likelySurviveList(30))