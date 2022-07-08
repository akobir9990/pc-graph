const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

const optionElements = document.querySelectorAll(".option");

const question = document.getElementById("question"),
  numberOfQuestion = document.getElementById("number__of__question"),
  numberOfAllQuestion = document.getElementById("number__of__all__question");

let indexOfQuestion,
  indexOfPage = 0;

const answersTracker = document.getElementById("answer__tracker");
const btnNext = document.getElementById("btn__next");

let score = 0;

const correctAnswer = document.getElementById("correct__answer"),
  numberOfAllQuestion2 = document.getElementById("number__of__all__question2"),
  btnTryAgain = document.getElementById("btn__try__again");

const questions = [
  {
    question: "Tekislikka parallel bo‘lgan tekis figura shu tekislikka qanday proeksiyalanadi?",
    options: ["Haqiqiy kattalikda", 
              "Kichraygan holda", 
              "Kattalashgan holda", 
              "To‘g‘ri chiziq (kesma) ko‘rinishda"],
    rightAnswer: 0,
  },
  {
    question: "Qanday tekis egri chiziqda uning har qanday nuqtasidan fokusi va direktrisasiga qadar bo’lgan masofalar o’zaro teng bo’ladi?",
    options: ["Giperbolada", 
              "Parabolada", 
              "Sikloidada", 
              "Sinusoidada"],
    rightAnswer: 1,
  },
  {
    question: "Bissektor tekisligidagi nuqta gorizontal va frontal proeksiyalar tekisligidan qanday uzoqkikda proeksiyalanadi?",
    options: ["Og`ma vaziyatda", 
              "45° burchak ostida", 
              "Proeksiyalanmaydi", 
              "Bir xil uzoqlikda"],
    rightAnswer: 3,
  },
  {
    question: "Proeksiyalovchi nurlar tekislikka og`ma bo’lib yo’naltirilgan bo’lsa, qanday proektsiya hosil bo’ladi?",
    options: ["To‘g‘ri burchakli izometrik proeksiya", 
              "Markaziy proeksiya", 
              "Qiyshiq burchakli proeksiya", 
              "Ortogonal proeksiya"],
    rightAnswer: 2,
  },
  {
    question: "Parallel proeksiyalashda tekis shakl proeksiya tekisliklariga bo’lsa, aslidan kichik bo’lib proeksiyalanadi.",
    options: ["V proeksiya tekisligiga tik bo’lsa", 
              "H proeksiya tekisligiga tik bo’lsa", 
              "Gorizontal tekislik bilan 90° burchak hosil qilsa", 
              "Proeksiya tekisliklariga og’ma bo’lsa"],
    rightAnswer: 3,
  },
  {
    question: "Doiraviy konus sirtining yoyilmasi qanday shaklda bo’ladi?",
    options: ["Uchburchak", 
              "To’rtburchak", 
              "Doira", 
              "Sektor"],
    rightAnswer: 3,
  },
  {
    question: "Sferik sirtga tekislik nima bo’yicha urinadi?",
    options: ["Ellips", 
              "To’g`ri chiziq", 
              "Nuqta", 
              "Aylana"],
    rightAnswer: 2,
  },
  {
    question: "Silindr sirtiga tekislik qanday chiziq bo’yicha urinadi?",
    options: ["To’g`ri chiziq", 
              "Aylana", 
              "Vint chizig`i", 
              "Ellips"],
    rightAnswer: 0,
  },
  {
    question: "To’g`ri doiraviy silindrning o’qi sfera markazi orqali o’tsa, ular o’zaro qanday chiziq bo’yicha kesishadi?",
    options: ["Vint chizig`i", 
              "Aylanа", 
              "Parabola", 
              "Ellips"],
    rightAnswer: 1,
  },
  {
    question: "Uchburchakli piramidaning nechta yoqlari bo’ladi?",
    options: ["Ikkita", 
              "To’rtta", 
              "Oltita", 
              "Beshta"],
    rightAnswer: 1,
  },
  {
    question: "Tetraedrning nechta yoqlari bo’ladi?",
    options: ["Oltita", 
              "To’rtta", 
              "Sakkizta", 
              "Yigirmata"],
    rightAnswer: 1,
  },
  {
    question: "Tetraedrning nechta qirrasi bor?",
    options: ["Sakkizta", 
              "Uchta", 
              "To’rtta", 
              "Oltita"],
    rightAnswer: 3,
  },
  {
    question: "H ga perpendikulyar AB kesmaning V dagi proektsiyasi OX o’qqa nisbatan qanday ko’rinishda bo’ladi?",
    options: ["Perpendikulyar", 
              "Parallel", 
              "45° burchak ostida", 
              "60° burchak ostida"],
    rightAnswer: 0,
  },
  {
    question: "Muntazam oltiyoqlik nima deb ataladi?",
    options: ["Ikosaedr", 
              "Geksaedr (kub)", 
              "Oktaedr", 
              "Dodekaedr"],
    rightAnswer: 1,
  },
  {
    question: "Vertikal o’qli to’g`ri doiraviy konusning V dagi proektsiyasi qanday shaklga ega?",
    options: ["Uchburchak", 
              "To’rtburchak", 
              "Aylana", 
              "Ellips"],
    rightAnswer: 0,
  },
  {
    question: "Qanday to’g`ri to’rtburchakli ko’pyoqlikning hamma yoqlari va qirralari teng?",
    options: ["Dodekaedr", 
              "Kub", 
              "Piramida", 
              "Dodekaedr"],
    rightAnswer: 1,
  },
  {
    question: "Frontal tekislikdagi ABC uchburchak V ga qanday ko’rinishda tasvirlanadi?",
    options: ["Haqiqiy kattalikda", 
              "Kichraygan", 
              "Kesmako’rinishida", 
              "Kattalashgan"],
    rightAnswer: 0,
  },
  {
    question: "Sferaning eng katta paralleli nima deb ataladi?",
    options: ["Ekvator", 
              "Bosh meridian", 
              "Katta parallel", 
              "Qutb"],
    rightAnswer: 0,
  },
  {
    question: "Tekis egri chiziq deb qanday chiziqqa aytiladi?",
    options: ["Hamma nuqtalari bir to’g`ri chiziqda yotgan chiziq", 
              "Hamma nuqtalari qiyshiq tekislikda yotgan chiziq", 
              "Hamma nuqtalari silindr sirtida yotgan chiziq", 
              "Hamma nuqtalari bir tekislikda yotgan chiziq"],
    rightAnswer: 3,
  },
  {
    question: "Qaysi javobda faqat ikkinchi tartibli egri chiziqlar berilgan?",
    options: ["Aylana, giperbola, sinusoida, ellips", 
              "Oval, ellips, parabola, Arximed spirali", 
              "Giperbola, aylana, ellips, parabola", 
              "Ellips, aylana evolventasi, giperbola"],
    rightAnswer: 2,
  },
  {
    question: "Koordinatalar AX=40, AY =-40, AZ=-50 bo’lgan A nuqta fazoning qaysi qismida joylashgan bo’ladi?",
    options: ["2-oktant", 
              "4-oktant", 
              "3-oktant", 
              "1-oktantda"],
    rightAnswer: 2,
  },
  {
    question: "Parallel proeksiyalashda proeksiyalovchi nur proeksiya tekisligiga perpendikulyar bo’lsa, qanday proeksiyalash hosil bo’ladi.",
    options: ["Qiyshiq burchakli parallel proyeksiyalash", 
              "Qiyshiq burchakli aksonometrik proyeksiya", 
              "To’g`ri burchakli", 
              "Markaziy"],
    rightAnswer: 2,
  },
  {
    question: "Qanday aylanish sirtining hamma yasovchilari bitta nuqtada kesishadi?",
    options: ["Konus", 
              "Silindr", 
              "Sfera", 
              "Tor"],
    rightAnswer: 0,
  },
  {
    question: "Qanday sirtning hamma qirralari kesishgan nuqtasi uning uchi deyiladi?",
    options: ["Piramida", 
              "Shar", 
              "Paraboloid", 
              "Prizma"],
    rightAnswer: 0,
  },
  {
    question: "Oltita bir xil kattalikdagi kvadratlardan tashkil topgan ko’pyoqlik nima deyiladi?",
    options: ["Geksaedr", 
              "Tetraedr", 
              "Ikosaedr", 
              "Oktaedr"],
    rightAnswer: 0,
  },
  {
    question: "Ko’pyoqlikning ikki yog`ini kesishgan chizig`i qanday nomlanadi?",
    options: ["Asos", 
              "Diogonal", 
              "Qirra", 
              "Uch"],
    rightAnswer: 2,
  },
  {
    question: "Hamma tomonidan tekis ko’pburchaklar (yoqlar) bilan chegaralangan jism nima deyiladi?",
    options: ["Konus", 
              "Ko’pyoq", 
              "Silindr", 
              "Shar"],
    rightAnswer: 1,
  },
  {
    question: "Ko’pyoqlik geksaedr nechta yoqdan tashkil topgan?",
    options: ["Oltita", 
              "To’rtta", 
              "O’nta", 
              "O’n ikkita"],
    rightAnswer: 0,
  },
  {
    question: "To’g`ri chiziq kesmasi H tekisligiga parallel bo’lsa uning gorizontal proeksiyasi qanday tasvirlanadi?",
    options: ["Haqiqiy uzunligida", 
              "Qisqarib", 
              "Kattalashib", 
              "Nuqta ko’rinishida"],
    rightAnswer: 0,
  },
  {
    question: "To’g`ri chiziq kesmasi V tekisligiga parallel bo’lsa, uning frontal proeksiyasi qanday tasvirlanadi?",
    options: ["Haqiqiy uzunligida", 
              "Qisqarib", 
              "Nuqta ko’rinishida", 
              "Kattalashib"],
    rightAnswer: 0,
  },
  {
    question: "To’g`ri chiziq kesmasi W tekisligiga parallel bo’lsa uning profil proeksiyasi qanday tasvirlanadi?",
    options: ["Haqiqiy uzunligida", 
              "Kattalashib", 
              "Qisqarib", 
              "Nuqta ko’rinishida"],
    rightAnswer: 0,
  },
  {
    question: "To’g`ri chiziq kesmasi V tekisligiga perpendikulyar bo’lsa uning frontal proeksiyasi qanday ko’rinishda bo’ladi?",
    options: ["Kattalashib", 
              "Nuqta ko’rinishida", 
              "Haqiqiy uzunligida", 
              "To’g`ri chiziq"],
    rightAnswer: 1,
  },
  {
    question: "To’g`ri chiziq kesmasi W tekisligiga perpendikulyar bo’lsa uning profil proeksiyasi qanday ko’rinishda bo’ladi?",
    options: ["Haqiqiy uzunligida", 
              "To’g`ri chiziq", 
              "Nuqta ko’rinishida", 
              "Kattalashib"],
    rightAnswer: 2,
  },
  {
    question: "To’g`ri chiziq kesmasi H tekisligiga og`ma vaziyatda bo’lsa, ortogonal proeksiyalashda, u shu tekislikka qanday proeksiyalanadi?",
    options: ["Haqiqiy uzunligida", 
              "Qisqarib", 
              "Kattalashib", 
              "Nuqta ko’rinishida"],
    rightAnswer: 1,
  },
  {
    question: "To’g`ri chiziq kesmasi V tekisligiga og`ma vaziyatda bo’lsa, ortogonal proeksiyalashda, ushbu tekislikka qanday proeksiyalanadi? ",
    options: ["Kattalashib", 
              "Qisqarib", 
              "Nuqtako’rinishida", 
              "Haqiqiyuzunligida"],
    rightAnswer: 1,
  },
  {
    question: "To’g`ri chiziq kesmasi W tekisligiga og`ma vaziyatda bo’lsa, ortogonal proeksiyalashda, u shu tekislikka qanday proeksiyalanadi?",
    options: ["Qisqarib", 
              "Haqiqiy uzunligida", 
              "Kattalashib", 
              "Nuqta ko’rinishida"],
    rightAnswer: 0,
  },
  {
    question: "ABC uchburchak tekisligi barcha proeksiyalar tekisliklariga nisbatan og`ma vaziyatda bo’lsa, u qanday tekislik deyiladi?",
    options: ["Profil", 
              "Gorizontal", 
              "Proeksiyalovchi", 
              "Umumiy vaziyatdagi"],
    rightAnswer: 3,
  },
  {
    question: "Biror tekislik proeksiyalar tekisliklaridan biriga perpendikulyar bo’lsa, u qanday tekislik deyiladi?",
    options: ["Profil", 
              "Gorizontal", 
              "Proeksiyalovchi", 
              "Umumiy vaziyatdagi"],
    rightAnswer: 2,
  },
  {
    question: "H ga parallel tekislik qanday nomlanadi?",
    options: ["Umumiy vaziyatdagi", 
              "Profil", 
              "Gorizontal", 
              "Proeksiyalovchi"],
    rightAnswer: 2,
  },
  {
    question: "V ga parallel tekislik qanday nomlanadi?",
    options: ["Profiltekislik", 
              "Frontaltekislik", 
              "Umumiy vaziyatdagitekislik", 
              "Gorizontaltekislik"],
    rightAnswer: 1,
  },
  {
    question: "W ga parallel tekislik qanday nomlanadi?",
    options: ["Profil tekislik", 
              "Frontal tekislik", 
              "Umumiy vaziyatdagi tekislik", 
              "Gorizontal tekislik"],
    rightAnswer: 1,
  },
  {
    question: "H ga perpendikulyar to’g`ri chiziq qanday nomlanadi?",
    options: ["Gorizontal proeksiyalovchi chiziq", 
              "Frontal proektsiyalovchi chiziq", 
              "Umumiy vaziyatdagi chiziq", 
              "Profil proeksiyalovchi chiziq"],
    rightAnswer: 0,
  },
  {
    question: "V ga perpendikulyar to’g`ri chiziq qanday nomlanadi?",
    options: ["Profil proeksiyalovchi chiziq", 
              "Gorizontal proeksiyalovchi chiziq", 
              "Frontal proeksiyalovchi chiziq", 
              "Umumiy vaziyatdagi chiziq"],
    rightAnswer: 2,
  },
  {
    question: "W ga perpendikulyar to’g`ri chiziq qanday nomlanadi?",
    options: ["Gorizontal proeksiyalovchi chiziq", 
              "Profil proeksiyalovchi chiziq", 
              "Umumiy vaziyatdagi chiziq", 
              "Frontal proeksiyalovchi chiziq"],
    rightAnswer: 1,
  },
  {
    question: "To’g`ri doiraviy konusning yasovchilariga nisbatan kesuvchi tekislik qanday vaziyatda o’tkazilsa, kesimda parabola chizig`i hosil bo’ladi?",
    options: ["Konus o’qiga perpendikulyar bo‘lsa", 
              "Ikkita yasovchisiga parallel bo‘lsa", 
              "Barcha yasovchilarini kesuvchi bo‘lsa", 
              "Bitta yasovchisiga parallel bo‘lsa"],
    rightAnswer: 3,
  },
  {
    question: "To’g`ri doiraviy konusning yasovchilariga nisbatan kesuvchi tekislik qanday vaziyatda o’tkazilsa, kesimda ellips chizig`i hosil bo’ladi?",
    options: ["Bitta yasovchisiga parallel bo‘lsa", 
              "Ikkita yasovchisiga parallel bo‘lsa", 
              "Barcha yasovchilarini kesuvchi bo‘lsa", 
              "Konus o’qiga perpendikulyar bo‘lsa"],
    rightAnswer: 2,
  },
  {
    question: "To’g`ri doiraviy konusning yasovchilariga nisbatan kesuvchi tekislik qanday vaziyatda o’tkazilsa, kesimdagi perbola chizig`i hosil bo’ladi?",
    options: ["Konus o’qiga perpendikulyar bo‘lsa", 
              "Bitta yasovchisiga parallel bo‘lsa", 
              "Barcha yasovchilarini kesuvchi bo‘lsa", 
              "Ikkita yasovchisiga parallel bo‘lsa"],
    rightAnswer: 3,
  },
  {
    question: "To’g`ri doiraviy konusning yasovchilariga nisbatan kesuvchi tekislik qanday vaziyatda o’tkazilsa, Kesimda aylana hosil bo’ladi?  ",
    options: ["Konus o’qiga perpendikulyar bo‘lsa", 
              "Barcha asovchilarini kesuvchi bo‘lsa", 
              "Ikkita yasovchisiga parallel bo‘lsa", 
              "Ikkita yasovchisiga parallel bo‘lsa"],
    rightAnswer: 0,
  },
  {
    question: "Tetraedr deganda qanday ko’pyoqlikni tasavvur qilasiz?",
    options: ["Muntazam uch yoqli piramidani", 
              "Prizmani", 
              "Kubni", 
              "Og`ma prizmani"],
    rightAnswer: 0,
  },
  {
    question: "Tekislikning frontal chizig`i uning qaysi iziga parallel bo’ladi?",
    options: ["Profil iziga", 
              "Gorizontal iziga", 
              "Frontal iziga", 
              "Eng katta og’ma chizig’iga"],
    rightAnswer: 2,
  },
];

