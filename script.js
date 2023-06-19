console.log("Hello Word");
const dinnerDiv = document.querySelector(".dinner");
const dinnerButton = document

//callback function 

//promises 

//async await

const getMeal = async () => {
   const data = await fetch(
    "www.themealdb.com/api/json/v1/1/random.php"
    );

    const fullDataObject = await data.json();
    const myMeal = fullDataObject.meals[0];

    const mealDisplay = document.createElement ("div");

//html
//<div mealDisplay>

    mealDisplay.innerHTML = '
    <h4> ${myMeal.strMeal}</h4>
    ';

    dinnerDiv.append(mealDisplay);
   } catch(error) {
    console.log(error);
    const errorMessage = document.createElement('div');
    errorMessage.innerText = "Sorry could not load api data";
    dinnerDiv.appendn (errorMessage);
   }
   };

dinnerButton.addEventListener ("click", getMeal);