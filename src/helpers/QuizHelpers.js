import DATA from '../constants/QuizData';

export default class {
  
  static getPrevQuizStep(stepName) {
    const keys = Object.keys(DATA);
    return keys[keys.indexOf(stepName)-1];
  }

  static getNextQuizStep(stepName) {
    const currentStep = this.findStep(stepName);
    console.log(currentStep.indexOf(currentStep)-1);
  }

  static findStep(name) {
    return DATA.find(o => o.id === name);
  }

  static underscoreName(name) {
    return name.split("_").join("-");
  }

 };
