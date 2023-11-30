let dogBreeds = [
    {
      breed: "Golden Retriever",
      size: "Large",
      weight: "70 lbs",
      shedding: "High",
      life_expectancy: "10",
      barking: "Moderate",
      energy: "High",
      trainability: "High",
      protectiveness: "Low",
      alargy: "Low",
    },
    {
      breed: "French Bulldog",
      size: "Small",
      weight: "24 lbs",
      shedding: "Low",
      life_expectancy: "10",
      barking: "Low",
      energy: "Low",
      trainability: "Moderate",
      protectiveness: "Moderate",
      alargy: "Low",
    },
    {
      breed: "German Shepherd",
      size: "Large",
      weight: "80 lbs",
      shedding: "High",
      life_expectancy: "9",
      barking: "High",
      energy: "High",
      trainability: "High",
      protectiveness: "High",
    },
    {
      breed: "Beagle",
      size: "Medium",
      weight: "20 lbs",
      shedding: "Moderate",
      life_expectancy: "10",
      barking: "High",
      energy: "High",
      trainability: "Moderate",
      protectiveness: "Low",
    },
    {
      breed: "Poodle",
      size: "Varies",
      weight: "Varies",
      shedding: "Low",
      life_expectancy: "10",
      barking: "Low",
      energy: "High",
      trainability: "High",
      protectiveness: "Moderate",
    },
    {
      breed: "Siberian Husky",
      size: "Large",
      weight: "50 lbs",
      shedding: "High",
      life_expectancy: "12",
      barking: "Moderate",
      energy: "High",
      trainability: "Moderate",
      protectiveness: "Moderate",
    },
    {
      breed: "Chihuahua",
      size: "Small",
      weight: "5 lbs",
      shedding: "Low",
      life_expectancy: "14",
      barking: "High",
      energy: "Medium",
      trainability: "Medium",
      protectiveness: "High",
    },
    {
      breed: "Labrador Retriever",
      size: "Large",
      weight: "70 lbs",
      shedding: "High",
      life_expectancy: "10",
      barking: "Low",
      energy: "High",
      trainability: "High",
      protectiveness: "Low",
    },
    {
      breed: "Dachshund",
      size: "Small",
      weight: "24 lbs",
      shedding: "Medium",
      life_expectancy: "12",
      barking: "High",
      energy: "Medium",
      trainability: "Medium",
      protectiveness: "High",
    },
    {
      breed: "Rottweiler",
      size: "Large",
      weight: "110 lbs",
      shedding: "Medium",
      life_expectancy: "8",
      barking: "Low",
      energy: "Medium",
      trainability: "High",
      protectiveness: "High",
    },
    {
      breed: "Boxer",
      size: "Large",
      weight: "65 lbs",
      shedding: "Low",
      life_expectancy: "10",
      barking: "Low",
      energy: "High",
      trainability: "High",
      protectiveness: "High",
    },
    {
      breed: "Bulldog",
      size: "Medium",
      weight: "45 lbs",
      shedding: "Low",
      life_expectancy: "8",
      barking: "Low",
      energy: "Low",
      trainability: "Medium",
      protectiveness: "Medium",
    },
    {
      breed: "Yorkshire Terrier",
      size: "Small",
      weight: "5 lbs",
      shedding: "Low",
      life_expectancy: "13",
      barking: "High",
      energy: "Medium",
      trainability: "High",
      protectiveness: "Medium",
    },
    {
      breed: "Pomeranian",
      size: "Small",
      weight: "5 lbs",
      shedding: "High",
      life_expectancy: "12",
      barking: "High",
      energy: "Medium",
      trainability: "Medium",
      protectiveness: "Medium",
    },
    {
      breed: "Shih Tzu",
      size: "Small",
      weight: "13 lbs",
      shedding: "Low",
      life_expectancy: "10",
      barking: "Low",
      energy: "Low",
      trainability: "Medium",
      protectiveness: "Low",
    },
    {
      breed: "Great Dane",
      size: "Giant",
      weight: "145 lbs",
      shedding: "Medium",
      life_expectancy: "7",
      barking: "Low",
      energy: "Medium",
      trainability: "Medium",
      protectiveness: "High",
    },
    {
      breed: "Bichon Frise",
      size: "Small",
      weight: "15 lbs",
      shedding: "Low",
      life_expectancy: "14",
      barking: "Medium",
      energy: "High",
      trainability: "High",
      protectiveness: "Low",
    },
    {
      breed: "Cocker Spaniel",
      size: "Medium",
      weight: "25 lbs",
      shedding: "Medium",
      life_expectancy: "10",
      barking: "Medium",
      energy: "High",
      trainability: "High",
      protectiveness: "Medium",
    },
    {
      breed: "Doberman Pinscher",
      size: "Large",
      weight: "80 lbs",
      shedding: "Low",
      life_expectancy: "10",
      barking: "High",
      energy: "High",
      trainability: "High",
      protectiveness: "Very High",
    },
    {
      breed: "Cavalier King Charles Spaniel",
      size: "Small",
      weight: "15 lbs",
      shedding: "Medium",
      life_expectancy: "9",
      barking: "Low",
      energy: "Medium",
      trainability: "High",
      protectiveness: "Low",
    },
    {
      breed: "Border Collie",
      size: "Medium",
      weight: "35 lbs",
      shedding: "High",
      life_expectancy: "10",
      barking: "Medium",
      energy: "Very High",
      trainability: "Very High",
      protectiveness: "Medium",
    },
    {
      breed: "Saint Bernard",
      size: "Giant",
      weight: "150 lbs",
      shedding: "High",
      life_expectancy: "8",
      barking: "Low",
      energy: "Low",
      trainability: "Medium",
      protectiveness: "High",
    },
    {
      breed: "Pug",
      size: "Small",
      weight: "16 lbs",
      shedding: "Medium",
      life_expectancy: "12",
      barking: "Low",
      energy: "Low",
      trainability: "Medium",
      protectiveness: "Low",
    },
    {
      breed: "Dalmatian",
      size: "Large",
      weight: "60 lbs",
      shedding: "High",
      life_expectancy: "10",
      barking: "High",
      energy: "High",
      trainability: "Medium",
      protectiveness: "Medium",
    },
    {
      breed: "Australian Shepherd",
      size: "Medium",
      weight: "55 lbs",
      shedding: "High",
      life_expectancy: "13",
      barking: "Medium",
      energy: "High",
      trainability: "High",
      protectiveness: "High",
    },
    {
      breed: "Staffordshire Bull Terrier",
      size: "Medium",
      weight: "30 lbs",
      shedding: "Low",
      life_expectancy: "12",
      barking: "Low",
      energy: "High",
      trainability: "High",
      protectiveness: "High",
    },
    {
      breed: "Shetland Sheepdog",
      size: "Small",
      weight: "20 lbs",
      shedding: "High",
      life_expectancy: "12",
      barking: "High",
      energy: "High",
      trainability: "High",
      protectiveness: "High",
    },
    {
      breed: "Mastiff",
      size: "Giant",
      weight: "175 lbs",
      shedding: "Medium",
      life_expectancy: "6",
      barking: "Low",
      energy: "Low",
      trainability: "Medium",
      protectiveness: "Very High",
    },
    {
      breed: "Brittany",
      size: "Medium",
      weight: "35 lbs",
      shedding: "Medium",
      life_expectancy: "10",
      barking: "Medium",
      energy: "High",
      trainability: "High",
      protectiveness: "Medium",
    },
    {
      breed: "English Springer Spaniel",
      size: "Medium",
      weight: "45 lbs",
      shedding: "Medium",
      life_expectancy: "12",
      barking: "Medium",
      energy: "High",
      trainability: "High",
      protectiveness: "Medium",
    },
  
    {
      breed: "German Shorthaired Pointer",
      size: "Large",
      weight: "60 lbs",
      shedding: "Low",
      life_expectancy: "12",
      barking: "Medium",
      energy: "Very High",
      trainability: "High",
      protectiveness: "Medium",
    },
    {
      breed: "Weimaraner",
      size: "Large",
      weight: "70 lbs",
      shedding: "Low",
      life_expectancy: "10",
      barking: "Medium",
      energy: "Very High",
      trainability: "High",
      protectiveness: "Medium",
    },
    {
      breed: "Akita",
      size: "Large",
      weight: "100 lbs",
      shedding: "High",
      life_expectancy: "10",
      barking: "Low",
      energy: "Medium",
      trainability: "Medium",
      protectiveness: "Very High",
    },
  ];
  
  localStorage.setItem("dogBreeds", JSON.stringify(dogBreeds));
  
  // algo for matching the user's input to the top 3 dog breeds
  
  const convertToScore = () => {
    let map = {
      size: {
        Small: 1,
        Medium: 2,
        Large: 3,
        Giant: 4,
      }, // q2
      weight: {
        "5 lbs": 1,
        "13 lbs": 1,
        "15 lbs": 1,
        "16 lbs": 1,
        "20 lbs": 1,
        "24 lbs": 2,
        "25 lbs": 2,
        "30 lbs": 2,
        "35 lbs": 2,
        "45 lbs": 2,
        "50 lbs": 3,
        "55 lbs": 3,
        "60 lbs": 3,
        "65 lbs": 3,
        "70 lbs": 4,
        "80 lbs": 4,
        "100 lbs": 4,
        "110 lbs": 4,
        "145 lbs": 4,
        "150 lbs": 4,
        "175 lbs": 4,
      }, // q3
      shedding: {
        Low: 1,
        Moderate: 2,
        Medium: 3,
        High: 4,
      }, // q4
      life_expectancy: {
        6: 1,
        7: 1,
        8: 2,
        9: 2,
        10: 3,
        11: 3,
        12: 4,
        13: 4,
        14: 4,
      }, // q5
      barking: {
        Low: 1,
        Moderate: 2,
        Medium: 3,
        High: 4,
      }, // q6
      energy: {
        Low: 1,
        Moderate: 2,
        Medium: 3,
        High: 4,
      }, //  q7
      trainability: {
        Low: 1,
        Moderate: 2,
        Medium: 3,
        High: 4,
      }, // q8
      protectiveness: {
        Low: 1,
        Moderate: 2,
        Medium: 3,
        High: 4,
      }, // q9
      alargy: {
        Low: 1,
        Moderate: 2,
        Medium: 3,
        High: 4,
      }, // q1,
    };
  
    // use a for loop to iterate over the dog breeds array to changs the words to numbers
  
    for (let i = 0; i < dogBreeds.length; i++) {
      let breed = dogBreeds[i];
      breed.size = map.size[breed.size];
      breed.weight = map.weight[breed.weight];
      breed.shedding = map.shedding[breed.shedding];
      breed.life_expectancy = map.life_expectancy[breed.life_expectancy];
      breed.barking = map.barking[breed.barking];
      breed.energy = map.energy[breed.energy];
      breed.trainability = map.trainability[breed.trainability];
      breed.protectiveness = map.protectiveness[breed.protectiveness];
      // breed.alargy = map.alargy[breed.alargy];
    }
  };
  
  // array of user answers
  // const answers = [
  //   1, // alargy
  //   3, // size
  //   4, // weight
  //   5, // shedding
  //   3, // life expectancy
  //   2, // barking
  //   5, // energy
  //   5, // trainability
  //   1, // protectiveness
  
  // ];
  
  // // function to replace the words with numbers
  // console.log( dogBreeds[0])
  // console.log( dogBreeds[1])
  
  // get the total of all the scores for each dog breed
  function getScore(dog) {
    return (
      dog.size +
      dog.weight +
      dog.shedding +
      dog.life_expectancy +
      dog.barking +
      dog.energy +
      dog.trainability +
      dog.protectiveness
    );
  }
  // function to get the best 3 matches based on the user's answers
  
  const getBestMatches = () => {
    localStorage.clear("bestMatches");
    let bestMatches = [];
  
    // get the user's answers from local storage
    // const userRes = JSON.parse(localStorage.getItem("answers"));
  
    // total score of user answers is 29
    for (let i = 0; i < answers.length; i++) {
      answers[i] = parseInt(answers[i]);
    }
  
    let totalScore = answers.reduce((a, b) => a + b, 0);
    if (totalScore === 0 || totalScore === null || totalScore > 35) {
      totalScore = 31;
    }
    // const totalScore = 31;
    console.log(totalScore);
    convertToScore();
  
    for (let i = 0; i < dogBreeds.length; i++) {
      // push the dog breed that's closest to the user's answers
  
      const lowest = totalScore - 6;
      const highest = totalScore + 8;
  
      if (getScore(dogBreeds[i]) >= lowest && getScore(dogBreeds[i]) <= highest) {
        bestMatches.push(dogBreeds[i]);
      }
    }
    // now since the array is smaller, we can still get the best 3 matches or more based on the user's answers
    let weightMatch = [];
    let sheddingMatch = [];
    let barkingMatch = [];
    let lifeExpectancyMatch = [];
    for (let i = 0; i < bestMatches.length; i++) {
      // based on weight
  
      if (bestMatches[i].weight <= answers[2]) {
        weightMatch.push(bestMatches[i]);
      }
    }
  
    for (let i = 0; i < weightMatch.length; i++) {
      // based on shedding
      if (weightMatch[i].shedding <= answers[3]) {
        sheddingMatch.push(weightMatch[i]);
      }
    }
  
    for (let i = 0; i < sheddingMatch.length; i++) {
      // based on barking
      if (sheddingMatch[i].barking <= answers[5]) {
        barkingMatch.push(sheddingMatch[i]);
      }
    }
  
    for (let i = 0; i < barkingMatch.length; i++) {
      // based on life expectancy
      if (barkingMatch[i].life_expectancy <= answers[4]) {
        lifeExpectancyMatch.push(barkingMatch[i]);
      }
    }
  
    console.log("Best matches\n", bestMatches);
    console.log(weightMatch);
    console.log(sheddingMatch);
    console.log(barkingMatch);
    console.log(lifeExpectancyMatch);
  
    // get the top 3 matches
  
    // push the top 3 matches to local storage
    // localStorage.setItem("bestMatches", JSON.stringify(lifeExpectancyMatch));
    if(lifeExpectancyMatch.length > 3){
      lifeExpectancyMatch = lifeExpectancyMatch.slice(0,3)
    }
    return lifeExpectancyMatch;
  };
  