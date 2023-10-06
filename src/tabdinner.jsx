import { useState } from "react";

const Menu = [
    {
        id:1, 
        title:"Garlic Noodles", 
        src:"https://i.ytimg.com/vi/Vws35KLBJoo/maxresdefault.jpg",
        content:"Heat the vegetable oil in a large skillet over medium heat. Add the garlic and 3 green onions and cook for 2–3 minutes, until fragrant and tender. Add the carrots and snap peas, then stir in the brown sugar and soy sauce. Add the noodles and toss for a couple of minutes, until the noodles are well-coated and the vegetables are tender. Season with salt and pepper. Serve immediately, garnished with the remaining green onion. ", 
        
    },
    {
        id:2, 
        title:"Chicken Garlic Stir Fry", 
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy3n9mDwKNz47FKF4Do8VRjwDaotaR7ompAQ&usqp=CAU",
        content:"In a large pan on medium-high heat, add 1 tablespoon of oil. Once the oil is hot, add chicken, season with salt and pepper, and sauté until cooked through and browned. Remove cooked chicken from pan and set aside. In the same pan, heat 1 tablespoon of oil and add mushrooms. When the mushrooms start to soften, add broccoli florets and stir-fry until the broccoli is tender. Remove cooked mushrooms and broccoli from the pan and set aside. Add 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant. Add the remaining sauce ingredients and stir until smooth.Return the chicken and vegetables to the saucy pan, stir until heated through. Serve with hot rice or noodles",
         
    },
    {
        id:3, 
        title:"Chicken Alfredo Pasta",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutVh5Dlffr2ZYFZIETifH0AHJhJwm5Iaqrw&usqp=CAU",
        content:"Melt the butter in a large pan over medium-high heat, then add the chicken breasts. Season with the salt, pepper, oregano, and basil. Cook 8-10 minutes, or until the chicken is fully cooked. Remove the chicken from the pan and set aside. Make the sauce: In the same pan over medium heat, melt the butter, then add the garlic. Cook until the garlic begins to soften. Stir in half of the flour at a time until incorporated. Gradually pour in the milk, stirring between additions, and cook until fully incorporated and the sauce begins to thicken. Season with the salt, pepper, oregano, and basil. Add the Parmesan cheese and stir until melted. In a large bowl, pour the sauce over cooked penne pasta, then add the chicken and toss well to combine. Add the parsley and Parmesan and toss again.",
        color:"text-brown-600"
    },
    {
        id:4, 
        title:"Steak, peach and watercress salad",
        src: "https://hips.hearstapps.com/hmg-prod/images/steaksalad-1656608263.jpg?crop=0.820xw:0.547xh;0.0969xw,0.272xh&resize=640:*",
        content:"Heat broiler. Season steak with ½ teaspoon each salt and pepper and place on broiler-proof rimmed baking sheet. Broil to desired doneness, 3 to 4 minutes per side for medium-rare. Transfer to cutting board and let rest at least 5 minutes before slicing.Meanwhile, in large bowl, whisk together oil, vinegar, and ¼ teaspoon each salt and pepper. Add peaches and toss to combine. Fold in walnuts, cheese, chives, and steak. Then fold in cress. Serve topped with additional chives if desired.",
        color:"text-brown-600"
    },
    {
        id:5, 
        title:"Air Fryer Falafel Salad",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrK-iBRQ1F0PKhgTSJCerjwpJc8UynMA0uNw&usqp=CAU",
        content:"In food processor, pulse garlic, scallion whites, and 1/2 cup baby kale until very finely chopped. Add chickpeas, lemon zest, flour, cumin, coriander, and 1/2 tsp salt and pulse to combine (chickpeas should be chopped but coarse). Form mixture into twenty-four 2-tablespoon balls.Heat air fryer to 325°F. Brush insert of basket with oil and add 12 falafel. Air-fry 15 minutes. Brush falafel with 1 tablespoon oil and increase air fryer temperature to 400°F. Air-fry until deeply golden, 4 more minutes. Repeat with remaining falafel. In large bowl, whisk together lemon juice and remaining 2 tablespoons olive oil. Add cucumbers and marinate, 5 minutes. Add remaining 6 cups baby kale, parsley, and mint leaves, scallion greens, and 1/2 tsp salt and toss. Top with falafel and dollop of yogurt.", 
        color:"text-brown-300"
    }


];

export default function Tabdinner(){

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
}><img src={item.src} alt="" className="w-full h-[450px] object-fit border-solid border-2 pb-2" />
{item.content}
                
                </div>

            ))}
        </div>
  
    </div>

    );
    
  }