numberOfAllQuestion.innerHTML = questions.length;

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;

  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1;
  indexOfPage++;
};

let complatedAnswer = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitdublicate = false;

  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (complatedAnswer.length > 0) {
      complatedAnswer.forEach((item) => {
        if (item == randomNumber) {
          hitdublicate = true;
        }
      });
      if (hitdublicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    };
    if (complatedAnswer == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  };
  complatedAnswer.push(indexOfQuestion);
};

const checkAnswer = el => {
  if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    el.target.classList.add('wrong');
    updateAnswerTracker('wrong');
  }
  disabledOptions();
}

const disabledOptions = () => {
  optionElements.forEach(item => {
    item.classList.add('disabled');
    if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add('correct');
    }
  })
}

const enableOptions = () => {
  optionElements.forEach(item => {
    item.classList.remove('disabled', 'correct', 'wrong');
  })
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
};

const updateAnswerTracker = status => {
  console.log(answersTracker.children);
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

for(option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}

const validate = () => {
  if(!optionElements[0].classList.contains('disabled')) {
    alert('Siz savolga javob bermadinggiz keyingi savolni ko`rish uchun javoblardan birini belgilang');
  } else {
    randomQuestion();
    enableOptions();
  }
};

btnNext.addEventListener('click', validate);

for (option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}



const quizOver = () => {
  if(numberOfQuestion = numberOfAllQuestion) () =>{
  document.querySelector('.quiz__over__modle').classList.add('active');
  correctAnswer.innerHTML = score;
  numberOfAllQuestion2.innerHTML = questions.length;
}};

const tryAgain = () => {
  window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener("load", () => {
  randomQuestion();
  answerTracker();
});
