import { useState } from "react";

const Menu = [
    {
        id:1, 
        title:"Bread Bites", 
        src:"https://hips.hearstapps.com/hmg-prod/images/parmesan-bread-bites3-1668724500.jpg?crop=0.949xw:0.647xh;0.0510xw,0.0186xh&resize=980:*",
        content:"Let pizza dough sit until room temperature if needed, about 1 hour. Preheat oven to 400°. Line a large baking sheet with parchment. In a small pot over low heat, melt butter. Add garlic and 1/2 teaspoon salt and cook, stirring often, until starting to froth, 4 to 6 minutes. Immediately remove pot from heat and let cool. On a lightly floured surface, stretch dough to a 9 square. Sprinkle with 1/2 cup Parmesan and gently press cheese into dough with your hands. Using a sharp knife or bench scraper, cut dough into 9 (1 inch-wide) strips. Separate each strip to keep from sticking. Cut each strip crosswise into 1 pieces. Arrange dough on prepared sheet in an even layer. Brush with about one-third of garlic butter. Sprinkle with mozzarella, sage, thyme, and remaining 1/2 cup Parmesan. Bake bread bites until golden brown, 15 to 20 minutes. Immediately brush with remaining garlic butter. Top with more Parmesan, sage, and thyme. Drizzle with hot honey",
    },
    {
        id:2, 
        title:"Artichoke Pesto Skewers", 
        src: "https://hips.hearstapps.com/hmg-prod/images/07-antipasto-bites-12409-1589576492.jpg",
        content:"In a large pot of boiling water, add 1 tablespoon oil. Cook tortellini according to package directions until al dente. Drain and transfer to large bowl. Season cooked tortellini with salt and pepper. Add balsamic vinegar and 1/4 cup olive oil and mix to combine. Set aside. Marinate mozzarella: In a small bowl, add mozzarella balls, Italian seasoning, red pepper flakes, and remaining 1/4 cup olive oil. Mix to combine and set aside. Assemble skewers by layering one piece each mozzarella, salami, roasted red pepper, tortellini, basil, artichoke heart, and green olives.",
         
    },
    {
        id:3, 
        title:"Baked Feta Bites",
        src: "https://hips.hearstapps.com/hmg-prod/images/delish-feta-bites-111121-04-jg-1637361925.jpg",
        content:"Preheat oven to 375° and adjust oven rack to center position. Roll out crescent dough and pinch together seams. Using a chef’s knife, cut into 24 squares; lengthwise into quarters and crosswise into sixths. Grease mini muffin tin with cooking spray and place squares into muffin tin slots. Fill each square with a piece of roasted red pepper, a cube of feta, and a sprinkle of thyme leaves and shallots. Season bites lightly with salt. Bake until dough is cooked through and golden, 15 to 17 minutes. Let cool 5 minutes, then transfer to serving platter and top with more fresh thyme leaves. Grate a light layer of lemon zest over bites and serve.",
        color:"text-brown-600"
    },
    {
        id:4, 
        title:"Cheeseball Bites",
        src: "https://del.h-cdn.co/assets/18/09/2048x1536/sd-aspect-1519935673-delish-cheese-ball-bites.jpg",
        content:"In a large nonstick skillet, cook bacon until crispy, 8 minutes. Drain on a paper towel-lined plate, then finely chop. Set aside. Meanwhile, in a large bowl, stir together cream cheese, cheddar cheese, garlic powder, and paprika and season with salt and pepper. Use a cookie scoop to form mixture into 18 small balls and transfer to a parchment–lined baking sheet. Refrigerate until firm, 1 hour. In a shallow bowl, stir together bacon, chives, and pecans.Roll balls in bacon-chive-pecan mixture, insert a pretzel stick into each, and let come to room temperature 15 minutes before serving. (If not serving right away, loosely cover with plastic wrap and return to fridge.)",
        color:"text-brown-600"
    },
    {
        id:5, 
        title:"Black Eyed Pea Brushcetta",
        src: "data:image/jpeg;base64,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",
        content:"Preheat oven to 350° and arrange bread slices between 2 baking sheets. Lightly drizzle with oil on both sides. Bake, flipping halfway through, until crispy and toasted, about 10 minutes. Meanwhile, in a medium skillet over medium-high heat, cook bacon, stirring occasionally, until fat begins to render and bacon starts to crisp and turn brown on all sides, 7 to 8 minutes. Using a slotted spoon, transfer bacon to paper towels to drain, reserving excess fat in skillet.In a medium bowl, massage 1/2 tsp. salt into collard greens until greens begin to release water and soften, about 2 minutes. Add peas, bell pepper, scallion, and garlic and toss until combined; season with 1/2 tsp. salt. In a small bowl, combine vinegar, thyme, mustard, honey, Cajun seasoning, and 1/4 tsp. salt. Drizzle in 1 tbsp. of reserved bacon fat and remaining 2 tbsp. oil, whisking after each tbsp., until vinaigrette is smooth and emulsified. Pour over pea mixture and toss to coat.Smear toast with a thin layer of cheese. Top with 1 tbsp. pea mixture. Sprinkle with bacon, if using.", 
        color:"text-brown-300"
    }


];

export default function Tabstarter(){

    const [activeindex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => 
       activeindex === index ? className : '' ;


    return (
    <div className="flex flex-col space-y-4">
       <div className="bg-white flex justify-between items-center space-x-8 rounded-md px-4 py-2 w-full">
            {/*Tab List*/}
            {Menu.map((item) => (
                <button key={item.id} onClick={()=> handleClick(item.id)} className={`${checkActive(item.id, "bg-white px-2 py-1 rounded-md text-indigo-600" )}`
}>
                {item.title} 
                </button> 
                ))}
        </div>
        <div className="bg-white w-full rounded-md shadow-lg text-lg p-8 text-justify">
            {/*Tab Panel*/}
            {/*{Menu.map((item) => (
                <div key={item.id} className={`
${item.color} p-2 panel 
${checkActive(item.id,"active")}`
}>{item.content}</div>
            ))};*/} 
            {Menu.map((item) => (
                <div className={`${item.color} p-2 panel ${activeindex==item.id?"block": "hidden"}
`
}><img src={item.src} alt="" className="w-full h-[450px] object-fit border-solid border-2 pb-2 align-center" />
{item.content}
                
                </div>

            ))}
        </div>
  
    </div>

    );
    
  }